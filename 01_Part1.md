# PEARL REMOVALS — PART 1 of 4: Foundation, Design System, Technical SEO & Core Pages

> Paste into a fresh Antigravity project. Parts 2–4 extend this project; they never replace it.

> **How to use:** fill the PLACEHOLDERS table, then paste everything below the line into Antigravity. If you have a mockup, paste it into the MOCKUP_HTML / MOCKUP_CSS blocks at the end; if not, delete those two blocks. The model then builds from the UI DESIGN BRIEF instead.


## PLACEHOLDERS — fill these before pasting

| Token | Value |
|---|---|
| `<<PHONE>>` | e.g. 020 0000 0000 |
| `<<PHONE_E164>>` | e.g. +442000000000 |
| `<<WHATSAPP_E164>>` | e.g. +447000000000 |
| `<<EMAIL>>` | e.g. info@pearlremovals.co.uk |
| `<<LEGAL_NAME>>` | Registered company name (e.g. Pearl Removals Ltd) |
| `<<REG_ADDRESS>>` | Registered office address |
| `<<TRADING_ADDRESS>>` | Cricklewood, London NW2 trading address (used for NAP and Google Business Profile) |
| `<<COMPANY_NO>>` | Companies House number |
| `<<VAT_NO>>` | VAT number, or delete VAT lines |
| `<<GIT_COVER>>` | Goods in transit cover, e.g. £50,000 |
| `<<PL_COVER>>` | Public liability cover, e.g. £5,000,000 |
| `<<LAT>>` / `<<LNG>>` | Business geo coordinates (Cricklewood base) |
| `<<OPENING_HOURS>>` | e.g. Mon–Sun 07:00–20:00 |
| `<<DOMAIN>>` | https://www.pearlremovals.co.uk (confirm WWW vs non-WWW before build) |

Anything not confirmed by the client (years trading, number of moves, review rating, DBS checks, accreditations) stays OUT of the copy and OUT of config until confirmed.


---

## ROLE & GOALS

You are acting as a principal Astro/Tailwind engineer and senior technical SEO building a complete, production-ready website for **Pearl Removals**, a premium house removals company based in Cricklewood, North West London.

You must satisfy three goals simultaneously:

1. **Visual alignment** with the supplied mockup (if any), the brand profile and the **UI DESIGN BRIEF** at the end of this prompt.
2. **100% functional parity** with the feature specification below — every route, component, schema block and behaviour listed must exist and work.
3. **Commercial performance** — the site's job is to generate phone calls, WhatsApp messages and quote-form submissions from people moving home in North West London and surrounding areas; to rank in the Google local pack (Maps) for "removals + [area]" queries in Phase 1 areas; and to rank in organic results for "removals / man and van / house removals + [area or micro area]" across Phase 2 and Phase 3 areas.


## INPUT CONTRACT

You will receive:

- **MOCKUP_HTML** — target visual/layout blueprint (optional)
- **MOCKUP_CSS** — styling language to preserve: tokens, spacing rhythm, component look (optional)
- **BRAND_PROFILE** — brand name, visual tone, colour palette, type preferences, logo paths, social URLs, contact details
- **CONTENT_PROFILE** — homepage blocks, FAQ entries, About/legal copy, contact text, any existing blog data
- **UI DESIGN BRIEF** — included at the bottom of this prompt. Use it as the design source of truth when no mockup is supplied.

If a field is missing, infer a sensible default and continue. If no mockup is supplied, design the system yourself against the Design Direction section and the UI DESIGN BRIEF. Do not stop and ask questions unless blocked by a hard technical ambiguity that would produce broken code.


## NON-NEGOTIABLE BUILD RULES

- No TODO placeholders, no "add content here", no lorem ipsum, no commented-out stubs.
- No broken routes, no dead internal links, no 404ing assets.
- No missing required features and no regression from the spec.
- All code complete and runnable — `npm install && npm run build` must succeed from a clean checkout with an empty blog collection **and** with only Phase 1 location content present.
- Accessibility semantics preserved throughout: labels, heading order, alt text, keyboard operation, focus management.
- Performance best practices: lazy-load non-critical assets, avoid blocking JS, ship zero client JS where an island isn't genuinely needed.
- Clean, maintainable, DRY implementation. Shared values live in config, never duplicated across templates.
- **No invented facts.** No fake reviews, no fake star ratings, no fake accreditations, no invented statistics, no fake countdown timers. The stats and testimonials shown in the UI DESIGN BRIEF are presentation placeholders only: on the live site they render only from config / verified testimonial data and hide when empty.
- No invented local facts: never state a specific permit price, fee, bay rule or council policy unless it is verifiable. When unsure, describe the issue in general terms ("most of Camden is a controlled parking zone, so we arrange a parking suspension in advance").


## BUSINESS BRIEF

**Pearl Removals** — a premium North West London house removals company based in **Cricklewood, London NW2**, trading under `<<LEGAL_NAME>>`.

- **Canonical domain (WWW, HTTPS):** https://www.pearlremovals.co.uk
- **Locale:** en-GB only. Single language. No i18n routing, no locale prefixes, no locale directories, no translation JSON, no language switcher. `<html lang="en-GB" dir="ltr">`.
- **Positioning:** premium, careful and trustworthy; fully insured, transparent pricing, no hidden fees, free no-obligation survey, 7 days a week. (Only claims the client confirms go live. DBS-checked staff and any accreditations only if confirmed.)
- **Coverage line:** "North West London and surrounding areas, with UK-wide long-distance removals."
- **Base:** Cricklewood NW2 — centre of the service-area rings; Google Business Profile address.

### Service area strategy (phased rings from Cricklewood)

- **Phase 1 — launch now (0–5 miles):** core North West London plus Maida Vale, Paddington and Kensal Green. Includes every area the client asked for: Cricklewood, Kilburn, Hendon, Mill Hill, Maida Vale, Paddington, Primrose Hill, Brent Cross. These can win the Google Maps pack as well as organic results.
- **Phase 2 — months 3–6:** next ring (West, Central, North, Outer North West). Organic results only; need strong unique pages and local reviews.
- **Phase 3 — month 6 onwards:** wider reach and most competitive / highest-value markets (Kensington, Mayfair, Knightsbridge & Belgravia, Chelsea, Chiswick, Ealing, Herts borders).
- **West London decision:** only Maida Vale, Paddington and Kensal Green & North Kensington at launch; Notting Hill, Holland Park, Bayswater, Acton in Phase 2; Kensington, Shepherd's Bush, Hammersmith, Chiswick, Ealing in Phase 3.
- **Premium areas** (marked ★ / `premium: true`): affluent, high-value markets. Their pages push premium services — full packing, fine art and antiques, piano moves, wardrobe boxes, storage, porter/concierge liaison for mansion blocks, fully insured white-glove moves.

Page counts:

- **Phase 1:** 27 main area pages + 121 micro-area pages
- **Phase 2:** 14 main area pages + 61 micro-area pages
- **Phase 3:** 16 main area pages + 63 micro-area pages
- **Total:** 57 main area pages + 245 micro-area pages = 302 location pages, 5 region hub pages, 12 service pages (+5 optional), 38 service × area pages, 8 optional long-distance route pages

### Services

12 live service pages (6 core at launch, 6 specialist in Wave 4) + 5 optional services disabled until confirmed. Full table in the SERVICES section.


## BUILD FLOW & WAVES (what to build first)

| Wave | When | What | Built in |
|---|---|---|---|
| 1 | Before launch (weeks 1–2) | Homepage, `/areas/north-west-london/` hub, `/areas/`, services hub + 6 core services, contact/quote/about/reviews/prices/how-it-works/faqs/calculator, legal pages, then main pages for the 8 client-requested areas (Cricklewood, Kilburn, Hendon, Mill Hill, Maida Vale, Paddington, Primrose Hill, Brent Cross) | Part 1 (system + core pages) and Part 2 (content) |
| 2 | Weeks 3–4 | Remaining Phase 1 main area pages, closest first | Part 2 |
| 3 | Weeks 5–6 | Cricklewood micro areas; Man and Van + House Removals for Cricklewood, Kilburn, Hendon and the 7 premium Phase 1 areas | Part 2 |
| 4 | Weeks 7–12 | 6 specialist service pages; Phase 1 micro areas in premium areas and premium pockets | Part 2 |
| 5 | Months 3–4 | Remaining Phase 1 micro areas; Phase 2 main area pages | Part 2 (P1 micro) + Part 3 (P2 main) |
| 6 | Months 4–6 | Piano + Fine Art pages for premium Phase 1 areas; Phase 2 micro areas, premium first | Part 3 |
| 7 | Months 6–8 | Phase 3 main area pages, premium first; Office Removals × business districts | Part 4 |
| 8 | Month 8+ | Phase 3 micro areas, premium first; long-distance route pages; blog posts | Part 4 |

How to use the split prompts in Antigravity:

1. Run **Part 1** in a fresh project. Verify `npm run build`, `astro check`, Lighthouse. Commit.
2. Run **Part 2** in the same project. Go live with `publishPhase = 1`.
3. Run **Part 3** when Phase 1 pages are indexed and ranking (around month 3). Content can be drafted early as `status: 'draft'`; set `publishPhase = 2` to release.
4. Run **Part 4** around month 6. Set `publishPhase = 3` to release.

Each part must leave the project building cleanly. Never rewrite or delete files from earlier parts unless the part says so; extend them.


## PART 1 SCOPE — what to build in this run

You are building the complete site **system** and the Wave 1 core pages. Location content comes in Parts 2–4, so this part must build cleanly with **no area content yet** (empty-state rules apply: `/areas/` shows a designed "areas coming soon / call us" state, region hubs are not routed, nav Areas menu shows "View all areas" only).

Build in this run:

1. Project scaffold, stack, config, aliases, strict TS, env, `vercel.json` (redirects + security headers), Lighthouse CI, axe config.
2. Design system from the UI DESIGN BRIEF: tokens, glass components, dark mode, typography, icons, skyline SVG.
3. Every layout and component in COMPONENTS TO BUILD, including area, micro-area, region-hub and service × area layouts (ready for content).
4. All content collections and their Zod schemas; `src/data/areas.ts` with the **full AREA REGISTRY** (all 3 phases, every main and micro area); `src/data/services.ts`; `src/data/serviceAreas.ts` with all 38 combinations; phase gating helpers in `theme/utils/published.ts`; `publishPhase = 1`.
5. `scripts/validate-content.ts` wired into `npm run build` (passes with zero location entries).
6. Every route in MANDATORY ROUTES (dynamic area routes simply generate zero pages until content exists).
7. SEO head, schema graph, sitemaps, robots, llms, RSS, OG image generation.
8. Conversion system: multi-step quote form, inline forms, homepage quote section, contact form, calculator, sticky mobile bar, WhatsApp, callback widget, checklist download, exit intent.
9. Blog system (empty collection).
10. **Content written in full in this part:** homepage, about-us, contact-us, how-it-works, prices, reviews (empty-state aware), faqs, get-a-quote, moving-cost-calculator, thank-you, 404, HTML sitemap, all 5 legal pages, services hub `/removals/`, and the **6 core service pages** (House Removals, Flat Removals, Man and Van, Office & Commercial Removals, Packing Services & Materials, Storage). Specialist services are registered with `enabled: false` until Part 2 writes them.


## STACK, CONFIG & ARCHITECTURE

- **Framework:** Astro, latest. `output: 'static'`.
- **Styling:** Tailwind CSS v4 via the Vite plugin and CSS-first config — `@import "tailwindcss";` in `src/styles/global.css`, design tokens declared in an `@theme { }` block. No `tailwind.config.js` unless a plugin forces it.
- **Content:** Astro content collections with the glob loader + MDX integration.
- **Integrations:** `@astrojs/sitemap`, `@astrojs/mdx`, `@astrojs/vercel` adapter (for image optimisation, headers and redirects).
- `trailingSlash: 'always'` and `site: 'https://www.pearlremovals.co.uk'`.
- **Alias-based architecture** — preserve this separation:
  - `src/*` — project pages, config, content, data
  - `theme/*` — reusable layouts, components, utilities
  - Declare both in `tsconfig.json` paths and `astro.config.mjs` `vite.resolve.alias`.
- **Strict TypeScript** — `extends: "astro/tsconfigs/strict"`, `astro check` passing with zero errors.
- **Custom breakpoint:** `2xl = 1440px` (`--breakpoint-2xl: 1440px;` inside `@theme`).
- **Env:** `.env.example` covering form access key, GA4 ID, CMP ID, Turnstile keys, verification codes, `PUBLISH_PHASE`.

### Phase gating (how "make now / make later" works in code)

- `src/data/areas.ts` is the single source of truth for **every** area in every phase (the full registry in the AREA REGISTRY section). Each entry has `phase: 1 | 2 | 3` and `premium: boolean`, plus its micro areas.
- `src/data/site.ts` exports `publishPhase` (default `1`, overridable by the `PUBLISH_PHASE` env var).
- A location, micro area, region hub or service × area page is **only routed, linked, listed in nav/sitemaps/llms.txt and included in schema** when (a) its registry phase ≤ `publishPhase`, (b) a content entry exists with `status: 'published'`, and (c) for micro areas, its parent area is also published.
- Content for later phases can be written ahead as `status: 'draft'` and stays invisible until released.
- Releasing Phase 2 or Phase 3 = set `publishPhase` and rebuild. No template changes.
- One helper, `theme/utils/published.ts`, exposes `getPublishedAreas()`, `getPublishedMicroAreas(parent?)`, `getPublishedRegions()`, `getPublishedServiceAreas()` — every template, nav, sitemap, schema and llms route uses these, never raw collections.


## DESIGN DIRECTION

The mockup, where supplied, controls the visual language. Extract and apply its colour system, typography scale, spacing rhythm, radius/border/shadow style, button and input behaviour, nav and footer styling, and responsive layout behaviour, then adapt every component below so it feels native to that mockup. Do not bolt the mockup's header onto generic components — restyle the whole system.

Where no mockup exists, build to the **UI DESIGN BRIEF** at the end of this prompt: premium, calm, trustworthy glassmorphism — closer to a national premium brand than a van-and-man site. Avoid stock moving-box clip art.

Design tokens (HSL custom properties in `@theme`), taken from the brief:

- Pearl white `#F8F7F4` (base background)
- Pearl iridescent gradient accent: very pale lilac → ice blue → blush (decorative only)
- Deep navy `#0F1E3D` (headings, footer)
- Royal blue `#1F5BFF` — primary buttons, links and highlights; the CTA colour
- Warm gold `#F5B82E` — star ratings only
- Neutral grey scale; semantic success / warning / error tokens

Glassmorphism system (from the brief, made production-safe):

- Frosted panels: white at 15–25% opacity, backdrop blur, 1px white border at 40% opacity, radius 24–32px, soft shadows.
- Every glass panel must keep text contrast ≥ 4.5:1 — increase panel opacity where needed.
- Fallback to a solid pearl panel when `backdrop-filter` is unsupported or `prefers-reduced-transparency: reduce`.
- Performance: no live backdrop blur over a full-page background on mobile; use a pre-blurred, optimised AVIF/WebP background photo instead.
- Background: bright, leafy North West London residential street (red-brick Victorian/Edwardian houses, trees, blue sky). Use licensed or client-supplied photography only.
- Hero photo: the client's real van and team when available. Never present AI-generated or stock people as the real Pearl Removals team.

Required regardless of mockup:

- **Dark mode** via class strategy with an inline blocking script that sets the class before paint (no flash), a header toggle, and `prefers-color-scheme` as the default. Dark variant = navy glass on deep navy.
- **Micro-animations** — the static brief has none; on the live site add only 150–200ms ease-out transform + shadow lifts on cards and buttons. Glass styling on the sticky header, cards and floating quote widget.
- **Motion safety** — every animation wrapped in `@media (prefers-reduced-motion: reduce)` guards.
- **Typography** — Plus Jakarta Sans (or Manrope) self-hosted via `@fontsource-variable`, `font-display: swap`, metric-matched fallback with `size-adjust`, preload only the weights actually used. Bold large headings, light body, letter-spaced uppercase eyebrow labels. No render-blocking Google Fonts.
- Fluid type scale with `clamp()`, 8pt spacing rhythm, 1280px max content width.
- **WCAG 2.2 AA** — 4.5:1 contrast, visible focus rings, keyboard-operable everything, skip-to-content link, `aria-label` on icon-only buttons.


## MANDATORY ROUTES

All lowercase, hyphenated, trailing slash.

### Core
```
/                                Homepage
/about-us/
/contact-us/
/how-it-works/
/prices/                         ("Pricing" in nav)
/reviews/
/faqs/
/get-a-quote/                    Primary conversion page
/moving-cost-calculator/         Interactive estimator
/thank-you/                      noindex, follow
/sitemap/                        HTML sitemap
/404                             noindex
```

### Services
```
/removals/                                      Services hub
/removals/house-removals/
/removals/flat-removals/
/removals/man-and-van/
/removals/office-removals/
/removals/packing-services/
/removals/storage/
/removals/piano-removals/
/removals/fine-art-and-antiques-removals/
/removals/furniture-removals/
/removals/long-distance-removals/
/removals/student-removals/
/removals/same-day-removals/
/removals/house-clearance/            (optional, enabled:false by default)
/removals/end-of-tenancy-cleaning/            (optional, enabled:false by default)
/removals/international-removals/            (optional, enabled:false by default)
/removals/downsizing-removals/            (optional, enabled:false by default)
/removals/landlord-and-letting-agent-removals/            (optional, enabled:false by default)
```

### Locations (phase-gated — see Phase gating)
```
/areas/                          Coverage hub: map + all published areas grouped by region
/areas/[region]/                 Region hubs: north-west-london, west-london, central-london,
                                 north-london, outer-north-west-london
/areas/[area]/                   One per main area (57 in total across 3 phases)
/areas/[area]/[micro]/           One per micro area (245 in total across 3 phases)
```
Region hub `/areas/north-west-london/` is the "Removals North West London" hub page and is built in Wave 1.

### Service × Location
Generated **only** where a `serviceAreas` collection entry exists and its location is published. Ship exactly these 38 (built across Parts 2–4):

| Wave | Group | Service | Area | URL |
|---|---|---|---|---|
| 3 | Home base | Man and Van | Cricklewood | `/removals/man-and-van/cricklewood/` |
| 3 | Home base | House Removals | Cricklewood | `/removals/house-removals/cricklewood/` |
| 3 | Home base | Man and Van | Kilburn | `/removals/man-and-van/kilburn/` |
| 3 | Home base | House Removals | Kilburn | `/removals/house-removals/kilburn/` |
| 3 | Home base | Man and Van | Hendon | `/removals/man-and-van/hendon/` |
| 3 | Home base | House Removals | Hendon | `/removals/house-removals/hendon/` |
| 3 | Premium Phase 1 | Man and Van | Hampstead | `/removals/man-and-van/hampstead/` |
| 3 | Premium Phase 1 | House Removals | Hampstead | `/removals/house-removals/hampstead/` |
| 3 | Premium Phase 1 | Man and Van | Belsize Park | `/removals/man-and-van/belsize-park/` |
| 3 | Premium Phase 1 | House Removals | Belsize Park | `/removals/house-removals/belsize-park/` |
| 3 | Premium Phase 1 | Man and Van | Primrose Hill | `/removals/man-and-van/primrose-hill/` |
| 3 | Premium Phase 1 | House Removals | Primrose Hill | `/removals/house-removals/primrose-hill/` |
| 3 | Premium Phase 1 | Man and Van | St John's Wood | `/removals/man-and-van/st-johns-wood/` |
| 3 | Premium Phase 1 | House Removals | St John's Wood | `/removals/house-removals/st-johns-wood/` |
| 3 | Premium Phase 1 | Man and Van | Mill Hill | `/removals/man-and-van/mill-hill/` |
| 3 | Premium Phase 1 | House Removals | Mill Hill | `/removals/house-removals/mill-hill/` |
| 3 | Premium Phase 1 | Man and Van | Hampstead Garden Suburb | `/removals/man-and-van/hampstead-garden-suburb/` |
| 3 | Premium Phase 1 | House Removals | Hampstead Garden Suburb | `/removals/house-removals/hampstead-garden-suburb/` |
| 3 | Premium Phase 1 | Man and Van | Maida Vale | `/removals/man-and-van/maida-vale/` |
| 3 | Premium Phase 1 | House Removals | Maida Vale | `/removals/house-removals/maida-vale/` |
| 6 | Premium Phase 1 specialist | Piano Removals | Hampstead | `/removals/piano-removals/hampstead/` |
| 6 | Premium Phase 1 specialist | Fine Art & Antiques Removals | Hampstead | `/removals/fine-art-and-antiques-removals/hampstead/` |
| 6 | Premium Phase 1 specialist | Piano Removals | Belsize Park | `/removals/piano-removals/belsize-park/` |
| 6 | Premium Phase 1 specialist | Fine Art & Antiques Removals | Belsize Park | `/removals/fine-art-and-antiques-removals/belsize-park/` |
| 6 | Premium Phase 1 specialist | Piano Removals | Primrose Hill | `/removals/piano-removals/primrose-hill/` |
| 6 | Premium Phase 1 specialist | Fine Art & Antiques Removals | Primrose Hill | `/removals/fine-art-and-antiques-removals/primrose-hill/` |
| 6 | Premium Phase 1 specialist | Piano Removals | St John's Wood | `/removals/piano-removals/st-johns-wood/` |
| 6 | Premium Phase 1 specialist | Fine Art & Antiques Removals | St John's Wood | `/removals/fine-art-and-antiques-removals/st-johns-wood/` |
| 6 | Premium Phase 1 specialist | Piano Removals | Mill Hill | `/removals/piano-removals/mill-hill/` |
| 6 | Premium Phase 1 specialist | Fine Art & Antiques Removals | Mill Hill | `/removals/fine-art-and-antiques-removals/mill-hill/` |
| 6 | Premium Phase 1 specialist | Piano Removals | Hampstead Garden Suburb | `/removals/piano-removals/hampstead-garden-suburb/` |
| 6 | Premium Phase 1 specialist | Fine Art & Antiques Removals | Hampstead Garden Suburb | `/removals/fine-art-and-antiques-removals/hampstead-garden-suburb/` |
| 6 | Premium Phase 1 specialist | Piano Removals | Maida Vale | `/removals/piano-removals/maida-vale/` |
| 6 | Premium Phase 1 specialist | Fine Art & Antiques Removals | Maida Vale | `/removals/fine-art-and-antiques-removals/maida-vale/` |
| 7 | Business districts | Office & Commercial Removals | Paddington | `/removals/office-removals/paddington/` |
| 7 | Business districts | Office & Commercial Removals | Brent Cross | `/removals/office-removals/brent-cross/` |
| 7 | Business districts | Office & Commercial Removals | Marylebone & Regent's Park | `/removals/office-removals/marylebone-and-regents-park/` |
| 7 | Business districts | Office & Commercial Removals | Camden Town | `/removals/office-removals/camden-town/` |

Do not generate every service against every area. That produces doorway pages and gets filtered.

### Long-distance route pages (optional, Part 4, `enabled: false` until client confirms)
```
/removals/long-distance-removals/london-to-manchester/
/removals/long-distance-removals/london-to-birmingham/
/removals/long-distance-removals/london-to-bristol/
/removals/long-distance-removals/london-to-brighton/
/removals/long-distance-removals/london-to-oxford/
/removals/long-distance-removals/london-to-cambridge/
/removals/long-distance-removals/london-to-milton-keynes/
/removals/long-distance-removals/london-to-st-albans/
```

### Blog
```
/blog/                           Paginated listing, 12 per page
/blog/2/  /blog/3/ ...
/blog/[slug]/
/blog/category/[category]/
```

### Legal
```
/privacy-policy/
/terms-and-conditions/
/cookie-policy/
/terms-of-business/              Removals contract terms
/complaints-procedure/
```

### Machine-readable endpoints
Astro routes returning text, not static files, so they use live config:
```
/robots.txt
/llms.txt
/rss.xml
/sitemap-index.xml               via @astrojs/sitemap
```


## SERVICES

| Wave | Tier | Service | URL | Scope |
|---|---|---|---|---|
| 1 | core | House Removals | `/removals/house-removals/` | Flagship. Full home moves, 1-bed houses to large family homes. |
| 1 | core | Flat Removals | `/removals/flat-removals/` | Flats, mansion blocks, conversions and high-rise; stairs, lifts, porters. |
| 1 | core | Man and Van | `/removals/man-and-van/` | Smaller moves, single items, students, quick jobs. |
| 1 | core | Office & Commercial Removals | `/removals/office-removals/` | Offices, shops, clinics; out-of-hours moves. |
| 1 | core | Packing Services & Materials | `/removals/packing-services/` | Full or part packing, boxes and materials. |
| 1 | core | Storage | `/removals/storage/` | Short and long-term storage between moves. |
| 4 | specialist | Piano Removals | `/removals/piano-removals/` | Upright and grand pianos, stairs, specialist equipment. |
| 4 | specialist | Fine Art & Antiques Removals | `/removals/fine-art-and-antiques-removals/` | Crating, wrapping, careful handling for valuable items. |
| 4 | specialist | Furniture Removals, Dismantling & Reassembly | `/removals/furniture-removals/` | Single items, marketplace purchases, dismantling and reassembly. |
| 4 | specialist | Long-Distance & UK-Wide Removals | `/removals/long-distance-removals/` | London to anywhere in the UK. |
| 4 | specialist | Student Removals | `/removals/student-removals/` | Term-time moves, small loads, storage (Middlesex University Hendon, central London universities). |
| 4 | specialist | Same-Day & Last-Minute Removals | `/removals/same-day-removals/` | Urgent and short-notice moves. |

Optional services — build the page and content entry with `enabled: false` (no route, not in nav, sitemap or schema) until the client confirms they offer it:

- House Clearance & Rubbish Removal → `/removals/house-clearance/`
- End-of-Tenancy Cleaning (via partner) → `/removals/end-of-tenancy-cleaning/`
- European & International Removals → `/removals/international-removals/`
- Downsizing & Later-Life Moves → `/removals/downsizing-removals/`
- Landlord & Letting Agent Moves → `/removals/landlord-and-letting-agent-removals/`

Service hub `/removals/` lists core then specialist services. Every service page is written in full (1,000–1,500 words) with its own FAQs, process, inclusions/exclusions, pricing guidance with adjacent qualifying conditions, and a `premiumAngle` paragraph reused on premium-area pages.


## AREA REGISTRY — every phase, main area, sub-area and micro area

Encode this exactly in `src/data/areas.ts` (type `Area { name, slug, region, phase, premium, postcodes, boroughs, distanceMiles, micros: { name, slug, premium }[] }`). Micro-area URL = `/areas/[area]/[micro]/`. ★ = premium.

### PHASE 1 — LAUNCH NOW (27 main areas, 121 micro areas)

**North West London** (region hub: `/areas/north-west-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Cricklewood | `/areas/cricklewood/` | NW2 | Brent / Barnet / Camden | ~0 | – | Cricklewood Broadway → `cricklewood-broadway`; Cricklewood Lane → `cricklewood-lane`; Cricklewood Green → `cricklewood-green`; Clitterhouse → `clitterhouse`; Railway Terraces → `railway-terraces`; Gladstone Park → `gladstone-park` |
| Dollis Hill | `/areas/dollis-hill/` | NW2 / NW10 | Brent | ~1 | – | Dudden Hill → `dudden-hill`; Dollis Hill Lane → `dollis-hill-lane`; Dollis Hill Estate → `dollis-hill-estate` |
| Childs Hill | `/areas/childs-hill/` | NW2 | Barnet | ~1 | – | Childs Hill Park → `childs-hill-park`; Hendon Way → `hendon-way`; West Heath ★ → `west-heath` |
| Brondesbury | `/areas/brondesbury/` | NW2 / NW6 | Brent | ~1 | – | Brondesbury Park ★ → `brondesbury-park`; Mapesbury ★ → `mapesbury`; Shoot Up Hill → `shoot-up-hill`; Christchurch Avenue → `christchurch-avenue` |
| Willesden Green | `/areas/willesden-green/` | NW10 / NW2 | Brent | ~1 | – | Walm Lane → `walm-lane`; Willesden High Road → `willesden-high-road`; Chapter Road → `chapter-road` |
| Brent Cross | `/areas/brent-cross/` | NW4 / NW2 | Barnet | ~1 | – | Brent Cross Town → `brent-cross-town`; Brent Cross West → `brent-cross-west`; Brent Terrace → `brent-terrace` |
| Kilburn | `/areas/kilburn/` | NW6 | Brent / Camden | ~1.5 | – | Kilburn High Road → `kilburn-high-road`; South Kilburn → `south-kilburn`; Kilburn Park → `kilburn-park`; Kilburn Priory → `kilburn-priory` |
| West Hampstead | `/areas/west-hampstead/` | NW6 | Camden | ~1.5 | – | West End Lane → `west-end-lane`; Fortune Green → `fortune-green`; Mill Lane → `mill-lane`; South Hampstead ★ → `south-hampstead`; Broadhurst Gardens → `broadhurst-gardens` |
| Golders Green | `/areas/golders-green/` | NW11 | Barnet | ~1.5 | – | Golders Green Road → `golders-green-road`; Temple Fortune → `temple-fortune`; Golders Hill ★ → `golders-hill`; Hoop Lane → `hoop-lane` |
| Neasden | `/areas/neasden/` | NW10 | Brent | ~1.5 | – | Neasden Lane → `neasden-lane`; Brentfield → `brentfield`; Roundwood → `roundwood`; Church End (Willesden) → `church-end` |
| Hendon | `/areas/hendon/` | NW4 / NW9 | Barnet | ~2 | – | Hendon Central → `hendon-central`; Brent Street → `brent-street`; Hendon Park → `hendon-park`; Hendon Village → `hendon-village`; Sentinel Square → `sentinel-square`; West Hendon → `west-hendon` |
| Hampstead | `/areas/hampstead/` | NW3 | Camden | ~2.5 | YES | Hampstead Village ★ → `hampstead-village`; Frognal ★ → `frognal`; Redington Road ★ → `redington-road`; Fitzjohn's Avenue ★ → `fitzjohns-avenue`; Downshire Hill ★ → `downshire-hill`; Vale of Health ★ → `vale-of-health`; Hampstead Heath ★ → `hampstead-heath`; South End Green ★ → `south-end-green` |
| Swiss Cottage | `/areas/swiss-cottage/` | NW3 | Camden | ~2.5 | – | Finchley Road → `finchley-road`; Eton Avenue ★ → `eton-avenue`; Adelaide Road → `adelaide-road`; Fairfax Road → `fairfax-road` |
| Belsize Park | `/areas/belsize-park/` | NW3 | Camden | ~3 | YES | Belsize Village ★ → `belsize-village`; Belsize Park Gardens ★ → `belsize-park-gardens`; Haverstock Hill ★ → `haverstock-hill`; England's Lane ★ → `englands-lane`; Chalk Farm ★ → `chalk-farm` |
| Primrose Hill | `/areas/primrose-hill/` | NW1 / NW3 | Camden | ~3.5 | YES | Regent's Park Road ★ → `regents-park-road`; Chalcot Square ★ → `chalcot-square`; Gloucester Avenue ★ → `gloucester-avenue` |
| St John's Wood | `/areas/st-johns-wood/` | NW8 | Westminster | ~3 | YES | Hamilton Terrace ★ → `hamilton-terrace`; Avenue Road ★ → `avenue-road`; St John's Wood High Street ★ → `st-johns-wood-high-street`; Abbey Road ★ → `abbey-road`; Grove End Road ★ → `grove-end-road`; Lord's ★ → `lords`; Lisson Grove ★ → `lisson-grove` |
| Queen's Park | `/areas/queens-park/` | NW6 / W10 | Brent / Westminster | ~2.5 | – | Salusbury Road → `salusbury-road`; Queen's Park Estate → `queens-park-estate`; Brondesbury Villas → `brondesbury-villas` |
| Kensal Rise | `/areas/kensal-rise/` | NW10 | Brent | ~2.5 | – | Chamberlayne Road → `chamberlayne-road`; College Road → `college-road` |
| Harlesden & Willesden | `/areas/harlesden-and-willesden/` | NW10 | Brent | ~2.5 | – | Harlesden → `harlesden`; Willesden → `willesden`; Craven Park → `craven-park`; Stonebridge → `stonebridge`; Roundwood Park → `roundwood-park`; Willesden Junction → `willesden-junction` |
| Colindale & Kingsbury | `/areas/colindale-and-kingsbury/` | NW9 | Barnet / Brent | ~3 | – | Colindale → `colindale`; Grahame Park → `grahame-park`; Beaufort Park → `beaufort-park`; The Hyde → `the-hyde`; Kingsbury → `kingsbury`; Roe Green → `roe-green` |
| Mill Hill | `/areas/mill-hill/` | NW7 | Barnet | ~4 | YES | Mill Hill Village ★ → `mill-hill-village`; The Ridgeway ★ → `the-ridgeway`; Highwood Hill ★ → `highwood-hill`; Mill Hill Broadway ★ → `mill-hill-broadway`; Mill Hill East ★ → `mill-hill-east`; Millbrook Park ★ → `millbrook-park` |
| Hampstead Garden Suburb | `/areas/hampstead-garden-suburb/` | NW11 / N2 | Barnet | ~3 | YES | Central Square ★ → `central-square`; The Bishops Avenue ★ → `the-bishops-avenue`; Winnington Road ★ → `winnington-road`; Lyttelton Road ★ → `lyttelton-road` |
| Finchley | `/areas/finchley/` | N3 / N2 | Barnet | ~3.5 | – | Finchley Central → `finchley-central`; Church End (Finchley) → `church-end`; Ballards Lane → `ballards-lane`; East Finchley → `east-finchley`; Woodside Park → `woodside-park` |
| Wembley Park | `/areas/wembley-park/` | HA9 | Brent | ~3 | – | Wembley Stadium area → `wembley-stadium-area`; Chalkhill → `chalkhill`; Forty Lane → `forty-lane` |

**West London** (region hub: `/areas/west-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Maida Vale | `/areas/maida-vale/` | W9 | Westminster | ~3 | YES | Little Venice ★ → `little-venice`; Warwick Avenue ★ → `warwick-avenue`; Randolph Avenue ★ → `randolph-avenue`; Clifton Gardens ★ → `clifton-gardens`; Elgin Avenue ★ → `elgin-avenue`; Maida Hill ★ → `maida-hill` |
| Paddington | `/areas/paddington/` | W2 | Westminster | ~4.5 | – | Paddington Basin → `paddington-basin`; Merchant Square → `merchant-square`; Sussex Gardens → `sussex-gardens`; Westbourne Green → `westbourne-green`; Connaught Village ★ → `connaught-village` |
| Kensal Green & North Kensington | `/areas/kensal-green-and-north-kensington/` | NW10 / W10 | Brent / Kensington & Chelsea | ~3 | – | Kensal Green → `kensal-green`; Kensal Town → `kensal-town`; Golborne Road → `golborne-road` |

### PHASE 2 — MONTHS 3 TO 6 (14 main areas, 61 micro areas)

**West London** (region hub: `/areas/west-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Notting Hill | `/areas/notting-hill/` | W11 | Kensington & Chelsea | ~5 | YES | Portobello Road ★ → `portobello-road`; Ladbroke Grove ★ → `ladbroke-grove`; Ladbroke Square ★ → `ladbroke-square`; Pembridge Square ★ → `pembridge-square`; Lansdowne Crescent ★ → `lansdowne-crescent`; Notting Hill Gate ★ → `notting-hill-gate`; Westbourne Grove ★ → `westbourne-grove` |
| Holland Park | `/areas/holland-park/` | W11 / W14 | Kensington & Chelsea | ~5.5 | YES | Holland Park Avenue ★ → `holland-park-avenue`; Addison Road ★ → `addison-road`; Holland Villas Road ★ → `holland-villas-road` |
| Bayswater | `/areas/bayswater/` | W2 | Westminster | ~5 | – | Queensway → `queensway`; Lancaster Gate ★ → `lancaster-gate`; Hyde Park Square ★ → `hyde-park-square`; Porchester Square → `porchester-square` |
| Acton | `/areas/acton/` | W3 | Ealing | ~5.5 | – | Acton Town → `acton-town`; North Acton → `north-acton`; East Acton → `east-acton`; South Acton → `south-acton`; Acton Central → `acton-central` |

**Central London** (region hub: `/areas/central-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Marylebone & Regent's Park | `/areas/marylebone-and-regents-park/` | W1 / NW1 | Westminster | ~4.5 | YES | Marylebone Village ★ → `marylebone-village`; Marylebone High Street ★ → `marylebone-high-street`; Harley Street ★ → `harley-street`; Dorset Square ★ → `dorset-square`; Regent's Park ★ → `regents-park`; Baker Street ★ → `baker-street` |
| Camden Town | `/areas/camden-town/` | NW1 | Camden | ~4 | – | Camden Market → `camden-market`; Mornington Crescent → `mornington-crescent`; Camden Square → `camden-square`; Chalk Farm Road → `chalk-farm-road` |
| Kentish Town | `/areas/kentish-town/` | NW5 | Camden | ~4 | – | Kentish Town Road → `kentish-town-road`; Tufnell Park → `tufnell-park`; Gospel Oak → `gospel-oak`; Dartmouth Park ★ → `dartmouth-park` |

**North London** (region hub: `/areas/north-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Highgate | `/areas/highgate/` | N6 | Haringey / Camden | ~4 | YES | Highgate Village ★ → `highgate-village`; Highgate West Hill ★ → `highgate-west-hill`; Holly Lodge Estate ★ → `holly-lodge-estate`; Cholmeley Park ★ → `cholmeley-park` |
| Muswell Hill | `/areas/muswell-hill/` | N10 | Haringey | ~5 | – | Muswell Hill Broadway → `muswell-hill-broadway`; Fortis Green → `fortis-green`; Alexandra Park → `alexandra-park`; Cranley Gardens → `cranley-gardens` |
| Totteridge & Whetstone | `/areas/totteridge-and-whetstone/` | N20 | Barnet | ~6 | YES | Totteridge Village ★ → `totteridge-village`; Totteridge Common ★ → `totteridge-common`; Whetstone ★ → `whetstone`; Oakleigh Park ★ → `oakleigh-park` |

**Outer North West London & Herts borders** (region hub: `/areas/outer-north-west-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Edgware & Burnt Oak | `/areas/edgware-and-burnt-oak/` | HA8 | Barnet / Harrow | ~4.5 | – | Edgware Broadway → `edgware-broadway`; Burnt Oak → `burnt-oak`; Canons Park ★ → `canons-park` |
| Stanmore | `/areas/stanmore/` | HA7 | Harrow | ~5.5 | YES | Stanmore Hill ★ → `stanmore-hill`; Stanmore Common ★ → `stanmore-common`; Old Church Lane ★ → `old-church-lane`; Belmont ★ → `belmont` |
| Harrow | `/areas/harrow/` | HA1 / HA2 / HA3 | Harrow | ~6 | – | Harrow-on-the-Hill ★ → `harrow-on-the-hill`; Harrow town centre → `harrow-town-centre`; West Harrow → `west-harrow`; Kenton → `kenton`; Harrow Weald → `harrow-weald` |
| Wembley | `/areas/wembley/` | HA0 | Brent | ~4 | – | Alperton → `alperton`; Sudbury → `sudbury`; North Wembley → `north-wembley`; Preston Road → `preston-road` |

### PHASE 3 — MONTH 6 ONWARDS (16 main areas, 63 micro areas)

**West London** (region hub: `/areas/west-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Kensington | `/areas/kensington/` | W8 | Kensington & Chelsea | ~5.5 | YES | Kensington High Street ★ → `kensington-high-street`; Kensington Church Street ★ → `kensington-church-street`; Phillimore Estate ★ → `phillimore-estate`; Campden Hill ★ → `campden-hill`; Kensington Palace Gardens ★ → `kensington-palace-gardens` |
| Shepherd's Bush & White City | `/areas/shepherds-bush-and-white-city/` | W12 | Hammersmith & Fulham | ~6 | – | White City → `white-city`; Wood Lane → `wood-lane`; Askew Road → `askew-road`; Brackenbury Village ★ → `brackenbury-village` |
| Hammersmith | `/areas/hammersmith/` | W6 | Hammersmith & Fulham | ~6.5 | – | Brook Green ★ → `brook-green`; Ravenscourt Park → `ravenscourt-park`; Hammersmith Broadway → `hammersmith-broadway` |
| Chiswick | `/areas/chiswick/` | W4 | Hounslow | ~7 | YES | Chiswick High Road ★ → `chiswick-high-road`; Bedford Park ★ → `bedford-park`; Strand on the Green ★ → `strand-on-the-green`; Grove Park (Chiswick) ★ → `grove-park`; Turnham Green ★ → `turnham-green` |
| Ealing | `/areas/ealing/` | W5 / W13 | Ealing | ~7 | – | Ealing Broadway → `ealing-broadway`; Ealing Common ★ → `ealing-common`; Hanger Hill ★ → `hanger-hill`; Pitshanger → `pitshanger`; West Ealing → `west-ealing` |

**Central London** (region hub: `/areas/central-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Mayfair | `/areas/mayfair/` | W1 | Westminster | ~5 | YES | Grosvenor Square ★ → `grosvenor-square`; Berkeley Square ★ → `berkeley-square`; Mount Street ★ → `mount-street`; Park Lane ★ → `park-lane` |
| Knightsbridge & Belgravia | `/areas/knightsbridge-and-belgravia/` | SW1 / SW7 | Westminster / K&C | ~6 | YES | Knightsbridge ★ → `knightsbridge`; Belgravia ★ → `belgravia`; Eaton Square ★ → `eaton-square`; Sloane Street ★ → `sloane-street` |
| Chelsea | `/areas/chelsea/` | SW3 / SW10 | Kensington & Chelsea | ~7 | YES | King's Road ★ → `kings-road`; Cheyne Walk ★ → `cheyne-walk`; Sloane Square ★ → `sloane-square` |
| Fitzrovia & Bloomsbury | `/areas/fitzrovia-and-bloomsbury/` | W1 / WC1 | Camden / Westminster | ~5 | – | Fitzrovia → `fitzrovia`; Bloomsbury → `bloomsbury`; Charlotte Street → `charlotte-street`; Russell Square → `russell-square` |

**North London** (region hub: `/areas/north-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Crouch End | `/areas/crouch-end/` | N8 | Haringey | ~6 | – | Crouch End Broadway → `crouch-end-broadway`; Hornsey → `hornsey`; Stroud Green → `stroud-green` |
| Barnet | `/areas/barnet/` | EN5 / EN4 | Barnet | ~7 | YES | High Barnet ★ → `high-barnet`; Arkley ★ → `arkley`; Hadley Wood ★ → `hadley-wood`; Monken Hadley ★ → `monken-hadley`; Underhill ★ → `underhill` |
| Southgate | `/areas/southgate/` | N14 / N21 | Enfield | ~8 | – | Southgate Green → `southgate-green`; Oakwood → `oakwood`; Cockfosters → `cockfosters`; Palmers Green → `palmers-green`; Winchmore Hill ★ → `winchmore-hill` |

**Outer North West London & Herts borders** (region hub: `/areas/outer-north-west-london/`)

| Main area | URL | Postcodes | Borough | Miles from NW2 | Premium | Micro areas → URL slug (★ = premium) |
|---|---|---|---|---|---|---|
| Pinner | `/areas/pinner/` | HA5 | Harrow | ~8 | YES | Pinner Village ★ → `pinner-village`; Pinner Hill ★ → `pinner-hill`; Hatch End ★ → `hatch-end`; Eastcote ★ → `eastcote` |
| Northwood | `/areas/northwood/` | HA6 | Hillingdon | ~10 | YES | Moor Park ★ → `moor-park`; Northwood Hills ★ → `northwood-hills`; Batchworth Heath ★ → `batchworth-heath` |
| Bushey & Elstree | `/areas/bushey-and-elstree/` | WD23 / WD6 | Hertsmere | ~8 | – | Bushey Heath ★ → `bushey-heath`; Bushey → `bushey`; Elstree → `elstree`; Borehamwood → `borehamwood` |
| Radlett | `/areas/radlett/` | WD7 | Hertsmere | ~10 | YES | Aldenham ★ → `aldenham`; Shenley ★ → `shenley` |


## CONTENT COLLECTIONS (`src/content.config.ts`)

Typed Zod-schema collections. Blog loads from `src/blog/` with `.md` and `.mdx` support; the rest from `src/content/`.

- **services** — title, slug, shortTitle, tier (`core | specialist | optional`), enabled, wave, metaTitle, metaDescription, heroHeading, heroSubheading, icon, summary, benefits[], process[{step,title,description}], whatsIncluded[], whatsNotIncluded[], priceFrom, priceUnit, priceNotes, faqs[{question,answer,display}], relatedServices[], premiumAngle (copy used on premium-area pages), heroImage, gallery[], order, featured
- **locations** (main areas) — name, slug, region, phase, premium, status (`published | draft`), boroughs[], postcodes[], distanceMiles, metaTitle, metaDescription, intro, localKnowledge, propertyTypes, parkingAndAccess (CPZ, parking suspensions, red routes, loading, lifts/porters), transportLinks, travelInfo, nearbyAreas[{name,slug}], servicesOffered[], localFaqs[{question,answer,display}], testimonial?, lat, lng, heroImage, heroImageAlt
- **microAreas** — name, slug, parent (main area slug), premium, status, postcodes[], metaTitle, metaDescription, intro, whatMovingHereInvolves (streets, property types, access), landmarks[], nearbyMicroAreas[], localFaqs[{question,answer,display}], lat?, lng?, heroImage?
- **regions** — slug, name, intro, body, faqs[]
- **serviceAreas** — service, location, uniqueIntro, localAngle, faqs[], caseStudy?, status
- **routes** (long-distance) — from, to, slug, enabled, intro, body, faqs[]
- **blog** — title, description, image, imageAlt, date, updatedDate?, author, category, tags[], draft, featured, faqs?[], relatedServices[], relatedLocations[] (reading time computed, not stored)
- **testimonials** — name, area, service, rating, date, body, source, verified — only `verified: true` entries are eligible for display and review schema.

`src/blog/` ships containing only `.gitkeep`. No demo posts anywhere in the repo.

Content entries must match the registry in `src/data/areas.ts` (slug, parent, phase, premium). The registry drives structure; content files drive copy.


## PROGRAMMATIC PAGE QUALITY GUARDRAIL

Location and micro-area pages must not be a template with the area name swapped in. Each entry needs genuinely unique content referencing real North West London specifics, for example:

- Controlled parking zones and parking suspensions/dispensations from Camden, Westminster, Brent, Barnet, Kensington & Chelsea, Hammersmith & Fulham, Ealing, Harrow and Haringey councils
- Red routes and loading restrictions (A5 Edgware Road / Kilburn High Road / Cricklewood Broadway, Finchley Road)
- North Circular (A406), M1 Junction 1 / Staples Corner, A41 Hendon Way, A1, A40
- ULEZ (London-wide) and the Congestion Charge for central London moves
- Mansion blocks with porters, lift booking and lift protection (Maida Vale, St John's Wood, Marylebone)
- Victorian and Edwardian conversions with steep, narrow stairs (Kilburn, West Hampstead, Kensal Rise, Queen's Park)
- Large detached homes, long drives and gated roads (Hampstead Garden Suburb, The Bishops Avenue, Totteridge, Mill Hill, Stanmore)
- Hilly, narrow lanes and conservation areas (Hampstead Village, Highgate Village, Primrose Hill)
- New-build towers and concierge rules (Brent Cross Town, Colindale, Wembley Park, Paddington Basin)
- Tube/Overground/Thameslink stations, schools, parks and landmarks

Minimums:

- **Main area page:** 120+ word intro, 2–4 paragraphs of localKnowledge, postcodes served, parking & access notes, at least 4 area-specific FAQs.
- **Micro-area page:** 100+ word intro, a distinct "what moving here involves" section, at least 3 micro-area-specific FAQs, links to parent and 4–6 sibling micro areas.
- **Service × area page:** a uniqueIntro and localAngle that could not be pasted onto another area.

Implement a build-time check in `scripts/validate-content.ts`, wired into `npm run build`, that fails the build if:

- any main-area intro is under 100 words, or any main area has fewer than 4 FAQs
- any micro-area intro is under 80 words, or any micro area has fewer than 3 FAQs
- any two location, micro-area or service × area bodies exceed 60% text similarity
- a content entry does not match a registry entry (slug, parent, phase)
- a published micro area has an unpublished parent, or a published serviceAreas entry points to an unpublished location
- a premium area page omits the premium services block


## EMPTY-STATE & BUILD RESILIENCE

- Every `getCollection()` call must survive an empty array without crashing the static build.
- Featured posts on homepage: zero posts → render a designed fallback card ("Our moving guides are on the way. In the meantime, call us on <<PHONE>> for straight-talking advice.") with a CTA. Never a blank section.
- Blog listing pagination: handle a zero-page state with an onboarding placeholder; set `noindex` while the collection is empty.
- Reviews: zero verified testimonials → hide the section entirely and omit AggregateRating from the schema graph rather than emitting a zero-value rating. Hero trust strip shows no stars when there are no verified reviews.
- Stats ("Why choose Pearl Removals"): render only stats present in `site.ts` `stats[]`; empty → section shows the 4 trust promises instead.
- Areas: `/areas/`, region hubs and nav must render correctly with only the published phase; a region with no published areas is not routed.
- Micro-area grid on a main area page: zero published micro areas → section hidden.
- Related posts / related services / related areas: filter self-references; fall back to top-level service links when the resolved array is empty.
- Sitemap, RSS, HTML sitemap, llms.txt: all must build cleanly with an empty blog collection and with only Phase 1 content.
- FAQ items with `display: false` are hidden from the rendered accordion and excluded from FAQPage schema.


## UK LOCALISATION, LEGAL & COMPLIANCE

### Language and formatting
- UK English throughout: optimise, categorise, colour, enquiry, licence (noun), organised, specialised, programme, cancelled, storey, kerb, tonne. Use "enquiry" not "inquiry", "quote" not "estimate", "postcode" not "zip".
- Dates: DD MMMM YYYY (10 June 2026) via a single `theme/utils/formatDate.ts` using `Intl.DateTimeFormat('en-GB')`. Never hand-rolled string building. Wrap in `<time datetime="">`.
- Currency: `Intl.NumberFormat('en-GB', {style:'currency', currency:'GBP'})`.
- Phone displayed UK-format, `href="tel:<<PHONE_E164>>"`.
- Volume in cubic feet and cubic metres; distance in miles.

### UK GDPR & ICO consent
Google Consent Mode v2 must be the very first script in `<head>`, before any analytics, tag manager or advertising script:

```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'granted',
    'security_storage': 'granted',
    'wait_for_update': 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);
</script>
```

Cookie consent banner (CookieYes or Cookiebot) loaded immediately after. Explicit opt-in only — reject as easy as accept, no pre-ticked boxes, no cookie wall. Analytics stays blocked until consent. A "Cookie Preferences" link that reopens the banner sits in the footer on every page.

### Legal pages (write full copy, not outlines)
- **Privacy Policy** — names the UK GDPR and Data Protection Act 2018; identifies `<<LEGAL_NAME>>` as Data Controller with `<<REG_ADDRESS>>` and `<<EMAIL>>`; covers quote-form data collected (name, phone, email, origin and destination addresses, inventory, move date), lawful basis per purpose (contract performance for quotes and jobs, consent for marketing, legitimate interests for security), retention (enquiries 24 months, completed job records 6 years for HMRC and insurance), processors used, international transfers, all data subject rights, and the right to complain to the ICO with a link to ico.org.uk.
- **Cookie Policy** — table of every cookie: name, purpose, provider, type, duration.
- **Terms & Conditions** — website use, IP, liability, governed by the laws of England and Wales.
- **Terms of Business** — the removals contract: quotation validity, deposits and payment terms, cancellation and postponement charges, items not accepted (hazardous goods, plants, perishables, cash, jewellery), the customer's duty to declare items of special value (fine art, antiques, pianos), liability limits and goods-in-transit cover level, delays and waiting time, access and parking responsibility (including who arranges CPZ parking suspensions and who pays any council charges), lift and porter bookings for blocks, damage claim window and procedure, storage terms. Plain English, consistent with the Consumer Rights Act 2015 — no clauses excluding liability for negligence.
- **Complaints Procedure** — response timescales and escalation route.
- **Consumer Contracts Regulations 2013** — state the 14-day cancellation right and how it interacts with a start date requested inside that period.

### Advertising standards
- Any "from £X" price must be genuinely achievable, with qualifying conditions immediately adjacent — not in a footnote.
- Trade-body logos (BAR, NGRS, Which? Trusted Traders, Checkatrade, Trustpilot) render only from a data-driven `accreditations` array in config, empty by default.


## GLOBAL LAYOUT, SEO META & SCHEMA

### `theme/layouts/BaseLayout.astro`
Wraps: consent init → global stylesheet → skip link → Header → centred responsive `<main>` landmark → Footer → sticky mobile action bar → deferred script loader. Mounts Organization and WebSite schema on every page.

### Required meta (all pages)
title · meta description · `link rel="canonical"` (absolute WWW URL with trailing slash, derived from `Astro.site` + `Astro.url.pathname`, never hardcoded) · robots · googlebot · full favicon set + `site.webmanifest` · theme-color for both colour schemes.

### Verification meta
Rendered conditionally from config values: Google site verification · Bing verification · Yandex verification.

### Open Graph (required)
og:title · og:description · og:url · og:site_name · og:locale = en_GB · og:image · og:image:width · og:image:height · og:image:alt · og:type (website / article).

### Twitter (required)
twitter:title · twitter:description · twitter:image · twitter:card = summary_large_image.

Generate OG images at build time with astro-og-canvas or Satori — branded pearl/navy template with page title, logo and trust badges, 1200×630.

### JSON-LD — `theme/components/SchemaOrg.astro`
One centralised component taking a `type` prop, emitting a single `@graph` per page with cross-referenced `@id`s. Strip null and undefined fields before serialising.

**Global (base layout):**
- **MovingCompany** (LocalBusiness subtype), `@id: https://www.pearlremovals.co.uk/#organisation` — name (Pearl Removals), legalName (`<<LEGAL_NAME>>`), url, logo (ImageObject), image, description, telephone, email, address (PostalAddress — Cricklewood NW2 trading address), geo (`<<LAT>>`/`<<LNG>>`), priceRange: "££–£££", openingHoursSpecification, paymentAccepted, currenciesAccepted: GBP, vatID, sameAs from social links.
- **areaServed** — array of `Place` objects for every **published** main area (with postalCode districts), `AdministrativeArea` objects for the London boroughs covered, plus a `GeoCircle` centred on Cricklewood (radius from config: 8,000 m at Phase 1, widened per phase).
- **hasOfferCatalog** — OfferCatalog of every enabled service as Offer → Service, with areaServed and priceSpecification where a genuine from-price exists.
- **WebSite**, `@id: https://www.pearlremovals.co.uk/#website`, with publisher referencing the organisation. Include `potentialAction` → SearchAction only if site search actually exists.
- **SiteNavigationElement** graph built from the header navigation config.

**Conditional by page type:**
- **Service** on service pages — serviceType, provider (`@id` ref), areaServed, hasOfferCatalog.
- **LocalBusiness + Service** on main area pages, areaServed narrowed to that area, its postcode districts and its published micro areas.
- **Service + Place** on micro-area pages — Place with `containedInPlace` → parent area.
- **Service** on service × area pages — serviceType + areaServed = that area.
- **CollectionPage + ItemList** on `/areas/` and region hubs.
- **AboutPage** on `/about-us/`, **ContactPage** on `/contact-us/`.
- **BreadcrumbList** on every page except the homepage, matching the visible trail exactly (e.g. Home › Areas › North West London › Hampstead › Frognal).
- **FAQPage** wherever faqs[] exists — questions must match the visible accordion text verbatim, excluding `display: false` items.
- **Blog + ItemList** (with position on each item) on the blog listing.
- **BlogPosting/Article** on posts — headline (≤110 chars), description, image (1200×630+), datePublished, dateModified, author (Person, referencing `/about-us/#author`), publisher (`@id` ref), mainEntityOfPage, wordCount, articleSection.
- **HowTo** on genuinely sequential process posts.
- **Review / AggregateRating** — only from `verified: true` testimonials, only on pages where those reviews are visible.

Validate every template against the Rich Results Test before finishing.


## HEADER

- Floating frosted-glass pill nav (per UI DESIGN BRIEF), sticky, with a glass background that solidifies on scroll.
- Left: Pearl Removals logo (pearl/circle icon combined with a small house outline, navy wordmark), linked to `/`.
- Centre nav, driven by `src/data/navigation.json`: Home · Services · Areas We Cover · Pricing · Reviews · Contact.
  - **Services** mega-menu: two groups — Core services (6) and Specialist services (6), with icons. Optional services appear only when enabled.
  - **Areas We Cover** mega-menu: one column per published region, listing published main areas (premium areas first within each column is NOT required — keep alphabetical by distance band), plus "View all areas" → `/areas/`. Built from `getPublishedAreas()`.
- Right: click-to-call number with phone icon (visible at every breakpoint) and a solid royal-blue "Get a Free Quote" button.
- Dark-mode toggle.
- Mobile menu with overlay/panel behaviour and client-side toggle logic:
  - open and close buttons with icon swap on toggle
  - `aria-expanded` updated on the trigger
  - `aria-hidden` updated on the panel
  - body scroll lock while open
  - focus trap inside the panel, focus returned to the trigger on close
  - closes on close-button click, on Escape, and when any nav link is clicked


## FOOTER

- Deep navy semi-transparent glass footer (per UI DESIGN BRIEF).
- Logo and site title; short company description paragraph.
- Footer nav columns driven by config JSON: Services, Areas (Phase-published key areas + "All areas"), Company, Legal.
- Social icon block rendered only when URLs exist in config. Supported: Facebook, X/Twitter, LinkedIn, Instagram, Pinterest, TikTok. Inline SVG, `aria-label` each.
- NAP block inside `<address>` — trading name, Cricklewood NW2 trading address, registered address, phone, email, company number, VAT number.
- Opening hours (`<<OPENING_HOURS>>`).
- Insurance statement: goods in transit `<<GIT_COVER>>`, public liability `<<PL_COVER>>`.
- Cookie Preferences link (reopens the CMP) on every page.
- Dynamic current-year copyright: "© {year} Pearl Removals. All rights reserved."
- No language switcher — this site is single-language.


## HOMEPAGE

Structure, in order (visual treatment per UI DESIGN BRIEF):

1. **Hero** — split layout. Left glass card: "North West London" location pill + "Local | Reliable | Professional"; eyebrow "MOVING HOME?"; single `<h1>` **"House Removals in North West London"** with "North West London" in royal blue (primary keyword); subtext "From the first box to the final key, Pearl Removals makes your move smooth, safe and stress-free."; dual CTA (Get a Free Quote → / Call Us Today); 4 feature tiles (Local & Long Distance, Safe & Secure Handling, Fully Insured Removals, Experienced Team); glass trust strip (stars only when verified reviews exist) + "Trusted by homes across North West London" + fine-line London skyline SVG. Right: LCP-optimised hero photo (van + team). No carousel.
2. **Trust strip** — Fully Insured · Transparent Pricing · No Hidden Fees · Free No-Obligation Survey · 7 Days a Week (only confirmed claims).
3. **Intro paragraph** — who Pearl Removals is (Cricklewood-based), where it covers.
4. **Quote tool area** — inline short quote form (name, phone, postcode) or the calculator entry point, above the fold on desktop.
5. **Services grid** — "Our Removal Services": 6 core service glass cards (icon, title, one-line description, from-price where genuine, hover lift) + a row of 6 specialist service cards.
6. **Why choose Pearl Removals** — glass panel with up to 4 stat blocks, rendered from `site.ts` `stats[]` only (empty by default; fallback to 4 trust promises).
7. **How it works** — reusable section component with slot support, 4 numbered steps with a connecting line: Request a Quote · Free Survey · We Pack & Move · Settle Into Your New Home.
8. **Areas we cover** — glass card with stylised North West London map (click-to-load, JS-free fallback) and pill tags of published Phase 1 areas (Cricklewood, Kilburn, West Hampstead, Hampstead, Golders Green, Hendon, Brent Cross, Mill Hill, St John's Wood, Maida Vale…), link to `/areas/` and `/areas/north-west-london/`.
9. **Pricing / comparison table section** — reusable table component showing rate bands with qualifying conditions.
10. **Reviews** — verified testimonials (5 gold stars, quote, first name + area), hides itself when empty.
11. **FAQ** — collapsible accordion.
12. **Featured posts** — 3 latest, with empty-state fallback.
13. **Quote form section** — large centred glass card "Get Your Free Moving Quote": Full Name, Phone, Email, Moving From (postcode), Moving To (postcode), Moving Date, Property Size (dropdown); full-width royal-blue "Get My Free Quote" button. Posts into the same handler as `/get-a-quote/`.
14. **CTA band.**

Homepage schema: WebSite + FAQPage (when FAQs exist) + the global organisation graph.


## SERVICE, AREA, MICRO-AREA & HUB PAGE TEMPLATES

- **Service page:** hero → trust strip → breadcrumbs → intro → what's included / not included → process steps → pricing guidance → why choose us → premium services callout (packing, fine art, piano, storage, white-glove) → gallery → top area links for this service (published areas + its service × area pages) → related services → FAQs → CTA band → inline quote form.
- **Main area page (`/areas/[area]/`):** hero (area-specific image) → trust strip → breadcrumbs → intro → local knowledge → property types & access (parking/CPZ, stairs, lifts, porters) → **micro areas we cover** grid (links to every published micro-area page) → postcodes covered → services offered in this area (link to service × area pages where they exist) → premium services block (premium areas only) → travel/access notes → local testimonial → nearby areas (5–8 internal links) → local FAQs → CTA band → inline quote form.
- **Micro-area page (`/areas/[area]/[micro]/`):** compact hero → breadcrumbs (Home › Areas › Region › Area › Micro) → intro → what moving here involves (streets, property types, access) → services (with premium emphasis where premium) → link up to parent area + 4–6 sibling micro areas → micro FAQs → CTA band → inline quote form.
- **Region hub (`/areas/[region]/`):** hero → intro → published main areas in this region as cards (premium badge) → region-level FAQs → CTA. `/areas/north-west-london/` is the flagship "Removals North West London" page (900–1,200 words).
- **Areas hub (`/areas/`):** map + all published areas grouped by region, with micro-area counts.
- **Service × area page (`/removals/[service]/[area]/`):** hero → breadcrumbs (Home › Removals › Service › Area) → uniqueIntro → localAngle → what's included → pricing guidance → case study (only if real) → FAQs → links to the service page, the area page and 3 neighbouring areas → CTA → inline quote form.
- **Premium-area variant:** any page whose area is premium shows the PremiumServicesCallout and uses premium tone (careful handling, insurance, packing, storage, porter liaison) — never price-led "cheap" language.


## CONVERSION SYSTEM

### Multi-step quote form — `/get-a-quote/`
Progressive, one question group per step, progress indicator, state preserved in `sessionStorage`, and works without JS as a single long form (progressive enhancement).

1. Move type (house / flat / office / single item / storage)
2. Property size (studio → 5+ bed, or room count)
3. Moving from — postcode, floor level, lift, parking difficulty (CPZ / red route / private drive)
4. Moving to — postcode, floor level, lift, parking difficulty
5. Preferred date + flexibility
6. Extras — packing, dismantling, storage, piano, fine art & antiques, clearance
7. Contact details + preferred contact method + consent

Consent: two separate unticked checkboxes — one required for processing the enquiry (linking the Privacy Policy), one optional for marketing. Never bundled. Anti-spam: honeypot field + time-to-submit check + Cloudflare Turnstile. No reCAPTCHA v2 checkbox. Validation: inline and accessible — UK postcode regex, UK phone regex, error text linked with `aria-describedby`, `aria-invalid` on failed fields. Pre-fill the "moving from" area when the form is opened from an area page.

### Contact form component — `theme/components/ContactForm.astro`
Reused on `/contact-us/` and available anywhere. Fields: name, email, message. Submit button, status text element, and a fallback direct `mailto:` link below the form.

Async POST to the form endpoint (Web3Forms-compatible flow). Handle all four states with distinct, human-readable status text: sending, success, API error, network error. Disable the submit button while sending; re-enable on failure. Access key read from an environment variable.

### Both forms on success
Redirect to `/thank-you/` (noindex, follow) and fire the conversion event.

### Moving cost calculator — `/moving-cost-calculator/`
Client-side island. Property size → estimated volume (cu ft) → base crew and van hours, plus a postcode distance band from Cricklewood NW2, plus access factors (stairs, no lift, CPZ suspension needed), plus extras. Outputs a clearly labelled estimated range, never a fixed price, with prominent wording that a firm quote requires a free survey. Ends with a CTA that pre-fills the quote form. This is the site's primary link-earning asset — make it genuinely good.

### Persistent capture
- Sticky mobile action bar below 768px: Call · WhatsApp · Get Quote. `env(safe-area-inset-bottom)` aware, never overlapping the footer.
- WhatsApp deep link `https://wa.me/<<WHATSAPP_E164>>?text=...` pre-filled with page context (e.g. "Hi, I'm moving from Hampstead...").
- Callback widget — "We'll ring you back within 30 minutes, 8am–8pm" (only if the client commits to it).
- Downloadable "North West London Moving Day Checklist" PDF behind a single email field.
- Exit-intent offer: desktop only, once per session, easily dismissible, never on mobile.


## BLOG SYSTEM

### Listing (`/blog/[...page].astro`)
- Sorted newest → oldest by date.
- Pagination page size = 12.
- Cards: featured image (16:9, fixed dimensions), category badge, DD MMMM YYYY date, read time, title, description, read CTA.
- Results meta text — "Showing 1–12 of 47 articles".
- Pagination UI — previous, next, numbered pages, with proper disabled/`aria-disabled` states when unavailable and `rel="prev"`/`rel="next"`.
- Schema: Blog + ItemList with position on each item.
- Graceful empty state.

### Single post (`/blog/[slug].astro`)
- Route generated from post id/slug via `getStaticPaths`.
- Renders MDX body with styled prose components.
- Hero area: title, description, featured image, author, date, read time.
- Sticky desktop TOC with scroll-spy; collapsible on mobile.
- Social share: X, Facebook, WhatsApp, Email, Copy Link.
- Related services, related areas, related posts.
- FAQ accordion where frontmatter provides FAQs.
- Canonical URL handling.
- Missing post resolves to 404 behaviour, never a blank render or a build crash.
- Schema: Article + BreadcrumbList + FAQPage where applicable.

Category archives at `/blog/category/[category]/`, generated from the categories actually in use.


## SITEMAP, ROBOTS & LLMS

- **HTML sitemap** (`/sitemap/`) — generates static page links by scanning the page files, excluding dynamic routes and `/404`. Lists: static pages, all service pages, region hubs, all published main areas with their published micro areas nested beneath, all service × area pages, all blog posts, all blog pagination pages.
- **`/robots.txt`** (Astro route, built from config): allow all user agents on `/`; disallow `/404/`, `/thank-you/`, `/*?utm_*`; reference the absolute `https://www.pearlremovals.co.uk/sitemap-index.xml`.
- **`/llms.txt`** (Astro route): site URL; business description and service area (published regions and areas); services; contact details; sitemap URL; policy statement on AI usage of the content; allow directive.
- **XML sitemap** — `@astrojs/sitemap` with a filter excluding `/404/`, `/thank-you/`, `/llms.txt` and any unpublished/draft/disabled page, plus changefreq and priority: homepage 1.0; services, region hubs and Phase 1 main areas 0.9; other main areas 0.8; service × area 0.8; micro areas 0.7; blog 0.6.
- **RSS** at `/rss.xml`.


## CONFIG & DATA

JSON/TS-driven configuration — nothing hardcoded in templates.

- `src/data/site.ts` — site URL, business name, legal name, company number, VAT, phone, phone E.164, WhatsApp, email, trading address (Cricklewood NW2), registered address, geo, opening hours, insurance cover levels, price range, `publishPhase`, `geoRadiusByPhase`, `stats: []` (empty by default), `claims[]` (only confirmed ones), `accreditations: []` (empty by default).
- `src/data/areas.ts` — the full AREA REGISTRY (all phases, regions, main areas, micro areas, premium flags, postcodes, boroughs, distances).
- `src/data/services.ts` — service registry (slug, title, tier, wave, enabled).
- `src/data/serviceAreas.ts` — the exact service × area list.
- `src/data/social.json` — social URLs; empty strings suppress the icon.
- `src/data/navigation.json` — header nav, mega-menu groups, footer columns (area lists resolved through `getPublishedAreas()` at build).
- `src/data/verification.json` — Google, Bing, Yandex codes; empty values suppress the meta tag.
- `src/data/faqs.json` — global FAQ set with display flags.
- Utilities in `theme/utils/`: `formatDate.ts`, `formatCurrency.ts`, `readingTime.ts`, `slugify.ts`, `absoluteUrl.ts`, `postcodeDistance.ts` (distance band from NW2), `published.ts` (phase gating helpers).


## COMPONENTS TO BUILD

```
theme/layouts/
  BaseLayout.astro        Head, consent, header, main landmark, footer, global schema
  ServiceLayout.astro
  AreaLayout.astro        Main area pages
  MicroAreaLayout.astro   Micro-area pages
  RegionLayout.astro      Region hubs
  ServiceAreaLayout.astro Service × area pages
  BlogLayout.astro
  LegalLayout.astro       Narrow measure, last-updated date, TOC

theme/components/
  Header.astro            Floating glass pill nav, mega-menus, call CTA, dark toggle, mobile panel
  Footer.astro            Navy glass, nav columns, conditional socials, NAP, hours, cookie prefs, dynamic year
  Hero.astro              Variant-driven: home / service / area / micro / region / blog / legal
  TrustStrip.astro
  FeatureTiles.astro      4 hero feature tiles
  ServiceCard.astro
  ServiceGrid.astro       Handles empty collection; core + specialist groups
  LocationCard.astro
  MicroAreaGrid.astro     Published micro areas for a main area; hides when empty
  RegionCard.astro
  AreaCoverageMap.astro   Click-to-load static map + linked area list/pill tags, JS-free fallback
  HowItWorks.astro        Reusable section with slot support
  StatsPanel.astro        Renders config stats only; fallback to trust promises
  ComparisonTable.astro   Reusable table/chart section
  PricingTable.astro      Rate bands with qualifying conditions
  PremiumServicesCallout.astro  Packing, fine art, piano, storage, white-glove — premium areas
  QuoteFormInline.astro   3-field short form
  QuoteFormFull.astro     Multi-step island
  QuoteFormSection.astro  Homepage glass quote card (7 fields)
  ContactForm.astro       Name/email/message, async POST, 4 status states, mailto fallback
  CostCalculator.astro    Estimator island
  Testimonials.astro      Verified only, self-hiding when empty
  ReviewBadges.astro      Data-driven, empty by default
  FAQ.astro               Accessible accordion, respects display:false, feeds schema
  Breadcrumbs.astro       Visible trail + schema data
  TableOfContents.astro   Sticky desktop + collapsible mobile, scroll-spy
  BlogCard.astro
  BlogGrid.astro
  Pagination.astro        Prev/next/numbered/disabled + results meta
  FeaturedPosts.astro     3 latest with fallback box
  RelatedLinks.astro      Data-driven internal links
  SocialShare.astro
  CTABand.astro
  StickyMobileBar.astro
  SEOHead.astro           Title, description, canonical, robots, OG, Twitter, verification, favicons
  SchemaOrg.astro         Centralised JSON-LD @graph builder
  ConsentInit.astro       Consent Mode v2 defaults + CMP loader
  LazyScripts.astro       Interaction-gated third-party loader
  Icon.astro              Inline SVG sprite
  SkylineSvg.astro        Fine-line London skyline illustration
```


## TECHNICAL ON-PAGE SEO

- **Redirects**, single-hop 301: non-WWW → WWW, HTTP → HTTPS, non-trailing-slash → trailing-slash. Provide `vercel.json`.
- **Titles** ≤60 chars, pattern `Primary Keyword | Modifier | Pearl Removals` — e.g. `House Removals Hampstead NW3 | Pearl Removals`, `Removals in Frognal, Hampstead | Pearl Removals`, `Man and Van Kilburn NW6 | Pearl Removals`.
- **Meta descriptions** 140–160 chars with area, postcode, differentiator and CTA including the phone number.
- **Primary keywords:** homepage "removals North West London" / "house removals North West London"; main areas "removals [area]", "house removals [area]", "removals [postcode]"; micro areas "removals [micro area]", "movers [micro area] [area]"; service × area "[service] [area]".
- **Headings:** exactly one `<h1>` per page containing the primary keyword naturally; logical `<h2>`/`<h3>` nesting with no skipped levels; never chosen for styling reasons.
- **Semantic HTML5:** `<header>`, `<nav>`, one `<main>` landmark, `<article>`, `<aside>`, `<section>` with accessible names, `<footer>`, `<address>`, `<time datetime="">`.
- **Images:** Astro `<Image />`/`<Picture />`, AVIF + WebP with fallback, explicit width/height everywhere, `loading="lazy" decoding="async"` except the LCP hero (`loading="eager"`, `fetchpriority="high"`, preloaded). Descriptive alt text; filenames like `house-removals-hampstead-van-loading.avif`.
- **Internal linking** (driven by `RelatedLinks.astro` from collection/registry data, not hardcoded anchors; descriptive anchor text — never bare "click here"):
  - every main area page links up to its region hub and services, down to all its published micro areas, and across to 5–8 neighbouring areas;
  - every micro-area page links up to its parent area and across to 4–6 sibling micro areas;
  - every service page links down to its top areas and its service × area pages;
  - every service × area page links to its service page, its area page and 3 neighbouring areas;
  - every post links to two services and one area.
- **Breadcrumbs** visible on every page below the header, matching the schema exactly.


## PERFORMANCE — TARGET 95+ MOBILE

- **Zero client JS by default.** Islands only for: mobile menu, dark toggle, accordions, quote form, calculator, TOC scroll-spy, contact form. `client:visible` or `client:idle` — never `client:load` unless above the fold.
- **LCP < 2.0s** — preload hero image and primary font, inline critical CSS, no hero carousel, no video background.
- **CLS = 0** — fixed dimensions on all media, reserved space for the cookie banner and sticky bar, metric-matched font fallback.
- **INP < 200ms** — debounce calculator inputs, no long tasks, defer all third-party scripts.
- **Glass performance** — limit live `backdrop-filter` to small elements (nav pill, cards, quote widget); pre-blurred background image for the page backdrop.
- **Third-party discipline** — GA4, chat, review widgets load only after first interaction (mouseover, touchstart, keydown, scroll) or a 3-second fallback timer. Maps are click-to-load static images, never eager iframes.
- Self-host everything possible. No jQuery, no icon fonts — inline SVG only.
- Lighthouse CI config asserting mobile Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100.
- Security headers in `vercel.json`: CSP (allowing consent and analytics hosts), HSTS, X-Content-Type-Options, `Referrer-Policy: strict-origin-when-cross-origin`, Permissions-Policy.
- axe-core audit passing with no serious or critical violations.


## CONTENT TO WRITE — RULES

Complete publishable UK-English copy. Tone: confident, plain-speaking, warm London professional; premium without being stuffy; no corporate waffle, no exclamation marks, no "nestled in the heart of". Address the real anxieties — cost transparency, damage, timekeeping, parking suspensions, stairs/lifts/porters, ULEZ and congestion charge questions, chain delays, completion-day timing.

Word counts:

- Homepage 900–1,200
- Service pages 1,000–1,500
- `/areas/north-west-london/` flagship hub 900–1,200; other region hubs 600–900
- Main area pages: Phase 1 premium and client-requested areas 800–1,200; other main areas 600–900
- Micro-area pages 400–600
- Service × area pages 700–900
- Long-distance route pages 600–900

Write content in batches of about 10 entries, then run `npm run validate` before the next batch. Fix any similarity failure by rewriting, never by padding.


## DELIVERY FORMAT (STRICT)

Respond in exactly this structure:

1. **Feature Mapping** — map every mandatory feature in scope to concrete file(s)/component(s), concise bullets with file paths.
2. **File Tree** — full created/updated tree.
3. **Code** — complete code for every created/updated file, with per-file headers in the form `### FILE: src/pages/contact-us.astro`.
4. **Validation Checklist** — every requirement category with Pass/Fail and a short note on how each pass condition is satisfied.
5. **Run + Verify Commands** — install, dev, build, astro check, content validation script, Lighthouse CI, axe.
6. **Assumptions** — everything inferred due to missing inputs.


## FINAL ACCEPTANCE GATE — SELF-CHECK BEFORE RESPONDING

- [ ] Every mandatory route in scope exists and resolves with a trailing slash
- [ ] `npm run build` succeeds from clean checkout with an empty blog collection
- [ ] `astro check` passes with zero TypeScript errors
- [ ] Content validation script passes; no two location / micro-area / service × area pages are near-duplicates
- [ ] Phase gating works: only phase ≤ `publishPhase` + `status: published` pages are routed, linked, in nav, sitemaps, llms.txt and schema
- [ ] `<html lang="en-GB" dir="ltr">` — no locale routing, no translation files, no language switcher anywhere
- [ ] Header mobile menu: toggle, icon swap, aria-expanded, aria-hidden, scroll lock, focus trap, Escape, close-on-link-click all working
- [ ] Footer social block renders only when URLs exist; cookie preferences link present on every page
- [ ] Consent Mode v2 fires before any analytics or advertising script
- [ ] Blog listing paginates at 12 per page with results meta and correct disabled states
- [ ] Blog posts render MDX; a missing slug resolves to 404
- [ ] Contact form handles sending / success / API error / network error, with a mailto fallback
- [ ] Quote form works with JavaScript disabled
- [ ] All required JSON-LD present, valid, single @graph, no fabricated reviews, ratings or stats
- [ ] Canonicals absolute, WWW, trailing slash, generated not hardcoded
- [ ] HTML sitemap includes pages, services, region hubs, areas, micro areas, service × area pages, posts and pagination
- [ ] `/robots.txt` and `/llms.txt` return valid text with absolute URLs
- [ ] Every UK legal page written in full, no outlines
- [ ] All dates render as DD MMMM YYYY; all copy in UK English
- [ ] Zero CLS, LCP-optimised hero, third-party scripts interaction-gated
- [ ] Glass panels meet 4.5:1 contrast and have a solid fallback
- [ ] No TODO text, no lorem ipsum, no placeholder images, no invented accreditations
- [ ] Build passes with zero area content; `/areas/` empty state renders; no region hub or area route is generated
- [ ] Full AREA REGISTRY encoded in `src/data/areas.ts` with all phases and micro areas
- [ ] 6 core services written in full; specialist services registered with `enabled: false`

Fix any failing item before responding.

## EXECUTION START

MOCKUP_HTML:
{{MOCKUP_HTML}}

MOCKUP_CSS:
{{MOCKUP_CSS}}

BRAND_PROFILE:
{{BRAND_PROFILE}}

CONTENT_PROFILE:
{{CONTENT_PROFILE}}


Now implement Part 1 with complete feature parity and personalised mockup styling, following the UI DESIGN BRIEF below.

## UI DESIGN BRIEF — PEARL REMOVALS (design source of truth)

Design a static, high-fidelity desktop landing page (1440px wide) for "Pearl Removals", a premium house removals company based in North West London. Style: clean, modern glassmorphism. No animations, no motion effects, no video. Just a polished static UI to present to a client. (On the live site, the build rules above add only subtle, reduced-motion-safe hover lifts.)

**OVERALL STYLE**
- Glassmorphism: frosted translucent panels (white at 15–25% opacity), strong background blur, thin 1px white borders at 40% opacity, soft rounded corners (24–32px), subtle soft shadows.
- Background: a bright, sunny, slightly blurred photo of a leafy North West London residential street with red-brick Victorian/Edwardian semi-detached houses, green trees and soft blue sky. A distant London skyline is faintly visible.
- Colour palette: pearl white (#F8F7F4), soft iridescent pearl gradient accents (very pale lilac → ice blue → blush), deep navy (#0F1E3D) for headings, royal blue (#1F5BFF) for primary buttons and highlights, warm gold (#F5B82E) for star ratings only.
- Typography: modern geometric sans-serif (e.g. Plus Jakarta Sans or Manrope). Bold large headings, light-weight body text, letter-spaced uppercase eyebrow labels.
- Plenty of white space, calm and premium, trustworthy feel.

**NAVIGATION BAR**
- Floating frosted-glass pill nav bar at the top.
- Left: "Pearl Removals" logo: a simple pearl/circle icon combined with a small house outline, navy wordmark.
- Centre links: Home, Services, Areas We Cover, Pricing, Reviews, Contact.
- Right: phone number with phone icon, and a solid royal-blue "Get a Free Quote" button.

**HERO SECTION**
- Split layout. Left side: a large frosted-glass card containing:
  - Small glass pill tag with location pin icon: "North West London". Next to it light text: "Local | Reliable | Professional".
  - Eyebrow text, uppercase and letter-spaced: "MOVING HOME?"
  - Headline (the page H1): "House Removals in North West London", with "North West London" in royal blue.
  - Subtext: "From the first box to the final key, Pearl Removals makes your move smooth, safe and stress-free."
  - Two buttons: solid royal-blue "Get a Free Quote →" and a frosted-glass outline "Call Us Today" with phone icon.
  - Row of 4 small square frosted-glass feature tiles with thin line icons: "Local & Long Distance" (house icon), "Safe & Secure Handling" (box icon), "Fully Insured Removals" (shield-check icon), "Experienced Team" (people icon).
  - Wide glass trust strip at the bottom: 5 gold stars, "Trusted by Homes Across North West London", a vertical divider, and a fine-line London skyline illustration.
- Right side: realistic photo of a clean white Luton removal van with a "Pearl Removals" logo on the side, rear doors open, cardboard boxes stacked on the pavement, and two friendly movers in navy branded polo shirts and caps loading boxes with a hand trolley outside a brick house.

**SERVICES SECTION**
- Section title: "Our Removal Services".
- Grid of 6 frosted-glass cards, each with a line icon, title and one-line description: House Removals, Flat Removals, Man and Van, Office & Commercial Removals, Packing Services, Storage.
- Below it, a slimmer row of 6 smaller glass cards titled "Specialist Services": Piano Removals, Fine Art & Antiques, Furniture Removals & Assembly, Long-Distance Removals, Student Removals, Same-Day Removals.

**WHY CHOOSE PEARL REMOVALS**
- Large glass panel with 4 stat blocks: "10+ Years Experience", "5,000+ Moves Completed", "4.9★ Customer Rating", "100% Fully Insured". (Presentation placeholders — replace with the client's real figures before going live; the live build renders only confirmed stats.)

**HOW IT WORKS**
- 4 horizontal glass step cards with numbered circles: 1. Request a Quote, 2. Free Survey, 3. We Pack & Move, 4. Settle Into Your New Home.

**AREAS WE COVER**
- Glass card with a soft, stylised map of North West London with a pin on Cricklewood, and pill tags for: Cricklewood, Kilburn, West Hampstead, Hampstead, Golders Green, Hendon, Brent Cross, Mill Hill, St John's Wood, Maida Vale, Primrose Hill, Paddington. A small "View all areas →" link.

**TESTIMONIALS**
- 3 frosted-glass review cards with 5 gold stars, a short quote, customer first name and area (e.g. "Sarah, Hampstead", "James, Kilburn", "Priya, Mill Hill"). (Presentation placeholders — the live site shows verified reviews only.)

**QUOTE FORM SECTION**
- Large centred glass card titled "Get Your Free Moving Quote".
- Form fields in frosted glass inputs: Full Name, Phone, Email, Moving From (postcode), Moving To (postcode), Moving Date, Property Size (dropdown).
- Full-width royal-blue "Get My Free Quote" button.

**FOOTER**
- Deep navy semi-transparent glass footer with logo, short company description, quick links, services list, areas list, contact details (phone, email, Cricklewood, North West London address), opening hours, and social icons. Small copyright line: "© 2026 Pearl Removals. All rights reserved."

**IMPORTANT**
- Static design only: no animations, no hover motion, no carousels.
- Keep every glass panel readable with good contrast between text and background.
- Consistent spacing, alignment and rounded corners throughout.
- Premium, clean, trustworthy feel suitable for presenting to a client.
