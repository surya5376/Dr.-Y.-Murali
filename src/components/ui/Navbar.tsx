"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection for subtle shadow elevation
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleDropdownEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileSection = (name: string) => {
    setMobileExpandedSection(mobileExpandedSection === name ? null : name);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-all duration-200 border-b ${
        scrolled
          ? "border-[#E6EDF2] shadow-sm bg-white/98 backdrop-blur-md"
          : "border-[#E6EDF2]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[76px] flex items-center justify-between">
        {/* =========================================================================
            1. LOGO / BRAND AREA (Compact & Doctor-First)
           ========================================================================= */}
        <div className="flex items-center shrink-0">
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C9C] rounded-lg"
          >
            {/* Subtle Respiratory Icon */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E0F2F1]/90 text-[#2D9C9C] transition-transform duration-200 group-hover:scale-105">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v8m0 0l-2.5 3m2.5-3l2.5 3" />
                <path d="M6.5 14c0 3 2 5 4.5 5s1-.8 1-2m0-10c-2.2 0-4 1.2-5 3.5-.8 2-.5 4.5 0 6.5" />
                <path d="M17.5 14c0 3-2 5-4.5 5s-1-.8-1-2m0-10c2.2 0 4 1.2 5 3.5.8 2 .5 4.5 0 6.5" />
              </svg>
            </div>

            {/* Doctor Identity Block */}
            <div className="flex flex-col text-left">
              <span className="font-heading text-[17px] sm:text-[18px] font-bold tracking-tight text-[#163447] leading-tight group-hover:text-[#2D9C9C] transition-colors">
                Dr. Y. Murali
              </span>
              <span className="text-[10.5px] font-semibold tracking-wider text-[#5A6E7C] uppercase">
                Pulmonologist &bull; Srikara Hospital
              </span>
            </div>
          </Link>
        </div>

        {/* =========================================================================
            2. DESKTOP NAVIGATION (Visually Centered, Clean Labels, Editorial Spacing)
           ========================================================================= */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2 justify-center flex-1 px-4"
        >
          {/* Conditions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("conditions")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "conditions" ? null : "conditions"
                )
              }
              className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C9C] ${
                activeDropdown === "conditions"
                  ? "text-[#2D9C9C] bg-[#F7FAFD]"
                  : "text-[#163447] hover:text-[#2D9C9C] hover:bg-[#F7FAFD]"
              }`}
              aria-expanded={activeDropdown === "conditions"}
              aria-haspopup="true"
            >
              <span>Conditions</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "conditions" ? "rotate-180 text-[#2D9C9C]" : "text-slate-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Conditions Menu Dropdown */}
            {activeDropdown === "conditions" && (
              <div className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-[#E6EDF2] bg-white p-2 shadow-xl shadow-slate-900/5 animate-fade-in z-50">
                <div className="space-y-0.5">
                  <Link
                    href="/conditions#asthma"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Asthma
                  </Link>
                  <Link
                    href="/conditions#copd"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    COPD
                  </Link>
                  <Link
                    href="/conditions#chronic-cough"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Chronic Cough
                  </Link>
                  <Link
                    href="/conditions#breathlessness"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Breathlessness
                  </Link>
                  <Link
                    href="/conditions#sleep-apnea"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Sleep &amp; Breathing Disorders
                  </Link>
                  <Link
                    href="/conditions#ild"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Interstitial Lung Disease
                  </Link>
                  <Link
                    href="/conditions#tuberculosis"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Tuberculosis
                  </Link>
                </div>
                <div className="mt-1 pt-1 border-t border-slate-100">
                  <Link
                    href="/conditions"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center justify-between px-3 py-2 text-[13px] font-semibold text-[#2D9C9C] hover:bg-[#2D9C9C]/5 rounded-lg transition-colors"
                  >
                    <span>View All Conditions</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Treatments Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("treatments")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "treatments" ? null : "treatments"
                )
              }
              className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C9C] ${
                activeDropdown === "treatments"
                  ? "text-[#2D9C9C] bg-[#F7FAFD]"
                  : "text-[#163447] hover:text-[#2D9C9C] hover:bg-[#F7FAFD]"
              }`}
              aria-expanded={activeDropdown === "treatments"}
              aria-haspopup="true"
            >
              <span>Treatments</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "treatments" ? "rotate-180 text-[#2D9C9C]" : "text-slate-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Treatments Menu Dropdown */}
            {activeDropdown === "treatments" && (
              <div className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-[#E6EDF2] bg-white p-2 shadow-xl shadow-slate-900/5 animate-fade-in z-50">
                <div className="space-y-0.5">
                  <Link
                    href="/treatments#comprehensive-respiratory-consultation"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Respiratory Consultation
                  </Link>
                  <Link
                    href="/treatments#spirometry-pft"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Pulmonary Function Testing
                  </Link>
                  <Link
                    href="/treatments#flexible-bronchoscopy"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Bronchoscopy
                  </Link>
                  <Link
                    href="/treatments#diffusing-capacity-dlco"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Respiratory Diagnostics
                  </Link>
                  <Link
                    href="/treatments#sleep-apnea-evaluation"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Sleep Evaluation
                  </Link>
                </div>
                <div className="mt-1 pt-1 border-t border-slate-100">
                  <Link
                    href="/treatments"
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center justify-between px-3 py-2 text-[13px] font-semibold text-[#2D9C9C] hover:bg-[#2D9C9C]/5 rounded-lg transition-colors"
                  >
                    <span>View All Services</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* About Dr. Murali (Single Line, Never Wraps) */}
          <Link
            href="/doctors/dr-y-murali"
            className="px-3.5 py-2 text-[15px] font-medium text-[#163447] hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C9C]"
          >
            About Dr. Murali
          </Link>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleDropdownEnter("resources")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              type="button"
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "resources" ? null : "resources"
                )
              }
              className={`flex items-center gap-1.5 px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C9C] ${
                activeDropdown === "resources"
                  ? "text-[#2D9C9C] bg-[#F7FAFD]"
                  : "text-[#163447] hover:text-[#2D9C9C] hover:bg-[#F7FAFD]"
              }`}
              aria-expanded={activeDropdown === "resources"}
              aria-haspopup="true"
            >
              <span>Resources</span>
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "resources" ? "rotate-180 text-[#2D9C9C]" : "text-slate-400"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Resources Menu Dropdown */}
            {activeDropdown === "resources" && (
              <div className="absolute top-full left-0 mt-1 w-64 rounded-xl border border-[#E6EDF2] bg-white p-2 shadow-xl shadow-slate-900/5 animate-fade-in z-50">
                <div className="space-y-0.5">
                  <Link
                    href="/health-insights"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Health Insights
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Patient FAQs
                  </Link>
                  <Link
                    href="/patient-resources"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Before Your Visit
                  </Link>
                  <Link
                    href="/patient-resources#inhaler-guide"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-[14px] text-slate-700 hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg font-medium transition-colors"
                  >
                    Respiratory Health Guide
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Contact Direct Link */}
          <Link
            href="/contact"
            className="px-3.5 py-2 text-[15px] font-medium text-[#163447] hover:text-[#2D9C9C] hover:bg-[#F7FAFD] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C9C]"
          >
            Contact
          </Link>
        </nav>

        {/* =========================================================================
            3. DESKTOP ACTIONS (Understated Phone + Prominent #FF6B35 CTA)
           ========================================================================= */}
        <div className="hidden lg:flex items-center gap-5 shrink-0">
          {/* Understated Phone (Does not compete with CTA) */}
          <a
            href="tel:[Phone]"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-slate-600 hover:text-[#163447] transition-colors py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C9C] rounded"
          >
            <svg
              className="h-4 w-4 text-[#2D9C9C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="tracking-tight">[Phone]</span>
          </a>

          {/* Primary CTA (Refined, #FF6B35, Elegant Arrow) */}
          <Link
            href="/book-appointment"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF6B35] text-white text-[14.5px] font-semibold shadow-xs hover:bg-[#e85924] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] focus-visible:ring-offset-2"
          >
            <span>Book a Consultation</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* =========================================================================
            4. MOBILE COMPOSITION (Clean Brand + Hamburger Menu Toggle)
           ========================================================================= */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="inline-flex items-center justify-center p-2.5 text-[#163447] hover:text-[#2D9C9C] hover:bg-[#F5F7FA] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2D9C9C]"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* =========================================================================
          5. MOBILE FULL-WIDTH DRAWER
         ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E6EDF2] bg-white px-5 pt-5 pb-8 space-y-6 shadow-2xl animate-fade-in">
          {/* Brand Header Inside Drawer */}
          <div className="pb-4 border-b border-slate-100 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E0F2F1] text-[#2D9C9C]">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v8m0 0l-2.5 3m2.5-3l2.5 3" />
                <path d="M6.5 14c0 3 2 5 4.5 5s1-.8 1-2m0-10c-2.2 0-4 1.2-5 3.5-.8 2-.5 4.5 0 6.5" />
                <path d="M17.5 14c0 3-2 5-4.5 5s-1-.8-1-2m0-10c2.2 0 4 1.2 5 3.5.8 2 .5 4.5 0 6.5" />
              </svg>
            </div>
            <div>
              <span className="block font-heading text-base font-bold text-[#163447]">
                Dr. Y. Murali
              </span>
              <span className="block text-xs font-semibold text-[#2D9C9C]">
                Pulmonologist &bull; Srikara Hospital
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1 text-left">
            {/* Conditions Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileSection("conditions")}
                className="flex items-center justify-between w-full px-3.5 py-2.5 text-[15px] font-semibold text-[#163447] hover:bg-[#F7FAFD] rounded-lg transition-colors"
              >
                <span>Conditions</span>
                <span className="text-slate-400 text-xs">
                  {mobileExpandedSection === "conditions" ? "−" : "+"}
                </span>
              </button>
              {mobileExpandedSection === "conditions" && (
                <div className="pl-6 pr-2 py-1 space-y-1 text-sm text-slate-600 bg-[#F8FAFC] rounded-lg my-1">
                  <Link
                    href="/conditions#asthma"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Asthma
                  </Link>
                  <Link
                    href="/conditions#copd"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    COPD
                  </Link>
                  <Link
                    href="/conditions#chronic-cough"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Chronic Cough
                  </Link>
                  <Link
                    href="/conditions#breathlessness"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Breathlessness
                  </Link>
                  <Link
                    href="/conditions#sleep-apnea"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Sleep &amp; Breathing Disorders
                  </Link>
                  <Link
                    href="/conditions"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 font-semibold text-[#2D9C9C]"
                  >
                    View All Conditions &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* Treatments Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileSection("treatments")}
                className="flex items-center justify-between w-full px-3.5 py-2.5 text-[15px] font-semibold text-[#163447] hover:bg-[#F7FAFD] rounded-lg transition-colors"
              >
                <span>Treatments</span>
                <span className="text-slate-400 text-xs">
                  {mobileExpandedSection === "treatments" ? "−" : "+"}
                </span>
              </button>
              {mobileExpandedSection === "treatments" && (
                <div className="pl-6 pr-2 py-1 space-y-1 text-sm text-slate-600 bg-[#F8FAFC] rounded-lg my-1">
                  <Link
                    href="/treatments#comprehensive-respiratory-consultation"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Respiratory Consultation
                  </Link>
                  <Link
                    href="/treatments#spirometry-pft"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Pulmonary Function Testing
                  </Link>
                  <Link
                    href="/treatments#flexible-bronchoscopy"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Bronchoscopy
                  </Link>
                  <Link
                    href="/treatments#diffusing-capacity-dlco"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Respiratory Diagnostics
                  </Link>
                  <Link
                    href="/treatments"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 font-semibold text-[#2D9C9C]"
                  >
                    View All Services &rarr;
                  </Link>
                </div>
              )}
            </div>

            {/* About Dr. Murali */}
            <Link
              href="/doctors/dr-y-murali"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 text-[15px] font-semibold text-[#163447] hover:bg-[#F7FAFD] hover:text-[#2D9C9C] rounded-lg transition-colors"
            >
              About Dr. Murali
            </Link>

            {/* Resources Accordion */}
            <div>
              <button
                type="button"
                onClick={() => toggleMobileSection("resources")}
                className="flex items-center justify-between w-full px-3.5 py-2.5 text-[15px] font-semibold text-[#163447] hover:bg-[#F7FAFD] rounded-lg transition-colors"
              >
                <span>Resources</span>
                <span className="text-slate-400 text-xs">
                  {mobileExpandedSection === "resources" ? "−" : "+"}
                </span>
              </button>
              {mobileExpandedSection === "resources" && (
                <div className="pl-6 pr-2 py-1 space-y-1 text-sm text-slate-600 bg-[#F8FAFC] rounded-lg my-1">
                  <Link
                    href="/health-insights"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Health Insights
                  </Link>
                  <Link
                    href="/faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Patient FAQs
                  </Link>
                  <Link
                    href="/patient-resources"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Before Your Visit
                  </Link>
                  <Link
                    href="/patient-resources#inhaler-guide"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1.5 hover:text-[#2D9C9C]"
                  >
                    Respiratory Health Guide
                  </Link>
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 text-[15px] font-semibold text-[#163447] hover:bg-[#F7FAFD] hover:text-[#2D9C9C] rounded-lg transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Action Buttons Inside Mobile Drawer */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <Link
              href="/book-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-[#FF6B35] text-white text-[15px] font-bold shadow-md hover:bg-[#e85924] transition-colors"
            >
              <span>Book a Consultation</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            <a
              href="tel:[Phone]"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold text-[#163447] bg-[#F5F7FA] hover:bg-slate-200 transition-colors"
            >
              <svg className="h-4 w-4 text-[#2D9C9C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Clinic: [Phone]</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
