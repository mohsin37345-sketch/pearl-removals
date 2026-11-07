import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const microAreasDir = path.join(rootDir, 'src/content/micro-areas');

function countWords(str: string): number {
  if (!str) return 0;
  return str.trim().replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
}

// Tailored additions (40-50 words each) completely unique to each micro area's geography, architecture and council logistics
const additions: Record<string, string> = {
  // Kensington (5)
  'kensington_kensington-high-street': ' We coordinate building manager protocols, lift protection, and parking suspensions directly with the council, allowing you to settle without friction. Whether relocating antique furnishings or modern designer collections, our attentive moving crew handles every carton and crate with consummate professional care.',
  'kensington_kensington-church-street': ' Our vehicles tackle the gradient and tight bends with calibrated loading plans, while our packing specialists supply custom foam encasements for fragile porcelain, bronze statuary, and rare vintage prints. We keep your street unobstructed and your precious items safeguarded throughout.',
  'kensington_phillimore-estate': ' We deploy experienced white-glove crews equipped with specialized floor runners, quilted door blankets, and heavy-duty stair armor to prevent any scuffs to historic skirting boards. Every consignment benefits from full insurance, punctual dispatch, and structured room-by-room reassembly.',
  'kensington_campden-hill': ' Navigating the steep elevation and narrow turning heads of Aubrey Walk or Hillsleigh Road requires our seasoned driving hands and precision parking suspensions. We handle multi-tier properties with ease, taking care of delicate chandeliers, oil paintings, and solid timber furnishings.',
  'kensington_kensington-palace-gardens': ' Operating along Billionaires Row requires rigorous security clearance, verified driver credentials, and discreet diplomatic-level etiquette. Our team liaises seamlessly with private security details and palace management to conduct transfers with quiet, unhurried precision and utmost confidentiality.',

  // Shepherd's Bush & White City (4)
  'shepherds-bush-and-white-city_brackenbury-village': ' The narrow residential avenues here feature delicate Victorian wrought ironwork and tight curbside parking that require proactive council permits. Our agile Luton vans navigate the leafy streets effortlessly, ensuring family belongings arrive safely and are positioned in your chosen rooms.',
  'shepherds-bush-and-white-city_white-city': ' Contemporary apartment blocks around Television Centre demand scheduled freight lift slots, concierge check-in, and strict floor protection guidelines. Our logistics personnel handle every booking detail in advance, making your transition into White City smooth, prompt, and stress-free.',
  'shepherds-bush-and-white-city_wood-lane': ' Heavy commercial traffic along the A219 corridor makes early morning arrivals and designated loading bays vital for seamless moves. We organize efficient loading routines that minimize downtime, protecting tech workstations, modern domestic appliances, and bulky corner sofas alike.',
  'shepherds-bush-and-white-city_askew-road': ' The vibrant cafe quarter and bustling bus routes necessitate swift, organized loading from side streets like Starfield Road or Curwen Road. Our friendly moving staff carry your wardrobes and glassware with reassuring skill, ensuring an effortless change of address.',

  // Hammersmith (3)
  'hammersmith_brook-green': ' Georgian townhouses overlooking the green boast tall sash windows and listed frontages that require gentle handling and specialist padding. We arrange Hammersmith & Fulham bay suspensions well ahead, ensuring direct front-door access for seamless furniture offloading.',
  'hammersmith_ravenscourt-park': ' Relocating near the park involves handling expansive Edwardian family homes with multi-level layouts and leafy gardens. Our crews supply wardrobe cartons, heavy-duty mattress bags, and comprehensive dismantling services to keep your family move relaxed and completely organized.',
  'hammersmith_hammersmith-broadway': ' High-density urban corridors around the gyratory require tactical timing and close liaison with building reception teams. We secure off-peak loading windows and protect communal corridors, guaranteeing a swift, efficient move into your modern central Hammersmith flat.',

  // Chiswick (5)
  'chiswick_chiswick-high-road': ' Red route loading restrictions and high pedestrian numbers along the shopping parade demand strict adherence to Hounslow council regulations. We position our vehicles along designated side roads or rear service alleys, carrying your possessions with swift, courteous professionalism.',
  'chiswick_bedford-park': ' The architectural heritage of the worlds first garden suburb requires deep respect for Norman Shaw tile-hung facades, slender balustrades, and fragile fanlights. Our porters use bespoke corner guards and protective booties to preserve every historic surface during transit.',
  'chiswick_strand-on-the-green': ' Riverside properties along the Thames towpath face tidal flooding risks and pedestrianized alleyways inaccessible to large HGVs. We utilize compact 3.5-tonne vans, timing our loading cycles around high tide predictions to deliver your belongings dry, safe, and sound.',
  'chiswick_grove-park': ' Wide suburban avenues near the river feature spacious Edwardian villas with gravel driveways and generous room dimensions. We bring complete packing materials, from acid-free tissue to bubble blanket wrap, ensuring your treasured heirlooms and garden planters travel securely.',
  'chiswick_turnham-green': ' Proximity to the bustling green and church common demands careful vehicle placement and consideration for neighbouring residents. Our team coordinates parking dispensations efficiently, helping you unpack and assemble your home essentials before evening settles.',

  // Ealing (5)
  'ealing_ealing-broadway': ' Modern high-rise towers near the Elizabeth line interchange require advance booking of service bays and freight lifts. Our coordinators manage all building liaison, ensuring your furniture, IT equipment, and personal effects are carried directly into your high-rise residence.',
  'ealing_ealing-common': ' Stately Victorian villas lining the common often have broad stone staircases and deep bay windows that facilitate furniture transit. We provide expert dismantling for oversize bedframes and modular sofas, ensuring unhurried, dependable moving across the W5 district.',
  'ealing_hanger-hill': ' The prestigious Haymills conservation estate features broad sweeping roads and mock-Tudor residences with private driveways. Our vans park comfortably on-site, allowing our crew to transfer heavy wardrobes, gym machinery, and fragile glassware with zero curbside delay.',
  'ealing_pitshanger': ' The intimate village atmosphere and active independent high street make friendly, community-conscious moving essential. We schedule quiet morning departures from side roads, ensuring family moves across Scotch Common or Meadvale Road proceed without disruption.',
  'ealing_west-ealing': ' Victorian terraced streets surrounding West Ealing station feature resident-controlled parking zones that benefit from pre-booked bay suspensions. Our polite, hard-working porters manage steep internal staircases with confidence, placing each marked carton into the correct bedroom.',

  // Mayfair (4)
  'mayfair_grosvenor-square': ' Diplomatic premises and opulent neoclassical apartments around the square require pristine security arrangements and immaculate site manners. Our white-glove specialists use museum-grade protective packaging, ensuring antique credenzas, gilt-framed paintings, and crystal ware arrive in showroom condition.',
  'mayfair_berkeley-square': ' Private hedge funds, luxury residential penthouses, and heritage buildings around the plane trees demand quiet, zero-impact removals. We stage items swiftly via service lifts or designated loading docks, guaranteeing total discretion and uncompromised schedule compliance.',
  'mayfair_mount-street': ' Red terracotta mansion blocks and high-end fashion boutiques along Mount Street dictate meticulous loading permissions from Westminster City Council. Our liveried moving crew uses padded elevator covers and floor armor, protecting expensive finishes throughout your building.',
  'mayfair_park-lane': ' Prestigious addresses overlooking Hyde Park feature dedicated concierge desks, underground vehicular ramps, and strict time limits. We work hand-in-glove with building superintendents, ensuring smooth transit for fine art, designer wardrobes, and bespoke furniture.',

  // Knightsbridge & Belgravia (4)
  'knightsbridge_knightsbridge': ' International residences near Brompton Road and Harrods require disciplined timing around red routes and heavy footfall. Our logistics managers organize timed council permits, deploying experienced movers who treat high-value personal collections with unparalleled care.',
  'knightsbridge-and-belgravia_knightsbridge': ' International residences near Brompton Road and Harrods require disciplined timing around red routes and heavy footfall. Our logistics managers organize timed council permits, deploying experienced movers who treat high-value personal collections with unparalleled care.',
  'knightsbridge-and-belgravia_belgravia': ' Stucco-fronted palatial terraces along Belgrave Square and Wilton Crescent feature grand entrance halls and marble floors. We install bespoke floor cladding and protective banister padding before lifting a single crate, preserving your property in pristine condition.',
  'knightsbridge-and-belgravia_eaton-square': ' Eaton Squares private communal gardens and regal colonnaded porticos necessitate polite coordination with the Grosvenor Estate. Our skilled porters manage heavy antique sideboards and delicate artwork with whisper-quiet efficiency, ensuring a dignified moving experience.',
  'knightsbridge-and-belgravia_sloane-street': ' Luxury boutiques and residential apartments along this high-fashion boulevard require prompt, low-profile loading routines. We reserve curbside spaces through Westminster or RBKC, moving designer wardrobes and bespoke home fittings without interrupting local commerce.',

  // Chelsea (3)
  'chelsea_kings-road': ' Bustling shopping traffic and narrow connecting streets like Old Church Street require well-planned parking bay suspensions. Our courteous moving teams maneuver bulky sofas through tight hallway turns, placing every box into its designated room with care.',
  'chelsea_cheyne-walk': ' Historic riverside properties overlooking the Thames boast listed interiors, delicate iron balconies, and distinctive architectural quirks. We employ padded quilted covers, custom art boxes, and protective staircase wraps to safeguard irreplaceable period elements.',
  'chelsea_sloane-square': ' The junction between Chelsea and Belgravia features busy pedestrian crossways, Royal Court Theatre crowds, and tight residential mews. We schedule our vehicle arrivals to beat morning congestion, ensuring an orderly, efficient transfer into your new London home.',

  // Barnet (5)
  'barnet_high-barnet': ' The historic coaching hill along the A1000 features steep road inclines and busy market-town pavements. Our drivers stabilize vehicles with precision wheel chocks, while our porters carry furniture swiftly into Victorian villas and contemporary ridge-top apartments.',
  'barnet_arkley': ' Substantial country homes and gated estates along Barnet Road feature extensive private gravel drives and multi-car garages. We bring our full-capacity removal vehicles right to your doorway, providing comprehensive packing, unpacking, and furniture placement.',
  'barnet_hadley-wood': ' Premier avenues like Camlet Way and Crescent East boast private acreage and custom-designed luxury residences. Our experienced teams treat fine oak tables, home cinema equipment, and delicate porcelain with meticulous attention, ensuring an effortless family relocation.',
  'barnet_monken-hadley': ' The charming conservation area around Hadley Green and St Marys Church requires gentle handling on rural lanes. We protect mature garden lawns and period entranceways, delivering your family possessions with patience, courtesy, and complete care.',
  'barnet_underhill': ' Mixed residential streets sloping down toward Dollis Valley feature family semis with convenient driveway parking. Our efficient crews work rapidly to load garden furniture, bikes, and packed storage boxes, helping you settle into your new home ahead of schedule.',

  // Southgate (5)
  'southgate_winchmore-hill': ' The historic green and surrounding Edwardian avenues feature substantial family residences with expansive lofts and mature gardens. We provide complete wardrobe cartons and mattress bags, ensuring every household heirloom arrives in flawless condition.',
  'southgate_southgate-green': ' The conservation enclave around Arnos Grove and the green features Georgian terraces and tree-lined suburban roads. Our crews coordinate vehicle access respectfully, ensuring clear routes for neighbours while loading your belongings safely.',
  'southgate_oakwood': ' Broad suburban crescents near Oakwood park offer excellent curbside parking for large 3.5-tonne Luton vans. We handle heavy timber dressers, garden play equipment, and home gym weights with specialized lifting gear, making moving day straightforward.',
  'southgate_cockfosters': ' Situated at the terminus of the Piccadilly line, large detached houses along Chalk Lane require structured, calm moving teams. We supply protective floor coverings for polished wood and deep pile carpets, ensuring zero mess during your relocation.',
  'southgate_palmers-green': ' Suburban avenues around Broomfield Park feature Edwardian terraced properties with tiled front pathways and high ceilings. Our team manages narrow staircase turns with practised ease, ensuring your furniture and delicate ornaments remain safe.',

  // Pinner (4)
  'pinner_pinner-village': ' Timber-framed medieval cottages and historic high street pavements require sensitive, careful furniture transit. We position our vehicles along permitted bays, using padded covers to maneuver heirlooms through vintage doorways without touching historic timbers.',
  'pinner_pinner-hill': ' Gated hilltop residences surrounding the golf club feature sweeping private drives, secluded woodlands, and multi-tier floorplans. We bring spacious removal vehicles directly to your steps, ensuring delicate grand pianos, artwork, and outdoor sets are relocated securely.',
  'pinner_hatch-end': ' Spacious mock-Tudor family homes along Uxbridge Road benefit from generous driveway parking and wide entranceways. Our polite staff unpack boxes and rebuild bedframes swiftly, giving you more time to explore nearby restaurants and shops.',
  'pinner_eastcote': ' Quiet cul-de-sacs and 1930s garden suburb avenues provide straightforward vehicle access and peaceful working conditions. We take extra care with family heirlooms, children bedroom sets, and garden pottery, providing a friendly, stress-free move.',

  // Northwood (3)
  'northwood_moor-park': ' Private security-gated estates and opulent mansions across the golf course demand vetted, courteous moving professionals. We protect marble entrance vestibules with heavy-duty surface protectors, ensuring bespoke furniture and high-value chattels are handled with absolute distinction.',
  'northwood_northwood-hills': ' Elevated residential streets near the station feature attractive detached properties with ample off-street parking. We provide full packing services the day prior, allowing you to relax while our crew packs and boxes your entire household methodically.',
  'northwood_batchworth-heath': ' Picturesque semi-rural roads near the Hertfordshire border feature historic country properties and characterful cottages. Our drivers navigate winding country lanes safely, bringing all your domestic treasures safely into your new woodland retreat.',

  // Bushey & Elstree (4)
  'bushey-and-elstree_bushey-heath': ' Prominently positioned on the Hertfordshire ridge, substantial residences here boast scenic views and large private plots. We manage heavy stone statuary, antique bookcases, and extensive wardrobes with purpose-built dolleys and soft transit blankets.',
  'bushey-and-elstree_bushey': ' The picturesque village high street and quiet surrounding closes feature Victorian brick terraces and modern family homes. Our moving teams work diligently from start to finish, ensuring your belongings are placed exactly where you wish in your new Bushey home.',
  'bushey-and-elstree_elstree': ' Famous for its cinematic heritage, secluded hilltop properties and historic country estates demand premier care. We handle complex relocations involving valuable audio-visual gear, private libraries, and antique clocks with total precision and discretion.',
  'bushey-and-elstree_borehamwood': ' Vibrant commuter neighbourhoods and new-build developments near the studios require organized, energetic moving teams. We coordinate lift bookings and parking slots, ensuring your furniture, white goods, and boxed items are moved without delay.',

  // Radlett (2)
  'radlett_aldenham': ' Picturesque village lanes and historic timbered farmhouses require careful vehicle maneuvering and rural road awareness. Our team protects traditional flagstone floors and low ceiling beams, ensuring every cherished antiquity arrives in perfect order.',
  'radlett_shenley': ' Quiet residential closes and conversion apartments in Shenley Park offer pleasant, calm environments for moving house. We take care of heavy garden tools, children furniture, and fragile glassware, making your countryside move a true pleasure.',

  // Fitzrovia & Bloomsbury (4)
  'fitzrovia-and-bloomsbury_fitzrovia': ' Vibrant media district side streets around Charlotte Street feature narrow thoroughfares and strict Camden CPZ rules. We secure official morning bay suspensions, transferring tech office suites, designer furniture, and flat contents with rapid efficiency.',
  'fitzrovia-and-bloomsbury_bloomsbury': ' Stately Georgian squares and academic quarter townhouses feature tall stone staircases, basement lightwells, and ornate cornicing. We install padded banister protectors and stair runners, ensuring period architecture remains completely unscathed.',
  'fitzrovia-and-bloomsbury_charlotte-street': ' Bustling restaurant terraces and high-density residential flats above shops require pinpoint scheduling and off-peak loading. Our experienced crew works with quiet concentration, ensuring your transition into Fitzrovia is smooth and unobtrusive.',
  'fitzrovia-and-bloomsbury_russell-square': ' Grand Victorian hotels and sprawling mansion blocks surrounding the gardens demand coordinated freight lift bookings. We manage concierge requirements proactively, moving books, art, and furniture safely into your central London residence.',

  // Crouch End (3)
  'crouch-end_crouch-end-broadway': ' Distinctive red-brick clock tower views and bustling shopping streets require careful vehicle positioning on side roads like Weston Park. Our team navigates multi-storey period flats with enthusiasm, ensuring heavy furniture is delivered without hassle.',
  'crouch-end_hornsey': ' Sloping Victorian terraced streets near Hornsey station feature classic front gardens and narrow entrance hallways. We dismantle large wardrobes and dining suites so they pass through doors effortlessly, keeping your walls and woodwork pristine.',
  'crouch-end_stroud-green': ' Vibrant residential turnings off Stroud Green Road feature leafy terraces and split-level maisonettes. Our hardworking staff carry boxes and furniture up steep internal stairs with balance and agility, helping you unpack quickly in your new home.'
};

let updated = 0;
for (const [key, extraText] of Object.entries(additions)) {
  const fileName = `${key}.json`;
  const filePath = path.join(microAreasDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(raw);

  // Check if already expanded
  if (data.intro.includes(extraText.trim().slice(0, 30))) {
    console.log(`Already expanded: ${key}`);
    continue;
  }

  data.intro = (data.intro.trim() + extraText).trim();
  const wordCount = countWords(data.intro);
  if (wordCount < 80) {
    console.warn(`⚠️ Warning: ${key} still has only ${wordCount} words.`);
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  updated++;
}

console.log(`✅ Successfully expanded intros on ${updated} micro area files.`);
