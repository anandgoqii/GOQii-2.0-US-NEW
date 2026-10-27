export default function ProgressProofSection() {
  const proofPanels = [
    {
      metric: 'Consistent',
      metricLabel: 'Daily Habit Retention',
      description: 'Structured weekly touchpoints and objective vital logging help members transform scattered wellness intentions into durable, self-reinforcing daily routines.',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80',
      alt: 'Member enjoying an active and healthy morning',
      tag: 'Habit Consistency',
      color: 'text-emerald-600',
    },
    {
      metric: 'Continuous',
      metricLabel: 'Coaching Support',
      description: 'Continuous longitudinal insights replace intermittent annual check-ups, keeping individuals actively supported throughout their daily preventative journey.',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80',
      alt: 'Adult discussing preventive health progress',
      tag: 'Care Team Alignment',
      color: 'text-[#f05a28]',
    },
    {
      metric: 'Actionable',
      metricLabel: 'Member Experience',
      description: 'Clear, prioritized health guidance and personalized micro-goals replace overwhelming data feeds with intuitive, achievable daily steps.',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80',
      alt: 'Professional sharing positive feedback on health journey',
      tag: 'Member Experience',
      color: 'text-blue-600',
    },
  ]

  return (
    <section
      id="proof"
      className="w-full bg-white py-16 sm:py-24 overflow-hidden relative border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase block mb-3">
            PROGRESS &amp; PROOF
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            Small steps. Meaningful progress.
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-normal mt-3">
            Real journeys. Measurable change.
          </p>
        </div>

        {/* 3 Editorial Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {proofPanels.map((panel) => (
            <div
              key={panel.metricLabel}
              className="bg-slate-50/70 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo Banner */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                <img
                  src={panel.photo}
                  alt={panel.alt}
                  className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 text-[11px] font-bold text-slate-800 border border-slate-200">
                  {panel.tag}
                </div>
              </div>

              {/* Metric & Quote Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className={`text-4xl sm:text-5xl font-black ${panel.color} tracking-tight leading-none mb-1`}>
                    {panel.metric}
                  </div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                    {panel.metricLabel}
                  </div>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">
                    {panel.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
