# Local SEO Launch & 90-Day Execution Checklist
**Client:** Pearl Removals  
**Scope:** Phase 1 Launch Verification, Local Pack Indexation & Phase Release Criteria

---

## 1. Pre-Launch Technical SEO & Local Schema Audit (Days 1–7)

- [ ] **Trailing Slash & Canonical Verification:** Verify every internal link resolves with trailing slash without intermediate redirects (`/areas/cricklewood/`, not `/areas/cricklewood`).
- [ ] **Single-Hop 301 Redirects:** Confirm `vercel.json` redirects non-WWW to WWW and HTTP to HTTPS.
- [ ] **Robots & LLM Accessibility:** Test `/robots.txt` and `/llms.txt` against Googlebot and modern LLM crawlers. Ensure sitemap index is declared.
- [ ] **XML & HTML Sitemaps:** Verify all 27 Phase 1 locations, 121 micro-areas, 20 service-areas, and enabled specialist services are listed with `<lastmod>` timestamps.
- [ ] **JSON-LD Schema Graph Validation:** Run Google Rich Results Test on representative URLs (Home, Main Area, Micro Area, Service × Area). Ensure valid `@graph` containing `MovingCompany`, `PostalAddress`, `GeoCoordinates`, `areaServed`, `BreadcrumbList`, and `FAQPage`.
- [ ] **OpenGraph & Twitter Card Tags:** Check social sharing cards on Twitter and WhatsApp for correct title, description, and high-res preview image.

---

## 2. 30-Day Indexation & Rank Tracking Setup (Days 8–30)

- [ ] **Google Search Console Indexation Audit:**
  - Submit `https://www.pearlremovals.co.uk/sitemap-index.xml`.
  - Perform live URL inspection on top 10 core pages.
  - Track indexation status weekly: Target 100% of Phase 1 pages indexed within 21 days.
- [ ] **Local Pack & Organic Rank Tracking Setup:**
  - Track local pack positions (1–3) in BrightLocal or GeoGrid rank tracker centered around NW2, NW3, NW4, NW6, NW8, NW10, W9, and W2.
  - Track primary keywords:
    - `"removals cricklewood"`, `"house removals hampstead nw3"`, `"man and van kilburn nw6"`
    - `"removals st johns wood nw8"`, `"piano removals london"`, `"fine art removals north west london"`
- [ ] **Citation Sync:** Audit Tier 1 and Tier 2 citations (Google, Bing, Apple Maps, Yell, Thomson Local, FreeIndex) for 100% NAP compliance.

---

## 3. 60-Day Competitor Gap Analysis & Review Velocity (Days 31–60)

- [ ] **Review Acquisition Velocity:**
  - Target: **5 to 8 verified 5-star Google reviews per month**.
  - Automated review request trigger sent to customers 2 hours post-move.
  - Review prompts instruct customers to mention their specific area (e.g. *"Pearl Removals moved our 3-bedroom house in Hampstead..."*) and service to reinforce topical keywords.
- [ ] **Competitor GeoGrid Gap Analysis:**
  - Analyze top 3 local competitors in Camden (Hampstead/Belsize Park) and Barnet (Hendon/Mill Hill).
  - Identify missing secondary categories or citation gaps.
  - Enhance micro-area on-page internal linking based on high-performing queries.
- [ ] **Google Business Profile Engagement:**
  - Publish 1 Google Post every Tuesday at 09:30 AM with seasonal advice and UTM-tagged CTA buttons.
  - Respond to 100% of customer reviews within 24 hours.

---

## 4. 90-Day Conversion & Local Authority Review (Days 61–90)

- [ ] **GA4 Conversion Rate Audit:**
  - Analyze lead submissions (`generate_lead`) and phone clicks (`phone_call_click`) segmented by `area` and `phase`.
  - Identify micro-areas generating the highest user engagement.
- [ ] **Backlink Velocity Check:**
  - Confirm active local sponsorship links from community clubs or school fairs.
  - Verify estate agent directory placements in Hampstead and West Hampstead.

---

## 5. Phase-Release Criteria (When to Flip `publishPhase` to 2 & 3)

To ensure search engine topical authority is consolidated before expanding crawl depth, do **NOT** increment `publishPhase` in `src/data/site.ts` until all the following criteria are satisfied:

| Metric / Benchmark | Phase 1 Minimum Required Threshold | Status |
|---|---|---|
| **Phase 1 Page Indexation** | ≥ 95% of published Phase 1 pages indexed in Google Search Console | Pending Audit |
| **Top 3 Local Pack Rankings** | In at least 5 Phase 1 target areas (e.g. Cricklewood, Kilburn, Hendon) | In Progress |
| **Organic Page 1 Rankings** | Primary keyword on Page 1 for ≥ 10 main area pages | In Progress |
| **Verified Google Reviews** | Minimum 25 verified 5-star reviews mentioning London areas & services | In Progress |
| **Lead Generation Volume** | ≥ 30 qualified removal leads per month from Phase 1 areas | In Progress |
| **Zero Google Penalties** | Clean Manual Actions report in Google Search Console | Confirmed Clean |

### Phase Expansion Procedure
1. When criteria are met, update `publishPhase: 2` in `src/data/site.ts` (or set `PUBLISH_PHASE=2`).
2. Phase 2 areas (West London: Notting Hill, Holland Park, Bayswater, Acton; Central London: Marylebone, Camden Town, Kentish Town; North London: Highgate, Muswell Hill, Totteridge & Whetstone; Outer North West: Stanmore, Edgware, Harrow, Wembley) automatically route, enter navigation, update sitemaps, and feed schema graphs.
3. Validate all Phase 2 content entries using `npm run validate` before deploying to production.

---

## 6. Phase 2 Go-Live Checklist & Phase 3 Criteria

- [ ] **Phase 2 Technical Audit (14 Main Areas, 61 Micro Areas, 14 Specialist Pages):**
  - Verify all 14 Phase 2 main area URLs resolve with trailing slash (`/areas/notting-hill/`, `/areas/highgate/`, etc.).
  - Verify all 61 Phase 2 micro areas resolve with trailing slash (`/areas/notting-hill/portobello-road/`, etc.).
  - Verify 14 Wave 6 specialist pages resolve (`/removals/piano-removals/hampstead/`, `/removals/fine-art-and-antiques-removals/st-johns-wood/`, etc.).
  - Ensure GeoCircle radius in schema widens to 12,000m (`geoRadiusByPhase[2]`).
- [ ] **Phase 2 Rank Tracking Expansion:**
  - Add geo-coordinates and rank tracking for W11, W14, W1, NW1, NW5, N6, N10, N20, HA7, HA8, HA1, HA0.
  - Track target queries: `"removals notting hill w11"`, `"removals highgate n6"`, `"piano removals st johns wood"`, `"luxury removals stanmore"`.
- [ ] **Phase 3 Release Criteria (When to Flip `publishPhase: 3`):**
  - ≥ 90% indexation of Phase 2 pages in Google Search Console.
  - Top 5 Local Pack rankings in at least 3 Phase 2 areas (e.g. Marylebone, Highgate, Stanmore).
  - ≥ 60 verified Google reviews total.
  - Lead generation exceeding 50 qualified removal enquiries per month.
