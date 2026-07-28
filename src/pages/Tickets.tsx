import { ShieldCheck, ArrowRight, Clock, ExternalLink } from "lucide-react";
import { FAQAccordion } from "../components/FAQAccordion";
import { TransgenderStripe } from "../components/TransgenderStripe";
import { EVENTBRITE_URL } from "../lib/eventLinks";

export function Tickets() {
  const faqs = [
    {
      question: "What time does the event start?",
      answer: "Doors open at noon for a free, all-ages daytime celebration running through 7 PM — no ticket needed to walk up before 3 PM. After 3 PM, entry requires a GA ticket ($20, or two for the price of one with our BOGO deal), still all ages through 7 PM. At 7 PM the daytime program ends and the venue transitions to the After Party, which is 18+ starting at 7:30 PM."
    },
    {
      question: "I got a free wristband at noon — do I have to leave at 7 PM?",
      answer: "If you're 18 or older, no — you're welcome to stay for the After Party. If you're under 18, the daytime block is all ages, but the After Party starting at 7:30 PM is 18+, so anyone under 18 needs to exit during the 7–7:30 PM transition."
    },
    {
      question: "What's the BOGO deal?",
      answer: "Buy one GA or VIP ticket and get a second free — two tickets for the price of one. Great for bringing a friend. Available on both GA and VIP while supplies last."
    },
    {
      question: "What does GA get me?",
      answer: "GA is $20 and gets you in from 3 PM through close at 2 AM — covering the rest of the all-ages daytime program and the 18+ After Party. Once you're inside, you're in for the night — no re-purchase, no sweep (unless you're under 18, in which case you'll need to exit at the 7 PM transition)."
    },
    {
      question: "Do I need to be 21 to attend the After Party?",
      answer: "No — the After Party is 18+ with valid ID checked at the door. If you're 21 or older, you'll also get a separate wristband so you can drink, also checked by ID at the door."
    },
    {
      question: "Can I come just for the evening?",
      answer: "Yes. Anyone arriving after 9 PM without a pre-purchased ticket can pay $20 at the door. The After Party is 18+ with valid ID required starting at 7:30 PM. You can also buy GA online in advance on Eventbrite to skip the door."
    },
    {
      question: "What does VIP include?",
      answer: "VIP is $40 and presale only — no VIP at the door. Includes 11 AM early access (one hour before general doors), reserved VIP lounge seating, one complimentary drink ticket (21+), and meet & greet access with performers. Extremely limited, and eligible for the BOGO deal."
    },
    {
      question: "Is there re-entry?",
      answer: "Yes, with a valid wristband matching your ticket tier. Wristbands are checked at re-entry."
    },
    {
      question: "What time does the event end, and who closes it out?",
      answer: "Alise King closes the all-ages daytime program at 7 PM. The After Party runs 7:30 PM to close at 2 AM, with Stela Vulva giving closing remarks and sponsor thank-yous before last call."
    },
    {
      question: "My button isn't opening Eventbrite — what do I do?",
      answer: "Your browser may be blocking the popup. Go directly to Eventbrite.com and search 'Pride in Pontiac 2026', or visit: eventbrite.com/e/pride-in-pontiac-2026-still-here-still-proud-tickets-1989365764554"
    }
  ];

  const timeline = [
    {
      time: "11:00 AM",
      label: "VIP Early Access",
      detail: "VIP ticket holders only · exclusive hour before general doors · meet performers, skip the crowd",
      color: "text-pride-gold",
      border: "border-pride-gold",
    },
    {
      time: "12:00 PM",
      label: "Doors Open — All Ages",
      detail: "Free entry · all ages · free wristband at door · daytime performances begin",
      color: "text-[#21B1FF]",
      border: "border-[#21B1FF]",
    },
    {
      time: "3:00 PM",
      label: "Free Admission Closes",
      detail: "New arrivals need a GA ticket ($20, BOGO available) · still all ages through 7 PM",
      color: "text-[#FFD800]",
      border: "border-[#FFD800]",
    },
    {
      time: "7:00 PM",
      label: "Daytime Program Ends — Alise King Closes",
      detail: "Alise King closes out the all-ages daytime block",
      color: "text-[#FF218C]",
      border: "border-[#FF218C]",
    },
    {
      time: "7:00–7:30 PM",
      label: "Transition to the After Party",
      detail: "Building sweep · anyone under 18 must exit · 21+ ID check begins for drinking wristbands",
      color: "text-purple-400",
      border: "border-purple-400",
    },
    {
      time: "7:30 PM",
      label: "After Party Begins — 18+",
      detail: "New wristband color · 18+ entry with valid ID · 21+ additionally get a wristband to drink",
      color: "text-purple-400",
      border: "border-purple-400",
    },
    {
      time: "9:00 PM",
      label: "Door Entry Opens — $20",
      detail: "Walk-up entry at the door for $20 for anyone without a pre-purchased ticket · 18+ required",
      color: "text-pride-gold",
      border: "border-pride-gold",
    },
    {
      time: "2:00 AM",
      label: "Close",
      detail: "Stela Vulva closes out the night with remarks and thank-yous · last call · doors close",
      color: "text-pride-gold",
      border: "border-pride-gold",
    },
  ];

  const tiers = [
    {
      label: "General Admission",
      price: "$20",
      wasPrice: null,
      badge: "BOGO Available",
      sub: "Online or at door · entry from 3 PM",
      desc: "Entry from 3 PM through close at 2 AM — the rest of the all-ages daytime program plus the 18+ After Party. Once inside, you're in for the night. Buy one, get one free while supplies last.",
      perks: [
        "Entry from 3 PM through 2 AM",
        "Full festival & vendor access",
        "BOGO — two tickets for the price of one",
        "No re-purchase or sweep (18+)",
      ],
      cta: "Get GA — $20",
      href: EVENTBRITE_URL,
      accent: "#FFD800",
      dark: false,
      featured: true,
    },
    {
      label: "Door Entry",
      price: "$20",
      wasPrice: null,
      badge: null,
      sub: "18+ only · ID required · after 9 PM",
      desc: "Come for the After Party. Walk-up entry at the door for anyone arriving after 9 PM without a pre-purchased ticket. 18+ required, 21+ get a wristband to drink.",
      perks: [
        "Entry from 9 PM through 2 AM",
        "After Party performances",
        "18+ required · valid ID checked",
      ],
      cta: "Buy GA in Advance — $20",
      href: EVENTBRITE_URL,
      accent: "#FF218C",
      dark: false,
      featured: false,
    },
    {
      label: "VIP",
      price: "$40",
      wasPrice: null,
      badge: "BOGO Available",
      sub: "Presale only · extremely limited",
      desc: "The full experience. 11 AM early access before general doors, reserved VIP lounge, drink ticket (21+), and meet & greet. No VIP at the door. Buy one, get one free while supplies last.",
      perks: [
        "11 AM early access — 1 hr before general doors",
        "Reserved VIP lounge seating",
        "1 complimentary drink ticket (21+)",
        "Meet & greet with performers",
        "BOGO — two tickets for the price of one",
        "Presale only — no door VIP",
      ],
      cta: "Buy VIP — $40",
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
          <p className="text-white/60 mb-10 max-w-xl text-lg">
            VIP early access at 11 AM. Free & all ages noon–7 PM, closed out by Alise King. GA $20 from 3 PM (BOGO available). After Party is 18+ starting 7:30 PM, 21+ to drink. $20 door entry after 9 PM. Runs until 2 AM.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={EVENTBRITE_URL}
              onClick={(e) => { e.preventDefault(); window.open(EVENTBRITE_URL, '_blank', 'noopener,noreferrer'); }}
              className="bg-[#FFD800] text-[#0A0A0A] font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors flex items-center gap-2 cursor-pointer"
            >
              Buy on Eventbrite <ExternalLink size={16} />
            </a>
            <a
              href="#event-flow"
              className="border-2 border-white/30 text-white font-bold uppercase tracking-widest py-4 px-8 hover:bg-white/10 transition-colors"
            >
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
          <p className="text-white/30 text-xs font-mono mt-4">
            VIP 11 AM · Free & all ages noon–7 PM · GA from 3 PM · After Party 18+ from 7:30 PM (21+ to drink) · $20 door entry after 9 PM · close 2 AM
          </p>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section id="get-tickets" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">Choose Your Experience</h2>
            <p className="text-gray-500 text-lg">GA and VIP both eligible for BOGO. VIP ends before the event.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                  {tier.wasPrice && (
                    <span className="text-gray-400 line-through text-lg">{tier.wasPrice}</span>
                  )}
                </div>

                <p className={`text-sm mb-6 flex-1 leading-relaxed mt-4 ${tier.dark ? "text-white/60" : "text-gray-500"}`}>{tier.desc}</p>

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
            All tickets on Eventbrite. Trouble with the button? Go to eventbrite.com and search "Pride in Pontiac 2026".
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-pride-white py-20 px-6 border-t border-pride-black/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-black text-4xl mb-12 text-center">Ticketing FAQ</h2>
          <FAQAccordion theme="light" faqs={faqs.map((faq) => ({ q: faq.question, a: faq.answer }))} />
        </div>
      </section>
    </div>
  );
}
