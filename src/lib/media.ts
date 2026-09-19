import manifest from '../data/media.json';

export interface MediaEntry {
  readonly base: string;
  readonly widths: readonly number[];
  readonly width: number;
  readonly height: number;
  readonly lqip: string;
}

const MEDIA = manifest as Record<string, MediaEntry>;

export const hasMedia = (key: string): boolean => key in MEDIA;

/**
 * Manifestten kayıt döndürür. Eksik anahtar build'i durdurur —
 * sessizce kırık görsel yayınlamaktansa derlemede patlaması tercih edilir.
 */
export const getMedia = (key: string): MediaEntry => {
  const entry = MEDIA[key];
  if (!entry) {
    throw new Error(`Medya manifestinde bulunamadı: "${key}". "npm run media" çalıştırılmış mı?`);
  }
  return entry;
};

export const srcSetFor = (entry: MediaEntry): string =>
  entry.widths.map((width) => `${entry.base}-${width}.webp ${width}w`).join(', ');

export const largestSrc = (entry: MediaEntry): string =>
  `${entry.base}-${entry.widths[entry.widths.length - 1]}.webp`;

/** Belirli bir genişliğe en yakın varyant — LCP görselinin preload'u için. */
export const srcAt = (entry: MediaEntry, preferred: number): string => {
  const match = entry.widths.find((width) => width >= preferred) ?? entry.widths[entry.widths.length - 1];
  return `${entry.base}-${match}.webp`;
};

export const keysByPrefix = (prefix: string): string[] =>
  Object.keys(MEDIA).filter((key) => key.startsWith(`${prefix}/`));
