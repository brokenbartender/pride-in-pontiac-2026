import { MapPin, Info, Car, ShieldAlert } from "lucide-react";

export function EventInfo() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
         <h1 className="font-serif font-black text-5xl md:text-7xl mb-8">Event Info</h1>
         <p className="text-xl text-pride-muted mb-12">Everything you need to know about attending Pride in Pontiac.</p>
         
         <div className="space-y-12">
            <section className="bg-pride-white border border-pride-black/10 p-8 shadow-sm">
                <h2 className="font-serif font-bold text-3xl mb-4 flex items-center gap-3"><Info className="text-pride-gold"/> The Basics</h2>
                <ul className="space-y-4 font-sans text-lg text-pride-ink/80">
                  <li><strong>Date:</strong> August 14, 2026</li>
                  <li><strong>Location:</strong> The Crofoot & surrounding streets (Pontiac, MI)</li>
                  <li><strong>Entry:</strong> Free daytime festival, ticketed evening Mainstage (18+)</li>
                </ul>
            </section>

            <section className="bg-pride-white border border-pride-black/10 p-8 shadow-sm">
                <h2 className="font-serif font-bold text-3xl mb-4 flex items-center gap-3"><ShieldAlert className="text-pride-gold"/> What To Bring & Not To Bring</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-bold mb-2">Bring:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-pride-ink/80">
                      <li>Water bottle (sealed or empty)</li>
                      <li>Sunscreen</li>
                      <li>Comfortable shoes</li>
                      <li>Pride flags and gear</li>
                      <li>ID (if attending 18+ areas)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Do NOT Bring:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-pride-ink/80">
                      <li>Weapons of any kind</li>
                      <li>Outside alcohol</li>
                      <li>Large backpacks/coolers</li>
                      <li>Hate speech or symbols</li>
                    </ul>
                  </div>
                </div>
            </section>

            <section className="bg-pride-white border border-pride-black/10 p-8 shadow-sm">
                <h2 className="font-serif font-bold text-3xl mb-4 flex items-center gap-3"><Car className="text-pride-gold"/> Transit & Parking</h2>
                <p className="font-sans text-lg text-pride-ink/80 leading-relaxed mb-4">
                  There are multiple paid surface lots directly adjacent to The Crofoot, as well as metered street parking throughout downtown Pontiac. The primary lot is located immediately behind the venue on W Pike St. Ride-sharing is strongly encouraged.
                </p>
            </section>
         </div>
      </div>
    </div>
  )
}
