import React from "react";
import Link from "next/link";
import Navbar from "../../src/components/ui/Navbar";
import Footer from "../../src/components/ui/Footer";
import MobileBottomBar from "../../src/components/ui/MobileBottomBar";
import { Button } from "../../src/components/ui/Button";

interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  clinicalPerspective: string;
}

const HEALTH_ARTICLES: ArticleItem[] = [
  {
    id: "chronic-cough-evaluation",
    title: "Why Won't My Cough Go Away? Understanding Chronic Cough (>3-4 Weeks)",
    category: "Airway Diagnostics",
    readTime: "4 min read",
    summary: "A cough lasting beyond three to four weeks is no longer a standard acute cold. It signifies persistent airway irritation or inflammation requiring systematic investigation rather than repeated cough syrups.",
    keyTakeaways: [
      "Most chronic coughs are caused by asthma / cough-variant asthma, upper airway cough syndrome (post-nasal drip), or gastroesophageal reflux.",
      "Cough syrups merely suppress the reflex center without treating mucosal inflammation or bronchial constriction.",
      "Detailed clinical assessment paired with spirometry can quickly determine whether bronchial hyperreactivity is present.",
    ],
    clinicalPerspective: "Identifying whether the cough originates in the upper airways, lower bronchioles, or esophagus is the key to complete resolution without endless antibiotic rounds.",
  },
  {
    id: "exertional-breathlessness",
    title: "Breathlessness on Exertion: When to Look Beyond General Fatigue",
    category: "Symptom Investigation",
    readTime: "5 min read",
    summary: "Feeling short of breath when climbing stairs or walking briskly is frequently dismissed as aging or lack of fitness. However, exertional dyspnea is often the earliest clinical indicator of lung or cardiovascular changes.",
    keyTakeaways: [
      "Gradual airway narrowing in asthma, COPD, or early pulmonary fibrosis subtly limits ventilatory reserve before resting symptoms appear.",
      "A simple 6-minute walk test with continuous oximetry reveals whether oxygen levels drop during physical activity.",
      "Catching pulmonary disease at the exertional stage preserves long-term lung tissue and exercise tolerance.",
    ],
    clinicalPerspective: "Never accept uncharacteristic breathing effort as normal aging. Early objective lung volume testing makes all the difference in halting progression.",
  },
  {
    id: "inhaler-safety-and-steroids",
    title: "The Truth About Inhaled Corticosteroids: Why Daily Controllers Are Safe",
    category: "Medication & Inhaler Care",
    readTime: "4 min read",
    summary: "Patients frequently express anxiety regarding 'steroid' inhalers, fearing weight gain or dependence. Inhaled corticosteroids work locally in microgram doses directly inside bronchial tissues, unlike oral steroid tablets.",
    keyTakeaways: [
      "Inhaled doses are measured in micrograms (millionths of a gram), delivering targeted mucosal anti-inflammatory action with minimal systemic absorption.",
      "Regular controller use prevents the airway remodeling and scarring that occurs with chronic untreated inflammation.",
      "Rinsing your mouth with water after each dose completely prevents localized hoarseness or oral fungal irritation.",
    ],
    clinicalPerspective: "Patients who maintain daily controller therapy experience dramatically fewer flare-ups, preserve normal lung capacity, and avoid emergency hospitalization.",
  },
  {
    id: "asthma-vs-copd-differences",
    title: "Asthma vs. COPD: Understanding the Differences in Symptoms and Care",
    category: "Chronic Lung Care",
    readTime: "5 min read",
    summary: "While both conditions cause wheezing and breathing restriction, asthma is characterized by variable, reversible bronchial spasms, whereas COPD involves progressive, fixed airflow limitation and alveolar damage.",
    keyTakeaways: [
      "Asthma frequently begins in childhood or early adulthood and fluctuates with allergic triggers and temperature changes.",
      "COPD typically develops in adults with a history of long-term tobacco smoke, biomass fuel, or heavy airborne pollutant exposure.",
      "Spirometry before and after a bronchodilator puff mathematically distinguishes reversible asthma from fixed COPD obstruction.",
    ],
    clinicalPerspective: "Accurate differentiation prevents misaligned therapy. COPD prioritizes dual long-acting bronchodilators, while asthma is anchored by inhaled anti-inflammatory controllers.",
  },
  {
    id: "spirometry-patient-walkthrough",
    title: "What Happens During a Spirometry Test: A Step-by-Step Patient Walkthrough",
    category: "Diagnostic Testing",
    readTime: "4 min read",
    summary: "Spirometry is the gold standard for measuring how much air your lungs can hold and how rapidly you can exhale it. Here is exactly what to anticipate during your pulmonary function test.",
    keyTakeaways: [
      "The test is non-invasive, painless, and takes approximately 20 to 30 minutes in the pulmonary function lab.",
      "You will take a maximum inhalation and blow out into a sensor with maximal speed and effort for at least six seconds.",
      "A bronchodilator inhaler is administered to determine if lung airflow improves substantially after relaxing airway muscles.",
    ],
    clinicalPerspective: "Standardized graphical flow-volume loops give us objective numbers—replacing subjective guesswork with scientific certainty.",
  },
  {
    id: "post-viral-airway-hyperreactivity",
    title: "Post-Infectious Airway Hyperreactivity: Why You Still Cough Weeks After a Cold",
    category: "Infection Recovery",
    readTime: "3 min read",
    summary: "Following viral bronchitis or influenza, the respiratory epithelial lining can remain stripped and hyper-sensitive for weeks, triggering coughing fits from cold drafts, laughter, or mild exertion.",
    keyTakeaways: [
      "The acute viral infection has cleared; ongoing coughing is driven by temporary nerve hypersensitivity and bronchial inflammation.",
      "Antibiotics are ineffective for post-viral cough because there is no active bacterial pathogen present.",
      "A short targeted course of anti-inflammatory inhalers allows mucosal epithelial regeneration and silences the cough reflex.",
    ],
    clinicalPerspective: "Understanding that the infection has resolved provides peace of mind, allowing us to focus on soothing bronchial irritation rather than unnecessary medication.",
  },
  {
    id: "sleep-apnea-and-oxygen-dips",
    title: "Recognizing Hidden Sleep Apnea: Snoring, Daytime Exhaustion, and Oxygen Dips",
    category: "Sleep Medicine",
    readTime: "4 min read",
    summary: "Obstructive Sleep Apnea (OSA) occurs when upper airway muscles relax during sleep, temporarily blocking airflow. This leads to silent nighttime oxygen drops that strain the cardiovascular system.",
    keyTakeaways: [
      "Key signs include loud, irregular snoring, gasping awakenings, dry mouth upon waking, and persistent midday brain fog.",
      "Untreated sleep apnea is a major contributor to resistant high blood pressure, atrial fibrillation, and stroke risk.",
      "Diagnostic sleep studies (polysomnography) quantify the exact frequency of nocturnal breathing pauses and oxygen dips.",
    ],
    clinicalPerspective: "Restoring continuous nighttime oxygenation with CPAP therapy often produces remarkable improvements in energy, focus, and cardiovascular control.",
  },
  {
    id: "interstitial-lung-disease-early-detection",
    title: "Interstitial Lung Disease (ILD): Why Early High-Resolution CT Matters",
    category: "Specialized Pulmonology",
    readTime: "5 min read",
    summary: "ILD comprises a family of over 200 disorders causing progressive inflammation and scarring of the delicate lung tissue surrounding the air sacs. Early recognition is vital to preserving lung architecture.",
    keyTakeaways: [
      "Early signs include a persistent dry cough and breathing difficulty during physical exertion, often with 'velcro crackles' heard on examination.",
      "High-Resolution CT (HRCT) thorax captures microscopic reticulation and architectural distortion long before plain X-rays show changes.",
      "Modern antifibrotic and immunomodulatory medications significantly slow fibrotic progression when initiated early.",
    ],
    clinicalPerspective: "Prompt multidisciplinary assessment and baseline diffusing capacity (DLCO) measurement offer the best opportunity to safeguard vital lung capacity.",
  },
  {
    id: "hyderabad-air-quality-and-lungs",
    title: "Seasonal Air Quality & Pollution: Protecting Sensitive Airways in Urban Settings",
    category: "Preventive Health",
    readTime: "4 min read",
    summary: "Seasonal winter inversions, construction particulate matter (PM2.5), and vehicle emissions create substantial inflammatory challenges for patients with asthma, bronchitis, or COPD.",
    keyTakeaways: [
      "Microscopic PM2.5 particulates penetrate directly into terminal alveoli, triggering acute bronchial inflammation and mucus hypersecretion.",
      "High-efficiency particulate masks (N95/FFP2) and indoor HEPA air filtration significantly lower your respiratory particulate burden.",
      "Proactive adjustment of maintenance controller inhalers ahead of peak winter months prevents seasonal hospitalizations.",
    ],
    clinicalPerspective: "We work with our patients in Madeenaguda and Hyderabad to build seasonal action plans, ensuring inhaler dosages are optimized before smog spikes occur.",
  },
  {
    id: "smoking-cessation-and-lung-recovery",
    title: "Smoking Cessation and Pulmonary Healing: What Happens in Your Lungs Within 12 Months",
    category: "Preventive Care",
    readTime: "4 min read",
    summary: "The human lung possesses remarkable regenerative capacity. Quitting smoking initiates immediate physiological healing that progressively lowers the risk of chronic lung decline.",
    keyTakeaways: [
      "Within 48 to 72 hours, bronchial airway passages relax and breathing becomes noticeably easier.",
      "Within 1 to 9 months, microscopic bronchial cilia regrow, restoring the lungs' natural ability to clear mucus and ward off infections.",
      "Quitting halts the accelerated annual loss of FEV1 lung capacity, bringing your pulmonary trajectory back toward normal age-related decline.",
    ],
    clinicalPerspective: "No matter how long or how heavily you have smoked, cessation immediately preserves the lung capacity you currently possess and prevents fatal complications.",
  },
];

export default function HealthInsightsPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#163447] flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#EBF3F8] to-[#F7FAFD] pt-12 pb-14 border-b border-[#D8E6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C] uppercase tracking-wider mb-4 border border-[#2D9C9C]/20">
              Medical Insights & Respiratory Education
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163447] tracking-tight mb-4">
              Health Insights & Pulmonary Education
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Evidence-based respiratory medicine articles authored and reviewed by <strong className="text-[#163447]">Dr. Y. Murali</strong>, Pulmonologist at <strong className="text-[#163447]">Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/book-appointment">
                <Button className="bg-[#2D9C9C] hover:bg-[#238080] text-white px-6 py-3 rounded-lg font-medium shadow-sm transition-colors">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/conditions">
                <Button variant="outline" className="border-[#2D9C9C] text-[#2D9C9C] hover:bg-[#2D9C9C]/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  Browse Conditions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Editorial Standards Notice */}
        <div className="bg-white rounded-xl border border-[#D8E6F0] p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#2D9C9C]/10 text-[#2D9C9C] font-bold flex items-center justify-center shrink-0">
              🩺
            </div>
            <div>
              <h2 className="text-sm font-bold text-[#163447]">
                Medically Reviewed by Dr. Y. Murali • [Verified Credentials]
              </h2>
              <p className="text-xs text-slate-500">
                Pulmonologist at Srikara Hospital, Madeenaguda, Hyderabad • Based on ATS/ERS and GOLD international respiratory clinical guidelines.
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-md bg-slate-100 text-slate-700 whitespace-nowrap">
            Educational Purpose Only
          </span>
        </div>

        {/* Article Grid */}
        <div className="space-y-8">
          {HEALTH_ARTICLES.map((article) => (
            <article
              key={article.id}
              id={article.id}
              className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-8 shadow-sm hover:border-[#2D9C9C]/40 transition-colors"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C]">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs text-slate-500">{article.readTime}</span>
                </div>
                <span className="text-xs text-slate-500 italic">
                  Reviewed by Dr. Y. Murali
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#163447] mt-4 mb-3">
                {article.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                {article.summary}
              </p>

              {/* Key Takeaways */}
              <div className="bg-[#F8FAFC] rounded-xl border border-slate-200/80 p-5 mb-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2D9C9C]"></span>
                  Key Clinical Takeaways
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {article.keyTakeaways.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#2D9C9C] font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pulmonologist Clinical Perspective */}
              <div className="p-4 rounded-xl bg-teal-50/50 border border-[#2D9C9C]/20 text-xs sm:text-sm text-[#163447]">
                <strong className="text-[#2D9C9C]">Dr. Y. Murali&apos;s Clinical Perspective: </strong>
                {article.clinicalPerspective}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Link href="/book-appointment" className="text-xs font-semibold text-[#2D9C9C] hover:underline flex items-center gap-1">
                  Discuss this condition during a consultation →
                </Link>
                <Link href="/conditions">
                  <Button variant="ghost" className="text-xs text-slate-600 hover:text-[#163447]">
                    Explore Related Conditions
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer Card */}
        <div className="bg-[#FFF8F0] border border-[#FFD8B3] rounded-xl p-6">
          <h4 className="text-base font-bold text-[#A64A00] mb-2 flex items-center gap-2">
            <span>ℹ️</span> Educational Medical Content Disclaimer
          </h4>
          <p className="text-xs sm:text-sm text-[#7A3600] leading-relaxed">
            The health insights, explanations, and articles presented on this website are prepared solely for educational and informational purposes. They do not constitute formal medical diagnoses or substitute for an individualized clinical consultation with Dr. Y. Murali or other qualified medical specialists. For diagnostic confirmation or personal treatment adjustments, please book an appointment at Srikara Hospital, Madeenaguda, Hyderabad.
          </p>
        </div>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-[#163447] to-[#1C4259] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Have Specific Questions About Your Lungs?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Dr. Y. Murali is available for clinical outpatient consultations at Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link href="/book-appointment" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold shadow transition-colors">
                Book Consultation
              </Button>
            </Link>
            <Link href="/faq" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-white/40 text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-colors">
                View FAQs
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
