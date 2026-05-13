import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string | JSX.Element;
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-white/10 bg-pride-white/5 overflow-hidden">
          <button 
            className="w-full text-left p-6 font-serif font-bold text-lg flex justify-between items-center hover:bg-pride-white/10 transition-colors" 
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span>{faq.q}</span>
            <ChevronDown className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} size={20} />
          </button>
          {openIndex === index && (
            <div className="p-6 pt-0 text-pride-white/70 border-t border-white/10 leading-relaxed">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
