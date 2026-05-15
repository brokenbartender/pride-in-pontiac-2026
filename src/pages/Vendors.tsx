import { useState } from "react";
import { Store, CheckCircle, ArrowRight } from "lucide-react";
import { BiStripe } from "../components/BiStripe";
import { WEB3FORMS_KEY, FormStatus, submitForm } from "../lib/web3forms";

export function Vendors() {
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
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center py-12 text-center gap-4">
            <CheckCircle size={48} className="text-pride-teal" />
            <h3 className="font-serif font-bold text-2xl">Application received!</h3>
            <p className="text-pride-muted max-w-sm">
              We'll be in touch within 48 hours to confirm your spot and share
              load-in details.
            </p>
          </div>
        ) : (
          <form className="space-y-8 border-t border-pride-black/10 pt-10" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
            <input
              type="hidden"
              name="subject"
              value="New Vendor Application — Pride in Pontiac 2026"
            />
            <input
              type="hidden"
              name="from_name"
              value="Pride in Pontiac Website"
            />

            <h3 className="font-serif font-bold text-2xl">Vendor Application</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                  Business / Organization Name
                </label>
                <input
                  type="text"
                  name="business_name"
                  placeholder="Your business name"
                  required
                  className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                  Contact Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="hello@yourbusiness.com"
                  required
                  className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="(555) 555-5555"
                  className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                Vendor Type
              </label>
              <select
                name="vendor_type"
                required
                className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full appearance-none rounded-none"
              >
                <option value="" disabled>
                  Select vendor type
                </option>
                <option>Retail / Merchandise</option>
                <option>Art / Handmade Goods</option>
                <option>Community / Nonprofit Organization</option>
                <option>Health & Wellness</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                Do you need electricity?
              </label>
              <select
                name="electricity"
                className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full appearance-none rounded-none"
              >
                <option value="No">No</option>
                <option value="Yes">Yes (limited availability)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                Tell us about your business
              </label>
              <textarea
                name="message"
                placeholder="What will you be selling or offering? Are you LGBTQ+ and/or BIPOC owned?"
                required
                className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full min-h-[100px] resize-y"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please try again or email baentertainmentMI@gmail.com directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex w-full md:w-auto bg-pride-black text-pride-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-pride-teal transition-colors items-center justify-center gap-3 disabled:opacity-60"
            >
              {status === "loading" ? "Submitting..." : "Submit Application"}
              {status !== "loading" && <ArrowRight size={18} />}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
