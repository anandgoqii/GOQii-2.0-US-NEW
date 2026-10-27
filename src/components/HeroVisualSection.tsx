import heroLifestyleWalk from '../assets/images/hero_lifestyle_walk_1791195005469.jpg'

interface HeroVisualSectionProps {
  onOpenPartnerModal: () => void
}

export default function HeroVisualSection({ onOpenPartnerModal }: HeroVisualSectionProps) {
  const scrollToJourney = () => {
    const el = document.getElementById('problem') || document.getElementById('health-puzzle')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const healthSignals = [
    { label: 'Sleep', val: '7h 48m', status: 'Optimal', icon: '🌙', color: 'text-indigo-600', pos: 'top-4 left-4 sm:top-6 sm:left-6' },
    { label: 'Activity', val: '8,420 steps', status: 'Active', icon: '🏃', color: 'text-amber-600', pos: 'top-4 right-4 sm:top-6 sm:right-6' },
    { label: 'Recovery', val: '94% HRV', status: 'Ready', icon: '⚡', color: 'text-emerald-600', pos: 'bottom-4 left-4 sm:bottom-6 sm:left-6' },
    { label: 'Nutrition', val: 'Balanced', status: 'On Track', icon: '🥗', color: 'text-teal-600', pos: 'bottom-4 right-4 sm:bottom-6 sm:right-6' },
  ]

  return (
    <section
      id="introducing-goqii"
      className="relative w-full overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 border-b border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Spacious 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Left Column: Headline, Supporting Copy, Dual CTAs, and Partner Certification */}
          <div className="lg:col-span-6 flex flex-col justify-center max-w-xl">
            <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase block mb-4">
              PREVENTIVE HEALTH &amp; ENGAGEMENT
            </span>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold text-[#0B192C] tracking-tight leading-[1.12] mb-5">
              Health starts with everyday choices.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8">
              Connected insights. Personal guidance. Healthier habits.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={scrollToJourney}
                className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#f05a28] hover:bg-[#d94e1f] transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer text-center whitespace-nowrap"
              >
                Explore Your Health Journey
              </button>

              <button
                onClick={onOpenPartnerModal}
                className="px-7 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-all shadow-2xs hover:shadow-xs active:scale-98 cursor-pointer text-center whitespace-nowrap"
              >
                Explore Enterprise Solutions
              </button>
            </div>

            {/* Enterprise Focus Pillars */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28]" />
                Human Coaching
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Continuous Biometrics
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Adaptive Motivation
              </span>
            </div>
          </div>

          {/* Right Column: Large Authentic US Lifestyle Photograph with Restrained Overlays */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 aspect-4/3 sm:aspect-16/11 w-full max-w-xl bg-slate-100">
              <img
                src={heroLifestyleWalk}
                alt="American professional enjoying a peaceful morning walk in an urban park wearing a smartwatch"
                className="w-full h-full object-cover object-[center_35%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-slate-900/10 pointer-events-none" />

              {/* 4 Subtle Restrained Health Signal Overlays */}
              {healthSignals.map((signal) => (
                <div
                  key={signal.label}
                  className={`absolute ${signal.pos} bg-white/95 backdrop-blur-md rounded-2xl px-3 sm:px-3.5 py-2 border border-slate-200/90 shadow-md transition-transform hover:scale-105 pointer-events-auto`}
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-xs">{signal.icon}</span>
                    <span className="text-[11px] font-bold text-slate-700">{signal.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs sm:text-sm font-bold ${signal.color} leading-none`}>
                      {signal.val}
                    </span>
                    <span className="text-[9px] text-slate-400 font-medium">
                      • {signal.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
