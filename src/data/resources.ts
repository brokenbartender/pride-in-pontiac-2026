export type IdentityTag =
  | 'gay-bi-men' | 'lesbian-queer-women' | 'trans' | 'nonbinary' | 'bisexual'
  | 'youth' | 'seniors' | 'bipoc' | 'families' | 'veterans' | 'immigrants'
  | 'recovery' | 'disability' | 'all';

export type NeedTag =
  | 'crisis' | 'mental-health' | 'health-testing' | 'housing' | 'food'
  | 'legal' | 'coming-out' | 'transition' | 'employment' | 'domestic-violence'
  | 'general';

export type Locality = 'pontiac' | 'oakland-county' | 'metro-detroit' | 'michigan' | 'national';

export interface Resource {
  id: string;
  name: string;
  tagline: string;
  description: string;
  phone?: string;
  textLine?: string;
  chat?: string;
  address?: string;
  hours?: string;
  website?: string;
  locality: Locality;
  identities: IdentityTag[];
  needs: NeedTag[];
  free?: boolean;
}

export const CRISIS_LINES = [
  { name: 'Trevor Project', phone: '1-866-488-7386', note: 'LGBTQ+ youth crisis', hours: '24/7' },
  { name: '988 Lifeline', phone: '988', note: 'Press 3 for LGBTQ+', hours: '24/7' },
  { name: 'Trans Lifeline', phone: '877-565-8860', note: 'Run by trans people', hours: '24/7' },
  { name: 'CommonGround', phone: '1-800-231-1127', note: 'Oakland County 24/7', hours: '24/7' },
  { name: 'HAVEN', phone: '1-855-922-1274', note: 'DV & SA — Pontiac', hours: '24/7' },
  { name: 'LGBT Hotline', phone: '1-888-843-4564', note: 'Peer support', hours: 'M–F 4–12pm ET' },
];

export const RESOURCES: Resource[] = [
  // ── CRISIS ──────────────────────────────────────────────────────────
  {
    id: 'trevor',
    name: 'The Trevor Project',
    tagline: 'Crisis support for LGBTQ+ young people under 25',
    description: 'Free, confidential crisis intervention and suicide prevention for LGBTQ+ people under 25. Call, text, or chat 24/7. No judgment. They have seen everything and they are on your side.',
    phone: '1-866-488-7386',
    textLine: 'Text START to 678-678',
    chat: 'TheTrevorProject.org/get-help',
    website: 'thetrevorproject.org',
    locality: 'national',
    identities: ['all', 'youth', 'trans', 'nonbinary', 'bisexual'],
    needs: ['crisis', 'mental-health', 'coming-out'],
    free: true,
  },
  {
    id: '988',
    name: '988 Suicide & Crisis Lifeline',
    tagline: '24/7 crisis support — press 3 for the LGBTQ+ specialized line',
    description: 'Call or text 988 anytime, any reason. When you call, press 3 to reach staff specifically trained for LGBTQ+ callers. Available in English and Spanish. Free and confidential.',
    phone: '988',
    textLine: 'Text 988',
    website: '988lifeline.org',
    locality: 'national',
    identities: ['all'],
    needs: ['crisis', 'mental-health'],
    free: true,
  },
  {
    id: 'trans-lifeline',
    name: 'Trans Lifeline',
    tagline: 'Peer support hotline staffed entirely by trans people, for trans people',
    description: 'Staffed entirely by trans people — for trans people. Unlike most crisis lines, they will not call 911 without your consent. If you need to talk to someone who actually gets it, this is the line.',
    phone: '877-565-8860',
    website: 'translifeline.org',
    locality: 'national',
    identities: ['trans', 'nonbinary'],
    needs: ['crisis', 'mental-health', 'transition'],
    free: true,
  },
  {
    id: 'commonground',
    name: 'CommonGround Crisis Line',
    tagline: "Oakland County's own 24/7 mental health and crisis line",
    description: "The closest 24/7 crisis line to Pontiac. Call any time — crisis support, mental health referrals to local providers, or just someone to talk to. This is Oakland County's official mental health lifeline.",
    phone: '1-800-231-1127',
    locality: 'oakland-county',
    identities: ['all'],
    needs: ['crisis', 'mental-health'],
    free: true,
  },
  {
    id: 'haven',
    name: 'HAVEN',
    tagline: 'Domestic violence shelter in Pontiac — serves all genders including trans people',
    description: "HAVEN's shelter is in Pontiac. They serve survivors of domestic violence and sexual assault of all genders — including trans and nonbinary people. No appointment needed in a crisis. Address is disclosed at intake for safety.",
    phone: '1-855-922-1274',
    hours: '24/7',
    locality: 'pontiac',
    identities: ['all', 'trans'],
    needs: ['crisis', 'domestic-violence', 'housing'],
    free: true,
  },
  {
    id: 'lgbt-hotline',
    name: 'LGBT National Hotline',
    tagline: 'Peer support for coming out, relationships, and finding community',
    description: 'Not just for crisis — also for people who want to talk through coming out, navigate relationships, or just need a queer voice on the other end. Trained volunteers, confidential, free.',
    phone: '1-888-843-4564',
    hours: 'Mon–Fri 4pm–12am, Sat 12pm–5pm ET',
    website: 'lgbthotline.org',
    locality: 'national',
    identities: ['all'],
    needs: ['crisis', 'mental-health', 'coming-out'],
    free: true,
  },

  // ── HEALTH ──────────────────────────────────────────────────────────
  {
    id: 'north-oakland-health',
    name: 'North Oakland Health Center',
    tagline: 'Walk-in sexual health testing, PrEP, low-cost primary care — Pontiac',
    description: 'Walk-in STI and HIV testing, PrEP and PEP access, and low-cost primary care right in Pontiac. LGBTQ+-friendly. Sliding scale fees — cost is based on what you can pay.',
    phone: '248-452-9830',
    address: '1200 Telegraph Rd., Pontiac, MI 48341',
    locality: 'pontiac',
    identities: ['all', 'gay-bi-men', 'trans', 'bisexual'],
    needs: ['health-testing'],
    free: false,
  },
  {
    id: 'oakland-county-health',
    name: 'Oakland County Health Division — Pontiac',
    tagline: 'Free HIV & STI testing, PrEP navigation, harm reduction — walk-in, no appointment',
    description: 'Free HIV and STI testing, PrEP navigation, and harm reduction services. Walk-in, no appointment, no cost. Open Monday–Friday 8:30am–5pm at 148 N. Saginaw St. in Pontiac. One of the most useful free clinics in the area and almost nobody knows about it.',
    phone: '248-858-1285',
    address: '148 N. Saginaw St., Pontiac, MI 48342',
    hours: 'Mon–Fri 8:30am–5pm, walk-in',
    locality: 'pontiac',
    identities: ['all', 'gay-bi-men', 'trans', 'bisexual'],
    needs: ['health-testing', 'transition'],
    free: true,
  },
  {
    id: 'affirmations',
    name: 'Affirmations LGBTQ+ Community Center',
    tagline: 'Southeast Michigan\'s anchor LGBTQ+ center — Ferndale, 20 min from Pontiac',
    description: "Mental health counseling, support groups for every subcommunity, health programming, youth groups, seniors programming (MiGen), and community events. 20 minutes from Pontiac in Ferndale. The largest LGBTQ+ center in the region.",
    phone: '248-398-7105',
    address: '290 W 9 Mile Rd., Ferndale, MI 48220',
    website: 'goaffirmations.org',
    locality: 'metro-detroit',
    identities: ['all'],
    needs: ['mental-health', 'health-testing', 'coming-out', 'transition', 'general'],
    free: false,
  },
  {
    id: 'planned-parenthood-hrt',
    name: 'Planned Parenthood Michigan — Gender-Affirming Hormone Therapy',
    tagline: 'HRT on an informed consent basis — no therapist letter required',
    description: 'Planned Parenthood Michigan offers gender-affirming hormone therapy at multiple locations using an informed consent model — you do not need a therapist letter to start. Multiple Oakland County and metro Detroit locations.',
    phone: '1-800-230-7526',
    website: 'plannedparenthood.org/planned-parenthood-michigan',
    locality: 'michigan',
    identities: ['trans', 'nonbinary'],
    needs: ['transition', 'health-testing'],
    free: false,
  },

  // ── TRANS & NONBINARY ────────────────────────────────────────────────
  {
    id: 'stand-with-trans',
    name: 'Stand with Trans',
    tagline: 'Michigan\'s dedicated trans organization — groups, therapy access, Ally Moms hotline',
    description: "Michigan-only. Free support groups for trans youth, young adults, and adults. Ally Moms program for parents of trans kids (call or text the same number). Partners with therapists for low-cost gender-affirming mental health care. If you are trans and in Michigan, start here.",
    phone: '248-266-3667',
    website: 'standwithtrans.org',
    locality: 'michigan',
    identities: ['trans', 'nonbinary', 'families', 'youth'],
    needs: ['mental-health', 'transition', 'coming-out'],
    free: true,
  },
  {
    id: 'transgender-michigan',
    name: 'Transgender Michigan',
    tagline: 'Statewide trans advocacy, annual resource guide, SE Michigan chapter',
    description: "Statewide advocacy organization publishing an annual Michigan trans resource guide. The Southeast Michigan chapter is active. Good starting point for navigating Michigan's healthcare, legal, and community systems as a trans person.",
    website: 'transgendermichigan.org',
    locality: 'michigan',
    identities: ['trans', 'nonbinary'],
    needs: ['transition', 'legal', 'mental-health', 'general'],
    free: true,
  },
  {
    id: 'trans-ilience',
    name: 'Trans-ilience',
    tagline: 'Leadership development and political education for trans youth 16–22',
    description: 'Trans-ilience works with trans young people ages 16–22 on leadership, political education, and community organizing. Not a crisis service — a place to build power and community alongside other trans young people.',
    website: 'trans-ilience.org',
    locality: 'michigan',
    identities: ['trans', 'nonbinary', 'youth'],
    needs: ['employment', 'mental-health', 'general'],
    free: true,
  },
  {
    id: 'wayne-state-outlaw',
    name: 'Wayne State OUTlaw — Free Name Change Clinics',
    tagline: 'Free legal name change clinics for Michigan residents including Oakland County',
    description: 'Law students supervised by attorneys run free legal name change clinics for Michigan residents — Oakland County residents are eligible. Removes a significant financial barrier to legal transition. Check their site for upcoming clinic dates.',
    website: 'law.wayne.edu',
    locality: 'michigan',
    identities: ['trans', 'nonbinary'],
    needs: ['legal', 'transition'],
    free: true,
  },

  // ── MENTAL HEALTH ────────────────────────────────────────────────────
  {
    id: 'oakland-community-mh',
    name: 'Oakland Community Health Network',
    tagline: 'Oakland County public mental health — Medicaid accepted, uninsured welcome',
    description: "Oakland County's public mental health authority. Serves people with Medicaid, Medicare, or who are uninsured. Covers mental health, substance use, and developmental disabilities. Not LGBTQ+-specific but obligated to serve everyone regardless of identity.",
    phone: '800-752-5974',
    website: 'oaklandchn.org',
    locality: 'oakland-county',
    identities: ['all'],
    needs: ['mental-health', 'recovery'],
    free: true,
  },

  // ── YOUTH ────────────────────────────────────────────────────────────
  {
    id: 'ruth-ellis',
    name: 'Ruth Ellis Center',
    tagline: 'Safe space, housing, and health for LGBTQ+ youth up to 24 — Detroit',
    description: "Detroit-based center for LGBTQ+ youth experiencing homelessness or housing instability. Drop-in center, health services, workforce development, and the Kofi House specifically for queer women and girls. If you're under 24 and not safe at home, this is where to go.",
    phone: '313-252-1950',
    address: '2431 Burlingame Ave., Detroit, MI 48206',
    website: 'ruthelliscenter.org',
    locality: 'metro-detroit',
    identities: ['youth', 'bipoc', 'lesbian-queer-women', 'trans'],
    needs: ['housing', 'mental-health', 'health-testing', 'employment'],
    free: true,
  },
  {
    id: 'ou-gender-sexuality',
    name: 'Oakland University Gender & Sexuality Resource Center',
    tagline: 'Open to the broader community — not just OU students',
    description: "Oakland University's GSRC is open to community members, not just enrolled students. Support groups, resources, and programming on campus in Rochester Hills — about 20 minutes from Pontiac.",
    phone: '248-370-3181',
    address: 'Oakland University, Rochester Hills, MI',
    website: 'oakland.edu/lgbtq',
    locality: 'oakland-county',
    identities: ['all', 'youth'],
    needs: ['mental-health', 'coming-out', 'general'],
    free: true,
  },

  // ── SENIORS ──────────────────────────────────────────────────────────
  {
    id: 'migen',
    name: 'MiGen — Michigan LGBTQ+ Elders Network',
    tagline: 'Programming, advocacy, and connection for LGBTQ+ people 45+ — based at Affirmations',
    description: "Michigan's only organization focused entirely on LGBTQ+ older adults. Social programming, Medicare and Medicaid navigation, housing help, and advocacy. Physically located at Affirmations in Ferndale. Isolation is the leading issue for LGBTQ+ seniors — this organization exists to address that directly.",
    phone: '248-543-3611',
    website: 'migen.org',
    locality: 'metro-detroit',
    identities: ['seniors'],
    needs: ['mental-health', 'general', 'housing'],
    free: true,
  },
  {
    id: 'sage',
    name: 'SAGE — Advocacy & Services for LGBTQ+ Elders',
    tagline: 'National organization for LGBTQ+ older adults with a warmline for connection',
    description: 'National organization with local chapter support across the country. SAGE Line is a warmline for LGBTQ+ seniors who want to talk to someone. Also provides advocacy and elder care resources.',
    phone: '1-877-360-5428',
    website: 'sageusa.org',
    locality: 'national',
    identities: ['seniors'],
    needs: ['mental-health', 'general'],
    free: true,
  },

  // ── BIPOC ────────────────────────────────────────────────────────────
  {
    id: 'lgbt-detroit',
    name: 'LGBT Detroit',
    tagline: 'Black-centered LGBTQ+ community and advocacy — Detroit',
    description: "Explicitly centered on Black LGBTQ+ Detroit. Community events, advocacy, and programs that center people who are often marginalized even within LGBTQ+ spaces. Pontiac is majority Black and Latino — this organization reflects that reality.",
    phone: '313-462-5004',
    website: 'lgbtdetroit.org',
    locality: 'metro-detroit',
    identities: ['bipoc', 'gay-bi-men', 'lesbian-queer-women', 'trans'],
    needs: ['mental-health', 'general', 'coming-out'],
    free: true,
  },
  {
    id: 'familia-tqlm',
    name: 'Familia: Trans Queer Liberation Movement',
    tagline: 'Trans, queer, and gender-nonconforming Latinx people',
    description: 'National organization explicitly for trans and queer Latinx people. Resources, advocacy, and community for a population that is often doubly invisible — within LGBTQ+ spaces and within Latinx spaces.',
    website: 'familiatqlm.org',
    locality: 'national',
    identities: ['bipoc', 'trans', 'nonbinary'],
    needs: ['mental-health', 'legal', 'general'],
    free: true,
  },
  {
    id: 'nbjc',
    name: 'National Black Justice Coalition',
    tagline: 'Civil rights organization for Black LGBTQ+ and same-gender-loving people',
    description: 'National advocacy and resource organization dedicated to the empowerment of Black LGBTQ+ people. Policy advocacy, community resources, and connection to a national network.',
    website: 'nbjc.org',
    locality: 'national',
    identities: ['bipoc'],
    needs: ['legal', 'general'],
    free: true,
  },

  // ── HOUSING ──────────────────────────────────────────────────────────
  {
    id: 'pontiac-housing',
    name: 'Pontiac Housing Commission',
    tagline: 'Public housing and Section 8 vouchers — Pontiac',
    description: 'Public housing and housing voucher programs for Pontiac residents. Waitlists can be long — apply as early as possible. This is the starting point for subsidized housing assistance in Pontiac.',
    phone: '248-858-1312',
    locality: 'pontiac',
    identities: ['all'],
    needs: ['housing'],
    free: true,
  },
  {
    id: 'olhsa',
    name: 'OLHSA — Oakland Livingston Human Service Agency',
    tagline: 'Energy assistance, housing counseling, emergency services — Pontiac',
    description: 'Energy assistance (LIHEAP), housing counseling, emergency services, and more. Has a Pontiac location on Cesar E. Chavez Ave. Serves Oakland and Livingston County residents.',
    phone: '248-209-2600',
    address: '196 Cesar E. Chavez Ave., Pontiac, MI 48342',
    website: 'olhsa.org',
    locality: 'pontiac',
    identities: ['all'],
    needs: ['housing', 'general'],
    free: true,
  },
  {
    id: 'grace-centers',
    name: 'Grace Centers of Hope',
    tagline: 'Emergency shelter and transitional housing — Pontiac',
    description: 'Emergency shelter, transitional housing, and support services for people experiencing homelessness in Pontiac. Serves all genders.',
    phone: '248-334-2187',
    address: '35 E. Huron St., Pontiac, MI 48342',
    website: 'gracecentersofhope.org',
    locality: 'pontiac',
    identities: ['all'],
    needs: ['housing', 'food'],
    free: true,
  },
  {
    id: 'catholic-community-response',
    name: 'Catholic Community Response Team',
    tagline: 'Eviction prevention, clothing, food, ID help — Pontiac',
    description: 'Provides eviction prevention services, emergency food, clothing, and help getting IDs for Pontiac residents. Despite the name, serves everyone regardless of religious affiliation.',
    locality: 'pontiac',
    identities: ['all'],
    needs: ['housing', 'food', 'general'],
    free: true,
  },

  // ── FOOD ─────────────────────────────────────────────────────────────
  {
    id: 'salvation-army-pontiac',
    name: 'Salvation Army — Pontiac',
    tagline: 'Emergency food, hot meals, basic services — Pontiac',
    description: 'Emergency food pantry and hot meal program in Pontiac. Open to anyone in need. No religious requirement. Call ahead to confirm current hours.',
    phone: '248-332-6611',
    address: '469 Martin Luther King Jr. Blvd. S., Pontiac, MI 48341',
    locality: 'pontiac',
    identities: ['all'],
    needs: ['food'],
    free: true,
  },
  {
    id: 'oakland-hope',
    name: 'Oakland Hope',
    tagline: 'Food pantry and community resources — Pontiac',
    description: 'Local food pantry and community resource center in Pontiac. Call ahead to confirm current hours and food availability.',
    phone: '248-309-3658',
    address: '20 E. Walton Blvd., Pontiac, MI',
    locality: 'pontiac',
    identities: ['all'],
    needs: ['food'],
    free: true,
  },

  // ── LEGAL ────────────────────────────────────────────────────────────
  {
    id: 'lakeshore-legal',
    name: 'Lakeshore Legal Aid',
    tagline: 'Free civil legal help for low-income Oakland County residents',
    description: 'Free civil legal assistance for low-income residents of Oakland, Macomb, and Wayne counties. Covers housing, benefits, domestic violence, immigration, name changes, and more.',
    phone: '1-888-783-8190',
    website: 'lakeshorelegalaid.org',
    locality: 'oakland-county',
    identities: ['all'],
    needs: ['legal', 'housing', 'domestic-violence'],
    free: true,
  },
  {
    id: 'equality-michigan',
    name: 'Equality Michigan',
    tagline: 'LGBTQ+ civil rights advocacy and hate crime reporting — statewide',
    description: 'Michigan statewide LGBTQ+ civil rights organization. Report anti-LGBTQ+ discrimination or hate crimes here. Provides advocacy resources and connections to legal support.',
    phone: '1-313-537-7000',
    website: 'equalitymi.org',
    locality: 'michigan',
    identities: ['all'],
    needs: ['legal'],
    free: true,
  },
  {
    id: 'fair-michigan',
    name: 'Fair Michigan Foundation',
    tagline: 'Prosecutes hate crimes targeting LGBTQ+ people in Michigan',
    description: "Works with prosecutors across Michigan to ensure hate crimes targeting LGBTQ+ people are investigated and prosecuted. If you've been the victim of a hate crime, contact them.",
    website: 'fairmi.org',
    locality: 'michigan',
    identities: ['all'],
    needs: ['legal'],
    free: true,
  },

  // ── VETERANS ─────────────────────────────────────────────────────────
  {
    id: 'modern-military',
    name: 'Modern Military Association of America',
    tagline: 'Advocacy and support for LGBTQ+ service members and veterans',
    description: 'Advocacy and support organization for LGBTQ+ people who serve or have served in the military. Benefits navigation, legal support, and connection to a national community.',
    website: 'modernmilitary.org',
    locality: 'national',
    identities: ['veterans'],
    needs: ['legal', 'mental-health', 'general'],
    free: true,
  },
  {
    id: 'va-detroit',
    name: 'Detroit VA Medical Center — LGBTQ+ Health Program',
    tagline: 'LGBTQ+-specific health services for veterans — Detroit',
    description: "The Detroit VA has a designated LGBTQ+ Health Program with a patient advocate. Ask specifically for the LGBTQ+ Veteran Care Coordinator when you call — they connect veterans to affirming providers and services.",
    phone: '313-576-1000',
    address: '4646 John R St., Detroit, MI 48201',
    website: 'va.gov/detroit-health-care',
    locality: 'metro-detroit',
    identities: ['veterans'],
    needs: ['health-testing', 'mental-health'],
    free: true,
  },

  // ── IMMIGRANTS ───────────────────────────────────────────────────────
  {
    id: 'freedom-house',
    name: 'Freedom House Detroit',
    tagline: 'Shelter and legal support for asylum seekers including LGBTQ+ people fleeing persecution',
    description: 'Provides shelter, legal representation, and support for asylum seekers in Detroit — including LGBTQ+ people fleeing persecution. Critical resource for LGBTQ+ immigrants who are not safe in their country of origin.',
    phone: '313-964-4320',
    website: 'freedomhousedetroit.org',
    locality: 'metro-detroit',
    identities: ['immigrants'],
    needs: ['legal', 'housing'],
    free: true,
  },
  {
    id: 'mirc',
    name: 'Michigan Immigrant Rights Center',
    tagline: 'Immigration legal services and advocacy across Michigan',
    description: 'Legal services and advocacy for immigrants across Michigan. Can connect LGBTQ+ immigrants and asylum seekers with appropriate legal resources and representation.',
    phone: '269-381-2600',
    website: 'michiganimmigrant.org',
    locality: 'michigan',
    identities: ['immigrants'],
    needs: ['legal'],
    free: true,
  },

  // ── RECOVERY ─────────────────────────────────────────────────────────
  {
    id: 'affirmations-recovery',
    name: 'Affirmations — LGBTQ+ Recovery Meetings',
    tagline: 'Open AA meetings in an LGBTQ+-affirming space — Ferndale',
    description: 'Affirmations hosts open AA meetings in their building — LGBTQ+-affirming, not LGBTQ+-exclusive. Check their current events calendar for meeting times. No cost, no requirement to be a member.',
    phone: '248-398-7105',
    address: '290 W 9 Mile Rd., Ferndale, MI 48220',
    website: 'goaffirmations.org/events',
    locality: 'metro-detroit',
    identities: ['recovery', 'all'],
    needs: ['recovery', 'mental-health'],
    free: true,
  },

  // ── FAMILIES ─────────────────────────────────────────────────────────
  {
    id: 'pflag-detroit',
    name: 'PFLAG — Metro Detroit Chapters',
    tagline: 'Support groups for parents, families, and loved ones of LGBTQ+ people',
    description: "PFLAG runs support groups for families and allies of LGBTQ+ people. Plymouth-Canton and Detroit chapters are closest to Pontiac. For parents of trans kids specifically, Stand with Trans also runs an Ally Moms program (248-266-3667).",
    website: 'pflag.org/find-a-chapter',
    locality: 'metro-detroit',
    identities: ['families'],
    needs: ['mental-health', 'coming-out', 'transition', 'general'],
    free: true,
  },
];

export const IDENTITY_FILTERS: { id: IdentityTag; label: string }[] = [
  { id: 'gay-bi-men', label: 'Gay & Bi Men' },
  { id: 'lesbian-queer-women', label: 'Lesbians & Queer Women' },
  { id: 'trans', label: 'Trans People' },
  { id: 'nonbinary', label: 'Nonbinary People' },
  { id: 'bisexual', label: 'Bisexual People' },
  { id: 'youth', label: 'Youth (under 22)' },
  { id: 'seniors', label: 'Seniors 45+' },
  { id: 'bipoc', label: 'LGBTQ+ BIPOC' },
  { id: 'families', label: 'Families & Parents' },
  { id: 'veterans', label: 'Veterans' },
  { id: 'immigrants', label: 'Immigrants & Refugees' },
  { id: 'recovery', label: 'People in Recovery' },
  { id: 'disability', label: 'People with Disabilities' },
];

export const NEED_FILTERS: { id: NeedTag; label: string }[] = [
  { id: 'crisis', label: 'Crisis Support' },
  { id: 'mental-health', label: 'Mental Health' },
  { id: 'health-testing', label: 'Health & Testing' },
  { id: 'housing', label: 'Housing' },
  { id: 'food', label: 'Food' },
  { id: 'legal', label: 'Legal Help' },
  { id: 'coming-out', label: 'Coming Out' },
  { id: 'transition', label: 'Transition Support' },
  { id: 'employment', label: 'Employment' },
  { id: 'domestic-violence', label: 'Domestic Violence' },
  { id: 'general', label: 'General Services' },
];

export const LOCALITY_LABEL: Record<Locality, string> = {
  pontiac: 'Pontiac',
  'oakland-county': 'Oakland County',
  'metro-detroit': 'Metro Detroit',
  michigan: 'Michigan',
  national: 'National',
};

export const LOCALITY_ORDER: Locality[] = [
  'pontiac', 'oakland-county', 'metro-detroit', 'michigan', 'national',
];
