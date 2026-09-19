export const LOCALES = ['tr', 'en', 'ru', 'ar'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'tr';

export const PAGE_KEYS = [
  'home',
  'project',
  'residences',
  'gallery',
  'lifestyle',
  'location',
  'about',
  'contact',
] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

export interface SeoEntry {
  readonly title: string;
  readonly description: string;
}

export interface Feature {
  readonly title: string;
  readonly body: string;
}

export interface Stat {
  readonly value: string;
  readonly label: string;
}

/** Proje anlatısının tek bölümü — görsel anahtarı medya manifestinden gelir. */
export interface Chapter {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly body: readonly string[];
  readonly image: string;
}

export interface Dictionary {
  readonly meta: {
    readonly label: string;
    readonly dir: 'ltr' | 'rtl';
    readonly htmlLang: string;
    readonly ogLocale: string;
  };
  readonly nav: Readonly<Record<PageKey, string>> & {
    readonly openMenu: string;
    readonly closeMenu: string;
    readonly languages: string;
    readonly skipToContent: string;
  };
  readonly actions: {
    readonly whatsapp: string;
    readonly call: string;
    readonly email: string;
    readonly viewPlans: string;
    readonly viewGallery: string;
    readonly exploreProject: string;
    readonly directions: string;
    readonly brochure: string;
    readonly virtualTour: string;
    readonly contactUs: string;
    readonly seeAll: string;
    readonly enlarge: string;
    readonly previous: string;
    readonly next: string;
    readonly close: string;
  };
  readonly seo: Readonly<Record<PageKey, SeoEntry>>;
  readonly home: {
    readonly heroEyebrow: string;
    readonly heroTitle: string;
    readonly heroLede: string;
    readonly scrollHint: string;
    readonly stats: readonly Stat[];
    readonly introEyebrow: string;
    readonly introTitle: string;
    readonly introBody: readonly string[];
    readonly featuresEyebrow: string;
    readonly featuresTitle: string;
    readonly features: readonly Feature[];
    readonly measureEyebrow: string;
    readonly measureTitle: string;
    readonly measureLede: string;
    readonly airLabel: string;
    readonly airNote: string;
    readonly noiseLabel: string;
    readonly noiseNote: string;
    readonly galleryEyebrow: string;
    readonly galleryTitle: string;
    readonly galleryLede: string;
    readonly plansEyebrow: string;
    readonly plansTitle: string;
    readonly plansLede: string;
    readonly locationEyebrow: string;
    readonly locationTitle: string;
    readonly locationLede: string;
    readonly ctaTitle: string;
    readonly ctaLede: string;
  };
  readonly project: {
    readonly heroEyebrow: string;
    readonly heroTitle: string;
    readonly heroLede: string;
    readonly chapters: readonly Chapter[];
    readonly measureTitle: string;
    readonly airBody: string;
    readonly noiseBody: string;
    readonly specsTitle: string;
    readonly specs: readonly Feature[];
  };
  readonly residences: {
    readonly heroEyebrow: string;
    readonly heroTitle: string;
    readonly heroLede: string;
    readonly blockLabel: string;
    readonly positionLabel: string;
    readonly floorLabel: string;
    readonly layoutLabel: string;
    readonly netAreaLabel: string;
    readonly planCaption: string;
    readonly sitePlanTitle: string;
    readonly sitePlanLede: string;
    readonly seaDirection: string;
    readonly mixTitle: string;
    readonly mixLede: string;
    readonly typeColumn: string;
    readonly countColumn: string;
    readonly rangeColumn: string;
    readonly positions: Readonly<Record<string, string>>;
    readonly floors: Readonly<Record<string, string>>;
    readonly noteTitle: string;
    readonly noteBody: string;
  };
  readonly gallery: {
    readonly heroEyebrow: string;
    readonly heroTitle: string;
    readonly heroLede: string;
    readonly tabExterior: string;
    readonly tabInterior: string;
    readonly tourTitle: string;
    readonly tourLede: string;
    readonly videoTitle: string;
    readonly videoLede: string;
  };
  readonly lifestyle: {
    readonly heroEyebrow: string;
    readonly heroTitle: string;
    readonly heroLede: string;
    readonly amenities: readonly (Feature & { readonly image: string })[];
  };
  readonly location: {
    readonly heroEyebrow: string;
    readonly heroTitle: string;
    readonly heroLede: string;
    readonly mapTitle: string;
    readonly mapCaption: string;
    readonly distancesTitle: string;
    readonly distances: readonly { readonly place: string; readonly value: string }[];
    readonly cityTitle: string;
    readonly cityBody: readonly string[];
  };
  readonly about: {
    readonly heroEyebrow: string;
    readonly heroTitle: string;
    readonly heroLede: string;
    readonly body: readonly string[];
    readonly stats: readonly Stat[];
    readonly siteLinkLabel: string;
  };
  readonly contact: {
    readonly heroEyebrow: string;
    readonly heroTitle: string;
    readonly heroLede: string;
    readonly officeTitle: string;
    readonly siteTitle: string;
    readonly phoneLabel: string;
    readonly whatsappLabel: string;
    readonly emailLabel: string;
    readonly hoursLabel: string;
    readonly hoursValue: string;
  };
  readonly footer: {
    readonly blurb: string;
    readonly navTitle: string;
    readonly contactTitle: string;
    readonly legalTitle: string;
    readonly privacy: string;
    readonly rights: string;
    readonly developerNote: string;
    readonly disclaimer: string;
  };
  /** Panorama sahnelerinin okunabilir adları — anahtarlar tours.json slug'ları. */
  readonly tourScenes: Readonly<Record<string, string>>;
  readonly media: Readonly<Record<string, string>>;
}
