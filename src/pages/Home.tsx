import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Heart, CheckCircle } from "lucide-react";
import { PrideStripe } from "../components/PrideStripe";
import { CountdownTimer } from "../components/CountdownTimer";
import { Sparkles } from "../components/Sparkles";
import { EVENTBRITE_URL } from "../lib/eventLinks";

const PARTNERS = [
  "B. Nektar Meadery",
  "HopCat",
  "The Crofoot",
  "Weiss Spirits",
  "Joyology of Lake Orion",
  "Flagstar Strand Theatre",
  "Detroit Metro Times",
  "Oakland County Blog",
  "Pontiac City Council",
  "Oakland County Health Division",
];

export function Home() {
  return (
    <div className="bg-pride-cream text-pride-ink w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-pride-black text-pride-white min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 py-20">
        <PrideStripe className="absolute right-0 top-0 bottom-0 w-2 md:w-3" orientation="vertical" />
        <Sparkles count={25} colors={["#C8922A", "#FFF", "#FFD700", "#FFED00"]} />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-start gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-pride-gold font-mono text-xs md:text-sm tracking-[0.25em] uppercase"
          >
            <span className="max-w-[150px] md:max-w-none text-left">Broken Arrow Entertainment LLC &times; Unorthodox Drag</span>
            <div className="w-8 md:w-12 h-px bg-pride-gold opacity-60"></div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif leading-[1] tracking-tighter"
          >
            <span className="font-black text-rainbow text-7xl sm:text-8xl md:text-9xl block pb-2">Pride</span>
            <div className="flex items-center gap-3 md:gap-5 mt-2 flex-wrap">
              <span className="font-light text-4xl sm:text-5xl md:text-6xl text-pride-white/70">in</span> 
              <em className="font-bold text-pride-white text-6xl sm:text-7xl md:text-[100px]">Pontiac</em>
            </div>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <CountdownTimer targetDate="2026-08-14T12:00:00-04:00" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans font-light text-pride-white/60 text-lg md:text-xl max-w-[500px] leading-relaxed mt-4"
          >
            Michigan's newest LGBTQ+ Pride celebration. <br />
            August 14, 2026 &middot; <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors pointer-events-auto">The Crofoot</a>, Pontiac MI. <br />
            <span className="text-pride-white font-medium">Still Here. Still Proud.</span>
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="bg-pride-gold text-pride-black px-8 py-4 font-sans font-semibold text-sm hover:bg-pride-white transition-colors flex items-center justify-center gap-2 group shadow-xl">
              Get Tickets <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/sponsors" className="bg-pride-white/10 text-pride-white border border-pride-white/20 px-8 py-4 font-sans font-medium text-sm hover:bg-pride-white hover:text-pride-black transition-colors flex items-center justify-center gap-2">
              Become a Sponsor
            </Link>
          </motion.div>
        </div>

        {/* Info Bar at Bottom of Hero */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 bg-pride-black/40 border-t border-pride-white/10 backdrop-blur-md"
        >
          <div className="py-6 border-b md:border-b-0 md:border-r border-pride-white/10">
            <span className="block text-pride-gold font-mono text-[9px] tracking-widest uppercase mb-1">Date</span>
            <span className="text-pride-white font-medium text-[15px]">August 14, 2026</span>
          </div>
          <div className="py-6 border-b md:border-b-0 md:border-r border-pride-white/10 md:px-6">
            <span className="block text-pride-gold font-mono text-[9px] tracking-widest uppercase mb-1">Venue</span>
            <span className="text-pride-white font-medium text-[15px]"><a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a> <span className="opacity-50">&middot; Pontiac, MI</span></span>
          </div>
          <div className="py-6 md:px-6">
            <span className="block text-pride-gold font-mono text-[9px] tracking-widest uppercase mb-1">Organizers</span>
            <span className="text-pride-white font-medium text-[15px]">Broken Arrow Ent. &times; Unorthodox Drag</span>
          </div>
        </motion.div>
      </section>

      {/* Corporate / Venue Partnership Callout */}
      <section className="bg-pride-white py-24 px-6 border-b border-pride-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <span className="font-mono text-xs tracking-widest uppercase text-pride-gold mb-4 block">Official Venue Partnership</span>
             <h2 className="font-serif font-black text-4xl lg:text-5xl mb-6">Hosted at The Crofoot.</h2>
             <p className="text-lg text-pride-ink/80 leading-relaxed mb-6 font-light">
               We are proud to officially partner with <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-pride-gold transition-colors">The Crofoot</a> to host Pride in Pontiac 2026. As one of Michigan's premier live music and entertainment complexes, their infrastructure allows us to execute a safe, scalable, and fully accessible festival right in the heart of downtown.
             </p>
             <ul className="space-y-4 font-sans text-pride-ink/90">
               <li className="flex items-start gap-4"><CheckCircle size={20} className="text-pride-gold shrink-0 mt-0.5" /> <span className="font-medium">Professional security & crowd management</span></li>
               <li className="flex items-start gap-4"><CheckCircle size={20} className="text-pride-gold shrink-0 mt-0.5" /> <span className="font-medium">Full ADA accessibility on main floors</span></li>
               <li className="flex items-start gap-4"><CheckCircle size={20} className="text-pride-gold shrink-0 mt-0.5" /> <span className="font-medium">Premium sound & lighting production scale</span></li>
             </ul>
             
             <div className="mt-8">
               <Link to="/operations" className="text-sm font-bold uppercase tracking-widest text-pride-ink hover:text-pride-gold transition-colors flex items-center gap-2">
                 View Festival Operations Plan <ArrowRight size={16} />
               </Link>
             </div>
          </div>
          <div className="md:w-1/2 w-full aspect-video bg-pride-black/5 rounded-xl flex items-center justify-center border border-pride-black/10 overflow-hidden relative group">
             <div className="absolute inset-0 bg-gradient-to-t from-pride-black/80 via-pride-black/20 to-transparent flex flex-col items-center justify-end pb-8 z-10">
               <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-2">
                 <MapPin size={24} className="text-pride-white mb-2" />
                 <p className="font-mono uppercase tracking-widest text-xs font-bold text-pride-white">The Crofoot &middot; Downtown</p>
               </div>
             </div>
             <img src="/images/crofoot-skyline.jpg" alt="Downtown Pontiac skyline with The Crofoot marquee" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Intro Stats Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
             <div className="flex items-center gap-4 mb-12">
               <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-muted">The Problem</span>
               <div className="flex-1 h-px bg-pride-black/10"></div>
             </div>
             
             <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl text-pride-ink mb-16">
               Pontiac's LGBTQ+ community has nowhere local to go. <br/>
               <span className="italic font-bold text-pride-rose">We are restoring what was lost.</span>
             </h2>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="bg-pride-white p-10 border border-pride-black/5 shadow-sm">
                 <span className="font-serif font-black text-6xl text-pride-black block mb-4">0</span>
                 <p className="font-mono text-xs text-pride-gold uppercase tracking-[0.1em] mb-3">Community Hubs</p>
                 <p className="text-sm text-pride-muted leading-relaxed">Queer spaces and Pride events currently operating in Pontiac. The community must commute 20+ miles to finding gathering spaces.</p>
               </div>
               <div className="bg-pride-white p-10 border border-pride-black/5 shadow-sm">
                 <span className="font-serif font-black text-6xl text-pride-black block mb-4">~5.8k</span>
                 <p className="font-mono text-xs text-pride-gold uppercase tracking-[0.1em] mb-3">Pontiac Audience</p>
                 <p className="text-sm text-pride-muted leading-relaxed">Estimated LGBTQ+ adults living within Pontiac city limits alone, facing real transportation barriers to neighboring cities' events.</p>
               </div>
               <div className="bg-pride-white p-10 border border-pride-black/5 shadow-sm">
                 <span className="font-serif font-black text-6xl text-pride-black block mb-4">118k+</span>
                 <p className="font-mono text-xs text-pride-gold uppercase tracking-[0.1em] mb-3">Oakland County</p>
                 <p className="text-sm text-pride-muted leading-relaxed">Estimated LGBTQ+ adults in Oakland County with no local Pride serving their county seat. The demand is massive and unserved.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* The Event Teaser */}
      <section className="bg-pride-violet text-pride-white py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
          <div className="md:w-1/2">
             <div className="flex items-center gap-4 mb-10">
               <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-gold-light">The Solution</span>
               <div className="flex-1 h-px bg-pride-white/20"></div>
             </div>
             
             <h2 className="font-serif font-black text-4xl md:text-5xl lg:text-[64px] leading-tight mb-8">
               A Full Day of <br />Pride in Pontiac
             </h2>
             <p className="text-lg text-pride-white/80 leading-relaxed mb-10 max-w-xl">
               A day-and-night LGBTQ+ Pride celebration designed from day one as an annual Pontiac tradition. Hosted at <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a>, Pontiac's anchor entertainment complex.
             </p>

             <Link to="/schedule" className="w-fit bg-pride-gold text-pride-black px-8 py-3 font-sans font-semibold text-sm hover:bg-pride-white transition-colors flex items-center gap-3">
               View Schedule & Venues <ArrowRight size={16} />
             </Link>
          </div>

          <div className="md:w-5/12 grid grid-cols-1 gap-4">
            <div className="bg-pride-white/5 border border-pride-white/10 p-8 hover:bg-pride-white/10 transition-colors">
              <span className="inline-block px-3 py-1 bg-pride-gold text-pride-black font-mono text-[9px] uppercase tracking-widest font-bold mb-4">Daytime &middot; All Ages</span>
              <h3 className="font-serif font-bold text-2xl mb-3">Celebration & Community</h3>
              <p className="text-pride-white/70 text-sm leading-relaxed mb-4">Live drag performances, vendor marketplace featuring LGBTQ+ businesses, rapid testing & health resources, and a massive outdoor courtyard social hub.</p>
            </div>
            <div className="bg-pride-white/5 border border-pride-white/10 p-8 hover:bg-pride-white/10 transition-colors">
              <span className="inline-block px-3 py-1 bg-pride-gold text-pride-black font-mono text-[9px] uppercase tracking-widest font-bold mb-4">Evening &middot; 18+</span>
              <h3 className="font-serif font-bold text-2xl mb-3">Closing the Night</h3>
              <p className="text-pride-white/70 text-sm leading-relaxed mb-4">Unorthodox Drag's full roster of performers, closed out by Alise King. Full DJ sets, VIP lounge, reserved seating, and an unforgettable celebration running until 2 AM.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Actions */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif font-black text-4xl md:text-6xl mb-12">How You Can Help</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <Link to="/sponsors" className="group block bg-pride-white p-10 border border-pride-black/10 hover:border-pride-gold hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-pride-cream rounded-full flex items-center justify-center text-pride-gold mb-6 group-hover:scale-110 transition-transform">
                <Heart size={24} />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">Sponsor the Event</h3>
              <p className="text-sm text-pride-muted leading-relaxed mb-6">Invest in the community with full promotional runway exposure starting today. View our transparent budget & sponsor deck.</p>
              <span className="font-mono text-xs text-pride-black uppercase tracking-widest flex items-center gap-2 font-bold group-hover:text-pride-gold transition-colors">
                View Deck <ArrowRight size={14} />
              </span>
            </Link>

            <Link to="/vendors" className="group block bg-pride-white p-10 border border-pride-black/10 hover:border-pride-teal hover:shadow-xl transition-all">
<div className="w-12 h-12 bg-pride-cream rounded-full flex items-center justify-center text-pride-teal mb-6 group-hover:scale-110 transition-transform">
                <MapPin size={24} />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3">Become a Vendor</h3>
              <p className="text-sm text-pride-muted leading-relaxed mb-6">Are you an LGBTQ+ owned business, artisan, or community resource? Secure a space in our daytime marketplace.</p>
              <span className="font-mono text-xs text-pride-black uppercase tracking-widest flex items-center gap-2 font-bold group-hover:text-pride-teal transition-colors">
                Apply to Vend <ArrowRight size={14} />
              </span>
            </Link>

            <div className="group block bg-pride-black text-pride-white p-10 border border-pride-black hover:bg-pride-ink transition-all relative overflow-hidden">
              <div className="w-12 h-12 bg-pride-white/10 rounded-full flex items-center justify-center text-pride-gold mb-6 relative z-10">
                <Calendar size={24} />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-3 relative z-10">Attend Pride</h3>
              <p className="text-sm text-pride-white/60 leading-relaxed mb-8 relative z-10">GA starts at $20 (BOGO available). VIP packages available with reserved seating & meet and greets. Secure your spot at Pontiac's first pride.</p>
              <button className="bg-pride-gold text-pride-black px-6 py-3 font-sans font-medium text-sm w-full relative z-10 hover:bg-pride-white transition-colors text-center shadow-lg">
                Buy Tickets Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Wall */}
      <section className="bg-pride-black text-pride-white py-24 px-6 border-y border-pride-black/10">
        <div className="max-w-6xl mx-auto text-center">
          <span className="font-mono text-xs tracking-widest uppercase text-pride-gold mb-4 block">Community Backed</span>
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-14">Proudly Backed By</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-10">
            {PARTNERS.map((name) => (
              <div key={name} className="flex items-center justify-center px-2">
                <span className="font-serif font-bold text-lg md:text-xl text-pride-white/80 hover:text-pride-gold transition-colors leading-snug">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
