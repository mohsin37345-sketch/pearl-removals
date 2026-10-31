import { getCollection } from 'astro:content';
import { siteConfig } from 'src/data/site';
import { areasRegistry, regionsRegistry, type AreaDefinition, type RegionDefinition, type MicroAreaDefinition } from 'src/data/areas';
import { serviceAreasRegistry, type ServiceAreaRegistryItem } from 'src/data/serviceAreas';

/**
 * Get all published main areas.
 * Requires:
 * 1. Registry phase <= siteConfig.publishPhase
 * 2. Content collection entry exists with status === 'published'
 */
export async function getPublishedAreas(): Promise<Array<AreaDefinition & { content: any }>> {
  let locationEntries: any[] = [];
  try {
    locationEntries = await getCollection('locations');
  } catch {
    locationEntries = [];
  }

  const publishedMap = new Map<string, any>();
  for (const entry of locationEntries) {
    if (entry.data?.status === 'published') {
      publishedMap.set(entry.data.slug || entry.id, entry);
    }
  }

  return areasRegistry
    .filter((area) => area.phase <= siteConfig.publishPhase && publishedMap.has(area.slug))
    .map((area) => ({
      ...area,
      content: publishedMap.get(area.slug)
    }));
}

/**
 * Get all published micro areas (optionally filtered by parent area slug).
 * Requires:
 * 1. Parent main area is published
 * 2. Micro area has content entry with status === 'published'
 */
export async function getPublishedMicroAreas(parentSlug?: string): Promise<Array<MicroAreaDefinition & { parentSlug: string; content: any }>> {
  const publishedAreas = await getPublishedAreas();
  const publishedParentSlugs = new Set(publishedAreas.map((a) => a.slug));

  let microEntries: any[] = [];
  try {
    microEntries = await getCollection('microAreas');
  } catch {
    microEntries = [];
  }

  const publishedMicroMap = new Map<string, any>();
  for (const entry of microEntries) {
    if (entry.data?.status === 'published') {
      publishedMicroMap.set(`${entry.data.parent}/${entry.data.slug || entry.id}`, entry);
    }
  }

  const results: Array<MicroAreaDefinition & { parentSlug: string; content: any }> = [];

  for (const area of areasRegistry) {
    if (!publishedParentSlugs.has(area.slug)) continue;
    if (parentSlug && area.slug !== parentSlug) continue;

    for (const micro of area.micros) {
      const key = `${area.slug}/${micro.slug}`;
      if (publishedMicroMap.has(key)) {
        results.push({
          ...micro,
          parentSlug: area.slug,
          content: publishedMicroMap.get(key)
        });
      }
    }
  }

  return results;
}

/**
 * Get published region hubs.
 * A region is only published and routed when it contains at least one published main area.
 */
export async function getPublishedRegions(): Promise<Array<RegionDefinition & { areas: AreaDefinition[] }>> {
  const publishedAreas = await getPublishedAreas();
  const publishedRegionsList: Array<RegionDefinition & { areas: AreaDefinition[] }> = [];

  for (const region of regionsRegistry) {
    const areasInRegion = publishedAreas.filter((a) => a.region === region.slug);
    if (areasInRegion.length > 0) {
      publishedRegionsList.push({
        ...region,
        areas: areasInRegion
      });
    }
  }

  return publishedRegionsList;
}

/**
 * Get published Service x Area combinations.
 * Requires:
 * 1. Location is published
 * 2. Content collection entry exists with status === 'published'
 */
export async function getPublishedServiceAreas(): Promise<Array<ServiceAreaRegistryItem & { content: any }>> {
  const publishedAreas = await getPublishedAreas();
  const publishedAreaSlugs = new Set(publishedAreas.map((a) => a.slug));

  let serviceAreaEntries: any[] = [];
  try {
    serviceAreaEntries = await getCollection('serviceAreas');
  } catch {
    serviceAreaEntries = [];
  }

  const publishedMap = new Map<string, any>();
  for (const entry of serviceAreaEntries) {
    if (entry.data?.status === 'published') {
      publishedMap.set(`${entry.data.service}/${entry.data.location}`, entry);
    }
  }

  return serviceAreasRegistry
    .filter((sa) => publishedAreaSlugs.has(sa.areaSlug) && publishedMap.has(`${sa.serviceSlug}/${sa.areaSlug}`))
    .map((sa) => ({
      ...sa,
      content: publishedMap.get(`${sa.serviceSlug}/${sa.areaSlug}`)
    }));
}
