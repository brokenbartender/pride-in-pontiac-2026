import { Mic2, Star, Users } from "lucide-react";
import { LesbianStripe } from "../components/LesbianStripe";

const DAYTIME_LINEUP = [
  { time: "1:00 PM", performers: ["Stela", "Miss Biscuits", "Rick Oliver", "King Amari", "Drapperux"] },
  { time: "2:00 PM", performers: ["Cita Rhode Caliente", "Cocoa Cola Caliente", "Juicee Strabotty", "Jhené Gemini"] },
  { time: "3:00 PM", performers: ["Raven Divine Cassadine", "Donna Youknowit", "Erton", "Bella Belial", "Jaye"] },
  { time: "4:00 PM", performers: ["DJ set — no live performers this slot"] },
  { time: "5:00 PM", performers: ["Ariana Love", "Sapphire Melatonin", "Email", "Ashley Jay Williams", "The Monarch", "Eevie Asthema", "T Bandz"] },
  { time: "6:00 PM", performers: ["The Tater Tot", "Jordan Michell", "Sir Guy", "Mag N. Cheez", "Johnny Sun"] },
  { time: "7:00 PM", performers: ["Sirinity Sapphire", "Donnie Love Hunter", "Just Brinxx", "Creme Fraiche", "Alise King"] },
];

const AFTER_PARTY_LINEUP = [
  "Donnie Love Hunter",
  "Stela Vulva",
  "Just Brinxx",
  "Lilith Von Tal",
  "Leafy Green",
  "Donna YouKnowIt",
  "Eartha Kitten",
  "Michael Christian",
];

export function Performers() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="border border-pride-black/10 bg-pride-white p-10 md:p-16 shadow-xl relative overflow-hidden mb-12">
          <LesbianStripe className="absolute top-0 left-0 w-full h-2" />
          <h1 className="font-serif font-black text-5xl md:text-6xl mb-6 flex items-center gap-4 mt-2">
            <Mic2 className="text-pride-violet w-12 h-12" />
            The Lineup
          </h1>
          <p className="text-lg text-pride-muted max-w-2xl mb-6">
            Pontiac's first Pride, stacked top to bottom. The day opened at noon with a community commencement &mdash; local politicians, organizations, and a special Michigan Legislature tribute presented by Rep. Brenda Carter. Performances ran 1–7 PM, all ages, closed out by Alise King. The After Party took the stage at 10 PM, hosted by Monica Devereaux, running until close at 2 AM.
          </p>
          <p className="text-sm text-pride-muted/80 max-w-2xl">
            Held across The Crofoot's Pike Room (main stage), Vernors Room (bar), Café (health resources by day, VIP lounge by night), and Patio (courtyard social hub).
          </p>
        </div>

        {/* Daytime Lineup */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <Star className="text-pride-gold" size={24} />
            <h2 className="font-serif font-black text-3xl md:text-4xl">Daytime — All Ages</h2>
          </div>
          <div className="space-y-3">
            {DAYTIME_LINEUP.map((slot) => (
              <div key={slot.time} className="bg-pride-white border border-pride-black/10 p-6 flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
                <span className="font-mono text-sm font-bold text-pride-gold uppercase tracking-widest w-24 shrink-0">{slot.time}</span>
                <p className="text-pride-ink font-medium leading-relaxed">
                  {slot.performers.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* After Party Lineup */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <Users className="text-pride-violet" size={24} />
            <h2 className="font-serif font-black text-3xl md:text-4xl">After Party — 18+</h2>
          </div>
          <div className="bg-pride-black text-pride-white border border-pride-black p-8 md:p-10">
            <p className="font-mono text-xs uppercase tracking-widest text-pride-gold-light mb-2">Doors 9 PM · Show 10 PM</p>
            <p className="font-serif font-bold text-2xl mb-6">
              Hosted by <span className="text-pride-gold-light">Monica Devereaux</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {AFTER_PARTY_LINEUP.map((name) => (
                <div key={name} className="bg-pride-white/5 border border-pride-white/10 px-4 py-3 text-center">
                  <span className="font-serif font-bold text-white/90">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stage Info */}
        <section className="bg-pride-white border border-pride-black/10 p-10">
          <h3 className="font-serif font-bold text-2xl mb-4">Thank You to Our Performers</h3>
          <p className="text-pride-ink/80 leading-relaxed mb-4">
            Every performer above was compensated for their time and talent. Curated by Unorthodox Drag, this lineup uplifted the LGBTQ+ community and made Pontiac's first Pride one to remember.
          </p>
          <p className="text-pride-ink/80 leading-relaxed">
            Booking inquiries for 2027 or other events can be sent to{" "}
            <a href="mailto:bookings@unorthodoxdragshow.com?subject=Performer%20Booking" className="font-bold underline hover:text-pride-violet transition-colors">
              bookings@unorthodoxdragshow.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
