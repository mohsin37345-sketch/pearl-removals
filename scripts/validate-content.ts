import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { areasRegistry } from '../src/data/areas';
import { serviceAreasRegistry } from '../src/data/serviceAreas';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

function countWords(str: string): number {
  if (!str) return 0;
  return str.trim().replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
}

// Simple Jaccard similarity between two texts based on 3-shingles / word sets
function calculateSimilarity(textA: string, textB: string): number {
  const wordsA = new Set(textA.toLowerCase().match(/\b[a-z]{3,}\b/g) || []);
  const wordsB = new Set(textB.toLowerCase().match(/\b[a-z]{3,}\b/g) || []);
  if (wordsA.size === 0 || wordsB.size === 0) return 0;

  const intersection = new Set([...wordsA].filter(x => wordsB.has(x)));
  const union = new Set([...wordsA, ...wordsB]);

  return intersection.size / union.size;
}

async function validate() {
  console.log('🔍 Starting Content Quality & Registry Validation...');

  const locationsDir = path.join(rootDir, 'src/content/locations');
  const microAreasDir = path.join(rootDir, 'src/content/micro-areas');
  const serviceAreasDir = path.join(rootDir, 'src/content/service-areas');

  const errors: string[] = [];

  // Map registries for fast lookup
  const areaRegistryMap = new Map(areasRegistry.map(a => [a.slug, a]));
  const microRegistryMap = new Map();
  for (const a of areasRegistry) {
    for (const m of a.micros) {
      microRegistryMap.set(`${a.slug}/${m.slug}`, { ...m, parentSlug: a.slug, parentPhase: a.phase });
    }
  }

  // 1. Check locations
  const publishedLocations = new Set<string>();
  const locationBodies: Array<{ slug: string; body: string }> = [];

  if (fs.existsSync(locationsDir)) {
    const locFiles = fs.readdirSync(locationsDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx') || f.endsWith('.json'));
    for (const file of locFiles) {
      const fullPath = path.join(locationsDir, file);
      const raw = fs.readFileSync(fullPath, 'utf8');
      
      // Parse frontmatter / json
      let data: any = {};
      let body = '';
      if (file.endsWith('.json')) {
        data = JSON.parse(raw);
        body = data.localKnowledge || '';
      } else {
        const parts = raw.split(/^---$/m);
        if (parts.length >= 3) {
          body = parts.slice(2).join('---').trim();
          // Minimal YAML parse
          const fmLines = parts[1].split('\n');
          for (const line of fmLines) {
            const [k, ...v] = line.split(':');
            if (k && v.length) data[k.trim()] = v.join(':').trim().replace(/^["']|["']$/g, '');
          }
        }
      }

      const slug = data.slug || path.basename(file, path.extname(file));
      const reg = areaRegistryMap.get(slug);

      if (!reg) {
        errors.push(`Location content '${file}' (slug: '${slug}') not found in Area Registry.`);
        continue;
      }

      if (data.status === 'published') {
        publishedLocations.add(slug);

        const introWords = countWords(data.intro || '');
        if (introWords < 100) {
          errors.push(`Location '${slug}' intro has only ${introWords} words (minimum 100).`);
        }

        const faqsCount = Array.isArray(data.localFaqs) ? data.localFaqs.length : 0;
        if (faqsCount < 4) {
          errors.push(`Location '${slug}' has ${faqsCount} FAQs (minimum 4).`);
        }

        if (reg.premium && !raw.includes('PremiumServicesCallout') && !data.premiumAngle) {
          errors.push(`Premium location '${slug}' is missing the premium services block.`);
        }

        locationBodies.push({ slug, body: `${data.intro} ${data.localKnowledge} ${body}` });
      }
    }
  }

  // 2. Check micro areas
  const publishedMicros = new Set<string>();
  const microBodies: Array<{ slug: string; body: string }> = [];

  if (fs.existsSync(microAreasDir)) {
    const microFiles = fs.readdirSync(microAreasDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx') || f.endsWith('.json'));
    for (const file of microFiles) {
      const fullPath = path.join(microAreasDir, file);
      const raw = fs.readFileSync(fullPath, 'utf8');

      let data: any = {};
      let body = '';
      if (file.endsWith('.json')) {
        data = JSON.parse(raw);
        body = data.whatMovingHereInvolves || '';
      } else {
        const parts = raw.split(/^---$/m);
        if (parts.length >= 3) {
          body = parts.slice(2).join('---').trim();
          const fmLines = parts[1].split('\n');
          for (const line of fmLines) {
            const [k, ...v] = line.split(':');
            if (k && v.length) data[k.trim()] = v.join(':').trim().replace(/^["']|["']$/g, '');
          }
        }
      }

      const parent = data.parent;
      const slug = data.slug || path.basename(file, path.extname(file));
      const reg = microRegistryMap.get(`${parent}/${slug}`);

      if (!reg) {
        errors.push(`Micro-area content '${file}' (${parent}/${slug}) not found in Area Registry.`);
        continue;
      }

      if (data.status === 'published') {
        if (!publishedLocations.has(parent)) {
          errors.push(`Published micro area '${slug}' has unpublished parent '${parent}'.`);
        }

        const introWords = countWords(data.intro || '');
        if (introWords < 80) {
          errors.push(`Micro area '${slug}' intro has only ${introWords} words (minimum 80).`);
        }

        const faqsCount = Array.isArray(data.localFaqs) ? data.localFaqs.length : 0;
        if (faqsCount < 3) {
          errors.push(`Micro area '${slug}' has ${faqsCount} FAQs (minimum 3).`);
        }

        publishedMicros.add(`${parent}/${slug}`);
        microBodies.push({ slug: `${parent}/${slug}`, body: `${data.intro} ${data.whatMovingHereInvolves} ${body}` });
      }
    }
  }

  // 3. Check service areas
  const serviceAreaBodies: Array<{ slug: string; body: string }> = [];
  if (fs.existsSync(serviceAreasDir)) {
    const saFiles = fs.readdirSync(serviceAreasDir).filter(f => f.endsWith('.md') || f.endsWith('.mdx') || f.endsWith('.json'));
    for (const file of saFiles) {
      const fullPath = path.join(serviceAreasDir, file);
      const raw = fs.readFileSync(fullPath, 'utf8');

      let data: any = {};
      let body = '';
      if (file.endsWith('.json')) {
        data = JSON.parse(raw);
      } else {
        const parts = raw.split(/^---$/m);
        if (parts.length >= 3) {
          body = parts.slice(2).join('---').trim();
          const fmLines = parts[1].split('\n');
          for (const line of fmLines) {
            const [k, ...v] = line.split(':');
            if (k && v.length) data[k.trim()] = v.join(':').trim().replace(/^["']|["']$/g, '');
          }
        }
      }

      if (data.status === 'published') {
        const matchRegistry = serviceAreasRegistry.some(sa => sa.serviceSlug === data.service && sa.areaSlug === data.location);
        if (!matchRegistry) {
          errors.push(`Published serviceArea '${file}' (${data.service}/${data.location}) does not exist in serviceAreasRegistry.`);
        }
        if (!publishedLocations.has(data.location)) {
          errors.push(`Published serviceArea '${file}' references unpublished location '${data.location}'.`);
        }
        serviceAreaBodies.push({ slug: `${data.service}/${data.location}`, body: `${data.uniqueIntro} ${data.localAngle} ${body}` });
      }
    }
  }

  // 4. Similarity check (> 60% is disallowed)
  const allGroups = [
    { name: 'locations', items: locationBodies },
    { name: 'microAreas', items: microBodies },
    { name: 'serviceAreas', items: serviceAreaBodies }
  ];

  for (const group of allGroups) {
    for (let i = 0; i < group.items.length; i++) {
      for (let j = i + 1; j < group.items.length; j++) {
        const sim = calculateSimilarity(group.items[i].body, group.items[j].body);
        if (sim > 0.60) {
          errors.push(`High content similarity (${(sim * 100).toFixed(1)}%) between ${group.name} '${group.items[i].slug}' and '${group.items[j].slug}'. Must be under 60%.`);
        }
      }
    }
  }

  if (errors.length > 0) {
    console.error('❌ Content Quality Validation FAILED:');
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log(`✅ Content Quality Validation PASSED (${publishedLocations.size} locations, ${publishedMicros.size} micro-areas, ${serviceAreaBodies.length} service-areas).`);
}

validate().catch((err) => {
  console.error('Validation script exception:', err);
  process.exit(1);
});
