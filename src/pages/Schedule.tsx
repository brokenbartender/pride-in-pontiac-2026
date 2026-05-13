import { GayMenStripe } from "../components/GayMenStripe";
import { CheckCircle2, MapPin } from "lucide-react";
import { useState } from "react";
import { FAQAccordion } from "../components/FAQAccordion";

export function Schedule() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const faqs = [
    {
      question: "What is the timeline for the day?",
      answer:
        "The daytime community marketplace runs from 1:00 PM to 6:00 PM. The venue transitions between 6:00 PM and 7:00 PM. Evening programming follows after the reset window."
    },
    {
      question: "What are the age restrictions?",
      answer:
        "Programming and age policies are being finalized with the venue. Any 18+ or 21+ restrictions will be announced before the event."
    },
    {
      question: "Where should I park?",
      answer:
        "There are multiple paid surface lots adjacent to The Crofoot, as well as metered street parking throughout downtown Pontiac. Ride-sharing is encouraged."
    },
    {
      question: "Is The Crofoot accessible?",
      answer:
        "The main floor venues and core public areas are accessible. Contact the organizers ahead of time for specific accommodation requests."
    },
    {
      question: "Are there ins and outs?",
      answer:
        "Re-entry details will be announced with the final ticketing and venue operations plan."
    },
    {
      question: "What items are prohibited?",
      answer:
        "Standard venue rules apply: no weapons, no outside alcohol, no illegal substances, and no large bags that slow entry screening."
    }
  ];

  return (
    <div className="bg-pride-violet text-pride-white min-h-screen pb-32">
      {/* Header */}
      <div className="pt-24 pb-24 px-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-white/50">The Event</span>
          <div className="flex-1 h-px bg-pride-white/20"></div>
        </div>
        <h1 className="font-serif font-black text-5xl md:text-7xl lg:text-[80px] leading-[0.95] mb-8">
          A Full Day <br/>of <span className="italic text-pride-gold-light">Pride.</span>
        </h1>
        <p className="text-xl text-pride-white/80 max-w-2xl leading-relaxed">
          Held at <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a> in the heart of Pontiac, the event features a daytime marketplace and an evening mainstage show.
        </p>
      </div>

      <GayMenStripe className="w-full h-2 shadow-lg relative z-10" />

      {/* Programming Grid */}
      <section className="bg-pride-black/10 py-24 px-6 border-b border-pride-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-pride-white/5 border border-pride-white/10 p-10 hover:bg-pride-white/10 transition-colors">
            <span className="inline-block bg-pride-gold text-pride-black font-mono text-[10px] tracking-widest uppercase font-bold px-4 py-1.5 mb-8">Daytime &middot; 18+</span>
            <h3 className="font-serif font-bold text-3xl mb-8">Celebration & Community</h3>
            <ul className="space-y-4">
              {[
                "Drag performances — confirmed Unorthodox Drag roster",
                "Live music and DJ sets",
                "Vendor marketplace: LGBTQ+-owned businesses & artisans",
                "Health resources: rapid HIV testing, mental health info",
                "Community organization tables & resource booths",
                "Outdoor courtyard: selfie wall, community message board",
                "Sponsor activation tables — your brand meets the community"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-[15px] text-pride-white/80">
                  <CheckCircle2 size={18} className="text-pride-gold-light shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-pride-white/5 border border-pride-white/10 p-10 hover:bg-pride-white/10 transition-colors">
            <span className="inline-block bg-pride-gold text-pride-black font-mono text-[10px] tracking-widest uppercase font-bold px-4 py-1.5 mb-8">Evening &middot; 21+</span>
            <h3 className="font-serif font-bold text-3xl mb-8">Headlining Show</h3>
            <ul className="space-y-4">
              {[
                "Headlining drag performances — Stela Vulva & full roster",
                "DJ or live music set closing out the night",
                "VIP section: reserved seating, drink ticket, meet & greet",
                <span key="crofoot">Full bar service through <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a></span>,
                "Stage recognition for sponsors throughout the evening",
                "Gold/Title sponsor activation in primary sightlines",
                "Final ticket push creates urgency — sold-out potential"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-[15px] text-pride-white/80">
                  <CheckCircle2 size={18} className="text-pride-gold-light shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="font-serif font-black text-4xl mb-12 text-center">Confirmed Spaces at <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pride-black/20 border border-pride-white/10 p-8 flex flex-col">
            <span className="font-mono text-[10px] text-pride-gold-light tracking-widest uppercase mb-4 flex items-center gap-2"><MapPin size={14}/> 250 Capacity</span>
            <h4 className="font-sans font-bold text-xl mb-2">Pike Room</h4>
            <p className="text-sm text-pride-white/60 leading-relaxed">Main stage &middot; headlining drag &middot; DJ set &middot; VIP front section &middot; evening anchor</p>
          </div>
          <div className="bg-pride-black/20 border border-pride-white/10 p-8 flex flex-col">
            <span className="font-mono text-[10px] text-pride-gold-light tracking-widest uppercase mb-4 flex items-center gap-2"><MapPin size={14}/> 75 Capacity</span>
            <h4 className="font-sans font-bold text-xl mb-2">Vernors Room</h4>
            <p className="text-sm text-pride-white/60 leading-relaxed">VIP lounge &middot; health resources &middot; HIV testing &middot; meet & greet</p>
          </div>
          <div className="bg-pride-black/20 border border-pride-white/10 p-8 flex flex-col">
            <span className="font-mono text-[10px] text-pride-gold-light tracking-widest uppercase mb-4 flex items-center gap-2"><MapPin size={14}/> Outdoor</span>
            <h4 className="font-sans font-bold text-xl mb-2">Courtyard</h4>
            <p className="text-sm text-pride-white/60 leading-relaxed">Selfie wall &middot; sponsor signage &middot; check-in &middot; daytime social hub</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-pride-black py-24 px-6 border-t border-pride-white/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-5xl mb-6">Frequently Asked Questions</h2>
            <p className="text-pride-white/60">Everything you need to know before attending Pride in Pontiac.</p>
          </div>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={faq.question}
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
