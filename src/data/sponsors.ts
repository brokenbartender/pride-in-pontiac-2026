export interface Sponsor {
  name: string;
  tier: "Gold" | "Silver" | "In-Kind";
  amount?: string;
  logo?: string;
  url?: string;
}

// Confirmed in Airtable Sponsor Pipeline (appK6kssWuF49FxwJ) as of 2026-07-27.
// Add a `logo` path (under /public/images/sponsors/) as logo files come in —
// the wall falls back to a text wordmark automatically until then.
export const CONFIRMED_SPONSORS: Sponsor[] = [
  { name: "Weiss Distilling Co.", tier: "Gold", amount: "$2,000" },
  { name: "B. Nektar Meadery", tier: "Gold", amount: "$1,700", logo: "/images/sponsors/b-nektar.jpg" },
  { name: "HopCat Auburn Hills", tier: "Gold", amount: "$1,000", logo: "/images/sponsors/hopcat.png", url: "https://hopcat.com/locations/auburn-hills/" },
  { name: "Joyology of Lake Orion", tier: "Silver", amount: "$1,500", logo: "/images/sponsors/joyology.png" },
  { name: "The Crofoot", tier: "In-Kind" },
];

export const COMMUNITY_PARTNERS: string[] = [
  "Oakland County Health Division",
  "Pontiac City Council",
  "Oakland County Blog",
  "Oakland University Gender & Sexuality Center",
  "Neo Oakland Indivisible",
];
