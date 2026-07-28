import { Accessibility as AccessibilityIcon, Ear, Dog, VolumeX } from "lucide-react";
import { DisabilityPrideStripe } from "../components/DisabilityPrideStripe";

export function Accessibility() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto border border-pride-black/10 bg-pride-white p-10 md:p-16 shadow-xl relative overflow-hidden">
        <DisabilityPrideStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />
        <h1 className="font-serif font-black text-5xl md:text-6xl mb-6 flex items-center gap-4 mt-2">
          <AccessibilityIcon className="text-pride-ink w-12 h-12" />
          Accessibility
        </h1>
        <p className="text-lg text-pride-muted mb-12 max-w-2xl">
          We are committed to making Pride in Pontiac accessible to all bodies and abilities. While working within elements of historic infrastructure, we have planned the following accommodations.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-pride-black/5 p-6 border border-pride-black/10">
            <h3 className="font-bold flex items-center gap-2 mb-3"><AccessibilityIcon size={18}/> Wheelchair Access</h3>
            <p className="text-sm text-pride-ink/80 leading-relaxed">The outdoor Vendor Marketplace is fully paved. The Crofoot main floor and patio are wheelchair accessible, including an ADA compliant restroom. (Note: balcony areas are stair-only).</p>
          </div>
          <div className="bg-pride-black/5 p-6 border border-pride-black/10">
            <h3 className="font-bold flex items-center gap-2 mb-3"><VolumeX size={18}/> Sensory Safe Zones</h3>
            <p className="text-sm text-pride-ink/80 leading-relaxed">A low-stimulation area is available inside the Vernors Room. Earplugs will be available free of charge at the Info Booth.</p>
          </div>
          <div className="bg-pride-black/5 p-6 border border-pride-black/10">
            <h3 className="font-bold flex items-center gap-2 mb-3"><Ear size={18}/> ASL Interpretation</h3>
            <p className="text-sm text-pride-ink/80 leading-relaxed">ASL interpreters will be provided for mainstage speakers and select evening performances. A dedicated viewing area near the stage will be reserved.</p>
          </div>
          <div className="bg-pride-black/5 p-6 border border-pride-black/10">
            <h3 className="font-bold flex items-center gap-2 mb-3"><Dog size={18}/> Service Animals</h3>
            <p className="text-sm text-pride-ink/80 leading-relaxed">Trained service animals are welcome in all areas. A relief area is marked on the map. Pets and emotional support animals are allowed outside but highly discouraged due to asphalt heat and noise.</p>
          </div>
        </div>

        <p className="text-sm text-pride-muted border-t border-pride-black/10 pt-6">
          If you have specific accessibility needs not outlined here, please email us directly at <a href="mailto:prideinpontiac@gmail.com" className="font-bold border-b border-pride-ink hover:text-pride-gold transition-colors">prideinpontiac@gmail.com</a>.
        </p>
      </div>
    </div>
  );
}
