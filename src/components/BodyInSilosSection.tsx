import { useState } from 'react'
import connectedWomanBg from '../assets/images/woman_right_angle_1788948332653.jpg'

interface HealthPillar {
  id: string
  title: string
  description: string
  color: string
  badgeBg: string
  image: string
  icon: string
}

const pillars: HealthPillar[] = [
  {
    id: 'sleep',
    title: 'Sleep',
    description: "A good night's sleep fuels your energy, focus and mood.",
    color: '#3b82f6',
    badgeBg: 'bg-[#3b82f6]',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300&auto=format&fit=crop&q=80',
    icon: '🌙',
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    description: 'What you eat influences your metabolism and overall health.',
    color: '#10b981',
    badgeBg: 'bg-[#10b981]',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80',
    icon: '🥗',
  },
  {
    id: 'movement',
    title: 'Movement',
    description: 'Regular activity builds strength, improves mood and keeps you healthy longer.',
    color: '#f05a28',
    badgeBg: 'bg-[#f05a28]',
    image: 'https://images.unsplash.com/photo-1502224562085-639556652f33?w=300&auto=format&fit=crop&q=80',
    icon: '⚡',
  },
  {
    id: 'stress',
    title: 'Stress',
    description: 'Your mental well-being impacts recovery, hormones and overall balance.',
    color: '#f43f5e',
    badgeBg: 'bg-[#f43f5e]',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=300&auto=format&fit=crop&q=80',
    icon: '🧘',
  },
  {
    id: 'data',
    title: 'Your Data',
    description: 'Brings it all together to show the bigger picture and help you make better decisions.',
    color: '#8b5cf6',
    badgeBg: 'bg-[#8b5cf6]',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=300&auto=format&fit=crop&q=80',
    icon: '📊',
  },
]

export default function BodyInSilosSection() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  return (
    <section
      id="body-in-silos"
      className="w-full bg-[#FAFBFD] py-14 sm:py-20 lg:py-24 relative overflow-hidden select-none border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* ══════════════════════════════════════════════════════════════════ */}
      {/* 2-COLUMN BALANCED RESPONSIVE GRID (FLAWLESS AT ALL RESOLUTIONS)   */}
      {/* ══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ────────────────────────────────────────────────────────────── */}
          {/* 1. LEFT COLUMN: THE REALIZATION NARRATIVE                      */}
          {/* ────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-center pr-0 lg:pr-4">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-3.5 self-start shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
              THE REALIZATION
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
              Better outcomes need
            </h2>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#f05a28] tracking-tight leading-tight mt-1 sm:mt-1.5">
              a connected view.
            </h2>

            {/* Accent Bar */}
            <div className="w-10 h-1 bg-[#f05a28] rounded-full my-3.5" />

            {/* Narrative copy */}
            <div className="grid grid-cols-2 gap-2 text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-md mt-4">
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Sleep.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
                <span>Movement.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Nutrition.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span>Risk.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span>Clinical signals.</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                <span>Behavior.</span>
              </p>
            </div>

            {/* Punchline */}
            <p className="mt-5 text-base sm:text-lg font-semibold text-slate-900 leading-snug max-w-md">
              They influence each other.
            </p>

            {/* Sub-divider & Tagline matching website style */}
            <div className="mt-6 pt-5 border-t border-slate-200/80 flex flex-col gap-1">
              <span className="text-xs font-semibold tracking-[0.2em] text-[#f05a28] uppercase">
                DIFFERENT PIECES &bull; ONE CONNECTED YOU
              </span>
            </div>

            {/* A Healthier You Badge matching website style */}
            <div className="mt-4 inline-flex items-center gap-3 self-start px-4 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f05a28] animate-pulse" />
              <div className="text-[11px] font-semibold text-slate-600 tracking-wider uppercase leading-tight">
                A HEALTHIER YOU &bull; A BRIGHTER TOMORROW
              </div>
            </div>

            {/* Interactive Pillar Selector Tabs */}
            <div className="mt-6 flex flex-wrap gap-2">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActiveNode(activeNode === pillar.id ? null : pillar.id)}
                  onMouseEnter={() => setActiveNode(pillar.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeNode === pillar.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-sm scale-105'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <span className="text-xs">{pillar.icon}</span>
                  <span>{pillar.title}</span>
                </button>
              ))}
            </div>

          </div>

          {/* ────────────────────────────────────────────────────────────── */}
          {/* 2. RIGHT COLUMN: VISUAL STAGE (NO OVERLAP ON GIRL IN ANY RES)   */}
          {/* ────────────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7 w-full">
            <div className="relative min-h-[580px] sm:min-h-[620px] lg:min-h-[640px] xl:min-h-[680px] w-full rounded-3xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200/90 select-none">
              
              {/* Background Photo: Woman looking toward horizon on the RIGHT side */}
              <img
                src={connectedWomanBg}
                alt="Connected health journey"
                className="absolute inset-0 w-full h-full object-cover object-[78%_20%] sm:object-[80%_25%]"
                referrerPolicy="no-referrer"
              />

              {/* Gentle Vignette Overlays: Keeps woman clear & provides crisp contrast on the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/35 via-45% to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-black/20 pointer-events-none" />

              {/* ── DESKTOP/TABLET: SVG Constellation Connections in Open Space ── */}
              <svg
                className="hidden sm:block absolute inset-0 w-full h-full pointer-events-none z-10"
                viewBox="0 0 700 680"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Subtle glows for connector lines */}
                  <linearGradient id="line-sleep" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="line-nutrition" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="line-movement" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f05a28" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="line-stress" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="line-data" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
                  </linearGradient>
                </defs>

                {/* Central Hub anchor point: (330, 340) in open air between left cards and girl */}
                {/* 1. Sleep Connector */}
                <path d="M 230 75 C 280 120, 310 220, 330 340" stroke="url(#line-sleep)" strokeWidth="1.8" strokeDasharray="4 4" strokeOpacity="0.75" />
                
                {/* 2. Nutrition Connector */}
                <path d="M 180 190 C 230 220, 280 280, 330 340" stroke="url(#line-nutrition)" strokeWidth="1.8" strokeDasharray="4 4" strokeOpacity="0.75" />
                
                {/* 3. Movement Connector */}
                <path d="M 180 340 L 330 340" stroke="url(#line-movement)" strokeWidth="1.8" strokeDasharray="4 4" strokeOpacity="0.75" />
                
                {/* 4. Stress Connector */}
                <path d="M 180 490 C 230 460, 280 400, 330 340" stroke="url(#line-stress)" strokeWidth="1.8" strokeDasharray="4 4" strokeOpacity="0.75" />
                
                {/* 5. Your Data Connector */}
                <path d="M 240 605 C 280 570, 310 460, 330 340" stroke="url(#line-data)" strokeWidth="1.8" strokeDasharray="4 4" strokeOpacity="0.75" />

                {/* Gentle curved aura path toward the woman (without covering her) */}
                <path d="M 330 340 C 400 340, 450 310, 480 290" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.4" />
                <circle cx="480" cy="290" r="3.5" fill="#f05a28" stroke="#ffffff" strokeWidth="1.2" />

                {/* Anchor dot on central nexus */}
                <circle cx="330" cy="340" r="5" fill="#ffffff" className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </svg>

              {/* ── CENTRAL CONNECTED NEXUS BADGE (IN OPEN SPACE, NEVER ON GIRL) ── */}
              <div className="hidden sm:block absolute left-[44%] xl:left-[46%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-auto">
                <div className="relative px-3.5 py-3 rounded-2xl border border-white/40 bg-slate-900/60 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.3)] flex flex-col items-center text-center transition-transform hover:scale-105 duration-200">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
                  </div>
                  <span className="text-[10px] font-semibold text-white/90 tracking-wide">Your Health</span>
                  <span className="text-[10px] font-bold text-[#f05a28] uppercase tracking-wider bg-white/95 px-2 py-0.5 rounded-full mt-0.5 shadow-2xs">
                    Connected
                  </span>
                </div>
              </div>

              {/* ══════════════════════════════════════════════════════════ */}
              {/* DESKTOP & TABLET FLOATING CARDS (sm: and above)           */}
              {/* Placed exclusively in open space — NEVER on the girl       */}
              {/* ══════════════════════════════════════════════════════════ */}
              <div className="hidden sm:block">
                {/* ── CARD 1: SLEEP (Top Center-Left, in clear sky) ── */}
                <div
                  className={`absolute left-[16%] xl:left-[20%] top-[4%] z-20 pointer-events-auto transition-all duration-200 cursor-pointer ${
                    activeNode === 'sleep' ? 'scale-105 ring-2 ring-[#3b82f6]' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveNode('sleep')}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-white/90 max-w-[210px] flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-sm flex-shrink-0 border border-blue-100 shadow-2xs">
                      🌙
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900">Sleep</span>
                        <span className="text-[9px] font-bold text-blue-600 uppercase tracking-tight">Recovery</span>
                      </div>
                      <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
                        A good night&apos;s sleep fuels energy, focus and mood.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 2: NUTRITION (Upper Left, in open vista) ── */}
                <div
                  className={`absolute left-[3%] top-[20%] z-20 pointer-events-auto transition-all duration-200 cursor-pointer ${
                    activeNode === 'nutrition' ? 'scale-105 ring-2 ring-[#10b981]' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveNode('nutrition')}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-white/90 max-w-[205px] flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm flex-shrink-0 border border-emerald-100 shadow-2xs">
                      🥗
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900">Nutrition</span>
                        <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-tight">Fuel</span>
                      </div>
                      <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
                        What you eat influences metabolism and overall balance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 3: MOVEMENT (Mid Left, in open vista) ── */}
                <div
                  className={`absolute left-[2%] top-[42%] z-20 pointer-events-auto transition-all duration-200 cursor-pointer ${
                    activeNode === 'movement' ? 'scale-105 ring-2 ring-[#f05a28]' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveNode('movement')}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-white/90 max-w-[205px] flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-orange-50 text-[#f05a28] flex items-center justify-center text-sm flex-shrink-0 border border-orange-100 shadow-2xs">
                      ⚡
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900">Movement</span>
                        <span className="text-[9px] font-bold text-[#f05a28] uppercase tracking-tight">Vitality</span>
                      </div>
                      <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
                        Daily activity builds strength and maintains longevity.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 4: STRESS (Lower Left, in open vista) ── */}
                <div
                  className={`absolute left-[3%] top-[64%] z-20 pointer-events-auto transition-all duration-200 cursor-pointer ${
                    activeNode === 'stress' ? 'scale-105 ring-2 ring-[#f43f5e]' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveNode('stress')}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-white/90 max-w-[205px] flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-sm flex-shrink-0 border border-rose-100 shadow-2xs">
                      🧘
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900">Stress</span>
                        <span className="text-[9px] font-bold text-rose-600 uppercase tracking-tight">Mind</span>
                      </div>
                      <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
                        Mental well-being impacts recovery and hormone balance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ── CARD 5: YOUR DATA (Bottom Center-Left, clear from feet) ── */}
                <div
                  className={`absolute left-[16%] xl:left-[20%] bottom-[4%] z-20 pointer-events-auto transition-all duration-200 cursor-pointer ${
                    activeNode === 'data' ? 'scale-105 ring-2 ring-[#8b5cf6]' : 'hover:scale-102'
                  }`}
                  onMouseEnter={() => setActiveNode('data')}
                  onMouseLeave={() => setActiveNode(null)}
                >
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-white/90 max-w-[215px] flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-sm flex-shrink-0 border border-purple-100 shadow-2xs">
                      📊
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-900">Your Data</span>
                        <span className="text-[9px] font-bold text-purple-600 uppercase tracking-tight">Holistic</span>
                      </div>
                      <p className="text-[10px] text-slate-600 font-normal leading-snug mt-0.5">
                        Brings it together to guide better daily decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── MOBILE ONLY OVERLAY (< sm) ── */}
              <div className="sm:hidden absolute inset-x-3 bottom-3 z-20 pointer-events-auto">
                <div className="bg-slate-900/85 backdrop-blur-md rounded-2xl p-3 border border-white/20 text-white shadow-xl">
                  <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
                      <span className="text-xs font-semibold">Your Health Connected</span>
                    </div>
                    <span className="text-[10px] text-orange-400 font-semibold uppercase">5 Pillars</span>
                  </div>
                  <div className="grid grid-cols-1 gap-1.5">
                    {pillars.slice(0, 3).map((p) => (
                      <div key={p.id} className="flex items-center gap-2 text-[11px] text-white/90">
                        <span className="text-xs">{p.icon}</span>
                        <span className="font-semibold text-white">{p.title}:</span>
                        <span className="text-white/70 truncate">{p.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── BOTTOM-RIGHT REASSURANCE PILL (Anchored neatly at bottom right) ── */}
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-20 pointer-events-none">
                <div className="bg-slate-950/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-white/90 text-[10px] font-medium tracking-wide flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
                  <span>One Connected You</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
