import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../../src/components/ui/Navbar";
import Footer from "../../../src/components/ui/Footer";
import MobileBottomBar from "../../../src/components/ui/MobileBottomBar";
import { Button } from "../../../src/components/ui/Button";

export default function DrYMuraliProfilePage() {
  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#163447] flex flex-col font-sans">
      <Navbar />

      {/* Hero Profile Header */}
      <section className="bg-gradient-to-b from-[#EBF3F8] to-[#F7FAFD] pt-12 pb-14 border-b border-[#D8E6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Doctor Portrait Photo */}
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] max-w-xs sm:max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-[#D8E6F0] shadow-md bg-[#F0F4F8]">
                <Image
                  src="/images/dr-y-murali-portrait.jpg"
                  alt="Dr. Y. Murali, Pulmonologist at Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 380px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163447]/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-white/95 backdrop-blur-md p-3 border border-white/60 shadow-xs text-left">
                  <span className="block font-heading text-sm font-bold text-[#163447]">Dr. Y. Murali</span>
                  <span className="block text-[11px] font-semibold text-[#2D9C9C]">Consultant Pulmonologist</span>
                  <span className="block text-[10px] text-[#5A6E7C]">Srikara Hospital, Madeenaguda</span>
                </div>
              </div>
            </div>

            {/* Center Bio Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C] border border-[#2D9C9C]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D9C9C]"></span>
                  Consultant Pulmonologist
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-200/70 text-slate-700">
                  Srikara Hospital, Madeenaguda
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163447] tracking-tight">
                Dr. Y. Murali
              </h1>
              <p className="text-base sm:text-lg font-medium text-[#2D9C9C]">
                Pulmonologist &amp; Respiratory Specialist &bull; [Verified Credentials]
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Practicing at <strong className="text-[#163447]">Srikara Hospital</strong> in Mythri Nagar, Madeenaguda, Hyderabad. Dr. Y. Murali provides comprehensive clinical evaluation and continuous management for complex airway disorders, chronic cough, interstitial lung disease, and respiratory infections with an emphasis on physiological diagnostic precision and patient-centered communication.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/book-appointment">
                  <Button className="bg-[#2D9C9C] hover:bg-[#238080] text-white px-5 py-2.5 rounded-lg font-semibold shadow-sm transition-colors text-sm">
                    Request Consultation
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-[#2D9C9C] text-[#2D9C9C] hover:bg-[#2D9C9C]/10 px-5 py-2.5 rounded-lg font-semibold transition-colors text-sm">
                    Hospital Practice Details
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Practice Summary Card */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-[#D8E6F0] p-6 shadow-sm space-y-4">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 pb-3 border-b border-slate-100">
                  Practice Information
                </h2>

                <div>
                  <span className="text-xs text-slate-500 font-medium block">Hospital Facility</span>
                  <span className="text-sm font-bold text-[#163447]">Srikara Hospital</span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 font-medium block">Clinical Department</span>
                  <span className="text-sm font-semibold text-[#163447]">Department of Pulmonology & Respiratory Medicine</span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 font-medium block">Location</span>
                  <span className="text-sm text-slate-700">
                    222, Mythri Nagar, Phase II, Hafeezpet / Madeenaguda, Hyderabad, Telangana 500049
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 font-medium block">Consultation Schedule</span>
                  <span className="text-sm font-semibold text-[#2D9C9C]">[Verified Consultation Hours]</span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 font-medium block">Medical Registration</span>
                  <span className="text-xs text-slate-600">[Verified Registration]</span>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link href="/book-appointment" className="block text-center w-full py-2.5 px-4 rounded-lg bg-[#163447] text-white text-xs font-semibold hover:bg-[#1C4259] transition-colors">
                    Book In-Person Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Profile Details */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Practice Philosophy & Care Values */}
        <section className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D9C9C]">
              Clinical Approach & Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#163447] mt-1 mb-4">
              Clear Diagnoses, Compassionate Continuity
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Respiratory care often leaves patients confused by repeating rounds of symptomatic medicines, nebulizers, or brief prescriptions that fail to resolve the root underlying condition. Dr. Y. Murali advocates for an unhurried, diagnostic-first consultation where lung mechanics are thoroughly evaluated and findings are shared transparently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-[#2D9C9C]/15 text-[#2D9C9C] flex items-center justify-center font-bold mb-3">
                1
              </div>
              <h3 className="font-bold text-[#163447] mb-2 text-base">Root-Cause Investigation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Rather than repeatedly masking chronic cough or wheeze, we identify the anatomic origin—distinguishing asthma, reflux-induced cough, upper airway cough syndrome, and interstitial conditions.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-[#2D9C9C]/15 text-[#2D9C9C] flex items-center justify-center font-bold mb-3">
                2
              </div>
              <h3 className="font-bold text-[#163447] mb-2 text-base">Inhaler Education & Technique</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Up to 70% of respiratory medications are under-delivered due to improper inhaler usage. Every patient is guided step-by-step to ensure high lung deposition and minimal side effects.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-200/80">
              <div className="w-8 h-8 rounded-lg bg-[#2D9C9C]/15 text-[#2D9C9C] flex items-center justify-center font-bold mb-3">
                3
              </div>
              <h3 className="font-bold text-[#163447] mb-2 text-base">Responsible Medication</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Steroids and antibiotics are prescribed strictly when clinically indicated. We prioritize targeted maintenance controllers that protect long-term airway health and avoid systemic toxicity.
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Focus Areas */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#163447] mb-3">
              Specialized Areas of Clinical Practice
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Comprehensive diagnostic evaluation and disease management across key pulmonology subspecialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#D8E6F0] shadow-sm">
              <h3 className="text-lg font-bold text-[#163447] mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
                Asthma & Bronchial Hyperresponsiveness
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Full diagnostic workup including spirometric reversibility, fractional exhaled nitric oxide (FeNO), phenotype identification, personalized step-up/step-down inhaler plans, and severe asthma biologic evaluations.
              </p>
              <Link href="/conditions#asthma" className="text-xs font-semibold text-[#2D9C9C] hover:underline">
                Explore Asthma Care →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8E6F0] shadow-sm">
              <h3 className="text-lg font-bold text-[#163447] mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
                COPD & Chronic Bronchitis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                GOLD-guideline staging, dual long-acting bronchodilator optimization, exacerbation reduction strategies, smoking cessation counseling, and home oxygen / pulmonary rehabilitation guidance.
              </p>
              <Link href="/conditions#copd" className="text-xs font-semibold text-[#2D9C9C] hover:underline">
                Explore COPD Care →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8E6F0] shadow-sm">
              <h3 className="text-lg font-bold text-[#163447] mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
                Chronic Cough & Unexplained Breathlessness
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Methodical clinical pathways identifying non-asthmatic eosinophilic bronchitis (NAEB), post-nasal drip, laryngopharyngeal reflux, medication-induced cough, and early interstitial involvement.
              </p>
              <Link href="/conditions#chronic-cough" className="text-xs font-semibold text-[#2D9C9C] hover:underline">
                Explore Cough Evaluation →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8E6F0] shadow-sm">
              <h3 className="text-lg font-bold text-[#163447] mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
                Interstitial Lung Disease (ILD) & Fibrosis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                High-resolution CT pattern interpretation, autoimmune screening, diffusing capacity (DLCO) surveillance, and targeted antifibrotic therapy management.
              </p>
              <Link href="/conditions#ild" className="text-xs font-semibold text-[#2D9C9C] hover:underline">
                Explore ILD Care →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8E6F0] shadow-sm">
              <h3 className="text-lg font-bold text-[#163447] mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
                Respiratory Infections & Tuberculosis
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Evaluation and management of complex bacterial pneumonias, post-tubercular bronchiectasis, fungal lung diseases, and recurrent lower respiratory tract infections.
              </p>
              <Link href="/conditions#pneumonia" className="text-xs font-semibold text-[#2D9C9C] hover:underline">
                Explore Infection Management →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#D8E6F0] shadow-sm">
              <h3 className="text-lg font-bold text-[#163447] mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
                Diagnostic Bronchoscopy & Pleural Procedures
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-3">
                Bedside ultrasound-guided thoracentesis for pleural effusions and flexible bronchoscopy with bronchoalveolar lavage (BAL) and mucosal sampling within Srikara Hospital suites.
              </p>
              <Link href="/treatments#flexible-bronchoscopy" className="text-xs font-semibold text-[#2D9C9C] hover:underline">
                Explore Procedures →
              </Link>
            </div>
          </div>
        </section>

        {/* What to Expect During Your Visit */}
        <section className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-10 shadow-sm">
          <h2 className="text-2xl font-bold text-[#163447] mb-6">
            What to Expect During Your Consultation
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2D9C9C]/10 text-[#2D9C9C] font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-[#163447] text-base">Comprehensive Symptom Review</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  We review the exact onset, daily patterns, night awakenings, seasonal fluctuations, and triggers such as dust, cold air, stress, or physical exercise.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2D9C9C]/10 text-[#2D9C9C] font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-[#163447] text-base">Physical & Respiratory Examination</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  A careful clinical examination assessing breathing rhythm, accessory muscle usage, chest expansion, and thorough multi-zone lung auscultation for wheezes, crackles, or stridor.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2D9C9C]/10 text-[#2D9C9C] font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-[#163447] text-base">Diagnostic Plan & Review of Past Records</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  We inspect your past chest radiographs, CT scans, and laboratory reports. If needed, pulmonary function testing (spirometry) can be coordinated for immediate objective quantification.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#2D9C9C]/10 text-[#2D9C9C] font-bold flex items-center justify-center shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-[#163447] text-base">Shared Decision-Making & Written Treatment Plan</h3>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  You receive an explicit action plan with clear explanation of each medication, step-by-step inhaler demonstration, and clear guidance on when follow-up or emergency care is required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor FAQ Section */}
        <section className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D9C9C]">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl font-bold text-[#163447] mt-1">
              Common Questions Regarding Consultations
            </h2>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="py-4">
              <h3 className="font-bold text-[#163447] text-base mb-1.5">
                Where does Dr. Y. Murali conduct outpatient consultations?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Consultations are conducted at Srikara Hospital, located at 222, Mythri Nagar, Phase II, Hafeezpet / Madeenaguda, Hyderabad, Telangana 500049.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-bold text-[#163447] text-base mb-1.5">
                Do I need a doctor&apos;s referral to schedule an appointment?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No referral is required. Patients experiencing breathing difficulties, persistent cough, allergy symptoms, or seeking a second opinion for a lung disorder can book directly.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-bold text-[#163447] text-base mb-1.5">
                What should I bring to my first visit?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Please bring all existing chest X-ray films, CT scan CDs/reports, previous spirometry reports, recent blood tests, and all current inhalers and tablets so their dosages can be accurately assessed.
              </p>
            </div>

            <div className="py-4">
              <h3 className="font-bold text-[#163447] text-base mb-1.5">
                Are emergency services available if I experience sudden breathing trouble?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. Srikara Hospital maintains a 24/7 emergency care department equipped with intensive care units and respiratory support. If you have severe breathlessness, please proceed to the emergency department immediately.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#163447] to-[#1C4259] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Book a Consultation with Dr. Y. Murali
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience focused, personalized respiratory care at Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad.
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
                View Hospital Map
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
