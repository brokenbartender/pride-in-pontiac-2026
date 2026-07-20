import { Store, CheckCircle, CreditCard, ArrowRight } from "lucide-react";
import { BiStripe } from "../components/BiStripe";
import { VENDOR_BOOTH_FEE_CHECKOUT_URL } from "../lib/eventLinks";

export function Vendors() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto border border-pride-black/10 bg-pride-white p-10 md:p-16 shadow-xl relative overflow-hidden">
        <BiStripe className="absolute top-0 left-0 w-full h-2" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-pride-teal/10 blur-[50px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

        <h1 className="font-serif font-black text-5xl md:text-6xl mb-6 flex items-center gap-4">
          <Store className="text-pride-teal w-12 h-12" />
          Vendors
        </h1>
        <p className="text-lg text-pride-muted mb-12 max-w-2xl">
          Showcase your LGBTQ+ owned business, food truck, or community
          organization in our outdoor marketplace.
        </p>

        <div className="space-y-8 mb-12">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">
              Marketplace Details
            </h3>
            <ul className="space-y-3 font-sans text-pride-ink/80">
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-teal shrink-0 mt-0.5"
                />
                Outdoor 10×10 booth space (tent/tables required by vendor)
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-teal shrink-0 mt-0.5"
                />
                Setup starting at 8:00 AM, breakdown at 6:00 PM
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-teal shrink-0 mt-0.5"
                />
                Limited electricity available — first-come, first-served
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">
              Values & Requirements
            </h3>
            <p className="text-pride-ink/80 leading-relaxed">
              All vendors must align with Pride in Pontiac values. Hate speech,
              discriminatory practices, or non-inclusive merchandise will result
              in immediate removal. BIPOC and Trans/Non-binary owned businesses
              are heavily encouraged to apply.
            </p>
          </div>

          <div className="bg-pride-cream border border-pride-black/10 p-8">
            <h3 className="font-serif font-bold text-2xl mb-3">Booth Fee</h3>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="font-serif font-black text-4xl text-pride-ink">$35</span>
              <span className="text-pride-muted text-sm">standard vendor table</span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-pride-muted mb-6">
              Card checkout: $36.35 <span className="normal-case tracking-normal">(covers processing fee, so we net the full $35)</span>
            </p>
            <p className="text-sm text-pride-muted mb-6 leading-relaxed">
              Pay your booth fee once your application below is approved. Prefer to avoid the card fee? Bring cash or a check day-of instead.
            </p>
            <a
              href={VENDOR_BOOTH_FEE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pride-teal text-pride-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-pride-black transition-colors"
            >
              <CreditCard size={16} /> Pay Booth Fee <ArrowRight size={14} />
            </a>
          </div>
        </div>

        <div className="border-t border-pride-black/10 pt-10">
          <h3 className="font-serif font-bold text-2xl mb-6">Vendor Application</h3>
          <iframe
            src="https://tally.so/embed/PdkqL1?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="900"
            frameBorder="0"
            title="Pride in Pontiac Vendor Application"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
