import finalCtaSunrise from '../assets/images/final_cta_sunrise_1791195019111.jpg'

interface FinalCtaProps {
  onOpenPartnerModal: () => void
}

export default function FinalCtaSection({ onOpenPartnerModal }: FinalCtaProps) {
  const scrollToPersonalSolutions = () => {
    const el = document.getElementById('how-it-works') || document.getElementById('introducing-goqii')
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="final-cta"
      className="w-full relative overflow-hidden py-24 sm:py-32 xl:py-36 text-white border-t border-slate-100"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Full-width authentic lifestyle background */}
      <img
        src={finalCtaSunrise}
        alt="Confident adult walking on a greenway path at sunrise"
        className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
      />

      {/* Subtle green-to-teal and slate overlay for contrast and optimistic mood */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/75 to-teal-950/70" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-xs font-semibold tracking-widest text-teal-300 uppercase block mb-4">
            BEGIN YOUR JOURNEY
          </span>

          <h2 className="text-3xl sm:text-5xl xl:text-6xl font-semibold text-white tracking-tight leading-tight mb-4">
            Your next step starts today.
          </h2>

          <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mb-10">
            Discover a more connected relationship with your health.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={scrollToPersonalSolutions}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-white bg-[#f05a28] hover:bg-[#d94e1f] transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Explore Personal Solutions
            </button>

            <button
              onClick={onOpenPartnerModal}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold text-white bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              Request an Enterprise Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
