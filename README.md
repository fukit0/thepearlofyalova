# The Pearl of Yalova

Ekşioğlu EKSA İnşaat'ın Yalova Çınarcık Teşvikiye'deki konut projesinin tanıtım sitesi.
Dört dilli (TR / EN / RU / AR), tamamen statik, sunucu tarafı kod içermez.

## Teknik özet

| | |
|---|---|
| Çatı | [Astro 5](https://astro.build) — statik çıktı (`output: 'static'`) |
| Stil | Tailwind CSS 4 |
| Diller | `tr` (kök), `en`, `ru`, `ar` (sağdan sola) |
| Yayın | Vercel — sunucu fonksiyonu yok, tamamı CDN'den servis edilir |
| Sayfa ağırlığı | Ana sayfa ~10 KB HTML + ~15 KB CSS (gzip), harici JS paketi yok |

## Gereksinim

**Node.js 18.20.8 veya üzeri.** Bu makinedeki `nvm` varsayılanı 16.13.0, bu sürüm Astro
ile çalışmaz. Terminalde önce sürümü değiştirin:

```bash
nvm use 25
```

## Komutlar

```bash
npm install        # bağımlılıklar
npm run dev        # geliştirme sunucusu (http://localhost:4321)
npm run build      # üretim çıktısı -> dist/
npm run preview    # üretim çıktısını yerelde sunar
npm run check      # TypeScript + Astro tip kontrolü
```

### Tek seferlik içerik araçları

Bu iki komut eski siteden içerik aktarır. Çıktıları depoya işlendiği için her build'de
çalıştırılmaları gerekmez — yalnızca kaynak görseller değişirse.

```bash
npm run extract:units   # eski kat planı sayfalarından daire verisi -> src/data/units.json
npm run media           # görselleri responsive WebP'ye çevirir -> public/media/ + src/data/media.json
node scripts/prepare-tours.mjs   # panorama karolarını küp yüzlerine birleştirir -> public/tours/
```

Üçü de `LEGACY_ROOT` altındaki eski `public_html` klasörünü okur
(varsayılan: `~/Downloads/public_html`).

## Dizin yapısı

```
scripts/            tek seferlik içerik aktarma araçları
src/
  data/             project.ts (iletişim, sabitler) + üretilmiş JSON'lar
  i18n/             types.ts (sözleşme), routes.ts (URL'ler), tr/en/ru/ar sözlükleri
  lib/              media.ts, units.ts, tours.ts — veri erişimi
  components/       arayüz bileşenleri; pages/ altında sayfa gövdeleri
  layouts/          BaseLayout.astro
  pages/            [...path].astro (tüm sayfaları üreten tek yönlendirici)
public/
  media/            optimize edilmiş proje görselleri
  tours/            360° panorama küp yüzleri
  katalog/          PDF katalog
  vendor/pannellum/ panorama görüntüleyici
```

### İçerik nasıl değiştirilir

| Ne | Nerede |
|---|---|
| Metinler, başlıklar, SEO açıklamaları | `src/i18n/<dil>.ts` |
| Telefon, WhatsApp, e-posta, adres | `src/data/project.ts` |
| Menüdeki sayfalar ve URL'ler | `src/i18n/index.ts`, `src/i18n/routes.ts` |
| Galeride hangi görseller | `scripts/media-sources.mjs` (sonra `npm run media`) |
| Tanıtım filmi | `src/data/project.ts` içindeki `MEDIA_LINKS.youtubeId` |

`src/i18n/types.ts` dört sözlük için de sözleşmedir: bir alan eklerseniz dört dilde de
doldurmadan `npm run check` geçmez. Bu kasıtlıdır, dillerin ayrışmasını engeller.

## Yayınlama (Vercel)

Depo Vercel'e bağlandığında ek ayar gerekmez; `vercel.json` önbellek ve güvenlik
başlıklarını tanımlar. Framework algılaması Astro'yu bulur, çıktı `dist/` klasörüdür.

`vercel.json` ayrıca eski `.html` adreslerinden yeni sayfalara 42 kalıcı (301)
yönlendirme tanımlar — `thepearlofyalova.html`, 90 kat planı sayfası, eski dil
klasörleri ve PDF dahil. Bu, barındırma değişirken arama motoru sıralamalarının
ve dış bağlantıların korunması içindir.

Alan adı bağlandıktan sonra `src/data/project.ts` ve `astro.config.mjs` içindeki
`SITE_URL` değerinin gerçek alan adıyla eşleştiğini doğrulayın — canonical etiketler,
hreflang bağlantıları ve `sitemap.xml` bu değerden üretilir.

## Eski siteden devralınmayanlar

- **`mail.php` ve iletişim formu** — dosyada SMTP şifresi açık metin olarak duruyordu.
  Yeni sitede form yok; iletişim WhatsApp, telefon ve e-posta bağlantılarıyla yapılıyor.
- **`images/mimari/*`, `estetik.jpeg`** — SeaPearl Ataköy projesine ait görseller.
- **`en/`, `ru/`, `ar/` klasörleri** — içerikleri SeaPearl Ataköy'e aitti; çeviriler
  Türkçe metinden yeniden yapıldı.
- **`aktivite-*.jpeg`, `deniz1.jpeg`, `IMG_3771.jpeg`** — jenerik stok kolajlar.
- **Pano2VR tur motoru** — `javascript/load.js` kaynakta 0 bayt olduğu için turlar
  eski sitede de açılmıyordu. Panorama karoları küp yüzlerine birleştirilip
  Pannellum ile yeniden yayınlandı.

## Telif

Depodaki **kod** serbestçe incelenebilir ve örnek alınabilir.

`public/media/`, `public/tours/` ve `public/katalog/` altındaki görseller, 360°
panoramalar, mimari planlar ve tanıtım kataloğu **Ekşioğlu EKSA İnşaat'a aittir**
ve yalnızca bu proje için kullanılabilir. "The Pearl of Yalova" adı ve amblemi
şirketin markasıdır. Bu varlıkları izinsiz başka bir işte kullanmayın.
