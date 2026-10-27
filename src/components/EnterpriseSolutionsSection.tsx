import { useState } from 'react'
import {
  Building2,
  HeartHandshake,
  Stethoscope,
  FlaskConical,
  Landmark,
  ShieldCheck,
  Lock,
  Key,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Activity,
  UserCheck,
  BarChart2,
  FileText
} from 'lucide-react'

interface EnterpriseSolutionsSectionProps {
  onOpenPartnerModal: () => void
  onNavigateToTrust: () => void
}

export default function EnterpriseSolutionsSection({
  onOpenPartnerModal,
  onNavigateToTrust,
}: EnterpriseSolutionsSectionProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'crypto' | 'rbac' | 'review'>('privacy')

  const partnerCards = [
    {
      title: 'Employers',
      badge: 'Workforce Wellness',
      desc: 'Improve employee vitality, reduce absenteeism, and lower healthcare costs.',
      metric: '3.2x Engagement',
      metricSub: 'vs traditional wellness portals',
      photo: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
      icon: Building2,
      iconBg: '#f05a28',
    },
    {
      title: 'Payers',
      badge: 'Risk Stratification',
      desc: 'Identify early lifestyle risks and provide proactive coaching to lower avoidable claims.',
      metric: '90-Day Retention',
      metricSub: 'Sustained habit adherence',
      photo: 'https://images.unsplash.com/photo-1686771416282-3888ddaf249b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
      icon: HeartHandshake,
      iconBg: '#6366f1',
    },
    {
      title: 'Providers',
      badge: 'Care Continuity',
      desc: 'Extend clinical touch beyond the clinic with remote vital tracking and lifestyle support.',
      metric: 'Care Continuity',
      metricSub: 'Post-encounter adherence',
      photo: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
      icon: Stethoscope,
      iconBg: '#2ecc71',
    },
    {
      title: 'Life Sciences',
      badge: 'Trial Adherence',
      desc: 'Capture longitudinal digital health telemetry and validate behavioral interventions in study cohorts.',
      metric: 'Real-World Data',
      metricSub: 'Continuous vital monitoring',
      photo: 'https://images.unsplash.com/photo-1486825586573-7131f7991bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
      icon: FlaskConical,
      iconBg: '#ec4899',
    },
    {
      title: 'Public Sector',
      badge: 'Population Scale',
      desc: 'Deploy scalable preventive programs to activate community health and wellness.',
      metric: 'Population Reach',
      metricSub: 'Equitable mobile wellness',
      photo: 'https://images.unsplash.com/photo-1594581979864-36977b15d0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
      icon: Landmark,
      iconBg: '#3b82f6',
    },
  ]

  const enterpriseSolutions = [
    {
      title: 'Self-Insured Employers',
      badge: 'Workforce Well-Being',
      desc: 'Empower employee populations with continuous habit coaching, metabolic tracking, and team wellness sprints.',
      iconBg: 'bg-orange-50 text-[#f05a28] border-orange-100',
      actionText: 'Explore Employer Plans',
      stats: 'Lower Claims · Higher Productivity',
      photo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Health Plans & Payers',
      badge: 'Risk Stratification',
      desc: 'Identify emerging risks and provide members with structured coaching to prevent disease progression.',
      iconBg: 'bg-blue-50 text-[#3b82f6] border-blue-100',
      actionText: 'Explore Payer Solutions',
      stats: 'Cohort Analytics · Scalable Outreach',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Healthcare Providers',
      badge: 'Care Continuity',
      desc: 'Extend care reach into daily routines with remote vital monitoring and coach-supported lifestyle guidance.',
      iconBg: 'bg-emerald-50 text-[#10b981] border-emerald-100',
      actionText: 'Explore Provider Tools',
      stats: 'Post-Discharge · Habit Compliance',
      photo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Life Sciences & Research',
      badge: 'Real-World Evidence',
      desc: 'Gather continuous digital health telemetry and measure protocol adherence across structured cohorts.',
      iconBg: 'bg-purple-50 text-purple-600 border-purple-100',
      actionText: 'Explore Research Partnerships',
      stats: 'Longitudinal Data · Strict Governance',
      photo: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80',
    },
  ]

  const securitySafeguards = [
    {
      id: 'privacy' as const,
      title: 'Health Data Privacy',
      badge: 'Consent-First Vault',
      headline: 'Strict Member-Controlled Data Ownership',
      desc: 'All biometric and telemetry ingestion requires explicit user authorization. Health data is never sold, leased, or shared with third-party advertisers.',
      icon: Key,
      color: '#10b981',
      highlights: [
        'Granular member opt-in for every device & sensor feed',
        'Right to data export and complete account deletion',
        'Isolated multi-tenant data storage architecture',
      ],
    },
    {
      id: 'crypto' as const,
      title: 'Modern Cryptography',
      badge: 'TLS 1.3 · AES-256',
      headline: 'End-to-End Cryptographic Encryption',
      desc: 'Continuous biometrics and longitudinal health records are protected using industry-standard cryptographic algorithms both in flight and at rest.',
      icon: Lock,
      color: '#3b82f6',
      highlights: [
        'AES-256 encryption at rest for all database volumes',
        'TLS 1.3 strict transport encryption for all telemetry APIs',
        'Automated key rotation and hardened cloud key management',
      ],
    },
    {
      id: 'rbac' as const,
      title: 'Access Governance',
      badge: 'RBAC & Audited',
      headline: 'Role-Based Access & Least Privilege',
      desc: 'Coaching teams and system administrators access data strictly on a need-to-know basis, governed by role-based access control and immutable audit logging.',
      icon: ShieldCheck,
      color: '#8b5cf6',
      highlights: [
        'Coaches only access assigned member cohort records',
        'Immutable, timestamped audit trails for all data reads',
        'Mandatory multi-factor authentication across all staff',
      ],
    },
    {
      id: 'review' as const,
      title: 'Enterprise Review',
      badge: 'Vendor Risk Ready',
      headline: 'Comprehensive Enterprise Security Dossier',
      desc: 'We support institutional compliance evaluations, security questionnaires, and third-party risk assessments under mutual non-disclosure agreements.',
      icon: FileCheck2,
      color: '#f59e0b',
      highlights: [
        'Standardized technical architecture & compliance dossiers',
        'Rapid completion of vendor risk management questionnaires',
        'Clear documentation of data retention and backup policies',
      ],
    },
  ]

  const activeSecurityData = securitySafeguards.find((s) => s.id === activeTab) || securitySafeguards[0]

  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 5: WE PARTNER ACROSS THE HEALTH ECOSYSTEM                 */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-gray-50 py-16 xl:py-24 border-t border-slate-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase block mb-2">
              ECOSYSTEM COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
              We Partner Across the{' '}
              <span className="text-[#f05a28]">Health Ecosystem</span>
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
              Empowering organizations with modular solutions designed for measurable engagement and sustained wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {partnerCards.map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-2xs border border-slate-200/80 flex flex-col justify-between group hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                >
                  <div>
                    {/* Photo Container with Visual Overlay Badge */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={card.photo}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent" />
                      
                      {/* Floating Icon badge */}
                      <div
                        className="absolute bottom-2.5 left-2.5 w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-md"
                        style={{ backgroundColor: card.iconBg }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Pill Badge */}
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-slate-800 shadow-2xs">
                        {card.badge}
                      </span>
                    </div>

                    <div className="p-4 flex flex-col gap-1">
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Visual Metric Tag */}
                  <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="font-bold text-slate-800">{card.metric}</span>
                    <span className="text-[10px] text-slate-400">{card.metricSub}</span>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 7: INSTITUTIONAL SOLUTIONS                                */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section id="enterprise-ecosystem" className="w-full bg-[#fbfcfd] py-16 sm:py-20 border-y border-slate-100 overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100/80 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-2">
              Institutional Frameworks
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
              Engineered for <span className="text-[#f05a28]">Enterprise Health</span>
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto leading-relaxed">
              Modular preventative health infrastructure that connects biometric monitoring, behavioral engagement, and certified coaching to support population health priorities.
            </p>
          </div>

          {/* 4 Solution Framework Cards with Visual Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-10">
            {enterpriseSolutions.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-lg hover:border-[#f05a28]/40 transition-all flex flex-col justify-between group"
              >
                <div className="flex flex-col flex-1">
                  {/* Photo Header */}
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.photo}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent pointer-events-none" />

                    {/* Floating Badge */}
                    <span className="absolute top-2.5 left-2.5 text-[9.5px] font-bold px-2 py-0.5 rounded-full border shadow-xs bg-white/95 text-slate-800">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1.5 leading-snug group-hover:text-[#f05a28] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal mb-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[10px] font-semibold text-slate-500 block mb-2.5">
                        {item.stats}
                      </span>
                      <button
                        onClick={onOpenPartnerModal}
                        className="text-xs font-bold text-[#f05a28] hover:text-[#d94e1f] transition-colors inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{item.actionText}</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* SECTION 7.5: BUILT FOR TRUST. DESIGNED FOR HEALTHCARE.            */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <section className="w-full bg-gradient-to-b from-white via-slate-50/60 to-white py-16 sm:py-20 border-b border-slate-100 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Security, Privacy &amp; Governance
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
              Built for Trust.<br />
              <span className="text-[#f05a28]">Designed for Healthcare.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-3 max-w-2xl mx-auto">
              GOQii is architected with privacy, security, and rigorous compliance at the core—protecting sensitive health telemetry while delivering continuous care experiences at scale.
            </p>
          </div>

          {/* Interactive Security Architecture Console */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-6 sm:p-8 max-w-6xl mx-auto mb-8">
            
            {/* Top 4 Selector Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 pb-6 border-b border-slate-100">
              {securitySafeguards.map((item) => {
                const Icon = item.icon
                const isSelected = activeTab === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-50 border-[#f05a28] ring-1 ring-orange-500/20 shadow-2xs'
                        : 'bg-white border-slate-200/80 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase">
                        {item.badge}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-900 leading-snug">
                      {item.title}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Active Security Architecture Detail Showcase */}
            <div className="py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  <ShieldCheck className="w-4 h-4 text-[#f05a28]" />
                  <span>Technical Safeguard Specification</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-2">
                  {activeSecurityData.headline}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  {activeSecurityData.desc}
                </p>

                {/* Checklist highlights */}
                <div className="space-y-2">
                  {activeSecurityData.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Mini Architecture Diagram Widget */}
              <div className="lg:col-span-5 bg-slate-50/90 rounded-2xl p-5 border border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Enterprise Assurance Protocol
                </span>

                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200/70 flex items-center justify-between">
                    <span className="font-semibold text-slate-700">HIPAA Safeguards</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                      Implemented
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-slate-200/70 flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Cryptographic Standard</span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      TLS 1.3 &amp; AES-256
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-slate-200/70 flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Access Governance</span>
                    <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                      RBAC &amp; Least Privilege
                    </span>
                  </div>

                  <div className="p-2.5 bg-white rounded-xl border border-slate-200/70 flex items-center justify-between">
                    <span className="font-semibold text-slate-700">Vendor Risk Review</span>
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100">
                      Under Mutual NDA
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Action Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">
                    Enterprise Compliance Documentation
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Need security questionnaires, architecture review dossiers, or vendor assessments?
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={onNavigateToTrust}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  View Trust Center
                </button>
                <a
                  href="mailto:usbeta@goqii.com?subject=Enterprise%20Security%20and%20Compliance%20Inquiry"
                  className="px-4 py-2 rounded-full text-xs font-bold text-white bg-[#f05a28] hover:bg-[#d94e1f] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Contact Security Team</span>
                  <span>→</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}
