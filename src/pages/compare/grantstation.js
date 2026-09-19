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
import { OgTwitterMeta } from '../../utils/seoMeta';
import {
  GEOGRAPHY_SHORT,
  PRICE_ANNUAL_PER_MONTH,
  PRICE_ANNUAL_TOTAL,
  PRICE_MONTHLY,
  PRICE_VALID_UNTIL,
} from '../../constants/positioning';
import { buildAnnualOffer, buildMonthlyOffer, buildProductSchema } from '../../utils/siteSchema';
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

const GRANTSTATION_FAQS = [
  {
    question: 'How much does GrantStation cost?',
    answer: `GrantStation retail membership is $699/year (grantstation.com). Nonprofits can buy through TechSoup at $199/year ($150/year with TechSoup Plus); GrantStation also runs promotional pricing around $119/year roughly twice a year. Engrant is $${PRICE_MONTHLY}/month ($${PRICE_ANNUAL_TOTAL}/year billed annually) with a 2-week free trial.`,
  },
  {
    question: 'What is the best alternative to GrantStation?',
    answer: `For nonprofits that want AI-powered discovery instead of manual database sessions, Engrant is a leading GrantStation alternative at $${PRICE_MONTHLY}/month. It searches the live web and returns 30–50 pre-evaluated grants with fit scores, competition levels, and red flags — with county-level geographic matching GrantStation does not offer.`,
  },
  {
    question: "What's the difference between GrantStation and Engrant?",
    answer: `GrantStation is a searchable database of ~150,000 funder profiles plus ~15,000 curated opportunities, strong educational resources, and budget access via TechSoup. You filter by state (not county/city) and evaluate results yourself. Engrant ($${PRICE_MONTHLY}/month) researches your organization automatically and delivers pre-evaluated matches from the live web with fit scores and red flags.`,
  },
  {
    question: 'Is GrantStation worth it for small nonprofits?',
    answer: 'GrantStation can be worth it if you qualify for TechSoup pricing and value faith-based, civic, corporate, and international coverage plus webinars and GrantStation Insider. Reviewers and comparison tests often cite outdated funder records, state-only geography, and irrelevant keyword matches. For staff with limited time, Engrant pre-filters at the county level.',
  },
  {
    question: 'How many funders does GrantStation have?',
    answer: 'GrantStation publishes access to roughly 150,000 funder profiles and about 15,000 curated grant opportunities across US charitable, federal, state, Canadian, and international sections. Engrant is not limited to a fixed database size; it searches the live web per query.',
  },
  {
    question: 'Does GrantStation have AI-powered grant matching?',
    answer: 'No. GrantStation uses keyword and filter-based search across database sections. There is no org-specific AI fit scoring or automated eligibility screening. Engrant provides that layer on top of live-web discovery.',
  },
  {
    question: 'Can I filter GrantStation by county or city?',
    answer: 'No. Geographic filters stop at the state level. In third-party comparison tests (e.g. Instrumentl’s GrantStation teardown), Chicago-area searches surfaced funders in distant counties. Engrant checks eligibility at county and city level.',
  },
  {
    question: 'Can I use GrantStation and Engrant together?',
    answer: 'Yes. Some nonprofits use GrantStation for government databases, Insider newsletters, and training while using Engrant for AI discovery and county-level filtering on private and foundation funding.',
  },
];

const GrantStationComparisonPage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen w-full">
        <Header />
        <LastReviewed />
        <main className="w-full">
          <Hero />
          <CompareAnswerBox
            title="Short Answer: Is GrantStation or Engrant right for me?"
            answer={
              <>
                <strong className="text-slate-800">
                  Choose GrantStation for TechSoup-priced database research and training; choose Engrant for AI discovery with county-level fit scoring.
                </strong>{' '}
                GrantStation is $699/year retail ($199/year via TechSoup). Engrant is ${PRICE_MONTHLY}/month when you need pre-evaluated live-web matches.
              </>
            }
            bullets={[
              `Engrant: $${PRICE_MONTHLY}/month — 30–50 pre-evaluated grants, county/city geo`,
              'GrantStation: $699/year retail; $199/year TechSoup nonprofit rate',
              'GrantStation: ~150k funder profiles + ~15k curated opportunities',
              'Engrant: fit scores, competition, red flags — not a webinar library',
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
                name: 'Solo development director with TechSoup access',
                description: 'Tight budget, willing to spend sessions in GrantStation’s UI for training and federal/state lists.',
                winner: 'GrantStation',
                verdict: 'if $199/year TechSoup membership plus Insider content is enough discovery.',
              },
              {
                name: 'Metro nonprofit serving one county or city',
                description: 'State-wide filters return funders you cannot apply to; staff time is the bottleneck.',
                winner: 'Engrant',
                verdict: 'county/city eligibility checks and pre-evaluated matches.',
              },
              {
                name: 'Faith-based or civic org needing corporate & international funders',
                description: 'Wants breadth in GrantStation’s charitable, corporate, and international sections.',
                winner: 'GrantStation',
                verdict: 'as a research library — pair with Engrant if keyword noise grows.',
              },
              {
                name: 'Grant writer tired of stale profiles and low-fit keyword hits',
                description: 'Needs current RFPs with fit intelligence, not another database browse.',
                winner: 'Engrant',
                verdict: 'live-web search with fit scores and red flags.',
              },
            ]}
          />
          <NotForYouSection
            competitorHint="If you need GrantStation’s federal/state databases, Insider newsletter, or TechSoup pricing, keep GrantStation."
            items={[
              'You rely on TechSoup or promotional pricing and mainly browse funder profiles yourself',
              'You want GrantStation Insider, webinars, and proposal training included in membership',
              'You need deep 990-PF browsing without AI pre-screening',
              'You are comfortable with state-level filters and manual keyword sessions',
            ]}
          />
          <HonestAssessment />
          <Testimonials />
          <PricingComparison />
          <FAQSection />
          <SourcesSection />
          <CompareCrossLinks currentPath="/compare/grantstation/" />
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
              href="https://app.engrant.eu/?utm_source=grantstation_comparison&utm_medium=cta&utm_campaign=header_cta"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'header',
                    page: 'grantstation_comparison'
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
          GrantStation Alternative
        </div>
        
        <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
          GrantStation Alternative: Engrant vs GrantStation
        </h1>
        
        <p className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
          GrantStation offers a huge catalog at TechSoup prices — but state-only filters and manual keyword sessions still eat staff time. Engrant uses AI to find, evaluate, and rank grants for you automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/?utm_source=grantstation_comparison&utm_medium=cta&utm_campaign=hero_cta"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'hero',
                  page: 'grantstation_comparison'
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
      title: "Stale or outdated funder records",
      description: "GrantStation’s large catalog (~150,000 funder profiles) still requires you to verify whether a funder is active, still funding in your area, and aligned with your programs. Comparison reviews note records that lag real-world changes.",
      quote: "I was initially disappointed by the number of matches that were returned. In total, GrantStation brought up 11 matches.",
      quoteSource: "Instrumentl vs GrantStation Teardown",
      sourceUrl: "https://www.instrumentl.com/blog/grantstation-vs-instrumentl-teardown",
      engrantAlternative: "Live-web search surfaces current RFPs; each match is pre-evaluated for your org"
    },
    {
      icon: MapPin,
      title: "Geographic filtering stops at state level",
      description: "GrantStation does not filter below state — a known limitation in third-party tests. Metro nonprofits often see funders in counties they cannot serve.",
      quote: "Because GrantStation does not allow for specificity of geographic scope beyond the state, a number of the results that came up were for counties outside of Cook County.",
      quoteSource: "Instrumentl vs GrantStation Teardown",
      sourceUrl: "https://www.instrumentl.com/blog/grantstation-vs-instrumentl-teardown",
      engrantAlternative: "County- and city-level geographic eligibility on every Engrant match"
    },
    {
      icon: Search,
      title: "Keyword sessions and irrelevant results",
      description: "You navigate US Charitable, Federal, State, Canadian, and International sections, pick keywords and funder types, then manually sift results. Users report spending full sessions in the UI for modest yield.",
      quote: null,
      quoteSource: null,
      engrantAlternative: "Enter your org name → AI researches and ranks grants for you"
    },
    {
      icon: Eye,
      title: "No fit scores or red flags per organization",
      description: "Profiles show names, priorities, and 990 data — but not whether this funder is a strong fit for your specific nonprofit, competition level, or effort required.",
      quote: null,
      quoteSource: null,
      engrantAlternative: "Fit score, competition level, effort estimate, and red flags on each result"
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
            Why Nonprofits Outgrow GrantStation
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
    { category: "Setup & Onboarding", feature: "Setup time", engrant: "Enter org name/URL → AI researches automatically", competitor: "Select keywords, geographic scope, areas of interest, funder types manually", engrantCheck: true, competitorCheck: "partial" },
    { category: "Setup & Onboarding", feature: "Learning curve", engrant: "Minimal – results in minutes", competitor: "Moderate – multiple database sections to navigate", engrantCheck: true, competitorCheck: "partial" },
    { category: "Search & Results", feature: "Results approach", engrant: "30-50 pre-evaluated grants from live-web search", competitor: "Database results from ~150k profiles + ~15k curated opportunities", engrantCheck: true, competitorCheck: "partial" },
    { category: "Search & Results", feature: "Fit assessment", engrant: "AI-generated fit score with detailed reasons", competitor: "Database listings without org-specific fit evaluation", engrantCheck: true, competitorCheck: false },
    { category: "Search & Results", feature: "Eligibility screening", engrant: "Flags disqualifiers before you apply", competitor: "Basic eligibility info in funder profiles", engrantCheck: true, competitorCheck: "partial" },
    { category: "Intelligence & Insights", feature: "Competition level", engrant: "Shows High/Medium/Low competition", competitor: "Not available", engrantCheck: true, competitorCheck: false },
    { category: "Intelligence & Insights", feature: "Application effort estimate", engrant: "Shows effort level required", competitor: "Not available", engrantCheck: true, competitorCheck: false },
    { category: "Intelligence & Insights", feature: "Red flags & warnings", engrant: "Proactive warnings (consortium required, etc.)", competitor: "Not available", engrantCheck: true, competitorCheck: false },
    { category: "Intelligence & Insights", feature: "Funder openness to new grantees", engrant: "Clearly indicated", competitor: "Basic info in funder profiles", engrantCheck: true, competitorCheck: "partial" },
    { category: "Intelligence & Insights", feature: "Past recipients like you", engrant: "Shows similar orgs that got funded (illustrative examples in product)", competitor: "Not available", engrantCheck: true, competitorCheck: false },
    { category: "Data & Coverage", feature: "Data source", engrant: "Live-web search (parallel agents, always current)", competitor: "Curated database (~150k funder profiles, ~15k opportunities)", engrantCheck: true, competitorCheck: "partial" },
    { category: "Data & Coverage", feature: "Coverage limit", engrant: "Not limited to what any one database covers", competitor: "Comprehensive within their database only", engrantCheck: true, competitorCheck: false },
    { category: "Data & Coverage", feature: "Geographic precision", engrant: "County and city-level filtering", competitor: "State-level only (no county/city specificity)", engrantCheck: true, competitorCheck: false },
    { category: "Data & Coverage", feature: "990 Data", engrant: "Key insights surfaced in match reasons", competitor: "Access to 990-PF tax return data", engrantCheck: true, competitorCheck: true },
    { category: "Data & Coverage", feature: "International grants", engrant: GEOGRAPHY_SHORT, competitor: "Separate Canadian and International database sections", engrantCheck: true, competitorCheck: true },
    { category: "Grant Management", feature: "Saved grantmakers / tracking", engrant: "Save/reject with learning system", competitor: "Save grantmakers to Projects dashboard", engrantCheck: true, competitorCheck: true },
    { category: "Grant Management", feature: "AI matching", engrant: "Full AI-powered intelligent matching", competitor: "No AI — keyword/filter search only", engrantCheck: true, competitorCheck: false },
    { category: "Grant Management", feature: "AI writing assistance", engrant: "Not included", competitor: "Not available", engrantCheck: false, competitorCheck: false },
    { category: "Educational Resources", feature: "Training content", engrant: "Focused on tool — minimal learning needed", competitor: "GrantStation Insider, webinars, tutorials, TechSoup partnerships", engrantCheck: "partial", competitorCheck: true },
    { category: "Pricing", feature: "Annual cost", engrant: "$444/year ($37/month billed annually)", competitor: "$699/year retail; $199/year TechSoup ($150 Plus); ~$119 promos ~2×/year", engrantCheck: "partial", competitorCheck: true },
    { category: "Pricing", feature: "Monthly option", engrant: "$47/month (no commitment)", competitor: "Annual membership only", engrantCheck: true, competitorCheck: false },
    { category: "Pricing", feature: "Free trial", engrant: "2 weeks, no credit card", competitor: "Limited trial available", engrantCheck: true, competitorCheck: "partial" },
    { category: "Best For", feature: "Target user", engrant: "Solo dev directors who need AI-powered discovery", competitor: "Budget-conscious orgs comfortable with manual research", engrantCheck: true, competitorCheck: true },
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
            Engrant vs GrantStation: Which Is Better?
          </h2>
          <p className="text-xl text-neutral-600 mb-4">A side-by-side comparison for nonprofit grant seekers in 2026</p>
          <p className="text-neutral-500 max-w-3xl mx-auto italic">
            GrantStation is a solid budget option with useful educational resources. Here's how it compares to Engrant's AI-powered grant discovery:
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
                <span className="font-semibold text-slate-600">GrantStation</span>
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
                With GrantStation, you navigate separate databases (US Charitable, US Federal, US State Government, Canadian, International), select keywords from dropdown menus, choose geographic filters, and manually review each result. It's straightforward — but it's manual work.
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
                GrantStation gives you funder names, locations, and brief descriptions. From there, you click into each profile to manually assess whether it's worth pursuing. That's how traditional databases work.
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
        
        {/* 4C: Live-web vs large curated catalog */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Database className="w-4 h-4 mr-2" />
                Database Coverage
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                Search the entire web — not just 150,000+ funder profiles
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                GrantStation curates a database of roughly 150,000 funder profiles and ~15,000 curated opportunities, focusing on active grantmakers. While curated quality matters, it means many opportunities are simply not in their system.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 warm-shadow-lg border border-teal-100">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-semibold text-slate-700 mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mr-2 text-sm font-bold text-slate-600">GS</span>
                    GrantStation
                  </h3>
                  <div className="text-3xl font-bold text-slate-600 mb-2">~150k profiles</div>
                  <p className="text-neutral-500 text-sm">curated funders in a static database</p>
                  <p className="text-neutral-500 text-sm mt-2">11 results in a real-world test search</p>
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
                When a new RFP posts anywhere on the web, Engrant can find it immediately. With GrantStation, you're limited to what's in their curated database.
              </p>
              <p className="text-teal-700 font-medium">
                For time-sensitive grant deadlines, real-time discovery matters.
              </p>
            </div>
          </div>
        </div>
        
        {/* 4C2: Past recipients */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 warm-shadow-lg border border-teal-100">
              <h3 className="font-semibold text-slate-700 mb-2">Example: Past recipients similar to your organization</h3>
              <p className="text-sm text-amber-700 mb-4 font-medium">Illustrative example — not live customer data</p>
              <p className="text-neutral-600 mb-4">Engrant surfaces peer organizations that received funding from the same grant — GrantStation profiles do not provide org-specific past-recipient intelligence.</p>
            </div>
          </div>
        </div>

        {/* 4D: Geographic Precision */}
        <div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 mr-2" />
              Geographic Precision
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              County and city-level matching — not just state
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-4">
              GrantStation's geographic filtering only goes to the state level. In a test for a Chicago-based nonprofit, this meant results for counties nowhere near Chicago — wasting time on irrelevant opportunities.
            </p>
            <p className="text-lg text-teal-700 font-medium max-w-2xl mx-auto">
              Engrant checks geographic eligibility at the county and city level, ensuring you only see grants you can actually apply for based on where you operate.
            </p>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              For nonprofits serving specific communities, geographic precision eliminates wasted research hours.
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
            When GrantStation might be better vs. when Engrant is better
          </h2>
          <p className="text-lg text-neutral-600">We believe in honest comparisons. Here's when each tool makes sense.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                <span className="text-slate-600 font-bold text-sm">GS</span>
              </span>
              Use GrantStation if you:
            </h3>
            <ul className="space-y-4">
              {[
                "Have TechSoup access ($199/year, or $150 with TechSoup Plus) and want maximum database per dollar",
                "Prefer hands-on research and enjoy browsing funder profiles",
                "Want educational resources, webinars, and grant writing tutorials",
                "Need access to US Federal and State Government grant databases",
                "Are comfortable with manual keyword-based searching",
                "Want a supplementary tool to use alongside a primary grant platform",
                "Value the weekly GrantStation Insider newsletter for staying current"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-600">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-neutral-500 text-sm mt-6 italic">
              GrantStation's TechSoup pricing, faith/civic/corporate/international coverage, and educational library make it a strong budget research hub for nonprofits new to grant seeking.
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
                "Are a solo development director who can't spend hours on manual searching",
                "Want AI to find and evaluate grants — not just list them",
                "Need fit scores, competition levels, and red flags for each grant",
                "Want geographic matching at the county/city level, not just state",
                "Are frustrated by databases that return too few or irrelevant results",
                "Need real-time discovery from the entire web, not a fixed database",
                "Value time savings — even if it costs more than a basic database"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-teal-700 font-medium mt-6 italic">
              Engrant costs more than GrantStation — but the hours saved on manual research typically pay for the difference many times over.
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
              <div className="text-3xl font-bold text-teal-600 mb-2">5+</div>
              <div className="text-neutral-600">hours/week saved on grant research</div>
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
            How Much Does GrantStation Cost?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Retail is $699/year; TechSoup nonprofits often pay $199/year. The question is whether manual database sessions cost more than the price gap to Engrant.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* GrantStation Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-6">GrantStation</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">RETAIL MEMBERSHIP</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-700">$699</span>
                  <span className="text-neutral-500 ml-1">/year</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">Direct from GrantStation</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">TECHSOUP NONPROFIT</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-700">$199</span>
                  <span className="text-neutral-500 ml-1">/year</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">$150/year with TechSoup Plus · ~$119 promotional pricing ~2×/year</p>
              </div>
              
              <div className="pt-4">
                <p className="text-sm font-semibold text-slate-500 mb-3">WHAT'S INCLUDED:</p>
                <div className="space-y-2">
                  {[
                    "~150k funder profiles + ~15k curated opportunities",
                    "Manual keyword search across databases",
                    "State-level geographic filtering",
                    "Basic funder profiles & 990 data",
                    "Educational resources & webinars",
                    "GrantStation Insider newsletter",
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
                    "AI-powered matching or fit scoring",
                    "Competition level indicators",
                    "Red flags & eligibility warnings",
                    "County/city geographic precision",
                    "Real-time web search",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-neutral-500">
                      <X className="w-4 h-4 text-rose-300 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
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
              
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-slate-800">$47</span>
                  <span className="text-xl text-neutral-500 ml-2">/month</span>
                </div>
                <p className="text-teal-600 font-medium mt-2">
                  Or $37/month when billed annually ($444/year)
                </p>
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
                href="https://app.engrant.eu/?utm_source=grantstation_comparison&utm_medium=pricing&utm_campaign=pricing_cta"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'cta_click', {
                      location: 'pricing',
                      page: 'grantstation_comparison'
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
              TechSoup GrantStation ($199/year) costs less than Engrant ($444/year billed annually). If manual filtering and state-wide noise eat even a few staff hours per week, pre-evaluated Engrant matches can recover that time — your mileage will vary.
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

  const faqs = GRANTSTATION_FAQS;

  return (
    <section id="faq" className="py-24 section-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Common Questions About GrantStation Alternatives
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
      title: "Instrumentl vs GrantStation Teardown",
      url: "https://www.instrumentl.com/blog/grantstation-vs-instrumentl-teardown",
      description: "Detailed real-world comparison of GrantStation and Instrumentl by a grant writing consultant, including result counts and geographic filtering limitations"
    },
    {
      title: "GrantStation Official Website",
      url: "https://grantstation.com",
      description: "GrantStation's official platform with membership details, funder search, and educational resources"
    },
    {
      title: "Instrumentl vs GrantStation Comparison",
      url: "https://www.instrumentl.com/blog/grantstation-discount-code",
      description: "Comparison noting GrantStation geographic limits and match counts in real-world tests"
    },
    {
      title: "Grant Professionals Association: GrantStation Review",
      url: "https://grantprofessionals.org/news/712761/More-than-a-Database-Unlocking-the-Many-Benefits-of-GrantStation.htm",
      description: "Professional association review of GrantStation's features and benefits for grant writers"
    },
    {
      title: "SOAR: How to Use Grant Databases",
      url: "https://soar-ky.org/grant-databases/",
      description: "Guide comparing GrantStation, GrantWatch, and Foundation Directory Online for nonprofits"
    },
    {
      title: "Empower Change Consulting: Grant Platform Comparison",
      url: "https://empowerchangeconsulting.com/2025/07/31/instrumentl-vs-candid-vs-grantstation-2025-which-grant-platform-fits-small-nonprofits/",
      description: "2025 comparison of Instrumentl, Candid, and GrantStation for small nonprofits"
    },
    {
      title: "TechSoup: How to Use GrantStation's Tools",
      url: "https://www.youtube.com/watch?v=vuA452iB9z0",
      description: "TechSoup tutorial on using GrantStation's grant seeking tools and features"
    }
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
            href="https://app.engrant.eu/?utm_source=grantstation_comparison&utm_medium=cta&utm_campaign=final_cta"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'final_cta',
                  page: 'grantstation_comparison'
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


export default GrantStationComparisonPage;

export const Head = () => {
  const faqSchema = buildFaqSchema(GRANTSTATION_FAQS);
  const breadcrumbSchema = buildBreadcrumbSchema(
    'GrantStation Alternative',
    '/compare/grantstation/'
  );

  const productSchema = buildProductSchema({
    description: 'AI-powered grant discovery platform for nonprofits. Find 30-50 highly relevant grants with fit scores, competition levels, and red flags.',
    offers: [buildMonthlyOffer(), buildAnnualOffer()],
  });

  return (
    <>
      <title>GrantStation Alternative for Nonprofits | Engrant vs GrantStation (2026)</title>
      <meta
        name="description"
        content={`Compare Engrant vs GrantStation. GrantStation: $699/year retail, $199/year TechSoup, ~150k funder profiles. Engrant: ${PRICE_MONTHLY}/month AI matching with county-level geo.`}
      />
      <meta
        name="keywords"
        content="GrantStation alternative, GrantStation cost, GrantStation TechSoup, GrantStation vs Engrant, grant database for nonprofits, AI grant matching"
      />
      <meta name="dateModified" content={LAST_REVIEWED} />
      <link rel="canonical" href="https://engrant.eu/compare/grantstation/" />
      <OgTwitterMeta
        title="GrantStation Alternative: Engrant vs GrantStation Comparison"
        description="TechSoup-priced database vs AI discovery with county-level fit scores."
        url="https://engrant.eu/compare/grantstation/"
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
