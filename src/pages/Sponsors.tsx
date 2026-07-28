import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Building2, Eye, ShieldCheck, Target, Users, Check, CreditCard, Megaphone } from "lucide-react";
import { GenderqueerStripe } from "../components/GenderqueerStripe";
import { motion } from "motion/react";
import { Sparkles } from "../components/Sparkles";
import { ConfirmedPartners } from "../components/ConfirmedPartners";
import {
  SPONSOR_TITLE_CHECKOUT_URL,
  SPONSOR_GOLD_CHECKOUT_URL,
  SPONSOR_SILVER_CHECKOUT_URL,
  SPONSOR_COMMUNITY_150_CHECKOUT_URL,
  SPONSOR_COMMUNITY_250_CHECKOUT_URL,
  SPONSOR_DIGITAL_100_CHECKOUT_URL,
} from "../lib/eventLinks";

export function Sponsors() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen pb-32">
      {/* Premium Corporate Hero */}
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
            Invest in <br className="hidden md:block"/>
            <span className="italic text-pride-white font-bold">Community.</span>
          </h1>
          <p className="text-xl md:text-2xl text-pride-white/70 max-w-2xl leading-relaxed mb-12 font-light">
            Align your brand with Oakland County's newest LGBTQ+ Pride celebration. Verified reach. Unmatched brand loyalty. Turnkey execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#tiers" className="bg-pride-gold text-pride-black px-10 py-5 font-bold tracking-wide uppercase text-sm hover:bg-pride-white transition-colors flex items-center justify-center gap-3 w-fit">
              View Sponsorship Tiers <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Confirmed Partners */}
      <section className="bg-pride-cream py-20 px-6 border-b border-pride-black/10">
        <div className="max-w-6xl mx-auto text-center">
          <span className="font-mono text-xs tracking-widest uppercase text-pride-gold mb-4 block">Already Committed</span>
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-14">Our Confirmed Partners</h2>
          <ConfirmedPartners theme="light" />
        </div>
      </section>

      {/* The Corporate Value Proposition */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-6">The Corporate Advantage</h2>
          <p className="text-pride-muted text-lg max-w-3xl leading-relaxed">As large-scale civic organizations retreat from Pride events nationwide — major national sponsorships dropped 40&ndash;50% in 2025 as large brands pulled back — conscious consumers are shifting their fierce brand loyalty to the companies that show up locally. You're not competing with large-box retailers here. You're replacing them.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pride-white p-10 border border-pride-black/10 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-12 h-12 bg-pride-cream rounded-none flex items-center justify-center text-pride-teal mb-8 group-hover:scale-110 transition-transform">
              <Users size={24} />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4">An Untapped Market</h3>
            <p className="text-sm text-pride-muted leading-relaxed">There are an estimated 118,000+ LGBTQ+ adults residing in Oakland County. Until now, there has been zero local Pride event in the county seat to serve them. Reach them first.</p>
          </div>
          <div className="bg-pride-white p-10 border border-pride-black/10 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-12 h-12 bg-pride-cream rounded-none flex items-center justify-center text-pride-rose mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4">Unmatched Loyalty</h3>
            <p className="text-sm text-pride-muted leading-relaxed">71% of LGBTQ+ consumers say they are more likely to interact with an online ad that has an LGBTQ+ presence. They actively seek, reward, and protect brands that invest in their community's joy.</p>
          </div>
          <div className="bg-pride-white p-10 border border-pride-black/10 shadow-sm hover:shadow-xl transition-shadow group">
            <div className="w-12 h-12 bg-pride-cream rounded-none flex items-center justify-center text-pride-gold mb-8 group-hover:scale-110 transition-transform">
              <BarChart3 size={24} />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4">Audited Metrics</h3>
            <p className="text-sm text-pride-muted leading-relaxed">Unlike scattered grassroots efforts, we are leveraging the infrastructure of a legacy venue (<a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a>) with audited, verified social followings and professional paid advertising pipelines.</p>
          </div>
        </div>
      </section>

      {/* Verifiable Reach Metrics */}
      <section className="bg-pride-white border-y border-pride-black/10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-serif font-black text-4xl mb-6">Verifiable Reach & Amplification</h2>
              <p className="text-pride-muted text-lg leading-relaxed mb-8">
                Your partnership isn't just about the day of the event. Sponsors are embedded automatically into our digital rollout from the moment the contract is signed through the end of August. 
              </p>
              
              <ul className="space-y-6 list-none p-0">
                <li className="flex gap-4">
                  <span className="text-pride-gold font-bold">01.</span>
                  <div>
                    <h4 className="font-bold text-pride-ink">Co-Promoted Digital Assets</h4>
                    <p className="text-sm text-pride-muted">Leveraging <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a>'s 86,000+ combined social following alongside custom geo-targeted paid social ads reaching 5-15k users.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-pride-gold font-bold">02.</span>
                  <div>
                    <h4 className="font-bold text-pride-ink">Official Venue Partner Visibility Guarantee</h4>
                    <p className="text-sm text-pride-muted">All primary sponsorship tiers include guaranteed logo placements across shared venue promotional material, tickets pages, and email blasts.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-pride-gold font-bold">03.</span>
                  <div>
                    <h4 className="font-bold text-pride-ink">Press & Media Integration</h4>
                    <p className="text-sm text-pride-muted">Active PR pitches to Between the Lines (18.6k circulation) and the Detroit Regional LGBT Chamber of Commerce business networks.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-pride-black text-pride-white p-12 shadow-2xl relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-pride-gold"></div>
                <div className="mb-8">
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-white/40 block mb-2">Estimated Brand Impressions</span>
                  <div className="font-serif font-black text-6xl md:text-7xl text-pride-gold-light">5k - 10k+</div>
                  <p className="text-sm text-pride-white/60 mt-4 leading-relaxed max-w-sm">
                    Combined across primary digital channels, paid social placement, print, and in-person foot traffic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section id="tiers" className="bg-pride-cream border-b border-pride-black/5 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-serif font-black text-5xl mb-6">Ready-to-Deploy Packages</h2>
            <p className="text-pride-muted max-w-2xl mx-auto text-lg">Secure your exclusivity early. All tiers include full promotional exposure leading up to the historic event date.</p>
            <p className="text-pride-muted/70 max-w-xl mx-auto text-sm mt-4">Card checkout below includes a small processing fee so your full commitment reaches the event. Prefer to pay by check or ACH with no fee? <a href="mailto:baentertainmentMI@gmail.com?subject=Sponsorship%20Payment%20by%20Check%2FACH" className="underline hover:text-pride-gold transition-colors">Email us</a> to arrange it.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Title Tier */}
            <motion.div variants={itemVariants} className="bg-pride-black text-pride-white p-10 flex flex-col relative shadow-2xl transform lg:-translate-y-4 premium-shimmer z-10 overflow-hidden group">
              <Sparkles count={10} colors={["#C8922A", "#FFF", "#FFD700"]} />
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-pride-gold/20 blur-[50px] rounded-full group-hover:bg-pride-gold/30 transition-colors pointer-events-none"></div>

              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-gold mb-4 flex items-center gap-2 relative z-10"><Target size={14}/> Exclusive Naming Rights</span>
              <h3 className="font-serif font-bold text-3xl mb-2 relative z-10">Title Sponsor</h3>
              <div className="font-serif font-black text-5xl mb-1 relative z-10">$2,500<span className="text-2xl text-pride-white/50">+</span></div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-pride-white/40 mb-8 pb-8 border-b border-pride-white/10 relative z-10">Card checkout: $2,574.97 <span className="normal-case tracking-normal">(covers processing fee)</span></p>
              
              <ul className="space-y-5 mb-10 flex-grow font-sans text-[15px] relative z-10">
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-white/90">"Presented by [Your Company]" naming rights</span></li>
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-white/90">Premium logo placement on all assets universally</span></li>
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-white/90">Premium Main Stage activation footprint</span></li>
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-white/90">VIP Table for 4 guests & 4 Drink Tickets</span></li>
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-white/90">Verbal stage recognition directly from headliners</span></li>
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-white/90">First right of refusal for 2027 (Scale upgrade)</span></li>
              </ul>
              <a href={SPONSOR_TITLE_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-pride-gold text-pride-black py-4 font-bold uppercase tracking-wider text-sm hover:bg-pride-white transition-colors relative z-10 flex items-center justify-center gap-2">
                <CreditCard size={16} /> Pay by Card
              </a>
              <a href="mailto:baentertainmentMI@gmail.com?subject=Title%20Sponsorship%20Commitment" className="w-full text-center text-pride-white/50 hover:text-pride-white text-xs font-mono uppercase tracking-widest mt-3 relative z-10">Or request an invoice</a>
            </motion.div>

            {/* Gold Tier */}
            <motion.div variants={itemVariants} className="bg-pride-white text-pride-ink border border-pride-gold/40 p-10 flex flex-col relative shadow-[0_0_0_1px_rgba(200,146,42,0.2)]">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-gold mb-4 flex items-center gap-2">High Visibility</span>
              <h3 className="font-serif font-bold text-3xl mb-2">Gold Tier</h3>
              <div className="font-serif font-black text-5xl mb-1">$1,000</div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-pride-muted mb-8 pb-8 border-b border-pride-black/10">Card checkout: $1,030.18 <span className="normal-case tracking-normal">(covers processing fee)</span></p>
              
              <ul className="space-y-5 mb-10 flex-grow font-sans text-[15px]">
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-muted">Logo on primary banners and digital event page</span></li>
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-muted">Dedicated activation booth (Courtyard or Indoor)</span></li>
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-muted">Stage mention during daytime & evening keynotes</span></li>
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-muted">Minimum 3 dedicated social media spotlights</span></li>
                <li className="flex items-start gap-3"><Check size={18} className="text-pride-gold mt-0.5 shrink-0" /> <span className="text-pride-muted">VIP access for 2 guests</span></li>
              </ul>
              <a href={SPONSOR_GOLD_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-pride-black text-pride-white py-4 font-bold uppercase tracking-wider text-sm hover:bg-pride-gold hover:text-pride-black transition-colors flex items-center justify-center gap-2">
                <CreditCard size={16} /> Pay by Card
              </a>
              <a href="mailto:baentertainmentMI@gmail.com?subject=Gold%20Sponsorship%20Commitment" className="w-full text-center text-pride-muted hover:text-pride-ink text-xs font-mono uppercase tracking-widest mt-3">Or request an invoice</a>
            </motion.div>

            {/* Silver, Community & Digital */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              <div className="bg-pride-white text-pride-ink border border-pride-black/10 p-6 shadow-sm flex-grow">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-muted mb-2 block">Brand Presence</span>
                <h3 className="font-serif font-bold text-2xl mb-1">Silver Tier</h3>
                <div className="font-serif font-black text-3xl mb-1 text-pride-ink">$500</div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-pride-muted mb-3 pb-3 border-b border-pride-black/10">Card checkout: $515.24 <span className="normal-case">(covers fee)</span></p>
                <ul className="space-y-2 mb-4 text-sm text-pride-muted">
                  <li className="flex items-start gap-2"><Check size={14} className="text-pride-gold mt-0.5 shrink-0" /> Standard logo placement</li>
                  <li className="flex items-start gap-2"><Check size={14} className="text-pride-gold mt-0.5 shrink-0" /> Social media group shoutout</li>
                  <li className="flex items-start gap-2"><Check size={14} className="text-pride-gold mt-0.5 shrink-0" /> Vendor table/footprint</li>
                </ul>
                <a href={SPONSOR_SILVER_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-sm tracking-widest text-pride-ink hover:text-pride-gold uppercase flex items-center gap-2">Pay by Card <ArrowRight size={14}/></a>
                <a href="mailto:baentertainmentMI@gmail.com?subject=Silver%20Sponsorship" className="block text-pride-muted hover:text-pride-ink text-xs font-mono uppercase tracking-widest mt-2">Or request an invoice</a>
              </div>

              <div className="bg-pride-white text-pride-ink border border-pride-black/10 p-6 shadow-sm flex-grow">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-rose mb-2 block">Accessible Support</span>
                <h3 className="font-serif font-bold text-2xl mb-1">Community Partner</h3>
                <div className="font-serif font-black text-3xl mb-1 text-pride-ink">$150 - $250</div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-pride-muted mb-3 pb-3 border-b border-pride-black/10">Card checkout includes processing fee</p>
                <ul className="space-y-2 mb-4 text-sm text-pride-muted">
                  <li className="flex items-start gap-2"><Check size={14} className="text-pride-gold mt-0.5 shrink-0" /> Program text listing & logo</li>
                  <li className="flex items-start gap-2"><Check size={14} className="text-pride-gold mt-0.5 shrink-0" /> Perfect for local small businesses</li>
                  <li className="flex items-start gap-2"><Check size={14} className="text-pride-gold mt-0.5 shrink-0" /> Includes basic marketplace booth</li>
                </ul>
                <div className="flex flex-wrap gap-4 mb-2">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-pride-muted">Basic ($150)</span>
                    <a href={SPONSOR_COMMUNITY_150_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-sm tracking-widest text-pride-rose hover:text-pride-ink uppercase flex items-center gap-2">Pay $154.79 <ArrowRight size={14}/></a>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-pride-muted">Expanded Booth ($250)</span>
                    <a href={SPONSOR_COMMUNITY_250_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-sm tracking-widest text-pride-rose hover:text-pride-ink uppercase flex items-center gap-2">Pay $257.78 <ArrowRight size={14}/></a>
                  </div>
                </div>
                <a href="mailto:baentertainmentMI@gmail.com?subject=Community%20Partner%20Sponsorship" className="block text-pride-muted hover:text-pride-ink text-xs font-mono uppercase tracking-widest mt-2">Or request an invoice</a>
              </div>

              <div className="bg-pride-white text-pride-ink border border-pride-black/10 p-6 shadow-sm flex-grow">
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-teal mb-2 flex items-center gap-2"><Megaphone size={12} /> No Booth Required</span>
                <h3 className="font-serif font-bold text-2xl mb-1">Digital Partner</h3>
                <div className="font-serif font-black text-3xl mb-1 text-pride-ink">$100</div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-pride-muted mb-3 pb-3 border-b border-pride-black/10">Card checkout: $103.30 <span className="normal-case">(covers fee)</span></p>
                <p className="text-sm text-pride-muted mb-4 leading-relaxed">
                  Logo and link on the website and printed program — an ad placement or a straight-up donation, whichever you'd rather call it. No table needed.
                </p>
                <a href={SPONSOR_DIGITAL_100_CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="font-bold text-sm tracking-widest text-pride-teal hover:text-pride-ink uppercase flex items-center gap-2">Pay by Card <ArrowRight size={14}/></a>
                <a href="mailto:baentertainmentMI@gmail.com?subject=Digital%20Partner%20-%20%24100" className="block text-pride-muted hover:text-pride-ink text-xs font-mono uppercase tracking-widest mt-2">Or request an invoice</a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Custom Corporate Activations Box */}
          <div className="mt-12 bg-pride-black text-pride-white p-8 flex flex-col md:flex-row items-center justify-between gap-8 border-t-4 border-pride-teal">
            <div>
              <h3 className="font-serif font-bold text-2xl mb-2">Need a Custom Corporate Activation?</h3>
              <p className="text-pride-white/70 text-sm max-w-2xl">We excel at building bespoke on-site experiences for enterprise partners. From styling the VIP Vernors Room lounge to branded photo-booth step-and-repeats, our production team can execute custom experiential marketing for your brand.</p>
            </div>
            <Link to="/contact" className="shrink-0 bg-pride-teal text-pride-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-pride-white hover:text-pride-teal transition-colors whitespace-nowrap">
              Discuss Custom Build
            </Link>
          </div>

        </div>
      </section>

      {/* Transparent Budget Box */}
      <section className="bg-pride-ink text-pride-white py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-white/50">Fiscal Responsibility</span>
              <div className="flex-1 h-px bg-pride-white/20"></div>
            </div>
            <h2 className="font-serif font-black text-5xl mb-8 leading-tight">Complete Financial Transparency.</h2>
            <p className="text-pride-white/80 leading-relaxed mb-6 font-light text-lg">We don't expect corporations to write blank checks. Your sponsorship serves a specific, accountable purpose: bridging the exact gap between structural event costs and accessible community ticket revenue.</p>
            <p className="text-pride-gold-light font-mono text-xs tracking-widest uppercase">We are fully ready to execute. You fund the finish line.</p>
          </div>

          <div className="bg-pride-white/5 p-10 border border-pride-white/10 shadow-2xl">
            <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-white/60 mb-8 border-b border-pride-white/10 pb-4">Event Operations Budget: $7,460 Total</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-end border-b border-pride-white/5 pb-3">
                <span className="text-[15px] font-medium text-pride-white/90">Talent & Stage Performers</span>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-pride-white/40 mr-4">43%</span>
                  <span className="font-serif font-bold text-2xl text-pride-white">$3,200</span>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-pride-white/5 pb-3">
                <span className="text-[15px] font-medium text-pride-white/90">Venue & Security Rentals</span>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-pride-white/40 mr-4">23%</span>
                  <span className="font-serif font-bold text-2xl text-pride-white">$1,700</span>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-pride-white/5 pb-3">
                <span className="text-[15px] font-medium text-pride-white/90">Marketing, Press & Print</span>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-pride-white/40 mr-4">21%</span>
                  <span className="font-serif font-bold text-2xl text-pride-white">$1,600</span>
                </div>
              </div>
              <div className="flex justify-between items-end border-b border-pride-white/5 pb-3">
                <span className="text-[15px] font-medium text-pride-white/90">General Operations</span>
                <div className="text-right">
                  <span className="font-mono text-[10px] text-pride-white/40 mr-4">13%</span>
                  <span className="font-serif font-bold text-2xl text-pride-white">$960</span>
                </div>
              </div>
            </div>

            <div className="bg-pride-black p-8 border-l-4 border-pride-gold shadow-inner">
              <span className="font-mono text-[10px] uppercase tracking-widest text-pride-white/50 block mb-3">Hard Sponsorship Gap to Close</span>
              <div className="font-serif font-black text-5xl text-pride-gold-light">$3,710</div>
              <p className="text-[13px] text-pride-white/60 mt-4 leading-relaxed">
                Projected ticket and vendor revenue covers the first ~50%. Your organization's sponsorship closes this remaining vital gap ensuring flawless execution.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
