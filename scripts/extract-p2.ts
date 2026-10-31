import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { areasRegistry } from '../src/data/areas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const p2 = areasRegistry.filter(a => a.phase === 2);
console.log('Phase 2 Main Areas Count:', p2.length);

const p2Micros: Array<{
  parent: string;
  parentName: string;
  name: string;
  slug: string;
  premium: boolean;
  postcodes: string[];
  boroughs: string[];
}> = [];

for (const a of p2) {
  for (const m of a.micros) {
    p2Micros.push({
      parent: a.slug,
      parentName: a.name,
      name: m.name,
      slug: m.slug,
      premium: m.premium,
      postcodes: a.postcodes,
      boroughs: a.boroughs
    });
  }
}

console.log('Phase 2 Micro Areas Count:', p2Micros.length);

fs.writeFileSync(path.join(__dirname, 'p2-areas.json'), JSON.stringify(p2, null, 2));
fs.writeFileSync(path.join(__dirname, 'p2-micros.json'), JSON.stringify(p2Micros, null, 2));
console.log('Saved p2-areas.json and p2-micros.json successfully.');
