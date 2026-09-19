/**
 * Eski siteden devralınacak görsellerin küratörlü listesi.
 *
 * Kapsam dışı bırakılanlar ve nedenleri:
 *  - images/mimari/*, images/estetik.jpeg  -> SeaPearl Ataköy projesine ait, bu proje değil
 *  - images/deniz1.jpeg, images/IMG_3771.jpeg, images/aktivite-*.jpeg -> jenerik stok kolaj
 *  - images/banner/* -> görselin üzerine gömülü slogan var, başlık artık HTML'de
 */

/** Fotoğraflar için üretilecek genişlikler (px). */
export const PHOTO_WIDTHS = [480, 768, 1200, 1920];

/** Plan/çizim görselleri için genişlikler - çizgi grafiği, az boyut yeter. */
export const PLAN_WIDTHS = [560, 1100, 1800];

const exteriorFile = (n) => `images/dis-mekan/yeni/${n}.jpeg`;
const interiorFile = (n) => `images/ornekdaire/${n}.jpg`;

/**
 * Dış mekan render'ları. `id` değeri i18n sözlüklerindeki alt metin anahtarıdır.
 * 23 numara kaynakta yok, bilerek atlandı.
 */
export const EXTERIOR = [
  { id: 'gate', file: exteriorFile(24), tags: ['giris'] },
  { id: 'aerial-dusk', file: exteriorFile(27), tags: ['hero', 'kus-bakisi'] },
  { id: 'aerial-night', file: exteriorFile(5), tags: ['hero', 'kus-bakisi'] },
  { id: 'aerial-day', file: exteriorFile(6), tags: ['kus-bakisi'] },
  { id: 'aerial-sunset', file: exteriorFile(25), tags: ['hero', 'kus-bakisi'] },
  { id: 'aerial-top', file: exteriorFile(13), tags: ['kus-bakisi'] },
  { id: 'aerial-blocks', file: exteriorFile(16), tags: ['kus-bakisi'] },
  { id: 'aerial-lit', file: exteriorFile(8), tags: ['kus-bakisi'] },
  { id: 'pool', file: exteriorFile(20), tags: ['hero', 'sosyal'] },
  { id: 'pool-deck', file: exteriorFile(9), tags: ['sosyal'] },
  { id: 'garden-path', file: exteriorFile(14), tags: ['peyzaj'] },
  { id: 'garden-tree', file: exteriorFile(19), tags: ['peyzaj'] },
  { id: 'lawn', file: exteriorFile(18), tags: ['peyzaj'] },
  { id: 'entrance-door', file: exteriorFile(21), tags: ['giris'] },
  { id: 'facade-street', file: exteriorFile(1), tags: ['cephe'] },
  { id: 'facade-side', file: exteriorFile(2), tags: ['cephe'] },
  { id: 'facade-front', file: exteriorFile(3), tags: ['cephe'] },
  { id: 'facade-corner', file: exteriorFile(15), tags: ['cephe'] },
  { id: 'facade-balconies', file: exteriorFile(11), tags: ['cephe'] },
  { id: 'facade-detail', file: exteriorFile(26), tags: ['cephe'] },
  { id: 'driveway', file: exteriorFile(4), tags: ['giris'] },
  { id: 'street-view', file: exteriorFile(22), tags: ['cevre'] },
];

/** İç mekan render'ları - örnek daire. */
export const INTERIOR = [
  { id: 'living-grey', file: interiorFile(1), tags: ['hero', 'salon'] },
  { id: 'kitchen', file: interiorFile(2), tags: ['mutfak'] },
  { id: 'bathroom-ensuite', file: interiorFile(3), tags: ['banyo'] },
  { id: 'bedroom', file: interiorFile(4), tags: ['yatak-odasi'] },
  { id: 'bathroom-guest', file: interiorFile(5), tags: ['banyo'] },
  { id: 'living-tv', file: interiorFile(6), tags: ['salon'] },
  { id: 'garage', file: interiorFile(7), tags: ['ortak-alan'] },
  { id: 'gym', file: interiorFile(8), tags: ['sosyal', 'ortak-alan'] },
  { id: 'sauna', file: interiorFile(9), tags: ['sosyal', 'ortak-alan'] },
  { id: 'kids-room', file: interiorFile(10), tags: ['yatak-odasi'] },
  { id: 'duplex-stairs', file: interiorFile(11), tags: ['salon'] },
  { id: 'hallway', file: interiorFile(12), tags: ['salon'] },
];

/** Vaziyet planı ve blok vurguları. */
export const SITE_PLANS = [
  { id: 'vaziyet', file: 'images/kat-plani_new/vaziyet_plani/vaziyet_plani.jpg' },
  { id: 'vaziyet-a', file: 'images/kat-plani_new/ablok/vaziyet_plani_ablok.jpg' },
  { id: 'vaziyet-b', file: 'images/kat-plani_new/bblok/vaziyet_plani_bblok.jpg' },
  { id: 'vaziyet-c', file: 'images/kat-plani_new/cblok/vaziyet_plani_cblok.jpg' },
];

/** Konum haritası - eski sitedeki İstanbul/Yalova ulaşım şeması. */
export const MAPS = [{ id: 'ulasim', file: 'images/lokasyon.jpeg' }];
