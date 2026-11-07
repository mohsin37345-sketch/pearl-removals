import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const blogDir = path.join(rootDir, 'src/blog');

const targetedTextByFile: Record<string, string> = {
  'completion-day-timeline-london.mdx': 'When completion monies clear, our crew immediately unloads room by room, protecting floors, placing boxes in designated bedrooms, and rebuilding bedframes so your family can sleep comfortably on night one.',
  'how-far-ahead-to-book-a-london-move.mdx': 'When moving at short notice, contact our Cricklewood dispatch office immediately on 020 3151 8452. Our local presence across North West London allows us to mobilise rapid-response crews and Luton vans for emergency and short-window completions.',
  'how-much-do-removals-cost-in-london.mdx': 'To reduce moving expenses, declutter unwanted furniture before your survey, pack non-fragile clothing yourself, and reserve mid-week moving slots rather than high-demand Friday completions.',
  'moving-a-piano-safely.mdx': 'Never attempt to move an acoustic upright or grand piano with general domestic movers. Pianos require specialised timber skids, stair climbers, and padded transit covers to protect both the instrument and your staircase.',
  'moving-into-a-maida-vale-mansion-flat.mdx': 'Liaising with head porters across Maida Vale mansion blocks is vital. Confirm elevator dimensions, install padded lift jackets, and schedule moves within permitted daytime hours to ensure neighbours are undisturbed.',
  'moving-to-hampstead-guide.mdx': 'Hampstead features narrow conservation roads, hilly terrain, and tight CPZ enforcement. Our crews use agile 3.5-tonne vans and arrange Camden Council parking suspensions well ahead of moving morning.',
  'moving-to-mill-hill-guide.mdx': 'Mill Hill properties boast generous private driveways and leafy avenues. We provide synchronized multi-van moves and full packing the day prior, allowing families to relocate seamlessly without rush.',
  'moving-to-west-hampstead-guide.mdx': 'Period conversions on West End Lane and surrounding side roads feature steep internal staircases. Our moving teams dismantle oversized wardrobes and sofas so they maneuver easily around tight banisters.',
  'moving-with-children-london.mdx': 'Involve children in packing their personal toy chests and set up their bedrooms first upon arrival. Keeping comforting routines and familiar bedding on moving night eases the transition into your new London neighbourhood.',
  'moving-with-pets-in-london.mdx': 'Keep pets safe in a designated quiet room with fresh water while moving vans are loaded. Transport animals in your personal car, and set up familiar feeding bowls and bedding as soon as you arrive at your new property.',
  'packing-a-kitchen-for-moving.mdx': 'Pack a dedicated moving-day kettle box containing mugs, tea, coffee, snacks, paper towels, and essential cutlery so you can enjoy refreshments as soon as you step inside your new home.',
  'packing-fragile-items-and-artwork.mdx': 'Use acid-free glassine tissue for oil paintings, double-wall corrugated cartons for porcelain, and custom timber crating for delicate chandeliers and high-value antique mirrors.',
  'parking-suspensions-for-removal-vans-camden-barnet-brent-westminster.mdx': 'Camden, Westminster, Brent, and Barnet councils enforce strict CPZ regulations. Apply for bay suspensions at least 10 to 14 working days in advance to reserve legal curbside space directly outside your property.',
  'removals-company-vs-man-and-van.mdx': 'A professional removals service provides £50,000 Goods in Transit insurance, pre-move technical surveys, trained crews, and dedicated vehicle tie-rails, preventing damage and costly delays on completion day.',
  'storage-between-sale-and-purchase.mdx': 'Containerised storage at our secure NW2 warehouse eliminates double-handling. Furniture is packed directly into wooden storage containers at your residence and sealed until your new keys are released.',
  'two-week-moving-checklist.mdx': 'Defrost freezers 24 hours prior to departure, pack an overnight essentials bag for every family member, and confirm key collection arrangements with your estate agent and removal team.',
  'ulez-congestion-charge-and-your-removal.mdx': 'All Pearl Removals vehicles are 100% Euro 6 ULEZ-compliant. Daily congestion fees for central London destinations are itemised transparently in your written quote with no hidden extras.',
  'understanding-goods-in-transit-cover.mdx': 'Every move with Pearl Removals includes £50,000 Goods in Transit insurance. For high-value art, antiques, and fine watches, declared-value excess extensions are available upon survey.',
  'wardrobes-and-wardrobe-boxes-guide.mdx': 'Hanging wardrobe cartons protect suits, dresses, and coats from creasing during transit. Our porters supply sturdy wardrobe boxes and transfer clothes directly back into your new wardrobes on arrival.',
  'what-affects-a-removals-quote.mdx': 'Key factors influencing quotes include total cubic volume, access stairs, walking distances, and parking suspensions. Taking advantage of our free survey ensures a transparent, guaranteed fixed quote.',
  'what-happens-if-the-property-chain-collapses.mdx': 'If a chain delays on completion day, our dedicated vehicles can hold goods overnight securely under GPS tracking and sealed locks, giving conveyancers time to resolve financial transfers.',
  'what-removers-cannot-legally-move.mdx': 'Removers cannot legally transport flammables, open paint cans, gas cylinders, or firearms. Keep jewellery, passports, and essential family legal papers in your personal vehicle throughout the move.'
};

const placeholder = 'Detailed analysis, practical recommendations, and operational steps will be detailed here during final publication.';

let replacedCount = 0;
for (const [file, replacement] of Object.entries(targetedTextByFile)) {
  const filePath = path.join(blogDir, file);
  if (!fs.existsSync(filePath)) continue;
  let content = fs.readFileSync(filePath, 'utf8');

  if (content.includes(placeholder)) {
    content = content.replaceAll(placeholder, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    replacedCount++;
  }
}

console.log(`Replaced placeholder in ${replacedCount} blog post files.`);
