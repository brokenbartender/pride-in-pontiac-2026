import { useState } from "react";
import { HeartHandshake, CheckCircle, ArrowRight } from "lucide-react";
import { TransStripe } from "../components/TransStripe";
import { WEB3FORMS_KEY, FormStatus, submitForm } from "../lib/web3forms";

export function Volunteers() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const { success } = await submitForm(e);
      setStatus(success ? "success" : "error");
      if (success) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto border border-pride-black/10 bg-pride-white p-10 md:p-16 shadow-xl relative overflow-hidden">
        <TransStripe className="absolute top-0 left-0 w-full h-2" />
        <h1 className="font-serif font-black text-5xl md:text-6xl mb-6 flex items-center gap-4 mt-2">
          <HeartHandshake className="text-pride-rose w-12 h-12" />
          Volunteers
        </h1>
        <p className="text-lg text-pride-muted mb-12 max-w-2xl">
          Pride doesn't happen without our incredible community volunteers. Give
          your time to help keep the event safe, accessible, and fun.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">
              Available Roles
            </h3>
            <ul className="space-y-3 font-sans text-pride-ink/80">
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-rose shrink-0 mt-0.5"
                />
                Setup & Teardown Crew
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-rose shrink-0 mt-0.5"
                />
                Info Booth & Check-in
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-rose shrink-0 mt-0.5"
                />
                Accessibility Navigators
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-rose shrink-0 mt-0.5"
                />
                Safety & De-escalation Support
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif font-bold text-2xl mb-4">What You Get</h3>
            <ul className="space-y-3 font-sans text-pride-ink/80">
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-rose shrink-0 mt-0.5"
                />
                Official Pride in Pontiac Staff T-Shirt
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-rose shrink-0 mt-0.5"
                />
                Meal voucher for local food
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-pride-rose shrink-0 mt-0.5"
                />
                Free admission to evening Mainstage
              </li>
            </ul>
          </div>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center py-12 text-center gap-4 border-t border-pride-black/10 mt-4">
            <CheckCircle size={48} className="text-pride-rose" />
            <h3 className="font-serif font-bold text-2xl">You're signed up!</h3>
            <p className="text-pride-muted max-w-sm">
              We'll reach out closer to the event with your shift details and
              staff shirt info.
            </p>
          </div>
        ) : (
          <form
            className="space-y-8 border-t border-pride-black/10 pt-10"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <input
              type="hidden"
              name="subject"
              value="New Volunteer Sign-Up — Pride in Pontiac 2026"
            />
            <input
              type="hidden"
              name="from_name"
              value="Pride in Pontiac Website"
            />

            <h3 className="font-serif font-bold text-2xl">Sign Up to Volunteer</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-rose transition-colors font-sans w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="hello@example.com"
                  required
                  className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-rose transition-colors font-sans w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                Preferred Role
              </label>
              <select
                name="preferred_role"
                required
                className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-rose transition-colors font-sans w-full appearance-none rounded-none"
              >
                <option value="" disabled>
                  Select a role
                </option>
                <option>Setup & Teardown Crew</option>
                <option>Info Booth & Check-in</option>
                <option>Accessibility Navigator</option>
                <option>Safety & De-escalation Support</option>
                <option>No preference — wherever I'm needed</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                Availability on August 14
              </label>
              <select
                name="availability"
                required
                className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-rose transition-colors font-sans w-full appearance-none rounded-none"
              >
                <option value="" disabled>
                  Select availability
                </option>
                <option>All day (setup through teardown)</option>
                <option>Morning / Setup only (8 AM – 12 PM)</option>
                <option>Afternoon (12 PM – 5 PM)</option>
                <option>Evening (5 PM – close)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                Anything else we should know?
              </label>
              <textarea
                name="message"
                placeholder="Accessibility needs, skills, prior event experience, etc."
                className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-rose transition-colors font-sans w-full min-h-[80px] resize-y"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again or email
                baentertainmentMI@gmail.com directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full md:w-auto bg-pride-black text-pride-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-pride-rose transition-colors items-center justify-center gap-3 disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Sign Up to Volunteer"}
              {status !== "loading" && <ArrowRight size={18} />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
