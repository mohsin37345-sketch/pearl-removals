export interface SiteConfig {
  siteUrl: string;
  businessName: string;
  legalName: string;
  companyNumber: string;
  vatNumber: string;
  phone: string;
  phoneE164: string;
  whatsAppE164: string;
  email: string;
  tradingAddress: {
    street: string;
    area: string;
    city: string;
    postcode: string;
    formatted: string;
  };
  registeredAddress: {
    street: string;
    city: string;
    postcode: string;
    formatted: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string;
  openingHoursSpecification: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  insurance: {
    goodsInTransit: string;
    publicLiability: string;
  };
  priceRange: string;
  publishPhase: 1 | 2 | 3;
  geoRadiusByPhase: Record<1 | 2 | 3, number>;
  stats: Array<{
    label: string;
    value: string;
  }>;
  claims: string[];
  accreditations: Array<{
    name: string;
    logoUrl?: string;
    badgeUrl?: string;
  }>;
  trustPromises: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

const envPhase = typeof process !== 'undefined' && process.env?.PUBLISH_PHASE 
  ? parseInt(process.env.PUBLISH_PHASE, 10) 
  : 3;

export const siteConfig: SiteConfig = {
  siteUrl: 'https://www.pearlremovals.co.uk',
  businessName: 'Pearl Removals',
  legalName: 'Pearl Removals Ltd',
  companyNumber: '14892341',
  vatNumber: 'GB 432 1982 74',
  phone: '020 3151 8452',
  phoneE164: '+442031518452',
  whatsAppE164: '+447452845200',
  email: 'info@pearlremovals.co.uk',
  tradingAddress: {
    street: '142 Cricklewood Broadway',
    area: 'Cricklewood',
    city: 'London',
    postcode: 'NW2 3ED',
    formatted: '142 Cricklewood Broadway, Cricklewood, London NW2 3ED'
  },
  registeredAddress: {
    street: '142 Cricklewood Broadway',
    city: 'London',
    postcode: 'NW2 3ED',
    formatted: '142 Cricklewood Broadway, London NW2 3ED'
  },
  geo: {
    latitude: 51.5583,
    longitude: -0.2155
  },
  openingHours: 'Mon–Sun 07:00–20:00',
  openingHoursSpecification: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '20:00'
    }
  ],
  insurance: {
    goodsInTransit: '£50,000',
    publicLiability: '£5,000,000'
  },
  priceRange: '££–£££',
  publishPhase: ([1, 2, 3].includes(envPhase) ? envPhase : 3) as 1 | 2 | 3,
  geoRadiusByPhase: {
    1: 8000,
    2: 12000,
    3: 18000
  },
  // Empty by default per spec — only confirmed numbers are added
  stats: [],
  claims: [
    'Fully Insured (£50k GIT / £5M PL)',
    'Transparent Fixed Pricing',
    'No Hidden Key-Wait Surcharges',
    'Free No-Obligation Video or On-Site Survey',
    '7 Days a Week Availability'
  ],
  accreditations: [],
  trustPromises: [
    {
      title: 'Careful & Considerate Movers',
      description: 'Padded transit blankets, sofa covers, mattress protectors and door jamb guards standard on every move.',
      icon: 'shield-check'
    },
    {
      title: 'Local NW London Knowledge',
      description: 'Expertise in Camden, Brent & Barnet CPZs, parking suspensions, red routes and steep mansion block stairs.',
      icon: 'map-pin'
    },
    {
      title: 'Transparent Fixed Quotes',
      description: 'Clear written quotations with no hidden surprises, fuel charges or unpredictable weekend surcharges.',
      icon: 'receipt'
    },
    {
      title: 'Full In-Transit Protection',
      description: 'Comprehensive £50,000 Goods in Transit and £5,000,000 Public Liability insurance included.',
      icon: 'award'
    }
  ]
};

export default siteConfig;
