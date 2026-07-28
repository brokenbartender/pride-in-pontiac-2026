import { useState, useMemo } from "react";
import { Phone, MessageSquare, Globe, MapPin, Clock, Search, X, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import {
  RESOURCES, CRISIS_LINES, IDENTITY_FILTERS, NEED_FILTERS,
  LOCALITY_LABEL, LOCALITY_ORDER,
  type IdentityTag, type NeedTag, type Locality, type Resource,
} from "../data/resources";

// ── Locality badge colors ────────────────────────────────────────────
const LOCALITY_STYLE: Record<Locality, string> = {
  pontiac: 'bg-pride-gold text-pride-black',
  'oakland-county': 'bg-pride-teal text-white',
  'metro-detroit': 'bg-pride-violet text-white',
  michigan: 'bg-pride-rose text-white',
  national: 'bg-pride-black text-pride-white',
};

// ── Resource Card ────────────────────────────────────────────────────
function ResourceCard({ r }: { r: Resource }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-pride-white border border-pride-black/10 hover:border-pride-gold/50 hover:shadow-md transition-all">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap gap-2">
            <span className={`font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 font-bold ${LOCALITY_STYLE[r.locality]}`}>
              {LOCALITY_LABEL[r.locality]}
            </span>
            {r.free && (
              <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 bg-pride-teal/10 text-pride-teal border border-pride-teal/30 font-bold">
                Free
              </span>
            )}
          </div>
        </div>

        <h3 className="font-serif font-bold text-xl mb-1 text-pride-ink leading-tight">{r.name}</h3>
        <p className="font-sans text-xs text-pride-gold uppercase tracking-wide font-semibold mb-3">{r.tagline}</p>

        {/* Contact info — always visible */}
        <div className="space-y-1.5">
          {r.phone && (
            <a
              href={`tel:${r.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 text-sm text-pride-ink hover:text-pride-gold transition-colors font-medium group"
            >
              <Phone size={13} className="shrink-0 text-pride-gold" />
              <span className="group-hover:underline">{r.phone}</span>
            </a>
          )}
          {r.textLine && (
            <div className="flex items-center gap-2 text-sm text-pride-muted">
              <MessageSquare size={13} className="shrink-0 text-pride-gold" />
              <span>{r.textLine}</span>
            </div>
          )}
          {r.address && (
            <div className="flex items-start gap-2 text-sm text-pride-muted">
              <MapPin size={13} className="shrink-0 text-pride-gold mt-0.5" />
              <span>{r.address}</span>
            </div>
          )}
          {r.hours && (
            <div className="flex items-center gap-2 text-sm text-pride-muted">
              <Clock size={13} className="shrink-0 text-pride-gold" />
              <span>{r.hours}</span>
            </div>
          )}
        </div>
      </div>

      {/* Expandable description */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-6 py-3 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-pride-muted hover:text-pride-gold hover:bg-pride-cream/50 transition-colors border-t border-pride-black/5"
      >
        <span>{expanded ? 'Less detail' : 'More detail'}</span>
        {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
      </button>

      {expanded && (
        <div className="px-6 pb-6 space-y-3 border-t border-pride-black/5 pt-4">
          <p className="font-sans text-sm text-pride-muted leading-relaxed">{r.description}</p>
          {r.chat && (
            <div className="flex items-center gap-2 text-sm text-pride-muted">
              <MessageSquare size={13} className="shrink-0 text-pride-teal" />
              <span>Chat: {r.chat}</span>
            </div>
          )}
          {r.website && (
            <a
              href={`https://${r.website.replace(/^https?:\/\//, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-pride-gold hover:underline"
            >
              <Globe size={13} />
              {r.website.replace(/^https?:\/\//, '')}
              <ExternalLink size={11} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ── Filter button ────────────────────────────────────────────────────
function FilterBtn({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-sans font-semibold uppercase tracking-wide border transition-all whitespace-nowrap ${
        active
          ? 'bg-pride-gold text-pride-black border-pride-gold'
          : 'bg-transparent text-pride-ink/70 border-pride-black/20 hover:border-pride-gold hover:text-pride-gold'
      }`}
    >
      {label}
    </button>
  );
}

// ── Expandable static section ────────────────────────────────────────
function ExpandSection({ title, subtitle, children }: {
  title: string; subtitle: string; children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-pride-black/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-8 flex items-start justify-between gap-4 text-left hover:bg-pride-cream/50 transition-colors"
      >
        <div>
          <h3 className="font-serif font-bold text-2xl text-pride-ink mb-1">{title}</h3>
          <p className="text-sm text-pride-muted">{subtitle}</p>
        </div>
        {open ? <ChevronUp size={20} className="shrink-0 mt-1 text-pride-gold" /> : <ChevronDown size={20} className="shrink-0 mt-1 text-pride-gold" />}
      </button>
      {open && (
        <div className="px-8 pb-8 border-t border-pride-black/10">
          {children}
        </div>
      )}
    </div>
  );
}

// ── Main Page ────────────────────────────────────────────────────────
export function Resources() {
  const [identityFilter, setIdentityFilter] = useState<IdentityTag | null>(null);
  const [needFilter, setNeedFilter] = useState<NeedTag | null>(null);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return RESOURCES.filter((r) => {
      // Identity filter
      if (identityFilter) {
        const matches = r.identities.includes('all') || r.identities.includes(identityFilter);
        if (!matches) return false;
      }
      // Need filter
      if (needFilter && !r.needs.includes(needFilter)) return false;
      // Search
      if (query.trim()) {
        const q = query.toLowerCase();
        if (
          !r.name.toLowerCase().includes(q) &&
          !r.tagline.toLowerCase().includes(q) &&
          !r.description.toLowerCase().includes(q) &&
          !(r.address?.toLowerCase().includes(q)) &&
          !LOCALITY_LABEL[r.locality].toLowerCase().includes(q)
        ) return false;
      }
      return true;
    }).sort((a, b) => {
      return LOCALITY_ORDER.indexOf(a.locality) - LOCALITY_ORDER.indexOf(b.locality);
    });
  }, [identityFilter, needFilter, query]);

  const clearAll = () => {
    setIdentityFilter(null);
    setNeedFilter(null);
    setQuery('');
  };

  const hasFilter = identityFilter || needFilter || query.trim();

  return (
    <div className="bg-pride-cream min-h-screen text-pride-ink">

      {/* ── Crisis Bar ── */}
      <div className="bg-pride-black text-pride-white py-4 px-6">
        <p className="font-mono text-[10px] tracking-widest uppercase text-pride-gold text-center mb-3">
          Crisis Lines — Available Now
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {CRISIS_LINES.map((c) => (
            <a
              key={c.name}
              href={`tel:${c.phone.replace(/[^0-9+]/g, '')}`}
              className="flex flex-col items-center text-center p-2 border border-pride-white/10 hover:border-pride-gold hover:bg-pride-white/5 transition-colors group"
            >
              <span className="font-sans font-bold text-xs text-pride-white group-hover:text-pride-gold transition-colors">
                {c.name}
              </span>
              <span className="font-mono text-[11px] text-pride-gold mt-0.5">{c.phone}</span>
              <span className="font-sans text-[10px] text-pride-white/50 mt-0.5">{c.note}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ── Header ── */}
      <div className="bg-pride-white border-b border-pride-black/5 pt-16 pb-14 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-pride-black/20" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-muted">Community Resources</span>
            <div className="w-12 h-px bg-pride-black/20" />
          </div>
          <h1 className="font-serif font-black text-5xl md:text-7xl mb-4 tracking-tight leading-none">
            Pontiac<br />
            <span className="italic text-pride-rose">Stands With You.</span>
          </h1>
          <p className="text-lg text-pride-muted max-w-2xl leading-relaxed mb-6">
            A living resource hub for the Pontiac LGBTQ+ community and everyone who needs it.
            Local resources first. Real specifics, not just org names.
          </p>
          <div className="inline-flex items-center gap-2 bg-pride-black/5 border border-pride-black/10 px-4 py-2 text-xs font-mono text-pride-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-pride-teal inline-block" />
            Pontiac now has Michigan's first openly gay mayor. This city is on your side.
          </div>
        </div>
      </div>

      {/* ── Disclaimer ── */}
      <div className="bg-pride-gold/10 border-b border-pride-gold/30 py-3 px-6">
        <p className="max-w-5xl mx-auto font-sans text-xs text-pride-ink/60 text-center">
          This page provides community resource information only — we are not a crisis service. If you are in immediate danger, call 911.
          Information is general, not legal or medical advice. <span className="text-pride-gold font-semibold">Last reviewed May 2026.</span>
        </p>
      </div>

      {/* ── Filters & Search ── */}
      <div className="bg-pride-white border-b border-pride-black/10 sticky top-[0px] z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          {/* Search */}
          <div className="relative mb-4">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-pride-muted" />
            <input
              type="text"
              placeholder="Search resources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-pride-black/20 bg-pride-cream font-sans text-sm text-pride-ink placeholder:text-pride-muted focus:outline-none focus:border-pride-gold"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-pride-muted hover:text-pride-ink">
                <X size={14} />
              </button>
            )}
          </div>

          {/* Identity filters */}
          <div className="mb-2">
            <p className="font-mono text-[9px] tracking-widest uppercase text-pride-muted mb-2">I am:</p>
            <div className="flex flex-wrap gap-2">
              {IDENTITY_FILTERS.map((f) => (
                <FilterBtn
                  key={f.id}
                  label={f.label}
                  active={identityFilter === f.id}
                  onClick={() => setIdentityFilter(identityFilter === f.id ? null : f.id)}
                />
              ))}
            </div>
          </div>

          {/* Need filters */}
          <div className="mb-2">
            <p className="font-mono text-[9px] tracking-widest uppercase text-pride-muted mb-2">I need:</p>
            <div className="flex flex-wrap gap-2">
              {NEED_FILTERS.map((f) => (
                <FilterBtn
                  key={f.id}
                  label={f.label}
                  active={needFilter === f.id}
                  onClick={() => setNeedFilter(needFilter === f.id ? null : f.id)}
                />
              ))}
            </div>
          </div>

          {/* Active filters bar */}
          {hasFilter && (
            <div className="flex items-center gap-3 pt-2 border-t border-pride-black/5 mt-2">
              <span className="text-xs font-mono text-pride-muted">
                {filtered.length} result{filtered.length !== 1 ? 's' : ''}
              </span>
              <button
                onClick={clearAll}
                className="text-xs font-mono text-pride-rose hover:underline flex items-center gap-1"
              >
                <X size={11} /> Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Resource Cards ── */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-pride-muted mb-4">No results for those filters.</p>
            <button onClick={clearAll} className="text-sm text-pride-gold hover:underline">
              Clear filters and show all resources
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <ResourceCard key={r.id} r={r} />
            ))}
          </div>
        )}
      </div>

      {/* ── Coming Out Section ── */}
      <div className="border-t border-pride-black/10 bg-pride-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-muted">Coming Out</span>
            <div className="flex-1 h-px bg-pride-black/10" />
          </div>

          <h2 className="font-serif font-black text-4xl md:text-5xl mb-4 tracking-tight">
            Figuring It Out.
          </h2>
          <p className="text-pride-muted mb-10 max-w-xl">
            Three tracks. No timeline required. No label required.
          </p>

          <div className="space-y-4">
            <ExpandSection
              title="Still figuring it out"
              subtitle="No pressure, no deadline, no right answer."
            >
              <div className="mt-6 space-y-4 font-sans text-sm text-pride-muted leading-relaxed">
                <p>Questioning is not a problem to solve. A lot of people spend years — or their whole lives — figuring out their identity, and that's okay. You don't need a label to deserve support or community.</p>
                <p>Some things that help: talking to a counselor (Affirmations offers this, sliding scale), reading other people's coming-out stories, spending time in LGBTQ+ spaces without any pressure to define yourself, and being patient with yourself.</p>
                <p>Online communities can also be a low-stakes starting point. The Trevor Project's TrevorSpace (thetrevorproject.org/trevorspace) is a moderated online community for LGBTQ+ young people. The LGBT National Hotline (1-888-843-4564) also takes calls from people who are just questioning and want to talk — not only from people in crisis.</p>
                <div className="mt-4 p-4 bg-pride-cream border-l-2 border-pride-gold">
                  <p className="font-semibold text-pride-ink">You don't have to know what you are to call a hotline, join a support group, or come to a Pride event. Everyone there was uncertain once.</p>
                </div>
              </div>
            </ExpandSection>

            <ExpandSection
              title="Coming out to people you know"
              subtitle="How to plan it, who to tell first, what to do if it goes badly."
            >
              <div className="mt-6 space-y-4 font-sans text-sm text-pride-muted leading-relaxed">
                <p><strong className="text-pride-ink">Tell the safest person first.</strong> Before you come out to anyone you're uncertain about, tell one person you know is safe. That gives you support before anything else happens.</p>
                <p><strong className="text-pride-ink">You don't have to come out all at once.</strong> Coming out is not a single event. You'll come out hundreds of times across your life — to coworkers, new friends, doctors, family members you haven't spoken to in years. Most people do it gradually.</p>
                <p><strong className="text-pride-ink">If it goes badly:</strong> If you are financially dependent on unsupportive family and feel unsafe, the Ruth Ellis Center (313-252-1950) serves LGBTQ+ youth up to 24 experiencing homelessness or housing instability. HAVEN (1-855-922-1274) serves people experiencing domestic violence including family-based violence. Lakeshore Legal Aid (1-888-783-8190) can help with legal questions.</p>
                <p><strong className="text-pride-ink">Elliott-Larsen protects you.</strong> Michigan's Elliott-Larsen Civil Rights Act was expanded in 2023 to include LGBTQ+ people. Discrimination in housing based on your identity is illegal in Michigan. If you face housing discrimination, contact Equality Michigan (1-313-537-7000).</p>
                <p>Affirmations (248-398-7105) runs coming-out support groups. The LGBT National Hotline (1-888-843-4564) can talk through the specifics of your situation with you before you decide.</p>
              </div>
            </ExpandSection>

            <ExpandSection
              title="Coming out at work or school"
              subtitle="Your Michigan rights, practical steps, and who to call."
            >
              <div className="mt-6 space-y-4 font-sans text-sm text-pride-muted leading-relaxed">
                <p><strong className="text-pride-ink">At work — you are legally protected in Michigan.</strong> The Elliott-Larsen Civil Rights Act expansion (2023) prohibits employment discrimination based on sexual orientation and gender identity. If your employer discriminates against you for being LGBTQ+, you have legal recourse. Contact Equality Michigan (1-313-537-7000) or Lakeshore Legal Aid (1-888-783-8190) for free guidance.</p>
                <p><strong className="text-pride-ink">Name and pronoun use at work.</strong> You can ask HR to update your name in internal systems. Michigan law does not require employers to use your name or pronouns, but Elliott-Larsen's hostile work environment provisions may apply if consistent misuse is severe. Document everything.</p>
                <p><strong className="text-pride-ink">At school — K-12.</strong> Michigan's Elliott-Larsen expansion covers public school students. GSA (Gender &amp; Sexuality Alliance) clubs are legally protected student organizations in public schools. If your school denies a GSA while allowing other student clubs, that is likely illegal under the Equal Access Act. GSA Network (gsanetwork.org) has resources for starting or defending a club.</p>
                <p><strong className="text-pride-ink">At school — college.</strong> Oakland University's Gender &amp; Sexuality Resource Center (248-370-3181) is open to community members. Most Michigan universities have similar centers.</p>
                <p><strong className="text-pride-ink">Trans-specific: name and gender marker at school.</strong> Michigan allows you to change your name on records without a court order in some contexts. For legal name changes, Wayne State OUTlaw (law.wayne.edu) runs free clinics for Michigan residents including Oakland County.</p>
              </div>
            </ExpandSection>
          </div>
        </div>
      </div>

      {/* ── Know Your Rights ── */}
      <div className="bg-pride-black text-pride-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-gold/60">Know Your Rights</span>
            <div className="flex-1 h-px bg-pride-white/10" />
          </div>

          <h2 className="font-serif font-black text-4xl md:text-5xl mb-4 tracking-tight">
            Michigan Law<br /><span className="italic text-pride-gold">Protects You.</span>
          </h2>
          <p className="text-pride-white/60 mb-2 text-sm">General information only — not legal advice. Contact an attorney or Lakeshore Legal Aid for your specific situation.</p>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-serif font-bold text-xl mb-3 text-pride-gold">Elliott-Larsen Civil Rights Act — 2023 Expansion</h3>
              <p className="font-sans text-sm text-pride-white/70 leading-relaxed">
                In 2023, Michigan expanded the Elliott-Larsen Civil Rights Act to explicitly protect LGBTQ+ people from discrimination in <strong className="text-pride-white">employment, housing, and public accommodation</strong> (restaurants, hotels, businesses open to the public). This is state law — it protects you regardless of federal policy. If you experience discrimination in any of these areas based on your sexual orientation or gender identity, you have legal recourse. File a complaint with the Michigan Department of Civil Rights or contact Equality Michigan (1-313-537-7000).
              </p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl mb-3 text-pride-gold">Hate Crimes</h3>
              <p className="font-sans text-sm text-pride-white/70 leading-relaxed">
                Michigan's hate crime law covers crimes motivated by sexual orientation and gender identity. If you are the victim of a crime you believe was targeted at you because of your identity, report it to police and also contact Fair Michigan Foundation (fairmi.org) — they work with prosecutors across the state specifically to ensure LGBTQ+ hate crimes are prosecuted. Equality Michigan (1-313-537-7000) can also help you navigate the reporting process.
              </p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl mb-3 text-pride-gold">Legal Name and Gender Marker Changes</h3>
              <p className="font-sans text-sm text-pride-white/70 leading-relaxed">
                In Michigan, a legal name change requires a court petition. Court filing fees apply — but Wayne State OUTlaw runs <strong className="text-pride-white">free name change clinics for Michigan residents including Oakland County</strong> (law.wayne.edu). Gender marker changes on your Michigan driver's license can be done at any Secretary of State office with a self-certification form — no surgery or physician letter required. On your Michigan birth certificate, a court order or physician statement is currently required.
              </p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl mb-3 text-pride-gold">Medical Rights</h3>
              <p className="font-sans text-sm text-pride-white/70 leading-relaxed">
                Michigan law prohibits healthcare discrimination based on sexual orientation and gender identity. You have the right to receive medical care without being denied based on your identity. If a provider refuses care, contact Equality Michigan or the Michigan Department of Civil Rights. For trans people: gender-affirming hormone therapy is available through Planned Parenthood Michigan on an informed consent basis (no therapist letter required).
              </p>
            </div>

            <div>
              <h3 className="font-serif font-bold text-xl mb-3 text-pride-gold">Asylum Seekers</h3>
              <p className="font-sans text-sm text-pride-white/70 leading-relaxed">
                LGBTQ+ people fleeing persecution in other countries may be eligible for asylum in the United States. Freedom House Detroit (313-964-4320) provides shelter and legal representation for asylum seekers. Michigan Immigrant Rights Center (269-381-2600) also provides immigration legal services. These are complex processes — contact these organizations early.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Submit a Resource ── */}
      <div className="bg-pride-cream border-t border-pride-black/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl mb-3">Know a resource we missed?</h2>
          <p className="text-pride-muted text-sm mb-6 max-w-xl mx-auto">
            This page is maintained by Pride in Pontiac and reviewed before each Pride season.
            Community submissions help keep it accurate.
          </p>
          <a
            href="mailto:prideinpontiac@gmail.com?subject=Resource%20Hub%20Submission&body=Resource%20name%3A%0APhone%2Fwebsite%3A%0AAddress%20%26%20hours%3A%0AWho%20it%20serves%3A%0AWhat%20it%20provides%3A%0A"
            className="inline-flex items-center gap-2 bg-pride-black text-pride-white px-8 py-4 font-sans font-bold text-sm uppercase tracking-wider hover:bg-pride-gold hover:text-pride-black transition-colors"
          >
            Submit a Resource
          </a>
          <p className="text-pride-muted text-xs mt-6 font-mono">
            Last reviewed: May 2026 · Pride in Pontiac / Broken Arrow Entertainment LLC
          </p>
        </div>
      </div>

    </div>
  );
}
