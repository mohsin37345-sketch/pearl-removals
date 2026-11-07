import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const routesDir = path.join(rootDir, 'src/content/routes');

if (!fs.existsSync(routesDir)) fs.mkdirSync(routesDir, { recursive: true });

interface RouteData {
  from: string;
  to: string;
  slug: string;
  enabled: boolean;
  intro: string;
  body: string;
  faqs: Array<{ question: string; answer: string; display: boolean }>;
}

const routes: RouteData[] = [
  {
    from: 'London (North West London NW2)',
    to: 'Manchester',
    slug: 'london-to-manchester',
    enabled: false,
    intro: 'Moving from London to Greater Manchester represents one of the UK’s most active long-distance relocation corridors. Whether you are transitioning from a period terrace in Hampstead or an apartment in Paddington to Didsbury, Altrincham, Chorlton, or Manchester city centre, Pearl Removals delivers a direct, dedicated door-to-door moving service. Our depot on Cricklewood Broadway provides immediate access to the M1 and M6 motorways, allowing our modern removal vehicles to commence northbound journeys smoothly without getting tangled in central London morning traffic.',
    body: `Relocating from London to Manchester spans approximately 200 miles along the M1 and M6 arterial corridors. Unlike national freight consolidators who mix multiple clients' belongings in a single articulated lorry, Pearl Removals operates a strict dedicated vehicle policy. Your furniture, packed cartons, and precious personal possessions travel exclusively in your assigned vehicle, padlocked at your London property and opened only upon arrival at your new Manchester address.

Planning a long-distance relocation between London and the North West requires calibrated timing. We typically schedule full packing and loading at your London residence on the day prior to completion. This allows our crews to wrap furniture in heavy-duty transit blankets, secure mattresses in waterproof covers, and load our Luton or 7.5-tonne vehicles methodically without the pressure of completion deadlines. On moving morning, our driver departs early, coordinating with your Manchester estate agent or concierge so we arrive punctually as keys are released.

Manchester features diverse housing stock that presents distinct access challenges. From Victorian conversions in leafy south Manchester suburbs to high-rise glass developments in Castlefield, Ancoats, and Deansgate, our experienced teams know how to navigate local conditions. For city-centre apartment relocations, we liaise with building management to reserve service elevators and dedicated loading bays. In residential areas such as Sale, Hale, and Wilmslow, we maneuver our vehicles safely along suburban avenues, safeguarding grass verges and private gravel driveways.

Every long-distance relocation with Pearl Removals includes comprehensive £50,000 Goods in Transit insurance as standard. Our uniformed crews take care of all heavy lifting, carrying labeled boxes into designated bedrooms, positioning sofas and wardrobes, and reassembling standard bedframes and dining tables so you can relax on your first evening in Manchester.`,
    faqs: [
      {
        question: 'How long does a removal from London to Manchester take?',
        answer: 'Driving transit between London NW2 and Greater Manchester typically takes 4.5 to 5.5 hours under standard motorway conditions via the M1 and M6. We schedule loading the afternoon prior to ensure our vehicles arrive promptly at your new Manchester home on completion morning.',
        display: true
      },
      {
        question: 'Will my furniture be shared with other customers on the Manchester route?',
        answer: 'No. Pearl Removals operates an exclusive dedicated vehicle policy for all long-distance relocations. Your belongings are never co-loaded or mixed with goods from other households, eliminating the risk of cross-contamination, delivery delays, or lost items.',
        display: true
      },
      {
        question: 'What happens if there is a delay in receiving keys in Manchester?',
        answer: 'Because your removal vehicle is dedicated solely to your move, our driver can wait securely on-site while keys are released. Should an overnight chain delay occur, we provide secure overnight vehicle holding with GPS tracking and sealed padlocks.',
        display: true
      },
      {
        question: 'Do you provide full packing services for London to Manchester moves?',
        answer: 'Yes. Our professional export packing teams supply all boxes, bubble wrap, acid-free tissue, and wardrobe cartons, packing your complete household the day prior to departure for complete peace of mind.',
        display: true
      }
    ]
  },
  {
    from: 'London (North West London NW2)',
    to: 'Birmingham',
    slug: 'london-to-birmingham',
    enabled: false,
    intro: 'Relocating from London to Birmingham and the West Midlands involves a straightforward 120-mile transit along the M40 or M1 corridors. Whether you are moving from Kilburn, Maida Vale, or St John\'s Wood to Edgbaston, Solihull, Harborne, Sutton Coldfield, or the Jewellery Quarter, Pearl Removals offers a seamless, direct removal experience. Operating from our Cricklewood headquarters, our dedicated vehicles connect directly with the North Circular and M1/M40, ensuring dependable departure schedules and timely delivery.',
    body: `Connecting the UK\'s two largest metropolitan economies, the London to Birmingham route demands efficient logistics and reliable execution. Pearl Removals assigns a dedicated vehicle and experienced moving team exclusively to your relocation. We never combine loads or make unscheduled stops to deliver other customers\' consignments along the route. From collection to final placement, your goods remain safely protected in sole-occupancy vehicles.

Our standard operating protocol for London to Birmingham moves often allows for early-morning loading in London and same-day delivery in Birmingham. For larger three to five-bedroom family houses, we recommend loading the preceding afternoon. This ensures our vehicles can set off at first light, bypassing commuter congestion around the M25 and Birmingham M6/M42 interchange to arrive at your new West Midlands doorstep by mid-morning.

Birmingham\'s residential landscape ranges from grand Georgian and Victorian villas in Edgbaston with private drives to historic industrial loft conversions in Digbeth and modern high-rise apartments near New Street and Grand Central. Our trained porters are equipped with heavy-duty floor runners, door jamb protectors, and padded banister jackets to preserve interior decor during both loading and unloading. Where local parking suspensions or permit bays are required in central Birmingham or Solihull, we provide clear guidance on securing council dispensations.

We provide transparent, fixed-price quotations that encompass all motorway fuel costs, driver time, and comprehensive insurance. Upon arrival at your destination, our staff place every piece of furniture and labeled carton into the appropriate room, reassembling dismantled master beds and tables so you can settle into your new Birmingham home quickly.`,
    faqs: [
      {
        question: 'Can a London to Birmingham move be completed in a single day?',
        answer: 'Yes. Due to the manageable 2.5 to 3.5-hour driving time between London NW2 and Birmingham, smaller one-to-two bedroom moves can be loaded in the morning and unloaded that afternoon. For larger family homes, we recommend two-day scheduling with packing the day before.',
        display: true
      },
      {
        question: 'How do you handle parking access in central Birmingham apartment blocks?',
        answer: 'We coordinate with your building concierge or management company in advance to book loading docks, service bays, and dedicated lift allocations, ensuring swift transit from van to apartment.',
        display: true
      },
      {
        question: 'Do you cover areas outside Birmingham city centre like Solihull and Sutton Coldfield?',
        answer: 'Yes. We deliver to all surrounding West Midlands boroughs including Solihull, Sutton Coldfield, Dorridge, Knowle, Barnt Green, and Leamington Spa.',
        display: true
      },
      {
        question: 'Are my goods insured while in transit between London and Birmingham?',
        answer: 'Every relocation is covered by our standard £50,000 Goods in Transit insurance policy, with option to extend coverage for high-value antiques, artwork, or designer furniture.',
        display: true
      }
    ]
  },
  {
    from: 'London (North West London NW2)',
    to: 'Bristol',
    slug: 'london-to-bristol',
    enabled: false,
    intro: 'Moving from London to Bristol and the West of England represents a popular lifestyle choice for families and professionals seeking Georgian elegance and vibrant cultural life. Whether you are relocating from West Hampstead or Belsize Park to Clifton, Redland, Cotham, Bishopston, or Southville, Pearl Removals delivers an attentive, dedicated long-distance service. With rapid access to the A406, M4, and M25 from our Cricklewood depot, our fleet navigates westbound routes with proven punctuality.',
    body: `The journey from North West London to Bristol spans roughly 120 miles along the M4 motorway, crossing Berkshire and Wiltshire before descending through the Cotswold edge into the Avon valley. Moving across this corridor requires skilled handling of both dense London departure streets and Bristol\'s distinctively hilly, historic urban topography.

Bristol is famous for its steep gradients, cobbled lanes, and Georgian terraces, particularly in elevated enclaves like Clifton Village, Kingsdown, and Redland. Negotiating these streets requires compact, agile 3.5-tonne Luton vans rather than unwieldy articulated lorries. Our drivers position vehicles safely on sloping carriageways using heavy-duty wheel chocks and hydraulic tail lifts. When unloading into tall Georgian townhouses with basement lightwells and narrow stone staircases, our porters take meticulous care to protect delicate plaster cornicing and polished handrails.

To ensure a smooth transition, we assign a dedicated removal van exclusively to your property move. We do not co-load or share cargo space. Your household goods are wrapped in thick transit blankets, strapped to internal vehicle tie-rails, and driven straight from your London address to your new Bristol property. Our operations office can arrange full packing the previous day, providing specialist wardrobe boxes, glassware dividers, and heavy-duty mattress sleeves.

On arrival in Bristol, our uniformed crew offloads all labeled boxes into your specified bedrooms, living areas, and kitchen. We reassemble bedframes, position heavy dining tables and sofas, and clear away all transit debris, ensuring you can begin exploring your new neighbourhood without delay.`,
    faqs: [
      {
        question: 'How long does the drive take from London to Bristol?',
        answer: 'The drive from our North West London depot to Bristol typically takes 2.5 to 3.5 hours via the M4 corridor, depending on departure time and local traffic around the M25 interchange.',
        display: true
      },
      {
        question: 'How do you handle parking on steep streets in Clifton and Kingsdown?',
        answer: 'Our drivers use commercial-grade wheel chocks, engage vehicle stabilisers, and position vans carefully along permitted bays. We also guide clients on securing parking dispensations from Bristol City Council.',
        display: true
      },
      {
        question: 'Can you dismantle and reassemble large furniture for Victorian Bristol flats?',
        answer: 'Yes. Our moving teams carry comprehensive toolkits to disassemble bedframes, large wardrobes, and modular sofas in London and reassemble them accurately in your new Bristol residence.',
        display: true
      },
      {
        question: 'Do you charge extra for Bristol clean air zone (CAZ) compliance?',
        answer: 'No. All Pearl Removals vehicles meet Euro 6 emissions standards and are fully compliant with Bristol\'s Clean Air Zone regulations with no supplementary charges.',
        display: true
      }
    ]
  },
  {
    from: 'London (North West London NW2)',
    to: 'Brighton',
    slug: 'london-to-brighton',
    enabled: false,
    intro: 'Relocating from London to Brighton and the Sussex coast offers seaside living within easy commuter reach of the capital. Whether moving from Camden, Queen\'s Park, or Swiss Cottage to Hove, Kemptown, the North Laine, Preston Park, or Hanover, Pearl Removals provides a direct, stress-free removals service. Our dedicated vehicles depart our Cricklewood base via the A406 and M25 to the M23 and A23, ensuring dependable transit times straight to the South Coast.',
    body: `Covering approximately 65 to 75 miles from North West London, moving to Brighton & Hove is one of our most frequent regional journeys. Despite the relatively short distance, the route requires careful logistics due to Brighton\'s narrow Victorian streets, one-way systems, and strict controlled parking zones enforced along the seafront and hillside terraces.

Brighton\'s architectural heritage features iconic Regency crescents along the seafront, grand Victorian villas in Hove, and characterful hillside workers\' cottages in Hanover with steep, narrow steps. Accessing these properties demands strategic parking suspensions and experienced handling. Pearl Removals assists you with Brighton & Hove City Council parking dispensation requirements, ensuring our removal vehicle has legitimate curbside space booked directly outside your new residence.

We operate an exclusive dedicated vehicle service for every client. Your belongings are packed, protected, and loaded into our sole-occupancy Luton van, driven directly to Brighton without third-party stops or cargo sharing. Our porters utilize specialized quilted mattress bags, sofa transit covers, and heavy-duty floor armor to preserve both your London departure home and your new coastal property.

Whether you need a full professional packing service the afternoon prior or a prompt same-day load and deliver, our team coordinates with your completion schedule. Upon arrival, we place all furniture and boxes into designated rooms and assemble essential furniture items so you can enjoy the sea breeze on your very first evening.`,
    faqs: [
      {
        question: 'Can a London to Brighton move be completed in one day?',
        answer: 'Yes. The drive typically takes between 1.5 and 2.5 hours via the A23/M23. We routinely load in London in the morning and complete delivery in Brighton or Hove during the afternoon.',
        display: true
      },
      {
        question: 'How do you arrange parking for removals in Brighton & Hove?',
        answer: 'Brighton & Hove City Council operates extensive Controlled Parking Zones. We advise applying for a parking bay suspension at least 10 working days in advance, and our operations team assists with vehicle registration details.',
        display: true
      },
      {
        question: 'Can your vans navigate the steep, narrow streets of Hanover?',
        answer: 'Yes. We utilize agile 3.5-tonne Luton vans that maneuver easily through narrow residential streets like those in Hanover, Elm Grove, and the North Laine.',
        display: true
      },
      {
        question: 'Do you provide storage if our Brighton property is not ready on completion?',
        answer: 'Yes. We provide secure, containerised storage at our North West London facility, holding your belongings safely until your new keys are available.',
        display: true
      }
    ]
  },
  {
    from: 'London (North West London NW2)',
    to: 'Oxford',
    slug: 'london-to-oxford',
    enabled: false,
    intro: 'Moving from London to Oxford connects the capital with one of the world\'s premier academic and cultural centres. Whether you are relocating from Hampstead, Hendon, or Maida Vale to North Oxford, Summertown, Headington, Jericho, or Cowley, Pearl Removals delivers an attentive, dedicated long-distance moving service. Located in Cricklewood NW2, our depot connects directly with the A40 and M40 corridors, enabling smooth westbound journeys without inner-city delays.',
    body: `The 60-mile relocation from North West London to Oxford is a direct journey along the M40 motorway and A40 ring road. Moving into the "City of Dreaming Spires" involves navigating distinct historic zones, restricted university quads, bus gates, and tight residential conservation areas.

Oxford features a blend of grand Victorian and Edwardian family residences in North Oxford and Summertown, historic terraced cottages in Jericho, and leafy 1930s avenues in Headington. Central Oxford also enforces strict traffic filters and zero-emission zones. Pearl Removals plans route navigation carefully, adhering to city council access regulations and coordinating with college porters or residential building managers when moves involve university accommodation or listed apartments.

Our dedicated vehicle policy ensures that your furniture, book collections, artwork, and personal belongings travel alone in a clean, fully equipped removal van. We provide comprehensive packing services, supplying sturdy double-walled book boxes specifically designed for academic and home libraries, preventing overload and ensuring systematic unpacking.

All moves include £50,000 Goods in Transit insurance and skilled furniture assembly. Our crew will position wardrobes, set up bedframes, and place every carton into its corresponding room in Oxford, leaving you free to explore the parks, colleges, and waterways of your new Oxfordshire home.`,
    faqs: [
      {
        question: 'How long does the journey take from London to Oxford?',
        answer: 'Driving transit between our Cricklewood depot and Oxford takes approximately 1.5 to 2 hours via the A40 and M40, allowing for efficient same-day loading and delivery.',
        display: true
      },
      {
        question: 'How do you navigate Oxford’s traffic filters and zero-emission zones?',
        answer: 'Our modern vehicles are fully compliant with Oxford City Council emissions standards, and our drivers plan approved access routes to avoid restricted bus gates and pedestrianised zones.',
        display: true
      },
      {
        question: 'Can you handle extensive academic book collections and home libraries?',
        answer: 'Yes. We supply specialized heavy-duty book cartons and pack them methodically to preserve shelving order, ensuring your library is transferred safely to Oxford.',
        display: true
      },
      {
        question: 'Do you arrange parking suspensions in Oxford residential streets?',
        answer: 'Oxfordshire County Council administers parking dispensations. We provide the necessary vehicle registrations and dimensions to ensure your parking space is reserved outside your property.',
        display: true
      }
    ]
  },
  {
    from: 'London (North West London NW2)',
    to: 'Cambridge',
    slug: 'london-to-cambridge',
    enabled: false,
    intro: 'Relocating from London to Cambridge connects the capital\'s vibrant urban life with the historic university city and thriving silicon fen tech ecosystem. Whether moving from Golders Green, Mill Hill, or Finchley to Newnham, De Freville Avenue, Trumpington, Chesterton, or the historic historic centre, Pearl Removals delivers a dependable, high-quality removal service. With immediate access to the A41, M1, and A1(M)/M11 from our NW2 depot, our vehicles reach Cambridge quickly and safely.',
    body: `Spanning approximately 60 miles north along the M11 or A10, the London to Cambridge relocation corridor is one of our primary routes. Moving to Cambridge combines historic college heritage with modern scientific developments, presenting diverse architectural styles from Victorian terraced streets near the railway station to contemporary sustainable homes in Eddington and Trumpington.

Cambridge\'s historic centre features narrow medieval thoroughfares, cycle-prioritised streets, and restricted pedestrian corridors. Conducting removals in areas like Newnham or the historic kite district requires skilled maneuvering and considerate vehicle placement. Pearl Removals deploys appropriate 3.5-tonne Luton vehicles equipped with tail lifts, ensuring our drivers can access residential streets without obstructing bicycle lanes or local transit.

Under our strict sole-occupancy guarantee, your removal vehicle is assigned exclusively to your move. We never mix loads with other households. Our packing specialists can attend your London home the day prior, packing delicate glassware, computers, and home essentials with premium materials. On moving day, our team unloads each carton into the appropriate room, reassembles standard furniture, and removes all packing materials so your Cambridge house immediately feels like home.`,
    faqs: [
      {
        question: 'What is the driving time from North West London to Cambridge?',
        answer: 'Transit between our NW2 operating base and Cambridge typically takes between 1.5 and 2 hours via the M25 and M11 corridors under regular traffic conditions.',
        display: true
      },
      {
        question: 'How do you handle cycle lanes and restricted streets in Cambridge?',
        answer: 'Our drivers are trained in Cambridge urban access protocols, ensuring removal vehicles are positioned legally and safely without obstructing busy cycle routes or pedestrian paths.',
        display: true
      },
      {
        question: 'Can you move sensitive laboratory or IT workstation equipment?',
        answer: 'Yes. We provide anti-static bubble wrap, padded computer monitor crates, and secure transit ties for technology professionals moving to the Cambridge cluster.',
        display: true
      },
      {
        question: 'Do you provide parking dispensation advice for Cambridgeshire moves?',
        answer: 'Yes. We guide clients on securing parking waivers through Cambridgeshire County Council and liaise with local authorities on vehicle dimensions.',
        display: true
      }
    ]
  },
  {
    from: 'London (North West London NW2)',
    to: 'Milton Keynes',
    slug: 'london-to-milton-keynes',
    enabled: false,
    intro: 'Moving from London to Milton Keynes offers spacious modern family living, excellent schools, and rapid grid-road connectivity. Whether relocating from Cricklewood, Hendon, or Brent Cross to Stony Stratford, Shenley Church End, Loughton, Middleton, or Campbell Park, Pearl Removals provides a direct, highly efficient long-distance removal service. Situated directly alongside the M1 corridor at Junction 1, our NW2 depot allows seamless transit straight into Buckinghamshire.',
    body: `Located just 50 miles north of our London headquarters, Milton Keynes is one of the most accessible and straightforward long-distance relocation destinations from North West London. Connected directly via the M1 motorway between Junction 1 (Staples Corner) and Junctions 13 and 14, our vehicles complete transit in around 60 to 90 minutes.

Milton Keynes\' unique grid-road system (H and V roads) and generous suburban estate designs make it exceptionally friendly for removal vehicles. Unlike dense London boroughs with tight parking restrictions, properties in Milton Keynes typically feature dedicated driveways, double garages, and broad estate access. This allows our teams to position vehicles right next to front doorways or garages, expediting loading and unloading times significantly.

Pearl Removals handles every Milton Keynes relocation with the same care and professional standards as our longer intercity moves. Your consignment travels in a dedicated, sole-occupancy vehicle, wrapped in clean furniture blankets and tied to vehicle chassis rails. Our uniformed crews take care of all heavy lifting, carrying labeled boxes into designated bedrooms, positioning sofas and wardrobes, and reassembling standard bedframes so you can settle in comfortably on your first night in Buckinghamshire.`,
    faqs: [
      {
        question: 'How long does a removal from London to Milton Keynes take?',
        answer: 'Driving time from our Cricklewood NW2 depot to Milton Keynes is approximately 1 to 1.5 hours via the M1 motorway. This makes it an ideal same-day relocation route.',
        display: true
      },
      {
        question: 'Is access easier for large removal vans in Milton Keynes?',
        answer: 'Yes. The grid road system and spacious residential driveways in Milton Keynes provide straightforward vehicle access, allowing for rapid, smooth unloading.',
        display: true
      },
      {
        question: 'Do you offer packing services the day before moving to Milton Keynes?',
        answer: 'Yes. Our team can pack your complete household the afternoon prior, leaving only essential overnight items for the morning of departure.',
        display: true
      },
      {
        question: 'Are quotes fixed for Milton Keynes removals?',
        answer: 'All Pearl Removals quotes are fixed-price, fully inclusive of fuel, vehicle mileage, driver labor, and comprehensive £50,000 Goods in Transit insurance.',
        display: true
      }
    ]
  },
  {
    from: 'London (North West London NW2)',
    to: 'St Albans',
    slug: 'london-to-st-albans',
    enabled: false,
    intro: 'Relocating from London to St Albans in Hertfordshire is one of the premier moves for families seeking cathedral-city heritage, exceptional schooling, and fast rail connections. Whether you are moving from Hampstead, Highgate, or St John\'s Wood to Marshalswick, Bernards Heath, St Stephens, Townsend, or St Michael\'s Village, Pearl Removals delivers an attentive, dedicated relocation service. With our depot situated on the A5 in NW2, the M1 and A414 provide a direct, effortless 20-mile corridor into St Albans.',
    body: `Positioned only 20 miles north of Cricklewood, moving from North West London to St Albans offers the perfect balance of proximity and countryside transition. Connected directly by the M1 (Junctions 1 to 6/7) and the A1(M), transit typically takes just 35 to 50 minutes, making St Albans our closest long-distance route.

St Albans combines historic Roman and medieval quarters with Victorian terraced streets, Edwardian avenues, and substantial modern detached homes in Marshalswick and Jersey Farm. In historic central conservation areas near the Cathedral and French Row, narrow cobbled turnings and resident parking zones require careful vehicle placement and council dispensations. Pearl Removals coordinates parking arrangements with St Albans City & District Council to reserve curbside space outside your property.

Our dedicated vehicle policy ensures that your furniture, packed boxes, and fragile heirlooms travel exclusively in your assigned vehicle without load mixing. Our professional packing teams supply wardrobe cartons, glassware dividers, and heavy-duty mattress sleeves, packing your home methodically. Upon arrival in St Albans, our porters carry all items into your nominated rooms, reassemble beds and dining suites, and remove all used packing boxes, letting you relax into your new Hertfordshire lifestyle immediately.`,
    faqs: [
      {
        question: 'How long does transit take from London to St Albans?',
        answer: 'Transit between our NW2 operating base and St Albans typically takes 35 to 50 minutes via the M1 or A1(M), enabling rapid same-day loading and completion.',
        display: true
      },
      {
        question: 'How do you handle parking in St Albans conservation areas?',
        answer: 'St Albans operates controlled parking zones in central areas. We guide clients on securing parking waivers from St Albans City & District Council and position our agile Luton vans safely.',
        display: true
      },
      {
        question: 'Can you move large garden equipment and outdoor furniture to St Albans?',
        answer: 'Yes. Many properties in St Albans feature large gardens. Our crew cleans and protects patio sets, barbecues, lawnmowers, and planters for safe vehicle transit.',
        display: true
      },
      {
        question: 'Do you provide full packing services for moves to St Albans?',
        answer: 'Yes. Our team can pack your complete home the day prior, ensuring all glassware, books, and clothing are boxed and labeled by room for straightforward delivery.',
        display: true
      }
    ]
  }
];

for (const route of routes) {
  const filePath = path.join(routesDir, `${route.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(route, null, 2), 'utf8');
}

console.log(`✅ All ${routes.length} long-distance routes written with enabled: false.`);
