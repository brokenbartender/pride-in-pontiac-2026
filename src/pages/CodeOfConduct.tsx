import { ShieldAlert } from "lucide-react";
import { LeatherStripe } from "../components/LeatherStripe";

export function CodeOfConduct() {
  return (
    <div className="bg-pride-cream text-pride-ink min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto bg-pride-white p-10 md:p-16 shadow-xl relative overflow-hidden">
        <LeatherStripe className="absolute top-0 left-0 w-full h-2 md:h-3" />
        <h1 className="font-serif font-black text-5xl md:text-6xl mb-6 flex items-center gap-4 mt-2">
          <ShieldAlert className="text-[#E50024] w-12 h-12" />
          Code of Conduct
        </h1>
        <p className="text-lg text-pride-muted mb-12 max-w-2xl font-bold">
          Zero Tolerance for Hate.
        </p>

        <div className="prose prose-lg max-w-none text-pride-ink/80 space-y-6">
          <p>
            Pride in Pontiac is committed to providing a safe, inclusive, and harassment-free experience for everyone, regardless of gender identity, expression, sexual orientation, disability, physical appearance, body size, race, age, or religion.
          </p>
          
          <h3 className="font-serif font-bold text-2xl text-pride-ink mt-8">Expected Behavior</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Respect the physical and emotional boundaries of others.</li>
            <li>Always ask for consent before taking photos of individuals.</li>
            <li>Use people's stated names and pronouns.</li>
            <li>Look out for one another and report safety concerns immediately.</li>
          </ul>

          <h3 className="font-serif font-bold text-2xl text-pride-ink mt-8">Unacceptable Behavior</h3>
          <p>We do not tolerate harassment of participants in any form. This includes, but is not limited to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Intimidation, stalking, or following.</li>
            <li>Abusive, derogatory, or discriminatory language or imagery.</li>
            <li>Inappropriate physical contact or unwelcome sexual attention.</li>
            <li>Advocating for, or encouraging, any of the above behavior.</li>
          </ul>

          <h3 className="font-serif font-bold text-2xl text-pride-ink mt-8">Reporting</h3>
          <p>
            If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of the event staff immediately. Staff can be identified by their official volunteer/staff t-shirts and lanyards.
          </p>
          <p>
            Event organizers reserve the right to remove any person from the premises without refund if they violate this Code of Conduct.
          </p>
        </div>
      </div>
    </div>
  );
}
