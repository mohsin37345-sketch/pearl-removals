import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const microAreasDir = path.join(rootDir, 'src/content/micro-areas');

const topups: Record<string, string> = {
  'mayfair_grosvenor-square': ' Our uniformed porters guarantee complete confidentiality and seamless transit across this international landmark address.',
  'knightsbridge-and-belgravia_knightsbridge': ' Our experienced supervisory personnel ensure continuous communication and flawless care throughout moving day.',
  'knightsbridge-and-belgravia_sloane-street': ' We place high priority on punctual arrival and unhurried packing for discerning retail and residential clients.',
  'southgate_southgate-green': ' Our friendly London team delivers attentive support, ensuring family belongings are positioned exactly where desired.',
  'pinner_pinner-village': ' We provide specialized quilted covers and floor protection to ensure complete peace of mind throughout your relocation.',
  'northwood_batchworth-heath': ' Every consignment is transported with comprehensive insurance and handled by courteous, permanent moving staff.',
  'bushey-and-elstree_bushey-heath': ' From fine antique furniture to delicate modern glassware, our team protects every household asset with care.',
  'bushey-and-elstree_borehamwood': ' We ensure transparent communication and rapid service, helping you settle into your new home with zero hassle.',
  'radlett_aldenham': ' Our dedicated moving professionals provide gentle, methodical handling for period and contemporary homes alike.',
  'fitzrovia-and-bloomsbury_charlotte-street': ' We manage stairs, narrow entrances, and busy curbsides with practised skill and total reliability.',
  'fitzrovia-and-bloomsbury_russell-square': ' Our professional movers take care of every physical detail so you can enjoy a calm, punctual arrival.'
};

for (const [key, text] of Object.entries(topups)) {
  const filePath = path.join(microAreasDir, `${key}.json`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.intro = (data.intro.trim() + text).trim();
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}
console.log('Topups complete.');
