"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../src/components/ui/Navbar";
import Footer from "../../src/components/ui/Footer";
import MobileBottomBar from "../../src/components/ui/MobileBottomBar";
import { Button } from "../../src/components/ui/Button";

export default function BookAppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    gender: "male",
    reason: "cough",
    preferredDate: "",
    timeSlot: "morning",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#163447] flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#EBF3F8] to-[#F7FAFD] pt-12 pb-14 border-b border-[#D8E6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C] uppercase tracking-wider mb-4 border border-[#2D9C9C]/20">
              Outpatient Consultation Request
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163447] tracking-tight mb-4">
              Schedule a Respiratory Consultation
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              Book your in-person clinical evaluation with <strong className="text-[#163447]">Dr. Y. Murali</strong>, Pulmonologist at <strong className="text-[#163447]">Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto">
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold text-[#163447]">
                    Appointment Request Received
                  </h2>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#163447]">{formData.fullName || "Patient"}</strong>. Your consultation request for Dr. Y. Murali at Srikara Hospital has been registered. The hospital consultation desk will confirm your scheduled time slot via telephone/SMS shortly.
                  </p>

                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2 mt-6">
                    <div>
                      <strong className="text-slate-700">Hospital Facility:</strong> Srikara Hospital, Madeenaguda, Hyderabad
                    </div>
                    <div>
                      <strong className="text-slate-700">Specialist:</strong> Dr. Y. Murali, Pulmonologist
                    </div>
                    <div>
                      <strong className="text-slate-700">Contact Desk:</strong> [Verified Phone]
                    </div>
                  </div>

                  <div className="pt-6">
                    <Button
                      onClick={() => setSubmitted(false)}
                      variant="outline"
                      className="border-[#2D9C9C] text-[#2D9C9C] hover:bg-[#2D9C9C]/10 text-xs px-5 py-2 font-semibold"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-xl font-bold text-[#163447]">
                      Patient & Consultation Details
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">
                      Please enter the patient information accurately for hospital registration.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Patient Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Age *
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="120"
                        required
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="e.g. 42"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Gender *
                      </label>
                      <select
                        value={formData.gender}
                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white text-slate-700"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Primary Respiratory Concern *
                    </label>
                    <select
                      value={formData.reason}
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white text-slate-700"
                    >
                      <option value="cough">Persistent Unresolved Cough (&gt;3 weeks)</option>
                      <option value="breathlessness">Shortness of Breath / Exertional Dyspnea</option>
                      <option value="asthma">Asthma Management / Inhaler Review</option>
                      <option value="copd">COPD / Chronic Bronchitis Care</option>
                      <option value="ild">Interstitial Lung Disease (ILD) / Fibrosis</option>
                      <option value="sleep-apnea">Snoring & Sleep Apnea Evaluation</option>
                      <option value="spirometry">Spirometry / Pulmonary Function Test (PFT)</option>
                      <option value="second-opinion">Second Opinion on Chest CT / X-Ray</option>
                      <option value="other">Other General Pulmonology Consultation</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white text-slate-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Preferred Time Slot *
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white text-slate-700"
                      >
                        <option value="morning">Morning Session (10:00 AM - 1:00 PM)</option>
                        <option value="afternoon">Afternoon Session (2:00 PM - 5:00 PM)</option>
                        <option value="evening">Evening Session (5:00 PM - 7:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Medications / Existing Inhalers / Notes
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="List any current inhalers, previous diagnoses, or recent chest CT findings..."
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-[#2D9C9C] focus:ring-1 focus:ring-[#2D9C9C] bg-white"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-[#2D9C9C] hover:bg-[#238080] text-white py-3.5 rounded-lg font-bold shadow transition-colors text-base"
                    >
                      Confirm Appointment Request
                    </Button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                    By submitting, your details will be securely sent to Srikara Hospital&apos;s outpatient reception desk for scheduling verification.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Hospital Details & Checklist */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-[#D8E6F0] p-6 shadow-sm">
              <h2 className="text-base font-bold text-[#163447] pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#2D9C9C]"></span>
                Consultation Location
              </h2>

              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-3.5 pb-2 border-b border-slate-100">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#2D9C9C]/30 shadow-xs shrink-0 bg-[#F0F4F8]">
                    <Image
                      src="/images/dr-y-murali-avatar.jpg"
                      alt="Dr. Y. Murali, Pulmonologist"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Doctor</span>
                    <span className="font-bold text-[#163447] text-base leading-tight">Dr. Y. Murali</span>
                    <span className="text-xs text-[#2D9C9C] font-semibold block">Consultant Pulmonologist</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-500 block">Hospital</span>
                  <span className="font-bold text-[#163447]">Srikara Hospital</span>
                  <span className="text-xs text-slate-600 block">Department of Pulmonology & Respiratory Medicine</span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 block">Address</span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    222, Mythri Nagar, Phase II, Hafeezpet / Madeenaguda, Hyderabad, Telangana 500049
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-500 block">Hours</span>
                  <span className="text-xs font-semibold text-[#2D9C9C] block">
                    [Verified Consultation Hours]
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-500 block">Telephone Inquiry</span>
                  <span className="text-xs font-semibold text-slate-800 block">
                    [Verified Phone]
                  </span>
                </div>
              </div>
            </div>

            {/* Checklist Box */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#D8E6F0] p-6 space-y-3">
              <h3 className="font-bold text-sm text-[#163447] flex items-center gap-2">
                <span>📋</span> What to Bring to Your Visit
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">✓</span>
                  <span>Previous Chest X-ray films & HRCT thorax scans</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">✓</span>
                  <span>Past spirometry / PFT lung function reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">✓</span>
                  <span>All active inhalers and prescription tablets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2D9C9C] font-bold">✓</span>
                  <span>Recent blood tests (CBC with eosinophil counts)</span>
                </li>
              </ul>
              <div className="pt-2">
                <Link href="/patient-resources" className="text-xs font-semibold text-[#2D9C9C] hover:underline">
                  View Full Patient Guide →
                </Link>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-[#FFF5F5] border border-red-200 rounded-xl p-4 text-xs text-red-800 leading-relaxed">
              <strong>Emergency Note: </strong> If you have acute severe shortness of breath, chest pain, or low oxygen levels, please visit the <strong>24/7 Emergency Care at Srikara Hospital</strong> immediately. Do not wait for an outpatient appointment.
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
