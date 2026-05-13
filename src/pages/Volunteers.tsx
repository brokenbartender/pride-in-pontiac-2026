import { HeartHandshake, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { TransStripe } from "../components/TransStripe";

export function Volunteers() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto border border-pride-black/10 bg-pride-white p-10 md:p-16 shadow-xl relative overflow-hidden">
        <TransStripe className="absolute top-0 left-0 w-full h-2" />
        <h1 className="font-serif font-black text-5xl md:text-6xl mb-6 flex items-center gap-4 mt-2">
          <HeartHandshake className="text-pride-rose w-12 h-12" />
          Volunteers
        </h1>
        <p className="text-lg text-pride-muted mb-12 max-w-2xl">
          Pride doesn't happen without our incredible community volunteers. Give your time to help keep the event safe, accessible, and fun.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">Available Roles</h3>
            <ul className="space-y-3 font-sans text-pride-ink/80">
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" /> Setup & Teardown Crew</li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" /> Info Booth & Check-in</li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" /> Accessibility Navigators</li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" /> Safety & De-escalation Support</li>
            </ul>
          </div>
          <div>
             <h3 className="font-serif font-bold text-2xl mb-4">What You Get</h3>
             <ul className="space-y-3 font-sans text-pride-ink/80">
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" /> Official Pride in Pontiac Staff T-Shirt</li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" /> Meal voucher for local food trucks</li>
              <li className="flex items-start gap-3"><CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" /> Free admission to evening Mainstage</li>
            </ul>
          </div>
        </div>

        <Link to="/get-involved" className="inline-flex w-full md:w-auto bg-pride-black text-pride-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-pride-rose transition-colors items-center justify-center">
          Sign Up to Volunteer
        </Link>
      </div>
    </div>
  );
}
