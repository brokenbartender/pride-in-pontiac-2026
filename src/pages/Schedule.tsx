import { PrideStripe } from "../components/PrideStripe";
import { GayMenStripe } from "../components/GayMenStripe";
import { Clock, MapPin, CheckCircle2, Mic2 } from "lucide-react";
import { FAQAccordion } from "../components/FAQAccordion";

export function Schedule() {
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
          Held at <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a> in the heart of Pontiac, the day opens with a community commencement, moves into an all-ages daytime celebration, and closes out with an 18+ evening show running until 2 AM.
        </p>
      </div>

      <GayMenStripe className="w-full h-2 shadow-lg relative z-10" />

      {/* Commencement */}
      <section className="bg-pride-black/20 py-24 px-6 border-b border-pride-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Mic2 size={20} className="text-pride-gold-light" />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-white/60">Noon–1 PM</span>
            <div className="flex-1 h-px bg-pride-white/20"></div>
          </div>
          <h2 className="font-serif font-black text-3xl md:text-4xl mb-6">Commencement</h2>
          <p className="text-pride-white/80 leading-relaxed max-w-3xl mb-8">
            Before the performances begin, Pontiac's first Pride opens with a community commencement — local politicians, organizations, and community leaders take the stage. Michigan's Legislature is presenting Pride in Pontiac with a special state tribute, with Rep. Brenda Carter expected to present it alongside a written message or video from Governor Whitmer. Sen. Jeremy Moss will also be in attendance.
          </p>
          <p className="text-pride-white/60 text-sm">Performances begin at 1:00 PM following commencement.</p>
        </div>
      </section>

      {/* Programming Grid */}
      <section className="bg-pride-black/10 py-24 px-6 border-b border-pride-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-pride-white/5 border border-pride-white/10 p-10 hover:bg-pride-white/10 transition-colors">
            <span className="inline-block bg-pride-gold text-pride-black font-mono text-[10px] tracking-widest uppercase font-bold px-4 py-1.5 mb-8">Daytime &middot; All Ages</span>
            <h3 className="font-serif font-bold text-3xl mb-8">Celebration & Community</h3>
            <ul className="space-y-4">
              {[
                "Commencement: politicians, community leaders, and the state tribute presentation",
                "Drag performances — confirmed Unorthodox Drag roster from 1 PM",
                "Live music and DJ sets",
                "Vendor marketplace: LGBTQ+-owned businesses & artisans",
                "Health resources: rapid HIV testing, mental health info (Café)",
                "Community organization tables & resource booths",
                "Outdoor courtyard: selfie wall, community message board"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start text-[15px] text-pride-white/80">
                  <CheckCircle2 size={18} className="text-pride-gold-light shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-pride-white/5 border border-pride-white/10 p-10 hover:bg-pride-white/10 transition-colors">
            <span className="inline-block bg-pride-gold text-pride-black font-mono text-[10px] tracking-widest uppercase font-bold px-4 py-1.5 mb-8">Evening &middot; 18+</span>
            <h3 className="font-serif font-bold text-3xl mb-8">Closing the Night</h3>
            <ul className="space-y-4">
              {[
                "Continued drag performances — Stela Vulva & full roster",
                "DJ sets through the night",
                "VIP lounge: reserved seating, drink ticket, meet & greet",
                <span key="crofoot">Full bar service through <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a></span>,
                "$20 walk-up door entry available after 9 PM",
                "Alise King closes out the night",
                "Runs until close at 2 AM"
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
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-pride-black/20 border border-pride-white/10 p-8 flex flex-col">
            <span className="font-mono text-[10px] text-pride-gold-light tracking-widest uppercase mb-4 flex items-center gap-2"><MapPin size={14}/> 250 Capacity</span>
            <h4 className="font-sans font-bold text-xl mb-2">Pike Room</h4>
            <p className="text-sm text-pride-white/60 leading-relaxed">Main stage &middot; commencement &middot; drag performances &middot; DJ sets &middot; evening anchor</p>
          </div>
          <div className="bg-pride-black/20 border border-pride-white/10 p-8 flex flex-col">
            <span className="font-mono text-[10px] text-pride-gold-light tracking-widest uppercase mb-4 flex items-center gap-2"><MapPin size={14}/> ~100 Capacity</span>
            <h4 className="font-sans font-bold text-xl mb-2">Vernors Room</h4>
            <p className="text-sm text-pride-white/60 leading-relaxed">Main bar &middot; open all day</p>
          </div>
          <div className="bg-pride-black/20 border border-pride-white/10 p-8 flex flex-col">
            <span className="font-mono text-[10px] text-pride-gold-light tracking-widest uppercase mb-4 flex items-center gap-2"><MapPin size={14}/> 75 Capacity</span>
            <h4 className="font-sans font-bold text-xl mb-2">Café</h4>
            <p className="text-sm text-pride-white/60 leading-relaxed">Health resource village by day (alcohol-free) &middot; VIP lounge in the evening</p>
          </div>
          <div className="bg-pride-black/20 border border-pride-white/10 p-8 flex flex-col">
            <span className="font-mono text-[10px] text-pride-gold-light tracking-widest uppercase mb-4 flex items-center gap-2"><MapPin size={14}/> 75 Capacity</span>
            <h4 className="font-sans font-bold text-xl mb-2">Patio</h4>
            <p className="text-sm text-pride-white/60 leading-relaxed">Selfie wall &middot; sponsor signage &middot; daytime social hub &middot; evening chill/smoking area</p>
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
          
          <FAQAccordion faqs={[
            {
              q: "What is the timeline for the day?",
              a: "Doors open at noon with a free, all-ages community commencement — local politicians, organizations, and community leaders speak, including a special state tribute. Performances begin at 1:00 PM. Free entry runs through 3 PM; a GA ticket is required after that. Starting at 7:30 PM the event is 18+. After 9 PM, $20 walk-up door entry is available. The night runs until close at 2 AM, with Alise King closing out the show."
            },
            {
              q: "What are the age restrictions?",
              a: "Daytime programming (noon–7:30 PM) is open to all ages. Starting at 7:30 PM, entry requires guests to be 18+ with valid ID."
            },
            {
              q: "Where should I park?",
              a: <span>There are multiple paid surface lots directly adjacent to <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a>, as well as metered street parking throughout downtown Pontiac. The primary lot is located immediately behind the venue on W Pike St.</span>
            },
            {
              q: "Is The Crofoot accessible?",
              a: "Yes. The main floor venues including the Pike Room, Vernors Room, Café, and Patio are wheelchair accessible. Accessible restrooms are located on the main floor. Please contact us ahead of time if you need specific accommodations so we can reserve seamless viewing."
            },
            {
              q: "Are there ins and outs?",
              a: "Yes, you will receive a wristband upon entry which allows ins and outs throughout the course of the programming block your ticket covers."
            },
            {
              q: "What items are prohibited?",
              a: "Standard venue rules apply: No outside food or drinks, no weapons, no illegal substances, and no large backpacks. Small clear bags are recommended to speed up security checks at entry."
            }
          ]} />
        </div>
      </section>

    </div>
  );
}
