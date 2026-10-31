# NAP Consistency & Local Citations Protocol
**Client:** Pearl Removals  
**Standardisation Target:** 100% NAP Consistency across all UK Business Directories & Aggregators

---

## 1. Master Canonical NAP Block

To maintain maximum citation equity and avoid data fragmentation in search engine local knowledge graphs, this exact block must be copied without variation:

```text
Business Name: Pearl Removals
Trading Address: Cricklewood Broadway, Cricklewood, London, NW2 3ET, United Kingdom
Telephone: 020 3151 8452
Website: https://www.pearlremovals.co.uk/
Email: info@pearlremovals.co.uk
Company Registration / Trading Status: Pearl Removals (trading under registered company entity)
VAT Number: Available upon request
```

### Strict Formatting Rules
- **Never abbreviate "Cricklewood Broadway"** to "Cricklewood Bdy" or "Broadway".
- **Postcode spacing:** Always "NW2 3ET" (single space, capital letters).
- **Phone number:** Always format as `020 3151 8452` (UK national landline format).
- **Website URL:** Always include `https://www.` with trailing slash: `https://www.pearlremovals.co.uk/`.
- **Category:** "Removals", "Removals & Storage", "House Removals", "Mover".

---

## 2. Prioritised Citation Acquisition Roadmap

### Tier 1: Primary Search Engines & Map Aggregators (Immediate Launch)
1. **Google Business Profile:** Verified primary listing.
2. **Bing Places for Business:** Synchronise directly with verified GBP listing.
3. **Apple Business Connect (Apple Maps):** Essential for iOS Siri and Maps searches.
4. **Foursquare:** Feeds mapping and location databases across social platforms and in-car navigation systems.

### Tier 2: Major UK General Business Directories (Domain Authority 50+)
5. **Yell.com (Yellow Pages UK):** Premium profile under "Removals & Storage".
6. **Thomson Local:** Verified listing under "House Removals London".
7. **FreeIndex:** Highly weighted for UK service queries and rich reviews.
8. **192.com:** Core public directory aggregator used by credit reference and address verification tools.
9. **Cylex UK:** Detailed profile with services, hours, and direct website links.
10. **Scoot UK:** Feeds Touch Local, The Sun, and The Independent business directories.
11. **Yelp UK:** Key data source for Apple Maps and DuckDuckGo search integration.
12. **Brownbook:** Open global business directory with immediate indexation.
13. **Hotfrog UK:** Authoritative UK trade listing.
14. **Central Index:** Primary B2B data syndication network feeding hundreds of local portals.

### Tier 3: Industry-Specific Trade & Moving Portals
15. **Trustpilot UK:** Official review and profile page (`https://www.trustpilot.com/review/pearlremovals.co.uk`).
16. **Checkatrade:** High-trust verification badge for removals in North West London.
17. **TrustATrader:** Verified trade member profile.
18. **Bark.com:** Professional services profile for London removals leads.
19. **MyBuilder:** Verified removal and light haulage listing.
20. **Compare My Move:** Industry-specific accreditation and quote partner page.
21. **Reallymoving:** Removals network directory profile.

### Tier 4: London Borough & Regional Business Directories
22. **Brent Chamber of Commerce:** Official member directory listing (covering Cricklewood NW2 & Kilburn NW6).
23. **Barnet Business Directory:** Borough business registry (covering Golders Green, Hendon, Mill Hill, Brent Cross).
24. **Camden Business Directory:** Verified local enterprise listing (covering Hampstead, Belsize Park, Primrose Hill).
25. **Westminster Business Directory:** Central London commerce directory (covering St John's Wood, Maida Vale, Paddington).
26. **London Chamber of Commerce and Industry (LCCI):** Member listing.
27. **Best of London Business Directory:** Regional trade portal.
28. **North West London Enquirer Business Index:** Local community business listing.

---

## 3. Citation Audit & Verification Protocol

### Verification Steps
1. **Quarterly Audit:** Run manual checks on the top 20 citations every 90 days to verify telephone number, website link, and address accuracy.
2. **Duplicate Suppression:** Search for outdated or unofficial listings created automatically by data crawlers and submit merger or deletion requests immediately.
3. **Tracking Spreadsheet:** Maintain an internal registry containing:
   - Platform name
   - Profile URL
   - Login email
   - Verification status (Pending, Phone-verified, Postcard-verified)
   - Date verified
   - Audit timestamp

### Citation Schema Sync
Ensure that the JSON-LD schema on `https://www.pearlremovals.co.uk` contains all verified citation URLs in the `sameAs` array within the `MovingCompany` entity:

```json
"sameAs": [
  "https://maps.google.com/?cid=YOUR_GBP_CID",
  "https://www.yell.com/biz/pearl-removals-london/",
  "https://www.freeindex.co.uk/profile(pearl-removals)",
  "https://www.trustpilot.com/review/pearlremovals.co.uk"
]
```
