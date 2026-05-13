import { ChevronDown } from "lucide-react";

export function FAQAccordion({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-black/10 rounded-lg bg-white overflow-hidden mb-2">
      <button 
        className="w-full text-left p-4 font-bold flex justify-between items-center" 
        onClick={onClick}
      >
        <span>{question}</span>
        <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} size={20} />
      </button>
      {isOpen && (
        <div className="p-4 pt-0 text-gray-500 border-t border-black/5 mt-2">
          {answer}
        </div>
      )}
    </div>
  );
}
