import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { PrideStripe } from "./PrideStripe";

type NavLink = { label: string; path: string };
type NavItem = NavLink | { label: string; children: NavLink[] };

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About the Event",
    children: [
      { label: "About", path: "/about" },
      { label: "Operations", path: "/operations" },
      { label: "Accessibility", path: "/accessibility" },
    ],
  },
  { label: "Performers", path: "/performers" },
  {
    label: "Thank You",
    children: [
      { label: "Sponsors", path: "/sponsors" },
      { label: "Vendors", path: "/vendors" },
      { label: "Volunteers", path: "/volunteers" },
    ],
  },
  { label: "Resources", path: "/resources" },
  { label: "Donate", path: "/donate" },
];

function isGroup(item: NavItem): item is { label: string; children: NavLink[] } {
  return "children" in item;
}

export function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const { pathname } = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setMobileGroup(null);
    window.scrollTo(0, 0);
  }, [pathname]);

  const openDesktopGroup = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };

  const scheduleCloseDesktopGroup = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenGroup(null), 150);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Banner — post-event thank you */}
      <div className="bg-pride-black text-pride-white py-2 px-6 flex justify-between items-center text-xs font-mono uppercase tracking-widest hidden md:flex">
        <span>Thank You, Pontiac — August 14, 2026</span>
        <span>
          2027 date coming soon · <Link to="/get-involved" className="underline hover:text-pride-gold transition-colors">Get on the list</Link>
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
              Stay in the Loop
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
            {navItems.map((item) => {
              if (isGroup(item)) {
                const isActive = item.children.some((c) => c.path === pathname);
                const isOpenNow = openGroup === item.label;
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => openDesktopGroup(item.label)}
                    onMouseLeave={scheduleCloseDesktopGroup}
                  >
                    <button
                      className={`flex items-center gap-1 font-sans text-[13px] font-medium tracking-wide uppercase hover:text-pride-gold transition-colors ${
                        isActive ? "text-pride-gold font-bold" : "text-pride-ink/80"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform ${isOpenNow ? "rotate-180" : ""}`} />
                    </button>
                    {isOpenNow && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
                        <div className="bg-pride-white border border-pride-ink/10 shadow-xl flex flex-col min-w-[160px] py-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className={`px-5 py-2.5 font-sans text-[13px] font-medium tracking-wide uppercase hover:text-pride-gold hover:bg-pride-cream transition-colors whitespace-nowrap ${
                                pathname === child.path ? "text-pride-gold font-bold" : "text-pride-ink/80"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-sans text-[13px] font-medium tracking-wide uppercase hover:text-pride-gold transition-colors ${
                    pathname === item.path ? "text-pride-gold font-bold" : "text-pride-ink/80"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="xl:hidden absolute top-20 left-0 w-full bg-pride-cream border-b border-pride-ink/10 shadow-xl flex flex-col pt-4 pb-8 px-6 gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navItems.map((item) => {
              if (isGroup(item)) {
                const isActive = item.children.some((c) => c.path === pathname);
                const isExpanded = mobileGroup === item.label;
                return (
                  <div key={item.label} className="flex flex-col">
                    <button
                      onClick={() => setMobileGroup(isExpanded ? null : item.label)}
                      className={`flex items-center justify-between font-serif text-2xl hover:text-pride-gold transition-colors ${
                        isActive ? "text-rainbow italic font-black" : "text-pride-ink font-bold"
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={22} className={`transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>
                    {isExpanded && (
                      <div className="flex flex-col gap-3 pl-4 mt-3 border-l-2 border-pride-ink/10">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`font-sans text-base uppercase tracking-wide hover:text-pride-gold transition-colors ${
                              pathname === child.path ? "text-pride-gold font-bold" : "text-pride-ink/70 font-medium"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-serif text-2xl hover:text-pride-gold transition-colors ${
                    pathname === item.path ? "text-rainbow italic font-black" : "text-pride-ink font-bold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/get-involved"
              className="w-fit mt-6 bg-pride-black text-pride-white px-8 py-4 font-sans font-bold uppercase tracking-wider text-sm hover:bg-pride-gold hover:text-pride-black transition-colors flex items-center gap-2"
            >
              Stay in the Loop <ArrowRight size={16} />
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
                  <span className="block text-pride-white/40 uppercase text-xs tracking-wider mb-1">General</span>
                  <a href="mailto:prideinpontiac@gmail.com" className="hover:text-pride-white transition-colors break-all">prideinpontiac@gmail.com</a>
                </li>
                <li className="break-words">
                  <span className="block text-pride-white/40 uppercase text-xs tracking-wider mb-1">Sponsorship</span>
                  <a href="mailto:baentertainmentMI@gmail.com" className="hover:text-pride-white transition-colors break-all">baentertainmentMI@gmail.com</a>
                </li>
                <li className="break-words">
                  <span className="block text-pride-white/40 uppercase text-xs tracking-wider mb-1">Performers</span>
                  <a href="mailto:bookings@unorthodoxdragshow.com" className="hover:text-pride-white transition-colors break-all">bookings@unorthodoxdragshow.com</a>
                </li>
                <li>
                  <Link to="/get-involved" className="hover:text-pride-white transition-colors">Contact Form →</Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="font-mono text-xs text-pride-gold tracking-widest uppercase mb-6">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4 font-sans text-sm text-pride-white/70">
                <div className="flex flex-col space-y-3">
                  <Link to="/about" className="hover:text-pride-white transition-colors w-fit">About Us</Link>
                  <Link to="/operations" className="hover:text-pride-white transition-colors w-fit">Operations</Link>
                  <Link to="/resources" className="hover:text-pride-white transition-colors w-fit">Resources</Link>
                  <Link to="/accessibility" className="hover:text-pride-white transition-colors w-fit">Accessibility</Link>
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
