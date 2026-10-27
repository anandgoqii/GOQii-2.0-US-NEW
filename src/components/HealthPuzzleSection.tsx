import { useState } from 'react'
import confusedWomanBg from '../assets/images/us_woman_phone_clear_1788947583286.jpg'

export default function HealthPuzzleSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section
      id="health-puzzle"
      className="w-full bg-[#FAFBFD] py-12 lg:py-20 overflow-hidden relative border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: The Problem & The Health Puzzle Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-2 z-20">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-3.5 self-start">
              <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
              THE PROBLEM
            </div>

            {/* Main Headline - font-semibold, matching website typography and brand color */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
              Health is connected.
            </h2>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#f05a28] tracking-tight leading-tight mt-1 sm:mt-1.5">
              Healthcare often isn&apos;t.
            </h2>

            {/* Accent Bar */}
            <div className="w-10 h-1 bg-[#f05a28] rounded-full my-3.5" />

            {/* Narrative items */}
            <div className="mt-4 space-y-1.5 text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-xl">
              <p className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
                <span>Data.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
                <span>Diagnostics.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
                <span>Behavior.</span>
              </p>
              <p className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
                <span>Guidance.</span>
              </p>
            </div>

            {/* Punchline */}
            <p className="mt-5 text-base sm:text-lg font-semibold text-slate-900 leading-snug">
              Too often, they exist in separate systems.
            </p>

            {/* Sub-divider & Tagline */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#f05a28] uppercase">
                DIFFERENT PIECES. ONE YOU.
              </span>
            </div>

            {/* A Healthier You Badge */}
            <div className="mt-4 inline-flex items-center gap-3 self-start px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f05a28] animate-pulse" />
              <div className="text-[11px] font-semibold text-slate-600 tracking-wider uppercase leading-tight">
                A HEALTHIER YOU &bull; A BRIGHTER TOMORROW
              </div>
            </div>
          </div>

          {/* Right Column: Visual Scene with Floating Animated Cards */}
          <div className="lg:col-span-7 relative min-h-[580px] sm:min-h-[640px] xl:min-h-[700px] w-full rounded-3xl overflow-hidden bg-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200/90 flex items-center justify-center select-none">
            
            {/* Background Image: Woman confused looking down into mobile */}
            <img
              src={confusedWomanBg}
              alt="Confused woman looking into mobile phone trying to solve her health puzzle"
              className="absolute inset-0 w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />

            {/* Subtle soft gradient overlay so floating cards stand out with crisp contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

            {/* ── SVG Connecting Dashed Curved Flow Lines (Desktop) ── */}
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-10"
              viewBox="0 0 780 660"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Path: Steps to Health Reports */}
              <path
                d="M 205 85 C 235 70, 255 70, 285 85"
                stroke="#475569"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                strokeOpacity="0.45"
              />
              {/* Path: Health Reports to Sleep */}
              <path
                d="M 485 85 C 515 70, 545 70, 575 85"
                stroke="#475569"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                strokeOpacity="0.45"
              />
              {/* Path: Steps down to Nutrition */}
              <path
                d="M 115 145 C 105 190, 105 240, 115 285"
                stroke="#475569"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                strokeOpacity="0.45"
              />
              {/* Path: Sleep down to Advice */}
              <path
                d="M 670 145 C 680 190, 680 240, 670 285"
                stroke="#475569"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                strokeOpacity="0.45"
              />
            </svg>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* DESKTOP FLOATING CARDS (Animated in Desktop View - Compact) */}
            {/* ═════════════════════════════════════════════════════════════ */}

            {/* 1. STEPS CARD (Top-Left) */}
            <div className="hidden lg:flex absolute top-[3%] left-[2%] z-20 flex-col items-start animate-float-1">
              {/* Handwritten Note with Arrow */}
              <div className="flex items-center gap-1 -ml-1 mb-0.5">
                <span
                  className="text-slate-800 text-[15px] font-bold leading-none select-none tracking-wide"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  One app for steps...
                </span>
                <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 6 C 10 10, 16 12, 20 18" strokeDasharray="2 2" />
                  <path d="M16 19 L 20 18 L 19 14" strokeLinecap="round" />
                </svg>
              </div>

              {/* White Card - Reduced size */}
              <div
                className={`bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border transition-all duration-300 w-[185px] cursor-pointer ${
                  hoveredCard === 'steps' ? 'scale-105 shadow-2xl border-[#10B981] ring-2 ring-[#10B981]/25' : 'border-white/80 hover:scale-103'
                }`}
                onMouseEnter={() => setHoveredCard('steps')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/15 text-[#059669] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-900 leading-tight">Steps</span>
                    <span className="text-[9px] text-slate-400 font-normal">In my fitness app</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <div className="text-[17px] font-bold text-slate-900 tracking-tight leading-none">8,432</div>
                    <span className="text-[9px] text-slate-400 font-medium">steps</span>
                    {/* Mini Green Bar Chart */}
                    <div className="flex items-end gap-0.5 mt-1.5 h-4.5">
                      <div className="w-1 h-2 bg-[#10B981]/40 rounded-full" />
                      <div className="w-1 h-3 bg-[#10B981]/60 rounded-full" />
                      <div className="w-1 h-4.5 bg-[#10B981] rounded-full" />
                      <div className="w-1 h-3.5 bg-[#10B981] rounded-full" />
                      <div className="w-1 h-2.5 bg-[#10B981]/70 rounded-full" />
                      <div className="w-1 h-3.5 bg-[#10B981] rounded-full" />
                    </div>
                  </div>
                  {/* Photo of runner */}
                  <img
                    src="https://images.unsplash.com/photo-1502224562085-639556652f33?w=140&auto=format&fit=crop&q=80"
                    alt="Running in fitness app"
                    className="w-11 h-11 rounded-lg object-cover shadow-2xs border border-slate-100 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* 2. HEALTH REPORTS CARD (Top-Center) */}
            <div className="hidden lg:flex absolute top-[2%] left-[37%] z-20 flex-col items-center animate-float-2">
              {/* Handwritten Note with Arrow */}
              <div className="flex items-center gap-1 mb-0.5 -mt-1">
                <span
                  className="text-slate-800 text-[15px] font-bold leading-none select-none tracking-wide"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  Reports somewhere else...
                </span>
                <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 14 C 8 8, 14 6, 20 6" strokeDasharray="2 2" />
                  <path d="M19 10 L 20 6 L 16 5" strokeLinecap="round" />
                </svg>
              </div>

              {/* White Card - Reduced size */}
              <div
                className={`bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border transition-all duration-300 w-[190px] cursor-pointer ${
                  hoveredCard === 'reports' ? 'scale-105 shadow-2xl border-[#F43F5E] ring-2 ring-[#F43F5E]/25' : 'border-white/80 hover:scale-103'
                }`}
                onMouseEnter={() => setHoveredCard('reports')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#F43F5E]/15 text-[#E11D48] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-900 leading-tight">Health Reports</span>
                    <span className="text-[9px] text-slate-400 font-normal">In my patient portal</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex items-center justify-between gap-2">
                  {/* Checklist */}
                  <div className="space-y-0.5 text-[9.5px] text-slate-700 font-medium">
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-[#F43F5E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Cholesterol</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-[#F43F5E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Vitamin D</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-[#F43F5E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>HbA1c</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-[#F43F5E] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Thyroid</span>
                    </div>
                  </div>

                  {/* Lab Report Sheet Thumbnail */}
                  <div className="w-12 h-14 rounded-md bg-blue-50/80 border border-blue-200/80 p-1 flex flex-col justify-between shadow-2xs">
                    <div className="h-1 w-6 bg-blue-500 rounded-xs mb-0.5" />
                    <div className="space-y-0.5">
                      <div className="h-0.5 w-9 bg-slate-400 rounded-xs" />
                      <div className="h-0.5 w-7 bg-slate-400 rounded-xs" />
                      <div className="h-0.5 w-10 bg-slate-400 rounded-xs" />
                      <div className="h-0.5 w-6 bg-slate-400 rounded-xs" />
                    </div>
                    <div className="h-1.5 w-8 bg-blue-200 rounded-xs mt-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. SLEEP CARD (Top-Right) */}
            <div className="hidden lg:flex absolute top-[3%] right-[2%] z-20 flex-col items-end animate-float-3">
              {/* Handwritten Note with Arrow */}
              <div className="flex items-center gap-1 mb-0.5 -mr-1">
                <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M20 6 C 14 8, 8 12, 4 18" strokeDasharray="2 2" />
                  <path d="M8 19 L 4 18 L 5 14" strokeLinecap="round" />
                </svg>
                <span
                  className="text-slate-800 text-[15px] font-bold leading-none select-none tracking-wide"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  Another app for sleep...
                </span>
              </div>

              {/* White Card - Reduced size */}
              <div
                className={`bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border transition-all duration-300 w-[185px] cursor-pointer ${
                  hoveredCard === 'sleep' ? 'scale-105 shadow-2xl border-[#8B5CF6] ring-2 ring-[#8B5CF6]/25' : 'border-white/80 hover:scale-103'
                }`}
                onMouseEnter={() => setHoveredCard('sleep')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#8B5CF6]/15 text-[#7C3AED] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-900 leading-tight">Sleep</span>
                    <span className="text-[9px] text-slate-400 font-normal">In my sleep app</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <div className="text-[17px] font-bold text-slate-900 tracking-tight leading-none">6h 20m</div>
                    <span className="text-[9px] text-slate-400 font-medium">last night</span>
                    {/* Purple Sleep Wave Bars */}
                    <div className="flex items-end gap-0.5 mt-1.5 h-4.5">
                      <div className="w-1 h-2 bg-[#8B5CF6]/40 rounded-full" />
                      <div className="w-1 h-2.5 bg-[#8B5CF6]/60 rounded-full" />
                      <div className="w-1 h-4 bg-[#8B5CF6] rounded-full" />
                      <div className="w-1 h-3.5 bg-[#8B5CF6] rounded-full" />
                      <div className="w-1 h-4.5 bg-[#8B5CF6] rounded-full" />
                      <div className="w-1 h-2 bg-[#8B5CF6]/50 rounded-full" />
                    </div>
                  </div>
                  {/* Photo of sleeping woman */}
                  <img
                    src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=140&auto=format&fit=crop&q=80"
                    alt="Sleep in sleep app"
                    className="w-11 h-11 rounded-lg object-cover shadow-2xs border border-slate-100 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* 4. NUTRITION CARD (Middle-Left) */}
            <div className="hidden lg:flex absolute top-[46%] left-[1.5%] z-20 flex-col items-start animate-float-4">
              {/* White Card - Reduced size */}
              <div
                className={`bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border transition-all duration-300 w-[185px] cursor-pointer ${
                  hoveredCard === 'nutrition' ? 'scale-105 shadow-2xl border-[#F97316] ring-2 ring-[#F97316]/25' : 'border-white/80 hover:scale-103'
                }`}
                onMouseEnter={() => setHoveredCard('nutrition')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#F97316]/15 text-[#EA580C] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-900 leading-tight">Nutrition</span>
                    <span className="text-[9px] text-slate-400 font-normal">In a different tool</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex items-center justify-between gap-2">
                  {/* Photo of delicious salad */}
                  <img
                    src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=140&auto=format&fit=crop&q=80"
                    alt="Healthy nutrition salad"
                    className="w-11 h-11 rounded-lg object-cover shadow-2xs border border-slate-100 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Metrics list */}
                  <div className="space-y-0.5 text-[10px] text-slate-700 font-medium leading-tight">
                    <div className="hover:text-[#F97316] transition-colors">Calories</div>
                    <div className="hover:text-[#F97316] transition-colors">Macros</div>
                    <div className="hover:text-[#F97316] transition-colors">Meals</div>
                    <div className="hover:text-[#F97316] transition-colors">Food log</div>
                  </div>
                </div>
              </div>

              {/* Handwritten Note with Arrow */}
              <div className="flex items-center gap-1 mt-1.5 -ml-0.5">
                <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 18 C 8 14, 14 10, 18 6" strokeDasharray="2 2" />
                  <path d="M14 6 L 18 6 L 17 10" strokeLinecap="round" />
                </svg>
                <span
                  className="text-slate-800 text-[15px] font-bold leading-none select-none tracking-wide"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  Food is another conversation...
                </span>
              </div>
            </div>

            {/* 5. ADVICE CARD (Middle-Right) */}
            <div className="hidden lg:flex absolute top-[46%] right-[1.5%] z-20 flex-col items-end animate-float-5">
              {/* Handwritten Note with Arrow */}
              <div className="flex items-center gap-1 mb-1 -mr-0.5">
                <span
                  className="text-slate-800 text-[15px] font-bold leading-none select-none tracking-wide"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  So much advice...
                </span>
                <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 14 C 10 10, 16 10, 20 6" strokeDasharray="2 2" />
                  <path d="M16 6 L 20 6 L 19 10" strokeLinecap="round" />
                </svg>
              </div>

              {/* White Card - Reduced size */}
              <div
                className={`bg-white/95 backdrop-blur-md rounded-xl p-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.12)] border transition-all duration-300 w-[190px] cursor-pointer ${
                  hoveredCard === 'advice' ? 'scale-105 shadow-2xl border-[#0284C7] ring-2 ring-[#0284C7]/25' : 'border-white/80 hover:scale-103'
                }`}
                onMouseEnter={() => setHoveredCard('advice')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-[#0284C7]/15 text-[#0284C7] flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-slate-900 leading-tight">Advice</span>
                    <span className="text-[9px] text-slate-400 font-normal">From everywhere</span>
                  </div>
                </div>

                {/* Body */}
                <div className="flex items-center justify-between gap-2">
                  {/* Sources List */}
                  <div className="space-y-0.5 text-[9.5px] text-slate-700 font-medium">
                    <div className="flex items-center gap-1">
                      <span className="text-[#0284C7] font-bold">&bull;</span>
                      <span>Social media</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#0284C7] font-bold">&bull;</span>
                      <span>Friends & family</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#0284C7] font-bold">&bull;</span>
                      <span>Internet</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[#0284C7] font-bold">&bull;</span>
                      <span>Experts</span>
                    </div>
                  </div>

                  {/* Smartphone Message Mockup */}
                  <div className="w-[62px] bg-slate-900 rounded-lg p-1 shadow-2xs border border-slate-700 flex flex-col gap-0.5 text-[6.5px]">
                    <div className="bg-[#f05a28] text-white rounded px-1 py-0.5 truncate font-medium">
                      Try this...
                    </div>
                    <div className="bg-slate-800 text-slate-200 rounded px-1 py-0.5 truncate font-medium">
                      You should...
                    </div>
                    <div className="bg-slate-800 text-slate-200 rounded px-1 py-0.5 truncate font-medium">
                      What worked...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. LAPTOP CALLOUT NOTE (Bottom-right - Compact) */}
            <div className="hidden lg:block absolute bottom-4 right-4 z-20 pointer-events-none">
              <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md border border-slate-200/80 max-w-[260px]">
                <p
                  className="text-slate-900 text-[16px] font-bold leading-tight"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  ...But your body experiences all of it together.
                </p>
                {/* Hand-drawn Orange Accent Underline */}
                <svg className="w-full h-2.5 text-[#f05a28] mt-0.5" viewBox="0 0 260 12" fill="none">
                  <path
                    d="M 2 8 C 70 3, 180 2, 258 7"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* ═════════════════════════════════════════════════════════════ */}
            {/* MOBILE PRESENTATION OVERLAY                               */}
            {/* ═════════════════════════════════════════════════════════════ */}
            <div className="lg:hidden absolute inset-x-3 bottom-3 z-20 flex flex-col gap-2">
              <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100 text-center">
                <p
                  className="text-slate-900 text-[18px] font-bold leading-tight"
                  style={{ fontFamily: 'Caveat, cursive' }}
                >
                  ...But your body experiences all of it together.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5 text-[11px] font-semibold text-slate-700">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">Steps</span>
                  <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60">Reports</span>
                  <span className="px-2.5 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200/60">Sleep</span>
                  <span className="px-2.5 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200/60">Nutrition</span>
                  <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200/60">Advice</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═════════════════════════════════════════════════════════════ */}
        {/* MOBILE GRID VIEW: FULL CARDS (< lg only)                    */}
        {/* ═════════════════════════════════════════════════════════════ */}
        <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: Steps */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">1</span>
                <span className="text-sm font-bold text-slate-900">Steps</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">In my fitness app</p>
              <div className="text-lg font-bold text-slate-900">8,432 steps</div>
              <span className="text-[14px] text-slate-600 font-bold" style={{ fontFamily: 'Caveat, cursive' }}>
                One app for steps...
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1502224562085-639556652f33?w=140&auto=format&fit=crop&q=80"
              alt="Steps"
              className="w-16 h-16 rounded-xl object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Card 2: Health Reports */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-bold">2</span>
                <span className="text-sm font-bold text-slate-900">Health Reports</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">In my patient portal</p>
              <div className="text-xs text-slate-700 space-y-0.5">
                <div>&bull; Cholesterol &bull; Vitamin D</div>
                <div>&bull; HbA1c &bull; Thyroid</div>
              </div>
              <span className="text-[14px] text-slate-600 font-bold" style={{ fontFamily: 'Caveat, cursive' }}>
                Reports somewhere else...
              </span>
            </div>
            <div className="w-14 h-16 rounded-lg bg-blue-50 border border-blue-200/80 p-2 flex flex-col justify-between shadow-2xs">
              <div className="h-1.5 w-6 bg-blue-500 rounded-xs" />
              <div className="space-y-1">
                <div className="h-1 w-9 bg-slate-400 rounded-xs" />
                <div className="h-1 w-8 bg-slate-400 rounded-xs" />
              </div>
              <div className="h-1.5 w-7 bg-blue-200 rounded-xs" />
            </div>
          </div>

          {/* Card 3: Sleep */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">3</span>
                <span className="text-sm font-bold text-slate-900">Sleep</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">In my sleep app</p>
              <div className="text-lg font-bold text-slate-900">6h 20m last night</div>
              <span className="text-[14px] text-slate-600 font-bold" style={{ fontFamily: 'Caveat, cursive' }}>
                Another app for sleep...
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=140&auto=format&fit=crop&q=80"
              alt="Sleep"
              className="w-16 h-16 rounded-xl object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Card 4: Nutrition */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-xs font-bold">4</span>
                <span className="text-sm font-bold text-slate-900">Nutrition</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">In a different tool</p>
              <div className="text-xs text-slate-700">Calories, Macros, Meals, Food log</div>
              <span className="text-[14px] text-slate-600 font-bold" style={{ fontFamily: 'Caveat, cursive' }}>
                Food is another conversation...
              </span>
            </div>
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=140&auto=format&fit=crop&q=80"
              alt="Nutrition"
              className="w-16 h-16 rounded-xl object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Card 5: Advice */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex items-center justify-between sm:col-span-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center text-xs font-bold">5</span>
                <span className="text-sm font-bold text-slate-900">Advice</span>
              </div>
              <p className="text-xs text-slate-500 mb-2">From everywhere</p>
              <div className="text-xs text-slate-700">Social media &bull; Friends &bull; Family &bull; Internet &bull; Experts</div>
              <span className="text-[14px] text-slate-600 font-bold" style={{ fontFamily: 'Caveat, cursive' }}>
                So much advice...
              </span>
            </div>
            <div className="bg-slate-900 text-white text-[9px] px-3 py-2 rounded-xl">
              <div>&bull; Try this...</div>
              <div>&bull; You should...</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
