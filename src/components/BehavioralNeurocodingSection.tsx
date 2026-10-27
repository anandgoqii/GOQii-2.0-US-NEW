import { useState } from 'react'
import habitPhoto from '../assets/images/neurocoding_habit_1791195044051.jpg'

export default function BehavioralNeurocodingSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  const loopSteps = [
    { name: 'INSIGHT', label: 'Personalized guidance', icon: '💡', color: '#10b981' },
    { name: 'ACTION', label: 'Human coaching', icon: '🤝', color: '#3b82f6' },
    { name: 'FEEDBACK', label: 'Progress feedback', icon: '📊', color: '#f59e0b' },
    { name: 'HABIT', label: 'Rewards & motivation', icon: '🎯', color: '#f05a28' },
  ]

  return (
    <section
      id="behavioral-neurocoding"
      className="w-full bg-[#FAFBFD] py-16 sm:py-24 overflow-hidden relative border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase block mb-3">
            THE HUMAN ACTION LAYER
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            Turn insight into lasting habits.
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-normal mt-3">
            Personalized guidance. Meaningful progress.
          </p>
        </div>

        {/* 2-Column Visual Stage: Left Lifestyle Photo, Right Circular Behavior Loop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center max-w-6xl mx-auto">
          {/* Left Column: Lifestyle photo of everyday healthy activity */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-4/3 w-full max-w-lg bg-slate-100">
              <img
                src={habitPhoto}
                alt="Individual enjoying a moment of healthy hydration and mindful routine"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

              {/* Quiet Micro Tag */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/80 shadow-md flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-800">
                  Behavioral Neurocoding
                </span>
                <span className="text-[11px] font-medium text-emerald-600">
                  Adaptive Motivation Engine
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Simple Circular Behavior Loop (INSIGHT -> ACTION -> FEEDBACK -> HABIT) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="grid grid-cols-2 gap-4">
              {loopSteps.map((step, idx) => (
                <div
                  key={step.name}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`bg-white rounded-2xl p-5 border transition-all duration-300 ${
                    activeStep === idx
                      ? 'border-[#f05a28] shadow-lg scale-[1.02]'
                      : 'border-slate-200/80 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-sm shadow-2xs">
                      {step.icon}
                    </span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>
                  <span className="text-xs font-bold text-slate-900 tracking-wider block uppercase mb-1">
                    {step.name}
                  </span>
                  <span className="text-xs text-slate-500 font-medium block leading-snug">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Loop Summary Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-orange-50/60 border border-orange-100 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f05a28] animate-pulse" />
              <p className="text-xs sm:text-sm text-slate-700 font-medium">
                The behavior-change layer within GOQii that connects digital tracking with empathetic human coaching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
