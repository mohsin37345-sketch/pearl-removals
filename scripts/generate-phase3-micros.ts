import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { areasRegistry } from '../src/data/areas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const microAreasDir = path.join(rootDir, 'src/content/micro-areas');

if (!fs.existsSync(microAreasDir)) fs.mkdirSync(microAreasDir, { recursive: true });

function countWords(str: string): number {
  if (!str) return 0;
  return str.trim().replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
}

function calculateSimilarity(textA: string, textB: string): number {
  const wordsA = new Set(textA.toLowerCase().match(/\b[a-z]{3,}\b/g) || []);
  const wordsB = new Set(textB.toLowerCase().match(/\b[a-z]{3,}\b/g) || []);
  if (wordsA.size === 0 || wordsB.size === 0) return 0;

  const intersection = new Set([...wordsA].filter((x) => wordsB.has(x)));
  const union = new Set([...wordsA, ...wordsB]);

  return intersection.size / union.size;
}

// 25 distinct Sentence A (Intro Openers for Phase 3)
const poolA = [
  (m: string, a: string, pc: string) => `Relocating your household or commercial property across ${m} in ${a} (${pc}) calls for seasoned moving expertise, attentive handling, and methodical organization.`,
  (m: string, a: string, pc: string) => `For residents and growing families moving home in ${m}, ${a} (${pc}), Pearl Removals delivers dependable, fully insured domestic removal solutions.`,
  (m: string, a: string, pc: string) => `Pearl Removals provides dedicated, top-tier property removals across ${m}, ${a} (${pc}), ensuring an orderly, completely stress-free moving transition.`,
  (m: string, a: string, pc: string) => `Planning a property relocation across ${m}, ${a}? Our professional moving teams serve the entire ${pc} sector with punctuality and care.`,
  (m: string, a: string, pc: string) => `Our experienced removals team offers comprehensive domestic moving expertise throughout ${m}, ${a} (${pc}), treating your furnishings with utmost diligence.`,
  (m: string, a: string, pc: string) => `Moving home across ${m}, ${a} (${pc}) requires punctuality, modern transit equipment, and considerate navigation of local residential streets.`,
  (m: string, a: string, pc: string) => `Experience smooth, first-class relocation services in ${m}, ${a} (${pc}) with our Cricklewood-based removal specialists.`,
  (m: string, a: string, pc: string) => `Securing a trouble-free move in ${m}, ${a} (${pc}) is simple when partnering with our skilled London removal crews.`,
  (m: string, a: string, pc: string) => `From compact luxury apartments to grand family residences, we coordinate seamless relocations throughout ${m}, ${a} (${pc}).`,
  (m: string, a: string, pc: string) => `Residents in ${m}, ${a} (${pc}) trust Pearl Removals for courteous moving services and exceptional furniture protection.`,
  (m: string, a: string, pc: string) => `Situated within ${a}, ${m} (${pc}) benefits from our rapid vehicle deployment, modern fleet, and localized logistics.`,
  (m: string, a: string, pc: string) => `Our bespoke removals service in ${m}, ${a} (${pc}) is designed around the particular layout and architectural demands of the neighbourhood.`,
  (m: string, a: string, pc: string) => `Pearl Removals takes pride in executing immaculate property relocations throughout the residential roads of ${m}, ${a} (${pc}).`,
  (m: string, a: string, pc: string) => `Whether upsizing or downsizing in ${m}, ${a} (${pc}), our expert movers guarantee careful loading and swift, secure transit.`,
  (m: string, a: string, pc: string) => `A successful house relocation in ${m}, ${a} begins with punctuality and seasoned local familiarity across ${pc}.`,
  (m: string, a: string, pc: string) => `Pearl Removals brings premier London moving care directly to private residences and apartments throughout ${m}, ${a} (${pc}).`,
  (m: string, a: string, pc: string) => `Transitioning your household across ${m}, ${a} (${pc}) is handled with total professionalism and absolute care by our certified crew.`,
  (m: string, a: string, pc: string) => `We provide fully managed domestic moving across ${m}, ${a} (${pc}), safeguarding your valuables from doorstep to destination.`,
  (m: string, a: string, pc: string) => `Our experienced moving teams deliver tailored, damage-free relocations to households throughout ${m}, ${a} (${pc}).`,
  (m: string, a: string, pc: string) => `Enjoy complete peace of mind during your move across ${m}, ${a} (${pc}) with our dedicated fleet and trained porters.`,
  (m: string, a: string, pc: string) => `Pearl Removals delivers white-glove attention to detail for private homeowners relocating within ${m}, ${a} (${pc}).`,
  (m: string, a: string, pc: string) => `Executing a swift, efficient property transition in ${m}, ${a} (${pc}) demands the localized resources of a nearby operator.`,
  (m: string, a: string, pc: string) => `Our tailored removals package serves tenants and homeowners across ${m}, ${a} (${pc}) with transparent, honest pricing.`,
  (m: string, a: string, pc: string) => `Moving through the historic avenues of ${m}, ${a} (${pc}) requires careful vehicle maneuvering and respectful handling.`,
  (m: string, a: string, pc: string) => `Pearl Removals is your premier local moving partner across the ${pc} postcode in ${m}, ${a}.`
];

// 25 distinct Sentence B (Architecture & Community)
const poolB = [
  (b: string) => `Governed under ${b}, this distinguished enclave features an appealing blend of leafy avenues and substantial period properties.`,
  (b: string) => `Encompassing historic architectural charm within ${b}, the neighbourhood features handsome brick façades and quiet residential turnings.`,
  (b: string) => `The area offers a characterful urban fabric within ${b}, where classic Victorian dwellings stand alongside sympathetic modern developments.`,
  (b: string) => `Positioned within ${b}, the local community enjoys tree-lined thoroughfares, distinct local shops, and attractive period conversions.`,
  (b: string) => `Nestled inside ${b}, properties here range from elegant Edwardian maisonettes to expansive detached family houses.`,
  (b: string) => `This sought-after pocket under ${b} council jurisdiction is renowned for its quiet residential charm and architectural heritage.`,
  (b: string) => `Within the boundaries of ${b}, the locality boasts distinctive domestic architecture, high ceilings, and delicate interior plasterwork.`,
  (b: string) => `A vibrant residential community under ${b}, this district showcases spacious room layouts and private rear gardens.`,
  (b: string) => `Administered by ${b}, the quarter combines peaceful suburban tranquility with rapid connectivity to central London transit.`,
  (b: string) => `The architectural character across ${b} reflects sturdy red-brick masonry, deep bay windows, and grand entrance halls.`,
  (b: string) => `Bordering prime arterial connections in ${b}, this pocket remains remarkably peaceful with verdant residential roads.`,
  (b: string) => `Characterized by period residential architecture in ${b}, homes often feature multi-floor layouts and narrow stair passages.`,
  (b: string) => `Within ${b}, the neighbourhood is celebrated for its historic aesthetic, conservation streets, and distinguished residential stock.`,
  (b: string) => `The district showcases diverse property styles under ${b}, from handsome mansion blocks to secluded mews cottages.`,
  (b: string) => `Offering a welcoming neighbourhood atmosphere in ${b}, properties here are well suited to growing families and working professionals.`,
  (b: string) => `Under the stewardship of ${b}, the area retains its historic street patterns, mature greenery, and distinctive boundary walls.`,
  (b: string) => `Featuring an eclectic mix of period conversions and newly finished apartments, this ${b} quarter demands tailored handling.`,
  (b: string) => `The locale presents an impressive residential profile within ${b}, balancing urban vibrancy with domestic calm.`,
  (b: string) => `Prominent within ${b}, this neighbourhood features stately Edwardian terraces with ornate ironwork and wide frontages.`,
  (b: string) => `Dwellings throughout this part of ${b} exhibit high decorative standards, parquet flooring, and delicate sash windows.`,
  (b: string) => `A highly desirable residential setting under ${b}, this enclave requires protective floor coverings and considerate transit.`,
  (b: string) => `Within ${b}, the area is characterized by spacious living rooms, wide staircases, and mature garden plots.`,
  (b: string) => `This historic residential sector of ${b} combines Victorian artisan heritage with contemporary domestic comforts.`,
  (b: string) => `Surrounded by local parks and excellent transport links in ${b}, the district attracts discerning home movers.`,
  (b: string) => `Residential properties across this corner of ${b} boast impressive internal volumes and period structural features.`
];

// 25 distinct Sentence C (Equipment & Care)
const poolC = [
  (m: string) => `Our moving staff are fully trained in manual handling techniques, navigating stairs and narrow entryways effortlessly in ${m}.`,
  (m: string) => `We ensure that bulky furniture items are placed precisely where you want them in your new ${m} property.`,
  (m: string) => `Trust our experienced removals team to deliver a calm, structured, and effortless moving day in ${m}.`,
  (m: string) => `Every detail of your relocation is coordinated by an experienced supervisor to ensure complete satisfaction in ${m}.`,
  (m: string) => `Our moving porters fit padded banister covers, corner guards, and floor protection throughout your residence in ${m}.`,
  (m: string) => `We supply durable double-walled packing boxes, bubble wrap, and wardrobe cartons for complete contents protection in ${m}.`,
  (m: string) => `Operating with clean, carpeted Luton vehicles, Pearl Removals ensures safe furniture transit across ${m}.`,
  (m: string) => `We dismantle and reassemble beds, wardrobes, and tables efficiently, saving you time and effort in ${m}.`,
  (m: string) => `Our teams arrive equipped with floor runners, neoprene mats, and transit ties to safeguard your home in ${m}.`,
  (m: string) => `From delicate antique chinaware to heavy American fridge-freezers, we handle every item with utmost diligence in ${m}.`,
  (m: string) => `Our friendly, uniformed staff maintain an orderly, disciplined working atmosphere throughout moving day in ${m}.`,
  (m: string) => `We provide hanging wardrobe cartons allowing your garments to be moved smoothly without creasing in ${m}.`,
  (m: string) => `Every move in ${m} is backed by clear communication and transparent fixed pricing with no hidden surprises.`,
  (m: string) => `We coordinate vehicle positioning and loading schedules meticulously, guaranteeing minimal disruption to neighbours in ${m}.`,
  (m: string) => `Choose Pearl Removals for an immaculate, damage-free moving service delivered with authentic London professionalism in ${m}.`,
  (m: string) => `We take care of all heavy lifting so you and your family can focus on settling comfortably into ${m}.`,
  (m: string) => `Our crew installs custom protective floor sheets and banister padding to safeguard period architecture in ${m}.`,
  (m: string) => `With comprehensive £50,000 Goods in Transit insurance, your possessions are fully protected throughout ${m}.`,
  (m: string) => `Our modern vehicles feature low-emission engines and hydraulic tail lifts for smooth loading across ${m}.`,
  (m: string) => `We provide full packing services the day prior to moving, taking the strain entirely off your shoulders in ${m}.`,
  (m: string) => `Our supervisors conduct thorough pre-move surveys to allocate optimal vehicle sizes and crew numbers for ${m}.`,
  (m: string) => `We place furniture and labeled cartons directly into your designated rooms, helping you unpack easily in ${m}.`,
  (m: string) => `Our experienced moving teams handle delicate mirrors, chandeliers, and artworks with white-glove care in ${m}.`,
  (m: string) => `We take pride in our punctuality and courteous service, arriving promptly on moving day in ${m}.`,
  (m: string) => `Count on our dedicated Cricklewood fleet to deliver an orderly, punctual, and safe relocation in ${m}.`
];

// 25 distinct Sentence D (Concluding sentence for intro)
const poolD = [
  (m: string) => `We are committed to delivering an immaculate domestic transition for every household moving in ${m}.`,
  (m: string) => `Our dedicated personnel ensure your moving day in ${m} runs smoothly from initial collection to final placement.`,
  (m: string) => `Experience the difference of a professional moving team dedicated to your total peace of mind in ${m}.`,
  (m: string) => `Let our skilled London movers manage the physical demands of your move across ${m} with calm efficiency.`,
  (m: string) => `Your cherished personal possessions receive complete protection and attentive care at every stage in ${m}.`,
  (m: string) => `We take the stress out of moving day, providing reliable scheduling and transparent communication in ${m}.`,
  (m: string) => `With hundreds of successful London moves completed, our team delivers total reliability throughout ${m}.`,
  (m: string) => `Our customer-first ethos guarantees a courteous, tidy, and respectful moving service across ${m}.`,
  (m: string) => `Rest assured that your furniture and valuables will arrive in pristine condition at your new address in ${m}.`,
  (m: string) => `We deliver a seamless relocation experience tailored specifically to your family's schedule in ${m}.`,
  (m: string) => `Our comprehensive moving packages provide everything needed for a trouble-free relocation in ${m}.`,
  (m: string) => `From first contact to final delivery, Pearl Removals provides attentive, high-caliber service across ${m}.`,
  (m: string) => `Partner with a moving team that respects your home, your time, and your possessions in ${m}.`,
  (m: string) => `Our structured moving approach ensures minimal disruption and complete satisfaction for moves in ${m}.`,
  (m: string) => `We look forward to helping you start your next chapter smoothly in your new property in ${m}.`,
  (m: string) => `Enjoy a relaxed moving day knowing our experienced London crew has every detail covered in ${m}.`,
  (m: string) => `We treat every residence in ${m} with utmost respect, laying carpet protection from van to doorway.`,
  (m: string) => `Our transparent pricing and punctual service have made us a trusted removals choice in ${m}.`,
  (m: string) => `We handle the heavy lifting and logistical planning so you can enjoy your moving journey in ${m}.`,
  (m: string) => `Every member of our team is dedicated to providing an exemplary standard of care across ${m}.`,
  (m: string) => `Discover the peace of mind that comes from working with true London moving specialists in ${m}.`,
  (m: string) => `We manage your property relocation in ${m} with precision, diligence, and old-fashioned courtesy.`,
  (m: string) => `Our comprehensive removal solutions ensure that your transition to or from ${m} is completely effortless.`,
  (m: string) => `We coordinate each phase of your move meticulously to deliver complete satisfaction across ${m}.`,
  (m: string) => `Trust Pearl Removals for a seamless, well-organized, and punctual property move in ${m}.`
];

// Extract all Phase 3 micros
const phase3Areas = areasRegistry.filter((a) => a.phase === 3);
const allPhase3Micros: Array<{
  areaSlug: string;
  areaName: string;
  borough: string;
  postcodes: string[];
  microName: string;
  microSlug: string;
  premium: boolean;
  siblings: string[];
}> = [];

for (const area of phase3Areas) {
  for (const micro of area.micros) {
    const siblings = area.micros.filter((m) => m.slug !== micro.slug).map((m) => m.slug);
    allPhase3Micros.push({
      areaSlug: area.slug,
      areaName: area.name,
      borough: area.boroughs[0],
      postcodes: area.postcodes,
      microName: micro.name,
      microSlug: micro.slug,
      premium: micro.premium,
      siblings
    });
  }
}

console.log(`Generating ${allPhase3Micros.length} Phase 3 micro areas...`);

let idx = 0;
const generatedBodies: Array<{ slug: string; body: string }> = [];

for (const item of allPhase3Micros) {
  const m = item.microName;
  const a = item.areaName;
  const pc = item.postcodes.join(', ');
  const b = item.borough;

  // Build distinct sentences
  const sA = poolA[idx % poolA.length](m, a, pc);
  const sB = poolB[idx % poolB.length](b);
  const sC = poolC[idx % poolC.length](m);
  const sD = poolD[idx % poolD.length](m);

  const intro = `${sA} ${sB} ${sC} ${sD}`;

  // Unique what moving here involves
  const involveParts = [
    `Moving properties in ${m} involves careful navigation of local roads and access conditions in ${a}.`,
    `Our drivers position our removal vehicles safely close to property gates or residential entranceways, minimizing walking distances for carrying furniture.`,
    `In period residential conversions and multi-storey residences across ${m}, our crews utilize heavy-duty floor runners and padded banister covers to safeguard original architectural woodwork.`,
    `Where council controlled parking zones operate across ${b}, our operations office arranges necessary bay suspensions and loading dispensations well in advance of moving day.`,
    `We place all furniture pieces and labeled boxes directly into your nominated rooms, rebuilding dismantled bedframes and dining tables so you can settle quickly into your new ${m} home.`
  ];

  // Specific local angle variations based on borough/area
  if (item.areaSlug === 'kensington' || item.areaSlug === 'chelsea' || item.areaSlug === 'mayfair' || item.areaSlug === 'knightsbridge-and-belgravia') {
    involveParts.push(`For prime residences with private art collections, crystal chandeliers, or French-polished antiques in ${m}, our specialist team provides custom timber crating and acid-free wrapping.`);
  } else if (item.areaSlug === 'barnet' || item.areaSlug === 'radlett' || item.areaSlug === 'northwood' || item.areaSlug === 'pinner') {
    involveParts.push(`For large detached family residences with private gravel or resin-bound driveways in ${m}, our team deploys protective driveway mats to avoid tyre impressions.`);
  } else {
    involveParts.push(`For town-centre apartments and Victorian conversions in ${m}, our porters specialize in narrow staircase maneuvers and tight corner handling.`);
  }

  const whatMovingHereInvolves = involveParts.join(' ');

  // FAQs
  const localFaqs = [
    {
      question: `How do you arrange parking suspensions for removals in ${m}?`,
      answer: `We submit official parking bay suspension requests directly to the local council (${b}) on your behalf, reserving legal curbside loading space directly outside your property well in advance of moving day.`,
      display: true
    },
    {
      question: `Can your team move large furniture up narrow stairwells in ${m}?`,
      answer: `Yes. Our trained moving porters specialize in navigating period staircases, narrow conversions, and tight corners across ${m}, using protective quilted covers and partial disassembly where needed.`,
      display: true
    },
    {
      question: `How quickly can Pearl Removals reach ${m} from your depot?`,
      answer: `Our main operating base on Cricklewood Broadway NW2 is situated within easy reach of ${m} via major transport corridors, allowing our removal vans to arrive punctually and provide responsive local moving support.`,
      display: true
    }
  ];

  // 4-6 nearby micro areas (siblings from same area, padded with nearest if needed)
  let nearby = item.siblings.slice(0, 5);
  if (nearby.length < 4) {
    // Borrow from neighboring area if needed
    nearby = [...item.siblings, 'cricklewood-broadway', 'gladstone-park'].slice(0, 4);
  }

  const landmarks = [`${m} Centre`, `${a} High Street`, 'Local Green Spaces'];

  const microData = {
    name: m,
    slug: item.microSlug,
    parent: item.areaSlug,
    premium: item.premium,
    status: 'published',
    postcodes: item.postcodes,
    metaTitle: `Removals in ${m}, ${a} | Pearl Removals`.slice(0, 60),
    metaDescription: `Professional removals in ${m}, ${a} (${pc}). House & flat moves, packing & storage from our NW2 depot. Call 020 3151 8452.`.slice(0, 160),
    intro,
    whatMovingHereInvolves,
    landmarks,
    nearbyMicroAreas: nearby,
    localFaqs
  };

  const introWords = countWords(intro);
  if (introWords < 80) {
    console.warn(`Warning: ${item.areaSlug}_${item.microSlug} intro has only ${introWords} words.`);
  }

  const fileName = `${item.areaSlug}_${item.microSlug}.json`;
  const filePath = path.join(microAreasDir, fileName);
  fs.writeFileSync(filePath, JSON.stringify(microData, null, 2), 'utf8');

  generatedBodies.push({ slug: `${item.areaSlug}/${item.microSlug}`, body: `${intro} ${whatMovingHereInvolves}` });
  idx++;
}

console.log(`✅ Wrote all ${allPhase3Micros.length} Phase 3 micro area files.`);

// Quick similarity check among Phase 3 micro areas
let maxSim = 0;
let maxPair = '';
for (let i = 0; i < generatedBodies.length; i++) {
  for (let j = i + 1; j < generatedBodies.length; j++) {
    const sim = calculateSimilarity(generatedBodies[i].body, generatedBodies[j].body);
    if (sim > maxSim) {
      maxSim = sim;
      maxPair = `${generatedBodies[i].slug} & ${generatedBodies[j].slug}`;
    }
  }
}

console.log(`Max Phase 3 micro similarity: ${(maxSim * 100).toFixed(1)}% between ${maxPair}`);
