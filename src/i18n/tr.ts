import type { Dictionary } from './types';

/**
 * Türkçe — içeriğin kaynağı. Metinler eski sitedeki tanıtım yazılarından
 * devralındı, yazım hataları düzeltildi ve başka projeye ait bölümler çıkarıldı.
 */
export const tr: Dictionary = {
  meta: { label: 'Türkçe', dir: 'ltr', htmlLang: 'tr', ogLocale: 'tr_TR' },

  nav: {
    home: 'Ana Sayfa',
    project: 'Proje',
    residences: 'Daireler',
    gallery: 'Galeri',
    lifestyle: 'Yaşam',
    location: 'Konum',
    about: 'Hakkımızda',
    contact: 'İletişim',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    languages: 'Dil seçimi',
    skipToContent: 'İçeriğe geç',
  },

  actions: {
    whatsapp: "WhatsApp'tan yazın",
    call: 'Hemen arayın',
    email: 'E-posta gönderin',
    viewPlans: 'Kat planlarını inceleyin',
    viewGallery: 'Galeriyi görün',
    exploreProject: 'Projeyi keşfedin',
    directions: 'Yol tarifi alın',
    brochure: 'Kataloğu indirin',
    virtualTour: 'Sanal turu başlatın',
    contactUs: 'Bize ulaşın',
    seeAll: 'Tümünü görün',
    enlarge: 'Büyüt',
    previous: 'Önceki',
    next: 'Sonraki',
    close: 'Kapat',
  },

  seo: {
    home: {
      title: "The Pearl of Yalova | Çınarcık Teşvikiye'de Deniz Manzaralı Daireler",
      description:
        "Yalova Çınarcık Teşvikiye'de, denize yakın 3 bloklu butik yaşam projesi. 2+1'den 4+2 dubleks daireye, 85–238 m² arası deniz manzaralı konutlar. Ekşioğlu EKSA İnşaat güvencesiyle.",
    },
    project: {
      title: 'Proje | The Pearl of Yalova',
      description:
        'Mimarisi, manzarası, peyzajı ve ölçülmüş hava kalitesiyle The Pearl of Yalova. Marmara kıyısında, Selçuklu motifleriyle yorumlanmış modern cephe.',
    },
    residences: {
      title: 'Daireler ve Kat Planları | The Pearl of Yalova',
      description:
        'A, B ve C bloklarda 18 farklı konum, zeminden 4. kata 2+1, 3+1 ve 4+2 dubleks daire planları. Net 85 m² – 238 m².',
    },
    gallery: {
      title: 'Galeri ve Sanal Tur | The Pearl of Yalova',
      description:
        'Dış mekân ve iç mekân render’ları, örnek daire görselleri ve 360° sanal tur ile The Pearl of Yalova’yı yerinde gezin.',
    },
    lifestyle: {
      title: 'Sosyal Yaşam | The Pearl of Yalova',
      description:
        'Açık yüzme havuzu, fitness salonu, sauna, kapalı otopark, araç girişi olmayan peyzaj alanı ve 24 saat güvenlik.',
    },
    location: {
      title: 'Konum | Yalova Çınarcık Teşvikiye',
      description:
        "Teşvikiye, Çınarcık / Yalova. İstanbul'dan deniz otobüsü ve Osmangazi Köprüsü ile kolay ulaşım; denize yaklaşık 20 km yakınlıkta kıyı bandı.",
    },
    about: {
      title: 'Ekşioğlu EKSA İnşaat | The Pearl of Yalova',
      description:
        "1986'dan bu yana 2.000'den fazla konut ve 200.000 m² inşaat alanı deneyimi. Ekşioğlu EKSA İnşaat'ın hikâyesi.",
    },
    contact: {
      title: 'İletişim | The Pearl of Yalova',
      description:
        'The Pearl of Yalova tanıtım ofisi: Okmeydanı / İstanbul. Telefon, WhatsApp ve e-posta ile bize ulaşın.',
    },
  },

  home: {
    heroEyebrow: 'Yalova · Çınarcık · Teşvikiye',
    heroTitle: 'Doğanın ve denizin tam ortasında',
    heroLede:
      "Marmara'nın en sakin kıyı şeridinde, ormanla deniz arasına yerleşmiş üç blok. Her dairede kesintisiz manzara, geniş balkon ve ölçülmüş temiz hava.",
    scrollHint: 'Keşfedin',
    stats: [
      { value: '3', label: 'Blok' },
      { value: 'Zemin + 4', label: 'Kat' },
      { value: '85–238 m²', label: 'Net kullanım alanı' },
      { value: '2+1 · 3+1 · 4+2', label: 'Daire tipleri' },
    ],
    introEyebrow: 'Hikâye',
    introTitle: 'İhtişamın doğuşu',
    introBody: [
      "Düşünceler hayallerle birleşti ve Yalova'nın en nezih ilçelerinden Teşvikiye'de, denize neredeyse sıfır noktasında huzurlu bir yaşam projesine dönüştü.",
      'The Pearl of Yalova; mimarisi, peyzajı ve sosyal donatılarıyla bölgedeki standartları en yükseğe taşıyor.',
    ],
    featuresEyebrow: 'Öne çıkanlar',
    featuresTitle: 'Projeyi ayıran altı detay',
    features: [
      {
        title: 'Deniz',
        body: "Marmara'nın mavisi, yakamozlar, gün doğumu ve batımı — denizle iç içe bir yaşam.",
      },
      {
        title: 'Estetik',
        body: 'Klasiğin yeniden yorumlandığı dış hatlar, modernize edilmiş Selçuklu motifleri ve 1. sınıf cephe malzemeleri.',
      },
      {
        title: 'Manzara',
        body: 'Her katta geniş balkon. Yalnızca üst katlar değil, alt katlar da deniz ve gökyüzüyle buluşuyor.',
      },
      {
        title: 'Peyzaj',
        body: 'Araç girişi olmayan, çocukların özgürce dolaşabildiği bahçe; mevsim boyunca çiçek açan yürüyüş aksları.',
      },
      {
        title: 'Sosyal alanlar',
        body: 'Açık yüzme havuzu, fitness salonu, sauna ve kapalı otopark aynı arsa içinde.',
      },
      {
        title: 'Stil',
        body: 'Seçkin markalarla dekore edilmiş, yalınlığı ve konforu bir arada tutan iç mekânlar.',
      },
    ],
    measureEyebrow: 'Ölçüldü, iddia edilmedi',
    measureTitle: 'Temiz hava ve sessizlik, raporla',
    measureLede:
      'Bölgedeki hava ve gürültü değerleri bağımsız ölçümlerle raporlandı. Rakamlar pazarlama iddiası değil, ölçüm sonucudur.',
    airLabel: 'PM 2.5 ortalaması',
    airNote: '“İyi Sınıf” aralığı 0–50 puandır. Proje alanında 3 ayrı noktada ölçüldü.',
    noiseLabel: 'Ses ölçüm değeri',
    noiseNote: 'Yasal sınır seviyesinin altında raporlandı.',
    galleryEyebrow: 'Galeri',
    galleryTitle: 'Projeyi gözünüzle görün',
    galleryLede: 'Dış mekân ve iç mekân render’ları, örnek daire ve ortak alanlar.',
    plansEyebrow: 'Daireler',
    plansTitle: 'Size uyan planı bulun',
    plansLede:
      'Üç blok, 18 farklı konum ve zeminden çatı katına 90 farklı daire planı. Bloğu ve katı seçin, planı anında görün.',
    locationEyebrow: 'Konum',
    locationTitle: 'İstanbul’a bir vapur mesafesinde',
    locationLede:
      'Teşvikiye, Çınarcık / Yalova. Deniz otobüsü hatları ve Osmangazi Köprüsü ile İstanbul’a kolay ulaşım.',
    ctaTitle: 'Daireleri yerinde görmek ister misiniz?',
    ctaLede:
      'Satış ekibimiz planlar, ödeme seçenekleri ve teslim takvimi için size yardımcı olsun. WhatsApp’tan yazın ya da doğrudan arayın.',
  },

  project: {
    heroEyebrow: 'The Pearl of Yalova',
    heroTitle: 'Bir kıyı projesinin anatomisi',
    heroLede:
      'Konum seçiminden cephe detayına, peyzajdan ölçülmüş hava kalitesine kadar projeyi oluşturan kararlar.',
    chapters: [
      {
        id: 'hikaye',
        eyebrow: 'Hikâye',
        title: 'İhtişamın doğuşu',
        body: [
          "Düşünceler hayallerle birleşti ve Yalova'nın en nezih ilçelerinden Teşvikiye'de, denize neredeyse sıfır noktasında huzurlu bir yaşam projesine dönüştü.",
          'The Pearl of Yalova standartları en yükseğe çıkarıyor: üç blok, ölçülü bir yoğunluk ve arsanın büyük bölümünü peyzaja bırakan bir yerleşim kararı.',
        ],
        image: 'exterior/aerial-sunset',
      },
      {
        id: 'deniz',
        eyebrow: 'Deniz',
        title: 'Marmara’nın en nadide incisi',
        body: [
          'Mavinin her tonunun, yakamozların, martıların, güneşin doğuşu ve batışının eşsiz güzelliği içinde parıldayan bir yaşam.',
          'Marmara’nın en sakin kıyılarından birinde, denizle iç içe.',
        ],
        image: 'exterior/aerial-dusk',
      },
      {
        id: 'estetik',
        eyebrow: 'Estetik',
        title: 'Büyüleyici mimari',
        body: [
          'The Pearl of Yalova, huzurlu yaşamı mimarisine de yansıtıyor. Klasiğin yeni yorumlanmış dış hatlarıyla Yalova’nın ruhu blokların görünümüne taşınıyor.',
          'Olağanüstü manzaralı teras ve balkonlar, malzemesinden tasarımına kadar kaliteyi görünür kılıyor. Dış cephede modernize edilmiş Selçuklu motifleri ve 1. sınıf malzemeler kullanılıyor.',
        ],
        image: 'exterior/facade-detail',
      },
      {
        id: 'manzara',
        eyebrow: 'Manzara',
        title: 'Her katta geniş balkon',
        body: [
          'Yaşam alanınızın her odası kesintisiz Marmara Denizi manzarasına açılıyor.',
          'Geniş balkon ve teraslarda çiçek kokuları sizi sararken, günün her saati manzaranın tadını çıkarabilirsiniz.',
        ],
        image: 'exterior/facade-balconies',
      },
      {
        id: 'peyzaj',
        eyebrow: 'Peyzaj',
        title: 'Araç girişi olmayan bahçe',
        body: [
          'Sizi her gün ağırlamaya hazır, mevsim boyunca çiçek açan bir peyzaj alanı.',
          'Araç trafiğine kapalı bu alan sayesinde çocuklar bahçede özgürce dolaşabiliyor; araçlar kapalı otoparkta kalıyor.',
        ],
        image: 'exterior/garden-path',
      },
      {
        id: 'seckin',
        eyebrow: 'Seçkin',
        title: 'Prestijli bir yaşam',
        body: [
          'Sauna, fitness salonu ve yüzme havuzu gibi ayrıcalıklı sosyal donatılar günlük hayatın bir parçası hâline geliyor.',
          'Ortak alanlar, kullanım yoğunluğuna göre boyutlandırıldı; blokların tamamına yürüme mesafesinde konumlandırıldı.',
        ],
        image: 'interior/gym',
      },
      {
        id: 'stil',
        eyebrow: 'Stil',
        title: 'Zevkinize hitap eden mekânlar',
        body: [
          'Her santimetrekaresinde zarafetin ve asaletin detaylarıyla ayrıcalığı hissettiren bir yaşam alanı.',
          'En iyi markalarla dekore edilmiş, yalınlığı ve lüksü bir arada tutan iç mekânlar.',
        ],
        image: 'interior/living-grey',
      },
    ],
    measureTitle: 'Ölçüm sonuçları',
    airBody:
      'Hava kalitesi ölçümlerinde “İyi Sınıf” değerleri 0–50 puan arasında belirlenir. The Pearl of Yalova’nın 3 farklı noktasında yapılan ölçümlerde PM 2.5 konsantrasyonları ortalaması 10,33 µg/m³ sonucu ile “İyi Sınıf” derecesinde raporlandı.',
    noiseBody:
      'Gürültüden uzak, dalga ve kuş sesleriyle gelen huzur. The Pearl of Yalova ses ölçüm değeri 59,2 dBA ile sınır seviyenin altında raporlandı.',
    specsTitle: 'Teknik çerçeve',
    specs: [
      { title: 'Yerleşim', body: 'A, B ve C olmak üzere üç blok; bloklar arası mesafe manzarayı kapatmayacak şekilde kurgulandı.' },
      { title: 'Kat düzeni', body: 'Zemin kat dâhil 5 kat. 4. katlar dubleks olarak çözüldü.' },
      { title: 'Daire tipleri', body: '1+1, 2+1, 3+1 dubleks ve 4+2 dubleks; net 85 m² ile 238 m² arasında.' },
      { title: 'Otopark', body: 'Kapalı otopark; peyzaj alanı araç trafiğine kapalı.' },
      { title: 'Cephe', body: 'Modernize edilmiş Selçuklu motifleri, 1. sınıf cephe kaplaması.' },
      { title: 'Sosyal donatı', body: 'Açık yüzme havuzu, fitness salonu, sauna ve peyzajlı ortak bahçe.' },
    ],
  },

  residences: {
    heroEyebrow: 'Daireler',
    heroTitle: 'Kat planları',
    heroLede:
      'Bloğu, cephedeki konumu ve katı seçin; daire planını, vaziyet planındaki yerini ve net alanını görün.',
    blockLabel: 'Blok',
    positionLabel: 'Konum',
    floorLabel: 'Kat',
    layoutLabel: 'Tip',
    netAreaLabel: 'Net alan',
    planCaption: 'Daire planı — büyütmek için tıklayın',
    sitePlanTitle: 'Vaziyet planı',
    sitePlanLede: 'Üç bloğun arsa üzerindeki yerleşimi ve deniz yönü.',
    seaDirection: 'Deniz yönü',
    mixTitle: 'Daire karması',
    mixLede: 'Projedeki plan tiplerinin net alan aralıklarına göre dağılımı.',
    typeColumn: 'Tip',
    countColumn: 'Plan sayısı',
    rangeColumn: 'Net alan aralığı',
    positions: {
      'on-sag': 'Ön Sağ',
      'on-sol': 'Ön Sol',
      'on-orta': 'Ön Orta',
      'arka-sag': 'Arka Sağ',
      'arka-sol': 'Arka Sol',
      'arka-orta': 'Arka Orta',
    },
    floors: {
      zemin: 'Zemin Kat',
      '1kat': '1. Kat',
      '2kat': '2. Kat',
      '3kat': '3. Kat',
      '4kat': '4. Kat (Dubleks)',
    },
    noteTitle: 'Alanlar hakkında',
    noteBody:
      'Belirtilen değerler net kullanım alanıdır; plan görsellerinde brüt alan da yer alır. Planlar tanıtım amaçlıdır, uygulama projesinde değişiklik olabilir.',
  },

  gallery: {
    heroEyebrow: 'Galeri',
    heroTitle: 'Proje görselleri',
    heroLede: 'Dış mekân ve iç mekân render’ları, ortak alanlar ve örnek daire.',
    tabExterior: 'Dış mekân',
    tabInterior: 'İç mekân',
    tourTitle: '360° sanal tur',
    tourLede: 'Tarayıcınızdan çıkmadan proje alanında ve örnek dairede gezinin.',
    videoTitle: 'Tanıtım filmi',
    videoLede: 'Projenin havadan ve yerden çekilmiş tanıtım filmi.',
  },

  lifestyle: {
    heroEyebrow: 'Yaşam',
    heroTitle: 'Kapıdan çıkmadan',
    heroLede:
      'Sosyal donatılar günlük rutinin parçası olacak şekilde konumlandırıldı; hepsi bahçe içinde, yürüme mesafesinde.',
    amenities: [
      { title: 'Açık yüzme havuzu', body: 'Bloklardan korunaklı, güneş alan bir konumda; çevresinde şezlong terası.', image: 'exterior/pool' },
      { title: 'Fitness salonu', body: 'Kardiyo ve ağırlık bölümleriyle donatılmış, doğal ışık alan salon.', image: 'interior/gym' },
      { title: 'Sauna', body: 'Ahşap kaplamalı sauna ve dinlenme alanı.', image: 'interior/sauna' },
      { title: 'Kapalı otopark', body: 'Numaralandırılmış park yerleri; peyzaj alanı araç trafiğine kapalı kalıyor.', image: 'interior/garage' },
      { title: 'Peyzajlı bahçe', body: 'Mevsimlik çiçeklerle bezenmiş yürüyüş aksları ve oturma alanları.', image: 'exterior/garden-path' },
      { title: 'Kontrollü giriş', body: 'Tek noktadan kontrollü araç ve yaya girişi, kapalı site düzeni.', image: 'exterior/gate' },
    ],
  },

  location: {
    heroEyebrow: 'Konum',
    heroTitle: 'Teşvikiye, Çınarcık / Yalova',
    heroLede:
      'Ormanla deniz arasındaki kıyı bandında, İstanbul’a hem deniz hem kara yoluyla bağlı bir noktada.',
    mapTitle: 'Ulaşım şeması',
    mapCaption:
      'İstanbul’dan deniz otobüsü hatları (Yenikapı, Kartal, Pendik, Bostancı) ve Osmangazi Köprüsü üzerinden karayolu bağlantısı.',
    distancesTitle: 'Yakınlıklar',
    distances: [
      { place: 'Yalova şehir merkezi', value: '≈ 20 km' },
      { place: 'Çınarcık merkez', value: '≈ 5 km' },
      { place: 'Yalova deniz otobüsü iskelesi', value: '≈ 20 km' },
      { place: 'Osmangazi Köprüsü bağlantısı', value: '≈ 45 km' },
      { place: 'Sahil bandı', value: 'Yürüme mesafesi' },
    ],
    cityTitle: 'Neden Yalova?',
    cityBody: [
      'Yalova, İstanbul’a deniz yoluyla yaklaşık bir saat mesafede; termal kaynakları, ormanları ve sakin kıyı şeridiyle hem yazlık hem yıl boyu yaşam için tercih ediliyor.',
      'Çınarcık ve Teşvikiye hattı, ilçenin en yeşil ve en sakin bölümü. Osmangazi Köprüsü’nün açılmasıyla karayolu ulaşımı da belirgin şekilde kısaldı.',
    ],
  },

  about: {
    heroEyebrow: 'Hakkımızda',
    heroTitle: 'Ekşioğlu EKSA İnşaat',
    heroLede: 'Hikâyenin ardındaki marka.',
    body: [
      'Türkiye’nin hemen her yerinde ve yurt dışında önemli inşaat projelerine imza atmış Ekşioğlu ailesinin bir ferdi olan Sabahattin Ekşi; 1986’dan beri Kadıköy-Suadiye, Beşiktaş-Ortaköy, Şişli, Beyoğlu ve Kâğıthane’de inşa edilen 2.000’den fazla konut ve 200.000 m² inşaat alanının deneyimini, 2005 yılında Ekşioğlu EKSA İnşaat adı altında topladı.',
      'Ekşioğlu EKSA İnşaat, güvenilir ve yaşanabilir mekânlar oluşturma ilkesiyle kaliteyi ön planda tutarak çalışıyor. Her ticari işletme gibi kâr amacı güdüyoruz; ama inşa ettiğimiz konutlarda insanların aileleriyle yaşayacağını hiçbir zaman aklımızdan çıkarmadan, güvenlik ve kaliteden ödün vermeden çalışıyoruz.',
      'Bizden konut satın alanların kendilerini ve ailelerini güvenli bir binada yaşatmak istediklerini biliyor; yıllarca sürecek bir güven ilişkisi kurmak için sektördeki yenilikleri yakından takip ediyoruz.',
      'Üstün nitelikli yapı anlayışını ve yılların deneyimini insana saygı ilkesiyle birleştirmek hedefindeki Ekşioğlu EKSA İnşaat, kendini yenileme tutkusuyla var olmayı sürdürüyor.',
    ],
    stats: [
      { value: '1986', label: 'Sektördeki ilk yıl' },
      { value: '2005', label: 'Ekşioğlu EKSA İnşaat’ın kuruluşu' },
      { value: '2.000+', label: 'Tamamlanan konut' },
      { value: '200.000 m²', label: 'İnşaat alanı' },
    ],
    siteLinkLabel: 'Kurumsal siteyi ziyaret edin',
  },

  contact: {
    heroEyebrow: 'İletişim',
    heroTitle: 'Bize ulaşın',
    heroLede:
      'Planlar, ödeme seçenekleri ve teslim takvimi için satış ekibimiz yardımcı olsun.',
    officeTitle: 'Tanıtım ofisi',
    siteTitle: 'Proje alanı',
    phoneLabel: 'Telefon',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'E-posta',
    hoursLabel: 'Çalışma saatleri',
    hoursValue: 'Hafta içi 09:00 – 18:00 · Cumartesi 10:00 – 16:00',
  },

  footer: {
    blurb:
      'Yalova Çınarcık Teşvikiye’de, denize yakın üç bloklu butik yaşam projesi.',
    navTitle: 'Sayfalar',
    contactTitle: 'İletişim',
    legalTitle: 'Yasal',
    privacy: 'Gizlilik ilkeleri',
    rights: 'Tüm hakları saklıdır.',
    developerNote: 'Bir Ekşioğlu EKSA İnşaat projesidir.',
    disclaimer:
      'Sitedeki görseller ve planlar tanıtım amaçlıdır; uygulama projesinde değişiklik olabilir. Bağlayıcı değildir.',
  },

  tourScenes: {
    'dis-mekan': 'Dış mekân turu',
    'ic-mekan': 'Örnek daire turu',
    '3d-360-location-1': 'Çocuk oyun alanı',
    '3d-360-location-2': 'Havuz kenarı',
    '3d-360-location-3': 'Ağaçlı yol',
    '3d-360-location-4': 'Blok önü yolu',
    '3d-360-location-7': 'Çiçek bahçesi',
    '3d-360-location-8': 'Bahçe duvarı',
    '3d-360-location-9': 'Yürüyüş yolu',
    '3d-360-location-10': 'Çim alan',
    'yeni-salon': 'Salon',
    'mutfak-interactive-lightmix': 'Mutfak',
    'oda-interactive-lightmix': 'Çocuk odası',
    'yatakodasi-interactive-lightmix': 'Yatak odası',
    'yatakodasibanyo-interactive-lightmix': 'Ebeveyn banyosu',
    'banyo-interactive-lightmix': 'Banyo',
    'koridor-interactive-lightmix': 'Koridor',
  },

  media: {
    'exterior/gate': 'The Pearl of Yalova ana giriş kapısı ve peyzajlı yaklaşım aksı',
    'exterior/aerial-dusk': 'Alacakaranlıkta üç bloğun kuş bakışı görünümü',
    'exterior/aerial-night': 'Gece aydınlatmasıyla proje alanının kuş bakışı görünümü',
    'exterior/aerial-day': 'Gündüz kuş bakışı: bloklar, otopark ve peyzaj alanı',
    'exterior/aerial-sunset': 'Gün batımında orman içindeki blokların havadan görünümü',
    'exterior/aerial-top': 'Tepeden bakışla arsa yerleşimi ve yüzme havuzu',
    'exterior/aerial-blocks': 'A, B ve C bloklarının havadan genel görünümü',
    'exterior/aerial-lit': 'Aydınlatılmış yürüyüş aksları ve otopark alanı',
    'exterior/pool': 'Açık yüzme havuzu ve çevresindeki güneşlenme terası',
    'exterior/pool-deck': 'Havuz terası ve blok cepheleri',
    'exterior/garden-path': 'Mevsimlik çiçeklerle bezenmiş yürüyüş aksı',
    'exterior/garden-tree': 'Bahçedeki peyzaj düzenlemesi ve blok cephesi',
    'exterior/lawn': 'Bloklar önündeki açık çim alan',
    'exterior/entrance-door': 'Blok giriş kapısı ve önündeki peyzaj',
    'exterior/facade-street': 'Sokaktan blok cephesinin görünümü',
    'exterior/facade-side': 'Blokların yan cephesi ve bahçe duvarı',
    'exterior/facade-front': 'Ön cephe ve balkon düzeni',
    'exterior/facade-corner': 'Köşe cephe detayı ve peyzaj',
    'exterior/facade-balconies': 'Katlar boyunca uzanan geniş balkonlar',
    'exterior/facade-detail': 'Cephedeki modernize edilmiş Selçuklu motifi detayı',
    'exterior/driveway': 'Kontrollü araç girişi ve site içi yol',
    'exterior/street-view': 'Proje çevresindeki sokak ve yaya aksı',
    'interior/living-grey': 'Örnek daire salonu: oturma ve yemek alanı',
    'interior/kitchen': 'Ahşap dokulu mutfak ve kahvaltı masası',
    'interior/bathroom-ensuite': 'Ebeveyn banyosu, duşakabin ve vitrifiye',
    'interior/bedroom': 'Yatak odası ve makyaj ünitesi',
    'interior/bathroom-guest': 'Misafir banyosu ve lavabo detayı',
    'interior/living-tv': 'Salonun televizyon ünitesi tarafı',
    'interior/garage': 'Numaralandırılmış kapalı otopark',
    'interior/gym': 'Fitness salonu: kardiyo ve ağırlık bölümleri',
    'interior/sauna': 'Ahşap kaplamalı sauna',
    'interior/kids-room': 'Çocuk odası ve çalışma masası',
    'interior/duplex-stairs': 'Dubleks daire merdiveni ve hol',
    'interior/hallway': 'Daire içi koridor ve oda girişleri',
    'siteplan/vaziyet': 'Vaziyet planı: A, B ve C bloklarının yerleşimi ve deniz yönü',
    'siteplan/vaziyet-a': 'Vaziyet planında A blok vurgusu',
    'siteplan/vaziyet-b': 'Vaziyet planında B blok vurgusu',
    'siteplan/vaziyet-c': 'Vaziyet planında C blok vurgusu',
    'map/ulasim': 'İstanbul – Yalova ulaşım şeması: deniz otobüsü hatları ve karayolu bağlantısı',
  },
};
