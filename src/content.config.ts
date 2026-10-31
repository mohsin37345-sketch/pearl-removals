import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    shortTitle: z.string(),
    tier: z.enum(['core', 'specialist', 'optional']),
    enabled: z.boolean().default(true),
    wave: z.number().default(1),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroHeading: z.string(),
    heroSubheading: z.string(),
    icon: z.string(),
    summary: z.string(),
    benefits: z.array(z.string()).default([]),
    process: z.array(
      z.object({
        step: z.number(),
        title: z.string(),
        description: z.string()
      })
    ).default([]),
    whatsIncluded: z.array(z.string()).default([]),
    whatsNotIncluded: z.array(z.string()).default([]),
    priceFrom: z.number().optional(),
    priceUnit: z.string().optional(),
    priceNotes: z.string().optional(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        display: z.boolean().default(true)
      })
    ).default([]),
    relatedServices: z.array(z.string()).default([]),
    premiumAngle: z.string().optional(),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).default([]),
    order: z.number().default(99),
    featured: z.boolean().default(false)
  })
});

const locations = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/locations' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    region: z.enum(['north-west-london', 'west-london', 'central-london', 'north-london', 'outer-north-west-london']),
    phase: z.union([z.literal(1), z.literal(2), z.literal(3)]),
    premium: z.boolean().default(false),
    status: z.enum(['published', 'draft']).default('draft'),
    boroughs: z.array(z.string()),
    postcodes: z.array(z.string()),
    distanceMiles: z.number(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    intro: z.string(),
    localKnowledge: z.string(),
    propertyTypes: z.string(),
    parkingAndAccess: z.string(),
    transportLinks: z.string().optional(),
    travelInfo: z.string().optional(),
    nearbyAreas: z.array(
      z.object({
        name: z.string(),
        slug: z.string()
      })
    ).default([]),
    servicesOffered: z.array(z.string()).default([]),
    localFaqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        display: z.boolean().default(true)
      })
    ).default([]),
    testimonial: z.object({
      name: z.string(),
      quote: z.string(),
      rating: z.number().default(5)
    }).optional(),
    lat: z.number().optional(),
    lng: z.number().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    premiumAngle: z.string().optional()
  })
});

const microAreas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/micro-areas' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    parent: z.string(),
    premium: z.boolean().default(false),
    status: z.enum(['published', 'draft']).default('draft'),
    postcodes: z.array(z.string()).default([]),
    metaTitle: z.string(),
    metaDescription: z.string(),
    intro: z.string(),
    whatMovingHereInvolves: z.string(),
    landmarks: z.array(z.string()).default([]),
    nearbyMicroAreas: z.array(z.string()).default([]),
    localFaqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        display: z.boolean().default(true)
      })
    ).default([]),
    lat: z.number().optional(),
    lng: z.number().optional(),
    heroImage: z.string().optional()
  })
});

const regions = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/regions' }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    intro: z.string(),
    body: z.string(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        display: z.boolean().default(true)
      })
    ).default([])
  })
});

const serviceAreas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/service-areas' }),
  schema: z.object({
    service: z.string(),
    location: z.string(),
    uniqueIntro: z.string(),
    localAngle: z.string(),
    whatsIncluded: z.array(z.string()).optional(),
    priceGuidance: z.string().optional(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        display: z.boolean().default(true)
      })
    ).default([]),
    caseStudy: z.object({
      title: z.string(),
      details: z.string()
    }).optional(),
    status: z.enum(['published', 'draft']).default('draft')
  })
});

const routes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/routes' }),
  schema: z.object({
    from: z.string(),
    to: z.string(),
    slug: z.string(),
    enabled: z.boolean().default(false),
    intro: z.string(),
    body: z.string(),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
        display: z.boolean().default(true)
      })
    ).default([])
  })
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().default('/images/blog-default.jpg'),
    imageAlt: z.string().default('Pearl Removals Moving Guide'),
    date: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Pearl Removals Team'),
    category: z.string().default('Moving Advice'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    faqs: z.array(
      z.object({
        question: z.string(),
        answer: z.string()
      })
    ).optional(),
    relatedServices: z.array(z.string()).default([]),
    relatedLocations: z.array(z.string()).default([])
  })
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx,json}', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    area: z.string(),
    service: z.string(),
    rating: z.number().min(1).max(5).default(5),
    date: z.coerce.date(),
    body: z.string(),
    source: z.string().default('Verified Move'),
    verified: z.boolean().default(false)
  })
});

export const collections = {
  services,
  locations,
  microAreas,
  regions,
  serviceAreas,
  routes,
  blog,
  testimonials
};
