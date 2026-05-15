import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { PrideStripe } from "./PrideStripe";

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Tickets", path: "/tickets" },
    { label: "About", path: "/about" },
    { label: "Event Info", path: "/event-info" },
    { label: "Schedule", path: "/schedule" },
    { label: "Map", path: "/map" },
    { label: "Sponsors", path: "/sponsors" },
    { label: "Vendors", path: "/vendors" },
    { label: "Volunteers", path: "/volunteers" },
    { label: "Performers", path: "/performers" },
    { label: "Resources", path: "/resources" },
    { label: "Donate", path: "/donate" },
    { label: "Accessibility", path: "/accessibility" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner indicating date/location */}
      <div className="bg-pride-black text-pride-white py-2 px-6 flex justify-between items-center text-xs font-mono uppercase tracking-widest hidden md:flex">
        <span>August 14, 2026</span>
        <span>
          <a href="https://thecrofoot.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-pride-gold transition-colors">The Crofoot</a> · Pontiac, MI
        </span>
      </div>
      
      <PrideStripe className="w-full h-1.5" />

      {/* Navigation */}
      <nav className="bg-pride-cream border-b border-pride-ink/10 sticky top-0 z-50">
        {/* Top Header Row */}
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif tracking-tighter hover:opacity-80 transition-opacity flex items-baseline gap-1.5 whitespace-nowrap shrink-0">
            <span className="font-black text-rainbow text-2xl md:text-[28px] leading-none">Pride</span> 
            <span className="text-pride-ink/70 font-light text-lg md:text-[20px] leading-none">in</span>
            <span className="italic font-bold text-pride-ink text-2xl md:text-[28px] leading-none">Pontiac</span>
          </Link>

          {/* Desktop Call to Action */}
          <div className="hidden xl:flex items-center gap-4">
            <Link 
              to="/get-involved"
              className="bg-pride-black text-pride-white px-6 py-2.5 font-sans font-bold uppercase tracking-wider text-xs hover:bg-pride-gold hover:text-pride-black transition-colors shrink-0"
            >
              Take Action
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden text-pride-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Links Row */}
        <div className="hidden xl:flex bg-pride-white border-t border-pride-black/5 px-6">
          <div className="max-w-[1400px] mx-auto w-full flex items-center justify-center flex-wrap gap-x-6 gap-y-2 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-sans text-[13px] font-medium tracking-wide uppercase hover:text-pride-gold transition-colors ${
                  pathname === link.path ? "text-pride-gold font-bold" : "text-pride-ink/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="xl:hidden absolute top-20 left-0 w-full bg-pride-cream border-b border-pride-ink/10 shadow-xl flex flex-col pt-4 pb-8 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-serif text-2xl hover:text-pride-gold transition-colors ${
                  pathname === link.path ? "text-rainbow italic font-black" : "text-pride-ink font-bold"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/get-involved"
              className="w-fit mt-6 bg-pride-black text-pride-white px-8 py-4 font-sans font-bold uppercase tracking-wider text-sm hover:bg-pride-gold hover:text-pride-black transition-colors flex items-center gap-2"
            >
              Take Action <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-pride-black text-pride-white pt-24 pb-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            <div className="md:col-span-2 lg:col-span-5">
              <h2 className="font-serif mb-4 tracking-tighter flex items-baseline gap-2 flex-wrap">
                <span className="font-black text-rainbow text-3xl md:text-4xl leading-none">Pride</span> 
                <span className="text-pride-white/70 font-light text-2xl md:text-3xl leading-none">in</span>
                <span className="italic font-bold text-pride-white text-3xl md:text-4xl leading-none">Pontiac</span>
              </h2>
              <p className="font-sans text-pride-white/60 max-w-md text-sm leading-relaxed mb-6">
                Michigan's newest LGBTQ+ Pride celebration in the heart of Oakland County. Created by Broken Arrow Entertainment and Unorthodox Drag. <br />
                Still Here. Still Proud.
              </p>
              <div className="flex gap-4">
                {/* Social Placeholders */}
                <a href="#" className="w-10 h-10 border border-pride-white/20 flex items-center justify-center hover:border-pride-gold hover:text-pride-gold transition-colors">
                  <span className="font-mono text-xs">IG</span>
                </a>
                <a href="#" className="w-10 h-10 border border-pride-white/20 flex items-center justify-center hover:border-pride-gold hover:text-pride-gold transition-colors">
                  <span className="font-mono text-xs">FB</span>
                </a>
                <a href="#" className="w-10 h-10 border border-pride-white/20 flex items-center justify-center hover:border-pride-gold hover:text-pride-gold transition-colors">
                  <span className="font-mono text-xs">TT</span>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-4 w-full overflow-hidden">
              <h4 className="font-mono text-xs text-pride-gold tracking-widest uppercase mb-6">Contact</h4>
              <ul className="space-y-4 font-sans text-sm text-pride-white/70">
                <li className="break-words">
                  <span className="block text-pride-white/40 uppercase text-xs tracking-wider mb-1">General & Sponsorship</span>
                  <a href="mailto:baentertainmentMI@gmail.com" className="hover:text-pride-white transition-colors break-all">baentertainmentMI@gmail.com</a>
                </li>
                <li className="break-words">
                  <span className="block text-pride-white/40 uppercase text-xs tracking-wider mb-1">Performers</span>
                  <a href="mailto:bookings@unorthodoxdragshow.com" className="hover:text-pride-white transition-colors break-all">bookings@unorthodoxdragshow.com</a>
                </li>
              </ul>
            </div>
            
            <div className="lg:col-span-3">
              <h4 className="font-mono text-xs text-pride-gold tracking-widest uppercase mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4 font-sans text-sm text-pride-white/70">
                <div className="flex flex-col space-y-3">
                  <Link to="/tickets" className="hover:text-pride-white transition-colors w-fit">Tickets</Link>
                  <Link to="/about" className="hover:text-pride-white transition-colors w-fit">About Us</Link>
                  <Link to="/event-info" className="hover:text-pride-white transition-colors w-fit">Event Info</Link>
                  <Link to="/schedule" className="hover:text-pride-white transition-colors w-fit">Schedule</Link>
                  <Link to="/map" className="hover:text-pride-white transition-colors w-fit">Map</Link>
                  <Link to="/resources" className="hover:text-pride-white transition-colors w-fit">Resources</Link>
                  <Link to="/accessibility" className="hover:text-pride-white transition-colors w-fit">Accessibility</Link>
                  <Link to="/operations" className="hover:text-pride-white transition-colors w-fit">Operations</Link>
                </div>
                <div className="flex flex-col space-y-3">
                  <Link to="/sponsors" className="hover:text-pride-white transition-colors w-fit">Sponsors</Link>
                  <Link to="/vendors" className="hover:text-pride-white transition-colors w-fit">Vendors</Link>
                  <Link to="/volunteers" className="hover:text-pride-white transition-colors w-fit">Volunteers</Link>
                  <Link to="/performers" className="hover:text-pride-white transition-colors w-fit">Performers</Link>
                  <Link to="/code-of-conduct" className="hover:text-pride-white transition-colors w-fit">Code of Conduct</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-pride-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-pride-white/40 tracking-wider">
            <p>&copy; {new Date().getFullYear()} Pride in Pontiac. All rights reserved.</p>
            <p className="flex items-center gap-3">
              <span>Made with Pride in MI</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
