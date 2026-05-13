import { useState } from "react";
import { Link } from "react-router-dom";
import { Ticket, Users, QrCode, Heart, ShieldCheck, ArrowRight, ShieldAlert, Star } from "lucide-react";
import { TransgenderStripe } from "../components/TransgenderStripe";
import { FAQAccordion } from "../components/FAQAccordion";
import { EVENTBRITE_URL, SPONSOR_EMAIL } from "../lib/eventLinks";

export function Tickets() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are tickets required for entry?",
      answer: "Yes, all attendees need an Eventbrite ticket or QR code for entry. Early Bird GA, standard GA, VIP supporter admission, vendor tables, and sponsor packages are handled through Eventbrite."
    },
    {
      question: "How do I access the venue?",
      answer: "Buy through Eventbrite and bring the QR code in your email or Eventbrite app. VIP supporter entry details will be announced as the final venue plan is confirmed."
    },
    {
      question: "Are there age restrictions?",
      answer: "Programming and age policies are being finalized with the venue. Any 18+ or 21+ restrictions will be announced before the event."
    },
    {
      question: "Is there re-entry?",
      answer: "Yes, you may leave and return, provided your wristband remains intact or your QR code is valid for re-entry, subject to current venue capacity."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] text-[#0A0A0A] min-h-screen relative overflow-hidden">
      <TransgenderStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />
      
      {/* Hero Section */}
      <section className="bg-[#0A0A0A] text-[#FFFFFF] pt-24 pb-20 px-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <h1 className="font-serif font-black text-5xl md:text-7xl mb-6">Pride in Pontiac 2026</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light mb-4">August 14 &middot; The Crofoot</p>
            <p className="text-lg text-white/60 mb-8 max-w-xl">
              Buy your Eventbrite ticket for Michigan's newest LGBTQ+ Pride celebration. 
              Early Bird, GA, VIP supporter, vendor, and sponsor options are available now.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="bg-[#FFD800] text-[#0A0A0A] font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors text-center shrink-0">
                Buy on Eventbrite
              </a>
              <a href={SPONSOR_EMAIL} className="border-2 border-white text-white font-bold uppercase tracking-widest py-4 px-8 hover:bg-white/10 transition-colors text-center shrink-0">
                Questions?
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
             <div className="bg-white p-6 rounded-2xl shadow-2xl rotate-3 shrink-0">
               <div className="flex flex-col items-center border-4 border-[#0A0A0A] p-4 pb-8 border-dashed rounded-xl w-64 items-center">
                 <QrCode size={120} className="text-[#0A0A0A] mb-4"/>
                 <div className="font-serif font-black text-2xl text-[#0A0A0A] uppercase leading-none mb-1">Pride Pass</div>
                 <div className="text-xs font-mono tracking-widest text-[#21B1FF] font-bold uppercase">General Admission</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Main Ticket Tiers */}
      <section id="get-tickets" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-4xl md:text-5xl mb-4">Get Your Tickets</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Select your level of support on Eventbrite. Your purchase helps prove demand, fund production, and keep the first Pride in Pontiac moving.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* GA */}
            <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-lg flex flex-col mt-8">
               <div className="text-[#21B1FF] mb-4"><Ticket size={32} /></div>
               <h3 className="font-serif font-bold text-3xl mb-2">Early Bird GA</h3>
               <div className="font-sans font-bold text-4xl mb-6">$15</div>
               <p className="text-gray-500 text-sm mb-8 flex-1">
                 Limited first-wave pricing for people who help prove demand early. Standard GA opens at $20 after the early-bird window.
               </p>
               <ul className="space-y-3 mb-8 text-sm font-medium">
                 <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-600"/> QR Access Pass</li>
                 <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-green-600"/> Entry to all public zones</li>
               </ul>
               <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-[#0A0A0A] text-white font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-black transition-colors mt-auto text-center">
                 Buy Early Bird
               </a>
            </div>

            {/* Supporter */}
            <div className="bg-white border-2 border-[#FFD800] rounded-2xl p-8 shadow-2xl flex flex-col relative z-10 transform md:-translate-y-4">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD800] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full whitespace-nowrap">
                  Most Impactful
               </div>
               <div className="text-[#FFD800] mb-4"><Heart size={32} /></div>
               <h3 className="font-serif font-bold text-3xl mb-2">General Admission</h3>
               <div className="font-sans font-bold text-4xl mb-2">$20</div>
               <p className="text-gray-500 text-sm mb-8 flex-1">
                 Standard admission once the early-bird allotment closes. Simple, accessible entry for the full Pride in Pontiac experience.
               </p>
               <ul className="space-y-3 mb-8 text-sm font-medium">
                 <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#FFD800]"/> Eventbrite QR ticket</li>
                 <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#FFD800]"/> Full event admission</li>
                 <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#FFD800]"/> Supports year-one launch</li>
               </ul>
               <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-[#FFD800] text-[#0A0A0A] font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-[#E6C300] transition-colors mt-auto text-center">
                 Buy GA
               </a>
            </div>

            {/* VIP */}
            <div className="bg-[#111] text-white border border-white/10 rounded-2xl p-8 shadow-lg flex flex-col mt-8">
               <div className="text-[#FF218C] mb-4"><Star size={32} /></div>
               <h3 className="font-serif font-bold text-3xl mb-2">VIP Supporter</h3>
               <div className="font-sans font-bold text-4xl mb-6">$50</div>
               <p className="text-white/70 text-sm mb-8 flex-1">
                 Premium supporter admission for guests who want to help strengthen year one and keep general admission accessible.
               </p>
               <ul className="space-y-3 mb-8 text-sm font-medium text-white/90">
                 <li className="flex items-start gap-2"><ShieldCheck size={16} className="text-[#FF218C] shrink-0 mt-0.5"/> Eventbrite VIP QR ticket</li>
                 <li className="flex items-start gap-2"><ShieldCheck size={16} className="text-[#FF218C] shrink-0 mt-0.5"/> Helps subsidize accessible GA pricing</li>
                 <li className="flex items-start gap-2"><ShieldCheck size={16} className="text-[#FF218C] shrink-0 mt-0.5"/> VIP details announced as confirmed</li>
               </ul>
               <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="w-full bg-[#FF218C] text-white font-bold uppercase tracking-widest py-3 rounded-lg hover:bg-[#D91B76] transition-colors mt-auto text-center">
                 Buy VIP
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Community Access & Inclusion */}
      <section id="community" className="py-24 px-6 bg-[#21B1FF]/10 border-y border-[#21B1FF]/20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
             <div className="bg-[#21B1FF] text-white w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Users size={40} />
             </div>
             <h2 className="font-serif font-black text-4xl mb-4">Community Access</h2>
          </div>
          <div className="md:w-2/3">
             <p className="text-lg text-[#0A0A0A]/80 mb-6 font-medium">
               Pride in Pontiac is committed to radical inclusion. We believe cost should never be a barrier to celebrating our community.
             </p>
             <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
                   <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#21B1FF]">Youth & Low Income</h4>
                   <p className="text-sm text-gray-500 mb-4">Reserved free passes are guaranteed for LGBTQ+ youth under 21 and anyone experiencing financial hardship.</p>
                   <a href={SPONSOR_EMAIL} className="flex items-center gap-1 text-sm font-bold hover:text-[#21B1FF] transition-colors">Request Access <ArrowRight size={14}/></a>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
                   <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#21B1FF]">Partner Organizations</h4>
                   <p className="text-sm text-gray-500 mb-4">Are you a local non-profit or community group? Claim your block of free passes for your members.</p>
                   <a href={EVENTBRITE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-bold hover:text-[#21B1FF] transition-colors">Vendor/Sponsor Tickets <ArrowRight size={14}/></a>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Staff, Vendors & Sponsors */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
           <div className="flex flex-col items-center text-center mb-12">
             <ShieldAlert className="text-gray-500 mb-4 w-12 h-12" />
             <h2 className="font-serif font-bold text-3xl mb-2">Staff, Vendors & Sponsors</h2>
             <p className="text-gray-500 max-w-xl">
               If you are participating in or producing the event, please use the designated portals to retrieve your access credentials.
             </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6">
              <Link to="/volunteers" className="block bg-black/5 hover:bg-black/10 transition-colors p-8 rounded-xl border border-black/10 text-center">
                 <h4 className="font-bold text-xl mb-2">Volunteers</h4>
                 <p className="text-sm text-gray-500">Access your shift schedule and QR pass.</p>
              </Link>
              <Link to="/vendors" className="block bg-black/5 hover:bg-black/10 transition-colors p-8 rounded-xl border border-black/10 text-center">
                 <h4 className="font-bold text-xl mb-2">Vendors</h4>
                 <p className="text-sm text-gray-500">Get load-in instructions and staff passes.</p>
              </Link>
              <Link to="/sponsors" className="block bg-black/5 hover:bg-black/10 transition-colors p-8 rounded-xl border border-black/10 text-center">
                 <h4 className="font-bold text-xl mb-2">Sponsors</h4>
                 <p className="text-sm text-gray-500">Manage your guest allocations and VIP entry.</p>
              </Link>
           </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-black/5 py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-black text-4xl mb-12 text-center">Ticketing & Entry FAQ</h2>
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
