import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { areasRegistry } from '../src/data/areas';
import { serviceAreasRegistry } from '../src/data/serviceAreas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const locationsDir = path.join(rootDir, 'src/content/locations');
const microAreasDir = path.join(rootDir, 'src/content/micro-areas');
const regionsDir = path.join(rootDir, 'src/content/regions');
const serviceAreasDir = path.join(rootDir, 'src/content/service-areas');

[locationsDir, microAreasDir, regionsDir, serviceAreasDir].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

export const regionsData = [
  {
    slug: 'north-west-london',
    name: 'North West London',
    intro: 'Pearl Removals delivers premier, fully insured residential and commercial removals throughout North West London. Based directly on Cricklewood Broadway NW2, our experienced moving crews operate with unmatched familiarity across NW2, NW3, NW4, NW6, NW7, NW8, NW9, NW10, and NW11. Whether you are transitioning between period conversion flats, multi-storey Victorian villas, modern townhouses, or luxury suburban estates, our localized logistics guarantee effortless moves.',
    body: `
      <h2>The Flagship Moving Specialists for North West London</h2>
      <p>North West London represents one of the capital's most architecturally diverse and geographically intricate sectors. Spanning from the historic hilltop lanes of Hampstead Village and the leafy avenues of Belsize Park to the energetic high streets of Kilburn, Hendon, and Cricklewood, relocating within this territory requires seasoned knowledge of local streets, controlled parking zones (CPZs), and building restrictions.</p>
      
      <p>At <strong>Pearl Removals</strong>, our operational headquarters is strategically located at 142 Cricklewood Broadway NW2. This base gives our fleet instant connectivity via the A5 Edgware Road, the A406 North Circular at Staples Corner, the A41 Hendon Way, and the start of the M1 motorway. This logistical advantage ensures our removal teams arrive punctually, navigate morning congestion with agility, and handle local moves with unmatched efficiency.</p>

      <h3>Navigating CPZs, Red Routes, and Parking Suspensions</h3>
      <p>Moving home in North West London requires rigorous adherence to borough-specific parking controls. The London Boroughs of Camden, Barnet, and Brent each enforce distinct permit systems, operating hours, and vehicle suspension lead times. For example, moving along red routes on the A5 or Finchley Road demands specific Transport for London (TfL) loading dispensations, while quiet residential mews in Hampstead or Queen's Park require parking bay suspensions booked 10 to 14 working days in advance.</p>
      
      <p>Our dedicated move coordinators handle all parking applications on your behalf. We calculate vehicle footprint requirements, liaise with local council parking departments, and ensure legal loading bays are reserved outside both your departure and destination addresses, shielding you from stressful Penalty Charge Notices (PCNs) on moving day.</p>

      <h3>Period Property Architecture: Conversions, Mansion Flats & Steep Stairwells</h3>
      <p>Much of North West London’s residential charm derives from its Victorian, Edwardian, and mid-century housing stock. Many grand townhouses have been converted into multi-level apartments characterized by narrow communal entranceways, sharp 90-degree landing turns, and steep staircases lacking passenger lifts. Transporting bulky modern items—such as American-style fridge-freezers, three-seater Chesterfield sofas, and king-size divan bases—through these restricted spaces requires disciplined kinetic techniques rather than brute force.</p>

      <p>Our movers use specialized floor runners, quilted banister protectors, and corner guards to safeguard original architectural plasterwork and timber mouldings. When items cannot navigate internal staircases, our furniture dismantling specialists deconstruct wardrobes, dining suites, and bed frames systematically, packing all fixings in catalogued hardware pouches before reassembling them seamlessly in your new home.</p>

      <h3>Comprehensive Services & Industry-Leading Protection</h3>
      <p>Every move with Pearl Removals includes £50,000 Goods in Transit insurance and £5,000,000 Public Liability insurance as standard. From our full packing service using export-grade double-walled cartons and acid-free tissue paper to our temperature-regulated container storage facilities in Cricklewood, we provide an all-inclusive moving experience tailored to the highest standards.</p>
    `,
    faqs: [
      {
        question: 'Why choose a removals company based in North West London?',
        answer: 'Being based in Cricklewood NW2 means our vehicles and crews are never more than 10 to 20 minutes from key residential areas like Hampstead, Hendon, Kilburn, Golders Green, and Mill Hill. We possess firsthand knowledge of local council parking enforcement, school run traffic bottlenecks, and narrow period stairwells.',
        display: true
      },
      {
        question: 'How do you coordinate moves across multiple London boroughs?',
        answer: 'Our operations team is thoroughly versed in the differing parking suspension protocols of Camden, Barnet, Brent, Westminster, and Harrow councils. We handle all cross-borough documentation and timeline synchronisation for seamless relocations.',
        display: true
      },
      {
        question: 'Can you accommodate chain delays and late key releases?',
        answer: 'Yes. Key delays are an everyday reality of London property transactions. Our crews stay on-site with your belongings safely locked inside our vehicles, maintaining transparent communication until keys are released.',
        display: true
      },
      {
        question: 'Do your removal vans comply with London ULEZ standards?',
        answer: 'Yes. Our entire fleet of modern Luton, 3.5-tonne, and 7.5-tonne removal vehicles is fully compliant with London Ultra Low Emission Zone (ULEZ) regulations, ensuring zero unexpected emissions surcharges.',
        display: true
      },
      {
        question: 'What packing materials do you supply for North West London moves?',
        answer: 'We provide heavy-duty double-walled cardboard boxes, wardrobe cartons with steel hanging rails, acid-free tissue paper for porcelain and fine glass, bubble wrap, mattress protectors, and heavy quilted transit blankets.',
        display: true
      }
    ]
  },
  {
    slug: 'west-london',
    name: 'West London',
    intro: 'Pearl Removals provides distinguished, white-glove residential removals throughout prime West London, focusing on Maida Vale, Paddington, Kensal Green, and North Kensington. Our team understands the refined demands of historic mansion blocks, canal-side penthouse apartments, and stucco-fronted terraces, ensuring courteous, impeccably organised moving services from start to finish.',
    body: `
      <h2>Premier Residential Relocations in West London</h2>
      <p>West London combines cosmopolitan elegance with architectural grandeur. From the sweeping red-brick mansion blocks of Maida Vale and Little Venice to the contemporary glass developments along Paddington Basin and the eclectic terraces of Kensal Green and Golborne Road, moving here requires an elevated standard of care, discretion, and logistical planning.</p>
      
      <p>Operating from our nearby NW2 base, <strong>Pearl Removals</strong> serves West London with swift responsiveness. Our proximity via Kilburn High Road, Harrow Road, and the Westway (A40) allows us to position removal crews effortlessly for early morning departures and tight completion schedules.</p>

      <h3>Mansion Block Expertise: Lifts, Porters & Service Access</h3>
      <p>A substantial portion of Maida Vale, Little Venice, and Paddington properties are situated within classic pre-war mansion blocks or modern gated waterside developments. These buildings maintain strict managing agent rules regarding moving hours, passenger lift protection, service lift bookings, and communal carpet coverings.</p>

      <p>Our move managers liaise directly with building concierges and head porters well before moving day. We supply protective lift blankets, lay heavy-duty floor protection through communal marble entrance halls, and schedule loading during permitted hours to prevent disturbance to neighbouring residents.</p>

      <h3>Controlled Parking & Westminster Loading Permissions</h3>
      <p>Westminster City Council and the Royal Borough of Kensington & Chelsea operate some of London's strictest controlled parking enforcement zones. Parking outside mansion blocks on wide avenues like Elgin Avenue, Randolph Avenue, or Sussex Gardens requires advance bay suspensions or specific commercial loading dispensations.</p>

      <p>We manage all permit paperwork directly with Westminster and RBKC councils, reserving curb space directly adjacent to your entrance steps. This prevents lengthy carries down long flights of stone stairs and ensures your belongings are transferred swiftly and safely into our carpeted vehicles.</p>
    `,
    faqs: [
      {
        question: 'Do you arrange lift protection and concierge clearance for West London mansion blocks?',
        answer: 'Yes. We communicate with your building management in advance, confirm approved moving hours, and install custom-fitted protective padding inside lifts and along communal entranceways.',
        display: true
      },
      {
        question: 'How do you handle moves into modern Paddington Basin apartments?',
        answer: 'Paddington Basin developments frequently feature underground basement loading bays with strict vehicle height restrictions. We deploy low-profile vehicles and wheeled trolleys tailored to subterranean access gates.',
        display: true
      },
      {
        question: 'Are Westminster parking suspensions handled on my behalf?',
        answer: 'Yes. We apply for official bay suspensions and loading dispensations with Westminster City Council, ensuring legal curb space is reserved outside your property.',
        display: true
      },
      {
        question: 'What measures do you take to protect high-value antique furniture?',
        answer: 'We provide bespoke timber crating, acid-free glassine wrapping, and quilted transit blankets for French-polished antiques, fine art, and delicate architectural mirrors.',
        display: true
      }
    ]
  }
];

fs.writeFileSync(path.join(regionsDir, 'north-west-london.json'), JSON.stringify(regionsData[0], null, 2));
fs.writeFileSync(path.join(regionsDir, 'west-london.json'), JSON.stringify(regionsData[1], null, 2));
console.log('Region hubs generated successfully.');
