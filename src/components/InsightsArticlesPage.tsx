import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Search,
  BookOpen,
  Clock,
  Calendar,
  User,
  ArrowRight,
  Sparkles,
  Share2,
  X,
  CheckCircle2,
  Bookmark,
  TrendingUp,
  Brain,
  ShieldCheck,
  Activity,
  Heart,
  ChevronRight,
  Filter,
} from 'lucide-react';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: 'Behavioral Neurocoding' | 'Preventive & Longevity' | 'Enterprise & Payers' | 'Biometrics & AI';
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  summary: string;
  keyTakeaways: string[];
  content: string[];
  featured?: boolean;
}

const ARTICLES_DATA: Article[] = [
  {
    id: 'neurocoding-90-day-retention',
    title: 'The 90-Day Retention Curve: Why Human-in-the-Loop Coaching Beats Algorithms Alone',
    subtitle: 'How combining predictive biometric triggers with empathetic certified coaches achieves sustained lifestyle habit change.',
    category: 'Behavioral Neurocoding',
    readTime: '6 min read',
    publishDate: 'October 2026',
    featured: true,
    author: {
      name: 'Vishal Gondal',
      role: 'Founder & CEO, GOQii',
      avatar: 'https://appcdn.goqii.com/storeimg/95221_1781178862.png',
    },
    image: 'https://images.unsplash.com/photo-1480179087180-d9f0ec044897?w=1000&auto=format&fit=crop&q=80',
    summary: 'Most wellness apps experience an 85% drop-off by day 30. Discover how behavioral neurocoding and certified human guidance transform momentary willpower into automated daily rituals.',
    keyTakeaways: [
      'Pure algorithmic notifications suffer from cognitive habituation and digital fatigue within 3 to 4 weeks.',
      'Human-in-the-loop coaching provides emotional resonance, accountability, and psychological safety that machines cannot replicate.',
      'Micro-habits calibrated to real-time biometric capacity prevent the boom-and-bust cycle typical of traditional wellness programs.',
      '90 days represents the critical neuroplasticity threshold for sustained preventive routines.',
    ],
    content: [
      'In the digital health sector, engagement metrics often paint a deceptive picture. A user downloading an app and logging steps during their first week is easily mistaken for a user whose health trajectory has genuinely shifted. Yet industry-wide data reveals a harsh reality: over 80% of standalone wellness app users abandon engagement before reaching day 30.',
      'Why does traditional digital health fail so reliably? The root cause is psychological: algorithms excel at pattern detection, but fail at empathy. When an automated notification tells a sleep-deprived, stressed executive to "Hit 10,000 steps today," it creates friction, guilt, and eventually app silencing. It fails to account for human context.',
      'At GOQii, our decade of experience spanning millions of tracked users demonstrated that lasting habit formation requires Behavioral Neurocoding: a closed-loop sequence that pairs predictive biometric detection with personalized human accountability. Our ALIVE O.S. detects recovery baseline shifts (such as a drop in HRV or fragmented REM sleep) and immediately briefs the member’s dedicated certified coach.',
      'Instead of an impersonal notification, the member receives a tailored, empathetic message from Coach Maya: "I noticed your sleep was disrupted last night. Let’s dial back intense cardio and prioritize a restorative 20-minute walk and hydration." This contextual calibration creates psychological safety and removes failure dread.',
      'By breaking goals down into achievable micro-actions and validating daily streaks with positive reinforcement, we guide members past the critical 90-day neuroplasticity window. At that point, movement, nutrition consciousness, and stress regulation cease being chores—they become automated daily habits.',
    ],
  },
  {
    id: 'longevity-precision-metabolic-health',
    title: 'Precision Longevity: Moving Beyond Chronological Age with Multimodal Biometrics',
    subtitle: 'Clinical perspectives on how continuous glucose, HRV, and sleep staging reveal biological resilience years before diagnostic lab markers spike.',
    category: 'Preventive & Longevity',
    readTime: '8 min read',
    publishDate: 'September 2026',
    author: {
      name: 'Dr. Christine Li',
      role: 'VP Healthcare Strategy & Longevity Advisory Board',
      avatar: 'https://appcdn.goqii.com/storeimg/28916_1781259772.png',
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&auto=format&fit=crop&q=80',
    summary: 'Standard annual blood tests offer only a snapshot in time. Learn how continuous passive telemetry provides the dynamic window needed to optimize healthspan and biological age.',
    keyTakeaways: [
      'Chronological age is a fixed metric; biological age fluctuates based on metabolic stability and recovery reserve.',
      'Heart Rate Variability (HRV) serves as a sensitive early warning system for systemic inflammation and autonomic balance.',
      'Combining passive sensor data with structured coaching intervention closes the gap between clinical intent and patient action.',
    ],
    content: [
      'Modern medicine has traditionally operated on an episodic, reactive paradigm. A patient visits their physician once a year, undergoes fasting lipid and glucose panels, and is told they are either within standard reference ranges or in pre-disease territory. The challenge with this model is that metabolic dysregulation begins years, sometimes decades, before fasting blood markers flag an alert.',
      'Healthy longevity—maximizing healthspan in parallel with lifespan—demands a fundamental paradigm shift from static snapshots to dynamic longitudinal streams. When we track continuous biometric telemetry, we see the body’s real-time autonomic stress response, vascular stiffness trends, and glycemic volatility in response to specific meals and circadian interruptions.',
      'Within GOQii’s ALIVE O.S., we synthesize nocturnal heart rate dip, resting respiratory rate, continuous glucose telemetry, and sleep architecture into a unified Health Index. When biometric drift is detected early, non-pharmacological lifestyle interventions—such as adjusting meal timing, evening light exposure, or aerobic zone training—can reverse metabolic momentum before pathology takes root.',
    ],
  },
  {
    id: 'enterprise-wellness-roi-payers',
    title: 'From Absenteeism to Vitality: Measuring Real Economic Value in Workforce Health',
    subtitle: 'Why self-insured employers and health plans are retiring generic annual wellness points in favor of verified outcome models.',
    category: 'Enterprise & Payers',
    readTime: '7 min read',
    publishDate: 'August 2026',
    author: {
      name: 'Piyush Karnani',
      role: 'Chief Business Officer, GOQii',
      avatar: 'https://appcdn.goqii.com/storeimg/51996_1781265652.png',
    },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80',
    summary: 'Traditional corporate wellness portals average under 18% voluntary engagement. Examine the verified economic case for human-centered preventive benefits that reduce avoidable claims.',
    keyTakeaways: [
      'Generic corporate wellness platforms fail because they treat employees as uniform demographics rather than individual lifestyle journeys.',
      'Sustained engagement of 60%+ in chronic disease prevention correlates with a measurable reduction in emergency room visits and avoidable specialist claims.',
      'Integrating gamified rewards with dedicated 1-on-1 coaching yields 3.2x higher program completion rates.',
    ],
    content: [
      'Chief Human Resources Officers and Benefits Leaders face an ongoing frustration: despite substantial budgets invested in corporate wellness software, participation remains stubbornly low, often hovering in the 15% to 20% range—typically consisting of employees who were already active runners or gym enthusiasts.',
      'Meanwhile, the population driving 80% of employer health plan claims—those managing early metabolic strain, hypertension, and chronic workplace burnout—remain unengaged. Generic questionnaires and mandatory health risk assessments (HRAs) simply do not motivate lifestyle changes.',
      'The modern enterprise requires an approach that meets employees where they are. In cohort studies across 5,000+ participating employees, GOQii’s personalized coaching and adaptive micro-goals achieved a 78% 90-day active retention rate. Employees receive compassionate, private guidance from certified nutritionists and lifestyle coaches, supported by company-wide voluntary team wellness challenges.',
      'For self-insured employers, the financial return manifests in reduced absenteeism, increased presenteeism, and documented drops in lifestyle-related claims within 12 to 18 months.',
    ],
  },
  {
    id: 'integrative-coaching-metabolism',
    title: 'The Five Pillars of Cellular Vitality: An Integrative Medicine Protocol',
    subtitle: 'Clinical insights from treating over 20,000 patients across metabolic conditions, autoimmune recovery, and lifestyle reversal.',
    category: 'Preventive & Longevity',
    readTime: '5 min read',
    publishDate: 'July 2026',
    author: {
      name: 'Luke Coutinho',
      role: 'Co-Founder & Head Nutritionist, GOQii',
      avatar: 'https://appcdn.goqii.com/storeimg/66935_1781259927.png',
    },
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1000&auto=format&fit=crop&q=80',
    summary: 'True metabolic health is never about extreme diets or punishing workouts. Explore the clinical balance between Cellular Nutrition, Restorative Sleep, Adequate Exercise, Emotional Detox, and Spirit.',
    keyTakeaways: [
      'Metabolism is controlled by hormone signaling, circadian rhythm, and gut integrity rather than raw caloric math.',
      'Chronic unaddressed emotional stress elevates cortisol and sabotages insulin sensitivity regardless of diet.',
      'Consistency in modest, sustainable daily habits always outperforms short-term extreme biohacking.',
    ],
    content: [
      'In today’s hyper-commercialized wellness landscape, people are inundated with conflicting advice: ketogenic protocols, prolonged fasting, high-intensity workouts, and an endless array of synthetic supplements. Yet chronic fatigue, insulin resistance, and autoimmune complaints continue to rise at unprecedented rates.',
      'Throughout my clinical work with tens of thousands of patients across the globe, the foundational truth has always remained simple: healing and preventive longevity require balance across five fundamental pillars.',
      'First is Cellular Nutrition—eating whole, unadulterated foods that nourish mitochondria and preserve the gut microbiome. Second is Adequate Exercise, which focuses on functional mobility and zone 2 cardiovascular capacity rather than chronic overtraining. Third is Quality Sleep, where cellular repair, lymphatic brain clearance, and hormonal recalibration occur.',
      'Fourth is Emotional Detox—the conscious process of recognizing chronic stress, setting boundaries, and releasing toxic emotional loops that keep the sympathetic nervous system on high alert. And fifth is Spirit—finding purpose, connection, and peace in daily life.',
      'When these five elements work in harmony, the body’s innate homeostatic mechanisms take over, leading to sustainable vitality.',
    ],
  },
  {
    id: 'connected-devices-telemetry-privacy',
    title: 'Continuous Biometric Ingestion & Data Sovereignty in Modern Digital Health',
    subtitle: 'Architecting patient-controlled privacy, TLS 1.3 cryptography, and multi-sensor normalization for preventive care ecosystems.',
    category: 'Biometrics & AI',
    readTime: '7 min read',
    publishDate: 'June 2026',
    author: {
      name: 'Sachin Janghel',
      role: 'Co-Founder & CTO, GOQii',
      avatar: 'https://appcdn.goqii.com/storeimg/40238_1781259761.png',
    },
    image: 'https://images.unsplash.com/photo-1510519138195-068d82f8d48d?w=1000&auto=format&fit=crop&q=80',
    summary: 'How ALIVE O.S. normalizes data across 400+ wearables and health sensors while maintaining rigorous zero-knowledge user consent and strict HIPAA/GDPR alignment.',
    keyTakeaways: [
      'Multi-sensor normalization requires filtering noise artifacts from optical PPG and accelerometer feeds.',
      'Data sovereignty must belong completely to the individual: zero selling, zero ad tracking, and complete exportability.',
      'End-to-end cryptographic encryption protects member telemetry both in transit and at rest.',
    ],
    content: [
      'One of the greatest technical hurdles in digital health is data fragmentation. A member might wear an Apple Watch by day, track sleep with an Oura ring at night, measure fasting glucose via an Abbott CGM, and record blood pressure on an Omron cuff. Each sensor communicates via distinct protocols, sampling rates, and proprietary data schemas.',
      'Within GOQii, the ALIVE O.S. telemetry ingestion engine resolves this complexity by normalizing asynchronous biometric streams into standardized time-series baselines. We apply real-time algorithmic smoothing to eliminate motion artifacts from optical photoplethysmography (PPG) while preserving genuine physiological variations like sudden tachycardia or nocturnal desaturations.',
      'Equally important is our uncompromising commitment to data ethics. Biometric health data is deeply personal. Our architecture is built upon Consent-First vaults: health telemetry is strictly segregated, encrypted via AES-256 and TLS 1.3, and never monetized or shared with third-party advertisers.',
    ],
  },
  {
    id: 'preventative-health-super-partnerships',
    title: 'Transforming NHS Primary Care: Population Health Super-Partnerships at Scale',
    subtitle: 'How primary care super-partnerships are bridging clinical visits with continuous remote lifestyle coaching in the UK.',
    category: 'Enterprise & Payers',
    readTime: '6 min read',
    publishDate: 'May 2026',
    author: {
      name: 'Vincent Sai',
      role: 'CEO & Partner, Modality Partnership (UK) & GOQii Advisory Board',
      avatar: 'https://appcdn.goqii.com/storeimg/91844_1781251940.png',
    },
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&auto=format&fit=crop&q=80',
    summary: 'Examine how integrating certified remote health coaching into general practice super-partnerships eases clinical burdens and supports patients managing long-term chronic conditions.',
    keyTakeaways: [
      'Primary care physicians face severe time constraints during standard 10-minute clinical encounters.',
      'Remote digital coaching provides continuous between-visit touchpoints that reinforce clinical directives.',
      'Empowering patients with actionable habit tracking improves medication compliance and lifestyle self-efficacy.',
    ],
    content: [
      'General practice across the United Kingdom and internationally is confronting unprecedented demand. With ageing populations and rising multimorbidity, primary care physicians often find themselves constrained by 10-minute appointment slots, barely sufficient to review acute symptoms and adjust medications—let alone unpack complex lifestyle behaviors like nutrition, movement, and sleep.',
      'At Modality Partnership, we recognized that supporting patients between clinical visits was essential to sustainable healthcare. By partnering with GOQii, we created a model where patients with hypertension, pre-diabetes, or elevated cardiovascular risk receive continuous support from certified health coaches.',
      'The coach acts as an empathetic bridge: reviewing daily vitals, encouraging micro-habits, and escalating concerns to clinicians when biometrics deviate from target ranges. This symbiotic relationship reduces avoidable emergency appointments while providing patients with the daily encouragement they need.',
    ],
  },
];

interface InsightsArticlesPageProps {
  onBack: () => void;
  onNavigateToContact?: () => void;
  onOpenPartnerModal?: () => void;
}

export default function InsightsArticlesPage({
  onBack,
  onNavigateToContact,
  onOpenPartnerModal,
}: InsightsArticlesPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = ['All', 'Behavioral Neurocoding', 'Preventive & Longevity', 'Enterprise & Payers', 'Biometrics & AI'];

  const filteredArticles = useMemo(() => {
    return ARTICLES_DATA.filter((article) => {
      const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.subtitle.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        article.author.name.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredArticle = useMemo(() => {
    return ARTICLES_DATA.find((a) => a.featured) || ARTICLES_DATA[0];
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <div
      className="w-full bg-[#f8fafc] text-slate-900 selection:bg-[#f05a28]/20 min-h-screen pt-4 sm:pt-6"
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      {/* ── Breadcrumb Navigation ── */}
      <div className="bg-white border-y border-slate-100/90 shadow-2xs mb-8 sm:mb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-600 hover:text-[#f05a28] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-slate-500 group-hover:text-[#f05a28]" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <span>Resources</span>
            <span>/</span>
            <span className="text-slate-700 font-semibold">Insights &amp; Articles</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* ── Page Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-[#f05a28] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>KNOWLEDGE &amp; EVIDENCE BASE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            Insights, Research &amp; <span className="text-[#f05a28]">Perspectives.</span>
          </h1>

          <div className="w-12 h-1 bg-[#f05a28] rounded-full mx-auto my-4" />

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Explore peer-reviewed methodologies, behavioral neurocoding research, longevity protocols, and clinical perspectives on preventive health transformation from the GOQii team and scientific advisory board.
          </p>
        </div>

        {/* ── Featured Article Spotlight ── */}
        {selectedCategory === 'All' && !searchQuery && featuredArticle && (
          <div className="mb-14 bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden group hover:shadow-md transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Photo Hero */}
              <div className="lg:col-span-6 relative min-h-[260px] sm:min-h-[340px] bg-slate-100 overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#f05a28] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Featured Research
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-medium">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#f05a28]" />
                    <span>{featuredArticle.publishDate}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug mb-3">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {featuredArticle.summary}
                  </p>

                  {/* Author Byline */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mb-6">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{featuredArticle.author.name}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{featuredArticle.author.role}</div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveArticle(featuredArticle)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#f05a28] hover:bg-[#d94e1f] transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2 cursor-pointer self-start"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── Search & Filter Controls ── */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#0B132B] text-white shadow-xs'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/70'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles or authors..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200/90 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#f05a28] focus:ring-1 focus:ring-orange-500/20 bg-slate-50/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ── Articles Grid ── */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 p-8">
            <BookOpen className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No articles found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
              We couldn't find any articles matching "{searchQuery}". Try selecting another category or clear your search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-5 py-2 rounded-full text-xs font-bold text-white bg-[#0B132B] hover:bg-slate-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Photo Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={article.image}
                      alt={article.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent pointer-events-none" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-slate-800 shadow-2xs uppercase tracking-wider">
                      {article.category}
                    </span>

                    <span className="absolute bottom-3 right-3 text-[10px] font-semibold text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-400 mb-2">
                      <Calendar className="w-3 h-3 text-[#f05a28]" />
                      <span>{article.publishDate}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug mb-2 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal line-clamp-3 mb-4">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Author Card Footer */}
                <div className="px-5 sm:px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      referrerPolicy="no-referrer"
                      className="w-7 h-7 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <div className="text-[11px] font-bold text-slate-800 truncate max-w-[140px]">
                        {article.author.name}
                      </div>
                      <div className="text-[9.5px] text-slate-400 font-medium truncate max-w-[140px]">
                        {article.author.role.split('—')[0]}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-[#f05a28] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Read</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Newsletter & Enterprise Bridge ── */}
        <div className="mt-16 bg-gradient-to-br from-[#0B192C] via-[#0E223D] to-[#121E36] rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#f05a28]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs font-bold tracking-widest text-[#f05a28] uppercase mb-2">
              PREVENTIVE HEALTH INTELLIGENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mb-3">
              Stay Ahead of Health Trends.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mb-6">
              Subscribe to the GOQii Monthly Research Digest for clinical insights, longevity protocols, and behavioral health transformation studies.
            </p>

            {newsletterSubscribed ? (
              <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-2xl px-6 py-4 text-emerald-300 text-xs sm:text-sm font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>Thank you for subscribing! You will receive our next quarterly clinical digest.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your professional email..."
                  className="w-full px-4 py-3 rounded-full text-xs sm:text-sm bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-[#f05a28] backdrop-blur-xs"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-[#f05a28] hover:bg-[#d94e1f] transition-all shadow-md shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <button
                onClick={onOpenPartnerModal}
                className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 font-semibold"
              >
                <span>Partner with GOQii</span>
                <span>→</span>
              </button>
              <span className="text-white/20">•</span>
              <button
                onClick={onNavigateToContact}
                className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1 font-semibold"
              >
                <span>Contact Editorial Team</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Interactive Article Reader Modal ── */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveArticle(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-9 shadow-2xl border border-slate-100 relative max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {/* Top Navigation & Close */}
            <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-orange-50 border border-orange-100 text-[#f05a28] text-[10.5px] font-bold uppercase tracking-wider">
                  {activeArticle.category}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs font-semibold text-slate-500">{activeArticle.readTime}</span>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-snug mb-3">
              {activeArticle.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
              {activeArticle.subtitle}
            </p>

            {/* Author Profile */}
            <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <img
                  src={activeArticle.author.avatar}
                  alt={activeArticle.author.name}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-slate-200"
                />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">{activeArticle.author.name}</div>
                  <div className="text-[11px] text-slate-500">{activeArticle.author.role}</div>
                </div>
              </div>
              <div className="text-[11px] text-slate-400 font-medium">
                Published {activeArticle.publishDate}
              </div>
            </div>

            {/* Article Image */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Takeaways Callout Box */}
            <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-5 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider mb-3">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Executive Summary &amp; Key Takeaways</span>
              </div>
              <ul className="space-y-2">
                {activeArticle.keyTakeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Text Paragraphs */}
            <div className="space-y-5 text-sm sm:text-[15px] text-slate-700 leading-relaxed font-normal">
              {activeArticle.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Footer Actions */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                ← Back to All Articles
              </button>

              {onOpenPartnerModal && (
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenPartnerModal();
                  }}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#f05a28] hover:bg-[#d94e1f] transition-all shadow-md cursor-pointer"
                >
                  Discuss Enterprise Research
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
