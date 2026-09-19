/**
 * Eski sitedeki JPEG/PNG görselleri responsive WebP setlerine dönüştürür ve
 * src/data/media.json manifestini üretir.
 *
 * Build sırasında DEĞİL, içerik değiştiğinde elle çalıştırılır (`npm run media`).
 * Böylece Vercel build'i saniyeler sürer ve çıktı deterministik olur.
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { EXTERIOR, INTERIOR, SITE_PLANS, MAPS, PHOTO_WIDTHS, PLAN_WIDTHS } from './media-sources.mjs';

const LEGACY_ROOT = process.env.LEGACY_ROOT ?? '/Users/furkan.tanriverdi/Downloads/public_html';
const PROJECT_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUTPUT_ROOT = join(PROJECT_ROOT, 'public', 'media');
const MANIFEST_PATH = join(PROJECT_ROOT, 'src', 'data', 'media.json');

const PHOTO_QUALITY = 74;
const PLAN_QUALITY = 82;
const LQIP_WIDTH = 24;

const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

/** Kaynaktan büyük genişlikleri ele — upscale kalite kaybıdır, boyut israfıdır. */
const usableWidths = (requested, sourceWidth) => {
  const fitting = requested.filter((width) => width <= sourceWidth);
  return fitting.length > 0 ? fitting : [sourceWidth];
};

const buildLqip = async (pipeline) => {
  const buffer = await pipeline
    .clone()
    .resize({ width: LQIP_WIDTH })
    .webp({ quality: 40, effort: 6 })
    .toBuffer();
  return `data:image/webp;base64,${buffer.toString('base64')}`;
};

const renderVariants = async ({ pipeline, widths, quality, outDir, name }) => {
  await mkdir(outDir, { recursive: true });
  const written = [];
  for (const width of widths) {
    const file = join(outDir, `${name}-${width}.webp`);
    await pipeline.clone().resize({ width, withoutEnlargement: true }).webp({ quality, effort: 5 }).toFile(file);
    written.push(width);
  }
  return written;
};

/**
 * Tek bir kaynağı işler ve manifest kaydını döndürür.
 * Kaynak bulunamazsa hata fırlatmaz, null döner — eksikler toplu raporlanır.
 */
const processOne = async ({ id, file, category, widths, quality }) => {
  const sourcePath = join(LEGACY_ROOT, file);
  if (!(await exists(sourcePath))) return { key: `${category}/${id}`, error: `kaynak yok: ${file}` };

  const pipeline = sharp(sourcePath).rotate();
  const { width: sourceWidth, height: sourceHeight } = await pipeline.metadata();
  if (!sourceWidth || !sourceHeight) return { key: `${category}/${id}`, error: `ölçü okunamadı: ${file}` };

  const outDir = join(OUTPUT_ROOT, category);
  const targets = usableWidths(widths, sourceWidth);
  const rendered = await renderVariants({ pipeline, widths: targets, quality, outDir, name: id });
  const lqip = await buildLqip(pipeline);

  return {
    key: `${category}/${id}`,
    entry: {
      base: `/media/${category}/${id}`,
      widths: rendered,
      width: sourceWidth,
      height: sourceHeight,
      lqip,
    },
  };
};

const collectPlanSources = async () => {
  const units = JSON.parse(await (await import('node:fs/promises')).readFile(join(PROJECT_ROOT, 'src/data/units.json'), 'utf8'));
  const seen = new Map();
  for (const unit of units) {
    for (const floor of unit.floors) {
      if (!floor.planImage) continue;
      const id = `${unit.block}-${unit.position}-${floor.slug}`.toLowerCase();
      if (!seen.has(id)) seen.set(id, { id, file: floor.planImage });
    }
  }
  return [...seen.values()];
};

const run = async () => {
  const planSources = await collectPlanSources();

  const jobs = [
    ...EXTERIOR.map((item) => ({ ...item, category: 'exterior', widths: PHOTO_WIDTHS, quality: PHOTO_QUALITY })),
    ...INTERIOR.map((item) => ({ ...item, category: 'interior', widths: PHOTO_WIDTHS, quality: PHOTO_QUALITY })),
    ...SITE_PLANS.map((item) => ({ ...item, category: 'siteplan', widths: PLAN_WIDTHS, quality: PLAN_QUALITY })),
    ...MAPS.map((item) => ({ ...item, category: 'map', widths: PLAN_WIDTHS, quality: PLAN_QUALITY })),
    ...planSources.map((item) => ({ ...item, category: 'plan', widths: PLAN_WIDTHS, quality: PLAN_QUALITY })),
  ];

  const results = [];
  for (const job of jobs) {
    results.push(await processOne(job));
  }

  const failures = results.filter((result) => result.error);
  const manifest = Object.fromEntries(
    results
      .filter((result) => result.entry)
      .map((result) => [result.key, result.entry]),
  );

  await mkdir(dirname(MANIFEST_PATH), { recursive: true });
  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  console.log(`${Object.keys(manifest).length} görsel işlendi -> public/media/`);
  if (failures.length > 0) {
    console.warn(`Atlanan ${failures.length} kaynak:`);
    for (const failure of failures) console.warn(`  - ${failure.key}: ${failure.error}`);
  }
};

run().catch((error) => {
  console.error('Görsel hattı başarısız:', error);
  process.exit(1);
});
