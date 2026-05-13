import { motion } from "motion/react";
import { Link } from "react-router-dom";
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
      </section>

      {/* Corporate Pride Retreat Context */}
      <section className="bg-pride-rose text-pride-white py-24 px-6 mt-12 w-full">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-white/60">Why Now</span>
            <div className="flex-1 h-px bg-pride-white/20"></div>
          </div>
          
          <h2 className="font-serif font-black text-4xl md:text-6xl mb-12">The Moment Is Ours.</h2>
          
          <div className="space-y-10">
            <div className="flex gap-6 items-start">
              <span className="text-pride-gold-light text-2xl">&diams;</span>
              <p className="text-lg leading-relaxed text-pride-white/90">
                <strong>Corporate Pride is retreating — local Pride is rising.</strong> Major national events saw sponsorships drop 40–50% in 2025 as large brands pulled back. Authentic, community-led local events are exactly where credible sponsors are moving. You're not competing with large-box retailers. You're replacing them.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-pride-gold-light text-2xl">&diams;</span>
              <p className="text-lg leading-relaxed text-pride-white/90">
                <strong>The infrastructure is already in place.</strong> Venue confirmed. Date locked. Performers booked. Existing monthly show audience already primed. This event runs regardless.
              </p>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-pride-gold-light text-2xl">&diams;</span>
              <p className="text-lg leading-relaxed text-pride-white/90">
                <strong>Local visibility is essential.</strong> As LGBTQ+ protections come under pressure nationwide, visible, local community celebration becomes an act of presence. It is time for Pontiac to stand loud and proud again.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/get-involved" className="inline-block bg-pride-black text-pride-white px-10 py-5 font-sans font-bold text-sm tracking-wider uppercase hover:bg-pride-gold hover:text-pride-black transition-colors">
              Stand with Pontiac
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
