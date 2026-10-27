import React, { useState } from 'react';
import { ArrowLeft, Mail, MapPin, Building, LifeBuoy, Send, CheckCircle2 } from 'lucide-react';

interface ContactUsPageProps {
  onBack: () => void;
  onOpenPartnerModal?: () => void;
}

export default function ContactUsPage({ onBack, onOpenPartnerModal }: ContactUsPageProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState<'business' | 'support' | 'general'>('business');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }
    if (!consent) {
      setErrorMessage("Please agree to GOQii's Privacy Policy to submit your message.");
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setMessage('');
    setConsent(false);
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <div
      className="w-full bg-[#f8fafc] text-slate-900 selection:bg-[#f05a28]/20 min-h-screen pt-4 sm:pt-6"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Breadcrumb Navigation ── */}
      <div className="bg-white border-y border-slate-100/90 shadow-2xs mb-8 sm:mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
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
              Contact GOQii
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-4 shadow-2xs">
            <Mail className="w-3.5 h-3.5" />
            GET IN TOUCH
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Let&apos;s talk about better health.
          </h1>

          <div className="w-10 h-1 bg-[#f05a28] rounded-full mx-auto my-3.5" />

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Whether you&apos;re exploring a partnership, looking for support, or want to learn more about GOQii, we&apos;d love to hear from you.
          </p>
        </div>

        {/* ── 3 Core Contact Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Business Inquiries */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#f05a28] border border-orange-100 flex items-center justify-center mb-5">
                <Building className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Business Inquiries
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                For employers, health plans, insurance partners, healthcare providers, and enterprise collaborations.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f05a28] shrink-0" />
                <a href="mailto:usbeta@goqii.com" className="hover:text-[#f05a28] transition-colors break-all">
                  usbeta@goqii.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={onOpenPartnerModal ? onOpenPartnerModal : () => { window.location.href = 'mailto:usbeta@goqii.com?subject=Partnership%20Inquiry%20-%20GOQii'; }}
                className="w-full py-3 px-5 rounded-full bg-[#f05a28] hover:bg-[#d94e1f] text-white font-bold text-sm transition-all shadow-sm hover:shadow text-center cursor-pointer"
              >
                Partner with GOQii
              </button>
            </div>
          </div>

          {/* Card 2: Customer Support */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-5">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Customer Support
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                For existing members, device setup, app sync questions, subscription assistance, and coaching queries.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs font-semibold text-slate-800 mb-6 flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                <a href="mailto:support@goqii.com" className="hover:text-blue-600 transition-colors break-all">
                  support@goqii.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <a
                href="mailto:support@goqii.com?subject=GOQii%20Member%20Support%20Request"
                className="w-full py-3 px-5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-sm hover:shadow text-center cursor-pointer block"
              >
                Contact Support
              </a>
            </div>
          </div>

          {/* Card 3: US Location */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                US Location
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Serving US enterprise and population health clients nationwide.
              </p>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 text-xs font-medium text-slate-800 space-y-1 mb-6">
                <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Menlo Park, California</span>
                </div>
                <div className="text-slate-500">United States</div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs text-slate-500 block text-center">
                Operating across US Eastern &amp; Pacific time zones
              </span>
            </div>
          </div>

        </div>

        {/* ── Dedicated Message Form Section ── */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs max-w-3xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
              Send a Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Fill out the form below and our team will get back to you promptly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-fadeIn">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 mb-1">Thank You!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Your message has been received. A GOQii representative will respond to your inquiry shortly.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-emerald-800 bg-white border border-emerald-300 hover:bg-emerald-100/50 transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-medium">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#f05a28] focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. sarah@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#f05a28] focus:ring-2 focus:ring-orange-100 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Inquiry Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setInquiryType('business')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      inquiryType === 'business'
                        ? 'bg-orange-50 border-[#f05a28] text-[#f05a28]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Business / Partnership
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('support')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      inquiryType === 'support'
                        ? 'bg-orange-50 border-[#f05a28] text-[#f05a28]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    Customer Support
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('general')}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      inquiryType === 'general'
                        ? 'bg-orange-50 border-[#f05a28] text-[#f05a28]'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    General Inquiries
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your organization, inquiry, or question..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#f05a28] focus:ring-2 focus:ring-orange-100 transition-all"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none bg-orange-50/40 p-3 rounded-xl border border-orange-100">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 w-4 h-4 rounded text-[#f05a28] focus:ring-orange-400 cursor-pointer accent-[#f05a28]"
                  />
                  <span className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    I agree to GOQii&apos;s{' '}
                    <a
                      href="https://goqii.com/us-en/privacypolicy"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[#f05a28] font-semibold underline hover:text-[#d94e1f]"
                    >
                      Privacy Policy
                    </a>{' '}
                    and consent to the processing of my information for the purpose of responding to my inquiry.{' '}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">
                  <span className="text-red-500">*</span> Required fields
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting || !consent}
                  className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: '#f05a28' }}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
