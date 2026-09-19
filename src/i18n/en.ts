import type { Dictionary } from './types';

/** English — translated from the Turkish source of truth. */
export const en: Dictionary = {
  meta: { label: 'English', dir: 'ltr', htmlLang: 'en', ogLocale: 'en_GB' },

  nav: {
    home: 'Home',
    project: 'The Project',
    residences: 'Residences',
    gallery: 'Gallery',
    lifestyle: 'Lifestyle',
    location: 'Location',
    about: 'About',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languages: 'Choose language',
    skipToContent: 'Skip to content',
  },

  actions: {
    whatsapp: 'Message on WhatsApp',
    call: 'Call us',
    email: 'Send an email',
    viewPlans: 'Browse floor plans',
    viewGallery: 'View the gallery',
    exploreProject: 'Explore the project',
    directions: 'Get directions',
    brochure: 'Download the brochure',
    virtualTour: 'Start the virtual tour',
    contactUs: 'Get in touch',
    seeAll: 'See all',
    enlarge: 'Enlarge',
    previous: 'Previous',
    next: 'Next',
    close: 'Close',
  },

  seo: {
    home: {
      title: 'The Pearl of Yalova | Sea-View Residences in Çınarcık, Yalova',
      description:
        'A three-block boutique development close to the sea in Teşvikiye, Çınarcık — Yalova. Apartments from 2+1 to 4+2 duplex, 85–238 m² net, by Ekşioğlu EKSA İnşaat.',
    },
    project: {
      title: 'The Project | The Pearl of Yalova',
      description:
        'Architecture, views, landscaping and measured air quality at The Pearl of Yalova — a modern façade with reinterpreted Seljuk motifs on the Marmara coast.',
    },
    residences: {
      title: 'Residences and Floor Plans | The Pearl of Yalova',
      description:
        '18 distinct positions across blocks A, B and C; 2+1, 3+1 and 4+2 duplex layouts from ground to fourth floor, 85–238 m² net.',
    },
    gallery: {
      title: 'Gallery and Virtual Tour | The Pearl of Yalova',
      description:
        'Exterior and interior renders, show-apartment images and a 360° virtual tour of The Pearl of Yalova.',
    },
    lifestyle: {
      title: 'Lifestyle and Amenities | The Pearl of Yalova',
      description:
        'Outdoor swimming pool, fitness suite, sauna, covered parking, a car-free landscaped garden and controlled access.',
    },
    location: {
      title: 'Location | Teşvikiye, Çınarcık — Yalova',
      description:
        'Teşvikiye, Çınarcık — Yalova. Easy access from Istanbul by sea bus and via the Osmangazi Bridge, on a quiet stretch of coastline.',
    },
    about: {
      title: 'Ekşioğlu EKSA İnşaat | The Pearl of Yalova',
      description:
        'More than 2,000 homes and 200,000 m² of construction since 1986. The story behind Ekşioğlu EKSA İnşaat.',
    },
    contact: {
      title: 'Contact | The Pearl of Yalova',
      description:
        'The Pearl of Yalova sales office in Okmeydanı, Istanbul. Reach us by phone, WhatsApp or email.',
    },
  },

  home: {
    heroEyebrow: 'Yalova · Çınarcık · Teşvikiye',
    heroTitle: 'Between the forest and the sea',
    heroLede:
      'Three blocks set on one of the calmest stretches of the Marmara coast. Uninterrupted views, generous balconies on every floor and independently measured clean air.',
    scrollHint: 'Explore',
    stats: [
      { value: '3', label: 'Blocks' },
      { value: 'Ground + 4', label: 'Floors' },
      { value: '85–238 m²', label: 'Net floor area' },
      { value: '2+1 · 3+1 · 4+2', label: 'Layouts' },
    ],
    introEyebrow: 'The story',
    introTitle: 'How it began',
    introBody: [
      'Ideas met ambition and became a calm residential project in Teşvikiye — one of the most desirable parts of Yalova — almost directly on the shoreline.',
      'The Pearl of Yalova raises the local standard through its architecture, its landscaping and the amenities held inside the site.',
    ],
    featuresEyebrow: 'Highlights',
    featuresTitle: 'Six things that set it apart',
    features: [
      { title: 'The sea', body: 'Every shade of blue, the moonlight on the water, sunrise and sunset — life in touch with the Marmara.' },
      { title: 'Aesthetics', body: 'A contemporary reading of classical outlines, reinterpreted Seljuk motifs and first-class façade materials.' },
      { title: 'The view', body: 'A wide balcony on every floor. Not only the upper storeys but the lower ones meet the sea and the sky.' },
      { title: 'Landscaping', body: 'A car-free garden where children can roam, with walkways that flower through the seasons.' },
      { title: 'Amenities', body: 'An outdoor pool, a fitness suite, a sauna and covered parking, all within the same grounds.' },
      { title: 'Interiors', body: 'Finished with considered brands, holding simplicity and comfort together.' },
    ],
    measureEyebrow: 'Measured, not claimed',
    measureTitle: 'Clean air and quiet, on record',
    measureLede:
      'Air and noise levels on site were recorded through independent measurement. These are results, not marketing claims.',
    airLabel: 'PM 2.5 average',
    airNote: 'The "Good" band runs from 0 to 50 points. Measured at three separate points on site.',
    noiseLabel: 'Measured sound level',
    noiseNote: 'Recorded below the statutory threshold.',
    galleryEyebrow: 'Gallery',
    galleryTitle: 'See it for yourself',
    galleryLede: 'Exterior and interior renders, the show apartment and the shared spaces.',
    plansEyebrow: 'Residences',
    plansTitle: 'Find the plan that fits',
    plansLede:
      'Three blocks, 18 distinct positions and 90 floor plans from ground level to the duplex top floor. Pick a block and a floor to see the plan at once.',
    locationEyebrow: 'Location',
    locationTitle: 'A ferry ride from Istanbul',
    locationLede:
      'Teşvikiye, Çınarcık — Yalova. Connected to Istanbul by sea bus routes and by road via the Osmangazi Bridge.',
    ctaTitle: 'Would you like to see the residences in person?',
    ctaLede:
      'Our sales team can walk you through the plans, payment options and the delivery schedule. Message us on WhatsApp or call directly.',
  },

  project: {
    heroEyebrow: 'The Pearl of Yalova',
    heroTitle: 'The anatomy of a coastal project',
    heroLede:
      'The decisions behind the project — from the choice of site and the façade detail to the landscaping and the measured air quality.',
    chapters: [
      {
        id: 'story',
        eyebrow: 'Story',
        title: 'How it began',
        body: [
          'Ideas met ambition and became a calm residential project in Teşvikiye — one of the most desirable parts of Yalova — almost directly on the shoreline.',
          'The Pearl of Yalova sets a higher local standard: three blocks, a measured density and a layout that leaves most of the plot to landscaping.',
        ],
        image: 'exterior/aerial-sunset',
      },
      {
        id: 'sea',
        eyebrow: 'Sea',
        title: 'The Marmara at the doorstep',
        body: [
          'A life that glitters among every shade of blue, the moonlight on the water, the gulls, and the rise and fall of the sun.',
          'On one of the calmest coastlines of the Marmara, in touch with the sea.',
        ],
        image: 'exterior/aerial-dusk',
      },
      {
        id: 'aesthetics',
        eyebrow: 'Aesthetics',
        title: 'Architecture with presence',
        body: [
          'The Pearl of Yalova carries its calm into its architecture. The spirit of Yalova is reflected in the blocks through a contemporary reading of classical outlines.',
          'Terraces and balconies with remarkable views make the quality visible, from material to detail. The façade uses reinterpreted Seljuk motifs and first-class materials.',
        ],
        image: 'exterior/facade-detail',
      },
      {
        id: 'view',
        eyebrow: 'View',
        title: 'A wide balcony on every floor',
        body: [
          'Every room in the home opens onto an uninterrupted view of the Sea of Marmara.',
          'On the generous balconies and terraces, surrounded by the scent of the garden, the view is yours at any hour.',
        ],
        image: 'exterior/facade-balconies',
      },
      {
        id: 'landscape',
        eyebrow: 'Landscape',
        title: 'A garden without cars',
        body: [
          'A landscaped setting that flowers through the seasons and is ready to receive you every day.',
          'Because the garden is closed to vehicles, children can move freely; cars stay in the covered parking.',
        ],
        image: 'exterior/garden-path',
      },
      {
        id: 'amenities',
        eyebrow: 'Amenities',
        title: 'A considered daily routine',
        body: [
          'A sauna, a fitness suite and a swimming pool become part of everyday life rather than an occasional treat.',
          'The shared spaces were sized for real use and placed within walking distance of all three blocks.',
        ],
        image: 'interior/gym',
      },
      {
        id: 'interiors',
        eyebrow: 'Interiors',
        title: 'Spaces that answer to taste',
        body: [
          'A home whose every detail carries a sense of ease and restraint.',
          'Interiors finished with considered brands, holding simplicity and comfort together.',
        ],
        image: 'interior/living-grey',
      },
    ],
    measureTitle: 'Measurement results',
    airBody:
      'In air quality measurement the "Good" band is defined between 0 and 50 points. Measurements taken at three separate points at The Pearl of Yalova returned a PM 2.5 average of 10.33 µg/m³, reported within the "Good" band.',
    noiseBody:
      'Quiet broken only by waves and birdsong. The sound level at The Pearl of Yalova was reported at 59.2 dBA, below the statutory threshold.',
    specsTitle: 'Technical outline',
    specs: [
      { title: 'Layout', body: 'Three blocks — A, B and C — spaced so that they do not block one another’s views.' },
      { title: 'Storeys', body: 'Five levels including the ground floor. Fourth floors are resolved as duplexes.' },
      { title: 'Layouts', body: '1+1, 2+1, 3+1 duplex and 4+2 duplex, from 85 m² to 238 m² net.' },
      { title: 'Parking', body: 'Covered parking; the landscaped garden stays free of vehicle traffic.' },
      { title: 'Façade', body: 'Reinterpreted Seljuk motifs with first-class façade cladding.' },
      { title: 'Amenities', body: 'Outdoor swimming pool, fitness suite, sauna and a landscaped shared garden.' },
    ],
  },

  residences: {
    heroEyebrow: 'Residences',
    heroTitle: 'Floor plans',
    heroLede:
      'Choose a block, a position on the façade and a floor to see the plan, its place on the site layout and its net area.',
    blockLabel: 'Block',
    positionLabel: 'Position',
    floorLabel: 'Floor',
    layoutLabel: 'Layout',
    netAreaLabel: 'Net area',
    planCaption: 'Floor plan — click to enlarge',
    sitePlanTitle: 'Site layout',
    sitePlanLede: 'How the three blocks sit on the plot, and which way the sea lies.',
    seaDirection: 'Towards the sea',
    mixTitle: 'Unit mix',
    mixLede: 'How the plan types are distributed across net floor areas.',
    typeColumn: 'Layout',
    countColumn: 'Plans',
    rangeColumn: 'Net area range',
    positions: {
      'on-sag': 'Front Right',
      'on-sol': 'Front Left',
      'on-orta': 'Front Centre',
      'arka-sag': 'Rear Right',
      'arka-sol': 'Rear Left',
      'arka-orta': 'Rear Centre',
    },
    floors: {
      zemin: 'Ground floor',
      '1kat': 'First floor',
      '2kat': 'Second floor',
      '3kat': 'Third floor',
      '4kat': 'Fourth floor (duplex)',
    },
    noteTitle: 'About the areas',
    noteBody:
      'The figures given are net usable area; the plan images also show the gross figure. Plans are indicative and may change in the construction drawings.',
  },

  gallery: {
    heroEyebrow: 'Gallery',
    heroTitle: 'Project imagery',
    heroLede: 'Exterior and interior renders, shared spaces and the show apartment.',
    tabExterior: 'Exterior',
    tabInterior: 'Interior',
    tourTitle: '360° virtual tour',
    tourLede: 'Walk the grounds and the show apartment without leaving your browser.',
    videoTitle: 'Project film',
    videoLede: 'The project filmed from the air and from the ground.',
  },

  lifestyle: {
    heroEyebrow: 'Lifestyle',
    heroTitle: 'Without leaving the grounds',
    heroLede:
      'The amenities were placed to become part of the daily routine — all inside the garden, all within walking distance.',
    amenities: [
      { title: 'Outdoor swimming pool', body: 'Sheltered by the blocks and open to the sun, with a lounging terrace around it.', image: 'exterior/pool' },
      { title: 'Fitness suite', body: 'Cardio and weights areas in a room that takes natural light.', image: 'interior/gym' },
      { title: 'Sauna', body: 'A timber-lined sauna with an adjoining rest area.', image: 'interior/sauna' },
      { title: 'Covered parking', body: 'Numbered bays, which is what keeps the garden free of vehicle traffic.', image: 'interior/garage' },
      { title: 'Landscaped garden', body: 'Walkways planted with seasonal flowers, and places to sit along them.', image: 'exterior/garden-path' },
      { title: 'Controlled access', body: 'A single controlled entrance for vehicles and pedestrians within a gated layout.', image: 'exterior/gate' },
    ],
  },

  location: {
    heroEyebrow: 'Location',
    heroTitle: 'Teşvikiye, Çınarcık — Yalova',
    heroLede:
      'On the coastal strip between the forest and the sea, connected to Istanbul by both water and road.',
    mapTitle: 'Access map',
    mapCaption:
      'Sea bus routes from Istanbul (Yenikapı, Kartal, Pendik, Bostancı) and the road connection via the Osmangazi Bridge.',
    distancesTitle: 'Distances',
    distances: [
      { place: 'Yalova city centre', value: '≈ 20 km' },
      { place: 'Çınarcık centre', value: '≈ 5 km' },
      { place: 'Yalova sea bus terminal', value: '≈ 20 km' },
      { place: 'Osmangazi Bridge junction', value: '≈ 45 km' },
      { place: 'The shoreline', value: 'Walking distance' },
    ],
    cityTitle: 'Why Yalova?',
    cityBody: [
      'Yalova sits roughly an hour from Istanbul by sea. Its thermal springs, forests and quiet coastline make it a choice for both summer and year-round living.',
      'The Çınarcık–Teşvikiye stretch is the greenest and quietest part of the district. Since the Osmangazi Bridge opened, the drive has become markedly shorter too.',
    ],
  },

  about: {
    heroEyebrow: 'About',
    heroTitle: 'Ekşioğlu EKSA İnşaat',
    heroLede: 'The company behind the project.',
    body: [
      'Sabahattin Ekşi, a member of the Ekşioğlu family behind significant construction projects across Turkey and abroad, brought together the experience of more than 2,000 homes and 200,000 m² of construction built since 1986 in Kadıköy-Suadiye, Beşiktaş-Ortaköy, Şişli, Beyoğlu and Kâğıthane, founding Ekşioğlu EKSA İnşaat in 2005.',
      'Ekşioğlu EKSA İnşaat works on the principle of creating dependable, liveable places, holding quality in the foreground. Like any commercial business we work for profit — but never losing sight of the fact that families will live in the homes we build, and never compromising on safety or quality.',
      'We know that those who buy from us want to keep themselves and their families in a safe building, and we follow developments in the sector closely in order to build a relationship of trust that lasts for years.',
      'Aiming to combine high-quality construction and years of experience with respect for people, Ekşioğlu EKSA İnşaat continues with a commitment to renewing itself.',
    ],
    stats: [
      { value: '1986', label: 'First year in the sector' },
      { value: '2005', label: 'Ekşioğlu EKSA İnşaat founded' },
      { value: '2,000+', label: 'Homes completed' },
      { value: '200,000 m²', label: 'Area constructed' },
    ],
    siteLinkLabel: 'Visit the corporate site',
  },

  contact: {
    heroEyebrow: 'Contact',
    heroTitle: 'Get in touch',
    heroLede: 'Our sales team can help with plans, payment options and the delivery schedule.',
    officeTitle: 'Sales office',
    siteTitle: 'Project site',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    emailLabel: 'Email',
    hoursLabel: 'Opening hours',
    hoursValue: 'Weekdays 09:00 – 18:00 · Saturday 10:00 – 16:00',
  },

  footer: {
    blurb: 'A three-block boutique development close to the sea in Teşvikiye, Çınarcık — Yalova.',
    navTitle: 'Pages',
    contactTitle: 'Contact',
    legalTitle: 'Legal',
    privacy: 'Privacy policy',
    rights: 'All rights reserved.',
    developerNote: 'A project by Ekşioğlu EKSA İnşaat.',
    disclaimer:
      'Images and plans on this site are indicative and may change in the construction drawings. They are not contractually binding.',
  },

  tourScenes: {
    'dis-mekan': 'Exterior tour',
    'ic-mekan': 'Show apartment tour',
    '3d-360-location-1': 'Playground',
    '3d-360-location-2': 'Poolside',
    '3d-360-location-3': 'Tree-lined road',
    '3d-360-location-4': 'Road by the blocks',
    '3d-360-location-7': 'Flower garden',
    '3d-360-location-8': 'Garden wall',
    '3d-360-location-9': 'Walkway',
    '3d-360-location-10': 'Lawn',
    'yeni-salon': 'Living room',
    'mutfak-interactive-lightmix': 'Kitchen',
    'oda-interactive-lightmix': "Child's bedroom",
    'yatakodasi-interactive-lightmix': 'Bedroom',
    'yatakodasibanyo-interactive-lightmix': 'En-suite bathroom',
    'banyo-interactive-lightmix': 'Bathroom',
    'koridor-interactive-lightmix': 'Hallway',
  },

  media: {
    'exterior/gate': 'The main gate and landscaped approach to The Pearl of Yalova',
    'exterior/aerial-dusk': 'Aerial view of the three blocks at dusk',
    'exterior/aerial-night': 'Aerial view of the site under night lighting',
    'exterior/aerial-day': 'Daytime aerial view: blocks, parking and landscaped garden',
    'exterior/aerial-sunset': 'The blocks within the forest, seen from the air at sunset',
    'exterior/aerial-top': 'Overhead view of the site layout and swimming pool',
    'exterior/aerial-blocks': 'General aerial view of blocks A, B and C',
    'exterior/aerial-lit': 'Lit walkways and the parking area',
    'exterior/pool': 'The outdoor swimming pool and its sun terrace',
    'exterior/pool-deck': 'The pool terrace and the block façades',
    'exterior/garden-path': 'A walkway planted with seasonal flowers',
    'exterior/garden-tree': 'Planting in the garden against a block façade',
    'exterior/lawn': 'The open lawn in front of the blocks',
    'exterior/entrance-door': 'A block entrance and the planting in front of it',
    'exterior/facade-street': 'The block façade seen from the street',
    'exterior/facade-side': 'The side façade of the blocks and the garden wall',
    'exterior/facade-front': 'The front façade and the arrangement of balconies',
    'exterior/facade-corner': 'Corner façade detail with landscaping',
    'exterior/facade-balconies': 'Wide balconies running through the storeys',
    'exterior/facade-detail': 'Reinterpreted Seljuk motif detail on the façade',
    'exterior/driveway': 'Controlled vehicle entrance and the internal road',
    'exterior/street-view': 'The street and pedestrian route around the project',
    'interior/living-grey': 'Show apartment living room: seating and dining areas',
    'interior/kitchen': 'Timber-toned kitchen with a breakfast table',
    'interior/bathroom-ensuite': 'En-suite bathroom with shower enclosure',
    'interior/bedroom': 'Bedroom with a dressing unit',
    'interior/bathroom-guest': 'Guest bathroom and basin detail',
    'interior/living-tv': 'The television side of the living room',
    'interior/garage': 'Numbered bays in the covered car park',
    'interior/gym': 'Fitness suite: cardio and weights areas',
    'interior/sauna': 'Timber-lined sauna',
    'interior/kids-room': 'Child’s bedroom with a study desk',
    'interior/duplex-stairs': 'Staircase and hall in a duplex apartment',
    'interior/hallway': 'Internal corridor and room entrances',
    'siteplan/vaziyet': 'Site layout: the positions of blocks A, B and C and the direction of the sea',
    'siteplan/vaziyet-a': 'Block A highlighted on the site layout',
    'siteplan/vaziyet-b': 'Block B highlighted on the site layout',
    'siteplan/vaziyet-c': 'Block C highlighted on the site layout',
    'map/ulasim': 'Istanbul – Yalova access map: sea bus routes and the road connection',
  },
};
