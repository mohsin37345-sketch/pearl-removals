export interface MicroAreaDefinition {
  name: string;
  slug: string;
  premium: boolean;
}

export interface AreaDefinition {
  name: string;
  slug: string;
  region: 'north-west-london' | 'west-london' | 'central-london' | 'north-london' | 'outer-north-west-london';
  regionName: string;
  phase: 1 | 2 | 3;
  premium: boolean;
  postcodes: string[];
  boroughs: string[];
  distanceMiles: number;
  micros: MicroAreaDefinition[];
}

export interface RegionDefinition {
  slug: 'north-west-london' | 'west-london' | 'central-london' | 'north-london' | 'outer-north-west-london';
  name: string;
  intro: string;
  phase: 1 | 2 | 3;
}

export const regionsRegistry: RegionDefinition[] = [
  {
    slug: 'north-west-london',
    name: 'North West London',
    intro: 'Our core operating territory centered around our Cricklewood NW2 base, covering NW2, NW3, NW4, NW6, NW7, NW8, NW9, NW10 and NW11.',
    phase: 1
  },
  {
    slug: 'west-london',
    name: 'West London',
    intro: 'West London removals spanning Maida Vale, Paddington and Kensal Green through to Notting Hill, Kensington and Chiswick.',
    phase: 1
  },
  {
    slug: 'central-london',
    name: 'Central London',
    intro: 'Prime central London removals covering Marylebone, Camden, Mayfair, Fitzrovia and Knightsbridge.',
    phase: 2
  },
  {
    slug: 'north-london',
    name: 'North London',
    intro: 'North London residential moves covering Highgate, Muswell Hill, Totteridge, Crouch End and Barnet.',
    phase: 2
  },
  {
    slug: 'outer-north-west-london',
    name: 'Outer North West London & Herts Borders',
    intro: 'Covering suburban family moves through Stanmore, Harrow, Edgware, Pinner, Northwood, Bushey and Radlett.',
    phase: 2
  }
];

export const areasRegistry: AreaDefinition[] = [
  // ==========================================
  // PHASE 1 — NORTH WEST LONDON (Launch)
  // ==========================================
  {
    name: 'Cricklewood',
    slug: 'cricklewood',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW2'],
    boroughs: ['Brent', 'Barnet', 'Camden'],
    distanceMiles: 0,
    micros: [
      { name: 'Cricklewood Broadway', slug: 'cricklewood-broadway', premium: false },
      { name: 'Cricklewood Lane', slug: 'cricklewood-lane', premium: false },
      { name: 'Cricklewood Green', slug: 'cricklewood-green', premium: false },
      { name: 'Clitterhouse', slug: 'clitterhouse', premium: false },
      { name: 'Railway Terraces', slug: 'railway-terraces', premium: false },
      { name: 'Gladstone Park', slug: 'gladstone-park', premium: false }
    ]
  },
  {
    name: 'Dollis Hill',
    slug: 'dollis-hill',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW2', 'NW10'],
    boroughs: ['Brent'],
    distanceMiles: 1,
    micros: [
      { name: 'Dudden Hill', slug: 'dudden-hill', premium: false },
      { name: 'Dollis Hill Lane', slug: 'dollis-hill-lane', premium: false },
      { name: 'Dollis Hill Estate', slug: 'dollis-hill-estate', premium: false }
    ]
  },
  {
    name: 'Childs Hill',
    slug: 'childs-hill',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW2'],
    boroughs: ['Barnet'],
    distanceMiles: 1,
    micros: [
      { name: 'Childs Hill Park', slug: 'childs-hill-park', premium: false },
      { name: 'Hendon Way', slug: 'hendon-way', premium: false },
      { name: 'West Heath', slug: 'west-heath', premium: true }
    ]
  },
  {
    name: 'Brondesbury',
    slug: 'brondesbury',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW2', 'NW6'],
    boroughs: ['Brent'],
    distanceMiles: 1,
    micros: [
      { name: 'Brondesbury Park', slug: 'brondesbury-park', premium: true },
      { name: 'Mapesbury', slug: 'mapesbury', premium: true },
      { name: 'Shoot Up Hill', slug: 'shoot-up-hill', premium: false },
      { name: 'Christchurch Avenue', slug: 'christchurch-avenue', premium: false }
    ]
  },
  {
    name: 'Willesden Green',
    slug: 'willesden-green',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW10', 'NW2'],
    boroughs: ['Brent'],
    distanceMiles: 1,
    micros: [
      { name: 'Walm Lane', slug: 'walm-lane', premium: false },
      { name: 'Willesden High Road', slug: 'willesden-high-road', premium: false },
      { name: 'Chapter Road', slug: 'chapter-road', premium: false }
    ]
  },
  {
    name: 'Brent Cross',
    slug: 'brent-cross',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW4', 'NW2'],
    boroughs: ['Barnet'],
    distanceMiles: 1,
    micros: [
      { name: 'Brent Cross Town', slug: 'brent-cross-town', premium: false },
      { name: 'Brent Cross West', slug: 'brent-cross-west', premium: false },
      { name: 'Brent Terrace', slug: 'brent-terrace', premium: false }
    ]
  },
  {
    name: 'Kilburn',
    slug: 'kilburn',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW6'],
    boroughs: ['Brent', 'Camden'],
    distanceMiles: 1.5,
    micros: [
      { name: 'Kilburn High Road', slug: 'kilburn-high-road', premium: false },
      { name: 'South Kilburn', slug: 'south-kilburn', premium: false },
      { name: 'Kilburn Park', slug: 'kilburn-park', premium: false },
      { name: 'Kilburn Priory', slug: 'kilburn-priory', premium: false }
    ]
  },
  {
    name: 'West Hampstead',
    slug: 'west-hampstead',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW6'],
    boroughs: ['Camden'],
    distanceMiles: 1.5,
    micros: [
      { name: 'West End Lane', slug: 'west-end-lane', premium: false },
      { name: 'Fortune Green', slug: 'fortune-green', premium: false },
      { name: 'Mill Lane', slug: 'mill-lane', premium: false },
      { name: 'South Hampstead', slug: 'south-hampstead', premium: true },
      { name: 'Broadhurst Gardens', slug: 'broadhurst-gardens', premium: false }
    ]
  },
  {
    name: 'Golders Green',
    slug: 'golders-green',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW11'],
    boroughs: ['Barnet'],
    distanceMiles: 1.5,
    micros: [
      { name: 'Golders Green Road', slug: 'golders-green-road', premium: false },
      { name: 'Temple Fortune', slug: 'temple-fortune', premium: false },
      { name: 'Golders Hill', slug: 'golders-hill', premium: true },
      { name: 'Hoop Lane', slug: 'hoop-lane', premium: false }
    ]
  },
  {
    name: 'Neasden',
    slug: 'neasden',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW10'],
    boroughs: ['Brent'],
    distanceMiles: 1.5,
    micros: [
      { name: 'Neasden Lane', slug: 'neasden-lane', premium: false },
      { name: 'Brentfield', slug: 'brentfield', premium: false },
      { name: 'Roundwood', slug: 'roundwood', premium: false },
      { name: 'Church End (Willesden)', slug: 'church-end', premium: false }
    ]
  },
  {
    name: 'Hendon',
    slug: 'hendon',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW4', 'NW9'],
    boroughs: ['Barnet'],
    distanceMiles: 2,
    micros: [
      { name: 'Hendon Central', slug: 'hendon-central', premium: false },
      { name: 'Brent Street', slug: 'brent-street', premium: false },
      { name: 'Hendon Park', slug: 'hendon-park', premium: false },
      { name: 'Hendon Village', slug: 'hendon-village', premium: false },
      { name: 'Sentinel Square', slug: 'sentinel-square', premium: false },
      { name: 'West Hendon', slug: 'west-hendon', premium: false }
    ]
  },
  {
    name: 'Hampstead',
    slug: 'hampstead',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: true,
    postcodes: ['NW3'],
    boroughs: ['Camden'],
    distanceMiles: 2.5,
    micros: [
      { name: 'Hampstead Village', slug: 'hampstead-village', premium: true },
      { name: 'Frognal', slug: 'frognal', premium: true },
      { name: 'Redington Road', slug: 'redington-road', premium: true },
      { name: 'Fitzjohn\'s Avenue', slug: 'fitzjohns-avenue', premium: true },
      { name: 'Downshire Hill', slug: 'downshire-hill', premium: true },
      { name: 'Vale of Health', slug: 'vale-of-health', premium: true },
      { name: 'Hampstead Heath', slug: 'hampstead-heath', premium: true },
      { name: 'South End Green', slug: 'south-end-green', premium: true }
    ]
  },
  {
    name: 'Swiss Cottage',
    slug: 'swiss-cottage',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW3'],
    boroughs: ['Camden'],
    distanceMiles: 2.5,
    micros: [
      { name: 'Finchley Road', slug: 'finchley-road', premium: false },
      { name: 'Eton Avenue', slug: 'eton-avenue', premium: true },
      { name: 'Adelaide Road', slug: 'adelaide-road', premium: false },
      { name: 'Fairfax Road', slug: 'fairfax-road', premium: false }
    ]
  },
  {
    name: 'Belsize Park',
    slug: 'belsize-park',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: true,
    postcodes: ['NW3'],
    boroughs: ['Camden'],
    distanceMiles: 3,
    micros: [
      { name: 'Belsize Village', slug: 'belsize-village', premium: true },
      { name: 'Belsize Park Gardens', slug: 'belsize-park-gardens', premium: true },
      { name: 'Haverstock Hill', slug: 'haverstock-hill', premium: true },
      { name: 'England\'s Lane', slug: 'englands-lane', premium: true },
      { name: 'Chalk Farm', slug: 'chalk-farm', premium: true }
    ]
  },
  {
    name: 'Primrose Hill',
    slug: 'primrose-hill',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: true,
    postcodes: ['NW1', 'NW3'],
    boroughs: ['Camden'],
    distanceMiles: 3.5,
    micros: [
      { name: 'Regent\'s Park Road', slug: 'regents-park-road', premium: true },
      { name: 'Chalcot Square', slug: 'chalcot-square', premium: true },
      { name: 'Gloucester Avenue', slug: 'gloucester-avenue', premium: true }
    ]
  },
  {
    name: 'St John\'s Wood',
    slug: 'st-johns-wood',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: true,
    postcodes: ['NW8'],
    boroughs: ['Westminster'],
    distanceMiles: 3,
    micros: [
      { name: 'Hamilton Terrace', slug: 'hamilton-terrace', premium: true },
      { name: 'Avenue Road', slug: 'avenue-road', premium: true },
      { name: 'St John\'s Wood High Street', slug: 'st-johns-wood-high-street', premium: true },
      { name: 'Abbey Road', slug: 'abbey-road', premium: true },
      { name: 'Grove End Road', slug: 'grove-end-road', premium: true },
      { name: 'Lord\'s', slug: 'lords', premium: true },
      { name: 'Lisson Grove', slug: 'lisson-grove', premium: true }
    ]
  },
  {
    name: 'Queen\'s Park',
    slug: 'queens-park',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW6', 'W10'],
    boroughs: ['Brent', 'Westminster'],
    distanceMiles: 2.5,
    micros: [
      { name: 'Salusbury Road', slug: 'salusbury-road', premium: false },
      { name: 'Queen\'s Park Estate', slug: 'queens-park-estate', premium: false },
      { name: 'Brondesbury Villas', slug: 'brondesbury-villas', premium: false }
    ]
  },
  {
    name: 'Kensal Rise',
    slug: 'kensal-rise',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW10'],
    boroughs: ['Brent'],
    distanceMiles: 2.5,
    micros: [
      { name: 'Chamberlayne Road', slug: 'chamberlayne-road', premium: false },
      { name: 'College Road', slug: 'college-road', premium: false }
    ]
  },
  {
    name: 'Harlesden & Willesden',
    slug: 'harlesden-and-willesden',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW10'],
    boroughs: ['Brent'],
    distanceMiles: 2.5,
    micros: [
      { name: 'Harlesden', slug: 'harlesden', premium: false },
      { name: 'Willesden', slug: 'willesden', premium: false },
      { name: 'Craven Park', slug: 'craven-park', premium: false },
      { name: 'Stonebridge', slug: 'stonebridge', premium: false },
      { name: 'Roundwood Park', slug: 'roundwood-park', premium: false },
      { name: 'Willesden Junction', slug: 'willesden-junction', premium: false }
    ]
  },
  {
    name: 'Colindale & Kingsbury',
    slug: 'colindale-and-kingsbury',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['NW9'],
    boroughs: ['Barnet', 'Brent'],
    distanceMiles: 3,
    micros: [
      { name: 'Colindale', slug: 'colindale', premium: false },
      { name: 'Grahame Park', slug: 'grahame-park', premium: false },
      { name: 'Beaufort Park', slug: 'beaufort-park', premium: false },
      { name: 'The Hyde', slug: 'the-hyde', premium: false },
      { name: 'Kingsbury', slug: 'kingsbury', premium: false },
      { name: 'Roe Green', slug: 'roe-green', premium: false }
    ]
  },
  {
    name: 'Mill Hill',
    slug: 'mill-hill',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: true,
    postcodes: ['NW7'],
    boroughs: ['Barnet'],
    distanceMiles: 4,
    micros: [
      { name: 'Mill Hill Village', slug: 'mill-hill-village', premium: true },
      { name: 'The Ridgeway', slug: 'the-ridgeway', premium: true },
      { name: 'Highwood Hill', slug: 'highwood-hill', premium: true },
      { name: 'Mill Hill Broadway', slug: 'mill-hill-broadway', premium: true },
      { name: 'Mill Hill East', slug: 'mill-hill-east', premium: true },
      { name: 'Millbrook Park', slug: 'millbrook-park', premium: true }
    ]
  },
  {
    name: 'Hampstead Garden Suburb',
    slug: 'hampstead-garden-suburb',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: true,
    postcodes: ['NW11', 'N2'],
    boroughs: ['Barnet'],
    distanceMiles: 3,
    micros: [
      { name: 'Central Square', slug: 'central-square', premium: true },
      { name: 'The Bishops Avenue', slug: 'the-bishops-avenue', premium: true },
      { name: 'Winnington Road', slug: 'winnington-road', premium: true },
      { name: 'Lyttelton Road', slug: 'lyttelton-road', premium: true }
    ]
  },
  {
    name: 'Finchley',
    slug: 'finchley',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['N3', 'N2'],
    boroughs: ['Barnet'],
    distanceMiles: 3.5,
    micros: [
      { name: 'Finchley Central', slug: 'finchley-central', premium: false },
      { name: 'Church End (Finchley)', slug: 'church-end', premium: false },
      { name: 'Ballards Lane', slug: 'ballards-lane', premium: false },
      { name: 'East Finchley', slug: 'east-finchley', premium: false },
      { name: 'Woodside Park', slug: 'woodside-park', premium: false }
    ]
  },
  {
    name: 'Wembley Park',
    slug: 'wembley-park',
    region: 'north-west-london',
    regionName: 'North West London',
    phase: 1,
    premium: false,
    postcodes: ['HA9'],
    boroughs: ['Brent'],
    distanceMiles: 3,
    micros: [
      { name: 'Wembley Stadium area', slug: 'wembley-stadium-area', premium: false },
      { name: 'Chalkhill', slug: 'chalkhill', premium: false },
      { name: 'Forty Lane', slug: 'forty-lane', premium: false }
    ]
  },

  // Phase 1 - West London
  {
    name: 'Maida Vale',
    slug: 'maida-vale',
    region: 'west-london',
    regionName: 'West London',
    phase: 1,
    premium: true,
    postcodes: ['W9'],
    boroughs: ['Westminster'],
    distanceMiles: 3,
    micros: [
      { name: 'Little Venice', slug: 'little-venice', premium: true },
      { name: 'Warwick Avenue', slug: 'warwick-avenue', premium: true },
      { name: 'Randolph Avenue', slug: 'randolph-avenue', premium: true },
      { name: 'Clifton Gardens', slug: 'clifton-gardens', premium: true },
      { name: 'Elgin Avenue', slug: 'elgin-avenue', premium: true },
      { name: 'Maida Hill', slug: 'maida-hill', premium: true }
    ]
  },
  {
    name: 'Paddington',
    slug: 'paddington',
    region: 'west-london',
    regionName: 'West London',
    phase: 1,
    premium: false,
    postcodes: ['W2'],
    boroughs: ['Westminster'],
    distanceMiles: 4.5,
    micros: [
      { name: 'Paddington Basin', slug: 'paddington-basin', premium: false },
      { name: 'Merchant Square', slug: 'merchant-square', premium: false },
      { name: 'Sussex Gardens', slug: 'sussex-gardens', premium: false },
      { name: 'Westbourne Green', slug: 'westbourne-green', premium: false },
      { name: 'Connaught Village', slug: 'connaught-village', premium: true }
    ]
  },
  {
    name: 'Kensal Green & North Kensington',
    slug: 'kensal-green-and-north-kensington',
    region: 'west-london',
    regionName: 'West London',
    phase: 1,
    premium: false,
    postcodes: ['NW10', 'W10'],
    boroughs: ['Brent', 'Kensington & Chelsea'],
    distanceMiles: 3,
    micros: [
      { name: 'Kensal Green', slug: 'kensal-green', premium: false },
      { name: 'Kensal Town', slug: 'kensal-town', premium: false },
      { name: 'Golborne Road', slug: 'golborne-road', premium: false }
    ]
  },

  // ==========================================
  // PHASE 2 — MONTHS 3 TO 6
  // ==========================================
  // West London
  {
    name: 'Notting Hill',
    slug: 'notting-hill',
    region: 'west-london',
    regionName: 'West London',
    phase: 2,
    premium: true,
    postcodes: ['W11'],
    boroughs: ['Kensington & Chelsea'],
    distanceMiles: 5,
    micros: [
      { name: 'Portobello Road', slug: 'portobello-road', premium: true },
      { name: 'Ladbroke Grove', slug: 'ladbroke-grove', premium: true },
      { name: 'Ladbroke Square', slug: 'ladbroke-square', premium: true },
      { name: 'Pembridge Square', slug: 'pembridge-square', premium: true },
      { name: 'Lansdowne Crescent', slug: 'lansdowne-crescent', premium: true },
      { name: 'Notting Hill Gate', slug: 'notting-hill-gate', premium: true },
      { name: 'Westbourne Grove', slug: 'westbourne-grove', premium: true }
    ]
  },
  {
    name: 'Holland Park',
    slug: 'holland-park',
    region: 'west-london',
    regionName: 'West London',
    phase: 2,
    premium: true,
    postcodes: ['W11', 'W14'],
    boroughs: ['Kensington & Chelsea'],
    distanceMiles: 5.5,
    micros: [
      { name: 'Holland Park Avenue', slug: 'holland-park-avenue', premium: true },
      { name: 'Addison Road', slug: 'addison-road', premium: true },
      { name: 'Holland Villas Road', slug: 'holland-villas-road', premium: true }
    ]
  },
  {
    name: 'Bayswater',
    slug: 'bayswater',
    region: 'west-london',
    regionName: 'West London',
    phase: 2,
    premium: false,
    postcodes: ['W2'],
    boroughs: ['Westminster'],
    distanceMiles: 5,
    micros: [
      { name: 'Queensway', slug: 'queensway', premium: false },
      { name: 'Lancaster Gate', slug: 'lancaster-gate', premium: true },
      { name: 'Hyde Park Square', slug: 'hyde-park-square', premium: true },
      { name: 'Porchester Square', slug: 'porchester-square', premium: false }
    ]
  },
  {
    name: 'Acton',
    slug: 'acton',
    region: 'west-london',
    regionName: 'West London',
    phase: 2,
    premium: false,
    postcodes: ['W3'],
    boroughs: ['Ealing'],
    distanceMiles: 5.5,
    micros: [
      { name: 'Acton Town', slug: 'acton-town', premium: false },
      { name: 'North Acton', slug: 'north-acton', premium: false },
      { name: 'East Acton', slug: 'east-acton', premium: false },
      { name: 'South Acton', slug: 'south-acton', premium: false },
      { name: 'Acton Central', slug: 'acton-central', premium: false }
    ]
  },

  // Central London
  {
    name: 'Marylebone & Regent\'s Park',
    slug: 'marylebone-and-regents-park',
    region: 'central-london',
    regionName: 'Central London',
    phase: 2,
    premium: true,
    postcodes: ['W1', 'NW1'],
    boroughs: ['Westminster'],
    distanceMiles: 4.5,
    micros: [
      { name: 'Marylebone Village', slug: 'marylebone-village', premium: true },
      { name: 'Marylebone High Street', slug: 'marylebone-high-street', premium: true },
      { name: 'Harley Street', slug: 'harley-street', premium: true },
      { name: 'Dorset Square', slug: 'dorset-square', premium: true },
      { name: 'Regent\'s Park', slug: 'regents-park', premium: true },
      { name: 'Baker Street', slug: 'baker-street', premium: true }
    ]
  },
  {
    name: 'Camden Town',
    slug: 'camden-town',
    region: 'central-london',
    regionName: 'Central London',
    phase: 2,
    premium: false,
    postcodes: ['NW1'],
    boroughs: ['Camden'],
    distanceMiles: 4,
    micros: [
      { name: 'Camden Market', slug: 'camden-market', premium: false },
      { name: 'Mornington Crescent', slug: 'mornington-crescent', premium: false },
      { name: 'Camden Square', slug: 'camden-square', premium: false },
      { name: 'Chalk Farm Road', slug: 'chalk-farm-road', premium: false }
    ]
  },
  {
    name: 'Kentish Town',
    slug: 'kentish-town',
    region: 'central-london',
    regionName: 'Central London',
    phase: 2,
    premium: false,
    postcodes: ['NW5'],
    boroughs: ['Camden'],
    distanceMiles: 4,
    micros: [
      { name: 'Kentish Town Road', slug: 'kentish-town-road', premium: false },
      { name: 'Tufnell Park', slug: 'tufnell-park', premium: false },
      { name: 'Gospel Oak', slug: 'gospel-oak', premium: false },
      { name: 'Dartmouth Park', slug: 'dartmouth-park', premium: true }
    ]
  },

  // North London
  {
    name: 'Highgate',
    slug: 'highgate',
    region: 'north-london',
    regionName: 'North London',
    phase: 2,
    premium: true,
    postcodes: ['N6'],
    boroughs: ['Haringey', 'Camden'],
    distanceMiles: 4,
    micros: [
      { name: 'Highgate Village', slug: 'highgate-village', premium: true },
      { name: 'Highgate West Hill', slug: 'highgate-west-hill', premium: true },
      { name: 'Holly Lodge Estate', slug: 'holly-lodge-estate', premium: true },
      { name: 'Cholmeley Park', slug: 'cholmeley-park', premium: true }
    ]
  },
  {
    name: 'Muswell Hill',
    slug: 'muswell-hill',
    region: 'north-london',
    regionName: 'North London',
    phase: 2,
    premium: false,
    postcodes: ['N10'],
    boroughs: ['Haringey'],
    distanceMiles: 5,
    micros: [
      { name: 'Muswell Hill Broadway', slug: 'muswell-hill-broadway', premium: false },
      { name: 'Fortis Green', slug: 'fortis-green', premium: false },
      { name: 'Alexandra Park', slug: 'alexandra-park', premium: false },
      { name: 'Cranley Gardens', slug: 'cranley-gardens', premium: false }
    ]
  },
  {
    name: 'Totteridge & Whetstone',
    slug: 'totteridge-and-whetstone',
    region: 'north-london',
    regionName: 'North London',
    phase: 2,
    premium: true,
    postcodes: ['N20'],
    boroughs: ['Barnet'],
    distanceMiles: 6,
    micros: [
      { name: 'Totteridge Village', slug: 'totteridge-village', premium: true },
      { name: 'Totteridge Common', slug: 'totteridge-common', premium: true },
      { name: 'Whetstone', slug: 'whetstone', premium: true },
      { name: 'Oakleigh Park', slug: 'oakleigh-park', premium: true }
    ]
  },

  // Outer North West London & Herts borders
  {
    name: 'Edgware & Burnt Oak',
    slug: 'edgware-and-burnt-oak',
    region: 'outer-north-west-london',
    regionName: 'Outer North West London',
    phase: 2,
    premium: false,
    postcodes: ['HA8'],
    boroughs: ['Barnet', 'Harrow'],
    distanceMiles: 4.5,
    micros: [
      { name: 'Edgware Broadway', slug: 'edgware-broadway', premium: false },
      { name: 'Burnt Oak', slug: 'burnt-oak', premium: false },
      { name: 'Canons Park', slug: 'canons-park', premium: true }
    ]
  },
  {
    name: 'Stanmore',
    slug: 'stanmore',
    region: 'outer-north-west-london',
    regionName: 'Outer North West London',
    phase: 2,
    premium: true,
    postcodes: ['HA7'],
    boroughs: ['Harrow'],
    distanceMiles: 5.5,
    micros: [
      { name: 'Stanmore Hill', slug: 'stanmore-hill', premium: true },
      { name: 'Stanmore Common', slug: 'stanmore-common', premium: true },
      { name: 'Old Church Lane', slug: 'old-church-lane', premium: true },
      { name: 'Belmont', slug: 'belmont', premium: true }
    ]
  },
  {
    name: 'Harrow',
    slug: 'harrow',
    region: 'outer-north-west-london',
    regionName: 'Outer North West London',
    phase: 2,
    premium: false,
    postcodes: ['HA1', 'HA2', 'HA3'],
    boroughs: ['Harrow'],
    distanceMiles: 6,
    micros: [
      { name: 'Harrow-on-the-Hill', slug: 'harrow-on-the-hill', premium: true },
      { name: 'Harrow town centre', slug: 'harrow-town-centre', premium: false },
      { name: 'West Harrow', slug: 'west-harrow', premium: false },
      { name: 'Kenton', slug: 'kenton', premium: false },
      { name: 'Harrow Weald', slug: 'harrow-weald', premium: false }
    ]
  },
  {
    name: 'Wembley',
    slug: 'wembley',
    region: 'outer-north-west-london',
    regionName: 'Outer North West London',
    phase: 2,
    premium: false,
    postcodes: ['HA0'],
    boroughs: ['Brent'],
    distanceMiles: 4,
    micros: [
      { name: 'Alperton', slug: 'alperton', premium: false },
      { name: 'Sudbury', slug: 'sudbury', premium: false },
      { name: 'North Wembley', slug: 'north-wembley', premium: false },
      { name: 'Preston Road', slug: 'preston-road', premium: false }
    ]
  },

  // ==========================================
  // PHASE 3 — MONTH 6 ONWARDS
  // ==========================================
  // West London
  {
    name: 'Kensington',
    slug: 'kensington',
    region: 'west-london',
    regionName: 'West London',
    phase: 3,
    premium: true,
    postcodes: ['W8'],
    boroughs: ['Kensington & Chelsea'],
    distanceMiles: 5.5,
    micros: [
      { name: 'Kensington High Street', slug: 'kensington-high-street', premium: true },
      { name: 'Kensington Church Street', slug: 'kensington-church-street', premium: true },
      { name: 'Phillimore Estate', slug: 'phillimore-estate', premium: true },
      { name: 'Campden Hill', slug: 'campden-hill', premium: true },
      { name: 'Kensington Palace Gardens', slug: 'kensington-palace-gardens', premium: true }
    ]
  },
  {
    name: 'Shepherd\'s Bush & White City',
    slug: 'shepherds-bush-and-white-city',
    region: 'west-london',
    regionName: 'West London',
    phase: 3,
    premium: false,
    postcodes: ['W12'],
    boroughs: ['Hammersmith & Fulham'],
    distanceMiles: 6,
    micros: [
      { name: 'White City', slug: 'white-city', premium: false },
      { name: 'Wood Lane', slug: 'wood-lane', premium: false },
      { name: 'Askew Road', slug: 'askew-road', premium: false },
      { name: 'Brackenbury Village', slug: 'brackenbury-village', premium: true }
    ]
  },
  {
    name: 'Hammersmith',
    slug: 'hammersmith',
    region: 'west-london',
    regionName: 'West London',
    phase: 3,
    premium: false,
    postcodes: ['W6'],
    boroughs: ['Hammersmith & Fulham'],
    distanceMiles: 6.5,
    micros: [
      { name: 'Brook Green', slug: 'brook-green', premium: true },
      { name: 'Ravenscourt Park', slug: 'ravenscourt-park', premium: false },
      { name: 'Hammersmith Broadway', slug: 'hammersmith-broadway', premium: false }
    ]
  },
  {
    name: 'Chiswick',
    slug: 'chiswick',
    region: 'west-london',
    regionName: 'West London',
    phase: 3,
    premium: true,
    postcodes: ['W4'],
    boroughs: ['Hounslow'],
    distanceMiles: 7,
    micros: [
      { name: 'Chiswick High Road', slug: 'chiswick-high-road', premium: true },
      { name: 'Bedford Park', slug: 'bedford-park', premium: true },
      { name: 'Strand on the Green', slug: 'strand-on-the-green', premium: true },
      { name: 'Grove Park (Chiswick)', slug: 'grove-park', premium: true },
      { name: 'Turnham Green', slug: 'turnham-green', premium: true }
    ]
  },
  {
    name: 'Ealing',
    slug: 'ealing',
    region: 'west-london',
    regionName: 'West London',
    phase: 3,
    premium: false,
    postcodes: ['W5', 'W13'],
    boroughs: ['Ealing'],
    distanceMiles: 7,
    micros: [
      { name: 'Ealing Broadway', slug: 'ealing-broadway', premium: false },
      { name: 'Ealing Common', slug: 'ealing-common', premium: true },
      { name: 'Hanger Hill', slug: 'hanger-hill', premium: true },
      { name: 'Pitshanger', slug: 'pitshanger', premium: false },
      { name: 'West Ealing', slug: 'west-ealing', premium: false }
    ]
  },

  // Central London
  {
    name: 'Mayfair',
    slug: 'mayfair',
    region: 'central-london',
    regionName: 'Central London',
    phase: 3,
    premium: true,
    postcodes: ['W1'],
    boroughs: ['Westminster'],
    distanceMiles: 5,
    micros: [
      { name: 'Grosvenor Square', slug: 'grosvenor-square', premium: true },
      { name: 'Berkeley Square', slug: 'berkeley-square', premium: true },
      { name: 'Mount Street', slug: 'mount-street', premium: true },
      { name: 'Park Lane', slug: 'park-lane', premium: true }
    ]
  },
  {
    name: 'Knightsbridge & Belgravia',
    slug: 'knightsbridge-and-belgravia',
    region: 'central-london',
    regionName: 'Central London',
    phase: 3,
    premium: true,
    postcodes: ['SW1', 'SW7'],
    boroughs: ['Westminster', 'Kensington & Chelsea'],
    distanceMiles: 6,
    micros: [
      { name: 'Knightsbridge', slug: 'knightsbridge', premium: true },
      { name: 'Belgravia', slug: 'belgravia', premium: true },
      { name: 'Eaton Square', slug: 'eaton-square', premium: true },
      { name: 'Sloane Street', slug: 'sloane-street', premium: true }
    ]
  },
  {
    name: 'Chelsea',
    slug: 'chelsea',
    region: 'central-london',
    regionName: 'Central London',
    phase: 3,
    premium: true,
    postcodes: ['SW3', 'SW10'],
    boroughs: ['Kensington & Chelsea'],
    distanceMiles: 7,
    micros: [
      { name: 'King\'s Road', slug: 'kings-road', premium: true },
      { name: 'Cheyne Walk', slug: 'cheyne-walk', premium: true },
      { name: 'Sloane Square', slug: 'sloane-square', premium: true }
    ]
  },
  {
    name: 'Fitzrovia & Bloomsbury',
    slug: 'fitzrovia-and-bloomsbury',
    region: 'central-london',
    regionName: 'Central London',
    phase: 3,
    premium: false,
    postcodes: ['W1', 'WC1'],
    boroughs: ['Camden', 'Westminster'],
    distanceMiles: 5,
    micros: [
      { name: 'Fitzrovia', slug: 'fitzrovia', premium: false },
      { name: 'Bloomsbury', slug: 'bloomsbury', premium: false },
      { name: 'Charlotte Street', slug: 'charlotte-street', premium: false },
      { name: 'Russell Square', slug: 'russell-square', premium: false }
    ]
  },

  // North London
  {
    name: 'Crouch End',
    slug: 'crouch-end',
    region: 'north-london',
    regionName: 'North London',
    phase: 3,
    premium: false,
    postcodes: ['N8'],
    boroughs: ['Haringey'],
    distanceMiles: 6,
    micros: [
      { name: 'Crouch End Broadway', slug: 'crouch-end-broadway', premium: false },
      { name: 'Hornsey', slug: 'hornsey', premium: false },
      { name: 'Stroud Green', slug: 'stroud-green', premium: false }
    ]
  },
  {
    name: 'Barnet',
    slug: 'barnet',
    region: 'north-london',
    regionName: 'North London',
    phase: 3,
    premium: true,
    postcodes: ['EN5', 'EN4'],
    boroughs: ['Barnet'],
    distanceMiles: 7,
    micros: [
      { name: 'High Barnet', slug: 'high-barnet', premium: true },
      { name: 'Arkley', slug: 'arkley', premium: true },
      { name: 'Hadley Wood', slug: 'hadley-wood', premium: true },
      { name: 'Monken Hadley', slug: 'monken-hadley', premium: true },
      { name: 'Underhill', slug: 'underhill', premium: false }
    ]
  },
  {
    name: 'Southgate',
    slug: 'southgate',
    region: 'north-london',
    regionName: 'North London',
    phase: 3,
    premium: false,
    postcodes: ['N14', 'N21'],
    boroughs: ['Enfield'],
    distanceMiles: 8,
    micros: [
      { name: 'Southgate Green', slug: 'southgate-green', premium: false },
      { name: 'Oakwood', slug: 'oakwood', premium: false },
      { name: 'Cockfosters', slug: 'cockfosters', premium: false },
      { name: 'Palmers Green', slug: 'palmers-green', premium: false },
      { name: 'Winchmore Hill', slug: 'winchmore-hill', premium: true }
    ]
  },

  // Outer North West London & Herts borders
  {
    name: 'Pinner',
    slug: 'pinner',
    region: 'outer-north-west-london',
    regionName: 'Outer North West London',
    phase: 3,
    premium: true,
    postcodes: ['HA5'],
    boroughs: ['Harrow'],
    distanceMiles: 8,
    micros: [
      { name: 'Pinner Village', slug: 'pinner-village', premium: true },
      { name: 'Pinner Hill', slug: 'pinner-hill', premium: true },
      { name: 'Hatch End', slug: 'hatch-end', premium: true },
      { name: 'Eastcote', slug: 'eastcote', premium: true }
    ]
  },
  {
    name: 'Northwood',
    slug: 'northwood',
    region: 'outer-north-west-london',
    regionName: 'Outer North West London',
    phase: 3,
    premium: true,
    postcodes: ['HA6'],
    boroughs: ['Hillingdon'],
    distanceMiles: 10,
    micros: [
      { name: 'Moor Park', slug: 'moor-park', premium: true },
      { name: 'Northwood Hills', slug: 'northwood-hills', premium: true },
      { name: 'Batchworth Heath', slug: 'batchworth-heath', premium: true }
    ]
  },
  {
    name: 'Bushey & Elstree',
    slug: 'bushey-and-elstree',
    region: 'outer-north-west-london',
    regionName: 'Outer North West London',
    phase: 3,
    premium: false,
    postcodes: ['WD23', 'WD6'],
    boroughs: ['Hertsmere'],
    distanceMiles: 8,
    micros: [
      { name: 'Bushey Heath', slug: 'bushey-heath', premium: true },
      { name: 'Bushey', slug: 'bushey', premium: false },
      { name: 'Elstree', slug: 'elstree', premium: false },
      { name: 'Borehamwood', slug: 'borehamwood', premium: false }
    ]
  },
  {
    name: 'Radlett',
    slug: 'radlett',
    region: 'outer-north-west-london',
    regionName: 'Outer North West London',
    phase: 3,
    premium: true,
    postcodes: ['WD7'],
    boroughs: ['Hertsmere'],
    distanceMiles: 10,
    micros: [
      { name: 'Aldenham', slug: 'aldenham', premium: true },
      { name: 'Shenley', slug: 'shenley', premium: true }
    ]
  }
];

export default areasRegistry;
