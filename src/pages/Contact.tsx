import { useState } from "react";
import { Mail, MessageSquare, Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { AsexualStripe } from "../components/AsexualStripe";
import { WEB3FORMS_KEY, FormStatus, submitForm } from "../lib/web3forms";

export function Contact() {
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
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6 relative overflow-hidden">
      <AsexualStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />
      <div className="max-w-4xl mx-auto mt-4">
        <h1 className="font-serif font-black text-5xl md:text-7xl mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-pride-muted mb-12 max-w-2xl">
          Questions, comments, or media inquiries? Reach out below or send us a
          message directly.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-pride-white border border-pride-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pride-teal/10 flex items-center justify-center rounded-full mb-6 text-pride-teal">
              <Mail size={24} />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2">
              General Inquiries
            </h3>
            <p className="text-pride-muted text-sm mb-6">
              Questions, media, accessibility, or anything not covered by the categories below.
            </p>
            <a
              href="mailto:prideinpontiac@gmail.com"
              className="font-bold flex items-center gap-2 hover:text-pride-teal transition-colors"
            >
              prideinpontiac@gmail.com <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-pride-white border border-pride-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pride-gold/10 flex items-center justify-center rounded-full mb-6 text-pride-gold">
              <Briefcase size={24} />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2">
              Sponsorship
            </h3>
            <p className="text-pride-muted text-sm mb-6">
              For sponsorship tiers, invoices, or corporate partnership questions.
            </p>
            <a
              href="mailto:baentertainmentMI@gmail.com"
              className="font-bold flex items-center gap-2 hover:text-pride-gold transition-colors"
            >
              baentertainmentMI@gmail.com <ArrowRight size={16} />
            </a>
          </div>

          <div className="bg-pride-white border border-pride-black/10 p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pride-violet/10 flex items-center justify-center rounded-full mb-6 text-pride-violet">
              <MessageSquare size={24} />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2">
              Performer Bookings
            </h3>
            <p className="text-pride-muted text-sm mb-6">
              For booking inquiries regarding stage time, drag performances, or
              speakers.
            </p>
            <a
              href="mailto:bookings@unorthodoxdragshow.com"
              className="font-bold flex items-center gap-2 hover:text-pride-violet transition-colors"
            >
              bookings@unorthodoxdragshow.com <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="bg-pride-white border border-pride-black/10 p-8 md:p-12 shadow-xl">
          <h2 className="font-serif font-bold text-3xl mb-2">
            Send Us a Message
          </h2>
          <p className="text-sm text-pride-muted mb-10">
            Not sure where to start? Use this form and we'll route your message
            to the right person.
          </p>

          {status === "success" ? (
            <div className="flex flex-col items-center py-12 text-center gap-4">
              <CheckCircle size={48} className="text-pride-teal" />
              <h3 className="font-serif font-bold text-2xl">Message sent!</h3>
              <p className="text-pride-muted max-w-sm">
                We'll get back to you within 48 hours.
              </p>
            </div>
          ) : (
            <form className="space-y-8" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value={WEB3FORMS_KEY} />
              <input
                type="hidden"
                name="subject"
                value="New Contact Message — Pride in Pontiac 2026"
              />
              <input
                type="hidden"
                name="from_name"
                value="Pride in Pontiac Website"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    required
                    className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full"
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
                    className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                  Subject
                </label>
                <select
                  name="inquiry_type"
                  required
                  className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full appearance-none rounded-none"
                >
                  <option value="" disabled>
                    What is this about?
                  </option>
                  <option>General Question</option>
                  <option>Sponsorship</option>
                  <option>Media / Press Inquiry</option>
                  <option>Accessibility Request</option>
                  <option>Volunteer Question</option>
                  <option>Vendor Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  required
                  className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-teal transition-colors font-sans w-full min-h-[120px] resize-y"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please email prideinpontiac@gmail.com
                  directly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full md:w-auto bg-pride-black text-pride-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-pride-teal transition-colors flex items-center justify-center gap-3 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                {status !== "loading" && <ArrowRight size={16} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
