import React, { useState, useMemo } from 'react';
import { ArrowLeft, Search, ChevronDown, HelpCircle, Mail, Building, ShieldCheck, Sparkles } from 'lucide-react';

interface FaqPageProps {
  onBack: () => void;
  onNavigateToContact?: () => void;
  onOpenPartnerModal?: () => void;
}

type FaqCategory = 'All' | 'General' | 'Enterprise' | 'Data & Privacy' | 'Partnerships';

interface FaqItem {
  id: string;
  category: 'General' | 'Enterprise' | 'Data & Privacy' | 'Partnerships';
  question: string;
  answer: string[];
}

const FAQ_ITEMS: FaqItem[] = [
  // ── GENERAL ──
  {
    id: 'what-is-goqii',
    category: 'General',
    question: 'What is GOQii?',
    answer: [
      'GOQii is a smart preventive healthcare and dynamic motivation platform. By unifying continuous biometric tracking, personalized human coaching, behavioral science, and the proprietary ALIVE O.S. intelligence engine, GOQii helps individuals transition from reactive sick-care to sustained, daily preventive wellness.',
      'Our mission is to empower millions of people to make permanent, positive lifestyle improvements across nutrition, physical activity, sleep hygiene, and stress management.',
    ],
  },
  {
    id: 'how-does-goqii-work',
    category: 'General',
    question: 'How does GOQii work?',
    answer: [
      'GOQii connects three vital components: tracking telemetry, intelligent synthesis, and human coaching.',
      '1. Continuous Data Integration: Members sync daily habits, wearable vitals (steps, active minutes, heart rate, sleep), nutrition logs, and health assessments.',
      '2. ALIVE O.S. Intelligence Engine: Our continuous health engine analyzes multimodal data streams to identify lifestyle trends, detect early risks, and generate personalized daily recommendations.',
      '3. Certified Health Coaching: Human coaches and wellness experts guide members with real-time feedback, behavioral nudges, and goal accountability.',
    ],
  },
  {
    id: 'who-is-goqii-designed-for',
    category: 'General',
    question: 'Who is GOQii designed for?',
    answer: [
      'GOQii is built for both individuals and organizations:',
      '• Individuals: Anyone seeking a holistic, coach-guided approach to sustainable wellness, weight management, fitness, stress reduction, and chronic disease risk prevention.',
      '• Employers & Corporate Teams: Companies seeking to improve workforce well-being, boost productivity, reduce absenteeism, and lower healthcare claims costs.',
      '• Health Plans & Insurers: Payers aiming to drive proactive member engagement, reduce hospital readmissions, and reward positive lifestyle behaviors.',
      '• Health Systems & Providers: Care teams extending continuous patient engagement and lifestyle adherence between clinical visits.',
    ],
  },

  // ── ENTERPRISE ──
  {
    id: 'how-does-goqii-support-organizations',
    category: 'Enterprise',
    question: 'How does GOQii support organizations?',
    answer: [
      'Through GOQii HealthEngage, we deliver end-to-end population health and corporate engagement solutions tailored to organizational needs:',
      '• Tailored Wellness Programs: Customizable health challenges, coach-moderated wellness sessions, and company-wide habit milestones.',
      '• Aggregated Analytics & Reporting: Secure, anonymized population health dashboards that give HR and leadership visibility into workforce engagement, health risks, and progress metrics.',
      '• Measurable Outcomes: Documented improvements in metabolic health markers, employee stamina, retention, and overall workforce morale.',
      '• Enterprise Integration: Seamless deployment, dedicated account management, and single sign-on (SSO) options for enterprise teams.',
    ],
  },
  {
    id: 'how-does-goqii-engage-employees',
    category: 'Enterprise',
    question: 'How does GOQii engage employees?',
    answer: [
      'Unlike static wellness apps that experience steep drop-offs after 30 days, GOQii drives industry-leading long-term retention through Dynamic Motivation:',
      '• 1-on-1 Certified Coaching: Employees receive personal guidance from real health coaches who check in, review logs, and celebrate milestones.',
      '• Gamification & Karma Points: Healthy actions earn Karma points that can be converted into charitable donations or milestone rewards, creating intrinsic and altruistic motivation.',
      '• Team & Inter-Company Challenges: Fun, collaborative step challenges, virtual walking leagues, and hydration competitions foster team camaraderie.',
      '• Habit-First Methodology: Micro-habits that fit seamlessly into busy work schedules without causing burnout.',
    ],
  },

  // ── DATA & PRIVACY ──
  {
    id: 'how-does-goqii-protect-health-data',
    category: 'Data & Privacy',
    question: 'How does GOQii protect health data?',
    answer: [
      'We take the security, privacy, and responsible stewardship of health data seriously. GOQii implements defense-in-depth security across all systems:',
      '• Strong Cryptographic Encryption: Industry-standard encryption protocols protect all sensitive data in transit (TLS 1.3) and at rest (AES-256).',
      '• Role-Based Access Controls (RBAC): Strict administrative and operational safeguards ensure only authorized personnel have necessary system access.',
      '• Infrastructure Hardening: Continuous monitoring, automated vulnerability scanning, and periodic security evaluations.',
      '• Strict Governance Policies: Comprehensive data retention, disaster recovery, and access audit logging procedures.',
    ],
  },
  {
    id: 'what-data-does-goqii-collect',
    category: 'Data & Privacy',
    question: 'What data does GOQii collect?',
    answer: [
      'GOQii collects only the data necessary to deliver personalized health coaching and intelligent recommendations:',
      '• Account Profile Information: Name, email address, age, gender, and general preferences.',
      '• Lifestyle & Activity Telemetry: Steps, activity duration, sleep stages, water intake, and nutritional meal logs.',
      '• Connected Device Biometrics: Wearable metrics such as heart rate or blood oxygen (SpO2) synced via the GOQii app or compatible devices.',
      '• Member Self-Reported Assessments: Voluntary health risk assessment responses and lifestyle goals shared with coaches.',
      'Members retain transparency and control over what data they choose to share within their account settings.',
    ],
  },
  {
    id: 'how-is-health-data-used',
    category: 'Data & Privacy',
    question: 'How is health data used?',
    answer: [
      'Health data is utilized strictly to provide and enhance member wellness services:',
      '• Providing Personalized Coaching: Enabling your coach to offer timely, contextual lifestyle advice and feedback.',
      '• Powering ALIVE O.S. Insights: Computing personalized wellness trends, habit streaks, and preventive risk flags.',
      '• Aggregated & De-identified Reporting: For enterprise clients, only anonymized, aggregate-level participation metrics are shared (individual employee health data is never shared with employers).',
      '• Zero Unauthorized Monetization: GOQii never sells personal health data to data brokers or third parties.',
      'For more details, please review our official Privacy Policy.',
    ],
  },

  // ── PARTNERSHIPS ──
  {
    id: 'how-can-i-request-a-demo',
    category: 'Partnerships',
    question: 'How can I request a demo?',
    answer: [
      'You can request an enterprise demo in two convenient ways:',
      '1. Click the "Partner with us" button anywhere on our website to open the interactive partnership inquiry form.',
      '2. Email our partnerships team directly at usbeta@goqii.com with details about your organization and target population size.',
      'A GOQii solutions representative will reach out within one business day to schedule a customized platform demonstration.',
    ],
  },
  {
    id: 'how-can-i-contact-goqii',
    category: 'Partnerships',
    question: 'How can I contact GOQii?',
    answer: [
      'We welcome inquiries through our dedicated channels:',
      '• Business & Partnerships: usbeta@goqii.com',
      '• Customer & Member Support: support@goqii.com',
      '• US Location: Menlo Park, California, United States',
      '• Dedicated Contact Page: Visit our Contact page to send a direct message to our support and partnership teams.',
    ],
  },
];

const CATEGORIES: FaqCategory[] = ['All', 'General', 'Enterprise', 'Data & Privacy', 'Partnerships'];

export default function FaqPage({ onBack, onNavigateToContact, onOpenPartnerModal }: FaqPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(['what-is-goqii', 'how-does-goqii-work']);

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredItems = useMemo(() => {
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.some((line) => line.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  return (
    <div
      className="w-full bg-[#f8fafc] text-slate-900 selection:bg-[#f05a28]/20 min-h-screen pt-4 sm:pt-6"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Breadcrumb Navigation ── */}
      <div className="bg-white border-y border-slate-100/90 shadow-2xs mb-8 sm:mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-600 hover:text-[#f05a28] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-slate-500 group-hover:text-[#f05a28]" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            <span className="text-[12px] font-semibold text-slate-500">
              GOQii FAQs
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5" />
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Answers about GOQii.
          </h1>

          <div className="w-10 h-1 bg-[#f05a28] rounded-full mx-auto my-3.5" />

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Everything you need to know about our preventive healthcare platform, enterprise programs, and data privacy.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions or keywords (e.g. data, demo, employee, coaches)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#f05a28] focus:ring-2 focus:ring-orange-100 transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#f05a28] text-white shadow-sm'
                    : 'bg-white border border-slate-200/80 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-16">
          {filteredItems.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/80">
              <HelpCircle className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-800 mb-1">No matching questions found</h3>
              <p className="text-xs text-slate-500 mb-4">Try searching with another keyword or select All categories.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="px-5 py-2 rounded-full text-xs font-semibold text-[#f05a28] bg-orange-50 hover:bg-orange-100 transition-colors cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredItems.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#f05a28]">
                        {item.category}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {item.question}
                      </h3>
                    </div>
                    <div className="mt-1 w-7 h-7 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#f05a28]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/80 space-y-2.5 animate-fadeIn">
                      {item.answer.map((paragraph, pIdx) => (
                        <p key={pIdx} className="font-normal text-slate-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* ── Bottom Inquiries Banner ── */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-lg text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-[#f05a28]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
            Still have a question?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Our team is always here to assist with enterprise demos, member support, or technical inquiries.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenPartnerModal ? onOpenPartnerModal : onNavigateToContact}
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#f05a28] hover:bg-[#d94e1f] transition-all shadow-md cursor-pointer"
            >
              Partner with GOQii
            </button>
            <a
              href="mailto:support@goqii.com"
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white border border-white/30 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Contact Support (support@goqii.com)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
