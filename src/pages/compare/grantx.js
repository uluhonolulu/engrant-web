import React from 'react';
import '../../styles/shared.css';
import { 
  Check, X, ChevronDown, Sparkles, Users, Globe, DollarSign,
  FileText, Zap, Target, Shield, ArrowRight
} from 'lucide-react';
import logo from '../../images/logo-horizontal-remove-background.com.png';
import engrantExpanded from '../../images/Engrant-expanded.png';
import Footer from '../../components/Footer';

const GrantXComparisonPage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen w-full">
        <Header />
        <main className="w-full">
          <Hero />
          <QuickComparisonSummary />
          <ComparisonTable />
          <KeyDifferencesExplained />
          <HonestAssessment />
          <ProblemRecognition />
          <PricingComparison />
          <FAQSection />
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
                    page: 'grantx_comparison'
                  });
                }
              }}
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md">
              Try Engrant Free
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
          Engrant vs GrantX Comparison
        </div>
        
        <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
          Engrant vs GrantX: Different Tools for Different Needs
        </h1>
        
        <p className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
          Both platforms use AI to help you find grants. But they're built for different users with different pricing models. Here's an honest comparison to help you decide.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'hero',
                  page: 'grantx_comparison'
                });
              }
            }}
            className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg inline-block">
            Try Engrant Free
          </a>
          <a 
            href="https://app.grantx.com/pricing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-teal-700 font-medium px-6 py-4 rounded-full border-2 border-neutral-300 hover:border-teal-500 transition-colors inline-block">
            See GrantX Pricing
            <ArrowRight className="w-4 h-4 inline ml-2" />
          </a>
        </div>
        
        <p className="text-neutral-500 flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
          14-day free trial • No credit card required
        </p>
      </div>
    </section>
  );
};

// Quick Comparison Summary Section
const QuickComparisonSummary = () => {
  return (
    <section className="py-16 bg-white border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Quick Comparison Summary
          </h2>
          <p className="text-lg text-neutral-600">
            Two different approaches to grant discovery
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Engrant Card */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-3xl p-8 border border-teal-100 warm-shadow-lg">
            <div className="flex items-center mb-6">
              <Sparkles className="w-6 h-6 text-teal-600 mr-3" />
              <h3 className="text-2xl font-bold text-teal-700">Engrant</h3>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Built for</span>
                <p className="text-neutral-700 mt-1">Solo development professionals at small nonprofits</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Pricing</span>
                <p className="text-neutral-700 mt-1">$47/month flat rate (or $37/month annually)</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Model</span>
                <p className="text-neutral-700 mt-1">Unlimited searches, one simple plan</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Geographic focus</span>
                <p className="text-neutral-700 mt-1">North America, Europe, and beyond</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Key approach</span>
                <p className="text-neutral-700 mt-1">Curated matches with plain-English explanations</p>
              </div>
            </div>
          </div>
          
          {/* GrantX Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <div className="flex items-center mb-6">
              <Target className="w-6 h-6 text-slate-600 mr-3" />
              <h3 className="text-2xl font-bold text-slate-700">GrantX</h3>
            </div>
            <div className="space-y-4">
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Built for</span>
                <p className="text-neutral-700 mt-1">Organizations of all sizes, including universities and research institutions</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Pricing</span>
                <p className="text-neutral-700 mt-1">$79-$2,499/month (credit-based tiers)</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Model</span>
                <p className="text-neutral-700 mt-1">Credit system with team collaboration features</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Geographic focus</span>
                <p className="text-neutral-700 mt-1">U.S.-based organizations</p>
              </div>
              <div>
                <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wide">Key approach</span>
                <p className="text-neutral-700 mt-1">Large database with workflow management and optional expert services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Comparison Table Section
const ComparisonTable = () => {
  const features = [
    { feature: "Pricing Model", engrant: "Flat monthly rate", grantx: "Credit-based tiers", engrantCheck: true, grantxCheck: true },
    { feature: "Entry Price", engrant: "$47/month", grantx: "$79/month (Starter)", engrantCheck: true, grantxCheck: true },
    { feature: "Free Tier", engrant: "14-day free trial", grantx: "50 credits/month", engrantCheck: true, grantxCheck: true },
    { feature: "Annual Discount", engrant: "~21% ($37/month)", grantx: "20% off", engrantCheck: true, grantxCheck: true },
    { feature: "Search Limits", engrant: "Unlimited", grantx: "Based on credits (100-6,000/month)", engrantCheck: true, grantxCheck: true },
    { feature: "Team Members", engrant: "Single user focus", grantx: "1-unlimited depending on tier", engrantCheck: true, grantxCheck: true },
    { feature: "Target Geography", engrant: "Global (North America, Europe, beyond)", grantx: "U.S.-based organizations", engrantCheck: true, grantxCheck: true },
    { feature: "Database Size", engrant: "400,000+ funders", grantx: "684,000+ funders", engrantCheck: true, grantxCheck: true },
    { feature: "AI Organization Profiling", engrant: "Yes", grantx: "Yes", engrantCheck: true, grantxCheck: true },
    { feature: "Match Scoring", engrant: "Yes", grantx: "Yes (includes \"win forecast\")", engrantCheck: true, grantxCheck: true },
    { feature: "Plain English Requirements", engrant: "Emphasized", grantx: "Not explicitly stated", engrantCheck: true, grantxCheck: false },
    { feature: "Learns from Feedback", engrant: "Yes (save/reject feedback loop)", grantx: "Not explicitly stated", engrantCheck: true, grantxCheck: false },
    { feature: "Proposal Draft Generation", engrant: "Included", grantx: "Via expert services (extra cost)", engrantCheck: true, grantxCheck: "partial" },
    { feature: "Application Instructions", engrant: "Detailed", grantx: "Detailed", engrantCheck: true, grantxCheck: true },
    { feature: "Expert Human Services", engrant: "Unavailable", grantx: "Available ($15/credit)", engrantCheck: false, grantxCheck: true },
    { feature: "Team Collaboration", engrant: "Shared access", grantx: "Core feature (Pro tier+)", engrantCheck: true, grantxCheck: true },
    { feature: "Workflow Management", engrant: "Simple progress tracking", grantx: "WorkBench feature", engrantCheck: true, grantxCheck: true },
    { feature: "CSV Export", engrant: "Not included", grantx: "Yes (Starter+)", engrantCheck: false, grantxCheck: true },
  ];

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
            Detailed Feature Comparison
          </h2>
          <p className="text-xl text-neutral-600">A comprehensive look at what each platform offers</p>
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
                <span className="font-semibold text-slate-600">GrantX</span>
              </div>
            </div>
            
            {/* Rows */}
            {features.map((row, index) => (
              <div key={index} className={`grid grid-cols-3 min-w-[700px] ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
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
                      row.grantxCheck === true ? 'bg-teal-100' : 
                      row.grantxCheck === 'partial' ? 'bg-amber-100' : 'bg-rose-50'
                    }`}>
                      {row.grantxCheck === true ? (
                        <Check className="text-teal-600 w-3 h-3 md:w-4 md:h-4" />
                      ) : row.grantxCheck === 'partial' ? (
                        <span className="text-amber-600 text-xs font-bold">~</span>
                      ) : (
                        <X className="text-rose-400 w-3 h-3 md:w-4 md:h-4" />
                      )}
                    </div>
                    <span className="text-neutral-600 text-sm md:text-base">{row.grantx}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-neutral-500 mt-8 max-w-3xl mx-auto">
          <strong className="text-slate-700">Note:</strong> Features based on publicly available website information as of January 2025. Both platforms may have additional capabilities not listed here.
        </p>
      </div>
    </section>
  );
};

// Key Differences Explained Section
const KeyDifferencesExplained = () => {
  return (
    <section className="section-cream py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Key Differences
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Understanding What Makes Each Platform Unique
          </h2>
        </div>
        
        {/* 4A: Pricing Philosophy */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Pricing Philosophy</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 warm-shadow border border-teal-100">
              <h4 className="text-xl font-bold text-teal-700 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Engrant's Approach
              </h4>
              <p className="text-neutral-700 mb-4 font-semibold">One plan. One price. No credits to track.</p>
              <p className="text-neutral-600 mb-4">
                $47/month gets you unlimited grant searches. No worrying about running out of credits mid-search. No calculating whether a search is "worth" the credit cost.
              </p>
              <p className="text-neutral-600">
                Annual billing drops to $37/month—less than one hour of consultant time.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 warm-shadow border border-slate-200">
              <h4 className="text-xl font-bold text-slate-700 mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                GrantX's Approach
              </h4>
              <p className="text-neutral-700 mb-4 font-semibold">Tiered pricing that scales with team size.</p>
              <p className="text-neutral-600 mb-4">
                GrantX uses a credit system: Free (50 credits), Starter at $79 (100 credits), Professional at $199 (300 credits), Team at $499 (1,000 credits), and Enterprise at $2,499 (6,000 credits).
              </p>
              <p className="text-neutral-600">
                This model works well for organizations that need team collaboration features or want to scale usage across departments.
              </p>
            </div>
          </div>
        </div>
        
        {/* 4B: Who Each Tool Is Built For */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Who Each Tool Is Built For</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-8 border border-teal-100">
              <h4 className="text-xl font-bold text-teal-700 mb-4">Engrant</h4>
              <p className="text-neutral-700 mb-4 font-semibold">Solo development professionals at small-to-medium nonprofits.</p>
              <p className="text-neutral-600 mb-4">
                You're the only person at your nonprofit who touches grants. Your executive director wants more applications. Your board wants higher success rates. And you're working late every night just trying to find opportunities that actually fit.
              </p>
              <p className="text-teal-700 font-medium">Engrant gives you your evenings back.</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h4 className="text-xl font-bold text-slate-700 mb-4">GrantX</h4>
              <p className="text-neutral-700 mb-4 font-semibold">Organizations of all sizes seeking U.S. grant funding.</p>
              <p className="text-neutral-600 mb-4">
                GrantX explicitly serves "nonprofits, universities, research institutions, government agencies, and startups pursuing non-dilutive capital." Their pricing scales from solo grant writers to enterprise teams managing multi-million dollar portfolios.
              </p>
              <p className="text-slate-700 font-medium">
                If you need team collaboration, department-wide coordination, or optional expert proposal writing services, GrantX's higher tiers are designed for that.
              </p>
            </div>
          </div>
        </div>
        
        {/* 4C: Geographic Coverage */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Geographic Coverage</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 warm-shadow border border-teal-100">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-teal-600 mr-3" />
                <h4 className="text-xl font-bold text-teal-700">Engrant</h4>
              </div>
              <p className="text-neutral-700 mb-4 font-semibold">Global reach</p>
              <p className="text-neutral-600 mb-4">
                "Foundation, corporate, and government grants from 400,000+ funders across North America, Europe, and beyond."
              </p>
              <p className="text-neutral-600">
                If you're a European NGO or an international organization, Engrant is built to serve you.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 warm-shadow border border-slate-200">
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-slate-600 mr-3" />
                <h4 className="text-xl font-bold text-slate-700">GrantX</h4>
              </div>
              <p className="text-neutral-700 mb-4 font-semibold">U.S. focus</p>
              <p className="text-neutral-600 mb-4">
                "Grantx works for any U.S.-based organization seeking grant funding."
              </p>
              <p className="text-neutral-600">
                GrantX is explicitly designed for organizations based in the United States.
              </p>
            </div>
          </div>
        </div>
        
        {/* 4D: Expert Services */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Expert Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 warm-shadow border border-teal-100">
              <h4 className="text-xl font-bold text-teal-700 mb-4">Engrant</h4>
              <p className="text-neutral-700 mb-4 font-semibold">Self-service with AI assistance.</p>
              <p className="text-neutral-600 mb-4">
                Engrant includes AI proposal draft generation in the base price. The philosophy is to give you the tools to do it yourself, faster.
              </p>
              <p className="text-neutral-600">No human expert services offered.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 warm-shadow border border-slate-200">
              <h4 className="text-xl font-bold text-slate-700 mb-4">GrantX</h4>
              <p className="text-neutral-700 mb-4 font-semibold">Optional expert services available.</p>
              <p className="text-neutral-600 mb-4">
                Beyond the software, GrantX offers human expert services at $15 per credit:
              </p>
              <ul className="space-y-2 text-neutral-600 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Full Federal Proposal: 100 credits ($1,500)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Full Private Proposal: 20 credits ($300)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>Application Strategy: 10 credits ($150)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>LOI or Application Review: 5 credits ($75)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-600">•</span>
                  <span>30-min Advisory Call: 2 credits ($30)</span>
                </li>
              </ul>
              <p className="text-neutral-600">
                If you want professional grant writers to help with applications, GrantX provides that option.
              </p>
            </div>
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
            When Each Tool Might Be the Better Choice
          </h2>
          <p className="text-lg text-neutral-600">We believe in honest comparisons. Here's when each tool makes sense.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center">
              <Target className="w-6 h-6 mr-3 text-slate-600" />
              When GrantX Might Be the Better Choice
            </h3>
            <p className="text-neutral-600 mb-6">Consider GrantX if you:</p>
            <ul className="space-y-4">
              {[
                "Are only looking for U.S. grants",
                "Need team collaboration features (3+ people working on grants)",
                "Want optional access to human expert proposal writing services",
                "Are a university, research institution, or government agency",
                "Need department-wide coordination and workflow management",
                "Have budget for $199+/month and want team features",
                "Prefer a credit-based model where you can scale usage up or down"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-600">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-3xl p-8 border border-teal-100">
            <h3 className="text-xl font-bold text-teal-700 mb-6 flex items-center">
              <Sparkles className="w-6 h-6 mr-3 text-teal-600" />
              When Engrant Might Be the Better Choice
            </h3>
            <p className="text-neutral-600 mb-6">Consider Engrant if you:</p>
            <ul className="space-y-4">
              {[
                "Are a solo development professional or very small team",
                "Want simple, predictable pricing with no credits to track",
                "Are looking for grants all over the world",
                "Prefer unlimited searches without worrying about usage limits",
                "Want requirements explained in plain English",
                "Need AI proposal drafts included in your subscription",
                "Have a limited budget (under $50/month)",
                "Value a tool that learns from your save/reject feedback"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Problem Recognition Section
const ProblemRecognition = () => {
  return (
    <section className="section-warm-dark py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            The Problem Both Tools Solve
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            "I spend more time searching for grants than I do actually writing them, and half the ones I find don't even fit our mission."
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-6">
            Whether you choose Engrant or GrantX, you're moving away from the old way: scrolling through hundreds of irrelevant results in clunky databases, spending 15+ hours a week just to find 2-3 opportunities worth pursuing.
          </p>
          <p className="text-xl text-white font-medium">
            Both platforms use AI to match your organization to relevant grants. The question is which approach fits your situation.
          </p>
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
            Pricing Comparison
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Side-by-side pricing to help you understand the cost difference
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Engrant Pricing Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-amber-400 rounded-3xl opacity-20 blur"></div>
            <div className="relative bg-white rounded-3xl p-8 border border-teal-100 warm-shadow-lg h-full">
              <div className="absolute -top-4 right-8 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-bold">
                SIMPLE PRICING
              </div>
              
              <h3 className="text-xl font-bold text-teal-700 mb-6 flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                Engrant
              </h3>
              
              <div className="mb-6">
                <p className="text-sm font-semibold text-neutral-500 mb-2">One Simple Plan</p>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold text-slate-800">$47</span>
                  <span className="text-xl text-neutral-500 ml-2">/month</span>
                </div>
                <p className="text-teal-600 font-medium mt-2">
                  (or $37/month billed annually)
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                {[
                  "Unlimited grant searches",
                  "Curated matches per search",
                  "AI learns your constraints",
                  "Requirements in plain English",
                  "AI proposal draft generation",
                  "Priority email support",
                  "14-day free trial",
                  "No credit card required to start"
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
                      page: 'grantx_comparison'
                    });
                  }
                }}
                className="w-full btn-primary text-white py-4 px-6 rounded-full font-semibold text-lg inline-block text-center shadow-lg">
                Try Engrant Free
              </a>
            </div>
          </div>
          
          {/* GrantX Pricing Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-6">GrantX</h3>
            
            <div className="mb-6">
              <p className="text-sm font-semibold text-neutral-500 mb-2">Credit-Based Tiers</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="bg-white rounded-xl p-4 border border-slate-100">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-semibold text-slate-700">Free</span>
                  <span className="text-slate-600">$0</span>
                </div>
                <p className="text-sm text-neutral-500">50 credits/month</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-semibold text-slate-700">Starter</span>
                  <span className="text-slate-600">$79/month</span>
                </div>
                <p className="text-sm text-neutral-500">100 credits</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-semibold text-slate-700">Professional</span>
                  <span className="text-slate-600">$199/month</span>
                </div>
                <p className="text-sm text-neutral-500">300 credits, 3 members</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-semibold text-slate-700">Team</span>
                  <span className="text-slate-600">$499/month</span>
                </div>
                <p className="text-sm text-neutral-500">1,000 credits, 10 members</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-slate-100">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="font-semibold text-slate-700">Enterprise</span>
                  <span className="text-slate-600">$2,499/month</span>
                </div>
                <p className="text-sm text-neutral-500">6,000 credits, unlimited</p>
              </div>
            </div>
            
            <p className="text-sm text-neutral-600 mb-6">
              + Optional expert services at $15/credit
            </p>
            
            <a 
              href="https://app.grantx.com/pricing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-slate-700 hover:bg-slate-800 text-white py-4 px-6 rounded-full font-semibold text-lg inline-block text-center shadow-lg transition-colors">
              View GrantX Pricing
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      question: "What's the difference between Engrant and GrantX?",
      answer: "Engrant and GrantX are both AI-powered grant discovery platforms, but they serve different audiences with different pricing models. Engrant costs $47/month (flat rate) with unlimited searches, targeting solo development professionals at small nonprofits globally. GrantX uses credit-based pricing from $79-$2,499/month, targeting U.S.-based organizations of all sizes including universities and research institutions, with team collaboration features and optional expert proposal writing services."
    },
    {
      question: "Is Engrant or GrantX cheaper?",
      answer: "Engrant has a lower entry price at $47/month (or $37/month annually) with unlimited searches. GrantX starts at $79/month for the Starter tier with 100 credits per month. GrantX also offers a free tier with 50 credits/month. The better value depends on your usage patterns and whether you need GrantX's team features or expert services."
    },
    {
      question: "Does GrantX work for European organizations?",
      answer: "GrantX explicitly states it works for \"U.S.-based organizations.\" If you're based in Europe, Engrant may be a better fit—it covers \"North America, Europe, and beyond.\""
    },
    {
      question: "Does Engrant have team features like GrantX?",
      answer: "Engrant is currently focused on solo development professionals and doesn't emphasize team collaboration features. If you need multiple team members, department-wide coordination, or shared workspaces, GrantX's Professional ($199/month), Team ($499/month), or Enterprise ($2,499/month) tiers are designed for that."
    },
    {
      question: "Can I get human help with proposals on Engrant?",
      answer: "Engrant includes AI proposal draft generation but doesn't offer human expert services. GrantX offers optional expert services at $15 per credit, including full federal proposal writing (100 credits/$1,500), application strategy (10 credits/$150), and advisory calls (2 credits/$30)."
    },
    {
      question: "Which has more grants in their database?",
      answer: "GrantX claims 684,000+ funders in their database. Engrant claims 400,000+ funders. Database size isn't everything—what matters is whether the platform finds grants that actually fit your organization. Both platforms use AI matching to filter down to relevant opportunities."
    },
    {
      question: "What is GrantX's credit system?",
      answer: "GrantX uses credits for platform usage. Each tier includes a monthly credit allocation: Free: 50 credits, Starter ($79): 100 credits, Professional ($199): 300 credits, Team ($499): 1,000 credits, Enterprise ($2,499): 6,000 credits. Credits are also used for optional expert services at $15 per credit. Engrant uses a flat-rate model with unlimited searches instead of credits."
    },
    {
      question: "Which grant platform is best for small nonprofits?",
      answer: "For solo development professionals at small nonprofits with limited budgets, Engrant at $47/month offers unlimited searches without credit tracking. For small U.S.-based nonprofits that want optional access to expert proposal writing services, GrantX's Starter tier at $79/month provides that pathway, though expert services cost extra."
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
            Common Questions About Grant Discovery Platforms
          </h2>
          <p className="text-lg text-neutral-600">
            Answers to help you choose the right tool for your situation.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 warm-shadow border border-neutral-100">
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
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
          Ready to Find Grants That Actually Fit?
        </h2>
        
        <p className="text-xl lg:text-2xl mb-6 text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Both Engrant and GrantX can help you find grants faster than manual searching. The right choice depends on your team size, location, and budget.
        </p>
        
        <p className="text-lg mb-12 text-white max-w-2xl mx-auto leading-relaxed">
          If you're a solo development professional looking for simple, affordable grant discovery—give Engrant a try.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'final_cta',
                  page: 'grantx_comparison'
                });
              }
            }}
            className="inline-flex items-center bg-white text-teal-700 hover:bg-amber-50 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 group">
            Start Free Trial
            <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="https://app.grantx.com/pricing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300">
            Compare GrantX Pricing
            <ArrowRight className="w-5 h-5 ml-3" />
          </a>
        </div>
        
        <p className="text-teal-200 mt-8 flex items-center justify-center flex-wrap gap-x-6 gap-y-2">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            14-day free trial
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            No credit card required
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            Cancel anytime
          </span>
        </p>
      </div>
    </section>
  );
};


export default GrantXComparisonPage;

export const Head = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between Engrant and GrantX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engrant costs $47/month (flat rate) with unlimited searches, targeting solo development professionals globally. GrantX uses credit-based pricing from $79-$2,499/month, targeting U.S.-based organizations with team collaboration features and optional expert services."
        }
      },
      {
        "@type": "Question",
        "name": "Is Engrant or GrantX cheaper?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engrant has a lower entry price at $47/month with unlimited searches. GrantX starts at $79/month with 100 credits. GrantX also offers a free tier with 50 credits/month."
        }
      },
      {
        "@type": "Question",
        "name": "Does GrantX work for European organizations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GrantX explicitly serves U.S.-based organizations. Engrant covers North America, Europe, and beyond."
        }
      },
      {
        "@type": "Question",
        "name": "Which grant platform is best for small nonprofits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For solo professionals at small nonprofits with limited budgets, Engrant at $47/month offers unlimited searches. For U.S. nonprofits wanting optional expert proposal writing, GrantX Starter at $79/month provides that pathway."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Engrant",
    "description": "AI-powered grant discovery platform for solo development professionals",
    "category": "Grant Research Software",
    "offers": {
      "@type": "Offer",
      "price": "47",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    }
  };

  return (
    <>
      <title>Engrant vs GrantX: Which Grant Discovery Tool Fits You? (2025)</title>
      <meta 
        name="description" 
        content="Compare Engrant and GrantX for grant discovery. Different pricing models, different audiences. Engrant: $47/month flat rate for solo professionals. GrantX: Credit-based tiers from $79-$2,499/month." 
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

