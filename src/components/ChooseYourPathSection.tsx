interface ChooseYourPathProps {
  onOpenPartnerModal: () => void
}

export default function ChooseYourPathSection({ onOpenPartnerModal }: ChooseYourPathProps) {
  const scrollToSolutions = () => {
    const el = document.getElementById('how-it-works') || document.getElementById('introducing-goqii')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="choose-path"
      className="w-full bg-[#FAFBFD] py-16 sm:py-24 overflow-hidden relative border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase block mb-3">
            CHOOSE YOUR PATH
          </span>
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
            Health is personal. So is your journey.
          </h2>
        </div>

        {/* 2 Large Visual Pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* PATH A — PERSONAL HEALTH */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                alt="Individual building healthier daily habits outdoors"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1 text-xs font-bold text-slate-900 border border-slate-200">
                PATH A • INDIVIDUAL
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Personal Health
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                  Build healthier everyday habits.
                </p>
              </div>

              <button
                onClick={scrollToSolutions}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold text-white bg-[#f05a28] hover:bg-[#d94e1f] transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer text-center inline-flex items-center justify-center gap-2"
              >
                <span>Explore Personal Solutions</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* PATH B — ENTERPRISE HEALTH */}
          <div className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
            <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80"
                alt="Modern workplace collaborating on organizational health engagement"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1 text-xs font-bold text-slate-900 border border-slate-200">
                PATH B • ENTERPRISE
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-white">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Enterprise Health
                </h3>
                <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed mb-6">
                  Connect health engagement with actionable insights.
                </p>
              </div>

              <button
                onClick={onOpenPartnerModal}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all shadow-xs hover:shadow-md active:scale-98 cursor-pointer text-center inline-flex items-center justify-center gap-2"
              >
                <span>Explore Enterprise Solutions</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
