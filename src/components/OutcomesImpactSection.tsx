import {
  TrendingUp,
  Activity,
  Heart,
  Users,
  Repeat,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react'

export default function OutcomesImpactSection() {
  const runnersBg = 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=80'

  const outcomeCards = [
    {
      tag: 'Health Plans & Payers',
      headline: 'Preventive Risk Reduction',
      desc: 'Early lifestyle intervention and continuous monitoring help lower avoidable claims and support population wellness.',
      color: '#f05a28',
      icon: TrendingUp,
      visualBadge: 'Risk Mitigation',
      metric: '↓ Claims Utilization',
      metricNote: 'Early lifestyle detection',
    },
    {
      tag: 'Chronic Care',
      headline: 'Care Continuity',
      desc: 'Supported lifestyle adherence and continuous vital monitoring bridge the gap between clinical appointments.',
      color: '#3b82f6',
      icon: Activity,
      visualBadge: 'Clinical Bridge',
      metric: 'Continuous Vitals',
      metricNote: 'Post-encounter touchpoints',
    },
    {
      tag: 'Employers',
      headline: 'Workforce Well-Being',
      desc: 'Tailored health challenges and 1-on-1 coaching foster sustained habit change and energized teams.',
      color: '#10b981',
      icon: Users,
      visualBadge: 'Employee Vitality',
      metric: '3.2x Participation',
      metricNote: 'Voluntary wellness sprints',
    },
    {
      tag: 'Behavioral Science',
      headline: 'Sustained Daily Habits',
      desc: 'Behavioral neurocoding and micro-goals build long-term retention far beyond traditional 30-day wellness apps.',
      color: '#a855f7',
      icon: Repeat,
      visualBadge: 'Neurocoding Loop',
      metric: '78% 90-Day Retention',
      metricNote: 'Habit automation curve',
    },
    {
      tag: 'Public Health',
      headline: 'Population Engagement',
      desc: 'Scalable preventive health programs designed to activate diverse communities through accessible digital wellness.',
      color: '#f59e0b',
      icon: Heart,
      visualBadge: 'Community Scale',
      metric: 'Equitable Access',
      metricNote: 'Multilingual mobile care',
    },
  ]

  return (
    <section
      id="outcomes"
      className="w-full relative overflow-hidden py-16 sm:py-20 xl:py-24 scroll-mt-16 sm:scroll-mt-20"
      style={{ minHeight: '440px', fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Background photo */}
      <img
        src={runnersBg}
        alt="People running outdoors at sunset"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      {/* Dark gradient overlay for high contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B132B]/95 via-[#0B132B]/90 to-[#0B132B]/98" />

      <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[#f05a28] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f05a28] animate-pulse" />
            Measurable Outcomes
          </div>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-white tracking-tight leading-tight">
            Better engagement. <span className="text-[#f05a28]">Better outcomes.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-3 max-w-2xl font-normal">
            By aligning continuous biometric data, intelligent risk detection, and certified coaching, GOQii helps organizations achieve sustainable health improvements across populations.
          </p>
        </div>

        {/* 5 Outcome Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {outcomeCards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.tag}
                className="bg-white/[0.07] backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-white/25 hover:bg-white/[0.12] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                      {card.tag}
                    </span>
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
                      style={{ backgroundColor: card.color }}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="w-6 h-0.5 rounded-full mb-3" style={{ backgroundColor: card.color }} />

                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-orange-200 transition-colors mb-2">
                    {card.headline}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                {/* Mini Visual Metric Tag */}
                <div className="pt-3.5 mt-4 border-t border-white/10 flex flex-col gap-0.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-white">
                    <span>{card.metric}</span>
                    <span
                      className="text-[9.5px] px-1.5 py-0.2 rounded"
                      style={{ backgroundColor: `${card.color}25`, color: card.color }}
                    >
                      {card.visualBadge}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400">
                    {card.metricNote}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
