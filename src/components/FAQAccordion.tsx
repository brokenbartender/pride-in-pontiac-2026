import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string | JSX.Element;
}

export function FAQAccordion({ faqs, theme = "dark" }: { faqs: FAQItem[]; theme?: "dark" | "light" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const containerClass = theme === "dark"
    ? "border border-white/10 bg-pride-white/5"
    : "border border-pride-black/10 bg-pride-black/[0.02]";
  const questionClass = theme === "dark" ? "text-pride-white" : "text-pride-ink";
  const hoverClass = theme === "dark" ? "hover:bg-pride-white/10" : "hover:bg-pride-black/5";
  const dividerClass = theme === "dark" ? "border-white/10" : "border-pride-black/10";
  const answerClass = theme === "dark" ? "text-pride-white/70" : "text-pride-muted";

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className={`${containerClass} overflow-hidden`}>
          <button 
            className={`w-full text-left p-6 font-serif font-bold text-lg flex justify-between items-center transition-colors ${questionClass} ${hoverClass}`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{faq.q}</span>
            <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} size={20} />
          </button>
          {openIndex === index && (
            <div className={`p-6 pt-0 border-t leading-relaxed ${dividerClass} ${answerClass}`}>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
