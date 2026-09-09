"use client";

import React, { useState } from "react";
import Link from "next/link";

interface SymptomItem {
  id: string;
  shortLabel: string;
  title: string;
  insight: string;
  patientExperience: string;
  evaluationPath: string;
  tag: string;
}

const PRIMARY_SYMPTOMS: SymptomItem[] = [
  {
    id: "cough",
    shortLabel: "Persistent Cough",
    title: "Persistent or Unexplained Cough",
    insight: "Not every cough has the same cause. Finding the exact physiological trigger comes before choosing the right treatment.",
    patientExperience: "A lingering cough lasting more than 3 to 8 weeks — dry, tickling, or productive with phlegm — that hasn't cleared with standard remedies.",
    evaluationPath: "Targeted airway assessment via spirometry, flow-volume loops, and non-invasive inflammation biomarkers.",
    tag: "Airway Investigation",
  },
  {
    id: "breathlessness",
    shortLabel: "Shortness of Breath",
    title: "Unexplained Breathlessness (Dyspnea)",
    insight: "Breathlessness can have many different triggers across airways and lung tissue. Proper testing identifies the true reason.",
    patientExperience: "Feeling winded during normal daily activities, climbing a single flight of stairs, or noticing breathing feels shallow or labored when lying down.",
    evaluationPath: "Complete pulmonary function testing (PFT) and diffusing capacity (DLCO) to measure gas exchange.",
    tag: "Ventilatory Function",
  },
  {
    id: "wheezing",
    shortLabel: "Wheezing",
    title: "Wheezing & Chest Tightness",
    insight: "Audible chest sounds and tightness usually reflect reversible bronchial constriction that responds well to targeted therapy.",
    patientExperience: "A whistling, rattling, or constricted feeling in the chest, particularly after cold air, exercise, viral infections, or allergen exposure.",
    evaluationPath: "Bronchodilator reversibility testing and fractional exhaled nitric oxide (FeNO) assessment.",
    tag: "Bronchial Reactivity",
  },
  {
    id: "sleep",
    shortLabel: "Sleep Problems",
    title: "Nocturnal Breathing & Sleep Fatigue",
    insight: "Could poor sleep be affecting your breathing? Nighttime airway collapsibility directly impacts daytime energy and cardiovascular health.",
    patientExperience: "Loud snoring, waking up gasping or choking, morning headaches, dry mouth, or persistent fatigue despite a full night in bed.",
    evaluationPath: "Specialist sleep medicine evaluation and overnight diagnostic oximetry / polysomnography coordination.",
    tag: "Sleep Medicine",
  },
];

const ADDITIONAL_SYMPTOMS: SymptomItem[] = [
  {
    id: "asthma-flare",
    shortLabel: "Frequent Asthma Flares",
    title: "Difficult-to-Control Asthma",
    insight: "When rescue inhalers are needed frequently, an updated phenotype assessment can unlock more effective targeted care.",
    patientExperience: "Frequent flare-ups, nocturnal waking from coughing, or feeling like standard inhalers aren't keeping symptoms controlled.",
    evaluationPath: "Phenotype-directed asthma workup, trigger analysis, and modern biologic therapy eligibility review.",
    tag: "Airway Phenotyping",
  },
  {
    id: "abnormal-ct",
    shortLabel: "Abnormal Chest CT",
    title: "Incidental Lung Nodule or CT Scan Finding",
    insight: "An abnormal scan report creates understandable worry, but most incidental nodules are benign and require straightforward protocol tracking.",
    patientExperience: "A lung nodule, ground-glass opacity, or shadow discovered on a chest X-ray or CT scan performed for another reason.",
    evaluationPath: "Systematic thoracic imaging correlation and evidence-based surveillance protocol management.",
    tag: "Thoracic Imaging",
  },
];

export const SymptomNavigator: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("cough");
  const [showAll, setShowAll] = useState<boolean>(false);

  const allSymptoms = showAll ? [...PRIMARY_SYMPTOMS, ...ADDITIONAL_SYMPTOMS] : PRIMARY_SYMPTOMS;
  const activeSymptom = [...PRIMARY_SYMPTOMS, ...ADDITIONAL_SYMPTOMS].find((s) => s.id === activeId) || PRIMARY_SYMPTOMS[0];

  return (
    <div className="w-full">
      {/* 1. Neuromarketing Framing */}
      <div className="text-center max-w-xl mx-auto mb-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#2D9C9C]">
          Personalized Symptom Guide
        </span>
        <h2 className="mt-1.5 font-heading text-2xl sm:text-3xl font-extrabold text-[#163447]">
          What brings you here?
        </h2>
        <p className="mt-1 text-sm sm:text-base text-[#5A6E7C]">
          Start with what you&apos;re experiencing.
        </p>
      </div>

      {/* 2. Touch-Friendly Mobile Pill Selector (Single Row Scroll or Clean Wrap) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center">
        {allSymptoms.map((symptom) => {
          const isActive = symptom.id === activeId;
          return (
            <button
              key={symptom.id}
              onClick={() => setActiveId(symptom.id)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-[#163447] text-white shadow-md ring-2 ring-[#2D9C9C] scale-[1.02]"
                  : "bg-[#F5F7FA] text-[#5A6E7C] border border-[#E2E8F0] hover:bg-white hover:text-[#163447]"
              }`}
            >
              {symptom.shortLabel}
            </button>
          );
        })}

        {!showAll && (
          <button
            onClick={() => setShowAll(true)}
            className="shrink-0 rounded-full px-3.5 py-2.5 text-xs font-semibold text-[#2D9C9C] bg-[#2D9C9C]/10 border border-[#2D9C9C]/30 hover:bg-[#2D9C9C]/20 transition-all cursor-pointer"
          >
            + See More Symptoms &rarr;
          </button>
        )}
      </div>

      {/* 3. Interactive Progressive Disclosure Card */}
      <div className="mt-5 rounded-2xl border border-[#E2E8F0] bg-gradient-to-br from-white to-[#FAFDFE] p-5 sm:p-7 shadow-sm transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#E2E8F0]/80 pb-3.5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#2D9C9C]">
              {activeSymptom.tag}
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-[#163447]">
              {activeSymptom.title}
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#163447] bg-[#E0F2F1] px-3 py-1 rounded-full w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2D9C9C]" />
            Evaluated directly by Dr. [Doctor Name]
          </span>
        </div>

        {/* Core Empathy & Insight */}
        <div className="mt-4 space-y-4">
          <div className="rounded-xl bg-[#F0F7FA]/70 p-3.5 border-l-3 border-[#2D9C9C]">
            <p className="text-xs sm:text-sm font-medium text-[#163447] italic">
              &ldquo;{activeSymptom.insight}&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-7 space-y-1">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#5A6E7C]">What You May Notice</h4>
              <p className="text-xs sm:text-sm text-[#14232D] leading-relaxed">
                {activeSymptom.patientExperience}
              </p>
            </div>

            <div className="md:col-span-5 rounded-xl bg-[#F7FAFD] p-3.5 border border-[#E2E8F0]/80 space-y-2.5">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#163447]">How We Investigate</h4>
                <p className="text-xs text-[#5A6E7C] leading-normal mt-0.5">
                  {activeSymptom.evaluationPath}
                </p>
              </div>
              <div className="pt-2 border-t border-[#E2E8F0]">
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B35] hover:text-[#e85924] transition-colors"
                >
                  <span>Consult Dr. [Doctor Name] for this symptom</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymptomNavigator;
