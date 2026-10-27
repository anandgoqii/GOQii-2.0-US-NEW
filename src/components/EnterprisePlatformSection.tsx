import { useState } from 'react'
import {
  Users,
  Activity,
  Heart,
  Brain,
  Shield,
  Layers,
  BarChart3,
  CheckCircle2,
  Download,
  Calendar,
  Sparkles,
  ArrowUpRight,
  TrendingDown,
  TrendingUp,
  Clock,
  Cpu,
  Lock,
  Smartphone
} from 'lucide-react'

export default function EnterprisePlatformSection() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('7d')
  const [activeCohort, setActiveCohort] = useState<'all' | 'cardio' | 'metabolic'>('all')

  const kpiData = {
    '7d': {
      activeMembers: '23,456',
      activeMembersChange: '↑ 12%',
      engagementRate: '84%',
      engagementChange: '↑ 6%',
      riskScore: '2.4',
      riskScoreChange: '↓ 0.4',
      completionRate: '76%',
      completionChange: '↑ 10%',
      donut: { low: 48, mod: 32, high: 20 },
    },
    '30d': {
      activeMembers: '28,910',
      activeMembersChange: '↑ 19%',
      engagementRate: '88%',
      engagementChange: '↑ 9%',
      riskScore: '2.1',
      riskScoreChange: '↓ 0.7',
      completionRate: '82%',
      completionChange: '↑ 14%',
      donut: { low: 54, mod: 30, high: 16 },
    },
    '90d': {
      activeMembers: '34,200',
      activeMembersChange: '↑ 27%',
      engagementRate: '91%',
      engagementChange: '↑ 15%',
      riskScore: '1.8',
      riskScoreChange: '↓ 1.1',
      completionRate: '86%',
      completionChange: '↑ 18%',
      donut: { low: 62, mod: 26, high: 12 },
    },
  }

  const currentMetrics = kpiData[timeRange]

  const capabilities = [
    {
      title: 'AI Intelligence',
      desc: 'Predictive risk synthesis identifies health anomalies before clinical escalation.',
      color: '#10b981',
      bg: 'bg-emerald-50 text-emerald-600 border-emerald-100',
      icon: Brain,
      visual: {
        badge: 'Anomaly Detector',
        metric: '96% Accuracy',
        note: 'Early metabolic trend spotted',
      },
    },
    {
      title: 'Expert Coaching',
      desc: 'Dedicated 1-on-1 human coaching matches empathy with continuous data.',
      color: '#f05a28',
      bg: 'bg-orange-50 text-[#f05a28] border-orange-100',
      icon: Users,
      visual: {
        badge: '1-on-1 Triage',
        metric: '< 15m Response',
        note: 'Coach Maya · MS Dietetics',
      },
    },
    {
      title: 'Population Analytics',
      desc: 'Real-time cohort dashboards track engagement, retention, and clinical impact.',
      color: '#3b82f6',
      bg: 'bg-blue-50 text-blue-600 border-blue-100',
      icon: BarChart3,
      visual: {
        badge: 'Cohort Cohere',
        metric: '88% Active',
        note: 'Automated weekly reports',
      },
    },
    {
      title: 'Health Intelligence',
      desc: 'Multimodal risk scoring brings wearables, diagnostics, and lifestyle together.',
      color: '#8b5cf6',
      bg: 'bg-purple-50 text-purple-600 border-purple-100',
      icon: Heart,
      visual: {
        badge: 'Health Index',
        metric: 'Score: 84 / 100',
        note: 'Low cardiovascular strain',
      },
    },
    {
      title: 'Connected Ecosystem',
      desc: 'Seamless integration with Apple Health, Garmin, CGMs, and clinical EHR feeds.',
      color: '#06b6d4',
      bg: 'bg-cyan-50 text-cyan-600 border-cyan-100',
      icon: Smartphone,
      visual: {
        badge: 'Multi-Device',
        metric: '400+ Devices',
        note: 'Continuous Bluetooth sync',
      },
    },
    {
      title: 'Enterprise Ready',
      desc: 'Enterprise security architecture with HIPAA-aligned safeguards, TLS 1.3, and RBAC.',
      color: '#f59e0b',
      bg: 'bg-amber-50 text-amber-600 border-amber-100',
      icon: Lock,
      visual: {
        badge: 'Security Posture',
        metric: 'AES-256 · TLS 1.3',
        note: 'Granular access audit logs',
      },
    },
  ]

  return (
    <section
      id="solutions"
      className="w-full bg-[#F8FAFC] py-16 xl:py-24 relative overflow-hidden"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* Subtle ambient curves and dot background */}
      <div className="absolute -left-20 top-20 w-96 h-96 pointer-events-none opacity-20">
        <svg className="w-full h-full text-slate-300" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="100" fill="#f05a28" fillOpacity="0.05" />
        </svg>
      </div>

      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Top Stage: Left Copy & Stats + Right Enterprise Dashboard Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center mb-14 lg:mb-18">

          {/* Left Column: Heading + Subtitle + 3 Value Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-widest text-[#f05a28] uppercase block mb-3">
              UNIFIED ENTERPRISE PLATFORM
            </span>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#0B192C] tracking-tight leading-tight">
              Designed to Adapt.
            </h2>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-[#f05a28] tracking-tight leading-tight mt-1 sm:mt-1.5">
              Built to Deliver.
            </h2>

            {/* Accent Line */}
            <div className="w-10 h-1 bg-emerald-500 rounded-full my-4" />

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg mb-8">
              From engagement to outcomes, GOQii unites algorithmic intelligence, certified coaching, biometric telemetry, and population health analytics in one platform.
            </p>

            {/* 3 Value Pillars Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg">
              
              {/* Pillar 1 */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2 shadow-2xs border border-emerald-100/80">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base font-bold text-emerald-700 leading-snug">
                  Population Scale
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  Enterprise Health
                </span>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2 shadow-2xs border border-blue-100/80">
                  <Activity className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base font-bold text-blue-700 leading-snug">
                  Satisfaction
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  High Engagement
                </span>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2 shadow-2xs border border-purple-100/80">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-sm sm:text-base font-bold text-purple-700 leading-snug">
                  Dynamic Habit
                </span>
                <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                  Sustained Retention
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive GOQii Enterprise Dashboard Mockup */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-100 relative">

              {/* Top Bar of Dashboard */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <div className="grid grid-cols-2 gap-0.5 w-4 h-4 flex-shrink-0">
                    <div className="bg-[#f05a28] rounded-[1px]" />
                    <div className="bg-[#2ecc71] rounded-[1px]" />
                    <div className="bg-[#00a4ef] rounded-[1px]" />
                    <div className="bg-[#ffb900] rounded-[1px]" />
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900">
                    GOQii Enterprise Console
                  </span>
                  <span className="text-[9.5px] font-bold text-slate-500 bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Interactive Preview
                  </span>
                </div>

                {/* Time range switcher */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-[11px]">
                  <button
                    onClick={() => setTimeRange('7d')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      timeRange === '7d' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    7 Days
                  </button>
                  <button
                    onClick={() => setTimeRange('30d')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      timeRange === '30d' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    30 Days
                  </button>
                  <button
                    onClick={() => setTimeRange('90d')}
                    className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                      timeRange === '90d' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    90 Days
                  </button>
                </div>
              </div>

              {/* Dashboard Workspace */}
              <div className="pt-4 flex flex-col gap-3.5">
                
                {/* 4 KPI Cards Row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                  
                  {/* KPI 1 */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-100 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Active Members</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-base sm:text-lg font-black text-slate-900">{currentMetrics.activeMembers}</span>
                      <span className="text-[10px] font-bold text-emerald-600">{currentMetrics.activeMembersChange}</span>
                    </div>
                    <span className="text-[9px] text-slate-400 mt-0.5">Cohort enrollment</span>
                  </div>

                  {/* KPI 2 */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-100 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Engagement Rate</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-base sm:text-lg font-black text-slate-900">{currentMetrics.engagementRate}</span>
                      <span className="text-[10px] font-bold text-blue-600">{currentMetrics.engagementChange}</span>
                    </div>
                    <span className="text-[9px] text-slate-400 mt-0.5">Weekly touchpoints</span>
                  </div>

                  {/* KPI 3 */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-100 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Risk Index</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-base sm:text-lg font-black text-slate-900">{currentMetrics.riskScore}</span>
                      <span className="text-[10px] font-bold text-emerald-600">{currentMetrics.riskScoreChange}</span>
                    </div>
                    <span className="text-[9px] text-slate-400 mt-0.5">Average cohort score</span>
                  </div>

                  {/* KPI 4 */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-3 border border-slate-100 flex flex-col justify-between">
                    <span className="text-[10px] font-bold text-slate-400 uppercase">Habit Retention</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-base sm:text-lg font-black text-slate-900">{currentMetrics.completionRate}</span>
                      <span className="text-[10px] font-bold text-purple-600">{currentMetrics.completionChange}</span>
                    </div>
                    <span className="text-[9px] text-slate-400 mt-0.5">Goal adherence</span>
                  </div>

                </div>

                {/* Middle Charts Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  
                  {/* Visual Chart 1: Donut Distribution */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900">Risk Stratification</span>
                      <span className="text-[10px] text-slate-400 font-mono">Live Sync</span>
                    </div>

                    <div className="flex items-center justify-between gap-3 my-1">
                      <div className="relative w-18 h-18 shrink-0">
                        <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#f87171" strokeWidth="10"
                            strokeDasharray={`${currentMetrics.donut.high * 1.759} 175.9`} strokeDashoffset="0" />
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#fb923c" strokeWidth="10"
                            strokeDasharray={`${currentMetrics.donut.mod * 1.759} 175.9`} strokeDashoffset={`${-currentMetrics.donut.high * 1.759}`} />
                          <circle cx="40" cy="40" r="28" fill="none" stroke="#22c55e" strokeWidth="10"
                            strokeDasharray={`${currentMetrics.donut.low * 1.759} 175.9`} strokeDashoffset={`${-(currentMetrics.donut.high + currentMetrics.donut.mod) * 1.759}`} />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-xs font-black text-slate-900 leading-none">{currentMetrics.donut.low}%</span>
                          <span className="text-[7.5px] font-bold text-slate-400 mt-0.5">Low Risk</span>
                        </div>
                      </div>

                      <div className="flex flex-col gap-1.5 flex-1 text-[10px]">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            Low Risk
                          </span>
                          <span className="font-bold text-slate-900">{currentMetrics.donut.low}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            Moderate Risk
                          </span>
                          <span className="font-bold text-slate-900">{currentMetrics.donut.mod}%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-slate-600 font-medium">
                            <span className="w-2 h-2 rounded-full bg-rose-500" />
                            High Priority
                          </span>
                          <span className="font-bold text-slate-900">{currentMetrics.donut.high}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-emerald-700 font-semibold">
                      <span>✓ High risk population reduced by 8%</span>
                      <span>Trending Positive</span>
                    </div>
                  </div>

                  {/* Visual Chart 2: Top Health Goals */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-3.5 border border-slate-100 flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-900">Cohort Priority Goals</span>
                      <span className="text-[10px] text-blue-600 font-bold">1-on-1 Managed</span>
                    </div>

                    <div className="flex flex-col gap-2 text-[10px]">
                      <div>
                        <div className="flex justify-between font-medium text-slate-700 mb-0.5">
                          <span>Metabolic &amp; Weight Management</span>
                          <span className="font-bold text-slate-900">68%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '68%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between font-medium text-slate-700 mb-0.5">
                          <span>Daily Movement (Zone 2 Cardio)</span>
                          <span className="font-bold text-slate-900">54%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '54%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between font-medium text-slate-700 mb-0.5">
                          <span>Stress &amp; Restorative Sleep</span>
                          <span className="font-bold text-slate-900">46%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '46%' }} />
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] text-slate-500">
                      <span>Assigned to certified clinical coaches</span>
                      <span className="font-semibold text-slate-800">Weekly audits</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════════ */}
        {/* 6 DISTINCT CAPABILITY CARDS WITH MINI VISUALS                      */}
        {/* ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
          {capabilities.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-md hover:border-[#f05a28]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center mb-3 shadow-2xs border transition-transform group-hover:scale-105`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug mb-1">
                    {c.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed font-normal mb-3">
                    {c.desc}
                  </p>
                </div>

                {/* Mini visual widget */}
                <div className="pt-3 border-t border-slate-100 bg-slate-50/70 -mx-1.5 -mb-1.5 p-2 rounded-xl text-[10.5px]">
                  <div className="flex items-center justify-between font-bold text-slate-800 mb-0.5">
                    <span>{c.visual.badge}</span>
                    <span style={{ color: c.color }}>{c.visual.metric}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 block truncate">
                    {c.visual.note}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="flex justify-center">
          <div className="bg-white/95 backdrop-blur-md px-6 sm:px-8 py-3.5 rounded-full border border-slate-200/90 shadow-2xs flex items-center gap-3 sm:gap-4 max-w-2xl text-center sm:text-left">
            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200/80">
              <CheckCircle2 className="w-4.5 h-4.5" />
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
              Empowering organizations to <strong className="text-emerald-700 font-bold">engage more people</strong>, <strong className="text-emerald-700 font-bold">detect risks early</strong>, and achieve measurable outcomes.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
