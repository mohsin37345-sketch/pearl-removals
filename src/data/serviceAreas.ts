export interface ServiceAreaRegistryItem {
  wave: number;
  group: 'Home base' | 'Premium Phase 1' | 'Premium Phase 1 specialist' | 'Business districts';
  serviceSlug: string;
  serviceTitle: string;
  areaSlug: string;
  areaTitle: string;
  url: string;
}

export const serviceAreasRegistry: ServiceAreaRegistryItem[] = [
  // Wave 3 — Home base (6)
  {
    wave: 3,
    group: 'Home base',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'cricklewood',
    areaTitle: 'Cricklewood',
    url: '/removals/man-and-van/cricklewood/'
  },
  {
    wave: 3,
    group: 'Home base',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'cricklewood',
    areaTitle: 'Cricklewood',
    url: '/removals/house-removals/cricklewood/'
  },
  {
    wave: 3,
    group: 'Home base',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'kilburn',
    areaTitle: 'Kilburn',
    url: '/removals/man-and-van/kilburn/'
  },
  {
    wave: 3,
    group: 'Home base',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'kilburn',
    areaTitle: 'Kilburn',
    url: '/removals/house-removals/kilburn/'
  },
  {
    wave: 3,
    group: 'Home base',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'hendon',
    areaTitle: 'Hendon',
    url: '/removals/man-and-van/hendon/'
  },
  {
    wave: 3,
    group: 'Home base',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'hendon',
    areaTitle: 'Hendon',
    url: '/removals/house-removals/hendon/'
  },

  // Wave 3 — Premium Phase 1 (14)
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'hampstead',
    areaTitle: 'Hampstead',
    url: '/removals/man-and-van/hampstead/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'hampstead',
    areaTitle: 'Hampstead',
    url: '/removals/house-removals/hampstead/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'belsize-park',
    areaTitle: 'Belsize Park',
    url: '/removals/man-and-van/belsize-park/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'belsize-park',
    areaTitle: 'Belsize Park',
    url: '/removals/house-removals/belsize-park/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'primrose-hill',
    areaTitle: 'Primrose Hill',
    url: '/removals/man-and-van/primrose-hill/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'primrose-hill',
    areaTitle: 'Primrose Hill',
    url: '/removals/house-removals/primrose-hill/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'st-johns-wood',
    areaTitle: 'St John\'s Wood',
    url: '/removals/man-and-van/st-johns-wood/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'st-johns-wood',
    areaTitle: 'St John\'s Wood',
    url: '/removals/house-removals/st-johns-wood/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'mill-hill',
    areaTitle: 'Mill Hill',
    url: '/removals/man-and-van/mill-hill/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'mill-hill',
    areaTitle: 'Mill Hill',
    url: '/removals/house-removals/mill-hill/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'hampstead-garden-suburb',
    areaTitle: 'Hampstead Garden Suburb',
    url: '/removals/man-and-van/hampstead-garden-suburb/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'hampstead-garden-suburb',
    areaTitle: 'Hampstead Garden Suburb',
    url: '/removals/house-removals/hampstead-garden-suburb/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'man-and-van',
    serviceTitle: 'Man and Van',
    areaSlug: 'maida-vale',
    areaTitle: 'Maida Vale',
    url: '/removals/man-and-van/maida-vale/'
  },
  {
    wave: 3,
    group: 'Premium Phase 1',
    serviceSlug: 'house-removals',
    serviceTitle: 'House Removals',
    areaSlug: 'maida-vale',
    areaTitle: 'Maida Vale',
    url: '/removals/house-removals/maida-vale/'
  },

  // Wave 6 — Premium Phase 1 specialist (14)
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'piano-removals',
    serviceTitle: 'Piano Removals',
    areaSlug: 'hampstead',
    areaTitle: 'Hampstead',
    url: '/removals/piano-removals/hampstead/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'fine-art-and-antiques-removals',
    serviceTitle: 'Fine Art & Antiques Removals',
    areaSlug: 'hampstead',
    areaTitle: 'Hampstead',
    url: '/removals/fine-art-and-antiques-removals/hampstead/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'piano-removals',
    serviceTitle: 'Piano Removals',
    areaSlug: 'belsize-park',
    areaTitle: 'Belsize Park',
    url: '/removals/piano-removals/belsize-park/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'fine-art-and-antiques-removals',
    serviceTitle: 'Fine Art & Antiques Removals',
    areaSlug: 'belsize-park',
    areaTitle: 'Belsize Park',
    url: '/removals/fine-art-and-antiques-removals/belsize-park/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'piano-removals',
    serviceTitle: 'Piano Removals',
    areaSlug: 'primrose-hill',
    areaTitle: 'Primrose Hill',
    url: '/removals/piano-removals/primrose-hill/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'fine-art-and-antiques-removals',
    serviceTitle: 'Fine Art & Antiques Removals',
    areaSlug: 'primrose-hill',
    areaTitle: 'Primrose Hill',
    url: '/removals/fine-art-and-antiques-removals/primrose-hill/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'piano-removals',
    serviceTitle: 'Piano Removals',
    areaSlug: 'st-johns-wood',
    areaTitle: 'St John\'s Wood',
    url: '/removals/piano-removals/st-johns-wood/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'fine-art-and-antiques-removals',
    serviceTitle: 'Fine Art & Antiques Removals',
    areaSlug: 'st-johns-wood',
    areaTitle: 'St John\'s Wood',
    url: '/removals/fine-art-and-antiques-removals/st-johns-wood/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'piano-removals',
    serviceTitle: 'Piano Removals',
    areaSlug: 'mill-hill',
    areaTitle: 'Mill Hill',
    url: '/removals/piano-removals/mill-hill/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'fine-art-and-antiques-removals',
    serviceTitle: 'Fine Art & Antiques Removals',
    areaSlug: 'mill-hill',
    areaTitle: 'Mill Hill',
    url: '/removals/fine-art-and-antiques-removals/mill-hill/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'piano-removals',
    serviceTitle: 'Piano Removals',
    areaSlug: 'hampstead-garden-suburb',
    areaTitle: 'Hampstead Garden Suburb',
    url: '/removals/piano-removals/hampstead-garden-suburb/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'fine-art-and-antiques-removals',
    serviceTitle: 'Fine Art & Antiques Removals',
    areaSlug: 'hampstead-garden-suburb',
    areaTitle: 'Hampstead Garden Suburb',
    url: '/removals/fine-art-and-antiques-removals/hampstead-garden-suburb/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'piano-removals',
    serviceTitle: 'Piano Removals',
    areaSlug: 'maida-vale',
    areaTitle: 'Maida Vale',
    url: '/removals/piano-removals/maida-vale/'
  },
  {
    wave: 6,
    group: 'Premium Phase 1 specialist',
    serviceSlug: 'fine-art-and-antiques-removals',
    serviceTitle: 'Fine Art & Antiques Removals',
    areaSlug: 'maida-vale',
    areaTitle: 'Maida Vale',
    url: '/removals/fine-art-and-antiques-removals/maida-vale/'
  },

  // Wave 7 — Business districts (4)
  {
    wave: 7,
    group: 'Business districts',
    serviceSlug: 'office-removals',
    serviceTitle: 'Office & Commercial Removals',
    areaSlug: 'paddington',
    areaTitle: 'Paddington',
    url: '/removals/office-removals/paddington/'
  },
  {
    wave: 7,
    group: 'Business districts',
    serviceSlug: 'office-removals',
    serviceTitle: 'Office & Commercial Removals',
    areaSlug: 'brent-cross',
    areaTitle: 'Brent Cross',
    url: '/removals/office-removals/brent-cross/'
  },
  {
    wave: 7,
    group: 'Business districts',
    serviceSlug: 'office-removals',
    serviceTitle: 'Office & Commercial Removals',
    areaSlug: 'marylebone-and-regents-park',
    areaTitle: 'Marylebone & Regent\'s Park',
    url: '/removals/office-removals/marylebone-and-regents-park/'
  },
  {
    wave: 7,
    group: 'Business districts',
    serviceSlug: 'office-removals',
    serviceTitle: 'Office & Commercial Removals',
    areaSlug: 'camden-town',
    areaTitle: 'Camden Town',
    url: '/removals/office-removals/camden-town/'
  }
];

export default serviceAreasRegistry;
