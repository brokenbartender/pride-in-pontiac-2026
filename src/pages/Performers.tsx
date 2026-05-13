import { Mic2, ArrowRight } from "lucide-react";
import { LesbianStripe } from "../components/LesbianStripe";

export function Performers() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto border border-pride-black/10 bg-pride-white p-10 md:p-16 shadow-xl relative overflow-hidden">
        <LesbianStripe className="absolute top-0 left-0 w-full h-2" />
        <h1 className="font-serif font-black text-5xl md:text-6xl mb-6 flex items-center gap-4 mt-2">
          <Mic2 className="text-pride-violet w-12 h-12" />
          Performers
        </h1>
        <p className="text-lg text-pride-muted mb-12 max-w-2xl">
          From drag artists and local bands to community speakers—we are looking for diverse talent to fill both our daytime blocks and our evening Mainstage show.
        </p>

        <section className="mb-12">
            <h3 className="font-serif font-bold text-2xl mb-4">Stage Requirements & Info</h3>
            <p className="text-pride-ink/80 leading-relaxed mb-4">
              All selected performers will be compensated. We are committed to paying artists for their time and talent. Due to the volume of applications, not everyone will be selected for this year's event.
            </p>
            <p className="text-pride-ink/80 leading-relaxed">
              Curated by Unorthodox Drag, we prioritize artists who uplift the LGBTQ+ community and create inclusive spaces.
            </p>
        </section>

        <a href="mailto:bookings@unorthodoxdragshow.com?subject=Performer%20Booking" className="inline-flex w-full md:w-auto bg-pride-black text-pride-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-pride-violet transition-colors items-center justify-center gap-3">
          Submit Booking App <ArrowRight size={18}/>
        </a>
      </div>
    </div>
  );
}
