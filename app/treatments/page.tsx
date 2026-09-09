import React from "react";
import Link from "next/link";
import Navbar from "../../src/components/ui/Navbar";
import Footer from "../../src/components/ui/Footer";
import MobileBottomBar from "../../src/components/ui/MobileBottomBar";
import { Button } from "../../src/components/ui/Button";

interface TreatmentService {
  id: string;
  name: string;
  category: "Clinical Consultation" | "Diagnostic Modality" | "Therapeutic Procedure" | "Long-Term Management";
  summary: string;
  indications: string[];
  preparation: string;
  procedureOrApproach: string[];
  clinicalOutcomes: string;
}

const TREATMENTS_AND_DIAGNOSTICS: TreatmentService[] = [
  {
    id: "comprehensive-respiratory-consultation",
    name: "Comprehensive Respiratory Consultation",
    category: "Clinical Consultation",
    summary: "An in-depth, systematic specialist clinical evaluation for patients experiencing persistent cough, unexplained breathlessness, wheezing, or abnormal chest imaging findings.",
    indications: [
      "Unresolved cough lasting longer than 3–4 weeks",
      "Progressive breathlessness on mild exertion or resting dyspnea",
      "Recurrent chest infections, bronchitis, or unexplained chest heaviness",
      "Abnormal findings on chest X-ray or high-resolution CT (HRCT)",
    ],
    preparation: "Bring past chest imaging films/reports, previous spirometry results, all current prescription medications (including inhalers), and a written timeline of symptom onset.",
    procedureOrApproach: [
      "Detailed occupational, environmental, allergy, and smoking exposure history",
      "Comprehensive chest examination, chest auscultation, and resting/exertional oxygen saturation assessment",
      "Review of prior imaging, blood biomarkers, and microbiological sputum reports",
      "Formulation of an individualized diagnostic pathway and immediate symptom-relief strategy",
    ],
    clinicalOutcomes: "Clear diagnostic clarity, prevention of unnecessary medication overuse, and an evidence-based roadmap tailored to your specific pulmonary physiology.",
  },
  {
    id: "spirometry-pft",
    name: "Spirometry with Bronchodilator Reversibility",
    category: "Diagnostic Modality",
    summary: "The fundamental gold standard pulmonary function test that quantitatively measures lung volume capacities and the velocity of air moving through bronchial airways.",
    indications: [
      "Diagnosing obstructive airway diseases such as Asthma and COPD",
      "Distinguishing reversible airway restriction from fixed airflow obstruction",
      "Evaluating unexplained breathlessness or persistent wheezing",
      "Monitoring therapeutic response to bronchodilators and anti-inflammatory inhalers",
    ],
    preparation: "Wear comfortable, loose clothing. Your physician will advise whether to withhold short-acting bronchodilator inhalers (typically 4–6 hours) or long-acting inhalers (typically 12–24 hours) before testing. Avoid heavy meals within 2 hours.",
    procedureOrApproach: [
      "Patient sits upright with a noseclip applied to ensure all airflow passes through the calibrated sensor mouthpiece",
      "Deep maximal inhalation followed by a rapid, forceful exhalation sustained for at least 6 seconds",
      "Administration of an inhaled bronchodilator (e.g., salbutamol) with a 15-minute wait period",
      "Repeat maneuver to measure percentage improvement in FEV1 (Forced Expiratory Volume in 1 second) and FVC",
    ],
    clinicalOutcomes: "Definitive quantification of airway caliber, helping confirm or rule out asthma, assess COPD severity stages, and calibrate prescription dosages accurately.",
  },
  {
    id: "diffusing-capacity-dlco",
    name: "Diffusing Capacity of the Lungs (DLCO)",
    category: "Diagnostic Modality",
    summary: "A non-invasive, advanced functional test measuring how efficiently oxygen diffuses across the delicate alveolar-capillary membrane directly into pulmonary blood circulation.",
    indications: [
      "Evaluation and progression monitoring of Interstitial Lung Diseases (ILD / Pulmonary Fibrosis)",
      "Assessing alveolar damage and emphysema extent in advanced COPD",
      "Investigating pulmonary vascular diseases (e.g., Pulmonary Arterial Hypertension)",
      "Unexplained breathlessness where spirometry appears near-normal",
    ],
    preparation: "Refrain from smoking on the day of the test (carbon monoxide binds hemoglobin and skews results). Avoid heavy physical exertion right before testing. Recent hemoglobin level helps optimize calculation.",
    procedureOrApproach: [
      "The patient breathes normally on a mouthpiece, then empties lungs completely",
      "Inhales a single breath containing a safe tracer gas mixture with microscopic trace carbon monoxide and an inert tracer (helium/methane)",
      "Holds breath comfortably for approximately 10 seconds",
      "Exhales smoothly while the sensor analyzes gas uptake across the alveolar walls",
    ],
    clinicalOutcomes: "Precise evaluation of gas-exchange integrity, critical for titrating antifibrotic therapies, immunosuppressive regimens, or oxygen therapy requirements.",
  },
  {
    id: "feno-testing",
    name: "Fractional Exhaled Nitric Oxide (FeNO)",
    category: "Diagnostic Modality",
    summary: "A rapid, non-invasive breath biomarker test that measures the fraction of nitric oxide molecules exhaled, reflecting underlying type-2 eosinophilic airway inflammation.",
    indications: [
      "Objective confirmation of allergic or eosinophilic asthma",
      "Predicting responsiveness to inhaled corticosteroids (ICS) and biologic therapies",
      "Detecting asymptomatic airway inflammation before severe flare-ups develop",
      "Monitoring compliance and proper dosage calibration during long-term asthma treatment",
    ],
    preparation: "Avoid nitrates-rich foods (e.g., beetroot, spinach), caffeine, and smoking for 1–2 hours prior to testing. FeNO is performed before spirometry so forced maneuvers do not alter airway nitric oxide levels.",
    procedureOrApproach: [
      "Patient empties lungs, places lips securely around a single-use bacterial filter mouthpiece",
      "Inhales deeply to total lung capacity through the device",
      "Exhales steadily for 6–10 seconds at a constant, computer-guided flow rate",
      "Instant computerized readout generated in parts per billion (ppb)",
    ],
    clinicalOutcomes: "Objective biological validation of airway inflammation, allowing precise personalized adjustment of anti-inflammatory therapies without guesswork.",
  },
  {
    id: "flexible-bronchoscopy",
    name: "Diagnostic Flexible Bronchoscopy",
    category: "Therapeutic Procedure",
    summary: "A specialized endoscopic procedure enabling direct visualization of the vocal cords, trachea, and branching bronchial network, combined with cellular and microbiological sampling.",
    indications: [
      "Unexplained hemoptysis (coughing up blood or blood-tinged sputum)",
      "Persistent lung collapse (atelectasis) or unresolving focal pneumonia",
      "Suspicious pulmonary nodules, masses, or enlarged mediastinal lymph nodes",
      "Bronchoalveolar Lavage (BAL) for microbiological identification in opportunistic or atypical infections",
    ],
    preparation: "Strict fasting (nil by mouth) for 6–8 hours prior. Review of bleeding parameters, coagulation profile, and platelet count. Adjustments to antiplatelet or blood-thinner medications under specialist guidance.",
    procedureOrApproach: [
      "Performed in a specialized hospital endoscopy suite under local topical airway anesthesia and conscious sedation for patient comfort",
      "A thin, flexible video bronchoscope is gently passed through the nose or mouth into the tracheobronchial tree",
      "Systematic photographic inspection of all bronchial segments for mucosal lesions or obstruction",
      "Targeted collection of washings, brushings, or endobronchial biopsies as clinically indicated",
      "Monitored post-procedure recovery until the gag reflex completely returns",
    ],
    clinicalOutcomes: "Definitive histological and microbiological diagnoses for complex lung lesions, infectious etiologies, and endobronchial pathologies.",
  },
  {
    id: "asthma-management-program",
    name: "Personalized Asthma Control & Biologic Assessment",
    category: "Long-Term Management",
    summary: "A structured, ongoing disease management protocol combining patient education, trigger mitigation, precise inhaler selection, and advanced biologic evaluation for severe phenotypes.",
    indications: [
      "Frequent daytime or nighttime asthma symptoms disrupting sleep or daily activity",
      "Over-reliance on short-acting rescue inhalers (more than 2 canisters annually)",
      "History of repeated emergency visits or oral corticosteroid courses",
      "Severe persistent asthma with elevated IgE or blood eosinophil counts",
    ],
    preparation: "Keep a 2-week diary recording nighttime awakenings, exercise limitations, and rescue inhaler usage counts.",
    procedureOrApproach: [
      "Objective phenotyping via spirometry reversibility, FeNO, absolute eosinophil count, and total IgE",
      "Personalized inhaler device matching (Dry Powder Inhaler vs. Metered Dose Inhaler with spacer) based on inspiratory effort",
      "Formulation of a written, color-coded Asthma Action Plan for self-management during early flare-ups",
      "Screening for targeted monoclonal antibody therapies (Anti-IgE, Anti-IL5, Anti-IL4R) for severe biologic-eligible asthma",
    ],
    clinicalOutcomes: "Prevention of severe exacerbations, sustained freedom from daily symptoms, preservation of long-term lung function, and significant reduction in systemic steroid exposure.",
  },
  {
    id: "copd-rehabilitation-management",
    name: "COPD Staging, Maintenance & Exacerbation Prevention",
    category: "Long-Term Management",
    summary: "Evidence-based, multidisciplinary care incorporating GOLD guideline staging, dual bronchodilator optimization, smoking cessation support, and pulmonary rehabilitation.",
    indications: [
      "Clinically confirmed chronic obstructive pulmonary disease",
      "Chronic productive morning cough with progressive breathlessness",
      "History of acute infective exacerbations requiring antibiotics or hospital stays",
      "Persistent exercise limitation affecting quality of life and independence",
    ],
    preparation: "Bring all previous hospital discharge summaries, arterial blood gas records (if performed), and home oxygen prescription details if currently using supplemental oxygen.",
    procedureOrApproach: [
      "Spirometric GOLD staging (GOLD 1 to 4) coupled with symptom impact scoring (CAT / mMRC)",
      "Prescription optimization featuring long-acting dual bronchodilators (LAMA/LABA combinations)",
      "Inhalation technique mastery and prescription of suitable spacer or breath-actuated devices",
      "Guidance on pulmonary rehabilitation exercises, breathing retraining (pursed-lip breathing), and annual vaccination protocols (Influenza, Pneumococcal)",
    ],
    clinicalOutcomes: "Decreased frequency of hospitalizations, stabilized exercise tolerance, reduced daily breathing fatigue, and prolonged active life independence.",
  },
  {
    id: "sleep-apnea-evaluation",
    name: "Sleep Disordered Breathing & CPAP Therapy Review",
    category: "Diagnostic Modality",
    summary: "Comprehensive assessment for obstructive sleep apnea (OSA) through clinical sleep scores, diagnostic polysomnography coordination, and continuous positive airway pressure (CPAP) optimization.",
    indications: [
      "Loud, irregular snoring accompanied by choking or gasping sounds during sleep",
      "Excessive daytime somnolence, morning headaches, and cognitive fatigue",
      "Resistant hypertension requiring multiple antihypertensive medications",
      "Observed pauses in breathing witnessed by family members or partners",
    ],
    preparation: "Complete the standardized Epworth Sleepiness Scale (ESS) questionnaire. Avoid sedatives or alcohol on the evening prior to diagnostic sleep testing.",
    procedureOrApproach: [
      "Upper airway anatomic evaluation (Mallampati classification, tonsillar hypertrophy, retrognathia)",
      "Coordination of level 1 or level 3 Polysomnography (Overnight Sleep Study) to assess Apnea-Hypopnea Index (AHI)",
      "Detailed review of overnight oxygen desaturations and respiratory disturbance events",
      "Structured CPAP/BiPAP titration, mask fitting, humidification adjustment, and adherence tracking",
    ],
    clinicalOutcomes: "Restored restorative sleep architecture, mitigation of cardiovascular risks (stroke, arrhythmias, hypertension), and elimination of debilitating daytime drowsiness.",
  },
  {
    id: "pleural-aspiration-thoracentesis",
    name: "Diagnostic & Therapeutic Thoracentesis",
    category: "Therapeutic Procedure",
    summary: "A bedside ultrasound-assisted procedure to safely sample or evacuate fluid accumulating within the pleural space surrounding the lungs.",
    indications: [
      "Unexplained pleural effusion identified on chest radiograph or thoracic ultrasound",
      "Pleuritic chest pain associated with fluid collection",
      "Significant breathlessness resulting from lung compression by massive pleural fluid",
      "Differentiating transudative from exudative effusions (infectious, tubercular, malignant)",
    ],
    preparation: "Ultrasound localization immediately prior to needle insertion. Review of coagulation and platelet counts. Written informed consent.",
    procedureOrApproach: [
      "Patient sits leaning forward supported comfortably over a bedside table",
      "High-resolution bedside ultrasound confirms fluid pocket depth and marks the safest puncture site",
      "Local anesthetic infiltration to numb the skin, subcutaneous tissue, and sensitive parietal pleura",
      "Fine needle aspiration for laboratory fluid analysis (cytology, biochemistry, ADA, Gram stain, GeneXpert MTB)",
      "Controlled evacuation of larger fluid volumes using a closed drainage system when therapeutic relief is required",
    ],
    clinicalOutcomes: "Rapid alleviation of acute breathlessness and precise microbiological/cytological determination of the underlying pleural pathology.",
  },
  {
    id: "interstitial-lung-disease-monitoring",
    name: "Interstitial Lung Disease (ILD) Assessment & Antifibrotic Care",
    category: "Long-Term Management",
    summary: "Specialist multidisciplinary evaluation and continuous therapeutic monitoring for idiopathic pulmonary fibrosis (IPF) and connective tissue disease-associated ILD.",
    indications: [
      "Velcro-like fine inspiratory crackles heard on lung auscultation",
      "Dry, hacking chronic cough with exertional desaturation on exertion",
      "High-resolution CT (HRCT) displaying ground-glass opacities, reticulations, or honeycombing",
      "Known autoimmune/rheumatologic disease (rheumatoid arthritis, scleroderma, Sjögren's) with new pulmonary symptoms",
    ],
    preparation: "Collate high-resolution CT digital DICOM files/films, autoimmune serology panels (ANA, ENA, myositis profile), and previous serial PFT records.",
    procedureOrApproach: [
      "Systematic HRCT pattern interpretation (UIP, NSIP, organizing pneumonia, hypersensitivity pneumonitis)",
      "Serial physiological monitoring using paired FVC and DLCO measurements",
      "Six-minute walk test (6MWT) with continuous oximetry to evaluate exertional oxygen requirements",
      "Evaluation and management of targeted antifibrotic therapies (Nintedanib, Pirfenidone) or specialized immunomodulatory drugs with regular safety laboratory monitoring",
    ],
    clinicalOutcomes: "Preservation of lung parenchyma, deceleration of fibrotic progression, proactive management of medication side effects, and enhanced quality of life.",
  },
];

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-[#F7FAFD] text-[#163447] flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#EBF3F8] to-[#F7FAFD] pt-12 pb-14 border-b border-[#D8E6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C] uppercase tracking-wider mb-4 border border-[#2D9C9C]/20">
              Specialized Respiratory Procedures & Care
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163447] tracking-tight mb-4">
              Diagnostic & Therapeutic Respiratory Services
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Clear, evidence-based pulmonary evaluations led by <strong className="text-[#163447]">Dr. Y. Murali</strong> at <strong className="text-[#163447]">Srikara Hospital, Madeenaguda, Hyderabad</strong>. From gold-standard spirometry to advanced bronchoscopy and personalized disease management.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/book-appointment">
                <Button className="bg-[#2D9C9C] hover:bg-[#238080] text-white px-6 py-3 rounded-lg font-medium shadow-sm transition-colors">
                  Schedule a Consultation
                </Button>
              </Link>
              <Link href="/conditions">
                <Button variant="outline" className="border-[#2D9C9C] text-[#2D9C9C] hover:bg-[#2D9C9C]/10 px-6 py-3 rounded-lg font-medium transition-colors">
                  View Respiratory Conditions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Practice Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl border border-[#E1EAF0] shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] flex items-center justify-center font-bold text-lg mb-4">
              01
            </div>
            <h3 className="text-lg font-bold text-[#163447] mb-2">Physiological Precision</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Diagnostic testing using standardized European Respiratory Society (ERS) and American Thoracic Society (ATS) criteria to guide every clinical intervention.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E1EAF0] shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] flex items-center justify-center font-bold text-lg mb-4">
              02
            </div>
            <h3 className="text-lg font-bold text-[#163447] mb-2">Patient-Centered Communication</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every diagnostic graph, lung volume measurement, and treatment step is explained clearly so you understand the logic behind each prescribed medicine or inhaler.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E1EAF0] shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#2D9C9C]/10 text-[#2D9C9C] flex items-center justify-center font-bold text-lg mb-4">
              03
            </div>
            <h3 className="text-lg font-bold text-[#163447] mb-2">Hospital Continuity of Care</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Seamless access to Srikara Hospital&apos;s advanced diagnostic radiology, intensive respiratory care facilities, and laboratory infrastructure under one roof.
            </p>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#163447] mb-3">
            Available Clinical & Diagnostic Services
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Detailed information on what to expect, how to prepare, and how results inform ongoing clinical management.
          </p>
        </div>

        {/* Treatment Services Grid */}
        <div className="space-y-8">
          {TREATMENTS_AND_DIAGNOSTICS.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="bg-white rounded-2xl border border-[#D8E6F0] p-6 sm:p-8 shadow-sm hover:border-[#2D9C9C]/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-semibold bg-[#2D9C9C]/10 text-[#2D9C9C] mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#163447]">
                    {item.name}
                  </h3>
                </div>
                <Link href={`/book-appointment?service=${encodeURIComponent(item.name)}`}>
                  <Button variant="outline" className="border-[#2D9C9C] text-[#2D9C9C] hover:bg-[#2D9C9C] hover:text-white text-xs sm:text-sm font-semibold whitespace-nowrap">
                    Inquire About This Service
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                {item.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-100">
                {/* Indications */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2D9C9C]"></span>
                    Clinical Indications
                  </h4>
                  <ul className="space-y-2">
                    {item.indications.map((ind, i) => (
                      <li key={i} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-[#2D9C9C] font-bold mt-0.5">•</span>
                        <span>{ind}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Procedure & Approach */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#2D9C9C]"></span>
                    Procedure & Clinical Approach
                  </h4>
                  <ul className="space-y-2">
                    {item.procedureOrApproach.map((proc, p) => (
                      <li key={p} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-[#2D9C9C] font-bold mt-0.5">•</span>
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Preparation & Outcomes */}
              <div className="mt-6 p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/70 space-y-3">
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-[#163447]">Preparation Guidance: </strong>
                  {item.preparation}
                </div>
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-[#163447]">Clinical Outcome: </strong>
                  {item.clinicalOutcomes}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Responsible Medical Note */}
        <div className="mt-16 bg-[#FFF8F0] border border-[#FFD8B3] rounded-xl p-6">
          <h4 className="text-base font-bold text-[#A64A00] mb-2 flex items-center gap-2">
            <span>ℹ️</span> Medical Information & Procedural Guidance
          </h4>
          <p className="text-xs sm:text-sm text-[#7A3600] leading-relaxed">
            The diagnostic and therapeutic descriptions provided above are strictly educational and summarize standardized clinical protocols. The selection of specific pulmonary function tests, bronchoscopy, or prescription therapies requires individual evaluation by Dr. Y. Murali based on medical history, physical exam, and existing comorbidities. If you are experiencing acute respiratory distress, sudden severe chest pain, or marked oxygen desaturation, please visit the emergency department at Srikara Hospital immediately.
          </p>
        </div>

        {/* CTA Card */}
        <div className="mt-12 bg-gradient-to-r from-[#163447] to-[#1C4259] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Ready to Discuss Your Respiratory Health?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Consult with Dr. Y. Murali at Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad for thorough diagnostic evaluation and personalized respiratory management.
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
                Hospital Location
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
