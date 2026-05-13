import { ArrowRight, Info } from "lucide-react";
import { ReactNode } from "react";

function InputField({ label, type = "text", placeholder, options }: { label: string, type?: string, placeholder?: string, options?: string[] }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="font-mono text-[10px] uppercase tracking-widest text-pride-ink/70 font-bold">{label}</label>
      {type === "select" ? (
        <select className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-gold transition-colors font-sans w-full appearance-none rounded-none">
          <option value="" disabled selected>Select an option</option>
          {options?.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      ) : type === "textarea" ? (
        <textarea 
          placeholder={placeholder} 
          className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-gold transition-colors font-sans w-full min-h-[100px] resize-y" 
        />
      ) : (
        <input 
          type={type} 
          placeholder={placeholder} 
          className="bg-transparent border-b border-pride-black/20 py-3 text-pride-ink focus:outline-none focus:border-pride-gold transition-colors font-sans w-full" 
        />
      )}
    </div>
  );
}

export function GetInvolved() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-pride-muted">Take Action</span>
            <div className="w-16 h-px bg-pride-black/20"></div>
          </div>
          
          <h1 className="font-serif font-black text-5xl md:text-7xl mb-8 leading-tight">
            Let's Build <br/><em className="text-pride-teal">Something Together.</em>
          </h1>
          <p className="text-lg text-pride-muted leading-relaxed mb-12 max-w-lg">
            Whether you want to vend your LGBTQ+ owned business, partner as a community health resource, sponsor the event, or volunteer—we want you here. 
          </p>

          {/* Quick info boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-pride-white p-6 border border-pride-black/10">
              <span className="font-mono text-[9px] uppercase tracking-widest text-pride-gold mb-2 block font-bold">Email Us Directly</span>
              <a href="mailto:baentertainmentMI@gmail.com" className="text-sm font-medium hover:text-pride-gold transition-colors">baentertainmentMI<br/>@gmail.com</a>
            </div>
            <div className="bg-pride-white p-6 border border-pride-black/10">
              <span className="font-mono text-[9px] uppercase tracking-widest text-pride-violet mb-2 block font-bold">Performer Booking</span>
              <a href="mailto:bookings@unorthodoxdragshow.com" className="text-sm font-medium hover:text-pride-violet transition-colors">bookings<br/>@unorthodoxdragshow.com</a>
            </div>
          </div>
        </div>

        {/* Contact Form representing "Inquiry Form" */}
        <div className="bg-pride-white border border-pride-black/10 p-8 md:p-12 shadow-xl relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-pride-black/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-2xl pointer-events-none"></div>
          
          <h3 className="font-serif font-bold text-3xl mb-2">Get in Touch</h3>
          <p className="text-sm text-pride-muted mb-10">Use this form to express your interest in vending, volunteering, or partnering.</p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InputField label="Name / Organization" placeholder="Your name or business" />
              <InputField label="Email Address" type="email" placeholder="hello@example.com" />
            </div>
            
            <InputField 
              label="I am interested in..." 
              type="select" 
              options={["Sponsorship ($150 - $2500+)", "Vending (Marketplace)", "Community/Health Partner Booth", "Volunteering", "Other Inquiry"]} 
            />
            
            <InputField label="Message" type="textarea" placeholder="Tell us about yourself and how you'd like to be involved..." />
            
            <button className="w-full bg-pride-black text-pride-white py-4 font-sans font-bold text-sm tracking-wide uppercase hover:bg-pride-teal transition-colors flex items-center justify-center gap-3">
              Submit Inquiry <ArrowRight size={16} />
            </button>
            <p className="text-[11px] text-pride-muted text-center flex items-center justify-center gap-2">
              <Info size={12}/> We typically respond within 48 hours.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
}
