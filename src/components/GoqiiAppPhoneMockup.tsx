interface GoqiiAppPhoneMockupProps {
  className?: string
  scale?: number
}

export default function GoqiiAppPhoneMockup({ className = '', scale = 1 }: GoqiiAppPhoneMockupProps) {
  const ethanAvatar = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80'
  const doctorAvatar = 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&auto=format&fit=crop&q=80'

  return (
    <div
      className={`relative rounded-[48px] bg-slate-900 p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.38)] border-4 border-slate-800 select-none ${className}`}
      style={{ transform: scale !== 1 ? `scale(${scale})` : undefined, transformOrigin: 'top center' }}
    >
      {/* Outer Phone Bezel Shine */}
      <div className="relative w-full h-full rounded-[38px] bg-white overflow-hidden border border-slate-200/80 shadow-inner flex flex-col justify-between">
        
        {/* ── 1. PHONE TOP BAR & DYNAMIC ISLAND ── */}
        <div className="relative bg-white pt-2.5 px-4 pb-1 z-30">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-40 flex items-center justify-end pr-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-indigo-950" />
            </div>
          </div>

          {/* Clean US iPhone Status Bar */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-900">
            {/* Left: Standard Time 9:41 */}
            <div className="flex items-center gap-1">
              <span className="font-bold text-[11px] tracking-tight">9:41</span>
            </div>

            {/* Right: US 5G, Cellular & Battery */}
            <div className="flex items-center gap-1.5 text-[9px] text-slate-700 font-medium">
              <span className="text-[8px] font-black tracking-tight text-slate-800">5G</span>
              {/* Cellular Signal Bars */}
              <svg className="w-3 h-2.5 text-slate-800" viewBox="0 0 12 10" fill="currentColor">
                <rect x="0" y="7" width="2" height="3" rx="0.5" />
                <rect x="3" y="5" width="2" height="5" rx="0.5" />
                <rect x="6" y="3" width="2" height="7" rx="0.5" />
                <rect x="9" y="1" width="2" height="9" rx="0.5" />
              </svg>
              {/* Wi-Fi Icon */}
              <svg className="w-3 h-2.5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 18.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              </svg>
              {/* Battery with 98% charge */}
              <div className="flex items-center">
                <div className="w-5 h-2.5 border border-slate-700 rounded-xs flex items-center justify-center text-[7px] font-bold text-slate-800 px-0.5">
                  98
                </div>
                <div className="w-0.5 h-1 bg-slate-700 rounded-r-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. APP SCROLLABLE CONTENT AREA ── */}
        <div className="flex-1 overflow-y-auto px-3.5 pt-1.5 pb-2 scrollbar-none bg-[#fbfcfd]">
          
          {/* Header Row: User Info & Health Coach / Device Status */}
          <div className="flex items-center justify-between pb-2.5">
            {/* User Avatar + Member Status */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-100 shadow-2xs flex-shrink-0">
                <img
                  src={ethanAvatar}
                  alt="Ethan Miller"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="text-[13px] font-bold text-slate-900 leading-tight">Ethan Miller</h4>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-blue-50 border border-blue-200 text-[8px] font-extrabold text-[#1d4ed8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 inline-block" />
                    <span>Active Member</span>
                  </div>
                  <span className="text-[8px] font-medium text-slate-500">
                    Proactive Care
                  </span>
                </div>
              </div>
            </div>

            {/* Coach, Care Team, Smartwatch Icons */}
            <div className="flex items-center gap-2">
              {/* Dedicated Health Coach */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full overflow-hidden border border-emerald-200 shadow-2xs relative">
                  <img
                    src={doctorAvatar}
                    alt="Health Coach Dr. Jenkins"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full border border-white" />
                </div>
                <span className="text-[7.5px] text-slate-600 font-medium mt-0.5">Coach</span>
              </div>

              {/* Care Team Nudge */}
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 text-xs shadow-2xs">
                  💬
                </div>
                <span className="text-[7.5px] text-slate-600 font-medium mt-0.5">Chat</span>
              </div>

              {/* Smartwatch Sync */}
              <div className="w-7 h-7 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-[#0284c7] text-xs shadow-2xs" title="Smartwatch Connected">
                ⌚
              </div>
            </div>
          </div>

          {/* Date Selector Row */}
          <div className="flex items-center justify-between py-1.5 px-1 mb-2">
            <div className="text-slate-600 text-xs">📅</div>
            <span className="text-xs font-semibold text-slate-400">8</span>
            <div className="px-3 py-1 rounded-full bg-[#18263f] text-white text-[11px] font-bold shadow-xs">
              Today, 9 Jun
            </div>
            <span className="text-xs font-semibold text-slate-400">10</span>
            <span className="text-xs font-semibold text-slate-400">11</span>
          </div>

          {/* US-Localized Daily Health Overview & Progress Card (Replaces Indian 5 LAC / GOQii Age) */}
          <div className="rounded-2xl bg-gradient-to-br from-[#f0f6ff] via-[#f8fafc] to-[#eef4fd] p-2.5 border border-blue-100/90 shadow-2xs mb-2.5">
            <div className="flex items-center justify-between gap-2">
              {/* Member Focus & Vitality Score */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[7.5px] font-extrabold tracking-wider uppercase">
                    Daily Vitality
                  </span>
                  <span className="text-[8.5px] text-emerald-700 font-bold flex items-center gap-0.5">
                    <span>▲</span> 88 / 100 Optimal
                  </span>
                </div>
                <h5 className="text-[11.5px] font-bold text-slate-900 leading-tight">
                  Cardio &amp; Sleep Recovery
                </h5>
                <p className="text-[8px] text-slate-600 leading-tight mt-0.5">
                  14-day streak on target &bull; Guided by Coach Sarah
                </p>
              </div>

              {/* Weekly Habit Adherence Badge */}
              <div className="bg-[#1e3a8a] text-white rounded-xl p-2 flex flex-col items-center justify-center text-center shadow-xs flex-shrink-0 min-w-[72px]">
                <span className="text-[7.5px] font-bold uppercase tracking-wider text-blue-200">
                  Adherence
                </span>
                <span className="text-sm font-extrabold leading-tight text-white my-0.5">
                  94%
                </span>
                <span className="text-[7px] text-emerald-300 font-semibold">
                  On Target
                </span>
              </div>
            </div>

            {/* Proactive Coaching Nudge Banner */}
            <div className="mt-2 pt-1.5 border-t border-blue-100/80 flex items-center justify-between text-[8px] text-slate-600">
              <span className="flex items-center gap-1">
                <span className="text-amber-500 font-bold">💡</span>
                <span>Resting heart rate down 4 bpm this week</span>
              </span>
              <span className="font-semibold text-blue-700">Check-in 3 PM</span>
            </div>
          </div>

          {/* Vitals Grid (2 rows of 4 cards = 8 metrics, localized in US units) */}
          <div className="grid grid-cols-4 gap-1.5 mb-1.5">
            {/* Heart Rate */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Heart Rate</span>
              <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-[10px] my-0.5">
                ❤️
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">72</span>
              <span className="text-[7px] text-slate-400 leading-none">bpm</span>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Activity</span>
              <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-[10px] my-0.5">
                🔥
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">420</span>
              <span className="text-[7px] text-slate-400 leading-none">kcal</span>
            </div>

            {/* Calories */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Calories</span>
              <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center text-[10px] my-0.5">
                ⚡
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">1,250</span>
              <span className="text-[7px] text-slate-400 leading-none">kcal</span>
            </div>

            {/* Body Weight (US localized in lbs) */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Body Weight</span>
              <div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center text-[10px] my-0.5">
                ⚖️
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">168</span>
              <span className="text-[7px] text-slate-400 leading-none">lbs</span>
            </div>

            {/* Body Fat */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Body Fat</span>
              <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-[9px] font-bold my-0.5">
                %
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">18.6</span>
              <span className="text-[7px] text-slate-400 leading-none">%</span>
            </div>

            {/* Muscle Mass (US localized in lbs) */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Muscle Mass</span>
              <div className="w-5 h-5 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center text-[10px] my-0.5">
                💪
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">118</span>
              <span className="text-[7px] text-slate-400 leading-none">lbs</span>
            </div>

            {/* BMI */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">BMI</span>
              <div className="w-5 h-5 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center text-[10px] my-0.5">
                🧍
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">22.4</span>
              <span className="text-[7px] text-emerald-600 font-semibold leading-none">Normal</span>
            </div>

            {/* Resting HR */}
            <div className="bg-white rounded-xl p-1.5 border border-slate-100/90 shadow-[0_1px_4px_rgba(0,0,0,0.03)] text-center flex flex-col items-center justify-between">
              <span className="text-[7.5px] text-slate-500 font-medium leading-none mb-1">Resting HR</span>
              <div className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center text-[10px] my-0.5">
                💤
              </div>
              <span className="text-xs font-bold text-slate-900 leading-tight">56</span>
              <span className="text-[7px] text-slate-400 leading-none">bpm</span>
            </div>
          </div>

          {/* Timestamp */}
          <div className="flex items-center justify-center gap-1 text-[8.5px] text-slate-400 my-1">
            <span>🕒</span>
            <span>Updated at 09:41 AM &bull; Illustrative sample data</span>
          </div>

          {/* Activity & Health Trackers (2x2 grid: Steps, Hydration, Sleep, Habits) */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            {/* Steps */}
            <div className="bg-white rounded-2xl p-2.5 border border-slate-100/90 shadow-2xs flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-700 self-start">Steps</span>
              <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="4" fill="none" />
                  <circle cx="32" cy="32" r="26" stroke="#f59e0b" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="45" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-amber-500 text-sm">
                  👣
                </div>
              </div>
              <span className="text-[9px] font-medium text-slate-600">
                <span className="font-bold text-slate-900">7,240</span> of 10,000
              </span>
            </div>

            {/* Hydration (US fluid ounces) */}
            <div className="bg-white rounded-2xl p-2.5 border border-slate-100/90 shadow-2xs flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-700 self-start">Hydration</span>
              <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="4" fill="none" />
                  <circle cx="32" cy="32" r="26" stroke="#0ea5e9" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="50" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-sky-500 text-sm">
                  💧
                </div>
              </div>
              <span className="text-[9px] font-medium text-slate-600">
                <span className="font-bold text-slate-900">64 oz</span> of 96 oz
              </span>
            </div>

            {/* Sleep Trends */}
            <div className="bg-white rounded-2xl p-2.5 border border-slate-100/90 shadow-2xs flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-700 self-start">Sleep</span>
              <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="4" fill="none" />
                  <circle cx="32" cy="32" r="26" stroke="#6366f1" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="35" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-indigo-500 text-sm">
                  🌙
                </div>
              </div>
              <span className="text-[9px] font-medium text-slate-600">
                <span className="font-bold text-slate-900">7h 45m</span> logged &bull; Rested
              </span>
            </div>

            {/* Habits & Nutrition */}
            <div className="bg-white rounded-2xl p-2.5 border border-slate-100/90 shadow-2xs flex flex-col items-center">
              <span className="text-[9px] font-bold text-slate-700 self-start">Habits</span>
              <div className="relative w-16 h-16 my-1 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="26" stroke="#f1f5f9" strokeWidth="4" fill="none" />
                  <circle cx="32" cy="32" r="26" stroke="#10b981" strokeWidth="4" fill="none" strokeDasharray="163" strokeDashoffset="40" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-emerald-500 text-sm">
                  ✓
                </div>
              </div>
              <span className="text-[9px] font-medium text-slate-600">
                <span className="font-bold text-slate-900">4 of 5</span> habits done
              </span>
            </div>
          </div>

        </div>

        {/* ── 3. BOTTOM APP NAVIGATION BAR (Replaces Arena & Store with Activity, Coaching, Insights) ── */}
        <div className="bg-white/95 backdrop-blur-md border-t border-slate-100 px-3 pt-1.5 pb-1 z-30">
          <div className="flex items-center justify-between text-slate-400">
            {/* Home */}
            <div className="flex flex-col items-center text-slate-900">
              <span className="text-xs">🏠</span>
              <span className="text-[7.5px] font-bold mt-0.5">Home</span>
              <div className="w-4 h-0.5 bg-slate-900 rounded-full mt-0.5" />
            </div>

            {/* Activity */}
            <div className="flex flex-col items-center hover:text-slate-600 cursor-pointer">
              <span className="text-xs">🏃</span>
              <span className="text-[7.5px] font-medium mt-0.5">Activity</span>
            </div>

            {/* Center + Action Button */}
            <div className="relative -top-2">
              <div className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-800 text-base font-light shadow-md flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform">
                +
              </div>
            </div>

            {/* Coaching */}
            <div className="flex flex-col items-center hover:text-slate-600 cursor-pointer">
              <span className="text-xs">💬</span>
              <span className="text-[7.5px] font-medium mt-0.5">Coaching</span>
            </div>

            {/* Insights */}
            <div className="flex flex-col items-center hover:text-slate-600 cursor-pointer">
              <span className="text-xs">📊</span>
              <span className="text-[7.5px] font-medium mt-0.5">Insights</span>
            </div>
          </div>

          {/* iPhone Home Swipe Bar */}
          <div className="pt-2 pb-0.5 flex justify-center">
            <div className="w-28 h-1 bg-black rounded-full" />
          </div>
        </div>

      </div>
    </div>
  )
}
