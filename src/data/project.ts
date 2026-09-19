/**
 * Projeye ait sabitler. İletişim bilgileri eski siteden birebir devralındı;
 * değişirse yalnızca bu dosya güncellenir.
 */

export const SITE_URL = 'https://www.thepearlofyalova.com';

export const BRAND = {
  name: 'The Pearl of Yalova',
  tagline: "Yalova'nın İncisi",
  developer: 'Ekşioğlu EKSA İnşaat',
  developerUrl: 'https://www.eksioglueksa.com',
} as const;

export const CONTACT = {
  phoneDisplay: '0212 222 18 53',
  phoneHref: 'tel:+902122221853',
  whatsappDisplay: '+90 534 293 24 03',
  whatsappHref: 'https://wa.me/905342932403',
  email: 'info@eksioglueksa.com',
  emailHref: 'mailto:info@eksioglueksa.com',
  office: {
    lines: [
      'Darülaceze Cad. Ekşioğlu İş Merkezi',
      'No: 34 B Blok Kat: 6 Daire: 12',
      'Okmeydanı / İstanbul',
    ],
    mapsUrl: 'https://maps.google.com/?q=Dar%C3%BClaceze+Cad.+Ek%C5%9Fio%C4%9Flu+%C4%B0%C5%9F+Merkezi+Okmeydan%C4%B1+%C4%B0stanbul',
  },
  site: {
    lines: ['Teşvikiye Mah.', 'Çınarcık / Yalova'],
    mapsUrl: 'https://maps.google.com/?q=Te%C5%9Fvikiye+Mahallesi+%C3%87%C4%B1narc%C4%B1k+Yalova',
  },
} as const;

/**
 * Bağımsız ölçüm raporlarından gelen değerler (eski site içeriği).
 * Pazarlama iddiası değil, ölçüm sonucudur; kaynağıyla birlikte gösterilir.
 */
export const MEASUREMENTS = {
  pm25: { value: '10,33', unit: 'µg/m³', scaleMax: 50 },
  noise: { value: '59,2', unit: 'dBA' },
} as const;

/** Tanıtım filmi ve sanal tur bağlantıları. */
export const MEDIA_LINKS = {
  /** Videolar YouTube'a taşınınca buraya video kimliği girilir; boşsa bölüm gizlenir. */
  youtubeId: '',
  brochureHref: '/katalog/thepearlofyalova-tr.pdf',
} as const;

export const BLOCKS = ['A', 'B', 'C'] as const;
export type BlockId = (typeof BLOCKS)[number];
