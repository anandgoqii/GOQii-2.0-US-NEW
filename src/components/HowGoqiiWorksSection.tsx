import { useState } from 'react'
import adultSmartwatchPhoto from '../assets/images/us_woman_connected_health_1788947932340.jpg'

export default function HowGoqiiWorksSection() {
  const [activeItem, setActiveItem] = useState<number | null>(null)

  const capabilities = [
    { label: 'Wearables & Tracking', icon: '⌚', color: '#10b981' },
    { label: 'Coaching', icon: '🤝', color: '#f05a28' },
    { label: 'Nutrition', icon: '🥗', color: '#14b8a6' },
    { label: 'Fitness', icon: '🏃', color: '#f59e0b' },
    { label: 'Mental Wellness', icon: '🧘', color: '#8b5cf6' },
    { label: 'Diagnostics', icon: '🧪', color: '#3b82f6' },
    { label: 'Health Insights', icon: '📈', color: '#06b6d4' },
  ]

  const progression = [
    { step: '01', title: 'TRACK', desc: 'Continuous vitals & lifestyle', icon: '📊' },
    { step: '02', title: 'UNDERSTAND', desc: 'Predictive risk & pattern detection', icon: '🧠' },
    { step: '03', title: 'ACT', desc: 'Personalized guidance & human coaching', icon: '⚡' },
    { step: '04', title: 'IMPROVE', desc: 'Measurable health & lasting habits', icon: '🎯' },
  ]

  return (
    <section
      id="how-it-works"
      className="w-full bg-white py-16 sm:py-24 overflow-hidden relative border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase block mb-3">
            HOW GOQii WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            From insight to action.
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-normal mt-3">
            Understand your health. Know what to do next.
          </p>
        </div>

        {/* Elegant Ecosystem Visualization */}
        <div className="relative max-w-5xl mx-auto mb-16 sm:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left/Center Visual: Lifestyle photo in minimal frame with ambient glow */}
            <div className="lg:col-span-7 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 aspect-4/3 w-full max-w-lg bg-slate-100">
                <img
                  src={adultSmartwatchPhoto}
                  alt="Adult using connected smartwatch and health tracking"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/80 shadow-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-800">Connected Health Engine</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500">Live Telemetry</span>
                </div>
              </div>
            </div>

            {/* Right Side: 7 Minimal Connected Visual Nodes */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              {capabilities.map((item, idx) => (
                <div
                  key={item.label}
                  onMouseEnter={() => setActiveItem(idx)}
                  onMouseLeave={() => setActiveItem(null)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-200 cursor-default ${
                    activeItem === idx
                      ? 'bg-slate-50 border-slate-300 shadow-sm translate-x-1'
                      : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-slate-50 flex items-center justify-center text-sm shadow-2xs">
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{item.label}</span>
                  </div>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Single Horizontal Progression: TRACK -> UNDERSTAND -> ACT -> IMPROVE */}
        <div className="max-w-4xl mx-auto pt-6 border-t border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {progression.map((p, idx) => (
              <div key={p.step} className="flex flex-col items-center text-center p-3">
                <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-100 text-[#f05a28] flex items-center justify-center text-lg mb-2 shadow-2xs">
                  {p.icon}
                </div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[10px] font-bold text-[#f05a28] tracking-widest">{p.step}</span>
                  <span className="text-xs font-bold text-slate-900 tracking-wider">{p.title}</span>
                </div>
                <p className="text-[11px] text-slate-500 font-normal leading-snug">
                  {p.desc}
                </p>
                {idx < progression.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-slate-300">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
