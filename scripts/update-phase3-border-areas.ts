import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const locationsDir = path.join(rootDir, 'src/content/locations');

const phase3BorderUpdates: Record<string, Array<{ name: string; slug: string }>> = {
  'notting-hill': [
    { name: 'Kensington', slug: 'kensington' },
    { name: 'Shepherd\'s Bush & White City', slug: 'shepherds-bush-and-white-city' },
    { name: 'Bayswater', slug: 'bayswater' },
    { name: 'Holland Park', slug: 'holland-park' },
    { name: 'Kensal Green & North Kensington', slug: 'kensal-green-and-north-kensington' },
    { name: 'Maida Vale', slug: 'maida-vale' }
  ],
  'holland-park': [
    { name: 'Kensington', slug: 'kensington' },
    { name: 'Shepherd\'s Bush & White City', slug: 'shepherds-bush-and-white-city' },
    { name: 'Hammersmith', slug: 'hammersmith' },
    { name: 'Notting Hill', slug: 'notting-hill' },
    { name: 'Bayswater', slug: 'bayswater' }
  ],
  'bayswater': [
    { name: 'Kensington', slug: 'kensington' },
    { name: 'Mayfair', slug: 'mayfair' },
    { name: 'Knightsbridge & Belgravia', slug: 'knightsbridge-and-belgravia' },
    { name: 'Notting Hill', slug: 'notting-hill' },
    { name: 'Paddington', slug: 'paddington' },
    { name: 'Marylebone & Regent\'s Park', slug: 'marylebone-and-regents-park' }
  ],
  'acton': [
    { name: 'Ealing', slug: 'ealing' },
    { name: 'Chiswick', slug: 'chiswick' },
    { name: 'Shepherd\'s Bush & White City', slug: 'shepherds-bush-and-white-city' },
    { name: 'Hammersmith', slug: 'hammersmith' },
    { name: 'Wembley', slug: 'wembley' },
    { name: 'Kensal Green & North Kensington', slug: 'kensal-green-and-north-kensington' }
  ],
  'highgate': [
    { name: 'Crouch End', slug: 'crouch-end' },
    { name: 'Hampstead', slug: 'hampstead' },
    { name: 'Muswell Hill', slug: 'muswell-hill' },
    { name: 'East Finchley', slug: 'east-finchley' },
    { name: 'Archway & Tufnell Park', slug: 'archway-and-tufnell-park' }
  ],
  'muswell-hill': [
    { name: 'Crouch End', slug: 'crouch-end' },
    { name: 'Southgate', slug: 'southgate' },
    { name: 'Highgate', slug: 'highgate' },
    { name: 'Finchley', slug: 'finchley' },
    { name: 'East Finchley', slug: 'east-finchley' }
  ],
  'totteridge-and-whetstone': [
    { name: 'Barnet', slug: 'barnet' },
    { name: 'Southgate', slug: 'southgate' },
    { name: 'Mill Hill', slug: 'mill-hill' },
    { name: 'Finchley', slug: 'finchley' },
    { name: 'North Finchley & Woodside Park', slug: 'north-finchley-and-woodside-park' }
  ],
  'edgware-and-burnt-oak': [
    { name: 'Bushey & Elstree', slug: 'bushey-and-elstree' },
    { name: 'Barnet', slug: 'barnet' },
    { name: 'Stanmore', slug: 'stanmore' },
    { name: 'Mill Hill', slug: 'mill-hill' },
    { name: 'Colindale & Kingsbury', slug: 'colindale-and-kingsbury' }
  ],
  'stanmore': [
    { name: 'Bushey & Elstree', slug: 'bushey-and-elstree' },
    { name: 'Radlett', slug: 'radlett' },
    { name: 'Pinner', slug: 'pinner' },
    { name: 'Edgware & Burnt Oak', slug: 'edgware-and-burnt-oak' },
    { name: 'Harrow Weald', slug: 'harrow-weald' }
  ],
  'harrow': [
    { name: 'Pinner', slug: 'pinner' },
    { name: 'Northwood', slug: 'northwood' },
    { name: 'Ealing', slug: 'ealing' },
    { name: 'Wembley', slug: 'wembley' },
    { name: 'Harrow on the Hill', slug: 'harrow-on-the-hill' },
    { name: 'Harrow Weald', slug: 'harrow-weald' }
  ]
};

for (const [slug, nearby] of Object.entries(phase3BorderUpdates)) {
  const filePath = path.join(locationsDir, `${slug}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.nearbyAreas = nearby;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated nearbyAreas for ${slug}`);
  }
}

console.log('✅ Finished updating Phase 2 border areas to link to Phase 3 neighbours.');
