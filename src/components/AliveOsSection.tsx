import { useState } from 'react'
import {
  Radar,
  LineChart,
  Navigation,
  Lightbulb,
  Zap,
  Repeat,
  Sparkles,
  ArrowRight,
  Shield,
  Activity,
  Heart,
  Moon,
  Flame,
  CheckCircle2,
  Clock,
  Layers,
  BarChart2,
  Cpu,
  UserCheck,
  BellRing,
} from 'lucide-react'

export default function AliveOsSection() {
  const [activeStage, setActiveStage] = useState<'detect' | 'predict' | 'guide'>('detect')
  const [activeLoopStep, setActiveLoopStep] = useState<number>(0)

  const architectureSteps = [
    {
      id: 'detect' as const,
      step: '01',
      title: 'DETECT',
      subtitle: 'Continuous health signals',
      headline: 'Multi-Sensor Biometric Stream',
      description: 'Ingests real-time wearable streams, lab diagnostics, and daily lifestyle markers into a unified telemetry baseline.',
      icon: Radar,
      color: '#008080',
      badge: 'Real-Time Ingestion',
      signals: [
        { name: 'Resting Heart Rate', value: '58 bpm', status: 'Optimal', change: '-3 bpm vs avg' },
        { name: 'Sleep Architecture', value: '7h 46m', status: '88% Deep/REM', change: '+42m restorative' },
        { name: 'HRV Recovery', value: '64 ms', status: 'Peak Readiness', change: 'Top 15% cohort' },
        { name: 'Diagnostic Labs', value: 'HbA1c 5.4%', status: 'Within Target', change: 'Normal range' },
      ],
    },
    {
      id: 'predict' as const,
      step: '02',
      title: 'PREDICT',
      subtitle: 'Pattern & risk modeling',
      headline: 'Multimodal Risk Modeling',
      description: 'ALIVE O.S. correlates biometric anomalies and lifestyle trends to detect emerging health risks before they become clinical events.',
      icon: LineChart,
      color: '#3b82f6',
      badge: 'Algorithmic Intelligence',
      signals: [
        { name: 'Cardio-Metabolic Stability', value: '94 / 100', status: 'Low Risk', change: 'Stable 30-day baseline' },
        { name: 'Recovery Deficit Index', value: '0.12', status: 'Nominal', change: 'No strain detected' },
        { name: 'Habit Decay Probability', value: '8%', status: 'Low Risk', change: 'High adherence trend' },
        { name: 'Early Anomaly Detection', value: '0 Flags', status: 'Clear', change: 'All biometrics in range' },
      ],
    },
    {
      id: 'guide' as const,
      step: '03',
      title: 'GUIDE',
      subtitle: 'Contextual interventions',
      headline: 'Human-in-the-Loop Interventions',
      description: 'Pairs algorithmic insights with certified human coaches to deliver timely micro-habits and empathetic behavioral support.',
      icon: Navigation,
      color: '#f05a28',
      badge: 'Personalized Coaching',
      signals: [
        { name: 'Assigned Coach', value: 'Coach Maya (MS, RD)', status: 'Active', change: 'Daily touchpoint ready' },
        { name: 'Today’s Micro-Goal', value: '30-min Zone 2 Walk', status: 'Targeted', change: 'Post-recovery recommendation' },
        { name: 'Behavioral Nudge', value: 'Hydration Timing', status: 'Delivered', change: 'Sent at 10:30 AM' },
        { name: 'Weekly Review', value: 'Scheduled Fri', status: 'Upcoming', change: '1-on-1 strategy call' },
      ],
    },
  ]

  const neurocodingLoop = [
    {
      step: '01',
      label: 'INSIGHT',
      icon: Lightbulb,
      desc: 'Clear, timely awareness of vital signals and lifestyle patterns.',
      visualTag: 'Biometric Awareness',
      example: 'HRV indicates high recovery readiness this morning.',
      color: '#008080',
    },
    {
      step: '02',
      label: 'ACTION',
      icon: Zap,
      desc: 'Achievable daily micro-step suggested by AI and assigned by coach.',
      visualTag: 'Micro-Habit Trigger',
      example: 'Take a 20-minute brisk walk after lunch to stabilize glucose.',
      color: '#3b82f6',
    },
    {
      step: '03',
      label: 'FEEDBACK',
      icon: Sparkles,
      desc: 'Real-time positive reinforcement and coach encouragement.',
      visualTag: 'Adaptive Reward',
      example: 'Coach Maya sends validation + streak badge unlocked.',
      color: '#f05a28',
    },
    {
      step: '04',
      label: 'HABIT',
      icon: Repeat,
      desc: 'Automated lifestyle routine sustained effortlessly over time.',
      visualTag: 'Lasting Retention',
      example: 'Daily movement becomes an ingrained habit for 90+ days.',
      color: '#8b5cf6',
    },
  ]

  const activeStageData = architectureSteps.find((s) => s.id === activeStage) || architectureSteps[0]

  return (
    <section
      id="alive-os"
      className="w-full bg-[#FAFBFD] py-16 sm:py-20 xl:py-28 relative overflow-hidden select-none border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Background ambient light */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 1. SECTION HEADER: Crisp, Scannable Narrative                     */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-3.5 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            THE INTELLIGENCE LAYER
          </div>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            The intelligence behind the journey.
          </h2>

          <div className="w-10 h-1 bg-[#f05a28] rounded-full mx-auto my-3.5" />

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            <strong className="text-slate-900 font-semibold">ALIVE O.S.</strong> continually translates complex multimodal health signals into predictive risk models and actionable coach interventions.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 2. INTERACTIVE ALIVE O.S. SYSTEM ARCHITECTURE SIMULATOR           */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="max-w-6xl mx-auto mb-20 sm:mb-28">
          
          {/* Top 3-Stage Segmented Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {architectureSteps.map((step) => {
              const Icon = step.icon
              const isSelected = activeStage === step.id
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStage(step.id)}
                  className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-[#f05a28] shadow-md ring-2 ring-orange-500/10'
                      : 'bg-white/70 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-600 bg-slate-100 group-hover:bg-slate-200'
                      }`}
                      style={{ backgroundColor: isSelected ? step.color : undefined }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                          STAGE {step.step}
                        </span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'animate-pulse' : 'opacity-40'}`}
                          style={{ backgroundColor: step.color }}
                        />
                      </div>
                      <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-xs font-bold transition-transform ${
                      isSelected ? 'text-[#f05a28] translate-x-1' : 'text-slate-300 group-hover:text-slate-500'
                    }`}
                  >
                    →
                  </span>
                </button>
              )
            })}
          </div>

          {/* Interactive Live Architecture Console */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* Console Subheader Bar */}
            <div className="bg-slate-50/80 px-6 sm:px-8 py-3.5 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    ALIVE O.S. Engine: {activeStageData.title} Active
                  </span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-xs text-slate-500 font-medium">
                  {activeStageData.headline}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600">
                  {activeStageData.badge}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  Telemetry Stream 60Hz
                </span>
              </div>
            </div>

            {/* Console Content: 2-Column Visual Display */}
            <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Stage Explanation & Concrete Value */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Layers className="w-3.5 h-3.5 text-[#f05a28]" />
                  <span>Architecture Phase {activeStageData.step} / 03</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                  {activeStageData.headline}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {activeStageData.description}
                </p>

                {/* Capability Checkpoints */}
                <div className="space-y-2.5 border-t border-slate-100 pt-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Verified Capabilities
                  </span>
                  {activeStage === 'detect' && (
                    <>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Continuous passive sync with Apple Health, Garmin, and continuous vitals</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Clinical lab marker ingestion &amp; HRA lifestyle habit profiling</span>
                      </div>
                    </>
                  )}
                  {activeStage === 'predict' && (
                    <>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Multi-parameter risk scoring for early cardiovascular and metabolic trends</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>Proactive anomaly detection before symptoms lead to clinical visits</span>
                      </div>
                    </>
                  )}
                  {activeStage === 'guide' && (
                    <>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>Certified human coaches matched to individual lifestyle &amp; clinical goals</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                        <span>Context-aware micro-goals delivered directly when member motivation peaks</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Interactive Live Telemetry / Simulation Card */}
              <div className="lg:col-span-7 bg-[#FAFBFD] rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-inner">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/70">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-[#f05a28]" />
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Live Telemetry Output
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    Active Feed
                  </span>
                </div>

                {/* 4 Interactive Visual Data Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                  {activeStageData.signals.map((sig) => (
                    <div
                      key={sig.name}
                      className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-2xs hover:border-[#f05a28]/50 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-medium text-slate-500">
                          {sig.name}
                        </span>
                        <span
                          className="text-[9.5px] font-bold px-1.5 py-0.5 rounded-md"
                          style={{
                            backgroundColor: `${activeStageData.color}15`,
                            color: activeStageData.color,
                          }}
                        >
                          {sig.status}
                        </span>
                      </div>
                      <div className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        {sig.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium mt-1">
                        {sig.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interactive Dynamic Graphic Banner depending on active stage */}
                {activeStage === 'detect' && (
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Multisource Continuous Sensor Sync</span>
                        <span className="text-[11px] text-slate-500">Apple Watch · Garmin · CGM · OMRON Blood Pressure</span>
                      </div>
                    </div>
                    {/* Mini Waveform visualization */}
                    <div className="hidden sm:flex items-center gap-0.5">
                      <span className="w-1 h-3 bg-teal-300 rounded-full animate-pulse" />
                      <span className="w-1 h-5 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '100ms' }} />
                      <span className="w-1 h-7 bg-teal-600 rounded-full animate-pulse" style={{ animationDelay: '200ms' }} />
                      <span className="w-1 h-4 bg-teal-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                      <span className="w-1 h-6 bg-teal-500 rounded-full animate-pulse" style={{ animationDelay: '250ms' }} />
                    </div>
                  </div>
                )}

                {activeStage === 'predict' && (
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <BarChart2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Longevity &amp; Risk Stratification</span>
                        <span className="text-[11px] text-slate-500">Automated classification into low, moderate, and intensive coaching tiers</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-blue-600 px-2 py-1 rounded-md bg-blue-50 border border-blue-100">
                      Tier 1 · Low Risk
                    </span>
                  </div>
                )}

                {activeStage === 'guide' && (
                  <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#f05a28] flex items-center justify-center shrink-0">
                        <UserCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">Coach Briefing Complete</span>
                        <span className="text-[11px] text-slate-500">Coach Maya reviewed recovery spike; micro-goal sent to member</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Sent</span>
                    </span>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 3. BEHAVIORAL NEUROCODING: VISUAL HABIT FORMATION LOOP             */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div id="neurocoding" className="bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border border-slate-200/80 shadow-sm max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f05a28] mb-2 block">
              BEHAVIORAL NEUROCODING
            </span>

            <h3 className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mb-2">
              Turning insight into action.
            </h3>

            <div className="w-8 h-1 bg-[#f05a28] rounded-full mx-auto my-3" />

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              A closed-loop behavioral science methodology that converts passive data into automated, lasting daily routines.
            </p>
          </div>

          {/* Visual 4-Step Closed Loop with Interactive Highlighting */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative mb-8">
            {neurocodingLoop.map((item, idx) => {
              const Icon = item.icon
              const isStepActive = activeLoopStep === idx
              return (
                <div
                  key={item.label}
                  onClick={() => setActiveLoopStep(idx)}
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                    isStepActive
                      ? 'bg-white border-[#f05a28] shadow-md ring-2 ring-orange-500/10 -translate-y-1'
                      : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="flex flex-col flex-1">
                    {/* Dedicated Icon Header (Replaces Image) */}
                    <div
                      className="relative h-32 w-full flex flex-col items-center justify-center overflow-hidden transition-all duration-300 border-b"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}0D 0%, ${item.color}1F 100%)`,
                        borderColor: `${item.color}25`,
                      }}
                    >
                      {/* Ambient soft glow ring */}
                      <div
                        className="absolute w-24 h-24 rounded-full pointer-events-none opacity-25 blur-xl transition-all duration-500 group-hover:opacity-45 group-hover:scale-125"
                        style={{ backgroundColor: item.color }}
                      />

                      {/* Step badge in top-left */}
                      <span className="absolute top-2.5 left-2.5 text-[9.5px] font-extrabold px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-slate-800 border border-slate-200/80 shadow-2xs uppercase tracking-wider">
                        PHASE {item.step}
                      </span>

                      {/* Micro pulse step counter in top-right */}
                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200/70 shadow-2xs">
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-[9px] font-bold text-slate-600 tracking-wider">
                          STEP {idx + 1}/4
                        </span>
                      </div>

                      {/* Prominent Center Icon Container */}
                      <div
                        className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shadow-xs transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                        style={{
                          backgroundColor: `${item.color}18`,
                          borderColor: `${item.color}35`,
                          borderWidth: '1.5px',
                        }}
                      >
                        <Icon
                          className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300"
                          style={{ color: item.color }}
                          strokeWidth={2.2}
                        />
                      </div>
                    </div>

                    <div className="p-4 flex flex-col justify-between flex-1">
                      <div>
                        <h4 className="text-base font-bold text-slate-900 tracking-tight mb-1">
                          {item.label}
                        </h4>

                        <span
                          className="text-[10px] font-semibold px-2 py-0.5 rounded-md inline-block mb-2"
                          style={{ backgroundColor: `${item.color}15`, color: item.color }}
                        >
                          {item.visualTag}
                        </span>

                        <p className="text-xs text-slate-600 leading-relaxed font-normal mb-2.5">
                          {item.desc}
                        </p>
                      </div>

                      {/* Interactive Example Snippet */}
                      <div className="pt-2.5 border-t border-slate-200/60 bg-slate-50/70 -mx-1.5 -mb-1.5 p-2 rounded-xl text-[10.5px] text-slate-600">
                        <span className="font-semibold text-slate-800 block text-[9.5px] uppercase tracking-wider mb-0.5">
                          Live Flow:
                        </span>
                        &ldquo;{item.example}&rdquo;
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Visual Reinforcement Summary Bar */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f05a28]" />
              <span className="font-medium">
                Rooted in dynamic motivation and validated behavioral science principles.
              </span>
            </div>
            <div className="flex items-center gap-2 font-bold text-slate-800 text-[11px] tracking-wider uppercase">
              <span>Insight</span>
              <span>→</span>
              <span>Action</span>
              <span>→</span>
              <span>Feedback</span>
              <span>→</span>
              <span className="text-[#f05a28]">Habit</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
