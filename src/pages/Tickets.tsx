import { useState } from "react";
import { Link } from "react-router-dom";
import { Ticket, Users, ShieldCheck, ArrowRight, ShieldAlert, Star, Clock, DoorOpen } from "lucide-react";
import { TransgenderStripe } from "../components/TransgenderStripe";
import { FAQAccordion } from "../components/FAQAccordion";
import { EVENTBRITE_URL } from "../lib/eventLinks";

export function Tickets() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is there really free entry?",
      answer: "Yes — from 12:00 PM to 2:00 PM, entry is completely free with no ticket required. You'll receive a wristband at the door. At 2 PM the free block ends and a GA ticket ($12 early bird / $15 general) is required to stay or re-enter."
    },
    {
      question: "What happens at 8:30 PM?",
      answer: "We do a wristband sweep. Free wristband holders must either pay $25 to upgrade and stay for the evening show, or exit the venue. The event transitions to 21+ only at this point and ID is required at the door."
    },
    {
      question: "Can I come just for the evening show?",
      answer: "Yes. Late Night entry is $25 at the door after 9 PM or online in advance. You must be 21+ and have a valid wristband. ID required."
    },
    {
      question: "What does VIP include?",
      answer: "VIP is presale only — no VIP at the door. Includes reserved seating, one drink ticket, and meet & greet access with performers. Only available online in advance."
    },
    {
      question: "Is there re-entry?",
      answer: "Yes, with a valid wristband that matches your ticket tier. Free wristbands are not valid for re-entry after 2 PM without upgrading to a GA or Late Night ticket."
    }
  ];

  const timeline = [
    { time: "12:00 – 2:00 PM", label: "Free Community Block", detail: "Free wristband at door · all ages · no ticket required", color: "text-[#21B1FF]", border: "border-[#21B1FF]" },
    { time: "2:00 – 8:30 PM", label: "General Admission Open", detail: "GA wristband required · $12 early bird / $15 general · stay all night", color: "text-[#FFD800]", border: "border-[#FFD800]" },
    { time: "8:30 PM", label: "Wristband Sweep", detail: "Free holders: pay $25 to stay OR exit · 21+ check begins", color: "text-[#FF218C]", border: "border-[#FF218C]" },
    { time: "9:00 PM – Close", label: "Late Night", detail: "$25 at door · 21+ only · wristband required", color: "text-purple-400", border: "border-purple-400" },
  ];

  const tiers = [
    {
      label: "Free Community",
      price: "$0",
      sub: "12 PM – 2 PM only",
      desc: "Walk up, get a wristband, enjoy the community block. No ticket needed. Must exit or upgrade at 2 PM sweep.",
      perks: ["Wristband at door", "Full vendor & health resource access", "All ages welcome"],
      cta: "Free — Walk Up",
      href: null,
      accent: "#21B1FF",
      dark: false,
    },
    {
      label: "GA Early Bird",
      price: "$12",
      sub: "Online only · limited qty",
      desc: "Gets you in from 2 PM through close. Best price available — grab it before they're gone.",
      perks: ["Entry from 2 PM through close", "Full festival access", "Valid through wristband sweep"],
      cta: "Buy Early Bird",
      href: EVENTBRITE_URL,
      accent: "#FFD800",
      dark: false,
      featured: true,
    },
    {
      label: "GA General",
      price: "$15",
      sub: "Online",
      desc: "Standard GA ticket. Entry from 2 PM through close, full festival access.",
      perks: ["Entry from 2 PM through close", "Full festival access", "Valid through wristband sweep"],
      cta: "Buy GA Ticket",
      href: EVENTBRITE_URL,
      accent: "#FFD800",
      dark: false,
    },
    {
      label: "Late Night",
      price: "$25",
      sub: "Door after 9 PM · 21+ only",
      desc: "Come for the evening headlining show. At door after 9 PM or purchase online in advance. ID required.",
      perks: ["Entry from 9 PM", "Evening drag show access", "21+ required · ID checked"],
      cta: "Buy Late Night",
      href: EVENTBRITE_URL,
      accent: "#FF218C",
      dark: false,
    },
    {
      label: "VIP — Presale Only",
      price: "$40",
      sub: "No door VIP · online only",
      desc: "Reserved seating, one drink ticket, and meet & greet with performers. Extremely limited.",
      perks: ["Reserved seating", "1 drink ticket", "Meet & greet access", "Priority entry"],
      cta: "Buy VIP",
      href: EVENTBRITE_URL,
      accent: "#FF218C",
      dark: true,
    },
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#0A0A0A] min-h-screen relative overflow-hidden">
      <TransgenderStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />

      {/* Hero */}
      <section className="bg-[#0A0A0A] text-white pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif font-black text-5xl md:text-7xl mb-4">Pride in Pontiac 2026</h1>
          <p className="text-xl text-white/70 mb-2">August 14 · The Crofoot · Pontiac, MI</p>
          <p className="text-white/50 mb-10 max-w-xl">Free from noon. Ticketed from 2 PM. Late night 21+ from 9 PM. One day, three experiences.</p>
          <div className="flex flex-wrap gap-4">
            <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer"
              className="bg-[#FFD800] text-[#0A0A0A] font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors">
              Get Tickets on Eventbrite
            </a>
            <a href="#timeline"
              className="border-2 border-white text-white font-bold uppercase tracking-widest py-4 px-8 hover:bg-white/10 transition-colors">
              See Event Flow
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 px-6 bg-[#0A0A0A] border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-black text-3xl text-white mb-12 flex items-center gap-3">
            <Clock size={28} className="text-[#FFD800]" /> Event Flow — August 14
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className={`border-l-4 ${item.border} pl-6 pb-10 relative`}>
                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full bg-current ${item.color}`} style={{ backgroundColor: item.color.replace("text-[", "").replace("]", "") }} />
                <p className={`font-mono text-xs uppercase tracking-widest mb-1 ${item.color}`}>{item.time}</p>
                <p className="font-serif font-bold text-white text-xl mb-1">{item.label}</p>
                <p className="text-white/60 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ticket Tiers */}
      <section id="get-tickets" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">Choose Your Experience</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Free to start. Pay to stay. VIP to go all in.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.label}
                className={`rounded-2xl p-8 flex flex-col border-2 shadow-lg ${tier.featured ? "shadow-2xl scale-105 z-10" : ""} ${tier.dark ? "bg-[#111] text-white border-white/10" : "bg-white border-black/10"}`}
              >
                {tier.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0A0A0A] text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap"
                    style={{ backgroundColor: tier.accent }}>
                    Best Value
                  </div>
                )}
                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: tier.accent }}>{tier.sub}</p>
                  <h3 className="font-serif font-bold text-2xl mb-1">{tier.label}</h3>
                  <div className="font-sans font-black text-4xl mb-4">{tier.price}</div>
                  <p className={`text-sm mb-6 flex-1 ${tier.dark ? "text-white/60" : "text-gray-500"}`}>{tier.desc}</p>
                  <ul className="space-y-2 mb-8">
                    {tier.perks.map((perk) => (
                      <li key={perk} className={`flex items-start gap-2 text-sm font-medium ${tier.dark ? "text-white/80" : ""}`}>
                        <ShieldCheck size={16} className="shrink-0 mt-0.5" style={{ color: tier.accent }} />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  {tier.href ? (
                    <a href={tier.href} target="_blank" rel="noopener noreferrer"
                      className="w-full py-3 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 transition-colors mt-auto text-white"
                      style={{ backgroundColor: tier.accent, color: tier.dark || tier.accent === "#FF218C" ? "white" : "#0A0A0A" }}>
                      {tier.cta} <ArrowRight size={14} />
                    </a>
                  ) : (
                    <div className="w-full py-3 rounded-lg font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 bg-black/10 text-black/50 mt-auto cursor-default">
                      <DoorOpen size={14} /> {tier.cta}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Access */}
      <section className="py-20 px-6 bg-[#21B1FF]/10 border-y border-[#21B1FF]/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <div className="bg-[#21B1FF] text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg">
              <Users size={40} />
            </div>
            <h2 className="font-serif font-black text-4xl mb-4">Community Access</h2>
          </div>
          <div className="md:w-2/3">
            <p className="text-lg text-[#0A0A0A]/80 mb-6 font-medium">
              Cost should never be a barrier to Pride. A limited number of complimentary tickets are available for LGBTQ+ youth and community members experiencing financial hardship.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
                <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#21B1FF]">Youth & Low Income</h4>
                <p className="text-sm text-gray-500 mb-4">Reserved complimentary passes for LGBTQ+ youth under 21 and anyone facing financial hardship.</p>
                <a href="mailto:baentertainmentMI@gmail.com?subject=Community%20Access%20Request" className="flex items-center gap-1 text-sm font-bold hover:text-[#21B1FF] transition-colors">Request Access <ArrowRight size={14} /></a>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
                <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#21B1FF]">Partner Organizations</h4>
                <p className="text-sm text-gray-500 mb-4">Local nonprofits and community groups can claim a block of passes for their members.</p>
                <a href="mailto:baentertainmentMI@gmail.com?subject=Organization%20Pass%20Block%20Request" className="flex items-center gap-1 text-sm font-bold hover:text-[#21B1FF] transition-colors">Register Org <ArrowRight size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff / Vendors / Sponsors */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <ShieldAlert className="text-gray-400 mb-4 w-12 h-12" />
            <h2 className="font-serif font-bold text-3xl mb-2">Staff, Vendors & Sponsors</h2>
            <p className="text-gray-500 max-w-xl">Participating in or producing the event? Use the portals below.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/volunteers" className="block bg-black/5 hover:bg-black/10 transition-colors p-8 rounded-xl border border-black/10 text-center">
              <h4 className="font-bold text-xl mb-2">Volunteers</h4>
              <p className="text-sm text-gray-500">Sign up and get your shift details.</p>
            </Link>
            <Link to="/vendors" className="block bg-black/5 hover:bg-black/10 transition-colors p-8 rounded-xl border border-black/10 text-center">
              <h4 className="font-bold text-xl mb-2">Vendors</h4>
              <p className="text-sm text-gray-500">Apply for a marketplace booth.</p>
            </Link>
            <Link to="/sponsors" className="block bg-black/5 hover:bg-black/10 transition-colors p-8 rounded-xl border border-black/10 text-center">
              <h4 className="font-bold text-xl mb-2">Sponsors</h4>
              <p className="text-sm text-gray-500">View sponsorship tiers and benefits.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black/5 py-20 px-6 border-t border-black/10">
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
