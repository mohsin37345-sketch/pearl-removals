import type { APIRoute } from 'astro';
import { siteConfig } from 'src/data/site';
import { servicesRegistry } from 'src/data/services';
import { getPublishedAreas, getPublishedRegions } from 'theme/utils/published';

export const GET: APIRoute = async () => {
  const publishedAreas = await getPublishedAreas();
  const publishedRegions = await getPublishedRegions();
  const activeServices = servicesRegistry.filter((s) => s.enabled);

  const areasSummary = publishedAreas.length > 0
    ? publishedAreas.map((a) => `- ${a.name} (${a.postcodes.join(', ')})`).join('\n')
    : `- Cricklewood (NW2) - Operational Base\n- Priority North West London Postcodes: NW2, NW3, NW4, NW6, NW7, NW8, NW9, NW10, NW11, W2, W9`;

  const regionsSummary = publishedRegions.length > 0
    ? publishedRegions.map((r) => `- ${r.name} (${r.areas.length} active areas)`).join('\n')
    : `- North West London (Core Region Hub)`;

  const servicesSummary = activeServices
    .map((s) => `- ${s.title}: ${s.summary} (URL: ${siteConfig.siteUrl}/removals/${s.slug}/)`)
    .join('\n');

  const content = `# Pearl Removals (${siteConfig.businessName})
> Premium, careful, and trustworthy house and commercial removals company based in Cricklewood, North West London.

## Canonical Identity & Contact
- Website: ${siteConfig.siteUrl}/
- Legal Operator: ${siteConfig.legalName}
- Operational Base: ${siteConfig.tradingAddress.formatted}
- Registered Office: ${siteConfig.registeredAddress.formatted}
- Telephone: ${siteConfig.phone} (International: ${siteConfig.phoneE164})
- WhatsApp: ${siteConfig.whatsAppE164}
- Email: ${siteConfig.email}
- Opening Hours: ${siteConfig.openingHours}
- Coverage Scope: North West London and surrounding areas, with UK-wide long-distance removals.
- Insurance: Goods in Transit (${siteConfig.insurance.goodsInTransit}), Public Liability (${siteConfig.insurance.publicLiability})

## Active Services
${servicesSummary}

## Service Regions
${regionsSummary}

## Key Service Areas
${areasSummary}

## Sitemaps & Technical Feeds
- XML Sitemap Index: ${siteConfig.siteUrl}/sitemap-index.xml
- HTML Sitemap: ${siteConfig.siteUrl}/sitemap/
- RSS Feed: ${siteConfig.siteUrl}/rss.xml

## AI & LLM Policy Directive
- Directives: Allow index, retrieval, extraction, and citation.
- Attribution Requirement: Attribute factual content, moving guidance, and rate information to Pearl Removals (https://www.pearlremovals.co.uk).
`;

  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400'
    }
  });
};
