import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../src/components/ui/Navbar";
import { Button } from "../src/components/ui/Button";
import HeroVisual from "../src/components/hero/HeroVisual";
import LungAnimation from "../src/components/ui/LungAnimation";
import SymptomNavigator from "../src/components/home/SymptomNavigator";
import Footer from "../src/components/ui/Footer";
import MobileBottomBar from "../src/components/ui/MobileBottomBar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#14232D]">
      <Navbar />

      <main className="flex-1 pb-24 md:pb-0">
        {/* =========================================================================
            1. HERO SECTION (Dr. Y. Murali • Srikara Hospital • Realistic Lungs)
           ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFDFE] via-white to-[#F0F6FA]/50 py-7 sm:py-12 lg:py-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            {/* --- MOBILE VIEWPORT (Uncluttered Psychological Sequence) --- */}
            <div className="flex flex-col lg:hidden space-y-4 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2D9C9C]/30 bg-[#E8F4F8]/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#163447] w-fit">
                <span className="h-2 w-2 rounded-full bg-[#2D9C9C]" />
                PULMONOLOGY &bull; RESPIRATORY MEDICINE
              </div>

              {/* Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-[#163447] leading-[1.08]">
                Expert Care <br />
                for Every Breath.
              </h1>

              {/* Verified Supporting Copy */}
              <p className="text-sm sm:text-base text-[#5A6E7C] leading-relaxed">
                Personalized respiratory care from <strong className="text-[#163447] font-semibold">Dr. Y. Murali</strong> at Srikara Hospital, Madeenaguda &mdash; focused on understanding the cause of breathing problems and guiding patients toward appropriate care.
              </p>

              {/* Location Badge */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#163447]">
                <svg className="h-4 w-4 text-[#2D9C9C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Srikara Hospital &bull; Mythri Nagar, Madeenaguda, Hyderabad</span>
              </div>

              {/* Primary Action */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <Button variant="primary" size="lg" asChild className="w-full justify-center bg-[#FF6B35] hover:bg-[#e85924] font-semibold text-white py-4 rounded-xl shadow-md text-base">
                  <Link href="/book-appointment" className="flex items-center justify-center gap-2">
                    <span>Book a Consultation</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild className="w-full justify-center border border-[#D9E2EC] bg-white text-[#163447] font-semibold py-3.5 rounded-xl">
                  <Link href="/doctors/dr-y-murali">Meet Dr. Y. Murali</Link>
                </Button>
              </div>

              {/* Realistic Lung Visual Centerpiece */}
              <div className="py-2 flex justify-center">
                <HeroVisual priority={true} className="w-[88%] max-w-[340px]" />
              </div>

              {/* Verified Trust Cue */}
              <div className="pt-2 flex items-center justify-center gap-2 text-xs font-medium text-[#5A6E7C]">
                <span className="text-[#2D9C9C] font-bold text-sm">✓</span>
                <span>Pulmonology &bull; Patient-focused evaluation &bull; Srikara Hospital</span>
              </div>
            </div>

            {/* --- DESKTOP VIEWPORT (Balanced 50/50 Editorial Split) --- */}
            <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 items-center">
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="animate-fade-in-up inline-flex items-center gap-2.5 rounded-full border border-[#2D9C9C]/30 bg-[#E8F4F8]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#163447]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2D9C9C]"></span>
                  <span>PULMONOLOGY &bull; RESPIRATORY MEDICINE</span>
                </div>

                <h1 className="animate-fade-in-up animation-delay-100 font-heading text-5xl lg:text-[62px] font-extrabold tracking-tight text-[#163447] leading-[1.08]">
                  Expert Care <br />
                  for Every Breath.
                </h1>

                <p className="animate-fade-in-up animation-delay-200 text-lg text-[#5A6E7C] font-normal leading-relaxed max-w-xl">
                  Personalized respiratory care from <strong className="text-[#163447] font-semibold">Dr. Y. Murali</strong> at Srikara Hospital, Madeenaguda &mdash; focused on understanding the cause of breathing problems and guiding patients toward appropriate care.
                </p>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#163447]">
                  <svg className="h-4 w-4 text-[#2D9C9C] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Srikara Hospital &bull; Mythri Nagar, Madeenaguda, Hyderabad</span>
                </div>

                <div className="animate-fade-in-up animation-delay-300 flex items-center gap-4 pt-2">
                  <Button variant="primary" size="lg" asChild className="rounded-lg bg-[#FF6B35] hover:bg-[#e85924] font-semibold text-white px-7 py-3.5 shadow-md hover:shadow-lg transition-all">
                    <Link href="/book-appointment" className="flex items-center gap-2">
                      <span>Book a Consultation</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </Button>
                  <Button variant="secondary" size="lg" asChild className="rounded-lg border border-[#D9E2EC] bg-white hover:bg-[#F5F7FA] font-semibold text-[#163447] px-6 py-3.5">
                    <Link href="/doctors/dr-y-murali">Meet Dr. Y. Murali</Link>
                  </Button>
                </div>

                <div className="animate-fade-in-up animation-delay-400 pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-[#5A6E7C]">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#2D9C9C] font-bold text-base leading-none">✓</span>
                    <span>Pulmonology &amp; Respiratory Care</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#2D9C9C] font-bold text-base leading-none">✓</span>
                    <span>Patient-focused evaluation</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#2D9C9C] font-bold text-base leading-none">✓</span>
                    <span>Evidence-informed care</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#2D9C9C] font-bold text-base leading-none">✓</span>
                    <span>Srikara Hospital, Madeenaguda</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Floating Realistic Lung Visual */}
              <div className="lg:col-span-6 flex justify-end">
                <HeroVisual priority={true} className="w-full max-w-[540px]" />
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            2. TRUST PROOF STRIP (Verified Practice Signals)
           ========================================================================= */}
        <section className="border-y border-[#E2EEF5] bg-[#F7FAFD] py-5 sm:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x lg:divide-[#E2EEF5]">
              <div className="flex items-center gap-3.5 lg:px-6 py-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E0F2F1] text-[#2D9C9C] p-2.5">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#163447]">Dr. Y. Murali</h3>
                  <p className="text-xs text-[#5A6E7C]">Pulmonologist, Srikara Hospital</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 lg:px-6 py-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E0F2F1] text-[#2D9C9C] p-2.5">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h2.5l1.5-3 2 6 1.5-3H17" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#163447]">Diagnostic Evaluation</h3>
                  <p className="text-xs text-[#5A6E7C]">Airway testing &amp; clinical assessment</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 lg:px-6 py-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E0F2F1] text-[#2D9C9C] p-2.5">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h3m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 16c0 2-2 3.5-3 4-1-.5-3-2-3-4a2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#163447]">Evidence-Informed Care</h3>
                  <p className="text-xs text-[#5A6E7C]">Respiratory clinical standards</p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 lg:px-6 py-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E0F2F1] text-[#2D9C9C] p-2.5">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#163447]">Madeenaguda, Hyderabad</h3>
                  <p className="text-xs text-[#5A6E7C]">Mythri Nagar &bull; Srikara Hospital</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. MEET DR. Y. MURALI (Introduced Early as Primary Authority)
           ========================================================================= */}
        <section id="doctor-profile" className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-[#E2E8F0] bg-gradient-to-br from-white via-[#FAFDFE] to-[#F5F9FC] p-6 sm:p-10 lg:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Left: Professional Portrait */}
                <div className="lg:col-span-5 relative">
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-2xl overflow-hidden border border-[#D8E6F0] shadow-md bg-[#F0F4F8]">
                    <Image
                      src="/images/dr-y-murali-portrait.jpg"
                      alt="Dr. Y. Murali, Consultant Pulmonologist at Srikara Hospital, Madeenaguda, Hyderabad"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 450px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#163447]/75 via-transparent to-transparent" />

                    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 backdrop-blur-md p-3.5 border border-white/50 shadow-sm text-left">
                      <span className="block font-heading text-base font-bold text-[#163447]">Dr. Y. Murali</span>
                      <span className="block text-xs font-semibold text-[#2D9C9C]">Consultant Pulmonologist</span>
                      <span className="block text-[11px] text-[#5A6E7C] mt-0.5">Srikara Hospital &bull; Mythri Nagar, Madeenaguda, Hyderabad</span>
                    </div>
                  </div>
                </div>

                {/* Right: Concise Biography & Safe Practice Statement */}
                <div className="lg:col-span-7 space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#2D9C9C]/30 bg-[#E0F2F1] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#163447]">
                    <span className="h-2 w-2 rounded-full bg-[#2D9C9C]" />
                    Meet Dr. Y. Murali
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#163447] tracking-tight leading-tight">
                    Pulmonary &amp; Respiratory Care at Srikara Hospital
                  </h2>

                  <div className="space-y-3 text-sm text-[#5A6E7C] leading-relaxed">
                    <p>
                      <strong className="text-[#163447] font-semibold">Dr. Y. Murali</strong> provides pulmonary and respiratory care for patients seeking evaluation and management of breathing and lung-related concerns at Srikara Hospital, Madeenaguda, Hyderabad.
                    </p>
                    <p>
                      Consultations focus on patient-centered clinical evaluation, understanding the underlying timeline of symptoms, and guiding each individual toward appropriate testing and evidence-informed management.
                    </p>
                  </div>

                  {/* Areas of Practice Focus */}
                  <div className="pt-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#163447] mb-2.5">
                      Areas of Respiratory Focus:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Respiratory Consultation",
                        "Asthma Evaluation & Care",
                        "COPD & Chronic Bronchitis",
                        "Persistent Cough Investigation",
                        "Shortness of Breath Workup",
                        "Pulmonary Assessment & Testing",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-medium text-[#163447]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                    <Button variant="primary" size="lg" asChild className="rounded-lg bg-[#FF6B35] hover:bg-[#e85924] text-white font-semibold shadow-md">
                      <Link href="/book-appointment">Book a Consultation</Link>
                    </Button>
                    <Button variant="secondary" size="lg" asChild className="rounded-lg border border-[#D9E2EC] bg-white text-[#163447] font-semibold">
                      <Link href="/doctors/dr-y-murali">View Full Doctor Profile &rarr;</Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. "WHAT BRINGS YOU HERE?" (Interactive Patient Symptom Exploration)
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-t border-[#E2E8F0]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SymptomNavigator />
          </div>
        </section>

        {/* =========================================================================
            5. CURIOSITY & CONDITIONS (Understanding Symptoms & Educational Guide)
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#F5F7FA] border-t border-[#E2E8F0]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-left max-w-2xl mb-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2D9C9C]">
                Educational Guidance
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-[#163447]">
                Understanding Why Breathing Feels Difficult
              </h2>
              <p className="mt-1.5 text-sm sm:text-base text-[#5A6E7C]">
                Finding the right cause comes before finding the right treatment. Below are common questions patients bring to respiratory consultations.
              </p>
            </div>

            {/* Curiosity Questions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-2xs space-y-2.5">
                <span className="text-xs font-bold text-[#2D9C9C] uppercase tracking-wider">Educational Insight 01</span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#163447]">
                  &ldquo;When should a persistent cough be evaluated?&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6E7C] leading-relaxed">
                  Coughs lasting more than 3 to 8 weeks warrant medical evaluation. Causes can range from post-viral airway sensitivity and cough-variant asthma to acid reflux or environmental exposures.
                </p>
                <div className="pt-2">
                  <Link href="/conditions" className="text-xs font-bold text-[#2D9C9C] hover:text-[#163447] inline-flex items-center gap-1">
                    <span>Explore cough evaluation details</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-2xs space-y-2.5">
                <span className="text-xs font-bold text-[#2D9C9C] uppercase tracking-wider">Educational Insight 02</span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#163447]">
                  &ldquo;What can cause shortness of breath?&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6E7C] leading-relaxed">
                  Breathlessness can arise from airway narrowing, alveolar gas transfer limitation, physical deconditioning, or acute infections. Comprehensive testing helps pinpoint the precise source.
                </p>
                <div className="pt-2">
                  <Link href="/treatments" className="text-xs font-bold text-[#2D9C9C] hover:text-[#163447] inline-flex items-center gap-1">
                    <span>Understand pulmonary testing</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-2xs space-y-2.5">
                <span className="text-xs font-bold text-[#2D9C9C] uppercase tracking-wider">Educational Insight 03</span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#163447]">
                  &ldquo;Could poor sleep be affecting your breathing?&rdquo;
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6E7C] leading-relaxed">
                  Loud snoring, daytime sleepiness, and waking with gasping are hallmark signs of sleep-disordered breathing. Evaluation helps protect both lung and cardiovascular wellness.
                </p>
                <div className="pt-2">
                  <Link href="/conditions" className="text-xs font-bold text-[#2D9C9C] hover:text-[#163447] inline-flex items-center gap-1">
                    <span>Learn about sleep-related breathing</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Conditions Overview & Navigation */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2E8F0] pb-4 mb-4">
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#163447]">
                    Primary Respiratory Conditions
                  </h3>
                  <p className="text-xs text-[#5A6E7C]">Educational guides on common respiratory conditions evaluated by pulmonologists</p>
                </div>
                <Link href="/conditions" className="text-xs font-bold text-[#FF6B35] hover:text-[#e85924] shrink-0">
                  View All 10 Conditions &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { name: "Asthma", note: "Airway inflammation & breathing difficulty" },
                  { name: "COPD & Emphysema", note: "Chronic airflow limitation & bronchitis" },
                  { name: "Interstitial Lung Disease", note: "Lung tissue stiffness & fibrosis" },
                  { name: "Respiratory Infections", note: "Pneumonia & bronchial infections" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href="/conditions"
                    className="p-3 rounded-xl bg-[#F7FAFD] hover:bg-[#E0F2F1]/50 border border-[#E2E8F0]/80 transition-colors flex flex-col justify-between"
                  >
                    <span className="font-heading text-xs sm:text-sm font-bold text-[#163447]">{item.name}</span>
                    <span className="text-[11px] text-[#5A6E7C] mt-1">{item.note}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. ADVANCED DIAGNOSTICS OVERVIEW (Hero Mechanics + Directory)
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-t border-[#E2E8F0]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#2D9C9C]">
                  Diagnostic Understanding
                </span>
                <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-[#163447]">
                  Pulmonary Diagnostic Testing
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-[#5A6E7C] max-w-xl">
                  Accurate treatment starts with rigorous physiological assessment. Learn about standard respiratory diagnostic tools.
                </p>
              </div>
              <Button variant="secondary" size="md" asChild className="shrink-0">
                <Link href="/treatments">Testing Directory &rarr;</Link>
              </Button>
            </div>

            {/* Hero Airway Mechanics Panel */}
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#163447] text-white p-6 sm:p-8 shadow-md relative overflow-hidden mb-5">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-3 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D9C9C]/20 border border-[#2D9C9C]/30 text-xs font-semibold text-[#2D9C9C] uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2D9C9C] animate-ping" />
                    Interactive Pulmonary Mechanics
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold">
                    How Doctors Evaluate Airway Dynamics
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                    Testing identifies whether breathing limitation is located in the conducting airways (trachea and bronchial tree) or within the microscopic alveolar sacs where gas exchange occurs.
                  </p>
                </div>

                <div className="lg:col-span-5 flex justify-center bg-[#112431] p-4 rounded-xl border border-white/10">
                  <LungAnimation interactive={true} size="md" />
                </div>
              </div>
            </div>

            {/* Compact 4-Row Diagnostic List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { title: "Spirometry", desc: "Measures airflow speed and volume to evaluate airway obstruction." },
                { title: "Diffusing Capacity (DLCO)", desc: "Quantifies alveolar gas transfer into blood circulation." },
                { title: "FeNO Breath Testing", desc: "Measures eosinophilic bronchial inflammation non-invasively." },
                { title: "Sleep-Related Breathing Assessment", desc: "Evaluates nocturnal oxygen saturation and sleep apnea patterns." },
              ].map((t) => (
                <div key={t.title} className="rounded-xl border border-[#E2E8F0] bg-[#F7FAFD] p-4">
                  <h4 className="font-heading text-xs sm:text-sm font-bold text-[#163447]">{t.title}</h4>
                  <p className="text-[11px] sm:text-xs text-[#5A6E7C] mt-1 leading-normal">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            7. HOW YOUR CARE WORKS (Care Sequence at Srikara Hospital)
           ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#F7FAFD] border-t border-[#E2EEF5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2D9C9C]">
                Care Pathway
              </span>
              <h2 className="mt-1 font-heading text-2xl sm:text-3xl font-extrabold text-[#163447]">
                What to Expect During Your Care
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#5A6E7C]">
                Structured, unrushed steps from first consultation to ongoing respiratory wellness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {[
                {
                  step: "01",
                  title: "Clinical Consultation",
                  desc: "Discussion of your symptom history, daily triggers, and prior health records.",
                },
                {
                  step: "02",
                  title: "Targeted Evaluation",
                  desc: "Physiological breathing tests and chest imaging review to investigate causes.",
                },
                {
                  step: "03",
                  title: "Personalized Care Plan",
                  desc: "Clear explanations of findings and an individualized treatment strategy.",
                },
                {
                  step: "04",
                  title: "Follow-Up & Monitoring",
                  desc: "Ongoing evaluation, inhaler technique checks, and medication adjustments.",
                },
              ].map((stage, idx) => (
                <div key={stage.step} className="flex md:flex-col items-start gap-4 md:gap-2.5 p-4 rounded-xl bg-white border border-[#E2E8F0]">
                  <div className="flex flex-col items-center">
                    <span className="font-heading text-2xl font-extrabold text-[#2D9C9C]">
                      {stage.step}
                    </span>
                    {idx < 3 && <div className="md:hidden w-0.5 h-6 bg-[#2D9C9C]/30 my-1" />}
                  </div>
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[#163447]">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#5A6E7C] mt-1 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            8. REASSURANCE & PRACTICE COMMITMENT
           ========================================================================= */}
        <section className="py-10 bg-[#EBF6F7] border-y border-[#2D9C9C]/20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#2D9C9C]">
              Reassurance &amp; Partnership
            </span>
            <p className="font-heading text-lg sm:text-xl font-bold text-[#163447] mt-1 leading-snug">
              &ldquo;Understanding the cause is the first step toward clearer breathing. You don&apos;t have to navigate persistent respiratory symptoms alone.&rdquo;
            </p>
            <p className="text-xs text-[#5A6E7C] mt-2">
              Dr. Y. Murali conducts clinical evaluations at Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad.
            </p>
          </div>
        </section>

        {/* =========================================================================
            9. CLOSING IMMERSIVE CTA BANNER
           ========================================================================= */}
        <section id="contact-section" className="relative overflow-hidden bg-[#163447] py-14 sm:py-18 text-white">
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0 50 Q 25 20, 50 50 T 100 50" fill="none" stroke="#2D9C9C" strokeWidth="1" className="animate-flow-slow" />
              <path d="M0 70 Q 25 40, 50 70 T 100 70" fill="none" stroke="#FF6B35" strokeWidth="0.75" className="animate-flow-dash" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 space-y-4">
            <span className="inline-block rounded-full bg-[#2D9C9C]/20 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[#2D9C9C]">
              Consultation at Srikara Hospital
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to speak with Dr. Y. Murali?
            </h2>

            <p className="mx-auto max-w-lg text-sm sm:text-base text-white/80 leading-relaxed">
              Schedule your respiratory consultation at Srikara Hospital, Madeenaguda, Hyderabad to discuss your symptoms and diagnostic reports.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <Button variant="primary" size="lg" asChild className="w-full sm:w-auto rounded-xl bg-[#FF6B35] hover:bg-[#e85924] font-semibold text-white px-8 py-4 shadow-lg text-base">
                <Link href="/book-appointment">Book a Consultation</Link>
              </Button>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white border border-white/30 rounded-xl hover:bg-white/10 transition-colors"
              >
                <span>View Hospital Location &rarr;</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
