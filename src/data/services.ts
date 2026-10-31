export interface ServiceDefinition {
  title: string;
  slug: string;
  shortTitle: string;
  tier: 'core' | 'specialist' | 'optional';
  enabled: boolean;
  wave: number;
  icon: string;
  summary: string;
  priceFrom?: number;
  priceUnit?: string;
  priceNotes?: string;
  order: number;
}

export const servicesRegistry: ServiceDefinition[] = [
  // 6 Core Services (Wave 1 - Enabled)
  {
    title: 'House Removals',
    slug: 'house-removals',
    shortTitle: 'House Removals',
    tier: 'core',
    enabled: true,
    wave: 1,
    icon: 'home',
    summary: 'Comprehensive, fully insured residential home moves across North West London and UK-wide.',
    priceFrom: 350,
    priceUnit: 'move',
    priceNotes: 'Based on 1-bed house local move, off-peak. Survey required for fixed quote.',
    order: 1
  },
  {
    title: 'Flat Removals',
    slug: 'flat-removals',
    shortTitle: 'Flat Removals',
    tier: 'core',
    enabled: true,
    wave: 1,
    icon: 'building',
    summary: 'Specialist flat and apartment moves in Victorian conversions, modern developments and mansion blocks.',
    priceFrom: 280,
    priceUnit: 'move',
    priceNotes: 'Based on studio/1-bed flat with lift or ground floor access.',
    order: 2
  },
  {
    title: 'Man and Van',
    slug: 'man-and-van',
    shortTitle: 'Man and Van',
    tier: 'core',
    enabled: true,
    wave: 1,
    icon: 'truck',
    summary: 'Professional, insured man and van service for smaller home moves, studio flats and single large items.',
    priceFrom: 65,
    priceUnit: 'hour',
    priceNotes: 'Minimum 2-hour booking. Includes Luton van and professional mover.',
    order: 3
  },
  {
    title: 'Office & Commercial Removals',
    slug: 'office-removals',
    shortTitle: 'Office Removals',
    tier: 'core',
    enabled: true,
    wave: 1,
    icon: 'briefcase',
    summary: 'Seamless business relocations, IT crate hire, and out-of-hours office moves minimizing company downtime.',
    priceFrom: 450,
    priceUnit: 'move',
    priceNotes: 'Based on small office relocation. Site survey and project plan included.',
    order: 4
  },
  {
    title: 'Packing Services & Materials',
    slug: 'packing-services',
    shortTitle: 'Packing Services',
    tier: 'core',
    enabled: true,
    wave: 1,
    icon: 'package',
    summary: 'Full packing, fragile-only packing, wardrobe boxes and export-grade wrapping materials delivered to your door.',
    priceFrom: 180,
    priceUnit: 'service',
    priceNotes: 'Based on part-packing service. All high-grade packing materials included.',
    order: 5
  },
  {
    title: 'Storage Solutions',
    slug: 'storage',
    shortTitle: 'Storage',
    tier: 'core',
    enabled: true,
    wave: 1,
    icon: 'archive',
    summary: 'Safe, clean, climate-controlled containerized and self-storage solutions with door-to-door collection.',
    priceFrom: 25,
    priceUnit: 'week',
    priceNotes: 'Based on 35 sq ft secure storage unit with collection service.',
    order: 6
  },

  // 6 Specialist Services (Wave 4 - Enabled in Part 2)
  {
    title: 'Piano Removals',
    slug: 'piano-removals',
    shortTitle: 'Piano Removals',
    tier: 'specialist',
    enabled: true,
    wave: 4,
    icon: 'music',
    summary: 'Specialist equipment, piano shoes and tailored transit blankets for upright and grand pianos.',
    priceFrom: 180,
    priceUnit: 'move',
    priceNotes: 'Based on ground-floor upright piano move. Multi-floor and grand pianos priced by survey.',
    order: 7
  },
  {
    title: 'Fine Art & Antiques Removals',
    slug: 'fine-art-and-antiques-removals',
    shortTitle: 'Fine Art & Antiques',
    tier: 'specialist',
    enabled: true,
    wave: 4,
    icon: 'frame',
    summary: 'Bespoke wooden crating, acid-free tissue and temperature-sensitive handling for high-value artwork.',
    priceFrom: 220,
    priceUnit: 'move',
    priceNotes: 'Includes bespoke protective packaging and high-value transit coverage.',
    order: 8
  },
  {
    title: 'Furniture Removals & Assembly',
    slug: 'furniture-removals',
    shortTitle: 'Furniture Removals',
    tier: 'specialist',
    enabled: true,
    wave: 4,
    icon: 'tool',
    summary: 'Careful dismantling, safe transit and reassembly of flat-pack and oversized designer furniture.',
    priceFrom: 95,
    priceUnit: 'item',
    priceNotes: 'Based on standard large wardrobe or bed disassembly and reassembly.',
    order: 9
  },
  {
    title: 'Long-Distance & UK-Wide Removals',
    slug: 'long-distance-removals',
    shortTitle: 'Long Distance',
    tier: 'specialist',
    enabled: true,
    wave: 4,
    icon: 'compass',
    summary: 'Dedicated door-to-door relocations from London to Manchester, Birmingham, Bristol, Scotland and beyond.',
    priceFrom: 550,
    priceUnit: 'move',
    priceNotes: 'Dedicated direct vehicle with guaranteed delivery window and no load consolidation.',
    order: 10
  },
  {
    title: 'Student Removals',
    slug: 'student-removals',
    shortTitle: 'Student Removals',
    tier: 'specialist',
    enabled: true,
    wave: 4,
    icon: 'book-open',
    summary: 'Affordable term-time moves and holiday storage for university students across London.',
    priceFrom: 65,
    priceUnit: 'hour',
    priceNotes: 'Special student discount rates for Middlesex University Hendon and London campus moves.',
    order: 11
  },
  {
    title: 'Same-Day & Last-Minute Removals',
    slug: 'same-day-removals',
    shortTitle: 'Same Day Removals',
    tier: 'specialist',
    enabled: true,
    wave: 4,
    icon: 'clock',
    summary: 'Rapid response short-notice and emergency moves across North West London subject to van availability.',
    priceFrom: 120,
    priceUnit: 'hour',
    priceNotes: 'Available 7 days a week for urgent moves, chain collapses, or short-notice tenancy ends.',
    order: 12
  },

  // Optional Services (Disabled until client confirms)
  {
    title: 'House Clearance & Rubbish Removal',
    slug: 'house-clearance',
    shortTitle: 'House Clearance',
    tier: 'optional',
    enabled: false,
    wave: 5,
    icon: 'trash-2',
    summary: 'Licensed environmental waste disposal and compassionate probate house clearances.',
    order: 13
  },
  {
    title: 'End-of-Tenancy Cleaning',
    slug: 'end-of-tenancy-cleaning',
    shortTitle: 'End-of-Tenancy Cleaning',
    tier: 'optional',
    enabled: false,
    wave: 5,
    icon: 'sparkles',
    summary: 'Deposit-guarantee professional deep cleaning coordinated with your moving schedule.',
    order: 14
  },
  {
    title: 'European & International Removals',
    slug: 'international-removals',
    shortTitle: 'International Removals',
    tier: 'optional',
    enabled: false,
    wave: 5,
    icon: 'globe',
    summary: 'Customs clearance, export crating and overseas shipping to Europe and worldwide.',
    order: 15
  },
  {
    title: 'Downsizing & Later-Life Moves',
    slug: 'downsizing-removals',
    shortTitle: 'Downsizing Moves',
    tier: 'optional',
    enabled: false,
    wave: 5,
    icon: 'heart',
    summary: 'Patient, methodical and sensitive moving assistance for seniors transitioning to new homes.',
    order: 16
  },
  {
    title: 'Landlord & Letting Agent Moves',
    slug: 'landlord-and-letting-agent-removals',
    shortTitle: 'Landlord & Agent Moves',
    tier: 'optional',
    enabled: false,
    wave: 5,
    icon: 'key',
    summary: 'Contract moving, furniture delivery and staging support for property managers and landlords.',
    order: 17
  }
];

export default servicesRegistry;
