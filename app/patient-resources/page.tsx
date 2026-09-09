import React from "react";
import Link from "next/link";
import Navbar from "../../src/components/ui/Navbar";
import Footer from "../../src/components/ui/Footer";
import MobileBottomBar from "../../src/components/ui/MobileBottomBar";
import { Button } from "../../src/components/ui/Button";

export default function PatientResourcesPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#163447] flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#EBF3F8] to-[#F7FAFD] pt-12 pb-14 border-b border-[#D8E6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C] uppercase tracking-wider mb-4 border border-[#2D9C9C]/20">
              Patient Guidance & Education
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163447] tracking-tight mb-4">
              Patient Resources & Respiratory Guides
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Practical guides prepared for patients of <strong className="text-[#163447]">Dr. Y. Murali</strong> at <strong className="text-[#163447]">Srikara Hospital, Madeenaguda</strong>. From preparing for your first visit to mastering inhaler techniques and understanding pulmonary tests.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/book-appointment">
                <Button className="bg-[#2D9C9C] hover:bg-[#238080] text-white px-6 py-3 rounded-lg font-medium shadow-sm transition-colors">
                  Book a Consultation
                </Button>
              </Link>
              <Link href="/health-insights">
                <Button variant="outline" className="border-[#2D9C9C] text-[#2D9C9C] hover:bg-[#2D9C9C]/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  Read Health Insights
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Preparing for Consultation Checklist */}
        <section className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D9C9C]">
              Preparation Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#163447] mt-1 mb-3">
              What to Bring to Your Respiratory Consultation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Arriving well-prepared helps Dr. Y. Murali build a comprehensive picture of your respiratory history from day one without requiring duplicated tests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] font-bold flex items-center justify-center">
                  📁
                </div>
                <h3 className="font-bold text-[#163447] text-base">Past Imaging & Test Reports</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Previous chest X-ray films and high-resolution CT (HRCT) thorax discs or reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Past spirometry, pulmonary function test (PFT) graphs, or allergy testing panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Recent blood work (Complete Blood Count with Absolute Eosinophil Count, Serum IgE)</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] font-bold flex items-center justify-center">
                  💊
                </div>
                <h3 className="font-bold text-[#163447] text-base">Current Medications & Inhalers</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Bring physical inhaler devices (metered-dose, rotahaler, turbuhaler, or respimat)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Full list of prescription oral medications (heart, blood pressure, acid reflux, or diabetes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Any over-the-counter cough suppressants or herbal preparations you regularly take</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] font-bold flex items-center justify-center">
                  ⏱️
                </div>
                <h3 className="font-bold text-[#163447] text-base">Symptom Timeline & Triggers</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>When did breathing difficulty or coughing first begin? Did it follow a viral infection?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Do symptoms wake you from sleep, or trigger during climbing stairs or exercise?</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Noticeable triggers: incense, perfumes, vehicle exhaust, pet dander, or dust mites</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] font-bold flex items-center justify-center">
                  ❓
                </div>
                <h3 className="font-bold text-[#163447] text-base">Questions for Your Doctor</h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Write down 3–4 key questions you want answered during your visit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Clarify your specific treatment goals (e.g., returning to brisk walking, uninterrupted sleep)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">•</span>
                  <span>Request verification of your inhalation technique using your personal device</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Inhaler Mastery Guide */}
        <section className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D9C9C]">
              Essential Inhaler Mastery
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#163447] mt-1 mb-3">
              How to Get Medication Directly Into Your Lungs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Inhaler medicines must travel deep into the bronchial airways rather than remaining in the mouth or throat. Different inhaler devices require completely different breathing techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Metered Dose Inhaler (MDI) */}
            <div className="border border-slate-200 rounded-xl p-6 bg-[#F8FAFC]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-[#163447]">
                  Pressurized Metered Dose Inhaler (MDI)
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                  Slow & Deep
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Canister device that releases a fine aerosol spray when pressed down. Ideally used with a spacer chamber.
              </p>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
                <li>Shake the canister vigorously for 5 seconds before each puff.</li>
                <li>Exhale fully away from the mouthpiece to empty your lungs.</li>
                <li>Place mouthpiece securely between lips, forming an airtight seal.</li>
                <li>Press the canister ONCE while beginning a <strong>slow, gentle inhalation</strong> over 3–5 seconds.</li>
                <li>Hold breath comfortably for 10 seconds (or as long as comfortable) so particles settle into airways.</li>
              </ol>
            </div>

            {/* Dry Powder Inhaler (DPI) */}
            <div className="border border-slate-200 rounded-xl p-6 bg-[#F8FAFC]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-[#163447]">
                  Dry Powder Inhaler (DPI)
                </h3>
                <span className="text-xs px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                  Quick & Forceful
                </span>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Breath-activated devices (capsule or blister based) that require your own inspiratory effort to disperse powder.
              </p>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-700 list-decimal list-inside">
                <li>Load capsule or click lever to puncture the dose as instructed.</li>
                <li>Exhale completely away from the inhaler (never breathe out into a DPI).</li>
                <li>Seal lips tightly around the mouthpiece.</li>
                <li>Inhale <strong>rapidly, forcefully, and deeply</strong> to draw the powder through the internal cyclone.</li>
                <li>Remove device from mouth, hold breath for 10 seconds, then exhale gently.</li>
              </ol>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Crucial Reminder: </strong> Always rinse your mouth with water and spit it out after using any steroid-containing inhaler. This simple step prevents oral candidiasis (thrush) and hoarseness.
          </div>
        </section>

        {/* Understanding Your Tests */}
        <section className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D9C9C]">
              Diagnostic Transparency
            </span>
            <h2 className="text-2xl font-bold text-[#163447] mt-1 mb-2">
              Understanding Common Pulmonary Investigations
            </h2>
            <p className="text-slate-600 text-sm">
              Quick answers about how diagnostic tests are performed and what they indicate.
            </p>
          </div>

          <div className="space-y-4 divide-y divide-slate-100">
            <div className="pt-3">
              <h3 className="font-bold text-[#163447] text-base mb-1">
                Spirometry: What does it measure?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Spirometry measures your Forced Vital Capacity (FVC)—the total volume of air you can exhale—and your Forced Expiratory Volume in 1 second (FEV1). The ratio of FEV1 to FVC reveals whether your bronchial tubes have airway obstruction (common in asthma or COPD).
              </p>
            </div>

            <div className="pt-3">
              <h3 className="font-bold text-[#163447] text-base mb-1">
                FeNO (Exhaled Nitric Oxide): Why is it tested?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                FeNO detects microscopic allergic inflammation inside the bronchial lining. A high FeNO score indicates active eosinophilic inflammation, confirming allergic asthma and guiding the appropriate dose of anti-inflammatory inhalers.
              </p>
            </div>

            <div className="pt-3">
              <h3 className="font-bold text-[#163447] text-base mb-1">
                DLCO: How does gas diffusion work?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                DLCO measures how easily gases cross from the air sacs (alveoli) into the microscopic blood vessels (capillaries). It helps identify lung scarring (pulmonary fibrosis) or destruction of alveolar walls (emphysema).
              </p>
            </div>
          </div>
        </section>

        {/* Urgent Care Guidance */}
        <section className="bg-[#FFF5F5] border border-red-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
            <span>🚨</span> When You Must Seek Immediate Emergency Care
          </h2>
          <p className="text-xs sm:text-sm text-red-800 leading-relaxed mb-4">
            Do not wait for an outpatient appointment if you experience any of the following critical warning signs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-red-900 font-medium">
            <div className="bg-white/80 p-3 rounded-lg border border-red-100">
              • Inability to speak in full phrases without stopping to catch breath
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-red-100">
              • Bluish tint on lips, tongue, fingertips, or nail beds
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-red-100">
              • Sudden onset of severe, crushing chest pain or pressure
            </div>
            <div className="bg-white/80 p-3 rounded-lg border border-red-100">
              • Fast breathing with neck muscle straining or ribs visibly sucking in
            </div>
          </div>
          <p className="text-xs text-red-700 mt-4">
            Visit the 24/7 Emergency Department at Srikara Hospital, Madeenaguda, Hyderabad without delay.
          </p>
        </section>

        {/* CTA Card */}
        <section className="bg-gradient-to-r from-[#163447] to-[#1C4259] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Have Questions About Your Breathing?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule an in-person consultation with Dr. Y. Murali at Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad.
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
                Hospital Information
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
