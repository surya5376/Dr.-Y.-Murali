import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../src/components/ui/Navbar";
import Footer from "../../src/components/ui/Footer";
import MobileBottomBar from "../../src/components/ui/MobileBottomBar";
import { Button } from "../../src/components/ui/Button";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#163447] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#EBF3F8] to-[#F7FAFD] pt-12 pb-14 border-b border-[#D8E6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C] uppercase tracking-wider mb-4 border border-[#2D9C9C]/20">
              About The Practice & Clinical Philosophy
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163447] tracking-tight mb-4">
              Respiratory Care Built on Clarity, Precision, and Continuity
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Led by <strong className="text-[#163447]">Dr. Y. Murali</strong> at <strong className="text-[#163447]">Srikara Hospital, Madeenaguda, Hyderabad</strong>. Our mission is to transform respiratory medicine from repetitive short-term symptom relief into clear, physiological diagnoses and long-term lung health.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/book-appointment">
                <Button className="bg-[#2D9C9C] hover:bg-[#238080] text-white px-6 py-3 rounded-lg font-medium shadow-sm transition-colors">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/doctors/dr-y-murali">
                <Button variant="outline" className="border-[#2D9C9C] text-[#2D9C9C] hover:bg-[#2D9C9C]/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  Meet Dr. Y. Murali
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Narrative Content */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Practice Mission Section */}
        <section className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2D9C9C]">
                Why Dedicated Pulmonology Matters
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#163447] mt-1 mb-4">
                Beyond Temporary Symptom Suppression
              </h2>
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Breathing difficulties are among the most distressing physical experiences a person can face. Yet, all too often, individuals living with persistent cough, exertional breathlessness, or wheezing spend months or even years cycled through temporary cough syrups, empirical antibiotic courses, or short-burst oral steroids without a confirmed underlying diagnosis.
                </p>
                <p>
                  In respiratory medicine, symptoms that appear identical on the surface can have vastly different physiological roots. A nighttime cough may stem from asthma, upper airway cough syndrome, laryngopharyngeal acid reflux, or early interstitial lung disease. Treating them all with the same broad remedies leaves patients frustrated and vulnerable to progressive lung function loss.
                </p>
                <p>
                  At Srikara Hospital, Dr. Y. Murali conducts systematic, objective investigations—measuring flow-volume curves with spirometry, assessing airway inflammation with FeNO, and performing high-resolution imaging review—to deliver targeted, lasting care.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-[#D8E6F0] shadow-md bg-[#F0F4F8]">
                <Image
                  src="/images/dr-y-murali-portrait.jpg"
                  alt="Dr. Y. Murali, Pulmonologist at Srikara Hospital"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#163447]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="block font-heading text-base font-bold">Dr. Y. Murali</span>
                  <span className="block text-xs text-[#2D9C9C]">Consultant Pulmonologist &bull; Srikara Hospital</span>
                </div>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl border border-[#D8E6F0] p-6 space-y-4">
                <h3 className="font-bold text-[#163447] text-base border-b border-slate-200 pb-2">
                  Key Practice Pillars
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2D9C9C]/20 text-[#2D9C9C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-[#163447]">Objective Verification: </strong>
                      Every chronic condition is confirmed with standardized pulmonary function testing.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2D9C9C]/20 text-[#2D9C9C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-[#163447]">Active Patient Education: </strong>
                      We prioritize patient understanding—ensuring you know exactly how each prescribed inhaler works.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2D9C9C]/20 text-[#2D9C9C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-[#163447]">Judicious Prescribing: </strong>
                      Steroid and antimicrobial stewardship to protect long-term metabolic and immune health.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2D9C9C]/20 text-[#2D9C9C] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </div>
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-[#163447]">Integrated Hospital Setting: </strong>
                      Seamless access to Srikara Hospital’s ICU, emergency, laboratory, and high-resolution radiology.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Four Core Values */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#163447] mb-3">
              How We Deliver Respiratory Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Principles guiding every patient interaction, diagnostic decision, and treatment plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-[#D8E6F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] flex items-center justify-center font-bold text-lg mb-4">
                  01
                </div>
                <h3 className="font-bold text-[#163447] text-base mb-2">Unhurried Listening</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We dedicate time to understand the fine nuances of your symptom timeline, occupational environment, household exposures, and daily impact.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D8E6F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] flex items-center justify-center font-bold text-lg mb-4">
                  02
                </div>
                <h3 className="font-bold text-[#163447] text-base mb-2">Physiological Testing</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We don&apos;t guess lung function. Spirometry, DLCO, and FeNO provide quantitative data to stage disease and track therapeutic response.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D8E6F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] flex items-center justify-center font-bold text-lg mb-4">
                  03
                </div>
                <h3 className="font-bold text-[#163447] text-base mb-2">Device Mastery</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An inhaler works only as well as its delivery. We teach proper inhalation technique, spacer coordination, and breath-holding during every visit.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#D8E6F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] flex items-center justify-center font-bold text-lg mb-4">
                  04
                </div>
                <h3 className="font-bold text-[#163447] text-base mb-2">Long-Term Partnership</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Chronic respiratory conditions require periodic review to step down medication safely once control is sustained. We partner with you for life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hospital Affiliation & Facilities */}
        <section className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2D9C9C]">
              Hospital Infrastructure & Environment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#163447] mt-1 mb-4">
              Practicing at Srikara Hospital, Madeenaguda
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Practicing within Srikara Hospital gives patients the advantage of comprehensive multispecialty support. Whether you require an outpatient spirometry test, high-resolution CT of the chest, diagnostic bronchoscopy, or urgent inpatient stabilization, full hospital infrastructure is available on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <h4 className="font-bold text-[#163447] text-sm mb-1">Advanced Diagnostic Imaging</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-resolution CT (HRCT) thorax and digital radiography for micro-architectural parenchymal evaluation.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <h4 className="font-bold text-[#163447] text-sm mb-1">Pulmonary Function Laboratory</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Computerized spirometry, bronchodilator reversibility testing, and diffusion capacity analysis.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <h4 className="font-bold text-[#163447] text-sm mb-1">24/7 Critical & Emergency Care</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fully equipped respiratory intensive care unit (ICU) for acute exacerbations, respiratory failure, and high-dependency monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-gradient-to-r from-[#163447] to-[#1C4259] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Begin Your Journey to Better Breathing
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule a comprehensive clinical consultation with Dr. Y. Murali at Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad.
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
                Contact & Directions
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
