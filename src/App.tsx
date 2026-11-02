import { useState, useEffect, useRef } from 'react'
import HeroVisualSection from './components/HeroVisualSection'
import HealthPuzzleSection from './components/HealthPuzzleSection'
import BodyInSilosSection from './components/BodyInSilosSection'
import ConnectedWaySection from './components/ConnectedWaySection'
import DayWithGoqiiSection from './components/DayWithGoqiiSection'
import BehavioralNeurocodingSection from './components/BehavioralNeurocodingSection'
import AliveOsSection from './components/AliveOsSection'
import CaseStudyLayout from './components/CaseStudyLayout'
import OurStorySection from './components/OurStorySection'
import EnterprisePlatformSection from './components/EnterprisePlatformSection'
import EnterpriseSolutionsSection from './components/EnterpriseSolutionsSection'
import OutcomesImpactSection from './components/OutcomesImpactSection'
import FinalCtaSection from './components/FinalCtaSection'
import PartnerWithUsModal from './components/PartnerWithUsModal'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import TermsOfServicePage from './components/TermsOfServicePage'
import TrustCenterPage from './components/TrustCenterPage'
import ContactUsPage from './components/ContactUsPage'
import FaqPage from './components/FaqPage'
import InsightsArticlesPage from './components/InsightsArticlesPage'

const heroPhoto = 'https://appcdn.goqii.com/storeimg/75445_1786343196.jpg'
const heroPhotoMobile = 'https://appcdn.goqii.com/storeimg/53788_1788428746.jpg'
const heroBannerLogo = 'https://appcdn.goqii.com/storeimg/45528_1790592365.png'
const coachAvatar = 'https://images.unsplash.com/photo-1561973027-6bdfea7b3324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=80&h=80&fit=crop&auto=format'
const womanFitnessPhoto = 'https://images.unsplash.com/photo-1480179087180-d9f0ec044897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80'

const partnerPhotos = {
  employers: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  payers: 'https://images.unsplash.com/photo-1686771416282-3888ddaf249b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  providers: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  pharma: 'https://images.unsplash.com/photo-1486825586573-7131f7991bdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
  government: 'https://images.unsplash.com/photo-1594581979864-36977b15d0dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600&q=80',
}
const runnersBg = 'https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1800&q=80'

interface TeamMember {
  num: string
  name: string
  role: string
  tags: string[]
  img: string
  bio: string
  company?: string
  credentials?: string
  highlight?: string
  expertise?: string[]
  showBioLabel?: boolean
}

const leadershipTeam: TeamMember[] = [
  {
    num: '01',
    name: 'Vishal Gondal',
    role: 'Founder & CEO',
    company: 'GOQII INC.',
    tags: ['PREVENTIVE HEALTHCARE', 'AI, TECH & GAMING'],
    img: 'https://appcdn.goqii.com/storeimg/95221_1781178862.png',
    bio: 'A leading global figure at the intersection of healthcare, gaming, and entrepreneurship. As Founder and CEO of GOQii, he has transformed preventive healthcare by integrating AI, technology, and gamification across India, the UK, and the Middle East.\n\nKnown globally as the "Father of the Indian Gaming Industry," his early success with Indiagames culminated in its acquisition by The Walt Disney Company; he subsequently launched nCore Games, creator of FAU-G. Organises Mumbai Hacks for healthcare AI innovation. An avid marathon runner, trekker, and skydiver.',
    credentials: '25+ Years in Tech & Health · Indiagames → Disney · GOQii',
    highlight: 'Pioneered preventive health tech and gamified wellness in India and globally.'
  },
  {
    num: '02',
    name: 'Sachin Janghel',
    role: 'Co-Founder & CTO',
    company: 'GOQII INC.',
    tags: ['AI & HEALTHTECH', 'BLOCKCHAIN / UHT', 'GAMING & IOT'],
    img: 'https://appcdn.goqii.com/storeimg/40238_1781259761.png',
    bio: "The technology brain behind the entire GOQii ecosystem. Sachin co-founded GOQii in 2013 and has spent over a decade building one of the world's most comprehensive AI-driven preventive health platforms — from wearables and IoT devices to blockchain initiatives like the Universal Health Token (UHT).\n\nHis career began with 11 years in game and interactive application development across mobile, online, and social platforms, including as Technology Director at Indiagames, India's #1 gaming company acquired by Disney UTV. At Disney UTV, he then led the build-out of Interactive TV platforms — satellite, digital cable, HITS, and IPTV. At GOQii, he leads AI-powered digital health solutions, remote patient monitoring, clinical workflow automation, and strategic technology partnerships with global insurers and healthcare providers. A football and hockey player who represented his home state at national level tournaments.",
    credentials: 'Co-Founder · 12+ Years Building GOQii · Disney UTV · UHT Core Team',
  },
  {
    num: '03',
    name: 'Abhishek Sharma',
    role: 'Co-Founder & CEO, GOQii UK',
    company: 'GOQII INC.',
    tags: ['BRAND & MARKETING', 'UK MARKET', 'CONSUMER HEALTH'],
    img: 'https://appcdn.goqii.com/storeimg/42684_1781265347.png',
    bio: "Abhishek leads GOQii's UK operations and has been instrumental in building the brand's presence in one of the world's most demanding health markets. He brings over seven years at Nike across India, the USA, and the UK — spanning senior product and consumer roles — along with deep expertise in brand development, product marketing, PR, and social media. As Co-Founder and CMO from 2013, then COO, and now CEO of GOQii UK, he has grown the business from a startup into a recognized preventive health platform. A strong believer in sustainability and social impact, he has collaborated with global non-profits on key social projects. An ardent football fan, travel photographer, and long-distance motorbike rider.",
    credentials: 'Co-Founder · CEO GOQii UK · Nike · IIM Calcutta',
  },
  {
    num: '04',
    name: 'Champ Alreja',
    role: 'Co-Founder & Chief Business Officer',
    company: 'GOQII INC.',
    tags: ['PREVENTIVE HEALTH', 'HEALTH PLATFORM', 'APAC'],
    img: 'https://appcdn.goqii.com/storeimg/29324_1781260039.png',
    bio: "Radical in thought, meticulous in execution. Champ co-founded GOQii in 2014, bringing hardware engineering, behavioral product thinking, and commercial instinct to the company's growth. Before GOQii, he founded HitPlay — a gadget and consumer tech company built from scratch before Flipkart, before Amazon, at 24 with no playbook and no funding. As a product designer and inventor, he built GOQii's first lines of wearables from 2013 — at a time when the only comparable device was the original Fitbit Flex, which had no screen and no real-time feedback. His devices did. His career began as a Sound Engineer, giving him a ground-up understanding of how people interact with technology. He also conceived and built the GOQii Health Rewards Engine — a scientifically designed rewards and retention engine grounded in behavioral economics and game theory, now one of the platform's most distinctive moats. Leads global BD and APAC expansion across Hong Kong, Singapore, and the Asia Pacific. A competitive tennis player who has built health discipline the same way he builds companies — one consistent rep at a time.",
    credentials: 'Co-Founder · Wearables Pioneer · Health Platform & Habit Architect',
  },
  {
    num: '05',
    name: 'Krishna Kumar',
    role: 'Chief Customer Officer',
    company: 'GOQII INC.',
    tags: ['CONSUMER ENGAGEMENT', 'BRAND STRATEGY', 'DIGITAL MARKETING'],
    img: 'https://appcdn.goqii.com/storeimg/55864_1781259937.png',
    bio: "A passion for brands, mountains, and startups is what drives KK. At GOQii, he is Chief Customer Officer and leads overall marketing strategy and consumer engagement — building systems that help people make healthier choices and sustain them over time. His career began in advertising across networks including Publicis, Leo Burnett, and WPP (Mindshare), before he founded Media2win in 2004 — a digital agency that grew into one of India's top digital firms and won multiple industry awards. That brought him to GOQii, where he works at the intersection of technology, data, coaching, and behavioral science. Also a Core Team member at Universal Health Token (UHT), focused on marketing. Outside work, he scales 6,000+ meter peaks in the Himalayas every year and runs multiple marathons — proof that he lives the preventive health philosophy he champions.",
    credentials: 'CCO · Media2win Founder · UHT Core Team · Mindshare / WPP',
  },
  {
    num: '06',
    name: 'Saurabh Joshi',
    role: 'Chief Financial Officer (CFO)',
    company: 'GOQII INC.',
    tags: ['FINANCIAL STRATEGY', 'M&A & GOVERNANCE', 'HEALTHCARE & LIFE SCIENCES'],
    img: 'https://appcdn.goqii.com/storeimg/90986_1786510650.jpg',
    bio: "Saurabh Joshi is the Chief Financial Officer at GOQii, bringing over 20 years of leadership experience in finance, strategy, and business transformation across the healthcare and life sciences sectors.\n\nThroughout his career, he has led finance functions for globally recognized organizations including Lotus Surgicals Pvt. Ltd., Thermo Fisher Scientific, Piramal Healthcare, Siemens Healthcare, and Bharat Serums & Vaccines. His expertise spans financial planning, business scaling, mergers & acquisitions, fundraising, compliance, governance, and strategic growth.\n\nAt GOQii, Saurabh is focused on strengthening the company's financial foundation, enabling sustainable growth, and supporting innovation as GOQii continues its mission to transform preventive healthcare through technology and AI.",
    credentials: '20+ Years · Lotus Surgicals · Thermo Fisher · Piramal · Siemens · BSV',
  },
  {
    num: '07',
    name: 'Piyush Karnani',
    role: 'Chief Business Officer',
    company: 'GOQII INC.',
    tags: ['BANKING & INSURANCE', 'PAYMENTS', 'STRATEGIC PARTNERSHIPS'],
    img: 'https://appcdn.goqii.com/storeimg/51996_1781265652.png',
    bio: 'Senior business leader with 23+ years spanning banking, insurance, and healthtech. At GOQii, Piyush leads P&L ownership and the banking, insurance, payments, and strategic initiatives verticals — building alliances with banks, fintechs, insurers, and governments. He launched industry-first contactless and wearable payment solutions and led global expansion at GOQii. Previously VP of Digital Insurance & Consumer Business at Marsh & McLennan (country head), Head of Consumer Banking Sales & Liabilities at Standard Chartered Bank, Regional Head at Barclays, and Bancassurance roles at Citibank. A specialist in strategic partnerships, payments ecosystems, and embedded finance across global markets.',
    credentials: '23+ Years · Marsh · Standard Chartered · Barclays · Citibank',
  },
  {
    num: '08',
    name: 'Srinivasan V Swamy',
    role: 'Director',
    company: 'GOQII INC.',
    tags: ['FINANCE & GOVERNANCE', 'INSURANCE', 'FRACTIONAL CFO'],
    img: 'https://appcdn.goqii.com/storeimg/85230_1781259873.png',
    bio: "A Chartered Accountant with over 25 years in corporate finance and operations. Srini served as CFO of Bharti AXA Life Insurance, where he led finance, strategy, legal, compliance, and investment functions — including direct engagement with IRDA and the Ministry of Finance on complex policy issues. He later served as Independent Director at Aegon Life and Acko Insurance. Since founding CFO Bridge in 2011, he has become one of India's pioneers of the fractional CXO model, partnering with 500+ SMEs and startups across India, the US, and UAE. Also co-founder of CTO Bridge and CHRO Bridge. A passionate sleep advocate, Vipassana meditator, and yoga practitioner.",
    credentials: 'CA · Bharti AXA CFO · CFO Bridge Founder · 500+ SMEs',
  },
  {
    num: '09',
    name: 'Luke Coutinho',
    role: 'Co-Founder, Master Coach & Head Nutritionist',
    company: 'GOQII INC.',
    tags: ['INTEGRATIVE MEDICINE', 'HOLISTIC NUTRITION', 'PREVENTIVE HEALTH'],
    img: 'https://appcdn.goqii.com/storeimg/66935_1781259927.png',
    bio: "India's foremost integrative and lifestyle medicine expert, and the clinical soul of GOQii's coaching model. Luke has consulted and treated over 20,000 patients globally — including cancer, Alzheimer's, diabetes, and rare metabolic syndromes — through his signature five-pillar framework: Cellular Nutrition, Adequate Exercise, Quality Sleep, Emotional Detox, and Spirit. His global community of 17M+ spans billionaires to A-listers across Bollywood, royal families in the Middle East, and elite athletes. Named Champion for Lifestyle & Wellness for Prime Minister Modi's Fit India Movement. Four-time bestselling author. Founder of You Care Lifestyle and the Lifeness Science Institute. Over 250 talks across the world.",
    credentials: '17M+ Community · 20K+ Patients · PM Fit India Champion · Author',
  },
  {
    num: '10',
    name: 'Kamal Chandran',
    role: 'Chief Compliance & HR Officer',
    company: 'GOQII INC.',
    tags: ['HR STRATEGY', 'TALENT & CULTURE', 'COMPLIANCE'],
    img: 'https://appcdn.goqii.com/storeimg/12935_1781178888.png',
    bio: "HR leader, talent strategist, and NLP Life Performance Coach driving people and AI synergy at GOQii. Kamal leads the company's compliance and human resources function, with a career spanning Accenture (Talent Acquisition Delivery Lead — Product Industry), ScaleneWorks (VP RPO Head), and senior HR business partner roles. Simultaneously serves as Group Head Human Resources at nCORE Games. Specialises in strategic HR planning, talent acquisition, employee relations, diversity and inclusion, succession planning, and coaching. An IIM Nagpur alumna, she brings a rare combination of enterprise rigour and startup agility to building GOQii's people infrastructure.",
    credentials: 'CHRO · nCORE Group HR Head · Accenture · ScaleneWorks · IIM Nagpur',
  },
]

const boardMembers: TeamMember[] = [
  {
    num: '01',
    name: 'Bala Deshpande',
    role: 'MD, MegaDelta Capital',
    company: 'GOQII INC.',
    tags: ['VENTURE CAPITAL', 'CONSUMER TECH', 'MUMBAI'],
    img: 'https://appcdn.goqii.com/storeimg/61485_1781259954.png',
    bio: "One of India's most respected venture investors with nearly two decades spanning early-stage and growth capital. Started at ICICI Venture in 2001, then joined NEA to lead their India platform for 10 years. Played an instrumental role in India's first Internet IPO, first 24-hour news channel, and first payments tech company. Independent board member of Info Edge Ltd — a multi-billion-dollar category leader.",
    credentials: 'MD at MegaDelta Capital · Info Edge Director · ICICI Venture',
  },
  {
    num: '02',
    name: 'Dr. Christine Li',
    role: 'VP, Mitsui Healthcare',
    company: 'GOQII INC.',
    tags: ['HEALTHCARE STRATEGY', 'HCIT'],
    img: 'https://appcdn.goqii.com/storeimg/28916_1781259772.png',
    bio: "Physician-turned-strategist at Mitsui's global healthcare platform. Previously Parkway Pantai and IHH. HBS MBA; MBBS NUS.",
    credentials: 'Mitsui & Co · Harvard Business School · NUS Medicine',
  },
  {
    num: '03',
    name: 'Pravin Gandhi',
    role: 'GP, Seedfund',
    company: 'GOQII INC.',
    tags: ['VENTURE CAPITAL', 'STARTUPS', 'MUMBAI'],
    img: 'https://appcdn.goqii.com/storeimg/15448_1781259911.png',
    bio: "Founding figure of India's tech and VC ecosystem. 40+ years across Hinditron and Seedfund. Former TiE Mumbai President.",
    credentials: "Founding Figure of India's VC Ecosystem · Seedfund",
  },
  {
    num: '04',
    name: 'Vishal Gondal',
    role: 'Founder & CEO',
    company: 'GOQII INC.',
    tags: ['PREVENTIVE HEALTHCARE', 'AI, TECH & GAMING'],
    img: 'https://appcdn.goqii.com/storeimg/95221_1781178862.png',
    bio: 'A leading global figure at the intersection of healthcare, gaming, and entrepreneurship. As Founder and CEO of GOQii, he has transformed preventive healthcare by integrating AI, technology, and gamification across India, the UK, and the Middle East.\n\nKnown globally as the "Father of the Indian Gaming Industry," his early success with Indiagames culminated in its acquisition by The Walt Disney Company; he subsequently launched nCore Games, creator of FAU-G. Organises Mumbai Hacks for healthcare AI innovation. An avid marathon runner, trekker, and skydiver.',
    credentials: '25+ Years in Tech & Health · Indiagames → Disney · GOQii',
  },
  {
    num: '05',
    name: 'Amit Singhal',
    role: 'Former SVP Search — Google',
    company: 'FOUNDER, SITARE FOUNDATION',
    tags: ['SEARCH / AI', 'ENGINEERING', 'PHILANTHROPY'],
    img: 'https://appcdn.goqii.com/storeimg/13742_1781259963.png',
    bio: 'The architect of modern Google Search. Joined Google as employee #176 in 2000 and spent 15 years as SVP and Google Fellow, rewriting the core ranking algorithm — a system serving over a billion daily users. Named by Fortune as one of the smartest people in tech; inducted into the National Academy of Engineering. PhD in Information Retrieval from Cornell. Post-Google, he founded Sitare Foundation to fund education for underprivileged Indian students through to US universities.',
    credentials: 'Google employee #176 · 15 years leading Search | IIT Roorkee · Cornell PhD',
  }
]

const advisoryBoard: TeamMember[] = [
  {
    num: '01',
    name: 'Yat Siu',
    role: 'Co-Founder & Executive Chairman',
    company: 'ANIMOCA BRANDS',
    tags: ['WEB3 / NFTS', 'GAMING', 'DIGITAL OWNERSHIP'],
    img: 'https://appcdn.goqii.com/storeimg/37296_1781251915.png',
    bio: "One of Asia's most influential tech entrepreneurs. Founded Asia's first free web and email provider in 1996, built Outblaze into a 75M-user platform before selling its messaging unit to IBM in 2009, then co-founded Animoca Brands — a global Web3 powerhouse with 500+ portfolio investments dedicated to digital property rights. WEF Global Leader of Tomorrow; Cointelegraph's Top 100 in Blockchain. Advisory board member of BAFTA; director of the Asian Youth Orchestra. Classically trained musician.",
    credentials: 'Animoca Brands · Outblaze · Dalton Lab',
  },
  {
    num: '02',
    name: 'Desmond Lin',
    role: 'Seasoned Investor & former Insurance-Senior Exec',
    company: 'DL INVESTMENTS',
    tags: ['INSURTECH', 'HEALTHTECH', 'PE / VC'],
    img: 'https://appcdn.goqii.com/storeimg/77844_1781251891.png',
    bio: "Founder and CEO of DL Investments, focusing on the (re)insurance, insurtech, healthtech and wellness ecosystems in Asia; member of the Strategic Advisory Committee of HSBC's global Fintech Fund; a board member of Korea's largest online insurance company Kyobo Lifeplanet Life Insurance; a Global Advisory Board member of leading international Insurtech fund Eos Venture Partners; Venture Partner of Wings Capital Ventures.",
    credentials: 'DL Investments | Swiss Re | PE Funds | Goldman Sachs',
  },
  {
    num: '03',
    name: 'Rich Robinson',
    role: 'Entrepreneur-in-Residence',
    company: 'ANIMOCA BRANDS',
    tags: ['WEB3', 'STARTUPS', 'ASIA'],
    img: 'https://appcdn.goqii.com/storeimg/58694_1781251928.png',
    bio: "Nearly 30 years building and backing technology businesses across Asia — from Web 1.0 through Web3. Co-founded or served as senior executive at 8 startups; 3 exited to publicly listed companies. Mentored and invested through HAX, Orbit/Chinaccelerator, and 500 Startups. Clinical Professor of Entrepreneurship at Peking University's Guanghua International MBA program. A rare connector bridging Silicon Valley, China, and Southeast Asia.",
    credentials: '8 startups founded or led | Bali • HK • Beijing',
  },
  {
    num: '04',
    name: 'Amit Singhal',
    role: 'Former SVP Search — Google',
    company: 'FOUNDER, SITARE FOUNDATION',
    tags: ['SEARCH / AI', 'ENGINEERING', 'PHILANTHROPY'],
    img: 'https://appcdn.goqii.com/storeimg/13742_1781259963.png',
    bio: 'The architect of modern Google Search. Joined Google as employee #176 in 2000 and spent 15 years as SVP and Google Fellow, rewriting the core ranking algorithm — a system serving over a billion daily users. Named by Fortune as one of the smartest people in tech; inducted into the National Academy of Engineering. PhD in Information Retrieval from Cornell. Post-Google, he founded Sitare Foundation to fund education for underprivileged Indian students through to US universities.',
    credentials: 'Google employee #176 • 15 years leading Search | IIT Roorkee • Cornell PhD',
  },
  {
    num: '05',
    name: 'Lauren Selig',
    role: 'Founder & CEO',
    company: 'SHAKE AND BAKE PRODUCTIONS',
    tags: ['ENTERTAINMENT', 'VENTURE', 'AI & VR'],
    img: 'https://appcdn.goqii.com/storeimg/39753_1781251954.png',
    bio: "Entrepreneur and award-winning executive producer behind Hacksaw Ridge, Rocketman, and Wheel of Time. Co-founded V.A.L.I.S. Studios — winner of an Emmy for the first VR summit of Everest. Active investor in Galaxy Interactive, A16z, and Vaxxinity. Board member of XPRIZE. Holds a JD-MBA from Northwestern and a BS from Georgetown's School of Foreign Service.",
    credentials: '20+ years in media & startups | Los Angeles',
  },
  {
    num: '06',
    name: 'Manoj Narender Madnani',
    role: 'President',
    company: 'GASENTEC • BEACON MEDIA',
    tags: ['GLOBAL INVESTMENTS', 'ENERGY & AI', 'GCC / MENA'],
    img: 'https://appcdn.goqii.com/storeimg/47609_1781251967.png',
    bio: "Global business executive and investment strategist who has orchestrated transactions exceeding $20 billion across energy, infrastructure, blockchain, and media. Former Managing Director at Kulczyk Investments SA, responsible for global energy and infrastructure footprints. Co-founder of Beacon Media; instrumental in bringing enterprise AI firm Beyond Limits into the UAE and wider GCC. Member of the International Energy Forum Industry Advisory Council and The Energy Council advisory board. Babson College alumnus and Trustee; member of the Young Presidents Organization since 2003.",
    credentials: '$20B+ in transactions • Energy • Blockchain • Media | Dubai • GCC',
  }
]

const longevityCouncil: TeamMember[] = [
  {
    num: '01',
    name: 'Prof. Anurag Agrawal',
    role: 'Longevity Scientist',
    company: 'ASHOKA UNIVERSITY',
    tags: ['CLINICAL', 'LONGEVITY'],
    img: 'https://appcdn.goqii.com/storeimg/20066_1781263430.png',
    bio: 'Genomics & Precision Medicine. Former Director, CSIR-IGIB; Dean, Ashoka University. A global authority in genomics and precision medicine.',
    credentials: 'Former Director, CSIR-IGIB · Dean, Ashoka University',
  },
  {
    num: '02',
    name: 'Dr. Aashish Contractor',
    role: 'Cardiology & Rehabilitation',
    company: 'RELIANCE FOUNDATION HOSPITAL',
    tags: ['CARDIOLOGY', 'REHAB'],
    img: 'https://appcdn.goqii.com/storeimg/24768_1781260074.png',
    bio: 'Leading expert in cardiac rehab and preventive cardiology. Director at Sir H.N. Reliance Foundation Hospital.',
    credentials: 'Director, Sir H.N. Reliance Foundation Hospital',
  },
  {
    num: '03',
    name: 'Dr. Nirmal Punjabi',
    role: 'Metabolic Health',
    company: 'RELIANCE FOUNDATION HOSPITAL',
    tags: ['METABOLIC HEALTH', 'RESEARCH'],
    img: 'https://appcdn.goqii.com/storeimg/40334_1781259749.png',
    bio: 'Specialist in metabolic health and clinical trial validation. Expert in designing and validating clinical protocols.',
    credentials: 'Metabolic Health Specialist · Clinical Trial Expert',
  },
  {
    num: '04',
    name: 'Amit Mookim',
    role: 'Healthcare Leader & Strategist',
    company: 'IMMUNEEL THERAPEUTICS',
    tags: ['STRATEGY', 'HEALTHCARE VC'],
    img: 'https://appcdn.goqii.com/storeimg/7885_1781263563.png',
    bio: 'Experienced business leader specializing in healthcare strategy, venture investments, and startup growth. Brings deep expertise in scaling healthcare businesses, driving innovation, and building high-growth organizations across the health and life sciences ecosystem.',
    credentials: 'Healthcare Strategy · Venture Investments · Scaling',
  },
  {
    num: '05',
    name: 'Dr. Anindya Dasgupta',
    role: 'Microbiologist & Researcher',
    company: 'ASHOKA UNIVERSITY, KOITA CENTRE FOR DIGITAL HEALTH',
    tags: ['MICROBIOME', 'VIROLOGY'],
    img: 'https://appcdn.goqii.com/storeimg/76673_1781263672.png',
    bio: 'Microbiologist with over 20 years of experience in microbiome, virology, and immunology. His research focuses on how gut and skin microbes influence ageing, immunity, and long-term health outcomes, advancing the science of healthy longevity.',
    credentials: 'Over 20 Years Experience • Koita Centre for Digital Health',
  },
  {
    num: '06',
    name: 'Dr. Mahaveer Singh',
    role: 'Consultant Endocrinologist & Associate Professor',
    company: 'NIMS JAIPUR',
    tags: ['ENDOCRINOLOGY', 'METABOLIC HEALTH'],
    img: 'https://appcdn.goqii.com/storeimg/88054_1781263696.png',
    bio: "Consultant Endocrinologist and Associate Professor at NIMS Jaipur, with expertise in diabetes, adrenal disorders, and continuous glucose monitoring. Trained at India's leading medical institutes, he specializes in metabolic health and preventive endocrinology.",
    credentials: 'Associate Professor at NIMS Jaipur · Specialist in Diabetes',
  }
]

function PeopleBehindGoqiiSection() {
  const [activeTab, setActiveTab] = useState<'leadership' | 'board' | 'advisory' | 'longevity'>('leadership')
  const [selectedBio, setSelectedBio] = useState<TeamMember | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -280, behavior: 'smooth' })
  }
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 280, behavior: 'smooth' })
  }

  const handleTabChange = (id: 'leadership' | 'board' | 'advisory' | 'longevity') => {
    setActiveTab(id)
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  const tabs = [
    { id: 'leadership', label: 'LEADERSHIP TEAM', count: leadershipTeam.length, data: leadershipTeam },
    { id: 'board', label: 'BOARD OF DIRECTORS', count: boardMembers.length, data: boardMembers },
    { id: 'advisory', label: 'ADVISORY BOARD', count: advisoryBoard.length, data: advisoryBoard },
    { id: 'longevity', label: 'LONGEVITY COUNCIL', count: longevityCouncil.length, data: longevityCouncil },
  ] as const

  const currentMembers = tabs.find(t => t.id === activeTab)?.data || leadershipTeam

  return (
    <section id="leadership" className="w-full bg-[#fbfcfd] py-16 sm:py-20 xl:py-24 border-t border-slate-200/70" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            THE PEOPLE BEHIND GOQii
          </div>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            Built by Experts.<br />
            <span className="text-[#f05a28]">Driven by a Shared Mission.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 max-w-2xl">
            GOQii brings together healthcare, technology, behavioral science, coaching, and business expertise to turn health intelligence into meaningful action.
          </p>
        </div>

        {/* Tab Selection Bar (Matching Image 1) */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-3 mb-6 sm:mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as any)}
                className={`whitespace-nowrap px-6 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2.5 cursor-pointer select-none ${
                  isActive
                    ? 'bg-[#0B132B] text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/90 hover:border-slate-300 shadow-[0_1px_4px_rgba(0,0,0,0.02)]'
                }`}
              >
                {isActive && <span className="w-2 h-2 rounded-full bg-[#10b981] flex-shrink-0 animate-pulse" />}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Mobile-Only Horizontal Scroll Controls & Swipe Hint */}
        <div className="flex sm:hidden items-center justify-between mb-4 px-0.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
              {currentMembers.length} Members
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-xs text-slate-400 font-medium inline-flex items-center gap-1">
              <span>Swipe horizontally</span>
              <span className="text-slate-400">→</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="w-8 h-8 rounded-full bg-white border border-slate-200/90 text-slate-700 flex items-center justify-center shadow-xs active:scale-95 transition-all cursor-pointer hover:bg-slate-50"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="w-8 h-8 rounded-full bg-white border border-slate-200/90 text-slate-700 flex items-center justify-center shadow-xs active:scale-95 transition-all cursor-pointer hover:bg-slate-50"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Container: Horizontally aligned carousel with snap on mobile, 5-column grid on desktop */}
        <div
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 overflow-x-auto sm:overflow-visible pb-5 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {currentMembers.map((member) => (
            <div
              key={member.num + member.name}
              className="w-[78vw] max-w-[280px] shrink-0 sm:w-auto sm:shrink snap-start bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container with top-left number badge and hover 'VIEW BIO' overlay */}
                <div 
                  className="relative rounded-2xl overflow-hidden aspect-[4/4.6] bg-slate-100 mb-4 group/img cursor-pointer"
                  onClick={() => setSelectedBio(member)}
                >
                  {/* Number Badge (01, 02, ...) */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs text-slate-900 font-extrabold text-xs flex items-center justify-center shadow-sm z-10">
                    {member.num}
                  </div>

                  {/* Member Photo */}
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Hover Overlay with VIEW BIO Button */}
                  <div
                    className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3 z-20 cursor-pointer"
                  >
                    <span className="px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-extrabold tracking-wider uppercase shadow-md hover:bg-white transition-all transform group-hover:scale-100 scale-95">
                      VIEW BIO
                    </span>
                  </div>
                </div>

                {/* Category Tags (Light mint green pills as in screenshots) */}
                <div className="flex flex-wrap gap-1.5 mb-3 min-h-[38px] items-start">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#e8fbf3] text-[#059669] text-[9.5px] sm:text-[10px] font-extrabold tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#f05a28] transition-colors">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-snug mt-1">
                  {member.role}
                </p>
              </div>

              {/* View Bio text link */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <button
                  onClick={() => setSelectedBio(member)}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-1 cursor-pointer group-hover:translate-x-0.5 transform"
                >
                  <span>View Bio</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bio Modal Dialog */}
      {selectedBio && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedBio(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-xl w-full p-7 sm:p-9 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {/* Top Bar with Tags and Close Button */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#0B132B] text-white text-[10.5px] font-black tracking-wider uppercase">
                  {selectedBio.company || 'GOQII INC.'}
                </span>
                {selectedBio.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md bg-[#e8fbf3] text-[#059669] text-[10.5px] font-extrabold tracking-wider uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedBio(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Name and Designation */}
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight leading-tight mt-3">
              {selectedBio.name}
            </h2>
            <p className="text-base sm:text-lg font-semibold text-[#10b981] mt-1 mb-6">
              {selectedBio.role}
            </p>

            <div className="border-t border-slate-100 mb-6" />

            {/* Optional Expertise Section */}
            {selectedBio.expertise && selectedBio.expertise.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="text-[11.5px] font-bold tracking-wider text-slate-900 uppercase">
                    EXPERTISE
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedBio.expertise.map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {selectedBio.showBioLabel && (
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"></span>
                <span className="text-[11.5px] font-bold tracking-wider text-slate-900 uppercase">
                  BIO
                </span>
              </div>
            )}

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-[14.5px] leading-relaxed font-normal">
              {selectedBio.bio.split('\n\n').map((para, i) => (
                <p key={i}>
                  {para}
                </p>
              ))}
            </div>

            {/* Bottom Credentials Footer */}
            <div className="border-t border-slate-100 mt-8 pt-5 flex items-center flex-wrap gap-2 text-xs text-slate-600 font-medium">
              <span className="font-extrabold uppercase tracking-widest text-slate-900 text-[11px]">
                CREDENTIALS
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 text-xs font-medium">
                {selectedBio.credentials || 'Healthcare & Technology Leadership'}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function GoqiiEcosystemSection() {
  const ecosystemLogos = [
    {
      name: 'Universal Health Token',
      src: 'https://insight.goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner1.png',
    },
    {
      name: 'Modality',
      src: 'https://insight.goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner2.png',
    },
    {
      name: 'Harvard Business Publishing',
      src: 'https://insight.goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner3.png',
    },
    {
      name: 'IDC',
      src: 'https://insight.goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner4.png',
    },
    {
      name: 'DeviceWorld',
      src: 'https://insight.goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner5.png',
    },
    {
      name: 'Swiss Re',
      src: 'https://insight.goqii.com/webApp/uswebsite2025/assets/images/img-slide-partner6.png',
    },
  ]

  return (
    <section id="ecosystem" className="w-full bg-[#fbfcfd] py-16 sm:py-20 xl:py-24 border-t border-slate-200/80 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200/80 text-[#f05a28] text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#f05a28] animate-pulse" />
            THE PARTNERS BEHIND THE IMPACT
          </div>

          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold text-slate-900 tracking-tight leading-tight">
            Better Health <span className="text-[#f05a28]">Doesn't Happen Alone.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-4 max-w-2xl mx-auto">
            GOQii brings together healthcare, technology, research, and industry partners to create connected health experiences that reach people where they are—and help turn insight into action.
          </p>
        </div>

        {/* Mobile View: Prominent Infinite Marquee with Large Logos */}
        <div className="block sm:hidden w-full relative overflow-hidden py-3">
          {/* Subtle edge fade gradients */}
          <div className="pointer-events-none absolute left-0 inset-y-0 w-10 bg-gradient-to-r from-[#fbfcfd] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 inset-y-0 w-10 bg-gradient-to-l from-[#fbfcfd] to-transparent z-10" />

          <div className="animate-marquee flex items-center gap-5">
            {[...ecosystemLogos, ...ecosystemLogos].map((item, idx) => (
              <div
                key={`mob-partner-${item.name}-${idx}`}
                className="flex-shrink-0 flex items-center justify-center h-16 px-6 py-2.5 bg-white rounded-2xl border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="h-10 max-h-10 w-auto max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop View: Clean Single-Row Arrangement (All 6 logos in one line) */}
        <div className="hidden sm:block w-full max-w-4xl mx-auto py-1 overflow-hidden">
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2">
            {ecosystemLogos.map((item) => (
              <div
                key={item.name}
                className="flex-1 min-w-0 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="h-7 sm:h-9 md:h-10 lg:h-11 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

interface DropdownItem {
  title: string
  description: string
  href: string
  action?: 'faq' | 'trust' | 'contact' | 'partner' | 'insights'
}

const solutionsDropdownItems: DropdownItem[] = [
  {
    title: 'HealthEngage Platform',
    description: 'AI-powered engagement, monitoring, and population health insights.',
    href: 'https://goqii.com/healthengage',
  },
  {
    title: 'For Employers & Corporate',
    description: 'Preventive workforce health that improves engagement and productivity.',
    href: 'https://goqii.com/healthengage-corporate',
  },
  {
    title: 'For Insurance',
    description: 'Proactive member health engagement that helps manage population risk.',
    href: 'https://goqii.com/healthengage-insurance',
  },
  {
    title: 'For Pharma',
    description: 'Patient engagement, therapy adherence, and real-world outcomes.',
    href: 'https://goqii.com/healthengage-pharma',
  },
  {
    title: 'For Connected Care',
    description: 'Continuous remote patient monitoring and virtual clinical care.',
    href: 'https://goqii.com/connected-care',
  },
]

interface NavLinkItem {
  label: string
  hasDropdown: boolean
  href?: string
  isExternal?: boolean
}

const navLinks: NavLinkItem[] = [
  { label: 'Solutions', hasDropdown: true },
  { label: 'Technology', hasDropdown: false, href: '#alive-os' },
  { label: 'Outcomes', hasDropdown: false, href: '#outcomes' },
  { label: 'About', hasDropdown: false, href: '#our-story' },
  { label: 'Project Sanjeevini', hasDropdown: false, href: 'https://goqii.com/sanjeevini', isExternal: true },
]

function GoqiiLogo({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href="/"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
      }}
      className="flex items-center cursor-pointer"
      aria-label="GOQii Home"
    >
      <img
        src="https://appcdn.goqii.com/storeimg/36455_1779860387.png"
        alt="GOQii"
        className="h-8 sm:h-9 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </a>
  )
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms' | 'trust' | 'contact' | 'faq' | 'insights'>('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false)
  const lastScrollY = useRef(0)
  const dropdownTimerRef = useRef<any>(null)

  const navigateToHome = () => {
    setCurrentView('home')
    if (
      window.location.hash === '#privacy' ||
      window.location.hash === '#terms' ||
      window.location.hash === '#section-terms-of-service-page' ||
      window.location.hash === '#trust' ||
      window.location.hash === '#section-trust-center-page' ||
      window.location.hash === '#contact' ||
      window.location.hash === '#contact-us' ||
      window.location.hash === '#section-contact-page' ||
      window.location.hash === '#faqs' ||
      window.location.hash === '#faq' ||
      window.location.hash === '#section-faq-page' ||
      window.location.hash === '#insights' ||
      window.location.hash === '#articles' ||
      window.location.hash === '#section-insights-page'
    ) {
      window.history.pushState(null, '', window.location.pathname)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToPrivacy = () => {
    setCurrentView('privacy')
    window.location.hash = 'privacy'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToTerms = () => {
    setCurrentView('terms')
    window.location.hash = 'terms'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToTrust = () => {
    setCurrentView('trust')
    window.location.hash = 'trust'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToContact = () => {
    setCurrentView('contact')
    window.location.hash = 'contact'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToFaq = () => {
    setCurrentView('faq')
    window.location.hash = 'faqs'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToInsights = () => {
    setCurrentView('insights')
    window.location.hash = 'insights'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    // Ensure initial load always starts on Home and clears lingering #privacy hash
    if (typeof window !== 'undefined') {
      if (
        window.location.hash === '#privacy' ||
        window.location.hash === 'privacy' ||
        window.location.pathname === '/privacy'
      ) {
        if (window.history.replaceState) {
          window.history.replaceState(null, '', window.location.pathname === '/privacy' ? '/' : window.location.pathname)
        }
        setCurrentView('home')
      }
    }

    const handleHashChange = () => {
      if (window.location.hash === '#privacy') {
        setCurrentView('privacy')
      } else if (window.location.hash === '#terms' || window.location.hash === '#section-terms-of-service-page' || window.location.pathname === '/terms') {
        setCurrentView('terms')
      } else if (window.location.hash === '#trust' || window.location.hash === '#section-trust-center-page' || window.location.pathname === '/trust') {
        setCurrentView('trust')
      } else if (
        window.location.hash === '#contact' ||
        window.location.hash === '#contact-us' ||
        window.location.hash === '#section-contact-page' ||
        window.location.pathname === '/contact'
      ) {
        setCurrentView('contact')
      } else if (
        window.location.hash === '#faqs' ||
        window.location.hash === '#faq' ||
        window.location.hash === '#section-faq-page' ||
        window.location.pathname === '/faqs' ||
        window.location.pathname === '/faq'
      ) {
        setCurrentView('faq')
      } else if (
        window.location.hash === '#insights' ||
        window.location.hash === '#articles' ||
        window.location.hash === '#section-insights-page' ||
        window.location.pathname === '/insights' ||
        window.location.pathname === '/articles'
      ) {
        setCurrentView('insights')
      } else if (window.location.hash === '#outcomes') {
        if (currentView !== 'home') {
          setCurrentView('home')
          setTimeout(() => {
            document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        } else {
          document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (window.location.hash === '' || window.location.hash === '#home') {
        setCurrentView('home')
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  const handleMouseEnter = (label: string) => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current)
    setOpenDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimerRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 150)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN -> hide navbar
        setNavVisible(false)
        setOpenDropdown(null)
      } else {
        // Scrolling UP -> show navbar
        setNavVisible(true)
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHeaderVisible = navVisible || mobileOpen

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* ── Navbar (Floating Pill with Scroll Hide/Show) ── */}
      <header className={`w-full sticky top-0 z-50 px-4 sm:px-6 lg:px-12 max-w-[1536px] mx-auto pointer-events-none pt-2 sm:pt-3 transition-all duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <div className="pointer-events-auto bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 rounded-full px-6 sm:px-8 py-3 flex items-center justify-between transition-all duration-300 relative">
          <GoqiiLogo onClick={navigateToHome} />

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-10">
            {navLinks.map(link => {
              const isSolutions = link.label === 'Solutions'
              const isOpen = openDropdown === link.label
              const items = isSolutions ? solutionsDropdownItems : []
              const isLinkActive = isSolutions && isOpen

              if (link.isExternal || link.href?.startsWith('http')) {
                return (
                  <div key={link.label} className="relative py-2">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[14px] font-semibold text-slate-700 hover:text-[#f05a28] transition-colors cursor-pointer"
                    >
                      <span>{link.label}</span>
                    </a>
                  </div>
                )
              }

              return (
                <div
                  key={link.label}
                  className="relative py-2"
                  onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.label)}
                  onMouseLeave={() => link.hasDropdown && handleMouseLeave()}
                >
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        setOpenDropdown(isOpen ? null : link.label)
                      } else if (link.label === 'Technology') {
                        if (currentView !== 'home') {
                          setCurrentView('home')
                          setTimeout(() => {
                            document.getElementById('alive-os')?.scrollIntoView({ behavior: 'smooth' })
                          }, 100)
                        } else {
                          document.getElementById('alive-os')?.scrollIntoView({ behavior: 'smooth' })
                        }
                      } else if (link.label === 'Outcomes') {
                        if (currentView !== 'home') {
                          setCurrentView('home')
                          setTimeout(() => {
                            document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' })
                          }, 100)
                        } else {
                          document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' })
                        }
                      } else if (link.label === 'About') {
                        if (currentView !== 'home') {
                          setCurrentView('home')
                          setTimeout(() => {
                            document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })
                          }, 100)
                        } else {
                          document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })
                        }
                      }
                    }}
                    className={`flex items-center gap-1.5 text-[14px] font-semibold transition-colors cursor-pointer ${
                      isLinkActive
                        ? 'text-[#f05a28] font-bold'
                        : 'text-slate-700 hover:text-[#f05a28]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && isOpen && (
                    <div
                      className="absolute top-full -left-6 mt-3 w-[360px] bg-white rounded-3xl p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-slate-100 z-50 animate-fadeIn select-none"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      <div className="flex flex-col gap-1">
                        {items.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            onClick={() => {
                              setOpenDropdown(null)
                            }}
                            className="group block p-3 rounded-2xl hover:bg-slate-50 transition-colors text-left"
                          >
                            <h4 className="text-[14.5px] font-bold text-slate-900 group-hover:text-[#f05a28] transition-colors leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-[12.5px] text-slate-500 font-normal leading-relaxed mt-0.5">
                              {item.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setIsPartnerModalOpen(true)}
              className="px-6 py-2.5 rounded-full text-[14px] font-bold text-white transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer bg-[#f05a28] hover:bg-[#d94e1f]"
            >
              Partner with GOQii
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden p-2 text-slate-700 hover:text-slate-900" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <div className="pointer-events-auto lg:hidden mt-2 bg-white/98 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xl px-6 py-5 flex flex-col gap-3">
            {navLinks.map(link => {
              const isSolutions = link.label === 'Solutions'
              const isExpanded = mobileExpanded === link.label
              const items = isSolutions ? solutionsDropdownItems : []
              const isLinkActive = isSolutions && isExpanded

              if (link.isExternal || link.href?.startsWith('http')) {
                return (
                  <div key={link.label} className="border-b border-slate-50 pb-2">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="w-full text-left text-sm font-semibold py-1 flex justify-between items-center text-slate-700 hover:text-[#f05a28] transition-colors"
                    >
                      <span>{link.label}</span>
                    </a>
                  </div>
                )
              }

              return (
                <div key={link.label} className="border-b border-slate-50 pb-2">
                  <button
                    onClick={() => {
                      if (link.hasDropdown) {
                        setMobileExpanded(isExpanded ? null : link.label)
                      } else {
                        setMobileOpen(false)
                        if (link.label === 'Technology') {
                          if (currentView !== 'home') {
                            setCurrentView('home')
                            setTimeout(() => {
                              document.getElementById('alive-os')?.scrollIntoView({ behavior: 'smooth' })
                            }, 100)
                          } else {
                            document.getElementById('alive-os')?.scrollIntoView({ behavior: 'smooth' })
                          }
                        } else if (link.label === 'Outcomes') {
                          if (currentView !== 'home') {
                            setCurrentView('home')
                            setTimeout(() => {
                              document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' })
                            }, 100)
                          } else {
                            document.getElementById('outcomes')?.scrollIntoView({ behavior: 'smooth' })
                          }
                        } else if (link.label === 'About') {
                          if (currentView !== 'home') {
                            setCurrentView('home')
                            setTimeout(() => {
                              document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })
                            }, 100)
                          } else {
                            document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })
                          }
                        }
                      }
                    }}
                    className={`w-full text-left text-sm font-semibold py-1 flex justify-between items-center transition-colors ${
                      isLinkActive
                        ? 'text-[#f05a28] font-bold'
                        : 'text-slate-700 hover:text-[#f05a28]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <svg
                        className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                      </svg>
                    )}
                  </button>

                  {/* Dropdown Items in Mobile */}
                  {link.hasDropdown && isExpanded && (
                    <div className="mt-2 pl-3 flex flex-col gap-2 bg-slate-50/70 rounded-xl p-3 border border-slate-100">
                      {items.map(item => (
                        <a
                          key={item.title}
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          onClick={() => {
                            setMobileOpen(false)
                          }}
                          className="block py-1 text-left"
                        >
                          <span className="text-xs font-bold text-slate-900 block">{item.title}</span>
                          <span className="text-[11px] text-slate-500 font-normal block leading-tight">{item.description}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            <button
              onClick={() => {
                setMobileOpen(false)
                setIsPartnerModalOpen(true)
              }}
              className="w-full mt-2 py-3 rounded-full text-sm font-bold text-white shadow-md bg-[#f05a28] hover:bg-[#d94e1f] cursor-pointer"
            >
              Partner with GOQii
            </button>
          </div>
        )}
      </header>

      {currentView === 'privacy' ? (
        <PrivacyPolicyPage onBack={navigateToHome} />
      ) : currentView === 'terms' ? (
        <TermsOfServicePage
          onBack={navigateToHome}
          onNavigateToPrivacy={navigateToPrivacy}
        />
      ) : currentView === 'trust' ? (
        <TrustCenterPage
          onBack={navigateToHome}
          onNavigateToPrivacy={navigateToPrivacy}
          onNavigateToTerms={navigateToTerms}
          onNavigateToContact={navigateToContact}
        />
      ) : currentView === 'contact' ? (
        <ContactUsPage
          onBack={navigateToHome}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />
      ) : currentView === 'faq' ? (
        <FaqPage
          onBack={navigateToHome}
          onNavigateToContact={navigateToContact}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />
      ) : currentView === 'insights' ? (
        <InsightsArticlesPage
          onBack={navigateToHome}
          onNavigateToContact={navigateToContact}
          onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        />
      ) : (
        <>
          {/* ── Hero ── */}
          <section className="relative w-full overflow-hidden bg-white -mt-[68px] sm:-mt-[76px]" style={{ minHeight: '100vh' }}>
        {/* Background hero photo — full background image (mobile & desktop) */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Mobile view banner image */}
          <img
            src={heroPhotoMobile}
            alt="GOQii Preventive Healthcare"
            className="block sm:hidden w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Subtle mobile dark scrim to ensure text & button legibility while keeping the center image clear */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/65 via-transparent to-slate-950/60 sm:hidden pointer-events-none" />
          {/* Desktop & tablet view banner image */}
          <img
            src={heroPhoto}
            alt="GOQii Preventive Healthcare"
            className="hidden sm:block w-full h-full object-cover object-center sm:object-[center_30%]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle desktop left gradient scrim for crisp text contrast without washing out the subject */}
          <div className="hidden sm:block absolute inset-y-0 left-0 w-full md:w-3/5 lg:w-1/2 bg-gradient-to-r from-white/95 via-white/80 to-transparent pointer-events-none" />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-36 pb-8 sm:pb-16 flex flex-col justify-between flex-1" style={{ minHeight: '100vh' }}>
          {/* Main Hero Copy */}
          <div className="max-w-xl flex flex-col gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 sm:bg-orange-50 text-orange-400 sm:text-[#f05a28] text-xs font-bold tracking-wider uppercase w-fit border border-orange-400/30 sm:border-orange-100/80 backdrop-blur-xs">
              Preventive Health & Engagement
            </span>

            <h1 style={{ fontFamily: 'Poppins, sans-serif' }} className="text-2xl xs:text-[1.75rem] sm:text-4xl lg:text-5xl font-bold sm:font-semibold text-white sm:text-slate-900 leading-[1.2] sm:leading-[1.18] tracking-tight">
              <span className="block">Transforming Health.</span>
              <span style={{ color: '#f05a28' }} className="block">Powered by Dynamic Motivation.</span>
            </h1>

            <p className="text-sm sm:text-lg text-slate-200 sm:text-slate-600 leading-relaxed font-normal max-w-lg">
              GOQii combines AI, behavioral intelligence, and human expertise to turn health insights into lasting action and measurable outcomes.
            </p>

            {/* Core Capability Pillars - Clean frosted badge layout that avoids image overlap and guarantees readability */}
            <div className="pt-1 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-2.5 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 sm:bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs sm:text-[12.5px] font-semibold text-slate-800 w-fit">
                <span className="w-2 h-2 rounded-full bg-[#f05a28] shrink-0" />
                <span>Human-in-the-Loop Coaching</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 sm:bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs sm:text-[12.5px] font-semibold text-slate-800 w-fit">
                <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                <span>Continuous Biometric Insights</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 sm:bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs sm:text-[12.5px] font-semibold text-slate-800 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Adaptive Motivation</span>
              </div>
            </div>
          </div>

          {/* Banner Logo & CTA: Explore Solutions */}
          <div className="max-w-xl mt-auto sm:mt-6 pt-6 sm:pt-2 w-full flex flex-col items-start gap-4">
            {/* Banner Logo above button */}
            <div className="flex items-center">
              <img
                src="https://appcdn.goqii.com/storeimg/57781_1793105079.png"
                alt="GOQii"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain drop-shadow-xs"
                referrerPolicy="no-referrer"
              />
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('solutions') || document.querySelector('section:nth-of-type(2)')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg cursor-pointer text-center inline-flex items-center justify-center whitespace-nowrap"
              style={{ background: '#f05a28' }}
            >
              Explore Solutions
            </button>
          </div>
        </div>
      </section>

      {/* ── Section 2: The Problem - You Don't Have A Health Problem. You Have A Health Puzzle. ── */}
      <HealthPuzzleSection />

      {/* ── Section 2.5: The Realization - Your Body Doesn't Work In Silos ── */}
      <BodyInSilosSection />

      {/* ── Section 3: Meet a more connected way to manage your health (Replaces GOQii Adapts to You) ── */}
      <ConnectedWaySection />

      {/* ── Section 3.5: The Intelligence Layer - ALIVE O.S. ── */}
      <AliveOsSection />

      {/* ── Section 4: Designed to Adapt. Built to Deliver. ── */}
      <EnterprisePlatformSection />

      {/* ── Section 5, 7, 7.5: Enterprise Solutions & Security Architecture ── */}
      <EnterpriseSolutionsSection
        onOpenPartnerModal={() => setIsPartnerModalOpen(true)}
        onNavigateToTrust={navigateToTrust}
      />

      {/* ── Section: Outcomes & Impact (Better engagement. Better outcomes.) ── */}
      <OutcomesImpactSection />

      {/* ── Section: Verified Case Studies & Enterprise Evidence ── */}
      <CaseStudyLayout onRequestEnterpriseAccess={() => setIsPartnerModalOpen(true)} />

      {/* ── Section: OUR STORY (From a Bold Idea to a Global Health Movement) ── */}
      <OurStorySection onOpenPartnerModal={() => setIsPartnerModalOpen(true)} />

      {/* ── Section: THE PEOPLE BEHIND GOQii (Built by Experts. Driven by a Shared Mission.) ── */}
      <PeopleBehindGoqiiSection />

      {/* ── Section: THE GOQii ECOSYSTEM (Better Health Doesn't Happen Alone.) ── */}
      <GoqiiEcosystemSection />

      {/* ── Section: Final CTA (Your next step starts today) ── */}
      <FinalCtaSection onOpenPartnerModal={() => setIsPartnerModalOpen(true)} />
        </>
      )}

      {/* ── Footer ── */}
      <footer className="w-full bg-white border-t border-slate-100 pt-16 pb-12 text-slate-800" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Top Link Columns - Grouped strictly by Design Review */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
            {/* 1. SOLUTIONS */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-bold tracking-widest text-slate-900 uppercase">Solutions</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-slate-600 font-normal">
                {solutionsDropdownItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-slate-900 transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. RESOURCES */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-bold tracking-widest text-slate-900 uppercase">Resources</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-slate-600 font-normal">
                <li>
                  <a
                    href="#our-story"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentView !== 'home') {
                        setCurrentView('home')
                        setTimeout(() => {
                          document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })
                        }, 100)
                      } else {
                        document.getElementById('our-story')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="hover:text-slate-900 transition-colors"
                  >
                    About GOQii
                  </a>
                </li>
                <li>
                  <a
                    href="#case-studies"
                    onClick={(e) => {
                      e.preventDefault()
                      if (currentView !== 'home') {
                        setCurrentView('home')
                        setTimeout(() => {
                          document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
                        }, 100)
                      } else {
                        document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="hover:text-slate-900 transition-colors"
                  >
                    Enterprise Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#faqs"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateToFaq()
                    }}
                    className={`transition-colors cursor-pointer ${
                      currentView === 'faq'
                        ? 'text-[#f05a28] font-bold underline'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      navigateToContact()
                    }}
                    className={`transition-colors cursor-pointer ${
                      currentView === 'contact'
                        ? 'text-[#f05a28] font-bold underline'
                        : 'hover:text-slate-900'
                    }`}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* 3. CONNECT */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-bold tracking-widest text-slate-900 uppercase">Connect</h4>
              <ul className="flex flex-col gap-3 text-[14px] text-slate-600 font-normal">
                <li>
                  <button
                    type="button"
                    onClick={() => setIsPartnerModalOpen(true)}
                    className="hover:text-slate-900 transition-colors text-left cursor-pointer"
                  >
                    Business Inquiries
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Brand & Tagline + Social Icons Bar */}
          <div className="border-t border-slate-100 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 max-w-xl">
              <GoqiiLogo onClick={navigateToHome} />
              <p className="text-[14px] text-slate-600 leading-normal">
                Transforming healthcare from reactive treatment to continuous, intelligent prevention.
              </p>
            </div>

            {/* Social Circle Buttons + Scroll to top */}
            <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/GOQiiLife"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GOQii on Facebook"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-[#1877F2] hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://twitter.com/goqii"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GOQii on X (Twitter)"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-black hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/goqii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GOQii on LinkedIn"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-[#0A66C2] hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/goqiilife"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow GOQii on Instagram"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-[#E4405F] hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/user/GOQii"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to GOQii on YouTube"
                  className="w-10 h-10 rounded-full bg-slate-100/90 hover:bg-[#FF0000] hover:text-white transition-all flex items-center justify-center text-slate-700 shadow-xs active:scale-95"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* Scroll to top button */}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  aria-label="Scroll to top"
                  className="w-10 h-10 rounded-full bg-slate-100/80 hover:bg-slate-200 transition-colors flex items-center justify-center text-slate-700 ml-2 cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  </svg>
                </button>
              </div>
            </div>

          {/* Bottom Bar: Legal & Copyright */}
          <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-slate-500">
            <div>
              <p className="text-[12px] text-slate-400">© 2026 GOQii Inc. All rights reserved.</p>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="font-extrabold text-slate-800 uppercase tracking-wider text-[11px]">LEGAL:</span>
              <a
                href="#privacy"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToPrivacy()
                }}
                className={`transition-colors cursor-pointer ${
                  currentView === 'privacy'
                    ? 'text-[#f05a28] font-bold underline'
                    : 'text-slate-600 hover:text-[#f05a28]'
                }`}
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="#terms"
                onClick={(e) => {
                  e.preventDefault()
                  navigateToTerms()
                }}
                className={`transition-colors cursor-pointer ${
                  currentView === 'terms'
                    ? 'text-[#f05a28] font-bold underline'
                    : 'text-slate-600 hover:text-[#f05a28]'
                }`}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Partner With GOQii Modal ── */}
      <PartnerWithUsModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />
    </div>
  )
}
