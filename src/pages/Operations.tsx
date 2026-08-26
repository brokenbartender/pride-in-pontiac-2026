import { ShieldCheck, CalendarClock, Activity, MapPin, Car, ShieldAlert } from "lucide-react";
import { NonBinaryStripe } from "../components/NonBinaryStripe";

export function Operations() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6 relative overflow-hidden">
      <NonBinaryStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />
      <div className="max-w-4xl mx-auto mt-4">
        <h1 className="font-serif font-black text-5xl md:text-6xl mb-6">Festival Operations</h1>
        <p className="text-xl text-pride-muted mb-12">
          A look at the production, safety, and community impact strategy behind Pride in Pontiac 2026. We worked closely with The Crofoot to run a flawless event.
        </p>
        
        <div className="space-y-12">
           <section className="bg-pride-white border border-pride-black/10 p-8 shadow-sm border-t-4 border-t-pride-teal">
             <h2 className="font-serif font-bold text-3xl mb-4 flex items-center gap-3">
               <ShieldCheck className="text-pride-teal"/> Risk Management & Security
             </h2>
             <p className="mb-4 text-pride-ink/80">Working seamlessly alongside The Crofoot's experienced in-house security teams.</p>
             <ul className="space-y-2 list-disc pl-5 font-sans text-pride-ink/80">
               <li>Strict zero-tolerance anti-harassment policy</li>
               <li>Bag checks and clear-bag recommendations at all primary entry points</li>
               <li>Dedicated de-escalation volunteers and medical staff on site</li>
               <li>Crowd control planning for Pike Street marketplace and Mainstage capacities</li>
               <li>Explicit emergency response and evacuation procedures in tandem with venue management</li>
             </ul>
           </section>

           <section className="bg-pride-white border border-pride-black/10 p-8 shadow-sm border-t-4 border-t-pride-violet">
             <h2 className="font-serif font-bold text-3xl mb-4 flex items-center gap-3">
               <CalendarClock className="text-pride-violet"/> Production & Logistics
             </h2>
             <ul className="space-y-3 font-sans text-pride-ink/80">
               <li className="flex gap-4"><strong className="w-32 shrink-0">6:00 - 10:00 AM:</strong> <span>Vendor marketplace load-in and coordinate street closures</span></li>
               <li className="flex gap-4"><strong className="w-32 shrink-0">10:00 - 12:00 PM:</strong> <span>Mainstage soundcheck and lighting programming</span></li>
               <li className="flex gap-4"><strong className="w-32 shrink-0">1:00 - 6:00 PM:</strong> <span>Daytime marketplace and community programming block</span></li>
               <li className="flex gap-4"><strong className="w-32 shrink-0">6:00 - 7:00 PM:</strong> <span>Venue transition and street re-opening logistics</span></li>
               <li className="flex gap-4"><strong className="w-32 shrink-0">8:00 - 1:00 AM:</strong> <span>Evening ticketed mainstage show operations</span></li>
             </ul>
           </section>

           <section className="bg-pride-white border border-pride-black/10 p-8 shadow-sm border-t-4 border-t-pride-gold">
             <h2 className="font-serif font-bold text-3xl mb-4 flex items-center gap-3">
               <Activity className="text-pride-gold"/> Community & Economic Impact
             </h2>
             <ul className="space-y-2 list-disc pl-5 font-sans text-pride-ink/80">
               <li><strong>Year-1 Attendance:</strong> ~400 across the daytime program, plus ~90 at the After Party</li>
               <li>Direct revenue injection to Pontiac downtown businesses</li>
               <li>Providing LGBTQ+ visibility and accessible celebration spaces in Oakland County</li>
               <li>Platforming and paying 20+ local queer artists, vendors, and performers</li>
             </ul>
           </section>

           <section className="bg-pride-white border border-pride-black/10 p-8 shadow-sm border-t-4 border-t-pride-rose">
             <h2 className="font-serif font-bold text-3xl mb-4 flex items-center gap-3">
               <Car className="text-pride-rose"/> Getting There
             </h2>
             <p className="mb-4 text-pride-ink/80">
               There were multiple paid surface lots directly adjacent to The Crofoot, plus metered street parking throughout downtown Pontiac — same setup you can expect for 2027. The primary lot sits immediately behind the venue on W Pike St.
             </p>
           </section>

           <section className="bg-pride-white border border-pride-black/10 p-8 shadow-sm border-t-4 border-t-pride-violet">
             <h2 className="font-serif font-bold text-3xl mb-4 flex items-center gap-3">
               <ShieldAlert className="text-pride-violet"/> What Attendees Brought (and Didn't)
             </h2>
             <div className="grid md:grid-cols-2 gap-8">
               <div>
                 <h3 className="font-bold mb-2">Encouraged:</h3>
                 <ul className="list-disc pl-5 space-y-1 text-pride-ink/80">
                   <li>Water bottle (sealed or empty)</li>
                   <li>Sunscreen</li>
                   <li>Comfortable shoes</li>
                   <li>Pride flags and gear</li>
                   <li>ID (for 18+ areas)</li>
                 </ul>
               </div>
               <div>
                 <h3 className="font-bold mb-2">Not Permitted:</h3>
                 <ul className="list-disc pl-5 space-y-1 text-pride-ink/80">
                   <li>Weapons of any kind</li>
                   <li>Outside alcohol</li>
                   <li>Large backpacks/coolers</li>
                   <li>Hate speech or symbols</li>
                 </ul>
               </div>
             </div>
           </section>
        </div>
      </div>
    </div>
  );
}
