import React, { useState } from 'react';
import {
  Sparkles,
  Trophy,
  Users,
  Flag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Compass
} from 'lucide-react';

interface Milestone {
  id: string;
  step: string;
  period: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  photo?: string;
  photoCaption?: string;
  theme: {
    badgeBg: string;
    badgeText: string;
    border: string;
    accent: string;
    iconBg: string;
    iconColor: string;
  };
  details: {
    highlight: string;
    stats?: string;
    statsLabel?: string;
    takeaway: string;
  };
}

const MILESTONES: Milestone[] = [
  {
    id: '01',
    step: '01 — 2014',
    period: '2014',
    title: 'GOQii Begins',
    subtitle: 'The Founding Vision',
    desc: 'Pioneering human-in-the-loop proactive health coaching.',
    icon: Compass,
    photo: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80',
    photoCaption: 'Wearable Technology Pioneers · Real-Time Telemetry',
    theme: {
      badgeBg: 'bg-orange-50',
      badgeText: 'text-[#f05a28]',
      border: 'border-orange-200/80',
      accent: '#f05a28',
      iconBg: 'bg-orange-500/10',
      iconColor: 'text-[#f05a28]',
    },
    details: {
      highlight: 'Human-in-the-Loop Digital Health',
      stats: '1st',
      statsLabel: 'Connected Health Ecosystem with Human Coaches',
      takeaway: 'Disrupted reactive medicine by uniting continuous tracking with certified human coaches and behavioral nudges.',
    },
  },
  {
    id: '02',
    step: '02 — The Evolution',
    period: 'The Evolution',
    title: 'Smart Health Ecosystem',
    subtitle: 'Integrated Intelligence',
    desc: 'Diagnostic innovation & Qualcomm Tricorder XPRIZE Finalist.',
    icon: Trophy,
    photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
    photoCaption: 'Qualcomm Tricorder XPRIZE Finalist · Non-Invasive Diagnostics',
    theme: {
      badgeBg: 'bg-blue-50',
      badgeText: 'text-blue-600',
      border: 'border-blue-200/80',
      accent: '#3b82f6',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-600',
    },
    details: {
      highlight: 'Qualcomm Tricorder XPRIZE Finalist (Sanjeevini)',
      stats: 'Global Finalist',
      statsLabel: 'Qualcomm Tricorder XPRIZE',
      takeaway: 'Global finalist with Sanjeevini, developing pioneering non-invasive mobile diagnostics that laid the technical foundation for ALIVE O.S.',
    },
  },
  {
    id: '03',
    step: '03 — Global Impact',
    period: 'Global Impact',
    title: 'Health at Scale',
    subtitle: 'Population Deployments',
    desc: 'Scaling preventive programs across enterprise organizations.',
    icon: Users,
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80',
    photoCaption: 'Population Scale Deployments · Sustained Member Retention',
    theme: {
      badgeBg: 'bg-emerald-50',
      badgeText: 'text-emerald-700',
      border: 'border-emerald-200/80',
      accent: '#10b981',
      iconBg: 'bg-emerald-500/10',
      iconColor: 'text-emerald-600',
    },
    details: {
      highlight: 'Enterprise & Population Health Deployments',
      stats: 'Scale',
      statsLabel: 'Population Deployments',
      takeaway: 'Partnered across health plans, large employers, and international healthcare partners with focus on sustained engagement and habit adherence.',
    },
  },
  {
    id: '04',
    step: '04 — Today',
    period: 'Today',
    title: 'GOQii USA',
    subtitle: 'US Health Transformation',
    desc: 'A decade of behavioral science tailored for US healthcare.',
    icon: Flag,
    photo: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&auto=format&fit=crop&q=80',
    photoCaption: 'US Healthcare Transformation · Dynamic Motivation Engine',
    theme: {
      badgeBg: 'bg-amber-50',
      badgeText: 'text-[#f05a28]',
      border: 'border-orange-300',
      accent: '#f05a28',
      iconBg: 'bg-[#f05a28]/15',
      iconColor: 'text-[#f05a28]',
    },
    details: {
      highlight: 'Empowering US Payers, Providers & Employers',
      stats: '10+ Yrs',
      statsLabel: 'Proven Behavioral Science & Engagement',
      takeaway: 'Bridging healthcare gaps with AI-driven Dynamic Motivation tailored to the complex needs of American health plans, providers, and self-insured employers.',
    },
  },
];

const PILLARS = [
  { label: 'PREVENTION', desc: 'Proactive early care', color: '#10b981' },
  { label: 'ENGAGEMENT', desc: 'Daily sustained habits', color: '#3b82f6' },
  { label: 'INTELLIGENCE', desc: 'AI-driven motivation', color: '#8b5cf6' },
  { label: 'IMPACT', desc: 'Measurable health outcomes', color: '#f05a28' },
];

interface OurStorySectionProps {
  onOpenPartnerModal?: () => void;
}

export default function OurStorySection({ onOpenPartnerModal }: OurStorySectionProps) {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone>(MILESTONES[3]);

  return (
    <section
      id="our-story"
      className="w-full bg-gradient-to-b from-white via-[#fafbfe] to-white py-16 sm:py-20 xl:py-24 border-b border-slate-100 relative overflow-hidden"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Subtle Background Geometric & Ambient Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-100/25 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* ── TOP SECTION: Story Header & Clean Visual Narrative ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 lg:mb-18">
          
          {/* Left Column: Eyebrow + Main Heading + Key Quote */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#f05a28] text-xs font-bold uppercase tracking-wider mb-3 w-fit shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
              OUR STORY
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight mb-4">
              From a Bold Idea to a{' '}
              <span className="text-[#f05a28]">Global Movement.</span>
            </h2>

            {/* Lead Callout Card */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_4px_20px_rgba(11,25,44,0.04)] relative">
              <div className="w-1 h-10 bg-gradient-to-b from-[#f05a28] to-amber-400 rounded-full absolute left-0 top-5" />
              <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed pl-2">
                &ldquo;Healthcare should help people stay healthy, not just treat them when they are sick. We unite continuous tracking, motivation, and certified human coaching.&rdquo;
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 pl-2">
                <span className="font-semibold text-slate-700">Founded by Vishal Gondal</span>
                <span className="inline-flex items-center gap-1 text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  10+ Years Innovation
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Evolution Pathway Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-slate-50/70 rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-xs">
              {/* Visual Community Banner */}
              <div className="relative h-28 sm:h-32 rounded-2xl overflow-hidden mb-4 bg-slate-200 border border-slate-200/90 shadow-2xs group/story">
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=80"
                  alt="GOQii global preventive health community movement"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/story:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-bold tracking-wider text-[11px] uppercase">
                    10+ Years of Human-in-the-Loop Innovation
                  </span>
                  <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded font-semibold">
                    Global Community
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  The GOQii Evolution Pathway
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  Continuous Preventive Health
                </span>
              </div>

              {/* 4 Visual Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
                {PILLARS.map((pillar, idx) => (
                  <div
                    key={pillar.label}
                    className="bg-white rounded-xl p-3 border border-slate-200/90 shadow-2xs flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: pillar.color }}
                      />
                    </div>
                    <div>
                      <div
                        className="text-xs font-bold tracking-tight mb-0.5"
                        style={{ color: pillar.color }}
                      >
                        {pillar.label}
                      </div>
                      <div className="text-[10.5px] text-slate-500 leading-tight">
                        {pillar.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Now active in the <strong className="text-slate-900 font-semibold">United States</strong>, GOQii combines a decade of proven behavioral neurocoding with modern health plans, employers, and healthcare organizations.
              </p>
            </div>
          </div>

        </div>

        {/* ── TIMELINE CONTAINER: Horizontal Connected Journey ── */}
        <div className="mb-14 lg:mb-18">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
                FOUR DEFINING MILESTONES
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
                A Decade of Continuous Breakthroughs
              </h3>
            </div>
            <span className="text-xs text-slate-500 font-normal">
              Click any milestone to explore
            </span>
          </div>

          {/* Desktop Connected Horizontal Track */}
          <div className="relative">
            {/* Grid of 4 Milestone Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 relative z-10">
              {MILESTONES.map((item, index) => {
                const isSelected = selectedMilestone.id === item.id;
                const isToday = item.id === '04';
                const IconComponent = item.icon;

                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMilestone(item)}
                    className={`rounded-2xl p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between relative group ${
                      isSelected
                        ? isToday
                          ? 'bg-white border-2 border-[#f05a28] shadow-[0_8px_24px_rgba(240,90,40,0.12)] -translate-y-1'
                          : 'bg-white border-2 border-slate-800 shadow-[0_8px_24px_rgba(11,25,44,0.08)] -translate-y-1'
                        : 'bg-white border border-slate-200/80 shadow-2xs hover:border-slate-300 hover:-translate-y-0.5'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full ${
                            isToday
                              ? 'bg-orange-50 text-[#f05a28] border border-orange-200'
                              : item.theme.badgeBg + ' ' + item.theme.badgeText
                          }`}
                        >
                          {item.step}
                        </span>

                        {isToday && (
                          <span className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#f05a28] bg-orange-100/70 px-1.5 py-0.5 rounded-md">
                            ACTIVE CHAPTER
                          </span>
                        )}
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-3 my-1.5">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                            isSelected
                              ? 'bg-[#f05a28] text-white shadow-sm'
                              : 'bg-slate-50 text-slate-700 border border-slate-200'
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>

                        <div>
                          <span className="text-[11px] font-semibold text-slate-400 block leading-tight">
                            {item.period}
                          </span>
                          <h4 className="text-base font-bold text-slate-900 leading-tight">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-normal mt-2.5">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10.5px] font-semibold text-slate-400 group-hover:text-slate-700 transition-colors">
                        {isSelected ? 'Viewing Milestone' : 'Click to inspect'}
                      </span>
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                          isSelected
                            ? 'bg-[#f05a28] text-white'
                            : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                        }`}
                      >
                        →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Active Milestone Spotlight Box ── */}
          <div className="mt-6 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-2xs flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start gap-4 max-w-3xl flex-1">
              {/* Optional Milestone Archive Photo */}
              {selectedMilestone.photo && (
                <div className="relative w-full sm:w-36 h-28 rounded-xl overflow-hidden shrink-0 bg-slate-100 border border-slate-200/80 shadow-2xs group/mimg">
                  <img
                    src={selectedMilestone.photo}
                    alt={selectedMilestone.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/mimg:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-1.5 left-2 text-[9px] font-bold text-white uppercase tracking-wider">
                    {selectedMilestone.period}
                  </span>
                </div>
              )}

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-md bg-orange-50 text-[#f05a28] flex items-center justify-center font-bold text-xs border border-orange-100/80 shrink-0">
                    {selectedMilestone.id}
                  </div>
                  <span className="text-xs font-bold text-[#f05a28] uppercase tracking-wider">
                    {selectedMilestone.step}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-xs font-semibold text-slate-800">
                    {selectedMilestone.details.highlight}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2">
                  {selectedMilestone.details.takeaway}
                </p>
                {selectedMilestone.photoCaption && (
                  <span className="text-[11px] font-semibold text-slate-400 mt-2 block">
                    Focus: {selectedMilestone.photoCaption}
                  </span>
                )}
              </div>
            </div>

            {selectedMilestone.details.stats && (
              <div className="bg-slate-50 rounded-xl px-5 py-3 border border-slate-200/70 flex flex-col items-center justify-center text-center shrink-0 w-full lg:w-auto">
                <span className="text-xl sm:text-2xl font-black text-[#0B192C] leading-none mb-0.5">
                  {selectedMilestone.details.stats}
                </span>
                <span className="text-[10px] font-medium text-slate-500 max-w-[140px] leading-tight">
                  {selectedMilestone.details.statsLabel}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* ── CLOSING STATEMENT & CTA ── */}
        <div className="bg-gradient-to-br from-[#0B192C] via-[#0E223D] to-[#121E36] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden">
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#f05a28]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
            
            <div className="inline-flex items-center justify-center gap-2 mb-4 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-medium">
              <span className="text-emerald-400">Prevention</span>
              <span className="text-white/40">→</span>
              <span className="text-blue-300">Engagement</span>
              <span className="text-white/40">→</span>
              <span className="text-[#f05a28] font-bold">Impact</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug max-w-3xl mb-3">
              From Prevention. To Engagement. To Impact.
            </h3>

            <p className="text-sm sm:text-base font-normal text-slate-300 leading-relaxed max-w-2xl mb-6">
              &ldquo;A decade of experience. One enduring mission: make healthier action easier to start—and easier to sustain.&rdquo;
            </p>

            <button
              type="button"
              onClick={() => {
                if (onOpenPartnerModal) {
                  onOpenPartnerModal();
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg cursor-pointer flex items-center gap-2 group"
              style={{ background: '#f05a28' }}
            >
              <span>Partner with GOQii USA</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}
