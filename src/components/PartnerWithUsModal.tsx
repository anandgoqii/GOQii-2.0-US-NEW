import React, { useState, useEffect } from 'react';

interface PartnerWithUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INDUSTRY_OPTIONS = [
  'Health Plan / Insurance',
  'Healthcare Provider',
  'Employer / Corporate',
  'Pharmaceutical / Life Sciences',
  'Technology',
  'Government / Public Health',
  'Research / Academia',
  'Other',
];

const PARTNERSHIP_INTERESTS = [
  { id: 'engagement', label: 'Health Engagement Programs', desc: 'Sustained daily habit & motivation tools' },
  { id: 'employee', label: 'Employee Health & Engagement', desc: 'Workplace wellbeing & team challenges' },
  { id: 'population', label: 'Public Health', desc: 'At-scale preventative risk reduction' },
  { id: 'chronic', label: 'Chronic Care Management', desc: 'Coached biomarker & chronic disease support' },
  { id: 'tech', label: 'Digital Health / Technology Integration', desc: 'SDK, API & connected device ecosystem' },
  { id: 'research', label: 'Research & Innovation', desc: 'Clinical validation, trials & studies' },
  { id: 'strategic', label: 'Strategic Partnership', desc: 'Distribution, co-marketing & ecosystem' },
  { id: 'other', label: 'Other', desc: 'Custom enterprise partnership model' },
];

const POPULATION_SIZE_OPTIONS = [
  'Under 1,000',
  '1,000–10,000',
  '10,000–100,000',
  '100,000+',
  'Not yet determined',
];

const SOURCE_OPTIONS = [
  'Industry Event / Conference',
  'Colleague / Referral',
  'News / Press',
  'Web Search',
  'Social Media',
  'Existing Partner',
  'Other',
];

const STEPS = [
  { step: 1, title: 'Your Details', label: 'Contact' },
  { step: 2, title: 'Your Organization', label: 'Company' },
  { step: 3, title: 'Partnership Scope', label: 'Objectives' },
  { step: 4, title: 'Review & Submit', label: 'Finalize' },
];

export default function PartnerWithUsModal({ isOpen, onClose }: PartnerWithUsModalProps) {
  // Current step (1 to 4)
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  // Form State
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');

  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [opportunityDetails, setOpportunityDetails] = useState('');

  const [populationSize, setPopulationSize] = useState('');
  const [referralSource, setReferralSource] = useState('');

  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleResetAndClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleInterest = (label: string) => {
    if (selectedInterests.includes(label)) {
      setSelectedInterests(selectedInterests.filter((i) => i !== label));
    } else {
      setSelectedInterests([...selectedInterests, label]);
    }
    if (errors.selectedInterests) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next.selectedInterests;
        return next;
      });
    }
  };

  // Step 1 Validation
  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail.trim())) {
      newErrors.workEmail = 'Please enter a valid work email';
    }
    if (!jobTitle.trim()) newErrors.jobTitle = 'Job title / role is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!companyName.trim()) newErrors.companyName = 'Company / organization name is required';
    if (!industry) newErrors.industry = 'Please select your industry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 3 Validation
  const validateStep3 = () => {
    const newErrors: Record<string, string> = {};
    if (selectedInterests.length === 0) {
      newErrors.selectedInterests = 'Please select at least one partnership interest';
    }
    if (!opportunityDetails.trim()) {
      newErrors.opportunityDetails = 'Please tell us about your goals or requirements';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 4 Validation
  const validateStep4 = () => {
    const newErrors: Record<string, string> = {};
    if (!consent) {
      newErrors.consent = "Please agree to GOQii's Privacy Policy to submit your inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!validateStep1()) return;
      setDirection('next');
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!validateStep2()) return;
      setDirection('next');
      setCurrentStep(3);
    } else if (currentStep === 3) {
      if (!validateStep3()) return;
      setDirection('next');
      setCurrentStep(4);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setDirection('prev');
      setCurrentStep((prev) => prev - 1);
      setErrors({});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) {
      setCurrentStep(1);
      return;
    }
    if (!validateStep2()) {
      setCurrentStep(2);
      return;
    }
    if (!validateStep3()) {
      setCurrentStep(3);
      return;
    }
    if (!validateStep4()) {
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFullName('');
    setWorkEmail('');
    setPhone('');
    setJobTitle('');
    setCompanyName('');
    setIndustry('');
    setCompanyWebsite('');
    setSelectedInterests([]);
    setOpportunityDetails('');
    setPopulationSize('');
    setReferralSource('');
    setConsent(false);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-[#0B192C]/75 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full my-auto shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        {/* Top Accent Stripe */}
        <div className="h-2 w-full bg-gradient-to-r from-[#f05a28] via-[#f59e0b] to-[#2ecc71]" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer z-20"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSubmitted ? (
          /* ── SUCCESS VIEW ── */
          <div className="p-8 sm:p-12 text-center flex flex-col items-center justify-center animate-fadeIn">
            <div className="w-20 h-20 rounded-full bg-orange-50 text-[#f05a28] flex items-center justify-center mb-6 shadow-sm border border-orange-100">
              <svg className="w-10 h-10 text-[#f05a28]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#f05a28] text-xs font-bold uppercase tracking-wider mb-3">
              INQUIRY RECEIVED
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B192C] tracking-tight mb-3">
              Thank You. Let&apos;s Connect.
            </h2>

            <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed mb-8">
              We&apos;ve received your partnership inquiry. A member of the GOQii team will review your information and get in touch with you shortly.
            </p>

            <button
              onClick={handleResetAndClose}
              className="px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer flex items-center gap-2"
              style={{ background: '#f05a28' }}
            >
              <span>Back to GOQii</span>
              <span>→</span>
            </button>
          </div>
        ) : (
          /* ── INTERACTIVE MULTI-STEP FORM ── */
          <div className="p-6 sm:p-8 flex flex-col max-h-[90vh]">
            
            {/* Header / Brand Eyebrow */}
            <div className="mb-5 pr-8">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#f05a28] text-[11px] font-bold uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28] animate-pulse" />
                PARTNER WITH GOQii
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#0B192C] tracking-tight leading-tight">
                Let&apos;s Build the Future of Health Together.
              </h2>
            </div>

            {/* Step Progress Tracker */}
            <div className="mb-6 bg-slate-50 rounded-2xl p-3 border border-slate-200/70">
              <div className="flex items-center justify-between mb-2 px-1">
                {STEPS.map((s) => {
                  const isActive = currentStep === s.step;
                  const isCompleted = currentStep > s.step;
                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => {
                        if (s.step < currentStep) {
                          setCurrentStep(s.step);
                        }
                      }}
                      className={`flex items-center gap-1.5 text-xs font-semibold transition-all ${
                        isCompleted
                          ? 'text-[#f05a28] cursor-pointer'
                          : isActive
                          ? 'text-[#0B192C]'
                          : 'text-slate-400 cursor-default'
                      }`}
                    >
                      <span
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold transition-all ${
                          isCompleted
                            ? 'bg-[#f05a28] text-white shadow-xs'
                            : isActive
                            ? 'bg-[#0B192C] text-white'
                            : 'bg-slate-200 text-slate-500'
                        }`}
                      >
                        {isCompleted ? '✓' : s.step}
                      </span>
                      <span className="hidden sm:inline text-[11px] uppercase tracking-wider">{s.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Progress Bar Line */}
              <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#f05a28] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%` }}
                />
              </div>
            </div>

            {/* Interactive Step Content Container */}
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
              <div className="overflow-y-auto max-h-[50vh] pr-1 pb-2">
                
                {/* ── STEP 1: YOUR DETAILS ── */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-slate-100 pb-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#f05a28]">Step 1 of 4</span>
                      <h3 className="text-lg font-semibold text-slate-900">Your Details</h3>
                      <p className="text-xs text-slate-500">Provide your contact info so our partnerships team can reach out.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          autoFocus
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors((p) => ({ ...p, fullName: '' }));
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleNext();
                            }
                          }}
                          placeholder="Enter your full name"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50/60 border text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.fullName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-[#f05a28] focus:ring-orange-100'
                          }`}
                        />
                        {errors.fullName && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.fullName}</p>}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={workEmail}
                          onChange={(e) => {
                            setWorkEmail(e.target.value);
                            if (errors.workEmail) setErrors((p) => ({ ...p, workEmail: '' }));
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleNext();
                            }
                          }}
                          placeholder="Enter your business email"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50/60 border text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.workEmail ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-[#f05a28] focus:ring-orange-100'
                          }`}
                        />
                        {errors.workEmail && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.workEmail}</p>}
                      </div>

                      {/* Job Title / Role */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Job Title / Role <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={jobTitle}
                          onChange={(e) => {
                            setJobTitle(e.target.value);
                            if (errors.jobTitle) setErrors((p) => ({ ...p, jobTitle: '' }));
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleNext();
                            }
                          }}
                          placeholder="Enter your role (e.g. VP of Innovation)"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50/60 border text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.jobTitle ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-[#f05a28] focus:ring-orange-100'
                          }`}
                        />
                        {errors.jobTitle && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.jobTitle}</p>}
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleNext();
                            }
                          }}
                          placeholder="Enter your phone number"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/60 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#f05a28] focus:ring-2 focus:ring-orange-100 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 2: YOUR ORGANIZATION ── */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-slate-100 pb-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#f05a28]">Step 2 of 4</span>
                      <h3 className="text-lg font-semibold text-slate-900">Your Organization</h3>
                      <p className="text-xs text-slate-500">Tell us about your organization and industry focus.</p>
                    </div>

                    <div className="space-y-4">
                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Company / Organization Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          autoFocus
                          value={companyName}
                          onChange={(e) => {
                            setCompanyName(e.target.value);
                            if (errors.companyName) setErrors((p) => ({ ...p, companyName: '' }));
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              e.preventDefault();
                              handleNext();
                            }
                          }}
                          placeholder="Enter company name"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50/60 border text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                            errors.companyName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-[#f05a28] focus:ring-orange-100'
                          }`}
                        />
                        {errors.companyName && <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.companyName}</p>}
                      </div>

                      {/* Industry Quick Select */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1.5">
                          Industry <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {INDUSTRY_OPTIONS.map((item) => {
                            const isSelected = industry === item;
                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => {
                                  setIndustry(item);
                                  if (errors.industry) setErrors((p) => ({ ...p, industry: '' }));
                                }}
                                className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer flex flex-col justify-between ${
                                  isSelected
                                    ? 'bg-orange-50 border-[#f05a28] text-slate-900 font-semibold shadow-xs'
                                    : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                                }`}
                              >
                                <span className="line-clamp-2">{item}</span>
                                {isSelected && <span className="text-[#f05a28] text-[10px] font-bold mt-1">✓ Selected</span>}
                              </button>
                            );
                          })}
                        </div>
                        {errors.industry && <p className="text-[11px] text-red-500 mt-1.5 font-medium">{errors.industry}</p>}
                      </div>

                      {/* Company Website */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Company Website <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="url"
                          value={companyWebsite}
                          onChange={(e) => setCompanyWebsite(e.target.value)}
                          placeholder="https://yourcompany.com"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/60 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#f05a28] focus:ring-2 focus:ring-orange-100 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ── STEP 3: PARTNERSHIP SCOPE ── */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-slate-100 pb-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#f05a28]">Step 3 of 4</span>
                      <h3 className="text-lg font-semibold text-slate-900">How Can We Work Together?</h3>
                      <p className="text-xs text-slate-500">Select all areas of partnership interest and outline your vision.</p>
                    </div>

                    {/* Checkbox Cards */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Partnership Interest <span className="text-red-500">*</span>
                        <span className="text-slate-400 font-normal ml-1.5">(Select all that apply)</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1.5">
                        {PARTNERSHIP_INTERESTS.map((item) => {
                          const isChecked = selectedInterests.includes(item.label);
                          return (
                            <div
                              key={item.id}
                              onClick={() => toggleInterest(item.label)}
                              className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                                isChecked
                                  ? 'bg-orange-50/80 border-[#f05a28] shadow-2xs font-semibold text-slate-900'
                                  : 'bg-slate-50/60 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => {}} // Handled by parent div click
                                className="mt-0.5 w-4 h-4 rounded text-[#f05a28] focus:ring-orange-400 cursor-pointer accent-[#f05a28]"
                              />
                              <div>
                                <div className="font-semibold text-slate-900">{item.label}</div>
                                <div className="text-[11px] text-slate-500 font-normal">{item.desc}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      {errors.selectedInterests && (
                        <p className="text-[11px] text-red-500 mt-1.5 font-medium">{errors.selectedInterests}</p>
                      )}
                    </div>

                    {/* Partnership Narrative Details */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-800 mb-1">
                        Tell us about your partnership opportunity <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        value={opportunityDetails}
                        onChange={(e) => {
                          setOpportunityDetails(e.target.value);
                          if (errors.opportunityDetails) setErrors((p) => ({ ...p, opportunityDetails: '' }));
                        }}
                        placeholder="Tell us about your goals, requirements, or how you see us working together"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50/60 border text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.opportunityDetails ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 focus:border-[#f05a28] focus:ring-orange-100'
                        }`}
                      />
                      {errors.opportunityDetails && (
                        <p className="text-[11px] text-red-500 mt-1 font-medium">{errors.opportunityDetails}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* ── STEP 4: REVIEW & SUBMIT ── */}
                {currentStep === 4 && (
                  <div className="space-y-4 animate-fadeIn">
                    <div className="border-b border-slate-100 pb-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#f05a28]">Step 4 of 4</span>
                      <h3 className="text-lg font-semibold text-slate-900">Audience Scope & Consent</h3>
                      <p className="text-xs text-slate-500">Add any final scope metrics and confirm your submission.</p>
                    </div>

                    {/* Quick Summary Pill Recap */}
                    <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200 text-xs text-slate-700 flex flex-col gap-1.5">
                      <div className="flex items-center justify-between font-semibold text-slate-900">
                        <span>{fullName || 'Your Name'} &bull; {jobTitle || 'Role'}</span>
                        <span className="text-[#f05a28]">{companyName || 'Company'}</span>
                      </div>
                      <div className="text-[11px] text-slate-500">
                        <span className="font-medium text-slate-600">Industry:</span> {industry || 'Not selected'} &bull; <span className="font-medium text-slate-600">Interests:</span> {selectedInterests.length} selected
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Population Size */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          Estimated Audience / Population Size
                        </label>
                        <select
                          value={populationSize}
                          onChange={(e) => setPopulationSize(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/60 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#f05a28] focus:ring-2 focus:ring-orange-100 transition-all"
                        >
                          <option value="">Select range</option>
                          {POPULATION_SIZE_OPTIONS.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Referral Source */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-800 mb-1">
                          How did you hear about GOQii?
                        </label>
                        <select
                          value={referralSource}
                          onChange={(e) => setReferralSource(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/60 border border-slate-200 text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#f05a28] focus:ring-2 focus:ring-orange-100 transition-all"
                        >
                          <option value="">Select an option</option>
                          {SOURCE_OPTIONS.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="pt-2">
                      <label className="flex items-start gap-2.5 cursor-pointer select-none bg-orange-50/40 p-3 rounded-xl border border-orange-100">
                        <input
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => {
                            setConsent(e.target.checked);
                            if (errors.consent) setErrors((p) => ({ ...p, consent: '' }));
                          }}
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
                      {errors.consent && (
                        <p className="text-[11px] text-red-500 mt-1.5 font-medium pl-2">{errors.consent}</p>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* ── FOOTER NAVIGATION BAR ── */}
              <div className="pt-4 mt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-4 py-2.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>←</span>
                    <span>Previous</span>
                  </button>
                ) : (
                  <span className="text-[11px] text-slate-400">Step 1 of 4</span>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer flex items-center gap-2 group"
                    style={{ background: '#f05a28' }}
                  >
                    <span>Next Step</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !consent}
                    className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                    style={{ background: '#f05a28' }}
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Partnership Inquiry</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>

          </div>
        )}
      </div>
    </div>
  );
}
