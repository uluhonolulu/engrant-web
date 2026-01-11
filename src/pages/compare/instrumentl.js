import React from 'react';
import '../../styles/shared.css';
import { 
  Check, X, ChevronDown, Clock, Search, AlertTriangle, 
  Target, Users, Zap, BarChart3, Shield, Lock,
  Sparkles, FileText, DollarSign, Eye, Award, TrendingUp, Mountain
} from 'lucide-react';
import logo from '../../images/logo-horizontal-remove-background.com.png';
import engrantExpanded from '../../images/Engrant-expanded.png';

const InstrumentlComparisonPage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen w-full">
        <Header />
        <main className="w-full">
          <Hero />
          <ProblemSection />
          <ComparisonTable />
          <KeyDifferences />
          <HonestAssessment />
          <Testimonials />
          <PricingComparison />
          <FAQSection />
          <SourcesSection />
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
              href="https://app.engrant.eu/"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'header',
                    page: 'instrumentl_comparison'
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
          Instrumentl Alternative
        </div>
        
        <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
          Is Instrumentl overkill for your nonprofit?
        </h1>
        
        <p className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
          Get AI-powered grant discovery at $47/month—not $179-899. Engrant shows you 10-20 highly relevant grants with fit scores and red flags, without the enterprise complexity.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'hero',
                  page: 'instrumentl_comparison'
                });
              }
            }}
            className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg inline-block">
            Find my grants
          </a>
          <a href="#comparison" className="text-teal-700 hover:text-teal-800 font-medium flex items-center group">
            See how it works
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
      icon: DollarSign,
      title: "$179-899/month is enterprise pricing",
      description: "Instrumentl's pricing starts at $179/month and goes up to $899/month for the Advanced plan. For small nonprofits, this is often prohibitive.",
      quote: "We actually find that Instrumentl is indeed overkill for smaller nonprofits.",
      quoteSource: "Instrumentl Support Team",
      sourceUrl: "https://reviews.financesonline.com/p/instrumentl/",
      engrantAlternative: "$47/month gets you AI-powered discovery"
    },
    {
      icon: BarChart3,
      title: "Too many results, too little clarity",
      description: "Instrumentl provides access to 20,000+ opportunities, but users report difficulty filtering out opportunities that aren't a perfect match.",
      quote: "There is such a wealth of information in Instrumentl, it can be difficult to filter out opportunities that aren't a perfect match for mission, goals, or proximity.",
      quoteSource: "Software Advice Review",
      sourceUrl: "https://www.softwareadvice.com/grant-management/instrumentl-profile/",
      engrantAlternative: "10-20 pre-evaluated grants, not 300 possibilities"
    },
    {
      icon: Mountain,
      title: "Weeks to learn, not minutes",
      description: "The platform's comprehensive features come with a steep learning curve that takes time to master.",
      quote: "The app is complex because of its rich features. It took us a few weeks to learn how to use it effectively.",
      quoteSource: "Software Advice Review",
      sourceUrl: "https://www.softwareadvice.com/grant-management/instrumentl-profile/",
      engrantAlternative: "Enter your org name → get results in minutes"
    },
    {
      icon: Lock,
      title: "The good stuff costs extra",
      description: "Key features like Peer Prospecting require the Pro plan at $499/month. Advanced 990 insights require Standard at $299/month.",
      quote: null,
      quoteSource: null,
      engrantAlternative: "All features included at $47/month"
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
            Why Nonprofits Are Looking for Instrumentl Alternatives
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
    { category: "Setup & Onboarding", feature: "Setup time", engrant: "Enter org name/URL → AI researches automatically", instrumentl: "Create project → set keywords → refine matches", engrantCheck: true, instrumentlCheck: "partial" },
    { category: "Setup & Onboarding", feature: "Learning curve", engrant: "Minimal – results in minutes", instrumentl: "Several weeks to master all features", engrantCheck: true, instrumentlCheck: false },
    { category: "Search & Results", feature: "Results approach", engrant: "10-20 pre-evaluated, high-fit grants", instrumentl: "100s of matches to manually evaluate", engrantCheck: true, instrumentlCheck: false },
    { category: "Search & Results", feature: "Fit assessment", engrant: "AI-generated fit score with detailed reasons", instrumentl: "Match indicators, requires manual review", engrantCheck: true, instrumentlCheck: "partial" },
    { category: "Search & Results", feature: "Eligibility screening", engrant: "Flags disqualifiers before you apply", instrumentl: "Sometimes shows ineligible opportunities", engrantCheck: true, instrumentlCheck: "partial" },
    { category: "Intelligence & Insights", feature: "Competition level", engrant: "Shows High/Medium/Low competition", instrumentl: "Not available", engrantCheck: true, instrumentlCheck: false },
    { category: "Intelligence & Insights", feature: "Application effort estimate", engrant: "Shows effort level required", instrumentl: "Not available", engrantCheck: true, instrumentlCheck: false },
    { category: "Intelligence & Insights", feature: "Red flags & warnings", engrant: "Proactive warnings (consortium required, etc.)", instrumentl: "Requirements listed but not flagged", engrantCheck: true, instrumentlCheck: "partial" },
    { category: "Intelligence & Insights", feature: "Funder openness to new grantees", engrant: "Clearly indicated", instrumentl: "Available in funder profiles", engrantCheck: true, instrumentlCheck: true },
    { category: "Intelligence & Insights", feature: "Past recipients like you", engrant: "Shows similar orgs that got funded", instrumentl: "Peer Prospecting (Pro plan, $499/mo)", engrantCheck: true, instrumentlCheck: true },
    { category: "Data & Freshness", feature: "Data source", engrant: "Real-time web search (always current)", instrumentl: "Curated database (updated weekly)", engrantCheck: true, instrumentlCheck: "partial" },
    { category: "Data & Freshness", feature: "Database size", engrant: "Searches entire web", instrumentl: "20,000+ RFPs, 400,000+ funder profiles", engrantCheck: true, instrumentlCheck: true },
    { category: "Data & Freshness", feature: "990 Data", engrant: "Key insights surfaced in match reasons", instrumentl: "Full interactive 990 reports", engrantCheck: true, instrumentlCheck: true },
    { category: "Grant Management", feature: "Deadline tracking", engrant: "Basic tracking", instrumentl: "Full calendar with integrations", engrantCheck: true, instrumentlCheck: true },
    { category: "Grant Management", feature: "Team collaboration", engrant: "Basic (coming soon)", instrumentl: "Full team features with roles", engrantCheck: "partial", instrumentlCheck: true },
    { category: "Grant Management", feature: "Application workflow", engrant: "Not included", instrumentl: "Full lifecycle management", engrantCheck: false, instrumentlCheck: true },
    { category: "Grant Management", feature: "AI writing assistance", engrant: "Not included", instrumentl: "Apply Advisor (learns from your apps)", engrantCheck: false, instrumentlCheck: true },
    { category: "Learning & Improvement", feature: "Learns from feedback", engrant: "Improves based on saves/rejects", instrumentl: "Improves match relevance", engrantCheck: true, instrumentlCheck: "partial" },
    { category: "Pricing", feature: "Starting price", engrant: "$47/month ($37/month annually)", instrumentl: "$179/month (annual commitment)", engrantCheck: true, instrumentlCheck: false },
    { category: "Pricing", feature: "Full features price", engrant: "$47/month", instrumentl: "$499/month (Pro)", engrantCheck: true, instrumentlCheck: false },
    { category: "Pricing", feature: "Free trial", engrant: "2 weeks, no credit card", instrumentl: "14 days", engrantCheck: true, instrumentlCheck: true },
    { category: "Best For", feature: "Target user", engrant: "Solo development directors, small teams", instrumentl: "Grant teams, consultants, universities", engrantCheck: true, instrumentlCheck: true },
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
            Engrant vs Instrumentl: Which Is Better?
          </h2>
          <p className="text-xl text-neutral-600 mb-4">A side-by-side comparison for nonprofit grant seekers in 2025</p>
          <p className="text-neutral-500 max-w-3xl mx-auto italic">
            Instrumentl is an excellent full-lifecycle platform. We recommend it for larger organizations needing comprehensive workflow management. Here's how we compare for grant discovery:
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
                <span className="font-semibold text-slate-600">Instrumentl</span>
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
                          row.instrumentlCheck === true ? 'bg-teal-100' : 
                          row.instrumentlCheck === 'partial' ? 'bg-amber-100' : 'bg-rose-50'
                        }`}>
                          {row.instrumentlCheck === true ? (
                            <Check className="text-teal-600 w-3 h-3 md:w-4 md:h-4" />
                          ) : row.instrumentlCheck === 'partial' ? (
                            <span className="text-amber-600 text-xs font-bold">~</span>
                          ) : (
                            <X className="text-rose-400 w-3 h-3 md:w-4 md:h-4" />
                          )}
                        </div>
                        <span className="text-neutral-600 text-sm md:text-base">{row.instrumentl}</span>
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
        
        {/* 4A: Setup That Respects Your Time */}
        <div className="mb-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Effortless Setup
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                From organization name to relevant grants in minutes—not weeks
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                With Instrumentl, you create a project, select keywords, choose geographic areas, and review matches. It's thorough—but it takes time to learn and optimize.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Engrant works differently. Enter your organization name or website URL. Our AI researches your mission, programs, geography, and characteristics automatically. Within minutes, you're reviewing grants that actually fit—not setting up search parameters.
              </p>
              <p className="text-neutral-500 italic">
                For solo development directors managing 8-10 responsibilities, those setup hours matter.
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
        
        {/* 4B: Quality Over Quantity */}
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
                Quality Over Quantity
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                10 grants you can actually pursue, not 300 to sort through
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Instrumentl gives you access to 20,000+ active opportunities. That's powerful—if you have time to evaluate them.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Engrant takes a different approach. We show you 10-20 grants at a time, each with:
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
                You save or reject each grant, and our system learns your preferences. No more scrolling through hundreds of "maybes."
              </p>
            </div>
          </div>
        </div>
        
        {/* 4C: See Who Funds Organizations Like Yours */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Past Recipients
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                Past recipients like you—without the $499/month paywall
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                One of Instrumentl's best features is Peer Prospecting—seeing which funders support organizations similar to yours. But it requires the Pro plan at $499/month.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 warm-shadow-lg border border-teal-100">
              <p className="text-lg text-neutral-600 mb-6">
                Engrant includes this intelligence in every plan. When we show you a grant, we show you similar organizations that received funding. You see immediately whether funders support organizations at your scale and stage.
              </p>
              
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                <h3 className="font-semibold text-slate-700 mb-4">Example: Past recipients similar to your organization:</h3>
                <div className="space-y-3">
                  {[
                    { name: "Brooklyn Community Housing Alliance", amount: "$4,500", year: "2024" },
                    { name: "Sunset Park Neighbors Coalition", amount: "$3,200", year: "2024" },
                    { name: "East Harlem Youth Initiative", amount: "$5,000", year: "2023" },
                  ].map((recipient, index) => (
                    <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4 border border-teal-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                          <Check className="w-4 h-4 text-teal-600" />
                        </div>
                        <span className="font-medium text-slate-700">{recipient.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-teal-600">{recipient.amount}</span>
                        <span className="text-neutral-500 text-sm ml-2">({recipient.year})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <p className="text-neutral-600 mt-6 italic">
                No tiers. No upsells. One price for everything.
              </p>
            </div>
          </div>
        </div>
        
        {/* 4D: Real-Time Search vs. Database Snapshots */}
        <div>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Always Current
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
              Real-time grants, not a dusty database
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-4">
              Instrumentl maintains a curated database of 20,000+ opportunities, updated weekly by their research team. It's comprehensive and well-organized.
            </p>
            <p className="text-lg text-teal-700 font-medium max-w-2xl mx-auto">
              Engrant searches the live web for each query. When a new RFP posts, you see it immediately—not after next week's database update. When a deadline changes, you know instantly.
            </p>
            <p className="text-neutral-600 mt-4 max-w-2xl mx-auto">
              For time-sensitive grant deadlines, real-time matters.
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
            When Instrumentl might be better vs. when Engrant is better
          </h2>
          <p className="text-lg text-neutral-600">We believe in honest comparisons. Here's when each tool makes sense.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                <span className="text-slate-600 font-bold">I</span>
              </span>
              Use Instrumentl if you:
            </h3>
            <ul className="space-y-4">
              {[
                "Have a $3,000-10,000+ annual budget for grant tools",
                "Need full grant lifecycle management (application tracking, reporting, budget spenddown)",
                "Work with a grant team of 3+ people who need collaboration features",
                "Are a grant consultant managing multiple nonprofit clients",
                "Need AI-powered proposal writing assistance",
                "Want deep historical 990 analysis across decades of data",
                "Are a university or large institution with complex grant portfolios"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-600">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-neutral-500 text-sm mt-6 italic">
              Instrumentl's comprehensive platform justifies its price for organizations that will use all its features.
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
                "Are a solo development director or small team (1-2 people)",
                "Have limited technology budget (<$100/month)",
                "Need to find grants fast, not manage a complex pipeline",
                "Are overwhelmed by information overload in current tools",
                "Want AI to do the evaluation work, not just the searching",
                "Don't have weeks to learn a new platform",
                "Need accurate filtering (no federal grants when you exclude federal funding)"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-teal-700 font-medium mt-6 italic">
              Engrant is purpose-built for the 90% of nonprofits that can't justify $179-899/month.
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
      quote: "We told all of them that we didn't accept federal funding, and I would say 90% of what we got back was federal funding requests.",
      attribution: "Barbara K., Grant Writer, Healthcare Free Clinic"
    },
    {
      quote: "If they didn't know much about us, how are you gonna figure it out?",
      attribution: "Nonprofit Grant Coordinator on shallow profiling in competitor tools"
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
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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
              <div className="text-3xl font-bold text-teal-600 mb-2">10-20</div>
              <div className="text-neutral-600">pre-evaluated grants per search</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">$47</div>
              <div className="text-neutral-600">per month—not $179-899</div>
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
            How Much Do Grant Tools Cost?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Pricing comparison for small-to-medium nonprofits seeking affordable grant research tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Instrumentl Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-6">Instrumentl</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">BASIC</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-700">$179</span>
                  <span className="text-neutral-500 ml-1">/month</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">($2,148/year)</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">STANDARD</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-700">$299</span>
                  <span className="text-neutral-500 ml-1">/month</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">($3,588/year)</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">PRO</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-700">$499</span>
                  <span className="text-neutral-500 ml-1">/month</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">($5,988/year)</p>
                <p className="text-xs text-amber-600 mt-2">Peer Prospecting included</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">ADVANCED</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-700">$899</span>
                  <span className="text-neutral-500 ml-1">/month</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">($10,788/year)</p>
              </div>
              
              <p className="text-sm text-neutral-500 italic mt-4">
                All plans require annual commitment • Additional users: $5/month each
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
                  "AI-powered matching",
                  "Pre-evaluated grants with fit scores",
                  "Learning recommendations",
                  "Past recipients like you",
                  "Real-time search",
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
                href="https://app.engrant.eu/"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'cta_click', {
                      location: 'pricing',
                      page: 'instrumentl_comparison'
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
        
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="bg-amber-50 border border-amber-100 rounded-xl p-6">
            <p className="text-amber-800 text-center font-medium leading-relaxed">
              At $47/month, Engrant costs <strong>74% less</strong> than Instrumentl's Basic plan and <strong>91% less</strong> than their Pro plan.
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

  const faqs = [
    {
      question: "What is the best alternative to Instrumentl?",
      answer: "For small-to-medium nonprofits focused on grant discovery (not full lifecycle management), Engrant is the leading Instrumentl alternative. At $47/month vs Instrumentl's $179-899/month, Engrant provides AI-powered grant matching with fit scores, competition levels, and red flag warnings. It's designed for solo development directors and small teams who need relevant grants fast, without weeks of learning curve."
    },
    {
      question: "How much does Instrumentl cost?",
      answer: "Instrumentl pricing starts at $179/month for the Basic plan, with Standard at $299/month, Pro at $499/month, and Advanced at $899/month. All plans require annual payment upfront. Key features like Peer Prospecting (seeing who funds similar organizations) require the Pro plan at $499/month. Additional users cost $5/month each."
    },
    {
      question: "What's the difference between Instrumentl and Engrant?",
      answer: "Instrumentl is a comprehensive full-lifecycle grant management platform with 20,000+ opportunities, workflow tracking, team collaboration, and AI proposal writing. It's built for larger organizations with dedicated grant staff and costs $179-899/month. Engrant is a focused grant discovery tool that uses AI to find and pre-evaluate grants for small nonprofits. It shows 10-20 high-fit grants with fit scores and red flags, costs $47/month, and requires no setup or learning curve. It's built for solo development directors who need results in minutes, not a platform to master."
    },
    {
      question: "Is Instrumentl worth it for small nonprofits?",
      answer: "It depends on your needs and budget. Instrumentl's own support team has stated: 'We actually find that Instrumentl is indeed overkill for smaller nonprofits.' For organizations with $5M+ budgets, dedicated grant staff, and need for full workflow management, Instrumentl provides excellent value. For small nonprofits ($1-5M budget) with solo development directors who primarily need to find grants quickly, tools like Engrant provide similar discovery capabilities at a fraction of the cost ($47/month vs $179-899/month)."
    },
    {
      question: "How can I find grants faster than using Instrumentl?",
      answer: "If you're spending hours scrolling through Instrumentl's 100+ matches looking for the right fit, Engrant offers a faster approach. Instead of giving you a database to search, Engrant: (1) Researches your organization automatically (no keyword setup), (2) Shows 10-20 pre-evaluated grants at a time, (3) Provides fit scores explaining why each grant matches, (4) Flags red flags and disqualifiers upfront, (5) Learns from your saves/rejects to improve future results. Most users find relevant grants in minutes, not hours—without learning a complex platform."
    },
    {
      question: "What grant database has the best filtering for small nonprofits?",
      answer: "Small nonprofits often struggle with databases that return hundreds of results requiring manual filtering. Engrant addresses this with AI-powered pre-filtering that: excludes grant types you specify (no federal grants when you say no federal), checks geographic eligibility accurately (state-level precision), surfaces red flags before you invest time (consortium requirements, first-time grantee restrictions), and shows competition levels so you can prioritize winnable grants. Unlike databases that match on keywords alone, Engrant evaluates actual eligibility criteria."
    },
    {
      question: "Does Instrumentl have a cheaper alternative?",
      answer: "Yes. For grant discovery specifically, several alternatives cost less than Instrumentl's $179/month starting price: Engrant ($47/month — AI-powered discovery with fit scores and pre-evaluation), GrantStation ($199/year — Basic database with educational resources), GrantWatch ($199/year — Broad database with basic search), Foundation Directory Online ($55/month Essential — Large funder database, free at libraries). Engrant is positioned between budget options and Instrumentl—offering AI intelligence without enterprise pricing."
    },
    {
      question: "Can I use Engrant and Instrumentl together?",
      answer: "Yes. Some organizations use Engrant for rapid discovery and initial filtering, then use Instrumentl's workflow tools for managing applications they've committed to pursue. If you have Instrumentl for its lifecycle management but find discovery overwhelming, Engrant can serve as your focused front-end for finding grants worth pursuing."
    }
  ];

  return (
    <section id="faq" className="py-24 section-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Common Questions About Instrumentl Alternatives
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
              {openIndex === index && (
                <p className="text-neutral-600 leading-relaxed mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sources & References Section - For trust signals and LLM credibility
const SourcesSection = () => {
  const sources = [
    {
      title: "Instrumentl Official Pricing",
      url: "https://www.instrumentl.com/pricing",
      description: "Official pricing page showing Basic ($179/month), Standard ($299/month), Pro ($499/month), and Advanced ($899/month) tiers"
    },
    {
      title: "G2 Reviews: Instrumentl",
      url: "https://www.g2.com/products/instrumentl/reviews",
      description: "User reviews of Instrumentl from verified nonprofit professionals"
    },
    {
      title: "Capterra Reviews: Instrumentl",
      url: "https://www.capterra.com/p/191202/Instrumentl/",
      description: "Instrumentl reviews and pricing information from Capterra"
    },
    {
      title: "Software Advice: Instrumentl Reviews",
      url: "https://www.softwareadvice.com/grant-management/instrumentl-profile/",
      description: "User reviews and feedback about Instrumentl's complexity and learning curve"
    },
    {
      title: "GetApp Reviews: Instrumentl",
      url: "https://www.getapp.com/fundraising-software/a/instrumentl/",
      description: "Instrumentl reviews mentioning price concerns and recent increases"
    },
    {
      title: "FinancesOnline: Instrumentl Review",
      url: "https://reviews.financesonline.com/p/instrumentl/",
      description: "Instrumentl review documenting support team response about smaller nonprofits"
    },
    {
      title: "Funding for Good: Comparing Grant Research Databases",
      url: "https://www.fundingforgood.org/blog/comparing-grant-research-databases",
      description: "Comparison article on grant research tools and databases (May 2024)"
    },
    {
      title: "Empower Change Consulting: Grant Tools Comparison",
      url: "https://www.empowerchangeconsulting.com/blog",
      description: "Comparison article on grant management tools (July 2025)"
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
          Last updated: January 2025. Pricing and features may change; verify current information on official websites.
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
          Ready for grant discovery that respects your time and budget?
        </h2>
        
        <p className="text-xl lg:text-2xl mb-12 text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Engrant gives you AI-powered grant matching at $47/month—not $179-899. Find 10-20 highly relevant grants with fit scores, competition levels, and red flags. No weeks of setup. No feature tiers. No annual commitment required.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'final_cta',
                  page: 'instrumentl_comparison'
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
            href="#how-it-works"
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

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-white font-bold text-xl">Engrant</a>
            <p className="text-sm mt-2">AI-powered grant matching for nonprofits</p>
          </div>
          <div className="flex items-center space-x-8">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
            <a href="mailto:support@engrant.eu" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Engrant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default InstrumentlComparisonPage;

export const Head = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best alternative to Instrumentl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For small-to-medium nonprofits focused on grant discovery, Engrant is the leading Instrumentl alternative at $47/month vs $179-899/month. It provides AI-powered grant matching with fit scores, competition levels, and red flag warnings, designed for solo development directors who need relevant grants fast."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Instrumentl cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instrumentl pricing starts at $179/month (Basic), with Standard at $299/month, Pro at $499/month, and Advanced at $899/month. All plans require annual payment. Features like Peer Prospecting require Pro ($499/month)."
        }
      },
      {
        "@type": "Question", 
        "name": "What's the difference between Instrumentl and Engrant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instrumentl is a full-lifecycle grant management platform ($179-899/month) built for larger organizations with dedicated grant staff. Engrant is a focused grant discovery tool ($47/month) that uses AI to find and pre-evaluate grants for small nonprofits, requiring no setup or learning curve."
        }
      },
      {
        "@type": "Question",
        "name": "Is Instrumentl worth it for small nonprofits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instrumentl's own support team has stated it's 'overkill for smaller nonprofits.' For organizations with $5M+ budgets and dedicated grant staff, it provides excellent value. For small nonprofits with solo development directors, alternatives like Engrant offer similar discovery capabilities at $47/month instead of $179-899/month."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Engrant",
    "description": "AI-powered grant discovery platform for nonprofits. Find 10-20 highly relevant grants with fit scores, competition levels, and red flags.",
    "category": "Grant Research Software",
    "brand": {
      "@type": "Brand",
      "name": "Engrant"
    },
    "offers": {
      "@type": "Offer",
      "price": "47",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "50"
    }
  };

  return (
    <>
      <title>Instrumentl Alternative for Nonprofits | Engrant vs Instrumentl</title>
      <meta 
        name="description" 
        content="Looking for an Instrumentl alternative? Compare Engrant's AI-powered grant matching vs Instrumentl. Same smart discovery at $47/month vs $179-899/month." 
      />
      <meta 
        name="keywords" 
        content="Instrumentl alternative, Instrumentl vs Engrant, grant database for nonprofits, grant search tool, AI grant matching, nonprofit grant database, Instrumentl cheaper alternative" 
      />
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

