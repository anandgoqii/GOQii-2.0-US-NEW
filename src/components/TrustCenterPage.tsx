import React from 'react';
import { Shield, Lock, FileCheck2, Cpu, ArrowLeft, ArrowUpRight, Mail } from 'lucide-react';

interface TrustCenterPageProps {
  onBack: () => void;
  onNavigateToPrivacy?: () => void;
  onNavigateToTerms?: () => void;
  onNavigateToContact?: () => void;
}

export default function TrustCenterPage({
  onBack,
  onNavigateToContact,
}: TrustCenterPageProps) {
  return (
    <div
      className="w-full bg-[#f8fafc] text-slate-900 selection:bg-[#f05a28]/20 min-h-screen pt-4 sm:pt-6"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Sub-header / Breadcrumb Bar ── */}
      <div className="bg-white border-y border-slate-100/90 shadow-2xs mb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-600 hover:text-[#f05a28] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-slate-500 group-hover:text-[#f05a28]" />
            <span>Back to Home</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
            <span className="text-[12px] font-semibold text-slate-500">
              GOQii Trust Center
            </span>
          </div>
        </div>
      </div>

      {/* ── Main Content Container ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Shield className="w-3.5 h-3.5" />
            TRUST &amp; TRANSPARENCY
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Built with trust at the core.
          </h1>

          <div className="w-10 h-1 bg-[#f05a28] rounded-full mx-auto my-3.5" />

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We take the security, privacy and responsible use of health data seriously.
          </p>
        </div>

        {/* ── 4 Main Visual / Content Blocks ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          
          {/* Block 1: Privacy */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#f05a28] border border-orange-100 flex items-center justify-center mb-5">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Privacy
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-5">
                We believe health data belongs to the individual. Our platform is built around explicit consent, transparent data collection, and member-controlled privacy choices.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28] mt-2 shrink-0" />
                  <span><strong>Member Consent First:</strong> Data is collected and processed only with clear, explicit user permission.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28] mt-2 shrink-0" />
                  <span><strong>Zero Unauthorized Sharing:</strong> We do not sell or monetize personal health data with unauthorized third parties.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28] mt-2 shrink-0" />
                  <span><strong>Data Access &amp; Portability:</strong> Members retain the right to review, export, or request deletion of their personal records.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <a
                href="https://goqii.com/us-en/privacypolicy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f05a28] hover:text-[#d94e1f] transition-colors"
              >
                <span>Read our official Privacy Policy</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Block 2: Security */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-5">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Security
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-5">
                We safeguard health telemetry, account profiles, and communications using modern cloud architecture and rigorous defensive controls.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span><strong>Encryption in Transit &amp; at Rest:</strong> Industry-standard cryptographic protocols protect all data transmissions and stored records.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span><strong>Role-Based Access Control:</strong> Strict least-privilege principles govern internal system permissions and coach interactions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span><strong>Continuous Threat Monitoring:</strong> Ongoing infrastructure scanning, anomaly detection, and incident response readiness.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-medium text-slate-500">
                Regularly audited architecture and access control safeguards
              </span>
            </div>
          </div>

          {/* Block 3: Compliance */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Compliance
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-5">
                We operate with robust governance standards that align our operations with applicable digital health, consumer protection, and privacy laws.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Governance &amp; Auditing:</strong> Structured policies for data retention, access logging, and regular operational reviews.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Vendor Risk Management:</strong> Stringent vetting and contractual data protection requirements for all technology partners.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Workforce Training:</strong> Ongoing privacy and data-handling training for all employees, engineers, and coaching teams.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-medium text-slate-500">
                Rigorous operational governance and accountability
              </span>
            </div>
          </div>

          {/* Block 4: Responsible Health Technology */}
          <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-5">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Responsible Health Technology
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-5">
                Our intelligence layer and behavioral systems are designed to empower human care, with rigorous clinical guardrails and ethical standards.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 mb-6">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <span><strong>Human-in-the-Loop Coaching:</strong> AI provides insights and suggestions to certified coaches; it does not replace qualified healthcare providers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <span><strong>Evidence-Based Wellness:</strong> Preventive recommendations are rooted in established behavioral science and lifestyle medicine.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <span><strong>Algorithmic Fairness:</strong> Continuous testing and refinement to minimize bias and ensure transparent health insights.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-medium text-slate-500">
                Preventive guidance designed to assist, not diagnose or prescribe
              </span>
            </div>
          </div>

        </div>

        {/* ── Certifications & Compliance Area ── */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-700 text-xs font-bold tracking-widest uppercase mb-4">
              <FileCheck2 className="w-3.5 h-3.5" />
              STANDARDS &amp; ASSURANCE
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4">
              Certifications &amp; Compliance
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
              GOQii builds and maintains its digital health infrastructure to satisfy the high expectations of enterprise employers, health plans, and institutional partners. Our systems are developed in alignment with rigorous information security best practices, and our policies are continuously evaluated against US and international health-data governance frameworks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-1">Enterprise Security Reviews</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We support enterprise vendor risk assessments, third-party questionnaires, and technical security evaluations for client deployments.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-1">Data Segregation &amp; Controls</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Enterprise populations benefit from strict administrative boundaries, anonymized reporting options, and controlled data scopes.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-1">Ongoing Monitoring &amp; Audits</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Infrastructure configurations, access records, and policy controls are regularly audited to maintain consistent operational integrity.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-1">Regulatory Alignment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Continual review of evolving consumer health data regulations and state privacy statutes across our active operational regions.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-orange-50/50 border border-orange-100 text-xs text-slate-700 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span>
                Need specific security documentation or an enterprise compliance packet for your organization?
              </span>
              <a
                href="mailto:usbeta@goqii.com?subject=Enterprise%20Security%20and%20Compliance%20Inquiry"
                className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f05a28] text-white font-semibold text-xs hover:bg-[#d94e1f] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact Security Team</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom Inquiries Card ── */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-10 shadow-lg text-center flex flex-col items-center">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
            Have questions about our trust and data practices?
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
            Our team is available to assist enterprise partners and members with privacy questions, vendor security assessments, or data requests.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:usbeta@goqii.com"
              className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-sm"
            >
              Email usbeta@goqii.com
            </a>
            {onNavigateToContact && (
              <button
                onClick={onNavigateToContact}
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white border border-white/30 hover:bg-white/10 transition-colors cursor-pointer"
              >
                Go to Contact Us
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
