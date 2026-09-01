import { Link } from "react-router-dom";
import { ArrowRight, Mic2, HeartHandshake, Building2, Gift } from "lucide-react";
import { PrideStripe } from "../components/PrideStripe";

export function About() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen pb-32">
      {/* Header */}
      <div className="bg-pride-white border-b border-pride-black/5 pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-pride-black/20"></div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-muted">Who We Are</span>
            <div className="w-12 h-px bg-pride-black/20"></div>
          </div>
          <h1 className="font-serif font-black text-5xl md:text-7xl mb-6 tracking-tight">
            Community-Rooted.<br />
            <span className="italic text-pride-rose">Locally Led.</span>
          </h1>
          <p className="text-lg text-pride-muted max-w-2xl mx-auto leading-relaxed">
            We know what Pontiac's LGBTQ+ community needs because we are part of it. We don't just know this venue — we run it monthly.
          </p>
        </div>
      </div>

      <PrideStripe className="h-1.5 w-full opacity-50" />

      {/* Profiles */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-pride-white p-10 border border-pride-black/10 relative shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-pride-black text-pride-white flex items-center justify-center font-mono text-xl font-bold mb-8">
              CM
            </div>
            <h3 className="font-serif font-bold text-3xl mb-2">Cody McKenzie</h3>
            <span className="font-mono text-[10px] tracking-widest text-pride-gold uppercase block mb-8">
              Founder &middot; Broken Arrow Entertainment LLC
            </span>
            <ul className="space-y-4">
              {[
                "Gay-owned event production company based in Pontiac, MI",
                <span key="crofoot">Runs monthly drag & alternative shows at <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a> currently</span>,
                "Embedded local organizer with existing audience relationships",
                "Full operational familiarity with the venue",
                "Not an outside promoter — this is our home"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-sm text-pride-muted leading-relaxed">
                  <span className="text-pride-gold">&mdash;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-pride-white p-10 border border-pride-black/10 relative shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-pride-black text-pride-white flex items-center justify-center font-mono text-xl font-bold mb-8">
              SV
            </div>
            <h3 className="font-serif font-bold text-3xl mb-2">Stela Vulva</h3>
            <span className="font-mono text-[10px] tracking-widest text-pride-gold uppercase block mb-8">
              Co-Organizer &middot; Unorthodox Drag
            </span>
            <ul className="space-y-4">
              {[
                "Established drag brand with a loyal metro Detroit following",
                "Headlining performer with proven stage draw",
                "Deep connections to LGBTQ+ performer and community network",
                "Creative co-lead and booking connector for talent roster",
                "Active social presence amplifying event reach on platforms like TikTok"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-sm text-pride-muted leading-relaxed">
                  <span className="text-pride-gold">&mdash;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        <blockquote className="mt-16 bg-pride-black text-pride-white p-12 border-l-4 border-pride-gold shadow-xl max-w-4xl mx-auto">
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-center">
            "For decades Pontiac had its own queer bars and gathering spaces. They are gone. We are restoring what was lost. We are not pitching a dream. We are executing an event that is ready to run."
          </p>
        </blockquote>

        {/* State Tribute */}
        <div className="mt-16 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-pride-white border border-pride-black/10 p-10 shadow-sm">
          <img src="/images/events/tribute-group-photo.jpg" alt="Rep. Brenda Carter presenting the State of Michigan Special Tribute to Pride in Pontiac organizers" className="w-full md:w-2/5 rounded-sm shadow-lg object-cover max-h-[360px]" />
          <div className="md:w-3/5">
            <span className="font-mono text-[10px] tracking-widest uppercase text-pride-gold mb-3 block">State Recognition</span>
            <p className="text-pride-ink/80 leading-relaxed mb-4">
              The State of Michigan issued two Special Tribute proclamations recognizing Pride in Pontiac as "the city's first-ever grassroots LGBTQ+ Pride celebration" &mdash; signed by Governor Gretchen Whitmer, Lt. Governor Garlin Gilchrist II, State Senate President Pro Tempore Jeremy Moss, and State Representative Brenda Carter, presented live at the commencement.
            </p>
            <Link to="/#tribute" className="text-sm font-bold uppercase tracking-widest text-pride-ink hover:text-pride-gold transition-colors flex items-center gap-2">
              See the Full Tribute <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stand with Pontiac — multi-path CTA */}
      <section className="bg-pride-rose text-pride-white py-24 px-6 mt-12 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="w-12 h-px bg-pride-white/20"></div>
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-white/60">Be Part Of It</span>
            <div className="w-12 h-px bg-pride-white/20"></div>
          </div>

          <h2 className="font-serif font-black text-4xl md:text-6xl mb-6">Still Standing with Pontiac.</h2>
          <p className="text-lg text-pride-white/90 max-w-2xl mx-auto leading-relaxed mb-16">
            Pride in Pontiac 2026 happened because people showed up for it — as attendees, volunteers, vendors, sponsors, and donors. We're already building 2027. However you want in, here's your next step.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <Link to="/performers" className="group bg-pride-black/20 hover:bg-pride-black/30 border border-pride-white/10 p-6 transition-colors flex flex-col gap-4">
              <Mic2 size={22} className="text-pride-gold-light" />
              <div>
                <h3 className="font-serif font-bold text-lg mb-1">Relive the Lineup</h3>
                <p className="text-sm text-pride-white/70">See who performed at Pontiac's first Pride.</p>
              </div>
              <span className="mt-auto font-mono text-[10px] uppercase tracking-widest text-pride-gold-light flex items-center gap-2 group-hover:gap-3 transition-all">View Lineup <ArrowRight size={12} /></span>
            </Link>

            <Link to="/volunteers" className="group bg-pride-black/20 hover:bg-pride-black/30 border border-pride-white/10 p-6 transition-colors flex flex-col gap-4">
              <HeartHandshake size={22} className="text-pride-gold-light" />
              <div>
                <h3 className="font-serif font-bold text-lg mb-1">Volunteer in 2027</h3>
                <p className="text-sm text-pride-white/70">Get on the list for next year's event.</p>
              </div>
              <span className="mt-auto font-mono text-[10px] uppercase tracking-widest text-pride-gold-light flex items-center gap-2 group-hover:gap-3 transition-all">Sign Up <ArrowRight size={12} /></span>
            </Link>

            <Link to="/sponsors" className="group bg-pride-black/20 hover:bg-pride-black/30 border border-pride-white/10 p-6 transition-colors flex flex-col gap-4">
              <Building2 size={22} className="text-pride-gold-light" />
              <div>
                <h3 className="font-serif font-bold text-lg mb-1">Sponsor 2027</h3>
                <p className="text-sm text-pride-white/70">Put your brand behind the community, early.</p>
              </div>
              <span className="mt-auto font-mono text-[10px] uppercase tracking-widest text-pride-gold-light flex items-center gap-2 group-hover:gap-3 transition-all">Learn More <ArrowRight size={12} /></span>
            </Link>

            <Link to="/donate" className="group bg-pride-black/20 hover:bg-pride-black/30 border border-pride-white/10 p-6 transition-colors flex flex-col gap-4">
              <Gift size={22} className="text-pride-gold-light" />
              <div>
                <h3 className="font-serif font-bold text-lg mb-1">Donate</h3>
                <p className="text-sm text-pride-white/70">Every dollar helps fund next year's event.</p>
              </div>
              <span className="mt-auto font-mono text-[10px] uppercase tracking-widest text-pride-gold-light flex items-center gap-2 group-hover:gap-3 transition-all">Give Now <ArrowRight size={12} /></span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
