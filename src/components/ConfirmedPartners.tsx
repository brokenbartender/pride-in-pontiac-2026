import { CONFIRMED_SPONSORS, COMMUNITY_PARTNERS, type Sponsor } from "../data/sponsors";

function SponsorMark({ sponsor, size, textColor }: { sponsor: Sponsor; size: "lg" | "md"; textColor: string }) {
  const textSize = size === "lg" ? "text-2xl md:text-3xl" : "text-lg md:text-xl";
  const maxWidth = size === "lg" ? 220 : 160;
  const maxHeight = size === "lg" ? 140 : 100;

  const content = sponsor.logo ? (
    <div className="flex flex-col items-center gap-3">
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        className="w-full object-contain"
        style={{ maxWidth, maxHeight }}
      />
      <span className={`font-serif font-bold text-[1.1rem] ${textColor} group-hover:text-pride-gold transition-colors`}>
        {sponsor.name}
      </span>
    </div>
  ) : (
    <span className={`font-serif font-bold ${textSize} ${textColor} group-hover:text-pride-gold transition-colors leading-snug`}>
      {sponsor.name}
    </span>
  );

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center px-4 py-2 text-center"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="group flex items-center justify-center px-4 py-2 text-center">
      {content}
    </div>
  );
}

export function ConfirmedPartners({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const textColor = theme === "dark" ? "text-pride-white/90" : "text-pride-ink/90";
  const labelColor = theme === "dark" ? "text-pride-white/50" : "text-pride-muted";
  const communyColor = theme === "dark" ? "text-pride-white/60" : "text-pride-muted";

  const gold = CONFIRMED_SPONSORS.filter((s) => s.tier === "Gold");
  const silver = CONFIRMED_SPONSORS.filter((s) => s.tier === "Silver");
  const inKind = CONFIRMED_SPONSORS.filter((s) => s.tier === "In-Kind");

  return (
    <div>
      {gold.length > 0 && (
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-gold text-center mb-8">Gold Sponsors</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {gold.map((s) => (
              <SponsorMark key={s.name} sponsor={s} size="lg" textColor={textColor} />
            ))}
          </div>
        </div>
      )}

      {silver.length > 0 && (
        <div className="mb-12">
          <p className={`font-mono text-[10px] tracking-[0.2em] uppercase ${labelColor} text-center mb-8`}>Silver Sponsors</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {silver.map((s) => (
              <SponsorMark key={s.name} sponsor={s} size="md" textColor={textColor} />
            ))}
          </div>
        </div>
      )}

      {inKind.length > 0 && (
        <div className="mb-12">
          <p className={`font-mono text-[10px] tracking-[0.2em] uppercase ${labelColor} text-center mb-8`}>Host Venue Partner</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {inKind.map((s) => (
              <SponsorMark key={s.name} sponsor={s} size="md" textColor={textColor} />
            ))}
          </div>
        </div>
      )}

      <div>
        <p className={`font-mono text-[10px] tracking-[0.2em] uppercase ${labelColor} text-center mb-6`}>Community & Media Partners</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {COMMUNITY_PARTNERS.map((name) => (
            <span key={name} className={`font-sans text-sm ${communyColor}`}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
