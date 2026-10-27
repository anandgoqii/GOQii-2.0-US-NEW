import { useState } from 'react'
import GoqiiAppPhoneMockup from './GoqiiAppPhoneMockup'
import {
  Activity,
  Brain,
  Compass,
  Zap,
  TrendingUp,
  Apple,
  Dumbbell,
  Smile,
  CheckCircle2,
  CalendarCheck,
  UserCheck,
  Flame,
  Heart,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock,
  PlayCircle,
  SlidersHorizontal
} from 'lucide-react'

interface ConnectedWaySectionProps {
  onRequestDemo?: () => void
}

export default function ConnectedWaySection({ onRequestDemo }: ConnectedWaySectionProps) {
  const [activeStage, setActiveStage] = useState<number>(0)
  const [activeCategory, setActiveCategory] = useState<string>('coaching')
  const [habitCompleted, setHabitCompleted] = useState<boolean>(false)

  const progressionSteps = [
    { label: 'DATA', icon: Activity, metric: 'Continuous Sync', desc: 'Wearable & vital telemetry' },
    { label: 'INTELLIGENCE', icon: Brain, metric: 'ALIVE O.S.', desc: 'Predictive risk synthesis' },
    { label: 'GUIDANCE', icon: Compass, metric: '1-on-1 Human', desc: 'Certified health coaches' },
    { label: 'ACTION', icon: Zap, metric: 'Micro-Habits', desc: 'Achievable daily nudges' },
    { label: 'OUTCOMES', icon: TrendingUp, metric: 'Measurable ROI', desc: 'Sustained health retention' },
  ]

  const stages = [
    {
      badge: 'STAGE 01',
      title: 'UNDERSTAND',
      subtitle: 'Health data & diagnostics',
      highlight: 'Unified Biometric Ingestion',
      description: 'Continuous capture across wearable streams, lab diagnostics, and lifestyle habits into a real-time health profile.',
      color: '#008080',
      icon: Brain,
      stat: '24/7 Passive Telemetry',
      photo: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&auto=format&fit=crop&q=80',
      photoAlt: 'Wearable biometric smartwatch syncing continuous vital telemetry',
      photoTag: 'Continuous Telemetry',
      features: ['Apple Health & Garmin sync', 'Continuous vitals & labs', 'Habit & symptom journaling'],
    },
    {
      badge: 'STAGE 02',
      title: 'PERSONALIZE',
      subtitle: 'AI + health intelligence + experts',
      highlight: 'ALIVE O.S. Predictive Modeling',
      description: 'The ALIVE O.S. engine synthesizes risk markers with certified coach clinical review to generate tailored micro-goals.',
      color: '#3b82f6',
      icon: SlidersHorizontal,
      stat: 'Dynamic Motivation Model',
      photo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
      photoAlt: 'Clinical health intelligence and predictive risk stratification dashboard',
      photoTag: 'Predictive Intelligence',
      features: ['Early risk factor detection', 'Personalized nutrition targets', 'Cohort baseline benchmarking'],
    },
    {
      badge: 'STAGE 03',
      title: 'ACT',
      subtitle: 'Guidance + engagement + behavior change',
      highlight: 'Sustained Daily Habit Loops',
      description: 'Human coach encouragement, behavioral neurocoding, and real-time validation turn intent into measurable health change.',
      color: '#f05a28',
      icon: Zap,
      stat: '90-Day Habit Retention',
      photo: 'https://images.unsplash.com/photo-1480179087180-d9f0ec044897?w=600&auto=format&fit=crop&q=80',
      photoAlt: 'Dedicated human coaching and sustained daily habit change',
      photoTag: '1-on-1 Coaching',
      features: ['Daily coach accountability', 'Contextual smart nudges', 'Longitudinal habit tracking'],
    },
  ]

  const engagementPillars = [
    {
      id: 'coaching',
      label: '1-on-1 Coaching',
      icon: UserCheck,
      desc: 'Certified coaches providing weekly guidance, empathy, and accountability.',
      accent: '#f05a28',
      preview: {
        title: 'Dedicated Health Coach',
        badge: 'Live Session Available',
        content: '“Ethan, outstanding consistency with your hydration this week! Today let’s focus on a 25-minute zone 2 walk.”',
        author: 'Coach Maya (MS, Clinical Dietetics)',
        metric: '98% Member Rating',
      },
    },
    {
      id: 'nutrition',
      label: 'Smart Nutrition',
      icon: Apple,
      desc: 'Seamless meal logging, metabolic balance scores, and personalized dietary adjustments.',
      accent: '#10b981',
      preview: {
        title: 'Metabolic Balance Tracker',
        badge: 'Target Met Today',
        content: 'Balanced macronutrient ratio logged. Anti-inflammatory score 9.2/10. Optimal hydration maintained.',
        author: 'Metabolic Intelligence Engine',
        metric: '72g Protein · Low Glycemic',
      },
    },
    {
      id: 'fitness',
      label: 'Active Movement',
      icon: Dumbbell,
      desc: 'Wearable-synced step streaks, heart rate zone monitoring, and guided stamina routines.',
      accent: '#3b82f6',
      preview: {
        title: 'Daily Movement Goal',
        badge: '8,420 / 10,000 Steps',
        content: 'Active burn 420 kcal. Heart rate response shows steady aerobic adaptation over last 14 days.',
        author: 'Garmin & Apple Health Stream',
        metric: 'Zone 2 Cardio: 32 mins',
      },
    },
    {
      id: 'mental',
      label: 'Mental Rest & Recovery',
      icon: Smile,
      desc: 'HRV-guided stress management, restorative breathwork, and sleep architecture tracking.',
      accent: '#8b5cf6',
      preview: {
        title: 'Recovery & Nervous System',
        badge: 'HRV: 64 ms (Optimal)',
        content: 'Parasympathetic tone peaked post-breathwork session. Sleep quality score rated 88/100.',
        author: 'Rest & Recovery Protocol',
        metric: 'Deep Sleep: 2h 14m',
      },
    },
    {
      id: 'actions',
      label: 'Daily Micro-Habits',
      icon: CheckCircle2,
      desc: 'Bite-sized, achievable wellness actions engineered for busy schedules without burnout.',
      accent: '#ec4899',
      preview: {
        title: 'Daily Action Checklist',
        badge: '2 of 3 Completed',
        content: 'Morning sunlight exposure ✓ · 500ml water upon waking ✓ · Evening wind-down sequence [Tap to Complete]',
        author: 'Neurocoding Micro-Goal Engine',
        metric: 'Streak: 18 Days Running',
      },
    },
    {
      id: 'progress',
      label: 'Outcome Trendlines',
      icon: CalendarCheck,
      desc: 'Visual trendlines and biometric milestone reporting to celebrate lasting health progress.',
      accent: '#0284c7',
      preview: {
        title: 'Longitudinal Health Trends',
        badge: '30-Day Evaluation',
        content: 'Resting heart rate down 4 bpm. Daily steps up 28%. Self-reported energy score up from 6.2 to 8.7.',
        author: 'Population Health Analytics',
        metric: 'Biometric Risk: Reduced 14%',
      },
    },
  ]

  const activePillarData = engagementPillars.find((p) => p.id === activeCategory) || engagementPillars[0]

  return (
    <section
      id="introducing-goqii"
      className="w-full bg-[#FAFCFB] py-16 sm:py-20 xl:py-28 relative overflow-hidden select-none border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] lg:w-[1200px] h-[500px] bg-gradient-to-r from-teal-50/40 via-orange-50/30 to-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 1. CORE PLATFORM HEADER                                            */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            THE CONNECTED PLATFORM
          </div>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            One connected health platform.
          </h2>

          <div className="w-10 h-1 bg-[#f05a28] rounded-full mx-auto my-3.5" />

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            GOQii brings continuous health data, intelligence, certified coach guidance, and daily action together in one seamless journey.
          </p>
        </div>

        {/* ── Visual Progression Pipeline: DATA → INTELLIGENCE → GUIDANCE → ACTION → OUTCOMES ── */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-24">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                THE CONTINUOUS VALUE CHAIN
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {progressionSteps.map((step, idx) => {
                const IconComponent = step.icon
                return (
                  <div key={step.label} className="flex flex-col items-center text-center relative group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 mb-2.5 group-hover:scale-105 group-hover:border-[#f05a28] group-hover:text-[#f05a28] group-hover:bg-orange-50/50 transition-all shadow-2xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-900 tracking-wider">
                      {step.label}
                    </span>
                    <span className="text-[10px] font-bold text-[#f05a28] uppercase mt-0.5">
                      {step.metric}
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal mt-0.5">
                      {step.desc}
                    </span>

                    {/* Desktop Right Arrow Connector */}
                    {idx < progressionSteps.length - 1 && (
                      <div className="hidden md:block absolute -right-2 top-7 text-slate-300 font-bold pointer-events-none">
                        →
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 2. HOW GOQii WORKS: UNDERSTAND → PERSONALIZE → ACT                 */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f05a28] mb-2 block">
              HOW IT WORKS
            </span>
            <h3 className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-slate-900 tracking-tight">
              From health signals to meaningful action.
            </h3>
            <div className="w-8 h-1 bg-[#f05a28] rounded-full mx-auto my-3" />
          </div>

          {/* 3 Visual Cards with Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {stages.map((stage, idx) => {
              const Icon = stage.icon
              const isSelected = activeStage === idx
              return (
                <div
                  key={stage.title}
                  onClick={() => setActiveStage(idx)}
                  className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    isSelected
                      ? 'border-[#f05a28] shadow-lg ring-2 ring-orange-500/10 -translate-y-1'
                      : 'border-slate-200/80 shadow-xs hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col flex-1">
                    {/* Visual Card Image Banner */}
                    <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                      <img
                        src={stage.photo}
                        alt={stage.photoAlt}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80'
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent pointer-events-none" />
                      
                      {/* Floating Badge & Icon */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-[10.5px] font-bold px-2.5 py-1 rounded-md text-white tracking-wider uppercase shadow-xs"
                          style={{ background: stage.color }}
                        >
                          {stage.badge}
                        </span>
                      </div>

                      <div
                        className="absolute bottom-3 left-3 w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-md"
                        style={{ backgroundColor: stage.color }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <span className="absolute bottom-3 right-3 text-[10px] font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded">
                        {stage.photoTag}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col justify-between flex-1">
                      <div>
                        <h4 className="text-xl font-bold text-slate-900 tracking-tight mb-1">
                          {stage.title}
                        </h4>
                        <p className="text-xs font-semibold text-slate-500 mb-2">
                          {stage.subtitle}
                        </p>

                        <div
                          className="text-[11px] font-bold px-2 py-0.5 rounded-md inline-block mb-3"
                          style={{ backgroundColor: `${stage.color}15`, color: stage.color }}
                        >
                          {stage.highlight}
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                          {stage.description}
                        </p>

                        {/* Feature bullets */}
                        <div className="space-y-1.5 pt-3 border-t border-slate-100">
                          {stage.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-xs text-slate-700">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stage.color }} />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-500">
                          {stage.stat}
                        </span>
                        <span className="text-xs font-bold text-[#f05a28]">
                          Step {idx + 1} of 3 →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 3. ENGAGEMENT: HEALTH ENGAGEMENT THAT FITS REAL LIFE                */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div id="engagement" className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-slate-200/80 shadow-sm max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Narrative answering "Will people actually use it?" */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#f05a28] mb-2 block">
                SUSTAINED PARTICIPATION
              </span>

              <h3 className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-2">
                Health engagement that fits real life.
              </h3>

              <div className="w-8 h-1 bg-[#f05a28] rounded-full my-3" />

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-6">
                The defining question for enterprise health leaders is simple: <strong className="text-slate-900 font-semibold">Will people actually use it?</strong>
                <br />
                GOQii combines human coaching, achievable micro-habits, and real-time encouragement to drive lasting participation without burnout.
              </p>

              {/* 6 Core Engagement Elements (Interactive Selector) */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-6">
                {engagementPillars.map((p) => {
                  const Icon = p.icon
                  const isSelected = activeCategory === p.id
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActiveCategory(p.id)}
                      className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#f05a28] bg-orange-50/50 text-slate-900 shadow-2xs ring-1 ring-orange-500/20'
                          : 'border-slate-100 bg-slate-50/70 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#f05a28]' : 'text-slate-500'}`} />
                        <span className="text-xs font-bold leading-tight">{p.label}</span>
                      </div>
                      <p className="text-[10.5px] text-slate-500 leading-tight">
                        {p.desc}
                      </p>
                    </button>
                  )
                })}
              </div>

              {/* Dynamic Interactive Preview Card for Selected Pillar */}
              <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: activePillarData.accent }} />
                    <span className="text-xs font-bold text-slate-900">{activePillarData.preview.title}</span>
                  </div>
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: `${activePillarData.accent}15`, color: activePillarData.accent }}
                  >
                    {activePillarData.preview.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic mb-2">
                  {activePillarData.preview.content}
                </p>
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-200/60">
                  <span>{activePillarData.preview.author}</span>
                  <span className="font-bold text-slate-800">{activePillarData.preview.metric}</span>
                </div>
              </div>

              {onRequestDemo && (
                <div>
                  <button
                    type="button"
                    onClick={onRequestDemo}
                    className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md cursor-pointer inline-flex items-center gap-2 bg-[#f05a28] hover:bg-[#d94e1f]"
                  >
                    <span>Request Platform Demo</span>
                    <span>→</span>
                  </button>
                </div>
              )}
            </div>

            {/* Right Column: Mobile Experience Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[340px] drop-shadow-xl">
                <GoqiiAppPhoneMockup className="w-full h-[620px]" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
