import { Link } from "react-router-dom";
import { ArrowRight, Sparkles as SparklesIcon } from "lucide-react";
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

      {/* Sponsor Spotlight */}
      <section className="bg-pride-white py-20 px-6 border-b border-pride-black/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img src="/images/events/vendor-bnektar.jpg" alt="B. Nektar Meadery pouring their alcohol-free Sober craft mocktail line at their Pride in Pontiac booth" className="w-full md:w-1/2 rounded-sm shadow-xl object-cover max-h-[500px]" />
          <div className="md:w-1/2">
            <span className="font-mono text-xs tracking-widest uppercase text-pride-gold mb-4 block">Gold Sponsor Spotlight</span>
            <h3 className="font-serif font-black text-3xl mb-4">B. Nektar Meadery</h3>
            <p className="text-pride-muted leading-relaxed">
              One of our Gold sponsors, pouring their alcohol-free "Sober" craft mocktail line at the daytime marketplace &mdash; exactly the kind of local, hands-on partnership that made this event work.
            </p>
          </div>
        </div>
      </section>

      {/* KimChi Chic Beauty Spotlight */}
      <section className="bg-pride-ink text-pride-white py-24 px-6 border-b border-pride-black/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <img src="/images/sponsors/kimchi-chic.png" alt="KimChi Chic Beauty logo" className="w-48 md:w-full max-w-[220px] object-contain" />
            </div>
            <div className="md:w-2/3">
              <span className="font-mono text-xs tracking-widest uppercase text-pride-gold-light mb-4 flex items-center gap-2">
                <SparklesIcon size={14} /> Official Backstage Glam Partner
              </span>
              <h3 className="font-serif font-black text-3xl md:text-4xl mb-4">A Special Thanks to KimChi Chic Beauty</h3>
              <p className="text-pride-white/70 leading-relaxed mb-6">
                KimChi Chic Beauty stocked our entire backstage vanity and sent every performer home with product &mdash; the kind of in-kind support that keeps a stage running and a lineup looking flawless.
              </p>
              <a
                href="https://kimchichicbeauty.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-pride-gold-light hover:text-pride-white transition-colors"
              >
                Visit KimChi Chic Beauty <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-pride-white/10">
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-pride-white/50 mb-4">Backstage Vanity &middot; ~49 Pieces</h4>
              <ul className="space-y-2 text-sm text-pride-white/80">
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>That White Powder</span><span className="text-pride-white/50">6</span></li>
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>Stage Proof Matte Setting Spray</span><span className="text-pride-white/50">8</span></li>
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>Stage Proof Liquid Liner, felt tip</span><span className="text-pride-white/50">8</span></li>
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>Undercover Hoe Corrector</span><span className="text-pride-white/50">6</span></li>
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>The Most Concealers, all shades</span><span className="text-pride-white/50">~6</span></li>
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>Puff Puff Pass, all shades</span><span className="text-pride-white/50">~9</span></li>
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>Glitter Sharts</span><span className="text-pride-white/50">~6</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-pride-white/50 mb-4">Take-Home & VIP Product</h4>
              <ul className="space-y-2 text-sm text-pride-white/80">
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>Performer take-home lippies, assorted shades</span><span className="text-pride-white/50">40</span></li>
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>Mini setting sprays for VIP bags</span><span className="text-pride-white/50">60</span></li>
                <li className="flex justify-between border-b border-pride-white/5 pb-2"><span>Super Bish Lash pairs, six styles</span><span className="text-pride-white/50">40</span></li>
              </ul>
            </div>
          </div>
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
