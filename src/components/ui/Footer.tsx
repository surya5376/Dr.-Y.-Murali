"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const toggleGroup = (group: string) => {
    setOpenGroup(openGroup === group ? null : group);
  };

  return (
    <footer className="border-t border-[#E2E8F0] bg-[#F5F7FA] text-sm text-[#5A6E7C]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Medical Emergency Disclaimer Alert */}
        <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50/80 p-4 text-xs leading-relaxed text-amber-900">
          <strong className="font-semibold text-amber-950">Medical Emergency Notice:</strong> If you are experiencing acute shortness of breath, severe chest pain, sudden coughing of blood, blue lips or fingers, or any critical emergency, please call your local emergency medical services or proceed to the nearest emergency room immediately. This website provides educational health guidance and does not replace emergency clinical evaluation.
        </div>

        {/* Desktop Footer (4 Columns) */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Doctor Practice Info */}
          <div className="space-y-2.5">
            <h3 className="font-heading text-lg font-bold text-[#163447]">Dr. Y. Murali</h3>
            <p className="text-xs text-[#2D9C9C] font-semibold uppercase tracking-wider">
              Pulmonologist
            </p>
            <p className="text-xs text-[#5A6E7C] leading-relaxed">
              Specialized respiratory evaluation and individualized care for conditions affecting the lungs, airways, and breathing.
            </p>
            <div className="pt-1 text-xs text-[#163447] space-y-0.5">
              <p className="font-semibold">Srikara Hospital</p>
              <p className="text-[#5A6E7C]">Mythri Nagar, Madeenaguda, Hyderabad</p>
              <p className="text-[#5A6E7C]">[Verified Registration]</p>
            </div>
          </div>

          {/* Column 2: Clinical Focus */}
          <div>
            <h4 className="font-heading text-sm font-bold text-[#163447] mb-3">Respiratory Conditions</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/conditions#asthma" className="hover:text-[#2D9C9C]">Asthma &amp; Airway Reactivity</Link></li>
              <li><Link href="/conditions#copd" className="hover:text-[#2D9C9C]">COPD &amp; Chronic Bronchitis</Link></li>
              <li><Link href="/conditions#cough" className="hover:text-[#2D9C9C]">Persistent Cough Investigation</Link></li>
              <li><Link href="/conditions#ild" className="hover:text-[#2D9C9C]">Interstitial Lung Disease (ILD)</Link></li>
              <li><Link href="/conditions#sleep" className="hover:text-[#2D9C9C]">Sleep Apnea &amp; Nocturnal Breathing</Link></li>
              <li><Link href="/conditions#pneumonia" className="hover:text-[#2D9C9C]">Respiratory Infections &amp; Pneumonia</Link></li>
            </ul>
          </div>

          {/* Column 3: Diagnostics & Care Services */}
          <div>
            <h4 className="font-heading text-sm font-bold text-[#163447] mb-3">Diagnostics &amp; Care</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/treatments#spirometry" className="hover:text-[#2D9C9C]">Spirometry &amp; Airflow Dynamics</Link></li>
              <li><Link href="/treatments#dlco" className="hover:text-[#2D9C9C]">Diffusing Capacity (DLCO)</Link></li>
              <li><Link href="/treatments#feno" className="hover:text-[#2D9C9C]">Exhaled Nitric Oxide (FeNO)</Link></li>
              <li><Link href="/treatments#bronchoscopy" className="hover:text-[#2D9C9C]">Diagnostic Bronchoscopy Overview</Link></li>
              <li><Link href="/treatments#sleep-testing" className="hover:text-[#2D9C9C]">Sleep-Related Breathing Assessment</Link></li>
              <li><Link href="/treatments#imaging" className="hover:text-[#2D9C9C]">High-Resolution Chest CT Review</Link></li>
            </ul>
          </div>

          {/* Column 4: Hospital Location & Contact */}
          <div>
            <h4 className="font-heading text-sm font-bold text-[#163447] mb-3">Practice Location</h4>
            <div className="space-y-2 text-xs">
              <p><span className="font-semibold text-[#163447]">Hospital:</span> Srikara Hospital</p>
              <p><span className="font-semibold text-[#163447]">Address:</span> 222, Mythri Nagar, Phase II, Hafeezpet / Madeenaguda, Hyderabad, Telangana</p>
              <p><span className="font-semibold text-[#163447]">Phone:</span> [Verified Phone]</p>
              <p><span className="font-semibold text-[#163447]">Consultations:</span> [Verified Consultation Hours]</p>
              <div className="pt-2">
                <Link href="/book-appointment" className="text-xs font-bold text-[#FF6B35] hover:text-[#e85924]">
                  Book an Appointment &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Compact Accordion Footer */}
        <div className="md:hidden space-y-3 mb-8">
          <div className="pb-3 border-b border-[#E2E8F0]">
            <h3 className="font-heading text-base font-bold text-[#163447]">Dr. Y. Murali</h3>
            <p className="text-xs text-[#2D9C9C] font-semibold">Pulmonologist &bull; Srikara Hospital</p>
            <p className="text-xs text-[#5A6E7C] mt-0.5">Mythri Nagar, Madeenaguda, Hyderabad</p>
          </div>

          <div className="border-b border-[#E2E8F0] pb-2.5">
            <button
              onClick={() => toggleGroup("explore")}
              className="flex w-full items-center justify-between py-1 text-sm font-bold text-[#163447]"
            >
              <span>EXPLORE &amp; PRACTICE</span>
              <span>{openGroup === "explore" ? "−" : "+"}</span>
            </button>
            {openGroup === "explore" && (
              <ul className="mt-2 space-y-2 text-xs pl-2">
                <li><Link href="/doctors/dr-y-murali" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">About Dr. Y. Murali</Link></li>
                <li><Link href="/conditions" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">Conditions Evaluated</Link></li>
                <li><Link href="/treatments" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">Treatments &amp; Diagnostics</Link></li>
                <li><Link href="/patient-resources" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">Patient Resources</Link></li>
                <li><Link href="/health-insights" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">Health Insights</Link></li>
                <li><Link href="/faq" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">Frequently Asked Questions</Link></li>
              </ul>
            )}
          </div>

          <div className="border-b border-[#E2E8F0] pb-2.5">
            <button
              onClick={() => toggleGroup("conditions")}
              className="flex w-full items-center justify-between py-1 text-sm font-bold text-[#163447]"
            >
              <span>RESPIRATORY CONDITIONS</span>
              <span>{openGroup === "conditions" ? "−" : "+"}</span>
            </button>
            {openGroup === "conditions" && (
              <ul className="mt-2 space-y-2 text-xs pl-2">
                <li><Link href="/conditions#asthma" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">Asthma &amp; Airway Reactivity</Link></li>
                <li><Link href="/conditions#copd" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">COPD &amp; Chronic Bronchitis</Link></li>
                <li><Link href="/conditions#cough" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">Chronic Cough Investigation</Link></li>
                <li><Link href="/conditions#ild" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">Interstitial Lung Disease (ILD)</Link></li>
                <li><Link href="/conditions#sleep" className="block py-1 text-[#5A6E7C] hover:text-[#2D9C9C]">Sleep Apnea &amp; Snoring</Link></li>
              </ul>
            )}
          </div>

          <div className="border-b border-[#E2E8F0] pb-2.5">
            <button
              onClick={() => toggleGroup("contact")}
              className="flex w-full items-center justify-between py-1 text-sm font-bold text-[#163447]"
            >
              <span>HOSPITAL LOCATION &amp; CONTACT</span>
              <span>{openGroup === "contact" ? "−" : "+"}</span>
            </button>
            {openGroup === "contact" && (
              <div className="mt-2 space-y-1.5 text-xs pl-2 text-[#5A6E7C]">
                <p><strong className="text-[#163447]">Practice:</strong> Srikara Hospital</p>
                <p><strong className="text-[#163447]">Address:</strong> 222, Mythri Nagar, Phase II, Hafeezpet / Madeenaguda, Hyderabad, Telangana</p>
                <p><strong className="text-[#163447]">Phone:</strong> [Verified Phone]</p>
                <p><strong className="text-[#163447]">Hours:</strong> [Verified Consultation Hours]</p>
              </div>
            )}
          </div>
        </div>

        {/* Medical Educational Disclaimer & Legal Notice */}
        <div className="border-t border-[#E2E8F0] pt-6 space-y-3 text-xs text-[#5A6E7C]">
          <p className="leading-relaxed italic">
            <strong>Medical Disclaimer:</strong> Information on this website is for general educational purposes and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult Dr. Y. Murali or a qualified healthcare provider regarding your symptoms, medical conditions, or diagnostic test results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <p>© {new Date().getFullYear()} Dr. Y. Murali. Pulmonologist, Srikara Hospital. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="hover:text-[#2D9C9C]">Clinic Location</Link>
              <Link href="/faq" className="hover:text-[#2D9C9C]">FAQs</Link>
              <Link href="/book-appointment" className="hover:text-[#2D9C9C]">Book Consultation</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
