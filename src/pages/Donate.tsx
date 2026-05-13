import { Heart, Activity, HandHeart, ShieldCheck } from "lucide-react";

export function Donate() {
  return (
    <div className="bg-pride-black text-pride-white min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="font-serif font-black text-5xl md:text-7xl mb-6 text-rainbow block w-fit">Support Pride.</h1>
        <p className="text-xl text-pride-white/80 mb-12 max-w-2xl">
          Your donation keeps Pride accessible, funds safety programs, and ensures our artists are paid fairly. Every dollar stays local.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-pride-white/10 border border-pride-white/20 p-8 hover:bg-pride-white/15 transition-colors">
             <h3 className="font-serif font-bold text-2xl mb-4">One-Time Donation</h3>
             <p className="text-pride-white/70 mb-6 font-sans text-sm">Make a direct impact today. Help us lock down essential logistics and infrastructure.</p>
             <button className="w-full bg-pride-gold text-pride-black py-4 font-bold uppercase tracking-wider text-sm hover:bg-pride-white transition-colors">
               Donate Once
             </button>
          </div>
          <div className="bg-pride-white/10 border border-pride-gold/30 p-8 hover:bg-pride-white/15 transition-colors relative">
             <div className="absolute top-0 right-0 bg-pride-gold text-pride-black text-[10px] font-mono font-bold px-3 py-1 uppercase tracking-widest translate-x-2 -translate-y-2">Sustainer</div>
             <h3 className="font-serif font-bold text-2xl mb-4">Monthly Partner</h3>
             <p className="text-pride-white/70 mb-6 font-sans text-sm">Become a monthly sustainer to help us plan year-round community events.</p>
             <button className="w-full bg-pride-gold text-pride-black py-4 font-bold uppercase tracking-wider text-sm hover:bg-pride-white transition-colors">
               Donate Monthly
             </button>
          </div>
        </div>

        <div className="border-t border-pride-white/20 pt-12">
          <h2 className="font-serif font-bold text-3xl mb-8 text-center">Where does the money go?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
             <div className="flex flex-col items-center gap-3">
                <ShieldCheck size={32} className="text-pride-teal"/>
                <span className="font-sans font-bold text-sm">Security & Safety</span>
             </div>
             <div className="flex flex-col items-center gap-3">
                <Activity size={32} className="text-pride-violet"/>
                <span className="font-sans font-bold text-sm">Stage Production</span>
             </div>
             <div className="flex flex-col items-center gap-3">
                <HandHeart size={32} className="text-pride-rose"/>
                <span className="font-sans font-bold text-sm">Accessibility Services</span>
             </div>
             <div className="flex flex-col items-center gap-3">
                <Heart size={32} className="text-pride-gold"/>
                <span className="font-sans font-bold text-sm">Community Programs</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
