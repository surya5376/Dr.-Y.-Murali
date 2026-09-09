"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../src/components/ui/Navbar";
import Footer from "../../src/components/ui/Footer";
import MobileBottomBar from "../../src/components/ui/MobileBottomBar";
import { Button } from "../../src/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#163447] flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#EBF3F8] to-[#F7FAFD] pt-12 pb-14 border-b border-[#D8E6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C] uppercase tracking-wider mb-4 border border-[#2D9C9C]/20">
              Practice Location & Scheduling
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163447] tracking-tight mb-4">
              Consultation Location & Contact Information
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Dr. Y. Murali conducts outpatient pulmonology consultations at <strong className="text-[#163447]">Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad</strong>. Find detailed directions, schedule your visit, or reach the hospital reception.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/book-appointment">
                <Button className="bg-[#2D9C9C] hover:bg-[#238080] text-white px-6 py-3 rounded-lg font-medium shadow-sm transition-colors">
                  Request an Appointment
                </Button>
              </Link>
              <a
                href="https://maps.google.com/?q=Srikara+Hospital+Madeenaguda+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-[#2D9C9C] text-[#2D9C9C] hover:bg-[#2D9C9C]/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  Open in Google Maps ↗
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Emergency Alert Banner */}
        <div className="bg-[#FFF5F5] border-l-4 border-red-500 p-5 rounded-r-xl shadow-sm">
          <div className="flex items-start gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-red-800">
                Medical Emergency Advisory
              </h2>
              <p className="text-xs sm:text-sm text-red-700 mt-1 leading-relaxed">
                If you or a family member are experiencing sudden severe shortness of breath, bluish discoloration of the lips or face, high fever with acute breathing difficulty, or chest pain radiating to the jaw/arm, please proceed immediately to the <strong>24/7 Emergency Department at Srikara Hospital</strong> or call local emergency ambulance services. Do not wait for an outpatient appointment slot.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info & Directions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Hospital & Practice Location Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#163447] mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
                Hospital & Consultation Desk
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 pb-2 border-b border-slate-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#2D9C9C]/30 shadow-xs shrink-0 bg-[#F0F4F8]">
                    <Image
                      src="/images/dr-y-murali-avatar.jpg"
                      alt="Dr. Y. Murali"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Doctor</span>
                    <span className="text-base font-bold text-[#163447]">Dr. Y. Murali</span>
                    <span className="text-xs text-[#2D9C9C] font-semibold block">Consultant Pulmonologist &bull; [Verified Credentials]</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Hospital</span>
                  <span className="text-base font-bold text-[#163447]">Srikara Hospital</span>
                  <span className="text-xs text-slate-600 block">Department of Pulmonology & Respiratory Medicine</span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Address</span>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    222, Mythri Nagar, Phase II, Hafeezpet / Madeenaguda,<br />
                    Hyderabad, Telangana — 500049
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Consultation Timings
                    </span>
                    <span className="text-sm font-bold text-[#2D9C9C] block">
                      [Verified Consultation Hours]
                    </span>
                    <span className="text-xs text-slate-500">Prior appointment recommended</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-slate-200">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Hospital Contact
                    </span>
                    <span className="text-sm font-bold text-[#163447] block">
                      [Verified Phone]
                    </span>
                    <span className="text-xs text-slate-500">Srikara Hospital Front Desk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel & Accessibility Instructions */}
            <div className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-[#163447] mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
                Directions & Transit Options
              </h2>

              <div className="space-y-4 text-sm text-slate-700">
                <div>
                  <h3 className="font-bold text-[#163447] text-sm">By Metro</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    The nearest Hyderabad Metro station is <strong>Miyapur Metro Station</strong> (Red Line terminus). From Miyapur, Srikara Hospital in Madeenaguda is an easy 5–8 minute auto-rickshaw or taxi drive along NH 65.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#163447] text-sm">By Road / Car</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Accessible directly via the main Miyapur–Chanda Nagar commercial arterial corridor. Turn into Mythri Nagar Phase II near Hafeezpet / Madeenaguda.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#163447] text-sm">Parking</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Designated two-wheeler and four-wheeler visitor parking is available on-site at Srikara Hospital premises with wheelchair ramp access at the primary entrance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Appointment Request Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-8 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold text-[#163447] mb-2">
                Request an Appointment
              </h2>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Fill in your details below to schedule an outpatient consultation with Dr. Y. Murali at Srikara Hospital, Madeenaguda.
              </p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Patient Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Primary Respiratory Concern
                  </label>
                  <select className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white text-slate-700">
                    <option value="">Select Primary Concern</option>
                    <option value="cough">Persistent Chronic Cough (&gt;3 weeks)</option>
                    <option value="breathlessness">Shortness of Breath / Exertional Dyspnea</option>
                    <option value="asthma">Asthma / Wheezing / Chest Tightness</option>
                    <option value="copd">COPD / Chronic Bronchitis</option>
                    <option value="ild">Interstitial Lung Disease (ILD) Evaluation</option>
                    <option value="pft">Spirometry / Lung Function Test</option>
                    <option value="second-opinion">Second Opinion on Chest CT / X-Ray</option>
                    <option value="other">Other Respiratory Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Date & Time Slot
                  </label>
                  <input
                    type="date"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white text-slate-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Additional Notes or Medical History
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly mention any prior diagnoses, existing inhalers, or recent scans..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white"
                  ></textarea>
                </div>

                <Link href="/book-appointment" className="block pt-2">
                  <Button className="w-full bg-[#2D9C9C] hover:bg-[#238080] text-white py-3 rounded-lg font-semibold shadow-sm transition-colors">
                    Proceed to Complete Booking Form
                  </Button>
                </Link>

                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  Confirmation will be coordinated with Srikara Hospital reception during active consultation hours.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Location FAQ */}
        <section className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-10 shadow-sm">
          <h2 className="text-xl font-bold text-[#163447] mb-6">
            Frequently Asked Questions About Your Visit
          </h2>

          <div className="space-y-4 divide-y divide-slate-100">
            <div className="pt-3">
              <h3 className="font-bold text-[#163447] text-sm mb-1">
                Is wheelchair access provided at Srikara Hospital?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes. Srikara Hospital features wheelchair ramps at the ground entrance, elevator access to outpatient consultation chambers, and dedicated hospital porter assistance for patients with breathing difficulties or limited mobility.
              </p>
            </div>

            <div className="pt-3">
              <h3 className="font-bold text-[#163447] text-sm mb-1">
                Can I have spirometry or chest X-rays performed on the same day?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In most clinical situations, yes. Srikara Hospital houses both a pulmonary function lab and modern digital radiology suites, allowing diagnostic investigations to be conducted during your consultation window whenever clinically required.
              </p>
            </div>

            <div className="pt-3">
              <h3 className="font-bold text-[#163447] text-sm mb-1">
                How early should I arrive before my scheduled appointment?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We recommend arriving approximately 15 minutes before your time slot to complete hospital outpatient registration and vital sign checks at the triage nursing desk.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
