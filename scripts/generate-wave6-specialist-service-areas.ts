import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const serviceAreasDir = path.join(rootDir, 'src/content/service-areas');

const wave6Data = [
  // 1. Piano Removals Hampstead
  {
    service: 'piano-removals',
    location: 'hampstead',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals delivers master-level piano removals throughout Hampstead NW3. Specialising in acoustic preservation and precision manual handling, our team safely transports upright, baby grand, and concert grand pianos through historic Georgian and Victorian homes across Hampstead Village and the Heath borders.',
    localAngle: 'Hampstead’s historic topography presents formidable obstacles for heavy instrument moves—from the steep cobblestone gradient of Holly Hill to multi-storey staircases in Grade II listed townhouses. We deploy custom timber piano skids, heavy-duty stair climbing crawlers, and padded transit jackets to eliminate vibration and avoid wall contact.',
    whatsIncluded: [
      'Specialist two-to-four person trained piano moving crew',
      'High-tensile timber piano skid board with non-marking wheels',
      'Heavy-duty quilted piano covers, keyboard locks, and pedal wraps',
      'Hydraulic tail-lift vehicle equipped with interior load-lock strapping',
      'Full £50,000 Goods in Transit insurance cover as standard'
    ],
    priceGuidance: 'Upright piano transport in Hampstead starts from £180. Grand pianos and complex staircase flights quoted individually after survey.',
    faqs: [
      {
        question: 'Can you move a baby grand piano up steep exterior steps in Hampstead?',
        answer: 'Yes. Our crews use modular aluminium ramp systems and high-capacity winches to navigate elevated stone entrances without risking damage to historic stonework.',
        display: true
      },
      {
        question: 'Do you arrange Camden parking suspensions for piano moves in NW3?',
        answer: 'Yes. We apply for dedicated loading bay suspensions through Camden Council to ensure our tail-lift vehicle parks directly outside your entrance.',
        display: true
      },
      {
        question: 'Will my piano need tuning after the move?',
        answer: 'While our specialized equipment cushions the acoustic soundboard against transit vibrations, changes in room temperature and humidity mean we recommend re-tuning after two weeks.',
        display: true
      }
    ]
  },

  // 2. Fine Art Hampstead
  {
    service: 'fine-art-and-antiques-removals',
    location: 'hampstead',
    status: 'published' as const,
    uniqueIntro: 'Our Hampstead fine art and antiques removals service provides museum-grade handling for private collectors, antique dealers, and gallery owners across NW3. We provide bespoke timber crating, acid-free glassine wrapping, and climate-conscious transit for oil paintings, delicate porcelain, and French-polished furniture.',
    localAngle: 'Hampstead houses remarkable private art collections and historic heirlooms. Moving valuable works through narrow period corridors requires surgical precision. Our art technicians construct bespoke wooden crates tailored to exact canvas dimensions, utilizing shock-absorbing corner foam to isolate delicate gilded frames from transit shocks.',
    whatsIncluded: [
      'Bespoke ISPM-15 export-standard timber museum crates built to order',
      'Conservation-grade packing with acid-free glassine paper and bubble blankets',
      'Discreet, liveried vehicles with air-ride suspension and tie-rails',
      'Enhanced Goods in Transit cover up to full declared valuation',
      'Uncrating and precise placement in your new Hampstead residence'
    ],
    priceGuidance: 'Fine art transport from £120 for single cased items. Bespoke timber crating and multi-piece private collections quoted following visual survey.',
    faqs: [
      {
        question: 'How do you protect antique oil paintings from temperature fluctuation?',
        answer: 'We wrap paintings in moisture-barrier Tyvek and acid-free tissue inside custom timber cases, shielding the canvas from thermal shock during transit.',
        display: true
      },
      {
        question: 'Can you handle delicate porcelain and chandelier dismantling?',
        answer: 'Yes. Our fine art technicians dismantle chandeliers component by component, wrapping each crystal droplet individually in tissue and cell-divided cartons.',
        display: true
      },
      {
        question: 'Do you provide insurance valuations for rare artwork?',
        answer: 'We require declared inventory valuations and provide comprehensive fine art transit insurance up to £250,000+ under dedicated specialist policies.',
        display: true
      }
    ]
  },

  // 3. Piano Removals Belsize Park
  {
    service: 'piano-removals',
    location: 'belsize-park',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals offers dedicated piano removals in Belsize Park NW3. From upright studio pianos in Victorian conversion apartments to grand pianos in stucco villas along Belsize Park Gardens and England\'s Lane, we deliver exceptional manual handling, protective wrapping, and smooth transit.',
    localAngle: 'Belsize Park’s architectural conversion flats frequently feature sweeping main staircases that narrow considerably on upper floors. Transporting a 220kg upright piano past original plaster cornices demands specialist piano dollies, quilted banister guards, and precise weight distribution to prevent structural stress.',
    whatsIncluded: [
      'Certified piano handling porters with specialized lifting harness gear',
      'Padded acoustic transit jackets and keyboard protective inserts',
      'Specialist non-marking pneumatic tyre dollies for hardwood flooring',
      'Hydraulic tail-lift vehicle with soft air suspension',
      'Comprehensive goods-in-transit insurance'
    ],
    priceGuidance: 'Upright moves in Belsize Park start from £180. Additional staircase flight surcharges apply transparently.',
    faqs: [
      {
        question: 'How do you protect communal stairwells in Belsize Park villas?',
        answer: 'We lay heavy neoprene floor runners and attach padded quilted jackets to banisters and door frames before rolling the piano on non-marking wheels.',
        display: true
      },
      {
        question: 'Can you move a piano into a basement garden flat in Belsize Park?',
        answer: 'Yes. We utilize specialized exterior ramp tracks and four-person carrying straps to navigate external lightwell steps safely.',
        display: true
      },
      {
        question: 'How quickly can you arrange a piano move in NW3?',
        answer: 'With our central dispatch depot in nearby Cricklewood, we can frequently accommodate piano relocations in Belsize Park within 48 to 72 hours.',
        display: true
      }
    ]
  },

  // 4. Fine Art Belsize Park
  {
    service: 'fine-art-and-antiques-removals',
    location: 'belsize-park',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals delivers white-glove fine art and antique moving services across Belsize Park. Serving private collectors, interior architects, and antique owners throughout NW3, we manage the packing and transportation of fragile sculptures, ornate gilt mirrors, and delicate antique furniture with flawless care.',
    localAngle: 'Properties in Belsize Village and Haverstock Hill frequently showcase period Victorian furniture and contemporary gallery artwork. Our technicians build tailored timber packing cases, utilize acid-free barrier films, and apply corner protectors to shield French-polished mahogany and delicate marquetry from humidity and abrasion.',
    whatsIncluded: [
      'Custom-built timber crates tailored for oversized canvases and mirrors',
      'Multi-layer conservation wrapping with glassine, bubble wrap, and corrugated outer guards',
      'Padded transit vehicles with secure horizontal tie-off points',
      'Full transit insurance cover tailored to high-value collections',
      'Careful white-glove room placement and uncrating'
    ],
    priceGuidance: 'Single item crating and transit from £120. Multi-room antique collections quoted individually.',
    faqs: [
      {
        question: 'How do you transport delicate gilded mirrors in Belsize Park conversions?',
        answer: 'We construct rigid timber frames lined with foam padding, ensuring zero flex or pressure on delicate antique glass and carved plaster frames.',
        display: true
      },
      {
        question: 'Do you move contemporary bronze and marble sculptures?',
        answer: 'Yes. Heavy sculptures are secured to custom timber pallets, cushioned with dense closed-cell polyethylene foam, and moved using hydraulic lifters.',
        display: true
      },
      {
        question: 'Can your team unpack and position artwork in my new home?',
        answer: 'Yes. Our white-glove service includes opening crates on-site, removing all packing materials, and placing your pieces in your designated rooms.',
        display: true
      }
    ]
  },

  // 5. Piano Removals Primrose Hill
  {
    service: 'piano-removals',
    location: 'primrose-hill',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals provides bespoke piano removals in Primrose Hill NW1 and NW3. Catering to professional musicians, creative homeowners, and period property residents around Regent\'s Park Road and Chalcot Square, our skilled team ensures damage-free transport for uprights and grand pianos.',
    localAngle: 'The picturesque, pastel-painted townhouses of Primrose Hill often feature narrow entrance hallways and elevated porticos. Maneuvering an upright piano or disassembling a baby grand requires specialized piano shoes, locking caster cups, and skilled team communication to negotiate tight interior angles.',
    whatsIncluded: [
      'Two to four-person piano transit team trained in acoustic instruments',
      'Padded protective piano jackets and pedal protection blocks',
      'Custom piano skid boards and non-marking rubber dollies',
      'Low-vibration vehicle transit with hydraulic tail lift',
      'Full transit insurance cover'
    ],
    priceGuidance: 'Standard upright piano moves in Primrose Hill from £190. Grand piano moves quoted upon survey.',
    faqs: [
      {
        question: 'How do you move a baby grand piano through narrow doorways in Primrose Hill?',
        answer: 'We systematically remove the lyre and legs, secure the piano body onto a padded skid board on its flat side, and maneuver it horizontally through doorways.',
        display: true
      },
      {
        question: 'Do you handle Camden parking suspensions along Regent’s Park Road?',
        answer: 'Yes. We apply for official parking bay suspensions with Camden Council to reserve dedicated kerbside loading space outside your townhouse.',
        display: true
      },
      {
        question: 'Can you move upright pianos up external portico steps in Chalcot Square?',
        answer: 'Yes. Our crews deploy heavy-duty ramp boards and mechanical stair hoists to ascend historic entrance steps without surface wear.',
        display: true
      }
    ]
  },

  // 6. Fine Art Primrose Hill
  {
    service: 'fine-art-and-antiques-removals',
    location: 'primrose-hill',
    status: 'published' as const,
    uniqueIntro: 'Our Primrose Hill fine art and antiques removal service offers discreet, museum-grade logistics for discerning collectors, artists, and galleries in NW1 and NW3. We handle delicate paintings, sculptural installations, and heirloom antiques with absolute reverence and technical skill.',
    localAngle: 'Primrose Hill is home to celebrated creative studios, contemporary collectors, and historic Victorian interiors along Gloucester Avenue and Chalcot Crescent. Our specialists build custom flight cases and timber crates on demand, using non-abrasive materials and anti-static wrapping for delicate multimedia and oil works.',
    whatsIncluded: [
      'Bespoke timber museum crates tailored to canvas and sculpture profiles',
      'Archival glassine paper, bubble protection, and corner protectors',
      'Discreet, liveried removal vehicles with climate-conscious transit ties',
      'Comprehensive high-value transit insurance coverage',
      'Precision uncrating and room positioning on delivery'
    ],
    priceGuidance: 'Fine art transport from £130 for individual cased pieces. Comprehensive gallery or home collections quoted following consultation.',
    faqs: [
      {
        question: 'How do you transport delicate ceramic and glass art in Primrose Hill?',
        answer: 'Each glass or ceramic item is individually wrapped in acid-free tissue, enveloped in bubble wrap, and suspended within custom-cut foam cell inserts.',
        display: true
      },
      {
        question: 'Can you move large modern canvases that cannot bend or roll?',
        answer: 'Yes. We construct bespoke timber framework crates that keep large canvases rigid, vertical, and completely isolated from pressure during transit.',
        display: true
      },
      {
        question: 'Do you operate with confidentiality agreements for high-profile clients in NW1?',
        answer: 'Always. We regularly work under non-disclosure agreements with artists, media figures, and collectors, ensuring total discretion.',
        display: true
      }
    ]
  },

  // 7. Piano Removals St John's Wood
  {
    service: 'piano-removals',
    location: 'st-johns-wood',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals delivers white-glove piano removals throughout St John\'s Wood NW8. Renowned for grand avenues, luxury portered blocks, and musical landmarks, our team transports uprights, baby grands, and concert grand pianos with unmatched acoustic care and technical precision.',
    localAngle: 'St John’s Wood boasts substantial detached residences along Avenue Road and Hamilton Terrace, alongside prestigious mansion blocks on Prince Albert Road. Moving a concert grand piano here involves coordinated logistics: liaising with head porters, pre-booking service elevators, and using hydraulic tail lifts for smooth transit.',
    whatsIncluded: [
      'Certified four-person piano moving specialist team',
      'Heavy-duty padded piano jackets, keyboard clamps, and pedal sleeves',
      'Timber skid boards with industrial non-marking soft rollers',
      'Tail-lift vehicle equipped with soft air suspension and tracking rails',
      'Full £50,000 Goods in Transit insurance protection as standard'
    ],
    priceGuidance: 'Upright moves in NW8 start from £190. Grand piano moves quoted based on instrument size and floor level.',
    faqs: [
      {
        question: 'Can you transport a concert grand piano into a mansion block in NW8?',
        answer: 'Yes. We measure service elevators and stairwells in advance, fitting protective elevator wall pads and using specialized piano skids for lateral moves.',
        display: true
      },
      {
        question: 'Do you arrange Westminster parking suspensions outside mansion blocks?',
        answer: 'Yes. We handle all paperwork with Westminster City Council to reserve legal curbside parking outside residential forecourts.',
        display: true
      },
      {
        question: 'How do you protect marble and polished parquetry floors in St John’s Wood?',
        answer: 'Our porters lay heavy neoprene floor mats across all transit routes to prevent wheel impressions or scuffs on delicate flooring.',
        display: true
      }
    ]
  },

  // 8. Fine Art St John's Wood
  {
    service: 'fine-art-and-antiques-removals',
    location: 'st-johns-wood',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals provides premier fine art and antiques removals across St John\'s Wood NW8. Serving art collectors, private estates, and luxury homeowners, we deliver bespoke crating, climate-conscious vehicle transport, and white-glove placement for high-value artwork and antiques.',
    localAngle: 'Properties in St John’s Wood contain some of London’s finest private art and antique furniture collections. Moving priceless oil paintings, marble busts, and gilded mirrors requires museum-grade procedures. We build custom ISPM-15 export wooden crates, using high-density foam padding to absorb all transit vibration.',
    whatsIncluded: [
      'Tailor-made timber export crates built for paintings and sculptures',
      'Archival-grade packing with glassine paper, foam corners, and cushioning',
      'Discreet, liveried transport vehicles with padded interior battening',
      'High-value Goods in Transit insurance up to declared collection worth',
      'Unpacking, uncrating, and positioning in your new residence'
    ],
    priceGuidance: 'Individual cased artwork from £140. Full private art collections quoted following visual survey.',
    faqs: [
      {
        question: 'Can you transport large marble sculptures in St John\'s Wood?',
        answer: 'Yes. We build custom-reinforced timber pallets, using crane hoists or hydraulic lifting barrows to maneuver heavy marble pieces safely.',
        display: true
      },
      {
        question: 'How do you safeguard antique French-polished sideboards and armoires?',
        answer: 'We wrap polished timber in breathable cotton pads and quilted blankets, avoiding adhesive tapes that could degrade historical finishes.',
        display: true
      },
      {
        question: 'Do your teams operate with non-disclosure agreements in NW8?',
        answer: 'Yes. We regularly sign confidentiality agreements with estate managers and collectors to guarantee complete privacy.',
        display: true
      }
    ]
  },

  // 9. Piano Removals Mill Hill
  {
    service: 'piano-removals',
    location: 'mill-hill',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals offers dedicated piano moving services throughout Mill Hill NW7. From upright pianos in family homes across Millbrook Park and Mill Hill Broadway to grand pianos in substantial estates along The Ridgeway, we provide expert instrument transit backed by specialized equipment.',
    localAngle: 'Mill Hill’s spacious detached residences and semi-rural properties often feature multi-level layouts, landscaped garden steps, and long driveways. Our crews utilize heavy-duty all-terrain pneumatic dollies and padded skid boards, ensuring safe transit from your music room into our carpeted removal vehicles.',
    whatsIncluded: [
      'Two to four-person piano crew trained in manual handling of heavy instruments',
      'Quilted acoustic piano covers, lid strap locks, and pedal protectors',
      'Heavy-duty piano skid board and non-marking floor protection mats',
      'Air-ride removal vehicle equipped with hydraulic tail lift',
      'Comprehensive Goods in Transit insurance'
    ],
    priceGuidance: 'Upright piano transport in Mill Hill from £180. Grand pianos quoted based on instrument dimensions.',
    faqs: [
      {
        question: 'Can you move a piano across garden pathways or long driveways in Mill Hill?',
        answer: 'Yes. We bring specialized heavy-duty pneumatic barrows that glide smoothly across gravel paths and paving without vibration.',
        display: true
      },
      {
        question: 'Do you move pianos in newly developed homes in Millbrook Park?',
        answer: 'Yes. We regularly handle moves in Millbrook Park, taking care to protect newly laid flooring and modern doorways.',
        display: true
      },
      {
        question: 'How quickly can your team reach Mill Hill from your depot?',
        answer: 'Our Cricklewood transport hub is just 4 miles south, allowing our vehicles to reach Mill Hill in approximately 12 to 15 minutes.',
        display: true
      }
    ]
  },

  // 10. Fine Art Mill Hill
  {
    service: 'fine-art-and-antiques-removals',
    location: 'mill-hill',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals delivers white-glove fine art and antique moving services across Mill Hill NW7. Tailored for family estates along The Ridgeway and Mill Hill Village, we provide custom timber crating, protective wrapping, and careful transport for valuable artwork, antiques, and heirlooms.',
    localAngle: 'Substantial residences in Mill Hill frequently house multi-generational antique furniture, grand grandfather clocks, and valuable painting collections. Moving these items requires expert dismantling of pediments and weights, non-abrasive wrapping, and secure horizontal strapping inside our vehicles.',
    whatsIncluded: [
      'Custom wooden crates constructed for paintings, mirrors, and chandeliers',
      'Conservation-grade wrapping materials including acid-free tissue and foam padding',
      'Carpeted, climate-conscious removal vehicles with secure tie rails',
      'Enhanced transit insurance protection up to full valuation',
      'Careful uncrating and room-by-room positioning'
    ],
    priceGuidance: 'Fine art handling from £120 per cased item. Complete household antique collections quoted individually.',
    faqs: [
      {
        question: 'How do you move antique grandfather clocks safely in Mill Hill?',
        answer: 'We remove pendulum weights and chime rods, pack them in padded containers, and wrap the clock cabinet in cushioned transit blankets.',
        display: true
      },
      {
        question: 'Can you transport large outdoor garden urns and bronzes?',
        answer: 'Yes. Our team handles heavy stone and bronze garden statuary using hydraulic lifting gear and padded transport cradles.',
        display: true
      },
      {
        question: 'Do you deliver packing materials in advance in NW7?',
        answer: 'Yes. We supply heavy-duty double-walled cartons, bubble wrap, and acid-free tissue paper well ahead of your moving date.',
        display: true
      }
    ]
  },

  // 11. Piano Removals Hampstead Garden Suburb
  {
    service: 'piano-removals',
    location: 'hampstead-garden-suburb',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals provides refined piano removals in Hampstead Garden Suburb across NW11 and N2. Catering to Arts & Crafts cottages around Central Square and grand residences along The Bishops Avenue and Winnington Road, we transport upright and grand pianos with utmost acoustic reverence and care.',
    localAngle: 'Hampstead Garden Suburb operates under strict conservation regulations enforced by the Suburb Trust. Homes feature historic timber casements, narrow front doorways, and open grass verges where vehicles must not park. We deploy agile Luton vans with tail lifts, using rubber runners to protect grass verges and garden paths.',
    whatsIncluded: [
      'Dedicated piano moving team certified in acoustic instrument transit',
      'Heavy-duty quilted piano jacket and keyboard locking straps',
      'Timber skid boards with soft polyurethane rolling wheels',
      'Hydraulic tail lift vehicle with interior load-lock cushioning',
      'Full £50,000 Goods in Transit insurance cover'
    ],
    priceGuidance: 'Upright moves in Hampstead Garden Suburb from £190. Grand piano moves quoted upon survey.',
    faqs: [
      {
        question: 'How do you avoid damaging historic grass verges in the Suburb?',
        answer: 'We position our vehicles strictly along the asphalt roadway, laying temporary protective rubber runners across paths to transfer the piano safely.',
        display: true
      },
      {
        question: 'Can you move grand pianos in luxury homes along The Bishops Avenue?',
        answer: 'Yes. We regularly handle concert and baby grand pianos in large residences, utilizing four-person teams and protective floor mats throughout.',
        display: true
      },
      {
        question: 'Do you provide transit insurance for high-value grand pianos?',
        answer: 'Yes. Comprehensive goods-in-transit insurance is included as standard, with higher declared valuation cover available on request.',
        display: true
      }
    ]
  },

  // 12. Fine Art Hampstead Garden Suburb
  {
    service: 'fine-art-and-antiques-removals',
    location: 'hampstead-garden-suburb',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals delivers white-glove fine art and antiques removals across Hampstead Garden Suburb NW11. We provide museum-grade packing, bespoke timber casing, and secure vehicle transport for delicate artwork, heirloom furniture, and historic porcelain collections.',
    localAngle: 'Arts and Crafts residences in the Suburb contain delicate handcrafted woodwork, leaded glass casements, and valuable antique collections. Our art handlers use bespoke timber crates and non-adhesive protective blankets, ensuring zero contact with historic wall finishes and period door frames.',
    whatsIncluded: [
      'Custom wooden crates built to exact dimensions for canvases and mirrors',
      'Conservation-grade wrapping with acid-free tissue and shock-absorbing foam',
      'Discreet, liveried vehicles equipped with internal padded battening',
      'Comprehensive high-value transit insurance coverage',
      'Precision uncrating and room-by-room positioning'
    ],
    priceGuidance: 'Fine art transport from £130 for individual cased pieces. Multi-room antique collections quoted individually.',
    faqs: [
      {
        question: 'How do you protect leaded glass windows and timber frames in Arts & Crafts homes?',
        answer: 'Our porters fit padded corner guards on all door jambs and navigate furniture using two-person precision carrying techniques.',
        display: true
      },
      {
        question: 'Can you transport delicate antique chandeliers and crystal wall sconces?',
        answer: 'Yes. We disassemble fragile components, wrap each crystal element in tissue paper, and pack them into custom foam-lined cells.',
        display: true
      },
      {
        question: 'Do you provide confidentiality agreements for private residences in NW11?',
        answer: 'Yes. We routinely work under non-disclosure agreements with Suburb homeowners to guarantee absolute privacy.',
        display: true
      }
    ]
  },

  // 13. Piano Removals Maida Vale
  {
    service: 'piano-removals',
    location: 'maida-vale',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals offers specialist piano removals throughout Maida Vale W9 and Little Venice. From upright acoustic pianos in Victorian red-brick mansion blocks along Elgin Avenue to grand pianos in stucco canal-side villas, our trained moving specialists guarantee flawless instrument transport.',
    localAngle: 'Maida Vale is famous for its pre-war mansion blocks, where moving a piano requires liaising with head porters, pre-booking passenger or service lifts, and fitting padded elevator wall liners. We deploy specialized piano dollies and timber skid boards to glide instruments quietly across communal marble halls.',
    whatsIncluded: [
      'Specialist piano moving porters trained in acoustic instrument physics',
      'Quilted transit covers, keybed locks, and pedal protective pads',
      'Timber piano skid board and non-marking rubber dollies',
      'Hydraulic tail lift vehicle with interior load-lock straps',
      'Full £50,000 Goods in Transit insurance protection'
    ],
    priceGuidance: 'Upright piano transport in Maida Vale from £180. Additional staircase flight surcharges apply transparently.',
    faqs: [
      {
        question: 'Can an upright piano fit into a Maida Vale mansion block lift?',
        answer: 'We measure lift dimensions in advance. If the elevator is too compact, our specialist team uses stair-climbing gear to navigate the wide communal staircase.',
        display: true
      },
      {
        question: 'Do you arrange Westminster parking suspensions outside mansion blocks?',
        answer: 'Yes. We apply for official bay suspensions with Westminster City Council, reserving legal kerbside loading space outside your entrance.',
        display: true
      },
      {
        question: 'How do you protect communal marble floors and carpets?',
        answer: 'We lay heavy non-slip floor runners along communal hallways before wheeling the piano on soft polyurethane rollers.',
        display: true
      }
    ]
  },

  // 14. Fine Art Maida Vale
  {
    service: 'fine-art-and-antiques-removals',
    location: 'maida-vale',
    status: 'published' as const,
    uniqueIntro: 'Pearl Removals delivers white-glove fine art and antique moving services across Maida Vale W9 and Little Venice. Serving private collectors and interior designers, we provide custom timber crating, conservation wrapping, and secure vehicle transport for delicate artwork, mirrors, and antiques.',
    localAngle: 'Properties in Little Venice and Maida Vale frequently feature high-ceilinged lateral apartments adorned with large oil paintings, antique French furniture, and ornate mirrors. Our technicians build custom timber cases and use acid-free glassine wrapping to isolate delicate surfaces from atmospheric moisture and transit friction.',
    whatsIncluded: [
      'Custom-built timber crates tailored for oversized canvases and mirrors',
      'Multi-layer conservation wrapping with glassine, bubble wrap, and corrugated outer guards',
      'Padded transit vehicles with secure horizontal tie-off points',
      'Full transit insurance cover tailored to high-value collections',
      'Careful white-glove room placement and uncrating'
    ],
    priceGuidance: 'Fine art transport from £120 for single cased pieces. Multi-piece antique collections quoted following consultation.',
    faqs: [
      {
        question: 'How do you handle moves into high-floor mansion apartments in Maida Vale?',
        answer: 'We coordinate with resident porters, pre-book service lifts, install padded lift wall protectors, and bring specialized furniture dollies for long corridors.',
        display: true
      },
      {
        question: 'Can you pack antique French-polished credenzas and dining tables?',
        answer: 'Yes. We wrap polished timber in breathable cotton blankets and protective corrugated board, avoiding tapes that could mark delicate wax finishes.',
        display: true
      },
      {
        question: 'Do you provide insurance coverage for valuable private art collections in W9?',
        answer: 'Yes. Comprehensive goods-in-transit insurance is included as standard, with higher declared valuation cover available on request.',
        display: true
      }
    ]
  }
];

export function writeWave6SpecialistServiceAreas() {
  console.log(`Writing ${wave6Data.length} Wave 6 specialist service-area files...`);
  for (const item of wave6Data) {
    const filename = `${item.service}_${item.location}.json`;
    const filePath = path.join(serviceAreasDir, filename);
    fs.writeFileSync(filePath, JSON.stringify(item, null, 2), 'utf8');
  }
  console.log(`Successfully wrote all ${wave6Data.length} Wave 6 specialist service-area files!`);
}

writeWave6SpecialistServiceAreas();
