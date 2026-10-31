import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const locationsDir = path.join(rootDir(fileURLToPath(import.meta.url)), 'src/content/locations');

function rootDir(url: string) {
  return path.resolve(path.dirname(url), '..');
}

const borderUpdates: Record<string, Array<{ name: string; slug: string }>> = {
  'maida-vale': [
    { name: 'St John\'s Wood', slug: 'st-johns-wood' },
    { name: 'Paddington', slug: 'paddington' },
    { name: 'Notting Hill', slug: 'notting-hill' },
    { name: 'Bayswater', slug: 'bayswater' },
    { name: 'Marylebone & Regent\'s Park', slug: 'marylebone-and-regents-park' },
    { name: 'Kensal Green & North Kensington', slug: 'kensal-green-and-north-kensington' }
  ],
  'paddington': [
    { name: 'Bayswater', slug: 'bayswater' },
    { name: 'Marylebone & Regent\'s Park', slug: 'marylebone-and-regents-park' },
    { name: 'Notting Hill', slug: 'notting-hill' },
    { name: 'Maida Vale', slug: 'maida-vale' },
    { name: 'St John\'s Wood', slug: 'st-johns-wood' }
  ],
  'kensal-green-and-north-kensington': [
    { name: 'Notting Hill', slug: 'notting-hill' },
    { name: 'Acton', slug: 'acton' },
    { name: 'Maida Vale', slug: 'maida-vale' },
    { name: 'Queen\'s Park', slug: 'queens-park' },
    { name: 'Kensal Rise', slug: 'kensal-rise' }
  ],
  'primrose-hill': [
    { name: 'Camden Town', slug: 'camden-town' },
    { name: 'Marylebone & Regent\'s Park', slug: 'marylebone-and-regents-park' },
    { name: 'Belsize Park', slug: 'belsize-park' },
    { name: 'St John\'s Wood', slug: 'st-johns-wood' },
    { name: 'Hampstead', slug: 'hampstead' }
  ],
  'st-johns-wood': [
    { name: 'Marylebone & Regent\'s Park', slug: 'marylebone-and-regents-park' },
    { name: 'Camden Town', slug: 'camden-town' },
    { name: 'Maida Vale', slug: 'maida-vale' },
    { name: 'Primrose Hill', slug: 'primrose-hill' },
    { name: 'Swiss Cottage', slug: 'swiss-cottage' }
  ],
  'mill-hill': [
    { name: 'Totteridge & Whetstone', slug: 'totteridge-and-whetstone' },
    { name: 'Edgware & Burnt Oak', slug: 'edgware-and-burnt-oak' },
    { name: 'Highgate', slug: 'highgate' },
    { name: 'Hendon', slug: 'hendon' },
    { name: 'Finchley', slug: 'finchley' }
  ],
  'finchley': [
    { name: 'Totteridge & Whetstone', slug: 'totteridge-and-whetstone' },
    { name: 'Highgate', slug: 'highgate' },
    { name: 'Muswell Hill', slug: 'muswell-hill' },
    { name: 'Mill Hill', slug: 'mill-hill' },
    { name: 'Hampstead Garden Suburb', slug: 'hampstead-garden-suburb' },
    { name: 'Golders Green', slug: 'golders-green' }
  ],
  'hampstead': [
    { name: 'Highgate', slug: 'highgate' },
    { name: 'Kentish Town', slug: 'kentish-town' },
    { name: 'Camden Town', slug: 'camden-town' },
    { name: 'Belsize Park', slug: 'belsize-park' },
    { name: 'West Hampstead', slug: 'west-hampstead' },
    { name: 'Childs Hill', slug: 'childs-hill' }
  ],
  'wembley-park': [
    { name: 'Wembley', slug: 'wembley' },
    { name: 'Harrow', slug: 'harrow' },
    { name: 'Acton', slug: 'acton' },
    { name: 'Neasden', slug: 'neasden' },
    { name: 'Colindale & Kingsbury', slug: 'colindale-and-kingsbury' }
  ]
};

for (const [slug, nearby] of Object.entries(borderUpdates)) {
  const filePath = path.join(locationsDir, `${slug}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    data.nearbyAreas = nearby;
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated nearbyAreas for ${slug}`);
  }
}

console.log('Finished updating border area nearby links.');
