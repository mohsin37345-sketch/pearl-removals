import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const serviceAreasDir = path.join(rootDir, 'src/content/service-areas');

if (!fs.existsSync(serviceAreasDir)) fs.mkdirSync(serviceAreasDir, { recursive: true });

export const officeServiceAreas = [
  {
    service: 'office-removals',
    location: 'paddington',
    status: 'published',
    uniqueIntro: 'Pearl Removals delivers commercial office and business relocation services throughout Paddington W2 and the thriving commercial quarter of Paddington Basin. From high-growth technology firms and consultancies in modern glass towers along Merchant Square, North Wharf Road, and Eastbourne Terrace to established professional practices near Paddington Station and Praed Street, our commercial moving specialists execute office moves with meticulous phasing, zero disruption to your daily operations, and total data and equipment security. Stationed barely 15 minutes away at our Cricklewood dispatch headquarters, our fleet and commercial teams arrive with heavy-duty IT roll cages, colour-coded computer crates, and specialized anti-static packaging.',
    localAngle: 'Commercial relocations across Paddington Basin present distinct logistical requirements. Modern office complexes such as 5 Merchant Square, 2 Kingdom Street, and 4 More London Riverside feature subterranean service basements with strict vehicle height limits, security dock marshalling, and rigid time-slot booking systems. Our commercial project managers liaise with building facilities teams well before moving day, completing all security RAMS documentation, booking goods lifts exclusively, and scheduling moves over weekends or overnight to guarantee that your workforce experiences zero business downtime on Monday morning.',
    whatsIncluded: [
      'Dedicated commercial move manager and comprehensive pre-move phasing plan',
      'Colour-coded IT crates, security seals, and anti-static bubble wrap for desktop equipment',
      'De-commissioning, secure packing, transport, and re-commissioning of PC workstations and monitors',
      'Server rack relocation, confidential file sequential packing, and commercial archive crate hire',
      'Floor and wall surface protection across reception atriums, passenger lifts, and commercial corridors',
      'Disassembly and re-assembly of boardroom tables, modular bench desking, and office screening'
    ],
    priceGuidance: 'Commercial office moves in Paddington start from £650 for small offices (up to 10 workstations) and are quoted on a transparent, fixed-price basis following a comprehensive site survey.',
    faqs: [
      {
        question: 'Can you carry out office moves in Paddington over the weekend to prevent business downtime?',
        answer: 'Yes. The vast majority of our commercial office relocations across Paddington Basin take place between Friday evening and Sunday afternoon, ensuring your business is fully operational and employees can work as normal on Monday morning.',
        display: true
      },
      {
        question: 'Do you provide risk assessments and method statements (RAMS) for Paddington building management?',
        answer: 'Yes. We supply comprehensive site-specific Risk Assessments, Method Statements, and our £5,000,000 Public Liability insurance documentation directly to your Paddington building managers or facilities team in advance.',
        display: true
      },
      {
        question: 'How do you handle subterranean vehicle height restrictions in Paddington commercial loading bays?',
        answer: 'Our fleet includes specialized low-profile commercial vehicles and heavy-duty wheeled equipment designed specifically to clear Paddington Basin basement loading docks and service bay barriers.',
        display: true
      },
      {
        question: 'Can your team dismantle and reassemble modular systems desking in Paddington offices?',
        answer: 'Yes. Our experienced office fitting crew carries commercial power toolkits to systematically de-rig and re-assemble bench desking, conference tables, monitor arms, and cable trays.',
        display: true
      }
    ]
  },

  {
    service: 'office-removals',
    location: 'brent-cross',
    status: 'published',
    uniqueIntro: 'Pearl Removals provides dedicated commercial office and business relocations throughout Brent Cross NW4, the innovative commercial hub of Brent Cross Town, and surrounding North Circular business corridors. Whether moving corporate headquarters into new sustainable workspaces along Claremont Road, relocating commercial showrooms off the A5 Edgware Road, or transferring logistics offices near Staples Corner, our home-based commercial crews provide rapid, orderly, and seamless business transitions. Positioned barely one mile south at our Cricklewood Broadway transport depot, we offer immediate local deployment, dedicated commercial move coordinators, and comprehensive inventory management for North West London businesses.',
    localAngle: 'The development of Brent Cross Town has created one of London’s newest and most dynamic business districts, bringing state-of-the-art office spaces alongside established industrial parks. Commercial moves in Brent Cross benefit from rapid arterial road links via the M1 Junction 1 and the A406 North Circular, allowing our heavy transport vehicles to load and transit without negotiating central London congestion. Our moving teams are intimately familiar with access roads along Tilling Road, Brent Terrace, and commercial loading docks near Brent Cross West station, ensuring seamless vehicle movement and prompt loading schedules.',
    whatsIncluded: [
      'Comprehensive on-site technical survey and customized departmental move schedule',
      'Heavy-duty commercial crates, sequential labeling systems, and secure document bins',
      'Server rack packing, IT disconnect/reconnect services, and sensitive electronics transit blankets',
      'Safe removal of heavy office copiers, fire-proof filing cabinets, and industrial machinery',
      'Installation of lift protection and heavy-duty floor sheeting across commercial entranceways',
      'Environmentally compliant office furniture clearance and certified confidential paper shredding'
    ],
    priceGuidance: 'Office moves in Brent Cross start from £500 for boutique offices, with scalable fixed-price quotations following an on-site commercial survey.',
    faqs: [
      {
        question: 'Why choose Pearl Removals for commercial moves in Brent Cross?',
        answer: 'Our main transport depot is situated on Cricklewood Broadway, less than five minutes from Brent Cross, giving us unmatched local availability, rapid vehicle dispatch, and immediate on-site management support.',
        display: true
      },
      {
        question: 'Can you manage phased departmental relocations for large Brent Cross companies?',
        answer: 'Yes. We frequently organize phased relocations over multiple evenings or weekends, allowing non-disrupted departments to continue trading while other sections are moved and set up.',
        display: true
      },
      {
        question: 'Do you relocate servers and network rack hardware safely?',
        answer: 'Yes. We utilize foam-lined server flight cases, anti-static wrapping, and specialized hydraulic tail-lift transport to move critical IT hardware with absolute security.',
        display: true
      },
      {
        question: 'Can you assist with sustainable disposal of surplus office furniture in NW4?',
        answer: 'Yes. We offer eco-friendly commercial clearance, partnering with local charities and certified recycling facilities to ensure zero landfill waste for redundant office desks and chairs.',
        display: true
      }
    ]
  },

  {
    service: 'office-removals',
    location: 'marylebone-and-regents-park',
    status: 'published',
    uniqueIntro: 'Pearl Removals provides discreet, sophisticated commercial office relocations throughout Marylebone, Regent’s Park, and the premier NW1 and W1 business enclaves. From Harley Street and Wimpole Street medical clinics, dental surgeries, and private consulting rooms to boutique investment funds, legal practices, and architectural studios along Baker Street, Marylebone High Street, and Portland Place, our commercial moving specialists execute relocations with exceptional attention to detail, complete confidentiality, and white-glove professionalism. Operating from our central NW2 logistics hub, our vehicles navigate the Marylebone commercial network seamlessly via the A5 Edgware Road and Marylebone Road corridors.',
    localKnowledge: 'Commercial properties in Marylebone are predominantly housed within prestigious Georgian and Regency period townhouses or converted Edwardian mansion buildings. Relocating businesses here requires managing narrow period entranceways, delicate architectural mouldings, and strict Westminster City Council Controlled Parking regulations. Red routes along Marylebone Road require meticulous loading coordination, while medical practices around Harley Street demand certified handling of high-value diagnostic apparatus, confidential patient archives, and strict adherence to hygiene standards.',
    whatsIncluded: [
      'Senior commercial project coordinator overseeing the entire move from planning to execution',
      'Specialist crating and transit for sensitive medical devices, optical equipment, and consulting furniture',
      'Numbered security-sealed crates for confidential client records, legal briefs, and patient medical files',
      'Full IT decommissioning, anti-static protective wrapping, and desk-by-desk hardware reconnection',
      'Bespoke banister guards, wall padding, and carpet runners for historic Georgian townhouse interiors',
      'Out-of-hours, evening, and weekend relocation services to ensure uninterrupted client appointments'
    ],
    priceGuidance: 'Commercial practice and office moves in Marylebone start from £750, with bespoke fixed quotes tailored to your exact inventory and building access requirements.',
    faqs: [
      {
        question: 'Do you have experience moving medical and consulting practices on Harley Street?',
        answer: 'Yes. We regularly handle specialized moves for private doctors, dental clinics, and wellness practices in Harley Street and Wimpole Street, ensuring sensitive diagnostic tools and patient records are handled with utmost care.',
        display: true
      },
      {
        question: 'How do you arrange Westminster parking suspensions for commercial moves in Marylebone?',
        answer: 'We coordinate directly with Westminster City Council highways department to reserve commercial loading bays outside your premises, handling all permit paperwork well in advance.',
        display: true
      },
      {
        question: 'Can you move confidential financial and legal files with chain-of-custody tracking?',
        answer: 'Yes. We provide tamper-evident numbered security seals, locked lidded crates, and dedicated move manifests for sensitive legal, financial, and client files.',
        display: true
      },
      {
        question: 'How do you safeguard historic Georgian doorways and staircases in Marylebone offices?',
        answer: 'We install custom-fitted banister padding, protective foam corner guards, and heavy-duty floor runners across all entrance halls and staircases before carrying any equipment.',
        display: true
      }
    ]
  },

  {
    service: 'office-removals',
    location: 'camden-town',
    status: 'published',
    uniqueIntro: 'Pearl Removals delivers creative, agile commercial relocations throughout vibrant Camden Town NW1, Hawley Wharf, and the surrounding Regent’s Canal creative corridor. From cutting-edge digital agencies, fashion design studios, and sound engineering suites near Camden Lock and Chalk Farm Road to growing tech startups and co-working hubs along Camden High Street and Parkway, our commercial removals team delivers swift, organized, and cost-effective business moves. Based just across the borough border at our Cricklewood dispatch headquarters, our vehicles and crews reach Camden Town within 15 minutes, equipped with specialist IT crates, heavy roll cages, and high-capacity tail lifts.',
    localKnowledge: 'Camden Town is one of London’s most energetic cultural and commercial quarters, attracting creative, media, and technology enterprises. Relocating offices here requires careful management around high pedestrian footfall, street markets, and tight parking zones near Camden Lock. Access along Chalk Farm Road and Jamestown Road can be heavily congested during market operating hours, making early morning arrivals, evening transfers, or Sunday relocations the preferred strategy to ensure swift loading and clear van positioning.',
    whatsIncluded: [
      'Tailored commercial moving schedule customized to your agency or studio working hours',
      'Specialized foam-padded crates for audio-visual gear, studio monitors, editing consoles, and cameras',
      'Full IT disconnection, cable management bagging, and structured workstation relocation',
      'Crate hire service with delivery of packing supplies up to two weeks prior to moving day',
      'Disassembly and re-building of modern acoustic booths, communal benching, and studio shelving',
      'Camden Council parking suspension management and loading dispensation arrangements'
    ],
    priceGuidance: 'Studio and office relocations in Camden Town start from £550, with fully itemised, transparent written quotes following a free video or in-person survey.',
    faqs: [
      {
        question: 'How do you avoid Camden Market footfall during commercial moves?',
        answer: 'We schedule commercial vehicle loading early in the morning before market stalls set up, or perform the relocation on weekday evenings or Sundays to ensure completely clear street access.',
        display: true
      },
      {
        question: 'Can you transport specialized audio-visual, music studio, and camera equipment in Camden?',
        answer: 'Yes. We provide padded flight cases, anti-vibration transit blankets, and experienced porters trained in handling sensitive creative and broadcast electronics.',
        display: true
      },
      {
        question: 'Do you arrange Camden Council commercial parking suspensions?', answer: 'Yes. We submit official parking bay suspension applications directly to the London Borough of Camden, ensuring legal loading space outside your office building.', display: true
      },
      {
        question: 'Can you deliver packing crates in advance so our creative staff can pack personal items?',
        answer: 'Yes. We deliver colour-coded plastic lidded crates, bubble wrap, and security tags up to two weeks ahead of your move date so your team can pack at their own pace.',
        display: true
      }
    ]
  }
];

for (const sa of officeServiceAreas) {
  const filePath = path.join(serviceAreasDir, `office-removals_${sa.location}.json`);
  fs.writeFileSync(filePath, JSON.stringify(sa, null, 2), 'utf8');
  console.log(`Wrote service-area: office-removals_${sa.location}.json`);
}

console.log('✅ All 4 Office Removals service area files generated successfully.');
