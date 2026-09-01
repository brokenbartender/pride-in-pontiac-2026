export interface Sponsor {
  name: string;
  tier: "Gold" | "Silver" | "In-Kind";
  amount?: string;
  logo?: string;
  url?: string;
  /** In-Kind only: overrides the section heading for this sponsor's group (e.g. "Official Backstage Glam Partner"). */
  label?: string;
}

// Confirmed in Airtable Sponsor Pipeline (appK6kssWuF49FxwJ) as of 2026-07-27.
// Add a `logo` path (under /public/images/sponsors/) as logo files come in —
// the wall falls back to a text wordmark automatically until then.
export const CONFIRMED_SPONSORS: Sponsor[] = [
  { name: "Weiss Distilling Co.", tier: "Gold", amount: "$2,000", logo: "/images/sponsors/weiss.png", url: "https://www.thewdc.com/" },
  { name: "B. Nektar Meadery", tier: "Gold", amount: "$1,700", logo: "/images/sponsors/b-nektar.jpg", url: "https://www.bnektar.com/" },
  { name: "HopCat Auburn Hills", tier: "Gold", amount: "$1,000", logo: "/images/sponsors/hopcat.png", url: "https://hopcat.com/locations/auburn-hills/" },
  { name: "The Crofoot", tier: "In-Kind", label: "Host Venue Partner", logo: "/images/sponsors/crofoot.jpg", url: "https://thecrofoot.com" },
  { name: "KimChi Chic Beauty", tier: "In-Kind", label: "Official Backstage Glam Partner", logo: "/images/sponsors/kimchi-chic.png", url: "https://kimchichicbeauty.com" },
];

export interface CommunityPartner {
  name: string;
  url?: string;
}

export const COMMUNITY_PARTNERS: CommunityPartner[] = [
  { name: "Oakland County Health Division", url: "http://www.oakgov.com/health" },
  { name: "Pontiac City Council", url: "https://www.pontiac.mi.us/government/city_council/index.php" },
  { name: "Oakland County Blog", url: "https://oaklandcountyblog.com/" },
  { name: "Oakland University Gender & Sexuality Center", url: "http://www.oakland.edu/gsc" },
  { name: "NE Oakland Indivisible", url: "https://www.mobilize.us/neoaklandindivisible/event/903733/" },
];
