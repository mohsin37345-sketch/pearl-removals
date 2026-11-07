# Web Analytics, Tracking & Local Conversion Infrastructure
**Client:** Pearl Removals  
**System:** Google Analytics 4 (GA4), Google Tag Manager (GTM), Google Consent Mode v2, Google Search Console, Call Tracking

---

## 1. Google Consent Mode v2 Architecture

To ensure strict compliance with the UK GDPR, PECR, and the Information Commissioner's Office (ICO) guidelines, Consent Mode v2 is configured in **Advanced** or **Basic** mode before any marketing or analytics tags fire.

### Default State Initialization Script (Fired in `<head>` before GTM/GA4)
```html
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  // Default all consents to denied prior to user interaction
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });

  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);
</script>
```

When a user accepts cookies via the banner:
```javascript
gtag('consent', 'update', {
  'ad_storage': 'granted',
  'analytics_storage': 'granted',
  'ad_user_data': 'granted',
  'ad_personalization': 'granted'
});
```

---

## 2. Key Conversion Events in GA4

Mark all seven core conversion actions as **Key Events** in the GA4 property:

| Event Name | Trigger Condition | Parameters Captured |
|---|---|---|
| `generate_lead` | Successfully submitted quote or contact enquiry | `service`, `area`, `phase`, `value` |
| `phone_call_click` | Click on any `tel:` hyperlink or header call CTA | `telephone_number`, `click_location`, `page_path` |
| `whatsapp_click` | Click on WhatsApp floating button or chat link | `page_path`, `area`, `service` |
| `quote_form_start` | User focuses or enters text into the first form field | `form_id`, `page_path`, `service` |
| `quote_form_submit` | Submission of multi-step or inline quote form | `form_id`, `bedroom_count`, `area_origin`, `area_dest` |
| `calculator_complete` | User completes Moving Cost Calculator calculation | `estimated_cost_low`, `estimated_cost_high`, `bedrooms` |
| `checklist_download` | User clicks to download Moving Checklist PDF | `file_name`, `file_extension`, `page_path` |

---

## 3. Custom Dimensions Specification (GA4 Admin)

Configure the following Custom Dimensions in GA4 (Scope: **Event**):

1. **`area`** (Event parameter: `area`)
   - *Example values:* `cricklewood`, `hampstead`, `maida-vale`, `hendon`
   - *Purpose:* Analyzes lead volume and conversion rates by target area.
2. **`micro_area`** (Event parameter: `micro_area`)
   - *Example values:* `cricklewood-broadway`, `little-venice`, `frognal`
   - *Purpose:* Tracks granular micro-pocket traffic performance.
3. **`phase`** (Event parameter: `phase`)
   - *Example values:* `1`, `2`, `3`
   - *Purpose:* Evaluates ROI and conversion efficiency by launch phase.
4. **`service`** (Event parameter: `service`)
   - *Example values:* `house-removals`, `man-and-van`, `piano-removals`
   - *Purpose:* Segregates demand between high-ticket residential moves and specialist services.

---

## 4. Google Search Console & Bing Webmaster Tools Setup

### Google Search Console (All 4 URL Variants)
Add and verify a **Domain Property** (`pearlremovals.co.uk`) via DNS TXT record for full aggregate coverage, PLUS individual **URL Prefix Properties** to ensure exact canonical monitoring:
1. `https://www.pearlremovals.co.uk/` (Primary Canonical)
2. `https://pearlremovals.co.uk/` (301 redirects to WWW)
3. `http://www.pearlremovals.co.uk/` (301 redirects to HTTPS WWW)
4. `http://pearlremovals.co.uk/` (301 redirects to HTTPS WWW)

### Bing Webmaster Tools
- Import verified Google Search Console domain profile directly into Bing Webmaster Tools.
- Submit XML Sitemap index: `https://www.pearlremovals.co.uk/sitemap-index.xml`.

---

## 5. Call Tracking with Dynamic Number Insertion (DNI)

To avoid corrupting citation consistency and ensure the primary canonical telephone number (`020 3151 8452`) remains stable across third-party directories:

- **NAP Defense Rule:** Dynamic Number Insertion (DNI) is ONLY enabled for paid advertising traffic (Google Ads, Facebook Ads) or organic search sessions where the script swaps the visible number client-side after DOMContentLoaded, while the raw static HTML served to search engine web crawlers always maintains the canonical `020 3151 8452`.
- **Call Whisper:** Porters and call handlers hear a brief automated whisper: *"Incoming call from Pearl Removals Website — [Service/Area]"*.
- **Call Length Threshold:** Calls exceeding 60 seconds are pushed as verified `phone_call_lead` conversions into GA4 via Measurement Protocol.

---

## 6. Monthly Lead & Revenue Reporting Dashboard Template

```markdown
# Monthly North West London Removals Lead Report: [Month Year]

### Executive Summary
- Total Organic Sessions: [Count] (+[X]% MoM)
- Total Form Inquiries (generate_lead): [Count]
- Total Tracked Calls (phone_call_click): [Count]
- Overall Conversion Rate: [X.X]%

### Performance by Phase
- Phase 1 Core & Premium (NW2, NW3, NW4, NW6, NW7, NW8, NW11, W9): [X] leads ([X]%)
- Phase 2 Expansion (W11, W14, W2, W3, W1, NW1, NW5, N6, N10, N20, HA7, HA8, HA1, HA0): [X] leads ([X]%)
- Phase 3 Wider Reach (W8, W4, W6, W12, W5, W1/WC1, SW1/SW7, SW3/SW10, N8, EN5, N14, HA5, HA6, WD23, WD7): [X] leads ([X]%)
- Long-Distance Routes (Manchester, Birmingham, Bristol, etc.): [X] leads ([X]%)

### Top Performing Locations Across All 57 Areas
1. Kensington (W8) & Mayfair (W1): [X] leads
2. Hampstead (NW3) & Belsize Park: [X] leads
3. Cricklewood (NW2) & Hendon (NW4): [X] leads
4. Chiswick (W4) & Ealing (W5): [X] leads
5. Barnet (EN5), Pinner (HA5) & Radlett (WD7): [X] leads

### Top Service Demand Segments
1. House Removals (Executive & Family Homes)
2. Office & Commercial Relocations (Paddington, Brent Cross, Camden)
3. White-Glove, Fine Art & Piano Removals
4. Long-Distance Dedicated Moves (UK Intercity)
```
