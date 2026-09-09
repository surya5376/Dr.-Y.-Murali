import React from "react";
import Link from "next/link";
import Navbar from "../../src/components/ui/Navbar";
import Footer from "../../src/components/ui/Footer";
import MobileBottomBar from "../../src/components/ui/MobileBottomBar";
import { Button } from "../../src/components/ui/Button";

interface ConditionData {
  id: string;
  name: string;
  category: string;
  summary: string;
  symptoms: string[];
  factors: string[];
  evaluation: string[];
  management: string[];
  urgentSigns: string[];
}

const CONDITIONS_LIST: ConditionData[] = [
  {
    id: "asthma",
    name: "Asthma & Airway Reactivity",
    category: "Chronic Airway Disorder",
    summary: "Asthma is a chronic condition characterized by recurrent inflammation, swelling, and narrowing of the bronchial airways, leading to variable airflow limitation.",
    symptoms: [
      "Wheezing (a whistling or rattling sound during exhalation)",
      "Chest tightness or a feeling of constriction",
      "Shortness of breath, especially during exertion or at night",
      "Chronic cough that worsens with cold air, exercise, or viral colds",
    ],
    factors: [
      "Genetic predisposition and family history of atopy",
      "Inhaled allergens (pollen, dust mites, pet dander, mold)",
      "Airway irritants (tobacco smoke, vehicle exhaust, workplace fumes)",
      "Respiratory viral infections and sudden temperature shifts",
    ],
    evaluation: [
      "Detailed clinical history and symptom frequency assessment",
      "Spirometry with bronchodilator reversibility testing",
      "Fractional exhaled nitric oxide (FeNO) to assess eosinophilic inflammation",
      "Phenotype characterization for severe or uncontrolled presentations",
    ],
    management: [
      "Inhaled corticosteroids (ICS) for baseline mucosal inflammation control",
      "Long-acting beta-agonists (LABA) in combined controller inhalers",
      "Inhaler technique review and written asthma action plan",
      "Evaluation for targeted biologic therapies in severe allergic/eosinophilic asthma",
    ],
    urgentSigns: [
      "Severe breathlessness unable to speak in full sentences",
      "Rescue inhaler provides no noticeable relief",
      "Chest retractions or blue-tinged lips/fingers (requires emergency medical care)",
    ],
  },
  {
    id: "copd",
    name: "Chronic Obstructive Pulmonary Disease (COPD)",
    category: "Chronic Airflow Limitation",
    summary: "COPD is a progressive respiratory condition encompassing chronic bronchitis and emphysema, resulting in persistent airflow restriction and breathing fatigue.",
    symptoms: [
      "Progressive breathlessness, initially noticeable only during exertion",
      "Chronic productive cough with recurring mucus/phlegm production",
      "Frequent chest infections and prolonged recovery periods",
      "Fatigue, reduced stamina, and unintentional weight loss in advanced stages",
    ],
    factors: [
      "Long-term tobacco smoking or significant secondhand smoke exposure",
      "Occupational exposure to industrial dusts, chemicals, and biomass fuels",
      "Indoor air pollution from unvented cooking stoves or ambient particulate matter",
      "Genetic factors such as Alpha-1 Antitrypsin deficiency (AATD)",
    ],
    evaluation: [
      "Post-bronchodilator spirometry (confirming fixed airflow obstruction: FEV1/FVC < 0.70)",
      "Diffusing capacity (DLCO) to assess alveolar destruction in emphysema",
      "High-resolution chest CT (HRCT) to evaluate lung architecture and bullae",
      "Six-minute walk test and pulse oximetry assessment",
    ],
    management: [
      "Smoking cessation support and risk factor mitigation",
      "Dual long-acting bronchodilator therapy (LAMA + LABA)",
      "Pulmonary rehabilitation to improve physical stamina and breathing efficiency",
      "Annual vaccinations against influenza and pneumococcal pneumonia",
    ],
    urgentSigns: [
      "Sudden increase in breathlessness accompanied by fever and discolored sputum",
      "Confusion, profound lethargy, or inability to perform basic self-care",
    ],
  },
  {
    id: "cough",
    name: "Chronic & Persistent Cough",
    category: "Symptom Investigation",
    summary: "A cough lasting longer than 8 weeks in adults is considered chronic. Rather than a single illness, it is a symptom that warrants systematic diagnostic exploration.",
    symptoms: [
      "Daily or near-daily coughing, either dry and hacking or producing mucus",
      "Frequent throat clearing, tickle in the throat, or sensation of phlegm draining",
      "Cough triggered by laughing, talking, cold air, or lying flat",
      "Occasional chest muscle soreness or exhaustion from frequent coughing bouts",
    ],
    factors: [
      "Upper airway cough syndrome (post-nasal drip from allergic or non-allergic rhinitis)",
      "Cough-variant asthma with isolated coughing without obvious wheezing",
      "Gastroesophageal reflux disease (GERD) or non-acid airway reflux",
      "Medication side effects (such as ACE inhibitors used for hypertension)",
      "Post-viral bronchial hyperresponsiveness following respiratory infections",
    ],
    evaluation: [
      "Stepwise clinical history of timeline, medication use, and triggers",
      "Spirometry to rule out bronchial reversibility or airway reactivity",
      "Targeted chest radiography to evaluate pulmonary parenchyma",
      "Empirical sequential management protocols targeting primary suspects",
    ],
    management: [
      "Tailored treatment based on identified underlying etiology",
      "Inhaled controller medications for cough-variant airway reactivity",
      "Antihistamines or nasal steroids for allergic upper airway drainage",
      "Dietary and lifestyle adjustments for reflux-associated cough",
    ],
    urgentSigns: [
      "Coughing up blood (hemoptysis) of any amount",
      "Unintended weight loss, persistent fever, night sweats, or new hoarseness",
    ],
  },
  {
    id: "ild",
    name: "Interstitial Lung Disease (ILD) & Pulmonary Fibrosis",
    category: "Parenchymal Lung Disorder",
    summary: "ILD refers to a large group of conditions causing progressive inflammation and scarring (fibrosis) of the interstitium &mdash; the delicate tissue surrounding the lung air sacs.",
    symptoms: [
      "Gradual onset of dry, persistent cough",
      "Progressive shortness of breath during exertion that slowly worsens over months",
      "Chest discomfort or vague tightness",
      "Clubbing (widening and rounding of the fingertips in certain forms)",
    ],
    factors: [
      "Connective tissue and autoimmune diseases (rheumatoid arthritis, scleroderma, lupus)",
      "Occupational and environmental exposures (silica dust, asbestos, bird proteins, molds)",
      "Certain medications or prior thoracic radiation therapy",
      "Idiopathic pulmonary fibrosis (IPF), where scarring occurs without an identifiable external trigger",
    ],
    evaluation: [
      "High-resolution computed tomography (HRCT) of the chest with inspiratory/expiratory views",
      "Full pulmonary function tests including lung volumes (TLC) and gas diffusion (DLCO)",
      "Serological autoimmune antibody screening panel",
      "Multidisciplinary clinical assessment (pulmonology, radiology, rheumatology)",
    ],
    management: [
      "Antifibrotic medications (such as pirfenidone or nintedanib) for progressive fibrosing ILDs",
      "Immunosuppressive regimens for autoimmune and inflammatory presentations",
      "Ambulatory supplemental oxygen therapy when exertional desaturation is observed",
      "Comprehensive pulmonary rehabilitation and early lung transplant referral if indicated",
    ],
    urgentSigns: [
      "Rapid decline in breathing capacity over days or weeks (acute exacerbation of ILD)",
      "Severe resting hypoxemia or sudden chest pain",
    ],
  },
  {
    id: "sleep",
    name: "Sleep-Related Breathing Disorders & Sleep Apnea",
    category: "Sleep Medicine",
    summary: "Obstructive sleep apnea (OSA) is characterized by repetitive collapse of the upper pharyngeal airway during sleep, causing transient breathing pauses and intermittent oxygen drops.",
    symptoms: [
      "Loud, chronic snoring interrupted by silent pauses or choking/gasping sounds",
      "Excessive daytime sleepiness and morning fatigue despite adequate hours in bed",
      "Waking up with dry mouth, sore throat, or morning headaches",
      "Difficulty concentrating, irritability, and nocturnal awakenings to urinate",
    ],
    factors: [
      "Anatomical narrowing of the upper airway or retrognathia",
      "Excess body weight and increased neck circumference",
      "Use of alcohol or sedative medications prior to bedtime",
      "Underlying hypertension or cardiovascular disease",
    ],
    evaluation: [
      "Clinical sleep assessment using validated questionnaires (e.g., Epworth Sleepiness Scale)",
      "Overnight pulse oximetry for preliminary nocturnal desaturation screening",
      "Comprehensive diagnostic polysomnography (overnight sleep study)",
    ],
    management: [
      "Continuous Positive Airway Pressure (CPAP) therapy to maintain pneumatic airway patency",
      "Weight management and positional sleep conditioning",
      "Oral mandibular advancement appliances in selected mild-to-moderate presentations",
      "Cardiovascular risk monitoring and lifestyle counseling",
    ],
    urgentSigns: [
      "Falling asleep unexpectedly while driving or operating equipment",
      "Severe nocturnal cardiac arrhythmias or unmanageable refractory hypertension",
    ],
  },
  {
    id: "pneumonia",
    name: "Pneumonia & Lower Respiratory Infections",
    category: "Infectious Respiratory Disease",
    summary: "Pneumonia is an acute infection that inflames the microscopic air sacs (alveoli) in one or both lungs, which may fill with fluid or purulent material.",
    symptoms: [
      "Cough producing green, yellow, or rust-colored phlegm",
      "Fever, sweating, and shaking chills",
      "Sharp chest pain that worsens when breathing in deeply or coughing (pleuritic pain)",
      "Shortness of breath and rapid, shallow breathing",
    ],
    factors: [
      "Bacterial pathogens (such as Streptococcus pneumoniae)",
      "Respiratory viral agents (influenza, respiratory syncytial virus, SARS-CoV-2)",
      "Aspiration of oral secretions or gastric contents",
      "Weakened immune defenses, older age, or pre-existing chronic lung disease",
    ],
    evaluation: [
      "Chest radiography (X-ray) to identify pulmonary consolidations or infiltrates",
      "Pulse oximetry and vital signs assessment",
      "Complete blood counts (CBC) and inflammatory markers",
      "Sputum examination and microbial testing when clinically indicated",
    ],
    management: [
      "Targeted antimicrobial or antiviral therapy based on clinical severity and pathogen",
      "Hydration, fever management, and adequate rest",
      "Supplemental oxygen support in hospitalized presentations with hypoxemia",
      "Post-recovery chest radiography follow-up to document radiographic clearance",
    ],
    urgentSigns: [
      "High fever accompanied by confusion or severe lethargy",
      "Persistent oxygen saturation drops below 92%",
      "Rapid breathing and severe pleuritic chest pain requiring urgent medical evaluation",
    ],
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis (TB) Respiratory Evaluation",
    category: "Infectious Mycobacterial Disease",
    summary: "Tuberculosis is an infectious bacterial disease caused by Mycobacterium tuberculosis, primarily affecting the lungs and requiring structured medical diagnosis and supervised treatment.",
    symptoms: [
      "Persistent cough lasting longer than two to three weeks",
      "Coughing up blood or blood-streaked sputum (hemoptysis)",
      "Low-grade evening fever, night sweats, and unprovoked chills",
      "Unexplained weight loss, poor appetite, and general malaise",
    ],
    factors: [
      "Exposure to active pulmonary tuberculosis in household or community environments",
      "Impaired immune system or presence of chronic systemic conditions like diabetes",
      "Malnutrition, crowded living conditions, or history of untreated latent infection",
    ],
    evaluation: [
      "Chest radiography (identifying apical infiltrates, cavitations, or pleural effusion)",
      "Sputum smear examination for acid-fast bacilli (AFB) and molecular tests (NAAT / GeneXpert)",
      "Mycobacterial culture and drug sensitivity profiling",
      "Tuberculin skin testing (TST) or Interferon-Gamma Release Assays (IGRA)",
    ],
    management: [
      "Standardized multi-drug anti-tubercular therapy (ATT) taken under medical guidance",
      "Nutritional support and close monitoring of liver and renal parameters",
      "Infection control education and household contact evaluation",
      "Adherence counseling to ensure complete course completion and prevent drug resistance",
    ],
    urgentSigns: [
      "Significant coughing of blood (massive hemoptysis)",
      "High fever with severe breathlessness or profound physical exhaustion",
    ],
  },
  {
    id: "bronchiectasis",
    name: "Bronchiectasis",
    category: "Airway Structural Condition",
    summary: "Bronchiectasis is a long-term condition where the bronchial tubes become abnormally widened and thickened, impairing natural mucus clearance and leading to recurrent infections.",
    symptoms: [
      "Daily production of large volumes of thick, discolored sputum",
      "Frequent, recurrent chest infections requiring antibiotic treatment",
      "Shortness of breath and audible chest wheezing or crackles",
      "Occasional blood in sputum (hemoptysis) and persistent fatigue",
    ],
    factors: [
      "Prior severe childhood or adult lung infections (severe pneumonia, tuberculosis)",
      "Impaired immune defense or antibody deficiencies",
      "Underlying chronic conditions such as cystic fibrosis or primary ciliary dyskinesia",
      "Severe chronic aspiration or allergic bronchopulmonary aspergillosis (ABPA)",
    ],
    evaluation: [
      "High-resolution chest CT (HRCT) &mdash; the definitive gold standard for airway dilation",
      "Sputum microbiology cultures to detect chronic colonization (e.g., Pseudomonas)",
      "Pulmonary function testing to monitor airflow dynamics and volume preservation",
      "Immune profiling and screening for underlying systemic causes",
    ],
    management: [
      "Airway clearance techniques (chest physiotherapy, positive expiratory pressure devices)",
      "Prompt targeted treatment of acute infective exacerbations based on sputum cultures",
      "Inhaled hypertonic saline or mucolytics to assist secretion expectoration",
      "Long-term macrolide therapy in frequent exacerbators, managed by a pulmonologist",
    ],
    urgentSigns: [
      "Substantial hemoptysis (coughing up fresh blood)",
      "Sudden worsening of dyspnea with high fever and respiratory exhaustion",
    ],
  },
  {
    id: "breathlessness",
    name: "Unexplained Breathlessness (Dyspnea Workup)",
    category: "Symptom Investigation",
    summary: "Shortness of breath is a sensation of breathing discomfort that can originate from airways, alveolar tissue, pulmonary circulation, or chest wall mechanics.",
    symptoms: [
      "Difficulty catching your breath during routine physical activities",
      "Sensation of air hunger or inability to take a satisfying deep breath",
      "Breathlessness upon lying flat (orthopnea) or sudden waking at night",
      "Unexplained fatigue and decline in exercise tolerance",
    ],
    factors: [
      "Underlying undiagnosed asthma, early COPD, or interstitial lung disease",
      "Pulmonary vascular conditions such as pulmonary hypertension",
      "Anemia, deconditioning, or thyroid imbalance contributing to respiratory sensation",
      "Vocal cord dysfunction or post-COVID ventilatory pattern alterations",
    ],
    evaluation: [
      "Comprehensive clinical review of medical timeline and exertional limitations",
      "Complete pulmonary function testing (spirometry, lung volumes, DLCO)",
      "Chest radiography and high-resolution computed tomography (HRCT) as indicated",
      "Six-minute walk test to monitor exertional oxygen desaturation",
    ],
    management: [
      "Targeted therapy directed at the identified physiological etiology",
      "Inhaler therapy if reversible bronchoconstriction is identified",
      "Structured exercise guidance and breathing retraining techniques",
      "Coordination with cardiology or internal medicine when multi-system factors exist",
    ],
    urgentSigns: [
      "Sudden, acute onset of breathlessness accompanied by chest pain or fainting",
      "Bluish discoloration around lips or fingers (cyanosis) &mdash; requires immediate emergency care",
    ],
  },
  {
    id: "chronic-bronchitis",
    name: "Chronic Bronchitis",
    category: "Chronic Airway Disorder",
    summary: "Chronic bronchitis is defined clinically as a daily cough with sputum production for at least three consecutive months in two successive years, driven by bronchial mucosal irritation.",
    symptoms: [
      "Daily cough productive of clear, white, or yellow mucus",
      "Frequent chest discomfort, wheezing, and throat clearing",
      "Breathlessness during exertion that gradually becomes more noticeable",
      "Recurrent viral or bacterial respiratory flare-ups during winter months",
    ],
    factors: [
      "Active or former cigarette, bidi, or pipe smoking",
      "Chronic exposure to second-hand smoke or biomass cooking smoke",
      "Occupational dust, chemical fumes, and industrial air pollution",
      "Recurrent childhood respiratory infections",
    ],
    evaluation: [
      "Spirometry to differentiate isolated chronic bronchitis from airflow-limited COPD",
      "Chest radiography to exclude bronchiectasis, pneumonia, or cardiac congestion",
      "Pulse oximetry assessment both at rest and during exertion",
    ],
    management: [
      "Elimination of environmental and occupational irritants (strict smoking cessation)",
      "Bronchodilator inhalers when bronchial reactivity or airflow limitation is present",
      "Preventive vaccination against influenza and pneumococcal bacteria",
      "Airway hydration and effective coughing techniques",
    ],
    urgentSigns: [
      "Rapidly increasing breathlessness, confusion, or severe chest pain",
      "Coughing up fresh blood or acute inability to catch breath",
    ],
  },
];

export const metadata = {
  title: "Respiratory Conditions Directory | Dr. Y. Murali Pulmonologist",
  description: "Comprehensive educational guides on asthma, COPD, chronic cough, ILD, sleep apnea, and respiratory conditions evaluated at Srikara Hospital, Madeenaguda.",
};

export default function ConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#14232D]">
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-[#FAFDFE] to-[#F5F7FA] py-10 sm:py-14 border-b border-[#E2E8F0]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-[#5A6E7C] mb-3">
                <Link href="/" className="hover:text-[#2D9C9C]">Home</Link>
                <span>/</span>
                <span className="text-[#163447]">Respiratory Conditions</span>
              </nav>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#2D9C9C]/30 bg-[#E0F2F1] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#163447] mb-3">
                <span className="h-2 w-2 rounded-full bg-[#2D9C9C]" />
                Educational Conditions Directory
              </div>

              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#163447] tracking-tight">
                Respiratory Conditions &amp; Symptoms
              </h1>

              <p className="mt-3 text-sm sm:text-base text-[#5A6E7C] leading-relaxed">
                Clear, patient-friendly educational overviews of common respiratory diseases evaluated and managed by pulmonologists. If you are experiencing persistent breathing symptoms, consulting a specialist provides definitive clarity.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[#163447]">
                <span className="font-semibold">Practice Location:</span>
                <span className="rounded-md bg-white px-2.5 py-1 border border-[#E2E8F0]">Srikara Hospital, Madeenaguda, Hyderabad</span>
                <span className="text-[#5A6E7C]">&bull; Consultations with Dr. Y. Murali</span>
              </div>
            </div>
          </div>
        </section>

        {/* Conditions Navigation Quick Links */}
        <section className="bg-white py-4 border-b border-[#E2E8F0] sticky top-[61px] z-30 shadow-2xs">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none no-scrollbar">
              <span className="text-xs font-bold text-[#5A6E7C] shrink-0 mr-1">Quick Jump:</span>
              {CONDITIONS_LIST.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="shrink-0 rounded-full bg-[#F5F7FA] hover:bg-[#E0F2F1] hover:text-[#163447] border border-[#E2E8F0] px-3 py-1 text-xs font-medium text-[#5A6E7C] transition-colors"
                >
                  {c.name.split("&")[0].split("(")[0].trim()}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Conditions Content */}
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
            {CONDITIONS_LIST.map((condition, idx) => (
              <article
                key={condition.id}
                id={condition.id}
                className="scroll-mt-28 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#E2E8F0] pb-5 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#2D9C9C]">
                      {condition.category} &bull; Guide {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#163447] mt-1">
                      {condition.name}
                    </h2>
                  </div>
                  <Button variant="primary" size="md" asChild className="shrink-0 rounded-lg bg-[#FF6B35] hover:bg-[#e85924] text-white font-semibold">
                    <Link href="/book-appointment">Book Consultation</Link>
                  </Button>
                </div>

                {/* Summary */}
                <div className="rounded-xl bg-[#F7FAFD] p-4 border-l-3 border-[#2D9C9C] mb-6">
                  <p className="text-sm sm:text-base text-[#163447] font-medium leading-relaxed">
                    {condition.summary}
                  </p>
                </div>

                {/* Multi-Column Clinical Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 text-sm">
                  {/* Common Symptoms */}
                  <div className="space-y-2.5">
                    <h3 className="font-heading text-base font-bold text-[#163447] flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0F2F1] text-[#2D9C9C] text-xs">✓</span>
                      Common Symptoms
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#5A6E7C] pl-2">
                      {condition.symptoms.map((s, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#2D9C9C] font-bold mt-0.5">&bull;</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Possible Contributing Factors */}
                  <div className="space-y-2.5">
                    <h3 className="font-heading text-base font-bold text-[#163447] flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0F2F1] text-[#2D9C9C] text-xs">!</span>
                      Possible Contributing Factors
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#5A6E7C] pl-2">
                      {condition.factors.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#2D9C9C] font-bold mt-0.5">&bull;</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* How Doctors Evaluate It */}
                  <div className="space-y-2.5">
                    <h3 className="font-heading text-base font-bold text-[#163447] flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0F2F1] text-[#2D9C9C] text-xs">⚕</span>
                      How Pulmonologists Evaluate It
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#5A6E7C] pl-2">
                      {condition.evaluation.map((e, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#2D9C9C] font-bold mt-0.5">&bull;</span>
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Common Management Approaches */}
                  <div className="space-y-2.5">
                    <h3 className="font-heading text-base font-bold text-[#163447] flex items-center gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E0F2F1] text-[#2D9C9C] text-xs">★</span>
                      Common Management Approaches
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#5A6E7C] pl-2">
                      {condition.management.map((m, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#2D9C9C] font-bold mt-0.5">&bull;</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* When to Seek Medical Attention Notice */}
                <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4 text-xs text-rose-900 mb-6">
                  <h4 className="font-bold text-rose-950 mb-1 flex items-center gap-1.5">
                    <span>⚠</span> When to Seek Immediate Medical Attention:
                  </h4>
                  <ul className="space-y-1 pl-4 list-disc text-rose-800">
                    {condition.urgentSigns.map((sign, i) => (
                      <li key={i}>{sign}</li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action Links */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-[#E2E8F0] text-xs">
                  <div className="flex items-center gap-4 text-[#5A6E7C]">
                    <Link href="/treatments" className="text-[#2D9C9C] font-semibold hover:underline">
                      Related Diagnostic Testing &rarr;
                    </Link>
                    <Link href="/doctors/dr-y-murali" className="text-[#2D9C9C] font-semibold hover:underline">
                      About Dr. Y. Murali &rarr;
                    </Link>
                  </div>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B35] hover:text-[#e85924]"
                  >
                    <span>Schedule an Evaluation for this Condition</span>
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Closing Educational Disclaimer & Booking CTA */}
        <section className="bg-[#163447] py-12 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold">
              Need a Specialist Opinion on Your Respiratory Symptoms?
            </h2>
            <p className="mt-2 text-sm text-white/80 max-w-xl mx-auto">
              Consult with Dr. Y. Murali at Srikara Hospital, Mythri Nagar, Madeenaguda, Hyderabad for thorough diagnostic assessment and individualized care.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Button variant="primary" size="lg" asChild className="rounded-xl bg-[#FF6B35] hover:bg-[#e85924] text-white font-semibold px-8 py-3.5 shadow-md">
                <Link href="/book-appointment">Book a Consultation</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild className="rounded-xl border border-white/30 bg-transparent text-white hover:bg-white/10 px-8 py-3.5">
                <Link href="/contact">Hospital Location &amp; Directions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileBottomBar />
    </div>
  );
}
