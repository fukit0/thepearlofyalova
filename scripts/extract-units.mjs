/**
 * Eski public_html kat planı sayfalarından daire verisini çıkarır.
 * Çıktı: src/data/units.json
 * Tek seferlik migrasyon aracı; sonuç commit edilir, build'e dahil değildir.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const LEGACY_ROOT = '/Users/furkan.tanriverdi/Downloads/public_html';
const OUT_PATH = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'units.json');

const BLOCKS = ['a', 'b', 'c'];
const POSITIONS = [
  { slug: 'on_sag', tr: 'Ön Sağ' },
  { slug: 'on_sol', tr: 'Ön Sol' },
  { slug: 'on_orta', tr: 'Ön Orta' },
  { slug: 'arka_sag', tr: 'Arka Sağ' },
  { slug: 'arka_sol', tr: 'Arka Sol' },
  { slug: 'arka_orta', tr: 'Arka Orta' },
];

const FLOOR_BUTTON_RE =
  /<a href="([a-z_0-9]+\.html)"[^>]*>\s*([^<]+?)\s+(\d\+\d)\s+(\d+)\s*m<sup>2<\/sup>\s*<\/a>/g;

const PLAN_IMG_RE = /<a href="(images[^"]+big_[^"]+\.jpg)"[^>]*class="highslide"[^>]*>\s*<img src="(images[^"]+)"/;

const normalizePath = (p) => p.replace(/\\/g, '/');

const floorSlug = (label) => {
  const trimmed = label.trim().toLocaleLowerCase('tr');
  if (trimmed.startsWith('zemin')) return 'zemin';
  const match = trimmed.match(/^(\d)\./);
  return match ? `${match[1]}kat` : trimmed.replace(/\s+/g, '-');
};

const readPage = (file) => {
  const full = join(LEGACY_ROOT, file);
  return existsSync(full) ? readFileSync(full, 'latin1') : null;
};

const parseFloors = (html) => {
  const floors = [];
  for (const [, href, label, layout, area] of html.matchAll(FLOOR_BUTTON_RE)) {
    floors.push({
      slug: floorSlug(label),
      label: label.trim(),
      layout,
      areaM2: Number(area),
      sourcePage: href,
    });
  }
  return floors;
};

const collect = () => {
  const units = [];
  const missing = [];

  for (const block of BLOCKS) {
    for (const position of POSITIONS) {
      const entryPage = `${block}_${position.slug}_zemin.html`;
      const html = readPage(entryPage);
      if (!html) {
        missing.push(entryPage);
        continue;
      }

      const floors = parseFloors(html).map((floor) => {
        const floorHtml = readPage(floor.sourcePage);
        const planMatch = floorHtml?.match(PLAN_IMG_RE);
        return {
          slug: floor.slug,
          label: floor.label,
          layout: floor.layout,
          areaM2: floor.areaM2,
          planImage: planMatch ? normalizePath(planMatch[1]) : null,
          planThumb: planMatch ? normalizePath(planMatch[2]) : null,
        };
      });

      if (floors.length === 0) {
        missing.push(`${entryPage} (kat listesi bulunamadı)`);
        continue;
      }

      units.push({
        block: block.toUpperCase(),
        position: position.slug.replace(/_/g, '-'),
        positionTr: position.tr,
        floors,
      });
    }
  }

  return { units, missing };
};

const { units, missing } = collect();

if (missing.length > 0) {
  console.warn(`Uyarı — okunamayan ${missing.length} kaynak:\n  ${missing.join('\n  ')}`);
}

if (units.length === 0) {
  console.error('Hiç daire verisi çıkarılamadı. LEGACY_ROOT yolunu kontrol edin.');
  process.exit(1);
}

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, `${JSON.stringify(units, null, 2)}\n`, 'utf8');

const floorCount = units.reduce((total, unit) => total + unit.floors.length, 0);
console.log(`${units.length} konum, ${floorCount} daire tipi yazıldı → ${OUT_PATH}`);
