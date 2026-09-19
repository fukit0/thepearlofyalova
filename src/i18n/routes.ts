import type { Locale, PageKey } from './types';

/**
 * Sayfa anahtarı -> dile göre URL parçası.
 * Boş dize ana sayfayı ifade eder. Arapça'da Latin slug tercih edildi:
 * paylaşılan bağlantılarda yüzde kodlaması okunmaz hâle geliyor.
 */
const SLUGS: Record<PageKey, Record<Locale, string>> = {
  home: { tr: '', en: '', ru: '', ar: '' },
  project: { tr: 'proje', en: 'project', ru: 'proekt', ar: 'project' },
  residences: { tr: 'daireler', en: 'residences', ru: 'kvartiry', ar: 'residences' },
  gallery: { tr: 'galeri', en: 'gallery', ru: 'galereya', ar: 'gallery' },
  lifestyle: { tr: 'yasam', en: 'lifestyle', ru: 'infrastruktura', ar: 'lifestyle' },
  location: { tr: 'konum', en: 'location', ru: 'raspolozhenie', ar: 'location' },
  about: { tr: 'hakkimizda', en: 'about', ru: 'o-nas', ar: 'about' },
  contact: { tr: 'iletisim', en: 'contact', ru: 'kontakty', ar: 'contact' },
};

export const slugFor = (page: PageKey, locale: Locale): string => SLUGS[page][locale];

/** Varsayılan dil kök dizinde, diğerleri /<locale>/ altında yayınlanır. */
export const pathFor = (page: PageKey, locale: Locale, defaultLocale: Locale = 'tr'): string => {
  const slug = slugFor(page, locale);
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  if (slug === '') return prefix === '' ? '/' : prefix;
  return `${prefix}/${slug}`;
};

/** Astro `[...path]` parametresi — ana sayfa için undefined olmalı. */
export const paramFor = (page: PageKey, locale: Locale, defaultLocale: Locale = 'tr'): string | undefined => {
  const path = pathFor(page, locale, defaultLocale).replace(/^\//, '');
  return path === '' ? undefined : path;
};
