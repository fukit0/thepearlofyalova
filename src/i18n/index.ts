import { tr } from './tr';
import { en } from './en';
import { ru } from './ru';
import { ar } from './ar';
import { DEFAULT_LOCALE, LOCALES, PAGE_KEYS } from './types';
import type { Dictionary, Locale, PageKey } from './types';
import { pathFor, paramFor, slugFor } from './routes';

const DICTIONARIES: Record<Locale, Dictionary> = { tr, en, ru, ar };

export const getDictionary = (locale: Locale): Dictionary => DICTIONARIES[locale];

export const isLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);

/** Aynı sayfanın tüm dillerdeki adresleri — hreflang ve dil değiştirici için. */
export const alternatesFor = (page: PageKey): { locale: Locale; path: string; label: string }[] =>
  LOCALES.map((locale) => ({
    locale,
    path: pathFor(page, locale, DEFAULT_LOCALE),
    label: DICTIONARIES[locale].meta.label,
  }));

/** Üst menüde görünecek sayfalar — ana sayfa logoda olduğu için hariç. */
export const NAV_PAGES: readonly PageKey[] = [
  'project',
  'residences',
  'gallery',
  'lifestyle',
  'location',
  'about',
  'contact',
];

export { DEFAULT_LOCALE, LOCALES, PAGE_KEYS, pathFor, paramFor, slugFor };
export type { Dictionary, Locale, PageKey };
