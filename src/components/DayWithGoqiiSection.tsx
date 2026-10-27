export default function DayWithGoqiiSection() {
  const timelineMoments = [
    {
      time: 'Morning',
      label: 'Understand your sleep and recovery.',
      badge: 'Sleep & HRV 92%',
      photo: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80',
      alt: 'Morning sunlight in peaceful bedroom waking up refreshed',
      overlayIcon: '🌅',
    },
    {
      time: 'Midday',
      label: 'Make informed activity and nutrition choices.',
      badge: 'Active Burn + Balanced Lunch',
      photo: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80',
      alt: 'Adult enjoying a wholesome lunch and lunchtime walk in the city',
      overlayIcon: '🥗',
    },
    {
      time: 'Evening',
      label: 'Review your progress.',
      badge: 'Coach Check-in Completed',
      photo: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80',
      alt: 'Relaxing at home reviewing health summary on smartphone',
      overlayIcon: '🌙',
    },
    {
      time: 'Over time',
      label: 'Recognize trends and adjust your goals.',
      badge: '30-Day Metabolic Momentum',
      photo: 'https://images.unsplash.com/photo-1502224562085-639556652f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=700&q=80',
      alt: 'Sustained healthy outdoor lifestyle along a scenic nature path',
      overlayIcon: '📈',
    },
  ]

  return (
    <section
      id="day-with-goqii"
      className="w-full bg-[#FAFBFD] py-16 sm:py-24 overflow-hidden relative border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase block mb-3">
            A DAY WITH GOQii
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            Health guidance that fits real life.
          </h2>
          <p className="text-lg sm:text-xl text-slate-500 font-normal mt-3">
            Small actions. Better routines.
          </p>
        </div>

        {/* 4 Large Photographic Moments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineMoments.map((moment) => (
            <div
              key={moment.time}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Photo Area */}
              <div className="relative aspect-4/5 overflow-hidden bg-slate-100">
                <img
                  src={moment.photo}
                  alt={moment.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                {/* Floating Micro-UI Pill */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 border border-slate-200 shadow-xs flex items-center gap-1.5">
                  <span className="text-xs">{moment.overlayIcon}</span>
                  <span className="text-[11px] font-bold text-slate-800">{moment.time}</span>
                </div>

                {/* Bottom Overlay Metric */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-slate-900/80 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/10 text-white flex items-center justify-between text-[11px]">
                    <span className="font-medium text-slate-200">{moment.badge}</span>
                    <span className="text-emerald-400 font-bold">Active</span>
                  </div>
                </div>
              </div>

              {/* Concise Narrative */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center bg-white">
                <p className="text-sm font-semibold text-slate-800 leading-snug">
                  {moment.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
