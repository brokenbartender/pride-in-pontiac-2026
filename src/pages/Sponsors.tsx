import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { GenderqueerStripe } from "../components/GenderqueerStripe";
import { motion } from "motion/react";
import { Sparkles } from "../components/Sparkles";
import { ConfirmedPartners } from "../components/ConfirmedPartners";

export function Sponsors() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen pb-32">
      {/* Thank You Hero */}
      <div className="bg-pride-black text-pride-white pt-24 pb-32 px-6 relative overflow-hidden">
        <GenderqueerStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 bg-pride-gold/30 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none"
        ></motion.div>
        <Sparkles count={15} colors={["#C8922A", "#FFF", "#FFD700"]} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-gold">2026 Corporate Partnerships</span>
            <div className="flex-1 h-px bg-pride-gold/20 max-w-sm"></div>
          </div>

          <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-[100px] leading-[0.9] mb-8 tracking-tighter">
            Thank You for <br className="hidden md:block"/>
            <span className="italic text-pride-white font-bold">Investing.</span>
          </h1>
          <p className="text-xl md:text-2xl text-pride-white/70 max-w-2xl leading-relaxed mb-12 font-light">
            The sponsors below closed the gap between structural event costs and accessible community ticket revenue &mdash; and made Pontiac's first Pride possible.
          </p>
        </div>
      </div>

      {/* Confirmed Partners */}
      <section className="bg-pride-cream py-20 px-6 border-b border-pride-black/10">
        <div className="max-w-6xl mx-auto text-center">
          <span className="font-mono text-xs tracking-widest uppercase text-pride-gold mb-4 block">2026 Sponsors</span>
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-14">Thank You to Our Partners</h2>
          <ConfirmedPartners theme="light" />
        </div>
      </section>

      {/* 2027 Soft CTA */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="font-serif font-black text-4xl md:text-5xl mb-6">Sponsoring in 2027?</h2>
        <p className="text-pride-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          We're planning our second year now. If your business wants to align with Oakland County's newest LGBTQ+ Pride celebration, reach out early &mdash; returning sponsors and title-tier interest get first right of refusal on placement.
        </p>
        <a
          href="mailto:baentertainmentMI@gmail.com?subject=2027%20Sponsorship%20Interest"
          className="inline-flex items-center gap-3 bg-pride-black text-pride-white px-10 py-5 font-bold tracking-wide uppercase text-sm hover:bg-pride-gold hover:text-pride-black transition-colors"
        >
          Email Us About 2027 <ArrowRight size={18} />
        </a>
        <p className="text-pride-muted/70 text-sm mt-6">
          Or use the <Link to="/get-involved" className="underline hover:text-pride-gold transition-colors">general inquiry form</Link>.
        </p>
      </section>
    </div>
  );
}
