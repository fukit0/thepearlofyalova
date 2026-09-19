/**
 * Eski Pano2VR turlarının küp karolarını tek parça küp yüzlerine birleştirir.
 *
 * Gerekçe: turların motor dosyası (javascript/load.js) kaynakta 0 bayt, yani
 * turlar canlı sitede de açılmıyor. Karo görüntüleri sağlam olduğu için
 * panoramalar açık kaynak bir görüntüleyiciyle yeniden yayınlanabiliyor.
 *
 * Karo adı: <seviye>_<yüz>_<satır>_<sütun>.jpg — en yüksek seviye kullanılır.
 * Çıktı: public/tours/<tur>/<sahne>/<yüz>.webp + thumb.webp, src/data/tours.json
 */
import { readdir, mkdir, writeFile, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const PROJECT_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LEGACY_TOURS = join(PROJECT_ROOT, 'public', 'sanal-tur');
const OUTPUT_ROOT = join(PROJECT_ROOT, 'public', 'tours');
const MANIFEST_PATH = join(PROJECT_ROOT, 'src', 'data', 'tours.json');

const FACE_QUALITY = 80;
const THUMB_WIDTH = 480;

/** Pano2VR yüz sırası; Pannellum cubeMap sırası ile birebir eşleşir. */
const FACE_NAMES = ['front', 'right', 'back', 'left', 'up', 'down'];

const TOURS = [
  { id: 'dis-mekan', source: 'dis-mekan' },
  { id: 'ic-mekan', source: 'ic-mekan' },
];

const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

const TILE_PATTERN = /^(\d+)_(\d+)_(\d+)_(\d+)\.jpg$/;

/** Sahnedeki en yüksek çözünürlüklü seviyenin karolarını yüz/satır/sütun olarak döndürür. */
const readTiles = async (sceneDir) => {
  const files = await readdir(sceneDir);
  const parsed = files
    .map((file) => ({ file, match: TILE_PATTERN.exec(file) }))
    .filter((entry) => entry.match)
    .map(({ file, match }) => ({
      file,
      level: Number(match[1]),
      face: Number(match[2]),
      row: Number(match[3]),
      col: Number(match[4]),
    }));

  if (parsed.length === 0) return null;

  const maxLevel = Math.max(...parsed.map((tile) => tile.level));
  return parsed.filter((tile) => tile.level === maxLevel);
};

const stitchFace = async (sceneDir, tiles, outPath) => {
  const rows = Math.max(...tiles.map((tile) => tile.row)) + 1;
  const cols = Math.max(...tiles.map((tile) => tile.col)) + 1;
  const first = await sharp(join(sceneDir, tiles[0].file)).metadata();
  const tileSize = first.width ?? 512;

  const composites = tiles.map((tile) => ({
    input: join(sceneDir, tile.file),
    left: tile.col * tileSize,
    top: tile.row * tileSize,
  }));

  await sharp({
    create: {
      width: cols * tileSize,
      height: rows * tileSize,
      channels: 3,
      background: { r: 0, g: 0, b: 0 },
    },
  })
    .composite(composites)
    .webp({ quality: FACE_QUALITY, effort: 5 })
    .toFile(outPath);

  return cols * tileSize;
};

const processScene = async (tourId, sceneName, sceneDir) => {
  const tiles = await readTiles(sceneDir);
  if (!tiles) return null;

  const slug = sceneName
    .toLocaleLowerCase('tr')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

  const outDir = join(OUTPUT_ROOT, tourId, slug);
  await mkdir(outDir, { recursive: true });

  let faceSize = 0;
  for (const [index, name] of FACE_NAMES.entries()) {
    const faceTiles = tiles.filter((tile) => tile.face === index);
    if (faceTiles.length === 0) continue;
    faceSize = await stitchFace(sceneDir, faceTiles, join(outDir, `${name}.webp`));
  }

  const previewPath = join(sceneDir, 'preview.jpg');
  if (await exists(previewPath)) {
    await sharp(previewPath).resize({ width: THUMB_WIDTH }).webp({ quality: 72 }).toFile(join(outDir, 'thumb.webp'));
  }

  return {
    slug,
    source: sceneName,
    base: `/tours/${tourId}/${slug}`,
    faces: FACE_NAMES,
    faceSize,
    hasThumb: await exists(join(outDir, 'thumb.webp')),
  };
};

const run = async () => {
  const manifest = {};

  for (const tour of TOURS) {
    const sceneRoot = join(LEGACY_TOURS, tour.source, 'scene');
    if (!(await exists(sceneRoot))) {
      console.warn(`Atlandı — sahne klasörü yok: ${sceneRoot}`);
      continue;
    }

    const sceneNames = (await readdir(sceneRoot, { withFileTypes: true }))
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();

    const scenes = [];
    for (const sceneName of sceneNames) {
      const scene = await processScene(tour.id, sceneName, join(sceneRoot, sceneName));
      if (scene) scenes.push(scene);
      console.log(`  ${tour.id}/${sceneName} -> ${scene ? scene.slug : 'karo bulunamadı'}`);
    }

    manifest[tour.id] = scenes;
  }

  await mkdir(dirname(MANIFEST_PATH), { recursive: true });
  await writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  const total = Object.values(manifest).reduce((sum, scenes) => sum + scenes.length, 0);
  console.log(`${total} panorama sahnesi hazırlandı -> public/tours/`);
};

run().catch((error) => {
  console.error('Tur hattı başarısız:', error);
  process.exit(1);
});
