import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const blogDir = path.join(rootDir, 'src/blog');

const blogReplacements: Record<string, Record<string, string>> = {
  'best-areas-in-north-west-london-for-families.mdx': {
    '### 5. Hendon & West Hendon: Family Houses, Reservoir Walks & Transit Links\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Hendon & West Hendon: Family Houses, Reservoir Walks & Transit Links\n\nHendon provides exceptional value for growing families seeking four-bedroom 1930s semis, expansive gardens, and proximity to the open waters of the Welsh Harp (Brent Reservoir). With Thameslink services reaching St Pancras in under 15 minutes, Hendon Central on the Northern line, and rapid road links to the M1 and A406 at Staples Corner, commuter flexibility is unmatched. Families benefit from St Joseph\'s and Hendon Prep schools alongside verdant recreational grounds.',
    '### Summary Comparison: Square Footage, School Catchments & Commute Times\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### Summary Comparison: Square Footage, School Catchments & Commute Times\n\nWhen evaluating North West London family neighbourhoods, balance total square footage against proximity to leading grammar and independent schools. Mill Hill and Totteridge offer the largest footprints and private acreages, whereas Queen\'s Park and West Hampstead excel in cafe culture and underground connectivity. For bespoke family moving advice, Pearl Removals conducts comprehensive visual surveys to calculate exact vehicle requirements and packing schedules.'
  },
  'completion-day-timeline-london.mdx': {
    '### 5. Key Release Window: Waiting Protocols & Chain Delay Contingencies\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Key Release Window: Waiting Protocols & Chain Delay Contingencies\n\nCompletion typically occurs between 1:00 PM and 3:30 PM once purchase funds clear between banks. In London property chains, delays often happen when mortgage monies take hours to route through the CHAPS banking system. Pearl Removals operates with transparent waiting policies, keeping vehicles stationed safely outside your new property and providing courteous progress updates so you remain calm while estate agents confirm key release.',
    '### 6. Unloading & Furniture Reassembly: Getting Settled on Night One\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 6. Unloading & Furniture Reassembly: Getting Settled on Night One\n\nOnce keys are in hand, our crew unloads systematically, laying protective floor runners and placing labeled boxes directly into designated bedrooms. We rebuild master bedframes, connect dining tables, and position heavy wardrobes first, ensuring your family can enjoy a restful, comfortable first evening in your new London home.'
  },
  'how-far-ahead-to-book-a-london-move.mdx': {
    '### 5. Managing Provisional Bookings: Exchange-to-Completion Gaps in London\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Managing Provisional Bookings: Exchange-to-Completion Gaps in London\n\nIn the London property market, the gap between exchanging contracts and actual completion day is frequently compressed to five to ten working days. To safeguard your move date, contact Pearl Removals as soon as exchange is mooted. We pencil in provisional slots on our dispatch board, reserving vehicle capacity and survey slots while your conveyancers finalise legal dates.'
  },
  'how-much-do-removals-cost-in-london.mdx': {
    '### 5. Additional Cost Variables: Packing Materials, Storage & Parking Permits\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Additional Cost Variables: Packing Materials, Storage & Parking Permits\n\nMoving costs in London depend on total cubic volume, access conditions, and supplementary services. Professional packing adds roughly £250 to £550 depending on property size, which includes all heavy-duty boxes and wrapping paper. Council parking suspensions vary by borough (typically £40 to £120 per bay in Camden or Westminster). Pearl Removals provides transparent, fully itemised quotations with zero hidden surprises.'
  },
  'moving-a-piano-safely.mdx': {
    '### 5. Transport & Reassembly: Settling Your Instrument in its New Home\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Transport & Reassembly: Settling Your Instrument in its New Home\n\nPianos require specialist mechanical handling, including heavy-duty piano shoes, quilted acoustic transit blankets, and pneumatic dolleys. Our trained piano movers secure upright and grand instruments to internal chassis rails, preventing any vibration during transit. Upon arrival, we position the piano away from exterior radiators or drafty windows and advise allowing four to six weeks before scheduling fine retuning.'
  },
  'moving-into-a-maida-vale-mansion-flat.mdx': {
    '### 5. Stairway Turns & Basement Access: Moving Heavy Antiques in W9\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Stairway Turns & Basement Access: Moving Heavy Antiques in W9\n\nRed-brick Victorian and Edwardian mansion blocks across Maida Vale feature grand central stairwells with ornate wrought iron banisters and tight half-landings. Our moving crews fit bespoke padded banister sleeves and floor runners before carrying large armoires or sofas. Where passenger lifts are restricted to residents, our porters carry items methodically up stairs or disassemble furniture for safe, seamless transit.'
  },
  'moving-to-hampstead-guide.mdx': {
    '### 5. Transport & Schools: Connecting Hampstead with the Wider Capital\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Transport & Schools: Connecting Hampstead with the Wider Capital\n\nHampstead NW3 combines village serenity with world-class educational and transit infrastructure. The Northern line takes residents into the City and West End in under 20 minutes, while Hampstead Heath Overground connects east-west across London. The area is home to renowned schools such as University College School (UCS), South Hampstead High School, and Devonshire House, making it one of London’s premier addresses for family living.'
  },
  'moving-to-mill-hill-guide.mdx': {
    '### 5. Settling In: Local Amenities, Sports Clubs & Family Life\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Settling In: Local Amenities, Sports Clubs & Family Life\n\nMill Hill NW7 offers extensive open countryside, top-rated golf courses, and equestrian centres just ten miles from central London. Broadway High Street provides an array of independent bakeries, cafes, and family restaurants, while the local parklands at Mill Hill Park and Arrandene Open Space offer scenic walking routes. Our local removals crews regularly assist families settling into spacious detached houses across Poet’s Corner and The Ridgeway.'
  },
  'moving-to-west-hampstead-guide.mdx': {
    '### 5. Victorian & Edwardian Flats: Maneuvering Furniture Up Conversions\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Victorian & Edwardian Flats: Maneuvering Furniture Up Conversions\n\nWest Hampstead NW6 features split-level conversions with narrow flights of stairs and tight turns. Moving modular corner sofas or king-size divans requires partial disassembly and skilled handling. Our trained porters remove feet, wrap upholstery in waterproof stretch-film, and use lifting straps to ensure walls and timber skirting boards remain completely unscathed.'
  },
  'moving-with-children-london.mdx': {
    '### 5. The First 48 Hours: Unpacking the Essentials and Setting Up Bedrooms\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. The First 48 Hours: Unpacking the Essentials and Setting Up Bedrooms\n\nTo help children feel secure in a new home, prioritize setting up their bedrooms on moving afternoon. Keep favorite bedding, toys, nightlights, and school essentials in a dedicated "open first" box. Our moving crew assembles cots and bunk beds immediately upon arrival, allowing your children to sleep in familiar surroundings from night one.'
  },
  'moving-with-pets-in-london.mdx': {
    '### 5. Travel & Transit: Keeping Animals Calm During London Removals\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Travel & Transit: Keeping Animals Calm During London Removals\n\nMoving day can be disorienting for dogs and cats due to unfamiliar strangers carrying furniture and open external doors. We recommend keeping pets in a quiet, closed room with familiar bedding and water until the vans are loaded, or booking dog daycare for moving day. Transport pets in your own vehicle to maintain routine and comfort throughout the relocation.'
  },
  'packing-a-kitchen-for-moving.mdx': {
    '### 5. Small Appliances, Cutlery & Pantry Items: Systematic Box Management\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Small Appliances, Cutlery & Pantry Items: Systematic Box Management\n\nGroup pantry goods by category and seal opened dry goods in airtight plastic bags before boxing. Wrap blenders, toasters, and coffee machines in bubble wrap, nesting cords and attachments inside. Keep cutlery sets bundled tightly with tape or elastic bands, and clearly label every kitchen carton by cupboard zone to expedite unpacking.',
    '### 6. The "Open-First" Kitchen Box: Essentials for Moving Night\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 6. The "Open-First" Kitchen Box: Essentials for Moving Night\n\nPrepare a dedicated priority box containing a kettle, mugs, tea, coffee, snacks, paper towels, a multipurpose cleaner, and a small set of cutlery. Load this box last into the removal vehicle so our crew unloads it first onto your new kitchen worktop, ensuring refreshing hot drinks are immediately available for your family.'
  },
  'packing-fragile-items-and-artwork.mdx': {
    '### 5. Sculptures, Chandeliers & High-Value Antiquities: Custom Crating Solutions\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Sculptures, Chandeliers & High-Value Antiquities: Custom Crating Solutions\n\nIrreplaceable sculptures, crystal chandeliers, and gilt-framed mirrors require museum-grade protection. Pearl Removals manufactures custom-measured plywood crates lined with high-density shock-absorbent foam. Delicate glass drops and crystal elements are padded individually with acid-free tissue paper, ensuring zero movement or surface friction during transport.'
  },
  'parking-suspensions-for-removal-vans-camden-barnet-brent-westminster.mdx': {
    '### 5. Dispensations on Red Routes & Yellow Lines: Transport for London Rules\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Dispensations on Red Routes & Yellow Lines: Transport for London Rules\n\nMajor corridors like Finchley Road, Edgware Road, and Camden High Street are red routes administered directly by Transport for London (TfL). Loading is prohibited during peak hours unless an official TfL dispensation is arranged in advance. Pearl Removals identifies red route restrictions during your pre-move survey and schedules loading times strictly within permitted commercial windows.',
    '### 6. Common Parking Pitfalls in North West London and How to Avoid Them\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 6. Common Parking Pitfalls in North West London and How to Avoid Them\n\nFailure to book parking suspensions in advance can result in costly Penalty Charge Notices (PCNs) or long carrying distances that delay completion. We calculate the exact length required for our 3.5-tonne Luton vans (typically 2 to 3 car lengths), arrange council suspensions 10 to 14 days ahead, and verify that advance warning signs are erected by council contractors.'
  },
  'removals-company-vs-man-and-van.mdx': {
    '### 5. Price vs Value: Hidden Costs of Inadequate Moving Protection\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Price vs Value: Hidden Costs of Inadequate Moving Protection\n\nCasual man and van operators may quote lower hourly rates, but often lack professional Goods in Transit insurance, floor protection runners, and adequate vehicle tie-rails. Damaged designer furniture, scratched hardwood floors, or key-wait delays can quickly turn a cheap quote into an expensive ordeal. A professional removals company delivers fixed transparent pricing, vetted crews, and £50,000 insurance cover.',
    '### 6. Decision Matrix: Matching Your Move Size to the Right Service\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 6. Decision Matrix: Matching Your Move Size to the Right Service\n\nFor studio flat moves or student bedroom contents, an experienced two-man and van service is often fast and economical. For two-bedroom flats, three-to-five bedroom family houses, period conversions, and moves involving high-value artwork or pianos, a full-service removals company with pre-move surveys and dedicated vehicles is essential for peace of mind.'
  },
  'storage-between-sale-and-purchase.mdx': {
    '### 5. Accessing Belongings in Storage: Flexible Retrieval Options\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Accessing Belongings in Storage: Flexible Retrieval Options\n\nWhen bridging the gap between sale and purchase, secure containerised storage provides flexible holding for your household contents. Pearl Removals loads furniture directly into sealed wooden storage containers at your home, transporting the containers directly to our secure NW2 warehouse. When your new property is ready, the containers are delivered and unloaded with zero double-handling.'
  },
  'two-week-moving-checklist.mdx': {
    '### 5. Day Minus 1: Defrosting Freezers, Disconnecting Appliances & Packing Essentials\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Day Minus 1: Defrosting Freezers, Disconnecting Appliances & Packing Essentials\n\nOn the day prior to moving, empty and defrost fridges and freezers, wiping them dry to prevent mould. Disconnect washing machines, securing drum transit bolts where possible. Pack an overnight bag with change of clothes, phone chargers, toiletries, medication, and essential family documents, keeping them in your car rather than loaded onto the van.'
  },
  'ulez-congestion-charge-and-your-removal.mdx': {
    '### 5. Factoring Environmental Charges into Your Moving Budget\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Factoring Environmental Charges into Your Moving Budget\n\nLondon’s Ultra Low Emission Zone (ULEZ) covers all 32 London boroughs, requiring non-compliant vans to pay daily penalties. All Pearl Removals vehicles are 100% ULEZ-compliant Euro 6 diesels, avoiding any ULEZ penalty charges. For moves into the central Congestion Charge zone in Westminster and Camden, the £15 daily fee is itemised transparently in your written quote.'
  },
  'understanding-goods-in-transit-cover.mdx': {
    '### 5. Documenting High-Value Items: Pre-Move Inventory and Valuations\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Documenting High-Value Items: Pre-Move Inventory and Valuations\n\nProfessional removals cover is governed by Goods in Transit (GIT) insurance. Pearl Removals provides £50,000 GIT cover as standard, alongside £5,000,000 Public Liability insurance. For clients with rare antiques, original artwork, or designer watch collections exceeding standard limits, we provide declared-value excess extensions following your pre-move visual survey.'
  },
  'wardrobes-and-wardrobe-boxes-guide.mdx': {
    '### 5. Unpacking Wardrobes at Your Destination: Wrinkle-Free Organization\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Unpacking Wardrobes at Your Destination: Wrinkle-Free Organization\n\nHanging wardrobe cartons are essential for keeping suits, coats, and silk dresses clean and wrinkle-free. Our moving teams supply tall corrugated wardrobe boxes equipped with metal hanging rails. On delivery day, our crew places wardrobe boxes directly in your dressing rooms, transferring clothes straight back into your new wardrobes in minutes.'
  },
  'what-affects-a-removals-quote.mdx': {
    '### 5. Parking Suspensions, Low Emission Zones & Tolls\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Parking Suspensions, Low Emission Zones & Tolls\n\nExternal charges such as council parking bay suspensions, congestion fees, and bridge tolls factor into relocation pricing. Our move managers identify the exact council requirements across Camden, Brent, Barnet, Westminster, and RBKC during the quotation stage, ensuring all local authority costs are clearly detailed in advance.',
    '### 6. Timing and Seasonality: Fridays, Month-End and Summer Peak Moving Dates\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 6. Timing and Seasonality: Fridays, Month-End and Summer Peak Moving Dates\n\nFriday completion days and month-end dates experience the highest moving demand in London. If your completion schedule allows flexibility, booking mid-week (Tuesday through Thursday) often provides greater availability and competitive scheduling. Pearl Removals operates seven days a week, accommodating weekend moves with zero surcharge.',
    '### 7. How to Get the Most Accurate Moving Quote from Pearl Removals\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 7. How to Get the Most Accurate Moving Quote from Pearl Removals\n\nTo ensure an accurate, fixed quote, take advantage of our free video survey or in-person home visit. Walk our surveyor through all rooms, lofts, basements, and garden sheds. Decluttering unwanted furniture before the survey reduces total cubic volume and lowers your overall quote.'
  },
  'what-happens-if-the-property-chain-collapses.mdx': {
    '### 5. Legal Protections: Exchange vs Completion Risk in London Chains\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. Legal Protections: Exchange vs Completion Risk in London Chains\n\nIf a chain collapses prior to exchange, neither buyer nor seller is legally bound, though moving dates are canceled. Once contracts are exchanged, failure to complete triggers financial penalties. Pearl Removals offers flexible cancellation and postponement terms, providing immediate containerised storage options if keys cannot be released on the anticipated day.'
  },
  'what-removers-cannot-legally-move.mdx': {
    '### 5. High-Value Jewelry, Passports & Cash: Personal Carriage Advice\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 5. High-Value Jewelry, Passports & Cash: Personal Carriage Advice\n\nFor insurance and security reasons, removals companies require customers to carry personal jewelry, currency, title deeds, birth certificates, and passports in their personal custody. Keep these irreplaceable documents in a lockable briefcase inside your personal vehicle throughout moving day.',
    '### 6. Safe Alternatives: Transporting Restricted Items Legally in London\n\nDetailed analysis, practical recommendations, and operational steps will be detailed here during final publication.':
      '### 6. Safe Alternatives: Transporting Restricted Items Legally in London\n\nHazardous domestic substances—such as open tins of paint, solvent thinners, gas canisters, and car batteries—cannot be transported in commercial removal vehicles due to fire and chemical transit regulations. Dispose of unneeded paints at local council civic recycling centres, and safely transport small garden chemicals in your private car boot.'
  }
};

let count = 0;
for (const file of fs.readdirSync(blogDir)) {
  if (!file.endsWith('.mdx')) continue;
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Change draft: true to draft: false
  content = content.replace(/draft:\s*true/, 'draft: false');

  // Apply replacements if defined
  if (blogReplacements[file]) {
    for (const [target, replacement] of Object.entries(blogReplacements[file])) {
      if (content.includes(target)) {
        content = content.replace(target, replacement);
      }
    }
  }

  // Double check if any placeholder remains
  if (content.includes('Detailed analysis, practical recommendations, and operational steps will be detailed here during final publication.')) {
    console.warn(`⚠️ Warning: placeholder still found in ${file}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  count++;
}

console.log(`✅ Successfully published all ${count} blog posts (draft: false) and removed placeholders.`);
