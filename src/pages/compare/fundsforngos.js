import React from 'react';
import '../../styles/shared.css';
import { 
  Check, X, ChevronDown, Clock, Search, AlertTriangle, 
  Target, Users, Zap, BarChart3, Shield, MapPin,
  Sparkles, FileText, DollarSign, Eye, Award, TrendingUp, Database
} from 'lucide-react';
import logo from '../../images/logo-horizontal-remove-background.com.png';
import engrantExpanded from '../../images/Engrant-expanded.png';
import Footer from '../../components/Footer';
import {
  GEOGRAPHY_SHORT,
  MECHANISM,
  PRICE_ANNUAL_PER_MONTH,
  PRICE_ANNUAL_TOTAL,
  PRICE_MONTHLY,
  PRICE_VALID_UNTIL,
} from '../../constants/positioning';
import { buildAnnualOffer, buildMonthlyOffer, buildProductSchema } from '../../utils/siteSchema';
import { OgTwitterMeta } from '../../utils/seoMeta';
import LoomVideo from '../../components/ngo-search/LoomVideo';
import LastReviewed from '../../components/compare/LastReviewed';
import CompareAnswerBox from '../../components/compare/CompareAnswerBox';
import NotForYouSection from '../../components/compare/NotForYouSection';
import BuyerPersonasSection from '../../components/compare/BuyerPersonasSection';
import CompareCrossLinks from '../../components/compare/CompareCrossLinks';
import {
  LAST_REVIEWED,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from '../../utils/comparePageSchema';

const FUNDSFORNGOS_FAQS = [
  {
    question: 'How much does fundsforNGOs Premium cost?',
    answer: 'As of September 2026, the live signup at subscribetopremium.fundsforngos.org lists Premium at $199/year permanently discounted to $49/year for a single-user annual membership (online payment). Membership auto-renews; renew on time to keep the locked price. Online payments include a 7-day money-back guarantee per their FAQ.',
  },
  {
    question: 'What is the best alternative to fundsforNGOs?',
    answer: `For NGOs that need live-web discovery with org-specific evaluation, Engrant is a leading fundsforNGOs alternative at $${PRICE_MONTHLY}/month ($${PRICE_ANNUAL_TOTAL}/year billed annually). fundsforNGOs Premium is a curated alert list; Engrant searches beyond any one database.`,
  },
  {
    question: "What's the difference between fundsforNGOs and Engrant?",
    answer: 'fundsforNGOs Premium delivers curated funding alerts, a donor directory, and training from a human-maintained database — plus a large free resource library at fundsforngos.org. Engrant searches the live web and returns 30–50 grants pre-evaluated for your organization with fit scores and red flags. Signing up does not automatically win grants — fundsforNGOs states that clearly in their FAQ.',
  },
  {
    question: 'When is fundsforNGOs the better choice?',
    answer: 'fundsforNGOs fits NGOs in the Global South and internationally who want low-cost curated alerts ($49/year online), proposal templates, and free articles. Engrant fits when you need funders outside their catalog or org-specific fit intelligence.',
  },
  {
    question: 'Does fundsforNGOs have AI-powered grant matching?',
    answer: 'No. Premium is curated listings and email alerts, not AI matching or per-organization fit scoring. Engrant provides that on live-web results.',
  },
  {
    question: 'Does Engrant work for NGOs outside the United States?',
    answer: `Yes. ${GEOGRAPHY_SHORT} Engrant serves paying customers worldwide; fundsforNGOs is strong for international NGO awareness but app reviewers note UK/Canada-weighted listings.`,
  },
  {
    question: 'Can I use fundsforNGOs and Engrant together?',
    answer: 'Yes. Many NGOs use the free fundsforngos.org library and $49/year Premium alerts alongside Engrant for live-web discovery and fit scoring.',
  },
];

const FundsforNGOsComparisonPage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen w-full">
        <Header />
        <LastReviewed />
        <main className="w-full">
          <Hero />
          <CompareAnswerBox
            title="Short Answer: Is fundsforNGOs or Engrant right for me?"
            answer={
              <>
                <strong className="text-slate-800">
                  Choose fundsforNGOs for $49/year curated alerts and free NGO resources; choose Engrant for live-web discovery with fit scores.
                </strong>{' '}
                Premium is a database-bounded alert service — not automatic grant wins.
              </>
            }
            bullets={[
              'fundsforNGOs Premium: $49/year online (list $199) — single user, 7-day money-back',
              `Engrant: $${PRICE_MONTHLY}/month — 30–50 pre-evaluated live-web matches`,
              'fundsforNGOs: strong Global South / international awareness + free library',
              'Engrant: org-specific fit, competition, and red flags',
            ]}
          />
          <ProblemSection />
          <ComparisonTable />
          <KeyDifferences />
          <LoomVideo />
          <BuyerPersonasSection
            title="Which product for which kind of person"
            personas={[
              {
                name: 'Small NGO in Africa or Asia on a minimal software budget',
                description: 'Needs funding awareness and templates more than deep US foundation research.',
                winner: 'fundsforNGOs',
                verdict: '$49/year Premium plus free fundsforngos.org articles.',
              },
              {
                name: 'NGO frustrated UK/Canada-heavy app listings',
                description: 'Wants locally relevant funders beyond a curated alert feed.',
                winner: 'Engrant',
                verdict: 'live-web search tuned to your geography and mission.',
              },
              {
                name: 'First-time grant seeker confused by free vs Premium',
                description: 'Needs clarity that membership does not auto-win grants.',
                winner: 'fundsforNGOs',
                verdict: 'if you treat Premium as alerts + training, not a grant guarantee.',
              },
              {
                name: 'Development lead who outgrew static alert lists',
                description: 'Spends hours researching each alert for fit and eligibility.',
                winner: 'Engrant',
                verdict: 'pre-evaluated matches with fit scores and red flags.',
              },
            ]}
          />
          <NotForYouSection
            competitorHint="If you need fundsforNGOs's $49/year alerts, donor directory, or free resource library, stay on Premium."
            items={[
              'You want the lowest-cost curated funding alerts for international NGOs',
              'You rely on fundsforngos.org free articles and proposal samples',
              'You are fine researching each listing yourself after email alerts',
              'You understand Premium does not guarantee grants (per fundsforNGOs FAQ)',
            ]}
          />
          <HonestAssessment />
          <Testimonials />
          <PricingComparison />
          <FAQSection />
          <SourcesSection />
          <CompareCrossLinks currentPath="/compare/fundsforngos/" />
          <FinalCTA />
        </main>
        <Footer />
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-100/50 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logo} alt="EnGrant Logo" className="h-11 w-auto rounded-lg align-middle" />
          </a>

          <nav className="hidden md:flex items-center space-x-10">
            <a href="#comparison" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Comparison
            </a>
            <a href="#pricing" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              FAQ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://app.engrant.eu/?utm_source=fundsforngos_comparison&utm_medium=cta&utm_campaign=header_cta"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'header',
                    page: 'fundsforngos_comparison'
                  });
                }
              }}
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md">
              Find my grants
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="hero-gradient min-h-[600px] flex items-center py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4 mr-2" />
          FundsforNGOs Alternative
        </div>
        
        <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
          Engrant vs fundsforNGOs: Database alerts vs live-web discovery
        </h1>
        
        <p className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
          fundsforNGOs delivers curated funding alerts from a human-maintained database — excellent value for budget-conscious NGOs. Engrant searches the live web and returns each funder pre-evaluated for your specific organization.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/?utm_source=fundsforngos_comparison&utm_medium=cta&utm_campaign=hero_cta"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'hero',
                  page: 'fundsforngos_comparison'
                });
              }
            }}
            className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg inline-block">
            Find my grants
          </a>
          <a href="#comparison" className="text-teal-700 hover:text-teal-800 font-medium flex items-center group">
            See how they compare
            <ChevronDown className="w-5 h-5 ml-1 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
        
        <p className="text-neutral-500 flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
          2-week free trial • No credit card required
        </p>
      </div>
    </section>
  );
};

// Problem Section (4 Pain Point Cards)
const ProblemSection = () => {
  const problems = [
    {
      icon: Database,
      title: "Curated alerts — not live-web discovery",
      description: "Premium is a human-maintained opportunity list with email alerts. Valuable for awareness, but bounded by what their team catalogs.",
      quote: "No. Your NGO will not get grants after signing up for the Premium Membership.",
      quoteSource: "fundsforNGOs FAQ",
      sourceUrl: "https://support.fundsforngos.org/hc/en-us",
      engrantAlternative: MECHANISM
    },
    {
      icon: MapPin,
      title: "Listings can skew toward some regions",
      description: "App reviewers say funding can feel geared toward organizations in the UK and Canada relative to other regions — check fit for your country.",
      quote: "Funding seem geared more to organizations in the UK and Canada...",
      quoteSource: "Bette Lawrence-Water, Google Play (4★)",
      sourceUrl: "https://play.google.com/store/apps/details?id=org.fundsforngos.premium",
      engrantAlternative: GEOGRAPHY_SHORT
    },
    {
      icon: Search,
      title: "Free vs Premium confusion",
      description: "The free site and Premium app serve different purposes; users report unclear expectations about what paid membership delivers.",
      quote: "The free version and premium are confusing...",
      quoteSource: "JUSTIN JOHN GENDA, app review",
      sourceUrl: "https://play.google.com/store/apps/details?id=org.fundsforngos.premium",
      engrantAlternative: "One product: discovery with fit scores — 2-week free trial"
    },
    {
      icon: Eye,
      title: "Templates and training — not fit intelligence",
      description: "Premium includes proposal templates, webinars, and donor directory contacts — not org-specific fit scoring or competition analysis.",
      quote: null,
      quoteSource: null,
      engrantAlternative: "Fit score, competition level, effort estimate, and red flags on every result"
    }
  ];

  return (
    <section className="section-warm-dark py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Why NGOs Compare fundsforNGOs and Engrant
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div key={index} className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-amber-400 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white pt-2">{problem.title}</h3>
                </div>
                <p className="text-slate-300 mb-4 leading-relaxed">{problem.description}</p>
                {problem.quote && (
                  <blockquote className="border-l-2 border-amber-400 pl-4 italic text-amber-200 mb-4">
                    "{problem.quote}"
                    {problem.quoteSource && (
                      <cite className="block text-sm text-slate-400 mt-2 not-italic">
                        — {problem.sourceUrl ? (
                          <a href={problem.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-300 transition-colors">
                            {problem.quoteSource}
                          </a>
                        ) : problem.quoteSource}
                      </cite>
                    )}
                  </blockquote>
                )}
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-sm text-amber-300 font-medium">
                    <span className="text-teal-400">Engrant alternative:</span> {problem.engrantAlternative}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Comparison Table Section
const ComparisonTable = () => {
  const features = [
    { category: "Setup & Onboarding", feature: "Setup time", engrant: "Enter org name/URL → AI researches automatically", competitor: "Sign up for annual membership; browse curated lists", engrantCheck: true, competitorCheck: true },
    { category: "Setup & Onboarding", feature: "Learning curve", engrant: "Minimal – results in minutes", competitor: "Low – list-and-alert model", engrantCheck: true, competitorCheck: true },
    { category: "Search & Results", feature: "Discovery model", engrant: "Live-web search — not limited to what any one database covers", competitor: "Curated static database with email alerts", engrantCheck: true, competitorCheck: "partial" },
    { category: "Search & Results", feature: "Results approach", engrant: "30-50 pre-evaluated grants per search", competitor: "Curated opportunity list + donor directory", engrantCheck: true, competitorCheck: "partial" },
    { category: "Search & Results", feature: "Fit assessment", engrant: "AI-generated fit score with detailed reasons", competitor: "Database listings without org-specific pre-evaluation", engrantCheck: true, competitorCheck: false },
    { category: "Search & Results", feature: "Eligibility screening", engrant: "Flags disqualifiers before you apply", competitor: "Eligibility info in listings; not evaluated for your org", engrantCheck: true, competitorCheck: "partial" },
    { category: "Intelligence & Insights", feature: "Competition level", engrant: "Shows High/Medium/Low competition", competitor: "Not available", engrantCheck: true, competitorCheck: false },
    { category: "Intelligence & Insights", feature: "Application effort estimate", engrant: "Shows effort level required", competitor: "Not available", engrantCheck: true, competitorCheck: false },
    { category: "Intelligence & Insights", feature: "Red flags & warnings", engrant: "Proactive warnings (consortium required, etc.)", competitor: "Not available", engrantCheck: true, competitorCheck: false },
    { category: "Intelligence & Insights", feature: "Past recipients like you", engrant: "Shows similar orgs that got funded (illustrative examples in product)", competitor: "Donor directory with funding priorities", engrantCheck: true, competitorCheck: "partial" },
    { category: "Data & Coverage", feature: "Data source", engrant: "Live-web search (parallel agents, always current)", competitor: "Human-maintained curated database", engrantCheck: true, competitorCheck: "partial" },
    { category: "Data & Coverage", feature: "Coverage limit", engrant: "Not limited to what any one database covers", competitor: "Comprehensive within their database only", engrantCheck: true, competitorCheck: "partial" },
    { category: "Data & Coverage", feature: "Geographic focus", engrant: GEOGRAPHY_SHORT, competitor: "International / Global South focus; reviewers note UK/Canada skew in app", engrantCheck: true, competitorCheck: true },
    { category: "Educational Resources", feature: "Training & templates", engrant: "Focused on discovery — minimal learning needed", competitor: "Proposal templates, webinars, training materials", engrantCheck: "partial", competitorCheck: true },
    { category: "Pricing", feature: "Annual Premium (online signup)", engrant: `$${PRICE_ANNUAL_TOTAL}/year ($${PRICE_ANNUAL_PER_MONTH}/month)`, competitor: "$49/year (list $199; single-user)", engrantCheck: "partial", competitorCheck: true },
    { category: "Pricing", feature: "Refund / renewal", engrant: "2-week free trial", competitor: "7-day money-back (online); auto-renew with price lock if renewed on time", engrantCheck: true, competitorCheck: true },
    { category: "Pricing", feature: "Monthly option", engrant: `$${PRICE_MONTHLY}/month (no commitment)`, competitor: "Annual membership only (12 months from signup)", engrantCheck: true, competitorCheck: false },
    { category: "Pricing", feature: "Free trial", engrant: "2 weeks, no credit card", competitor: "7-day money-back on Premium (verify current policy)", engrantCheck: true, competitorCheck: "partial" },
    { category: "Best For", feature: "Target user", engrant: "NGOs needing live-web discovery with org-specific evaluation", competitor: "Budget-conscious NGOs wanting curated alerts plus training", engrantCheck: true, competitorCheck: true },
  ];

  let currentCategory = '';

  return (
    <section id="comparison" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Side-by-Side Comparison
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Engrant vs FundsforNGOs: Which Is Better?
          </h2>
          <p className="text-xl text-neutral-600 mb-4">A side-by-side comparison for nonprofit grant seekers in 2026</p>
          <p className="text-neutral-500 max-w-3xl mx-auto italic">
            fundsforNGOs is a strong budget option for NGOs wanting curated alerts and training materials. The structural difference: Engrant searches the live web; fundsforNGOs can only show you opportunities in their database.
          </p>
        </div>
        
        <div className="rounded-3xl overflow-hidden warm-shadow-lg border border-neutral-100">
          <div className="overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-3 bg-slate-50 min-w-[700px]">
              <div className="p-4 md:p-6 border-r border-neutral-100">
                <span className="font-semibold text-slate-700">Feature</span>
              </div>
              <div className="p-4 md:p-6 border-r border-neutral-100 bg-gradient-to-br from-teal-50 to-teal-100/50">
                <span className="font-bold text-teal-700 flex items-center">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Engrant
                </span>
              </div>
              <div className="p-4 md:p-6">
                <span className="font-semibold text-slate-600">FundsforNGOs</span>
              </div>
            </div>
            
            {/* Rows */}
            {features.map((row, index) => {
              const showCategory = currentCategory !== row.category;
              if (showCategory) currentCategory = row.category;
              
              return (
                <React.Fragment key={index}>
                  {showCategory && (
                    <div className="grid grid-cols-3 min-w-[700px] bg-slate-100 border-t border-neutral-200">
                      <div className="p-3 md:p-4 border-r border-neutral-200">
                        <span className="font-bold text-slate-700 text-sm uppercase tracking-wide">{row.category}</span>
                      </div>
                      <div className="p-3 md:p-4 border-r border-neutral-200"></div>
                      <div className="p-3 md:p-4"></div>
                    </div>
                  )}
                  <div className={`grid grid-cols-3 min-w-[700px] ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <div className="p-4 md:p-5 border-r border-neutral-100 flex items-center">
                      <span className="font-medium text-slate-700 text-sm md:text-base">{row.feature}</span>
                    </div>
                    <div className="p-4 md:p-5 border-r border-neutral-100 bg-teal-50/30">
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          row.engrantCheck === true ? 'bg-teal-100' : 
                          row.engrantCheck === 'partial' ? 'bg-amber-100' : 'bg-rose-50'
                        }`}>
                          {row.engrantCheck === true ? (
                            <Check className="text-teal-600 w-3 h-3 md:w-4 md:h-4" />
                          ) : row.engrantCheck === 'partial' ? (
                            <span className="text-amber-600 text-xs font-bold">~</span>
                          ) : (
                            <X className="text-rose-400 w-3 h-3 md:w-4 md:h-4" />
                          )}
                        </div>
                        <span className="text-neutral-700 text-sm md:text-base">{row.engrant}</span>
                      </div>
                    </div>
                    <div className="p-4 md:p-5">
                      <div className="flex items-start gap-2 md:gap-3">
                        <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          row.competitorCheck === true ? 'bg-teal-100' : 
                          row.competitorCheck === 'partial' ? 'bg-amber-100' : 'bg-rose-50'
                        }`}>
                          {row.competitorCheck === true ? (
                            <Check className="text-teal-600 w-3 h-3 md:w-4 md:h-4" />
                          ) : row.competitorCheck === 'partial' ? (
                            <span className="text-amber-600 text-xs font-bold">~</span>
                          ) : (
                            <X className="text-rose-400 w-3 h-3 md:w-4 md:h-4" />
                          )}
                        </div>
                        <span className="text-neutral-600 text-sm md:text-base">{row.competitor}</span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// Key Differences Section (4 Subsections)
const KeyDifferences = () => {
  return (
    <section id="features" className="section-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4A: AI Discovery vs Manual Search */}
        <div className="mb-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Discovery
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                Let AI do the searching — not your already-busy team
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                With fundsforNGOs Premium, you browse curated opportunity lists and donor directory entries from email alerts — then research each listing for fit yourself.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Engrant works differently. Enter your organization name or website URL. Our AI researches your mission, programs, geography, and characteristics automatically. Within minutes, you're reviewing grants that actually fit — not setting up search parameters across multiple databases.
              </p>
              <p className="text-neutral-500 italic">
                For solo development directors juggling fundraising, programs, and board management, eliminating manual research is game-changing.
              </p>
            </div>
            
            <div className="mt-12 lg:mt-0 flex justify-center">
              <div className="relative max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/50 to-teal-200/50 rounded-3xl transform -rotate-2"></div>
                <div className="relative bg-white rounded-2xl p-8 warm-shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="space-y-4">
                      <div className="bg-slate-50 rounded-xl p-4 text-left">
                        <span className="text-sm text-neutral-500 block mb-2">Organization name or URL</span>
                        <div className="bg-white rounded-lg border border-neutral-200 px-4 py-3 text-neutral-700">
                          Community Housing Alliance
                        </div>
                      </div>
                      <div className="btn-primary text-white rounded-full py-3 px-6 font-semibold">
                        Find My Grants
                      </div>
                      <p className="text-sm text-neutral-500">That's it. AI does the rest.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 4B: Pre-Evaluated Grants vs Raw Results */}
        <div className="mb-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
                <img 
                  className="relative w-full h-auto rounded-2xl shadow-2xl" 
                  src={engrantExpanded} 
                  alt="Engrant grant matching interface showing fit score, match reasons, and warnings" 
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 mb-12 lg:mb-0">
              <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Pre-Evaluated Results
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                Every grant scored and evaluated — not just listed
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                fundsforNGOs Premium gives you curated listings, donor priorities, and training materials. From there, you assess whether each alert is worth pursuing for your specific NGO.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Engrant evaluates every grant before showing it to you. Each result comes with:
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Award, label: "Fit score", desc: "Why this grant matches your organization" },
                  { icon: TrendingUp, label: "Competition level", desc: "High, Medium, or Low" },
                  { icon: Clock, label: "Effort estimate", desc: "Quick application vs. major undertaking" },
                  { icon: AlertTriangle, label: "Red flags", desc: "Consortium required? First-time grantees excluded?" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-teal-100 group-hover:bg-teal-200 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800">{item.label}:</span>
                        <span className="text-neutral-600"> — {item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <p className="text-neutral-600 mt-6">
                You save or reject each grant, and our system learns your preferences. No more clicking through funder profiles hoping to find a match.
              </p>
            </div>
          </div>
        </div>
        
        {/* 4C: Live-web vs curated alert lists */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Database className="w-4 h-4 mr-2" />
                Database Coverage
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                Live-web discovery vs curated alert lists
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                fundsforNGOs maintains a human-curated Premium database plus a large free knowledge base at fundsforngos.org. Engrant is not limited to what their editors include in each alert cycle.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 warm-shadow-lg border border-teal-100">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-700 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mr-2 text-sm font-bold text-slate-600">FfN</span>
                    fundsforNGOs
                  </h3>
                  <div className="text-3xl font-bold text-slate-600 mb-2">$49/yr</div>
                  <p className="text-neutral-500 text-sm">Premium online rate (list $199) — curated alerts</p>
                  <p className="text-neutral-500 text-sm mt-2">Free resource library at fundsforngos.org</p>
                </div>
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                  <h3 className="font-semibold text-teal-700 mb-3 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Engrant
                  </h3>
                  <div className="text-3xl font-bold text-teal-600 mb-2">Entire web</div>
                  <p className="text-neutral-600 text-sm">AI searches the live internet for each query</p>
                  <p className="text-neutral-600 text-sm mt-2">30-50 pre-evaluated, high-fit grants per search</p>
                </div>
              </div>
              
              <p className="text-lg text-neutral-600 mb-4">
                When a new RFP posts anywhere on the web, Engrant can find it immediately. With FundsforNGOs, you're limited to what's in their curated database.
              </p>
              <p className="text-teal-700 font-medium">
                For time-sensitive grant deadlines, real-time discovery matters.
              </p>
            </div>
          </div>
        </div>
        
        {/* Past recipients illustrative */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 warm-shadow-lg border border-teal-100">
            <h3 className="font-semibold text-slate-700 mb-2">Example: Past recipients similar to your organization</h3>
            <p className="text-sm text-amber-700 mb-4 font-medium">Illustrative example — not live customer data</p>
            <p className="text-neutral-600">Engrant shows peer funders for your org; fundsforNGOs Premium focuses on opportunity alerts and donor directory entries.</p>
          </div>
        </div>

        {/* 4D: Geographic fit */}
        <div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Geographic fit
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Org-specific geographic fit — not one-size-fits-all alerts
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-4">
              Reviewers note funding listings can feel weighted toward the UK and Canada compared to other regions — verify each alert matches your country and sector.
            </p>
            <p className="text-lg text-teal-700 font-medium max-w-2xl mx-auto">
              Engrant evaluates whether each opportunity matches where you work — useful when alert feeds are broad or regionally skewed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Honest Assessment Section
const HonestAssessment = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Honest Comparison
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            When fundsforNGOs is the better choice vs. when Engrant is better
          </h2>
          <p className="text-lg text-neutral-600">We believe in honest comparisons. Here's when each tool makes sense.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                <span className="text-slate-600 font-bold text-sm">FfN</span>
              </span>
              When fundsforNGOs is the better choice
            </h3>
            <ul className="space-y-4">
              {[
                "Your budget is extremely constrained — $49/year online Premium is the ceiling",
                "You want broad funding awareness via curated email alerts, not deep org-specific search",
                "You value proposal templates, webinars, and training materials included in membership",
                "You're new to grant seeking and want a low-cost entry point with educational support",
                "A human-maintained database plus donor directory is sufficient for your workflow",
                "You want Global South / international coverage plus free articles at fundsforngos.org",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-600">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-neutral-500 text-sm mt-6 italic">
              fundsforNGOs at $49/year online is genuinely cheaper than Engrant's annual tier. For budget-constrained NGOs wanting awareness plus training, it is often the right starting point.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-3xl p-8 border border-teal-100">
            <h3 className="text-xl font-bold text-teal-700 mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                <Sparkles className="w-5 h-5 text-white" />
              </span>
              Use Engrant if you:
            </h3>
            <ul className="space-y-4">
              {[
                "Need funders outside commercial database coverage — embassy programmes, regional foundations, corporate giving with no public portal",
                "Want each result pre-evaluated for your specific organization — fit, eligibility, competition, red flags",
                "Are frustrated that database-only tools miss funders their team hasn't catalogued",
                "Need live-web discovery, not alerts from a fixed list",
                "Want org-specific evaluation rather than listings to research yourself",
                "Can justify $444/year (or $47/month) for discovery beyond any database's coverage",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-teal-700 font-medium mt-6 italic">
              Engrant is not a price-beating alternative to fundsforNGOs — it is a capability upgrade for NGOs that have outgrown database-only discovery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const quotes = [
    {
      quote: "I spend more time searching for grants than I do actually writing them, and half the ones I find don't even fit our mission.",
      attribution: "Sarah, Development Director, $2.3M nonprofit"
    },
    {
      quote: "Engrant's AI is the best I've seen at identifying really aligned funders — quickly — no matter where in the world your organization works.",
      attribution: "Shoshana Grossman-Crist, Funding Advisor"
    }
  ];

  return (
    <section className="section-cream py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Real Frustrations
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Development professionals get it
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {quotes.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 warm-shadow-lg relative">
              <div className="absolute top-6 left-8 text-6xl text-teal-100 font-serif leading-none">"</div>
              <blockquote className="relative">
                <p className="text-lg text-neutral-700 italic mb-6 pt-8 leading-relaxed">
                  {item.quote}
                </p>
                <cite className="flex items-center not-italic">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-neutral-600 font-medium text-sm">{item.attribution}</span>
                </cite>
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 warm-shadow border border-teal-100">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">Fewer</div>
              <div className="text-neutral-600">hours researching low-fit alerts (varies by org)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">30-50</div>
              <div className="text-neutral-600">pre-evaluated grants per search</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">$47</div>
              <div className="text-neutral-600">per month — AI does the work</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Comparison Section
const PricingComparison = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Pricing
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            How Much Does FundsforNGOs Cost?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Premium is $49/year online (list $199). Pricing checked September 2026 — capability comparison, not a price-beating page.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* FundsforNGOs Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-6">FundsforNGOs</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">PREMIUM (ONLINE SIGNUP)</div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-lg text-neutral-400 line-through">$199</span>
                  <span className="text-3xl font-bold text-slate-700">$49</span>
                  <span className="text-neutral-500">/year</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">Single-user annual · 7-day money-back (online) · auto-renew with price lock if renewed on time</p>
              </div>

              <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                <div className="text-sm font-semibold text-teal-700 mb-1">FREE LIBRARY</div>
                <p className="text-sm text-neutral-600">Articles, samples, and guides at fundsforngos.org — separate from Premium alerts</p>
              </div>
              
              <div className="pt-4">
                <p className="text-sm font-semibold text-slate-500 mb-3">WHAT'S INCLUDED:</p>
                <div className="space-y-2">
                  {[
                    "Curated funding opportunity list with email alerts",
                    "Donor directory with funding priorities and contacts",
                    "Proposal templates and sample documents",
                    "Webinars and training resources",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                      <Check className="w-4 h-4 text-slate-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-sm font-semibold text-slate-500 mb-3">NOT INCLUDED:</p>
                <div className="space-y-2">
                  {[
                    "Live-web search beyond their database",
                    "Org-specific fit scoring or eligibility evaluation",
                    "Guaranteed grants (per fundsforNGOs FAQ)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-neutral-500">
                      <X className="w-4 h-4 text-rose-300 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-sm text-neutral-500 italic">
                Pricing checked September 2026 —{' '}
                <a href="https://subscribetopremium.fundsforngos.org/" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                  subscribetopremium.fundsforngos.org
                </a>
              </p>
            </div>
          </div>
          
          {/* Engrant Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-amber-400 rounded-3xl opacity-20 blur"></div>
            <div className="relative bg-white rounded-3xl p-8 border border-teal-100 warm-shadow-lg h-full">
              <div className="absolute -top-4 right-8 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-bold">
                RECOMMENDED
              </div>
              
              <h3 className="text-xl font-bold text-teal-700 mb-6 flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Engrant
              </h3>
              
              <div className="mb-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-neutral-500 mb-2">Monthly</p>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-slate-800">${PRICE_MONTHLY}</span>
                    <span className="text-xl text-neutral-500 ml-2">/month</span>
                  </div>
                </div>
                <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
                  <p className="text-sm font-semibold text-teal-700 mb-1">Annual</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-slate-800">${PRICE_ANNUAL_PER_MONTH}</span>
                    <span className="text-neutral-500 ml-1">/month</span>
                  </div>
                  <p className="text-teal-600 font-medium mt-1">
                    Billed annually (${PRICE_ANNUAL_TOTAL}/year)
                  </p>
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {[
                  "All features included",
                  "AI-powered matching & fit scores",
                  "Competition levels & effort estimates",
                  "Red flags & eligibility warnings",
                  "County/city geographic precision",
                  "Real-time web search",
                  "Past recipients like you",
                  "Learns from your preferences",
                  "2-week free trial"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <Check className="text-teal-600 w-4 h-4" />
                    </div>
                    <span className="text-neutral-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://app.engrant.eu/?utm_source=fundsforngos_comparison&utm_medium=pricing&utm_campaign=pricing_cta"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'cta_click', {
                      location: 'pricing',
                      page: 'fundsforngos_comparison'
                    });
                  }
                }}
                className="w-full btn-primary text-white py-4 px-6 rounded-full font-semibold text-lg inline-block text-center shadow-lg">
                Find my grants
              </a>
              
              <p className="text-center text-teal-600 font-medium mt-4 flex items-center justify-center">
                <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                2-week free trial, no credit card
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-10 max-w-3xl mx-auto">
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
            <p className="text-amber-800 text-center font-medium leading-relaxed">
              fundsforNGOs Premium at <strong>$49/year</strong> (online) is far below Engrant (${PRICE_ANNUAL_TOTAL}/year). Engrant is the upgrade when alert lists are not enough — each match pre-evaluated for your organization, not delivered as a listing to research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section - Optimized for LLM citation
const FAQSection = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = FUNDSFORNGOS_FAQS;

  return (
    <section id="faq" className="py-24 section-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Common Questions About FundsforNGOs Alternatives
          </h2>
          <p className="text-lg text-neutral-600">
            Answers to help you choose the right grant discovery tool for your nonprofit.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 warm-shadow border border-neutral-100">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left flex items-center justify-between"
              >
                <h3 className="text-lg font-bold text-slate-800 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[800px]' : 'max-h-0'
                }`}
              >
                <p className="text-neutral-600 leading-relaxed mt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sources & References Section
const SourcesSection = () => {
  const sources = [
    {
      title: "fundsforNGOs Premium Pricing",
      url: "https://subscribetopremium.fundsforngos.org/",
      description: "Online signup — $49/year Premium (list $199), checked September 2026"
    },
    {
      title: "fundsforNGOs Support: Premium Membership",
      url: "https://support.fundsforngos.org/hc/en-us/articles/360038724933-What-is-included-in-the-Premium-Membership-",
      description: "What's included in Premium: curated list, email alerts, donor directory, templates, training"
    },
    {
      title: "fundsforNGOs Support: Membership Duration",
      url: "https://support.fundsforngos.org/hc/en-us/articles/360039252294-How-long-is-my-Premium-Membership-valid-for-",
      description: "Annual membership valid 12 months from signup"
    },
    {
      title: "fundsforNGOs Official Website",
      url: "https://www.fundsforngos.org/",
      description: "fundsforNGOs platform for NGOs worldwide"
    },
  ];

  return (
    <section className="py-16 bg-white border-t border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-slate-700 mb-6 flex items-center">
          <FileText className="w-5 h-5 mr-2 text-neutral-500" />
          Sources & References
        </h2>
        <p className="text-sm text-neutral-500 mb-6">
          Data and claims in this comparison are based on publicly available information from the following sources:
        </p>
        <ul className="space-y-4">
          {sources.map((source, index) => (
            <li key={index} className="flex items-start gap-3 text-sm">
              <span className="text-neutral-400 font-medium min-w-[24px]">[{index + 1}]</span>
              <div>
                <a 
                  href={source.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 underline font-medium"
                >
                  {source.title}
                </a>
                <span className="text-neutral-500"> — {source.description}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-xs text-neutral-400 mt-6 italic">
          Last reviewed: September 2026 by AS. Pricing and features may change; verify current information on official websites.
        </p>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800"></div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white leading-tight">
          Ready for grant discovery that does the work for you?
        </h2>
        
        <p className="text-xl lg:text-2xl mb-12 text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Stop manually searching through databases. Engrant uses AI to find, evaluate, and rank grants for your organization. Get 30-50 high-fit grants with fit scores, competition levels, and red flags — in minutes, not hours.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/?utm_source=fundsforngos_comparison&utm_medium=cta&utm_campaign=final_cta"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'final_cta',
                  page: 'fundsforngos_comparison'
                });
              }
            }}
            className="inline-flex items-center bg-white text-teal-700 hover:bg-amber-50 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 group">
            Start Your Free 2-Week Trial
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="#features"
            className="text-white hover:text-amber-200 font-medium text-lg">
            See Engrant in Action
          </a>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-teal-200">
          <span className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-amber-400" />
            2-week free trial
          </span>
          <span className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-amber-400" />
            No credit card required
          </span>
          <span className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-amber-400" />
            Cancel anytime
          </span>
          <span className="flex items-center">
            <Check className="w-5 h-5 mr-2 text-amber-400" />
            All features included
          </span>
        </div>
      </div>
    </section>
  );
};


export default FundsforNGOsComparisonPage;

export const Head = () => {
  const faqSchema = buildFaqSchema(FUNDSFORNGOS_FAQS);
  const breadcrumbSchema = buildBreadcrumbSchema(
    'fundsforNGOs Alternative',
    '/compare/fundsforngos/'
  );

  const productSchema = buildProductSchema({
    description: 'AI-powered grant discovery for NGOs worldwide. Live-web search with org-specific pre-evaluation.',
    offers: [buildMonthlyOffer(), buildAnnualOffer()],
  });

  return (
    <>
      <title>fundsforNGOs Alternative | Engrant vs fundsforNGOs (2026)</title>
      <meta
        name="description"
        content={`Compare Engrant vs fundsforNGOs. Premium: $49/year curated alerts. Engrant: $${PRICE_MONTHLY}/month live-web discovery with fit scores.`}
      />
      <meta
        name="keywords"
        content="fundsforNGOs alternative, fundsforNGOs vs Engrant, NGO grant database, international grant search, fundsforNGOs pricing"
      />
      <meta name="dateModified" content={LAST_REVIEWED} />
      <link rel="canonical" href="https://engrant.eu/compare/fundsforngos/" />
      <OgTwitterMeta
        title="fundsforNGOs Alternative: Engrant vs fundsforNGOs Comparison"
        description="Curated $49/year alerts vs live-web discovery with org-specific fit scores."
        url="https://engrant.eu/compare/fundsforngos/"
      />
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
};
