import React from 'react';
import { ArrowLeft, ExternalLink, Shield } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export default function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <div
      className="w-full bg-[#f8fafc] text-slate-900 selection:bg-[#f05a28]/20 min-h-screen pt-4 sm:pt-6"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="bg-white border-y border-slate-100/90 shadow-2xs mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
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
              GOQii Legal
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 text-center">
        <div className="w-16 h-16 rounded-3xl bg-orange-50 text-[#f05a28] border border-orange-100 flex items-center justify-center mx-auto mb-6 shadow-xs">
          <Shield className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
          GOQii Privacy Policy
        </h1>
        <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
          The official GOQii Privacy Policy is hosted at our primary legal repository. Please review the complete terms and data handling practices at the official link below.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://goqii.com/us-en/privacypolicy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#f05a28] hover:bg-[#d94e1f] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Open Official Privacy Policy</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <button
            onClick={onBack}
            className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
}
