import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, Star, Clock, ExternalLink, Users, Building2 } from "lucide-react";
import { TransgenderStripe } from "../components/TransgenderStripe";
import { FAQAccordion } from "../components/FAQAccordion";
import { EVENTBRITE_URL } from "../lib/eventLinks";

export function Tickets() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What time does the event start?",
      answer: "Doors open at noon. The community portion runs 12–8:30 PM. The evening show starts at 9 PM and is 21+ only. GA tickets ($12 early bird / $15 general) get you in from 2 PM through close."
    },
    {
      question: "What's the Early Bird deal?",
      answer: "Early Bird GA is $12 — that's $3 off the regular $15 price. Limited quantity. Once they're gone, they're gone. Buy now on Eventbrite to lock in the lower price."
    },
    {
      question: "Can I come just for the evening show?",
      answer: "Yes. Late Night entry is $25. You must be 21+ with a valid ID. Available online in advance or at the door after 9 PM."
    },
    {
      question: "What does VIP / Pride Patron include?",
      answer: "Pride Patron is $40 and is presale only — no VIP at the door. Includes reserved seating in the VIP lounge, one drink ticket, and meet & greet access with performers. Extremely limited."
    },
    {
      question: "Is there re-entry?",
      answer: "Yes, with a valid wristband that matches your ticket tier. Wristbands are checked at re-entry."
    },
    {
      question: "My button isn't opening Eventbrite — what do I do?",
      answer: "Your browser may be blocking popups. If the button doesn't open, go directly to Eventbrite.com and search 'Pride in Pontiac 2026', or copy this link: eventbrite.com/e/pride-in-pontiac-2026-still-here-still-proud-tickets-1989365764554"
    }
  ];

  const timeline = [
    { time: "12:00 PM", label: "Doors Open", detail: "Walk up, no ticket needed — enjoy the community portion of the day", color: "text-[#21B1FF]", border: "border-[#21B1FF]" },
    { time: "2:00 PM", label: "GA Begins", detail: "GA wristband required to enter or stay · $12 early bird / $15 general", color: "text-[#FFD800]", border: "border-[#FFD800]" },
    { time: "8:30 PM", label: "Wristband Sweep", detail: "21+ check begins · Late Night wristband required to stay", color: "text-[#FF218C]", border: "border-[#FF218C]" },
    { time: "9:00 PM", label: "Late Night Show", detail: "$25 · 21+ only with valid ID · headlining performers", color: "text-purple-400", border: "border-purple-400" },
    { time: "Close", label: "Pride Patron VIP", detail: "Reserved lounge · drink ticket · meet & greet · presale only", color: "text-pride-gold", border: "border-pride-gold" },
  ];

  const tiers = [
    {
      label: "GA Early Bird",
      price: "$12",
      wasPrize: "$15",
      badge: "Best Deal",
      sub: "Online only · limited quantity",
      desc: "Lock in the lowest price before they're gone. Full GA access from 2 PM through close.",
      perks: [
        "Entry from 2 PM through close",
        "Full festival & vendor access",
        "Save $3 vs regular GA",
        "Valid through wristband sweep",
      ],
      cta: "Get Early Bird — $12",
      href: EVENTBRITE_URL,
      accent: "#FFD800",
      dark: false,
      featured: true,
    },
    {
      label: "GA General",
      price: "$15",
      wasPrize: null,
      badge: null,
      sub: "Online · available until day of",
      desc: "Standard GA ticket. Full access from 2 PM through the evening show.",
      perks: [
        "Entry from 2 PM through close",
        "Full festival & vendor access",
        "Valid through wristband sweep",
      ],
      cta: "Buy GA — $15",
      href: EVENTBRITE_URL,
      accent: "#FFD800",
      dark: false,
      featured: false,
    },
    {
      label: "Late Night",
      price: "$25",
      wasPrize: null,
      badge: null,
      sub: "21+ only · ID required",
      desc: "Come for the evening headlining show. Online or at door after 9 PM.",
      perks: [
        "Entry from 9 PM",
        "Headlining drag performances",
        "21+ required · valid ID checked",
      ],
      cta: "Buy Late Night — $25",
      href: EVENTBRITE_URL,
      accent: "#FF218C",
      dark: false,
      featured: false,
    },
    {
      label: "Pride Patron",
      price: "$40",
      wasPrize: null,
      badge: "VIP",
      sub: "Presale only · extremely limited",
      desc: "The full experience. Reserved lounge seating, drink ticket, and meet & greet with performers. No VIP at the door.",
      perks: [
        "Reserved VIP lounge seating",
        "1 complimentary drink ticket",
        "Meet & greet with performers",
        "Priority entry",
        "Presale only — no door VIP",
      ],
      cta: "Buy Pride Patron — $40",
      href: EVENTBRITE_URL,
      accent: "#c8922a",
      dark: true,
      featured: false,
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#0A0A0A] min-h-screen relative overflow-hidden">
      <TransgenderStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />

      {/* Hero */}
      <section className="bg-[#0A0A0A] text-white pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40 mb-4">August 14, 2026 · The Crofoot · Pontiac, MI</p>
          <h1 className="font-serif font-black text-5xl md:text-7xl mb-4 leading-none">
            Get Your<br /><span className="text-[#FFD800]">Tickets.</span>
          </h1>
          <p className="text-white/60 mb-10 max-w-xl text-lg">Early Bird GA is $12 — save $3 before they sell out. VIP is presale only and extremely limited.</p>
          <div className="flex flex-wrap gap-4">
            <a
              href={EVENTBRITE_URL}
              onClick={(e) => { e.preventDefault(); window.open(EVENTBRITE_URL, '_blank', 'noopener,noreferrer'); }}
              className="bg-[#FFD800] text-[#0A0A0A] font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              Buy on Eventbrite <ExternalLink size={16} />
            </a>
            <a href="#event-flow"
              className="border-2 border-white/30 text-white font-bold uppercase tracking-widest py-4 px-8 hover:bg-white/10 transition-colors">
              See Event Flow
            </a>
          </div>
          <p className="mt-4 text-white/30 text-xs font-mono">
            Having trouble? Go to eventbrite.com and search "Pride in Pontiac 2026"
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section id="event-flow" className="py-20 px-6 bg-[#0A0A0A] border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-black text-3xl text-white mb-12 flex items-center gap-3">
            <Clock size={28} className="text-[#FFD800]" /> Event Flow — August 14
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className={`border-l-4 ${item.border} pl-6 pb-10 relative`}>
                <p className={`font-mono text-xs uppercase tracking-widest mb-1 ${item.color}`}>{item.time}</p>
                <p className="font-serif font-bold text-white text-xl mb-1">{item.label}</p>
                <p className="text-white/60 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs font-mono mt-4">Daytime (12–8:30 PM) is all ages. 9 PM onward is 21+ only with valid ID.</p>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section id="get-tickets" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">Choose Your Experience</h2>
            <p className="text-gray-500 text-lg">Early Bird ends when they sell out. VIP ends before the event.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`p-8 flex flex-col border-2 shadow-sm relative ${
                  tier.featured ? "border-[#FFD800] shadow-[0_0_30px_rgba(255,216,0,0.15)]" : ""
                } ${tier.dark ? "bg-[#111] text-white border-white/10" : "bg-white border-black/10"}`}
              >
                {tier.badge && (
                  <div
                    className="absolute -top-3 left-6 text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1"
                    style={{ backgroundColor: tier.accent, color: tier.dark ? 'white' : '#0A0A0A' }}
                  >
                    {tier.badge}
                  </div>
                )}

                <p className="font-mono text-[10px] uppercase tracking-widest mb-2 mt-2" style={{ color: tier.accent }}>{tier.sub}</p>
                <h3 className="font-serif font-bold text-xl mb-3">{tier.label}</h3>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-sans font-black text-4xl">{tier.price}</span>
                  {tier.wasPrize && (
                    <span className="text-gray-400 line-through text-lg">{tier.wasPrize}</span>
                  )}
                </div>
                {tier.wasPrize && (
                  <p className="text-xs font-mono text-[#078d70] font-bold mb-4">You save $3 — limited qty</p>
                )}

                <p className={`text-sm mb-6 flex-1 leading-relaxed ${tier.dark ? "text-white/60" : "text-gray-500"}`}>{tier.desc}</p>

                <ul className="space-y-2 mb-8">
                  {tier.perks.map((perk) => (
                    <li key={perk} className={`flex items-start gap-2 text-sm font-medium ${tier.dark ? "text-white/80" : ""}`}>
                      <ShieldCheck size={15} className="shrink-0 mt-0.5" style={{ color: tier.accent }} />
                      {perk}
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.href}
                  onClick={(e) => { e.preventDefault(); window.open(tier.href!, '_blank', 'noopener,noreferrer'); }}
                  className="w-full py-3 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-colors mt-auto cursor-pointer hover:opacity-90"
                  style={{
                    backgroundColor: tier.accent,
                    color: tier.accent === '#FFD800' ? '#0A0A0A' : 'white',
                  }}
                >
                  {tier.cta} <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-400 text-xs font-mono mt-8">
            All tickets sold on Eventbrite. If the button doesn't open, go to eventbrite.com and search "Pride in Pontiac 2026".
          </p>
        </div>
      </section>

      {/* Community Partnership — replaces Community Access */}
      <section className="py-20 px-6 bg-[#0A0A0A] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">For Organizations</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">
            Become a Community Partner.
          </h2>
          <p className="text-white/60 max-w-2xl mb-12 text-lg">
            Nonprofits, community groups, and advocacy organizations: partner with Pride in Pontiac and get your work in front of our audience. No cash required — just bring your presence.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 p-8 hover:border-pride-gold/40 transition-colors">
              <Users size={28} className="text-pride-gold mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">Tabling Partner</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Set up a table at the event and connect directly with attendees. Ideal for nonprofits, health organizations, advocacy groups, and community services. You bring your materials — we bring the audience.
              </p>
              <ul className="space-y-2 mb-6">
                {["Listed on our website as a Community Partner", "Table space at the event", "Mentioned in event announcements", "Added to our Resources page"].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                    <ShieldCheck size={14} className="shrink-0 mt-0.5 text-pride-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:baentertainmentMI@gmail.com?subject=Community%20Tabling%20Partner%20Application&body=Organization%20name%3A%0AContact%20name%3A%0AWhat%20you%20do%3A%0AHow%20you%27d%20promote%20the%20event%20to%20your%20network%3A%0A"
                className="inline-flex items-center gap-2 bg-pride-gold text-pride-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
              >
                Apply to Table <ArrowRight size={14} />
              </a>
            </div>

            <div className="border border-white/10 p-8 hover:border-pride-gold/40 transition-colors">
              <Building2 size={28} className="text-pride-gold mb-4" />
              <h3 className="font-serif font-bold text-xl mb-2">Media & Outreach Partner</h3>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Promote Pride in Pontiac to your community — email lists, social media, flyers, newsletters. In exchange, we promote you to ours. No table, no cost, pure reach exchange.
              </p>
              <ul className="space-y-2 mb-6">
                {["Listed on our website as a Community Partner", "Cross-promoted on our social channels", "Added to our Resources page", "Featured in our event program"].map(p => (
                  <li key={p} className="flex items-start gap-2 text-sm text-white/70">
                    <ShieldCheck size={14} className="shrink-0 mt-0.5 text-pride-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:baentertainmentMI@gmail.com?subject=Media%20%26%20Outreach%20Partner%20Application&body=Organization%20name%3A%0AContact%20name%3A%0AYour%20audience%20size%20%26%20channels%3A%0AHow%20you%27d%20promote%20the%20event%3A%0A"
                className="inline-flex items-center gap-2 bg-pride-gold text-pride-black px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors"
              >
                Apply to Partner <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Staff / Vendors / Sponsors — cleaned up */}
      <section className="py-20 px-6 bg-pride-cream border-t border-pride-black/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-muted">Participating in the Event</span>
            <div className="flex-1 h-px bg-pride-black/10" />
          </div>
          <h2 className="font-serif font-bold text-3xl mb-2">Are You Part of the Team?</h2>
          <p className="text-pride-muted mb-10">Registration and applications for everyone helping make this happen.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/volunteers" className="block bg-pride-white hover:shadow-md transition-shadow p-8 border border-pride-black/10 group">
              <Star size={24} className="text-pride-gold mb-4" />
              <h4 className="font-serif font-bold text-xl mb-2 group-hover:text-pride-gold transition-colors">Volunteers</h4>
              <p className="text-sm text-pride-muted mb-4">Sign up to volunteer. You'll receive shift details and check-in instructions by email before the event.</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-pride-gold">
                Volunteer Sign-Up <ArrowRight size={14} />
              </span>
            </Link>

            <Link to="/vendors" className="block bg-pride-white hover:shadow-md transition-shadow p-8 border border-pride-black/10 group">
              <Building2 size={24} className="text-pride-gold mb-4" />
              <h4 className="font-serif font-bold text-xl mb-2 group-hover:text-pride-gold transition-colors">Vendors</h4>
              <p className="text-sm text-pride-muted mb-4">Apply for a marketplace booth. Approved vendors will be contacted with setup times, load-in details, and payment.</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-pride-gold">
                Vendor Application <ArrowRight size={14} />
              </span>
            </Link>

            <Link to="/sponsors" className="block bg-pride-white hover:shadow-md transition-shadow p-8 border border-pride-black/10 group">
              <ShieldCheck size={24} className="text-pride-gold mb-4" />
              <h4 className="font-serif font-bold text-xl mb-2 group-hover:text-pride-gold transition-colors">Sponsors</h4>
              <p className="text-sm text-pride-muted mb-4">View sponsorship tiers and benefits. Contact us directly to discuss your package and what we can offer your brand.</p>
              <span className="inline-flex items-center gap-1 text-sm font-bold text-pride-gold">
                Sponsorship Info <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-pride-white py-20 px-6 border-t border-pride-black/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-black text-4xl mb-12 text-center">Ticketing FAQ</h2>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
