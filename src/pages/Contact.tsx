import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { AsexualStripe } from "../components/AsexualStripe";

export function Contact() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6 relative overflow-hidden">
      <AsexualStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />
      <div className="max-w-4xl mx-auto mt-4">
        <h1 className="font-serif font-black text-5xl md:text-7xl mb-6">Contact Us</h1>
        <p className="text-xl text-pride-muted mb-12 max-w-2xl">
          Questions, comments, or media inquiries? Reach out to the organizers below.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-pride-white border border-pride-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-pride-teal/10 flex items-center justify-center rounded-full mb-6 text-pride-teal">
                <Mail size={24}/>
             </div>
             <h3 className="font-serif font-bold text-2xl mb-2">General Inquiries & Sponsorship</h3>
             <p className="text-pride-muted text-sm mb-6">For media, operations, or connecting on sponsorship tiers.</p>
             <a href="mailto:baentertainmentMI@gmail.com" className="font-bold flex items-center gap-2 hover:text-pride-teal transition-colors">
                baentertainmentMI@gmail.com <ArrowRight size={16}/>
             </a>
          </div>

          <div className="bg-pride-white border border-pride-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-pride-violet/10 flex items-center justify-center rounded-full mb-6 text-pride-violet">
                <MessageSquare size={24}/>
             </div>
             <h3 className="font-serif font-bold text-2xl mb-2">Performer Bookings</h3>
             <p className="text-pride-muted text-sm mb-6">For booking inquiries regarding stage time, drag performances, or speakers.</p>
             <a href="mailto:bookings@unorthodoxdragshow.com" className="font-bold flex items-center gap-2 hover:text-pride-violet transition-colors">
                bookings@unorthodoxdragshow.com <ArrowRight size={16}/>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
}
