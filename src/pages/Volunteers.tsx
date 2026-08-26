import { Link } from "react-router-dom";
import { HeartHandshake, CheckCircle } from "lucide-react";
import { TransStripe } from "../components/TransStripe";

export function Volunteers() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto border border-pride-black/10 bg-pride-white p-10 md:p-16 shadow-xl relative overflow-hidden">
        <TransStripe className="absolute top-0 left-0 w-full h-2" />
        <h1 className="font-serif font-black text-5xl md:text-6xl mb-6 flex items-center gap-4 mt-2">
          <HeartHandshake className="text-pride-rose w-12 h-12" />
          Thank You, Volunteers
        </h1>
        <p className="text-lg text-pride-muted mb-12 max-w-2xl">
          Pride in Pontiac 2026 didn't happen without our volunteers. You kept the event safe, accessible, and running smoothly from setup to teardown &mdash; thank you.
        </p>

        <div className="mb-4">
          <h3 className="font-serif font-bold text-2xl mb-4">
            Where Volunteers Showed Up
          </h3>
          <ul className="space-y-3 font-sans text-pride-ink/80">
            <li className="flex items-start gap-3">
              <CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" />
              Setup & Teardown Crew
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" />
              Info Booth & Check-in
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" />
              Accessibility Navigators
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle size={18} className="text-pride-rose shrink-0 mt-0.5" />
              Safety & De-escalation Support
            </li>
          </ul>
        </div>

        <div className="border-t border-pride-black/10 pt-10 mt-10">
          <h3 className="font-serif font-bold text-2xl mb-3">Volunteering in 2027?</h3>
          <p className="text-pride-muted mb-6 max-w-2xl">
            We're already planning next year's event. Get on the list and we'll reach out when volunteer sign-ups open.
          </p>
          <Link
            to="/get-involved"
            className="inline-flex items-center gap-2 bg-pride-rose text-pride-white px-6 py-3 font-bold text-sm uppercase tracking-wider hover:bg-pride-black transition-colors"
          >
            Get on the 2027 Volunteer List
          </Link>
        </div>
      </div>
    </div>
  );
}
