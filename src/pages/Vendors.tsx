import { Store, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { BiStripe } from "../components/BiStripe";

export function Vendors() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto border border-pride-black/10 bg-pride-white p-10 md:p-16 shadow-xl relative overflow-hidden">
        <BiStripe className="absolute top-0 left-0 w-full h-2" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-pride-teal/10 blur-[50px] rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>

        <h1 className="font-serif font-black text-5xl md:text-6xl mb-6 flex items-center gap-4">
          <Store className="text-pride-teal w-12 h-12" />
          Thank You, Vendors
        </h1>
        <p className="text-lg text-pride-muted mb-8 max-w-2xl">
          The outdoor marketplace at Pride in Pontiac 2026 was filled with LGBTQ+-owned businesses, food trucks, and community organizations. Thank you for showing up and showing out.
        </p>

        <img src="/images/events/vendor-bnektar-product.jpg" alt="B. Nektar Meadery's alcohol-free Sober craft mocktail cans on ice at their Pride in Pontiac marketplace booth" className="w-full h-72 object-cover rounded-sm shadow-lg mb-12" />

        <div className="space-y-8 mb-4">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">
              What Made It Work
            </h3>
            <ul className="space-y-3 font-sans text-pride-ink/80">
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-pride-teal shrink-0 mt-0.5" />
                A full outdoor marketplace of LGBTQ+-owned and allied vendors
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-pride-teal shrink-0 mt-0.5" />
                BIPOC and Trans/Non-binary owned businesses front and center
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={18} className="text-pride-teal shrink-0 mt-0.5" />
                A vendor community that aligned with Pride in Pontiac's values
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pride-black/10 pt-10">
          <h3 className="font-serif font-bold text-2xl mb-3">Vending in 2027?</h3>
          <p className="text-pride-muted mb-6 max-w-2xl">
            We're already planning our second year. If you want a booth at Pride in Pontiac 2027, get in touch and we'll reach out when applications open.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 bg-pride-teal text-pride-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-pride-black transition-colors"
          >
            Get on the 2027 Vendor List
          </Link>
        </div>
      </div>
    </div>
  );
}
