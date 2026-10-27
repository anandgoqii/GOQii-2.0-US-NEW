import { ReactNode } from 'react'

interface TrustSecurityProps {
  onNavigateToPrivacy: () => void
  onNavigateToTerms: () => void
  onNavigateToTrust: () => void
  children?: ReactNode
}

export default function TrustSecuritySection({
  onNavigateToPrivacy,
  onNavigateToTerms,
  onNavigateToTrust,
  children,
}: TrustSecurityProps) {
  const trustPillars = [
    {
      title: 'Health Data Safeguards',
      desc: 'Industry-standard administrative, physical, and technical safeguards designed to protect sensitive health data.',
      badge: 'Protected Health Data',
    },
    {
      title: 'Information Security Standards',
      desc: 'Rigorous information security management practices governing policies, systems, and operational controls.',
      badge: 'Security Frameworks',
    },
    {
      title: 'Operational Governance',
      desc: 'Stringent internal controls ensuring system resilience, confidentiality, and operational accountability.',
      badge: 'Audited Controls',
    },
    {
      title: 'End-to-End Encryption',
      desc: 'All health vitals, biometrics, and messages encrypted in transit (TLS 1.3) and at rest (AES-256).',
      badge: 'AES-256 Bit',
    },
  ]

  return (
    <section
      id="trust-security"
      className="w-full bg-white py-16 sm:py-24 overflow-hidden relative border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase block mb-3">
            SECURITY &amp; PRIVACY
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            Your health deserves thoughtful care.
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-normal mt-3">
            Privacy, security and responsible health engagement.
          </p>
        </div>

        {/* Restrained 4-Pillar Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {trustPillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Partner & Enterprise Logos Slot */}
        {children && (
          <div className="max-w-6xl mx-auto mb-12 pt-4">
            {children}
          </div>
        )}

        {/* Policy Links Bar */}
        <div className="max-w-2xl mx-auto pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
          <button
            onClick={onNavigateToTrust}
            className="hover:text-[#f05a28] font-medium transition-colors cursor-pointer"
          >
            Trust Center →
          </button>
          <span className="text-slate-300">|</span>
          <button
            onClick={onNavigateToPrivacy}
            className="hover:text-[#f05a28] font-medium transition-colors cursor-pointer"
          >
            Privacy Policy →
          </button>
          <span className="text-slate-300">|</span>
          <button
            onClick={onNavigateToTerms}
            className="hover:text-[#f05a28] font-medium transition-colors cursor-pointer"
          >
            Terms of Service →
          </button>
        </div>
      </div>
    </section>
  )
}
