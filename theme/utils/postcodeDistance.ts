/**
 * Calculate approximate driving distance (in miles) and tier from NW2 (Cricklewood) base
 */
export interface DistanceBand {
  miles: number;
  label: string;
  surcharge: number;
}

const POSTCODE_DISTANCES: Record<string, number> = {
  // Phase 1 Core (0-5 miles)
  'NW2': 0,
  'NW10': 2,
  'NW6': 1.5,
  'NW4': 2,
  'NW11': 2,
  'NW3': 2.5,
  'NW8': 3,
  'NW9': 3,
  'NW1': 3.5,
  'NW7': 4,
  'N2': 3,
  'N3': 3.5,
  'HA9': 3,
  'W9': 3,
  'W2': 4.5,
  'W10': 3,

  // Phase 2 (5-7 miles)
  'W11': 5,
  'W14': 5.5,
  'W3': 5.5,
  'W1': 4.5,
  'NW5': 4,
  'N6': 4,
  'N10': 5,
  'N20': 6,
  'HA8': 4.5,
  'HA7': 5.5,
  'HA1': 6,
  'HA2': 6.5,
  'HA3': 6,
  'HA0': 4,

  // Phase 3 (5-10 miles)
  'W8': 5.5,
  'W12': 6,
  'W6': 6.5,
  'W4': 7,
  'W5': 7,
  'W13': 7.5,
  'SW1': 6,
  'SW7': 6,
  'SW3': 7,
  'SW10': 7.5,
  'WC1': 5,
  'N8': 6,
  'EN5': 7,
  'EN4': 7.5,
  'N14': 8,
  'N21': 8.5,
  'HA5': 8,
  'HA6': 10,
  'WD23': 8,
  'WD6': 8.5,
  'WD7': 10
};

export function getPostcodeDistance(postcode: string): DistanceBand {
  const clean = postcode.toUpperCase().trim();
  const prefixMatch = clean.match(/^([A-Z]{1,2}[0-9]{1,2})/);
  const district = prefixMatch ? prefixMatch[1] : '';

  const miles = district && POSTCODE_DISTANCES[district] !== undefined 
    ? POSTCODE_DISTANCES[district] 
    : 12; // default outside local core

  let label = 'Local Core (NW London)';
  let surcharge = 0;

  if (miles <= 3) {
    label = 'Local Base (0–3 miles)';
    surcharge = 0;
  } else if (miles <= 6) {
    label = 'Inner Ring (3–6 miles)';
    surcharge = 25;
  } else if (miles <= 10) {
    label = 'Outer Ring (6–10 miles)';
    surcharge = 50;
  } else {
    label = 'Greater London / Regional';
    surcharge = 85 + Math.round((miles - 10) * 2.5);
  }

  return { miles, label, surcharge };
}
