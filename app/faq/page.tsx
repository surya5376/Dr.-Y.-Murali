import React from "react";
import Link from "next/link";
import Navbar from "../../src/components/ui/Navbar";
import Footer from "../../src/components/ui/Footer";
import MobileBottomBar from "../../src/components/ui/MobileBottomBar";
import { Button } from "../../src/components/ui/Button";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  questions: FAQItem[];
}

const FAQ_SECTIONS: FAQCategory[] = [
  {
    category: "Consultations & Srikara Hospital Practice",
    questions: [
      {
        q: "Where does Dr. Y. Murali practice?",
        a: "Dr. Y. Murali practices as a Consultant Pulmonologist at Srikara Hospital, located at 222, Mythri Nagar, Phase II, Hafeezpet / Madeenaguda, Hyderabad, Telangana 500049.",
      },
      {
        q: "What are Dr. Y. Murali's consultation timings?",
        a: "Consultations are conducted during [Verified Consultation Hours]. We recommend requesting an appointment in advance to minimize waiting time at the outpatient consultation suites.",
      },
      {
        q: "Do I need a doctor's referral to book a consultation?",
        a: "No. You can directly request an appointment without a prior referral if you are experiencing respiratory symptoms such as persistent cough, wheezing, shortness of breath, or need a specialist review of chest scans.",
      },
      {
        q: "What should I bring along for my first appointment?",
        a: "Please bring all prior chest X-rays, CT scan films or CDs, past spirometry reports, recent blood investigations, and all current inhalers and oral prescription medicines so dosages can be accurately assessed.",
      },
    ],
  },
  {
    category: "Symptoms & Diagnostic Evaluations",
    questions: [
      {
        q: "When should I see a pulmonologist instead of a general physician?",
        a: "You should see a pulmonologist if your cough lasts longer than 3–4 weeks, if you experience recurrent wheezing or chest tightness, if climbing a single flight of stairs leaves you unusually breathless, or if an imaging test reveals abnormal lung spots or infiltrates.",
      },
      {
        q: "How is a chronic cough diagnosed?",
        a: "A chronic cough is methodically evaluated by assessing the upper airways (post-nasal drip), bronchial hyperreactivity (asthma / cough-variant asthma), digestive acid reflux (GERD/LPR), and lung parenchyma (interstitial disease) through clinical examination and objective spirometry.",
      },
      {
        q: "What is Spirometry and does it hurt?",
        a: "Spirometry is a non-invasive, painless pulmonary function test where you blow forcefully into a calibrated flow sensor. It measures the total volume and speed of air your lungs can exhale, establishing whether bronchial obstruction is present.",
      },
      {
        q: "What is a FeNO test and why might it be recommended?",
        a: "Fractional Exhaled Nitric Oxide (FeNO) is a quick breath test measuring microscopic airway inflammation. It helps confirm allergic or eosinophilic asthma and determines whether anti-inflammatory inhalers will be effective.",
      },
    ],
  },
  {
    category: "Inhalers & Long-Term Management",
    questions: [
      {
        q: "Are daily inhalers addictive or habit-forming?",
        a: "No. Inhalers are not addictive. Maintenance controller inhalers deliver microgram doses of medicine directly to bronchial tissues to soothe chronic inflammation, much like applying a protective ointment to irritated skin. Discontinuing them abruptly often allows inflammation to rebound.",
      },
      {
        q: "Will inhaled steroids cause systemic side effects like weight gain?",
        a: "Unlike high-dose steroid tablets that circulate throughout the entire body, inhaled corticosteroids act locally inside the lungs at fractional microgram doses. Systemic absorption is minimal, making them safe for long-term control under specialist guidance.",
      },
      {
        q: "Why do my inhalers feel like they aren't working?",
        a: "In up to 70% of cases, sub-optimal relief is caused by incorrect inhalation technique—such as breathing in too fast with an MDI or too weakly with a dry powder device. Dr. Y. Murali and his team review your physical technique to ensure optimal delivery to the lungs.",
      },
    ],
  },
  {
    category: "Hospital Procedures & Emergencies",
    questions: [
      {
        q: "What is a Bronchoscopy and when is it necessary?",
        a: "A flexible bronchoscopy is an endoscopic procedure where a slender camera is gently guided into the bronchial passages under sedation. It is performed at Srikara Hospital to inspect mucosal tissue, obtain targeted cultures, or biopsy suspicious lung nodules.",
      },
      {
        q: "What should I do if I experience sudden severe breathlessness?",
        a: "Sudden severe shortness of breath, chest pain, or bluish lips require immediate emergency care. Please proceed directly to the 24/7 Emergency Department at Srikara Hospital, Madeenaguda, or call local ambulance services.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#163447] flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#EBF3F8] to-[#F7FAFD] pt-12 pb-14 border-b border-[#D8E6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C] uppercase tracking-wider mb-4 border border-[#2D9C9C]/20">
              Clear Answers for Patients
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163447] tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Answers to common questions regarding consultations with <strong className="text-[#163447]">Dr. Y. Murali</strong>, respiratory conditions, pulmonary function testing, and practice details at <strong className="text-[#163447]">Srikara Hospital, Madeenaguda, Hyderabad</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/book-appointment">
                <Button className="bg-[#2D9C9C] hover:bg-[#238080] text-white px-6 py-3 rounded-lg font-medium shadow-sm transition-colors">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-[#2D9C9C] text-[#2D9C9C] hover:bg-[#2D9C9C]/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  Hospital Location & Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordions / Sections */}
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {FAQ_SECTIONS.map((sec, sIdx) => (
          <section key={sIdx} className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#163447] pb-3 border-b border-slate-100 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
              {sec.category}
            </h2>

            <div className="divide-y divide-slate-100 mt-4">
              {sec.questions.map((item, qIdx) => (
                <div key={qIdx} className="py-4 first:pt-2 last:pb-0">
                  <h3 className="font-bold text-base text-[#163447] mb-2">
                    {item.q}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Still Have Questions? */}
        <section className="bg-gradient-to-r from-[#163447] to-[#1C4259] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Have a Question Not Listed Here?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Dr. Y. Murali is available to discuss your specific symptoms during an in-person consultation at Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/book-appointment" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold shadow transition-colors">
                Book Consultation
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Desk
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
