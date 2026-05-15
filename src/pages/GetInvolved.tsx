import { useState } from "react";
import { ArrowRight, Info, CheckCircle } from "lucide-react";
import { WEB3FORMS_KEY, FormStatus, submitForm } from "../lib/web3forms";

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  options,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  options?: string[];
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
        {label}
      </label>
      {type === "select" ? (
        <select
          name={name}
          required={required}
          className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-gold transition-colors font-sans w-full appearance-none rounded-none"
        >
          <option value="" disabled>
            Select an option
          </option>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-gold transition-colors font-sans w-full min-h-[100px] resize-y"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
          className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-gold transition-colors font-sans w-full"
        />
      )}
    </div>
  );
}

export function GetInvolved() {
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
    <div className="bg-pride-cream text-pride-ink min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-muted">
              Take Action
            </span>
            <div className="w-16 h-px bg-pride-black/20"></div>
          </div>

          <h1 className="font-serif font-black text-5xl md:text-7xl mb-8 leading-tight">
            Let's Build <br />
            <em className="text-pride-teal">Something Together.</em>
          </h1>
          <p className="text-lg text-pride-muted leading-relaxed mb-12 max-w-lg">
            Whether you want to vend your LGBTQ+ owned business, partner as a
            community health resource, sponsor the event, or volunteer — we want
            you here.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-pride-white p-6 border border-pride-black/10">
              <span className="font-mono text-[9px] uppercase tracking-widest text-pride-gold mb-2 block font-bold">
                Email Us Directly
              </span>
              <a
                href="mailto:baentertainmentMI@gmail.com"
                className="text-sm font-medium hover:text-pride-gold transition-colors"
              >
                baentertainmentMI
                <br />
                @gmail.com
              </a>
            </div>
            <div className="bg-pride-white p-6 border border-pride-black/10">
              <span className="font-mono text-[9px] uppercase tracking-widest text-pride-violet mb-2 block font-bold">
                Performer Booking
              </span>
              <a
                href="mailto:bookings@unorthodoxdragshow.com"
                className="text-sm font-medium hover:text-pride-violet transition-colors"
              >
                bookings
                <br />
                @unorthodoxdragshow.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-pride-white border border-pride-black/10 p-8 md:p-12 shadow-xl relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-pride-black/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl pointer-events-none"></div>

          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-6">
              <CheckCircle size={48} className="text-pride-teal" />
              <h3 className="font-serif font-bold text-3xl">Got it!</h3>
              <p className="text-pride-muted max-w-xs">
                We'll be in touch within 48 hours at the email you provided.
              </p>
            </div>
          ) : (
            <>
              <h3 className="font-serif font-bold text-3xl mb-2">
                Get in Touch
              </h3>
              <p className="text-sm text-pride-muted mb-10">
                Use this form to express your interest in vending, volunteering,
                or partnering.
              </p>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
                <input
                  type="hidden"
                  name="subject"
                  value="New Inquiry — Pride in Pontiac 2026"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Pride in Pontiac Website"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField
                    label="Name / Organization"
                    name="name"
                    placeholder="Your name or business"
                    required
                  />
                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="hello@example.com"
                    required
                  />
                </div>

                <InputField
                  label="I am interested in..."
                  name="interest"
                  type="select"
                  required
                  options={[
                    "Sponsorship ($150 – $2500+)",
                    "Vending (Marketplace)",
                    "Community / Health Partner Booth",
                    "Volunteering",
                    "Other Inquiry",
                  ]}
                />

                <InputField
                  label="Message"
                  name="message"
                  type="textarea"
                  placeholder="Tell us about yourself and how you'd like to be involved..."
                  required
                />

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-pride-black text-pride-white py-4 font-sans font-bold text-sm tracking-wide uppercase hover:bg-pride-teal transition-colors flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                  {status !== "loading" && <ArrowRight size={16} />}
                </button>
                <p className="text-[11px] text-pride-muted text-center flex items-center justify-center gap-2">
                  <Info size={12} /> We typically respond within 48 hours.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
