import React from 'react';
import { 
  Check, X, ChevronDown, Clock, Search, AlertTriangle, 
  Target, Users, Zap, BarChart3, Shield,
  Sparkles, FileText, DollarSign, Eye, Award, TrendingUp, Scroll
} from 'lucide-react';
import logo from '../../images/logo-horizontal-remove-background.com.png';
import engrantExpanded from '../../images/Engrant-expanded.png';

const GrantWatchComparisonPage = () => {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap');

        body {
          font-family: 'DM Sans', sans-serif;
          line-height: 1.7;
          overflow-x: hidden;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Source Serif 4', Georgia, serif;
        }

        .warm-gradient {
          background: linear-gradient(135deg, #0d9488 0%, #0891b2 50%, #0d9488 100%);
        }

        .hero-gradient {
          background: 
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(20, 184, 166, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(251, 191, 36, 0.08), transparent),
            linear-gradient(180deg, #fefdfb 0%, #fffbf5 100%);
        }

        .section-cream {
          background: linear-gradient(180deg, #fffbf5 0%, #fef7ed 100%);
        }

        .section-warm-dark {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }

        .glass-card {
          backdrop-filter: blur(12px);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        }

        .warm-shadow {
          box-shadow: 0 4px 24px rgba(13, 148, 136, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        .warm-shadow-lg {
          box-shadow: 0 8px 40px rgba(13, 148, 136, 0.15), 0 4px 16px rgba(0, 0, 0, 0.06);
        }

        .btn-primary {
          background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #0f766e 0%, #115e59 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(13, 148, 136, 0.3);
        }

        .organic-blob {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
      `}</style>
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
    </>
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
                    page: 'grantwatch_comparison'
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
          GrantWatch Alternative
        </div>
        
        <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
          Tired of manually filtering through thousands of GrantWatch listings?
        </h1>
        
        <p className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
          Engrant uses AI to find 10-20 high-fit grants with match scores, eligibility checks, and red flags already evaluated—so you can skip the research and start applying.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'hero',
                  page: 'grantwatch_comparison'
                });
              }
            }}
            className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg inline-block">
            Try Engrant Free
          </a>
          <a href="#key-differences" className="text-teal-700 hover:text-teal-800 font-medium flex items-center group">
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
      icon: Scroll,
      title: "Endless Scrolling, Limited Filtering",
      description: "While the information subscribers have access to within each grant record is extremely helpful, the trickiest part for us was finding relevant grants. The platform's search and filter functionalities are fairly limited, which can complicate and slow down your research process.",
      quote: "While the information subscribers have access to within each grant record is extremely helpful, the trickiest part for us was finding relevant grants. The platform's search and filter functionalities are fairly limited, which can complicate and slow down your research process.",
      quoteSource: "Learn Grant Writing database review",
      sourceUrl: "https://learngrantwriting.org/grant-databases/",
      engrantAlternative: "10-20 pre-evaluated grants, not 10,000 to scroll through"
    },
    {
      icon: Search,
      title: "Manual Evaluation Required",
      description: "GrantWatch requires manual searching and filtering. You must evaluate each opportunity yourself, which often includes outdated or irrelevant listings mixed in with current ones.",
      quote: "GrantWatch requires manual searching and filtering... Limited RFPs, may include outdated or irrelevant opportunities.",
      quoteSource: "Instrumentl comparison analysis",
      sourceUrl: "https://www.instrumentl.com/blog/grant-research-databases",
      engrantAlternative: "AI does the evaluation—fit scores, red flags, and match reasons included"
    },
    {
      icon: Target,
      title: "No Fit Assessment",
      description: "GrantWatch does not offer recipient profiles or intelligent matching, which help streamline the grant search. You're left to determine fit yourself by reading through each listing.",
      quote: "Does not offer recipient profiles or intelligent matching, which help streamline the grant search.",
      quoteSource: "Grant database comparison report",
      sourceUrl: "https://www.fundingforgood.org/blog/comparing-grant-research-databases",
      engrantAlternative: "AI-generated fit scores show why each grant matches your organization"
    },
    {
      icon: Clock,
      title: "Cheap But Time-Expensive",
      description: "GrantWatch saves you money at $249/year—it's genuinely the most affordable paid grant database. But if you spend 15+ hours/week manually filtering results, is it really saving you anything?",
      quote: null,
      quoteSource: null,
      engrantAlternative: "Save 10+ hours per week on manual research—time worth more than the price difference"
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
            Why Nonprofits Are Looking for GrantWatch Alternatives
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
    { category: "Setup & Onboarding", feature: "Setup time", engrant: "Enter org name/URL → AI researches automatically", grantwatch: "Manual profile creation + category selection", engrantCheck: true, grantwatchCheck: false },
    { category: "Setup & Onboarding", feature: "Learning curve", engrant: "Minimal — results in minutes", grantwatch: "Moderate — requires learning SMART search", engrantCheck: true, grantwatchCheck: false },
    { category: "Search & Results", feature: "Search approach", engrant: "AI-curated 10-20 high-fit grants", grantwatch: "10,000+ grants requiring manual filtering", engrantCheck: true, grantwatchCheck: false },
    { category: "Search & Results", feature: "Fit assessment", engrant: "AI-generated fit score with match reasons", grantwatch: "No fit scoring", engrantCheck: true, grantwatchCheck: false },
    { category: "Search & Results", feature: "Eligibility screening", engrant: "Flags disqualifiers before you apply", grantwatch: "Manual eligibility checking required", engrantCheck: true, grantwatchCheck: false },
    { category: "Intelligence & Insights", feature: "Competition level", engrant: "Shows High/Medium/Low", grantwatch: "Not available", engrantCheck: true, grantwatchCheck: false },
    { category: "Intelligence & Insights", feature: "Effort estimate", engrant: "Shows application effort level", grantwatch: "Not available", engrantCheck: true, grantwatchCheck: false },
    { category: "Intelligence & Insights", feature: "Red flags & warnings", engrant: "Proactive warnings surfaced", grantwatch: "Not available", engrantCheck: true, grantwatchCheck: false },
    { category: "Intelligence & Insights", feature: "Funder openness", engrant: "\"Open to new grantees\" indicated", grantwatch: "Basic 990 data only", engrantCheck: true, grantwatchCheck: "partial" },
    { category: "Intelligence & Insights", feature: "Past recipients like you", engrant: "Shows similar orgs that got funded", grantwatch: "Not available", engrantCheck: true, grantwatchCheck: false },
    { category: "Data & Freshness", feature: "Data source", engrant: "Real-time AI search (always current)", grantwatch: "Curated database (updated daily)", engrantCheck: true, grantwatchCheck: "partial" },
    { category: "Data & Freshness", feature: "Database size", engrant: "Searches live web", grantwatch: "~10,000 active grants", engrantCheck: true, grantwatchCheck: true },
    { category: "Data & Freshness", feature: "Grant types", engrant: "Foundation, corporate, state, local", grantwatch: "Foundation, corporate, federal, state, city", engrantCheck: true, grantwatchCheck: true },
    { category: "Learning & Improvement", feature: "Learns from feedback", engrant: "Improves based on saves/rejects", grantwatch: "No learning system", engrantCheck: true, grantwatchCheck: false },
    { category: "Pricing", feature: "Price", engrant: "$47/month (or $37/month annually)", grantwatch: "$22/week, $49/month, or $249/year", engrantCheck: true, grantwatchCheck: "partial" },
    { category: "Pricing", feature: "Free trial", engrant: "Yes, 2 weeks, no credit card", grantwatch: "No free trial", engrantCheck: true, grantwatchCheck: false },
    { category: "Pricing", feature: "Grant management", engrant: "Coming soon", grantwatch: "Not available", engrantCheck: "partial", grantwatchCheck: false },
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
            Engrant vs GrantWatch: Which Is Better?
          </h2>
          <p className="text-xl text-neutral-600 mb-4">A side-by-side comparison for nonprofit grant seekers in 2025</p>
          <p className="text-neutral-500 max-w-3xl mx-auto italic">
            GrantWatch is genuinely the most affordable paid grant database on the market. If your organization has dedicated research staff and time to manually evaluate hundreds of opportunities, it's a solid budget choice.
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
                <span className="font-semibold text-slate-600">GrantWatch</span>
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
                          row.grantwatchCheck === true ? 'bg-teal-100' : 
                          row.grantwatchCheck === 'partial' ? 'bg-amber-100' : 'bg-rose-50'
                        }`}>
                          {row.grantwatchCheck === true ? (
                            <Check className="text-teal-600 w-3 h-3 md:w-4 md:h-4" />
                          ) : row.grantwatchCheck === 'partial' ? (
                            <span className="text-amber-600 text-xs font-bold">~</span>
                          ) : (
                            <X className="text-rose-400 w-3 h-3 md:w-4 md:h-4" />
                          )}
                        </div>
                        <span className="text-neutral-600 text-sm md:text-base">{row.grantwatch}</span>
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
    <section id="key-differences" className="section-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4A: Setup & Onboarding */}
        <div className="mb-32">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Setup & Onboarding
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                Engrant knows your organization before you start searching
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                With GrantWatch, you create an account, select categories of interest, choose your location filters, then search manually. You need to define your organization through search filters each time.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Engrant works differently. Enter your organization's name or website URL. Our AI automatically researches your mission, geography, programs, and characteristics. GrantWatch needs you to define your organization through search filters. Engrant knows your organization before you start searching.
              </p>
              <p className="text-neutral-500 italic">
                For solo development directors managing multiple responsibilities, those setup hours matter.
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
        
        {/* 4B: Results Quality */}
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
                Results Quality
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                GrantWatch tells you a grant exists. Engrant tells you if it's worth your time.
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                A GrantWatch result shows you basic information: grant title, funder, amount, deadline, and a link to view full details. You still need to research whether you're eligible, if it's worth your time, and what the competition looks like.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                An Engrant result includes all of that, plus:
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: Award, label: "87% Match Score", desc: "Immediate visual indicator of fit" },
                  { icon: Check, label: "Match Reasons", desc: "Your geographic focus (Virginia) + serves youth + budget fits" },
                  { icon: AlertTriangle, label: "Red Flags", desc: "Requires 501(c)(3) status for 3+ years" },
                  { icon: BarChart3, label: "Competition Level", desc: "Medium (typical 40 applicants)" },
                  { icon: Users, label: "Past Recipients", desc: "Arlington Youth Services, Richmond Community Center" },
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
            </div>
          </div>
        </div>
        
        {/* 4C: Unique Feature - Past Recipients Like You */}
        <div className="mb-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4 mr-2" />
                Past Recipients
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                Does this funder actually give to organizations like mine?
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Engrant analyzes 990 data to show which organizations similar to yours have received funding from each funder. This helps you answer the critical question: "Does this funder actually give to organizations like mine?"
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 warm-shadow-lg border border-teal-100">
              <h3 className="font-semibold text-slate-700 mb-6">Example: Past recipients similar to your organization:</h3>
              <div className="space-y-4">
                {[
                  { name: "Arlington Youth Services", amount: "$4,500", year: "2024" },
                  { name: "Richmond Community Center", amount: "$3,200", year: "2024" },
                  { name: "Virginia Youth Development", amount: "$5,000", year: "2023" },
                ].map((recipient, index) => (
                  <div key={index} className="flex items-center justify-between bg-teal-50 rounded-xl p-4 border border-teal-100">
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
              
              <p className="text-neutral-600 mt-6 italic">
                GrantWatch doesn't offer this insight. You're left to research funder history yourself.
              </p>
            </div>
          </div>
        </div>
        
        {/* 4D: Time Investment Reality */}
        <div>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Time Investment
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                The real cost of "affordable" grant databases
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-700 mb-6">With GrantWatch (typical workflow):</h3>
                <ol className="space-y-4 text-neutral-600">
                  {[
                    "Search database → 15 min",
                    "Scroll through results → 30 min",
                    "Click into each grant for details → 45 min",
                    "Evaluate eligibility manually → 60 min",
                    "Research funder 990s separately → 45 min",
                    "Decide if worth pursuing → 15 min",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="font-bold text-slate-400">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 pt-6 border-t border-slate-300">
                  <p className="text-lg font-bold text-slate-700">Total: 3.5 hours per session</p>
                  <p className="text-sm text-neutral-500 mt-1">Multiple times/week = 10-15 hours/week</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-8 border border-teal-100">
                <h3 className="text-xl font-bold text-teal-700 mb-6">With Engrant:</h3>
                <ol className="space-y-4 text-neutral-700">
                  {[
                    "View pre-matched grants → 5 min",
                    "Review fit scores and explanations → 15 min",
                    "Save promising grants, reject others → 10 min",
                    "Done → 30 min total",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 pt-6 border-t border-teal-200">
                  <p className="text-lg font-bold text-teal-700">Time saved: 10+ hours per week</p>
                  <p className="text-sm text-teal-600 mt-1">At $40/hour loaded cost = $4,160/year recovered</p>
                </div>
              </div>
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
            When GrantWatch might be better vs. when Engrant is better
          </h2>
          <p className="text-lg text-neutral-600">We believe in honest comparisons. Here's when each tool makes sense.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-700 mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center mr-3">
                <span className="text-slate-600 font-bold">G</span>
              </span>
              Use GrantWatch if you:
            </h3>
            <ul className="space-y-4">
              {[
                "Have dedicated grant research staff with time for manual filtering",
                "Your budget absolutely cannot exceed $249/year for grant tools",
                "You're comfortable spending 10-15 hours/week on grant research",
                "You primarily need federal grants (GrantWatch has good federal coverage)",
                "You're a grant writing consultant who needs raw database access"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-600">
                  <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-neutral-500 text-sm mt-6 italic">
              GrantWatch is genuinely the most affordable paid grant database. But 'cheap' and 'cost-effective' aren't the same thing when you factor in time.
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
                "Are a solo development professional juggling multiple responsibilities",
                "You value time savings over lowest possible price",
                "You want to know WHY a grant matches, not just that it exists",
                "You're frustrated with information overload and irrelevant results",
                "You need to quickly identify high-probability opportunities",
                "Your organization is under $5M budget with limited grant staff"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-neutral-700">
                  <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-teal-700 font-medium mt-6 italic">
              Engrant is purpose-built for the 90% of nonprofits that can't afford to spend 10+ hours per week on manual research.
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
      attribution: "Development Director, mid-sized nonprofit"
    },
    {
      quote: "The trickiest part for us was finding relevant grants. The platform's search and filter functionalities are fairly limited.",
      attribution: "Learn Grant Writing on GrantWatch"
    },
    {
      quote: "Information overload is all too real during grant research.",
      attribution: "Instrumentl industry analysis"
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
              <div className="text-3xl font-bold text-teal-600 mb-2">10+</div>
              <div className="text-neutral-600">hours/week saved on grant research</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">10-20</div>
              <div className="text-neutral-600">pre-evaluated grants per search</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">$47</div>
              <div className="text-neutral-600">per month—not $249/year</div>
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
          {/* GrantWatch Card */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-700 mb-6">GrantWatch</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">WEEKLY</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-700">$22</span>
                  <span className="text-neutral-500 ml-1">/week</span>
                </div>
                <p className="text-sm text-neutral-500 mt-1">Short-term access</p>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">MONTHLY</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-700">$49</span>
                  <span className="text-neutral-500 ml-1">/month</span>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-5 border border-slate-100">
                <div className="text-sm font-semibold text-slate-500 mb-1">QUARTERLY</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-700">$100</span>
                  <span className="text-neutral-500 ml-1">/quarter</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-5 border border-slate-300">
                <div className="text-sm font-semibold text-slate-600 mb-1">ANNUAL (BEST VALUE)</div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-slate-800">$249</span>
                  <span className="text-neutral-600 ml-1">/year</span>
                </div>
              </div>
              
              <div className="space-y-2 mt-4 text-sm">
                <div className="flex items-center gap-2 text-neutral-600">
                  <X className="w-4 h-4 text-rose-400" />
                  No free trial
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <X className="w-4 h-4 text-rose-400" />
                  No fit scoring or AI matching
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                  <Check className="w-4 h-4 text-slate-400" />
                  10,000+ active grants to search
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
                  Or $37/month billed annually ($444/year)
                </p>
              </div>
              
              <div className="space-y-3 mb-8">
                {[
                  "2-week free trial, no credit card",
                  "AI fit scores and match explanations",
                  "Pre-evaluated grants (10-20 curated matches)",
                  "Red flags and competition indicators",
                  "Past recipients like you",
                  "Learning recommendations"
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
                      page: 'grantwatch_comparison'
                    });
                  }
                }}
                className="w-full btn-primary text-white py-4 px-6 rounded-full font-semibold text-lg inline-block text-center shadow-lg">
                Start Free Trial
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
              GrantWatch costs $195 less per year. But if Engrant saves you just 2 hours per week at your $40/hour loaded cost, that's $4,160/year in recovered time. The question isn't 'Which is cheaper?' It's 'Which saves you more?'
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
      question: "What is the best alternative to GrantWatch?",
      answer: "Engrant is the best GrantWatch alternative for nonprofits who want pre-evaluated grant matches instead of manual database searching. Unlike GrantWatch's 10,000+ listing approach, Engrant uses AI to deliver 10-20 high-fit grants with match scores, eligibility checks, and red flags already assessed. At $47/month (or $37/month billed annually), Engrant costs more than GrantWatch ($249/year) but saves 10+ hours per week on manual research—making it ideal for overworked development professionals."
    },
    {
      question: "How much does GrantWatch cost?",
      answer: "GrantWatch pricing in 2025: Weekly: $22/week, Monthly: $49/month, Quarterly: $100/quarter, Annual: $249/year (best value). GrantWatch is the most affordable paid grant database, but requires significant manual filtering time."
    },
    {
      question: "What's the difference between GrantWatch and Engrant?",
      answer: "GrantWatch is a budget-friendly grant database with 10,000+ listings that you filter and evaluate manually. Engrant is an AI-powered grant discovery platform that automatically researches your organization and delivers 10-20 pre-evaluated matches with fit scores, eligibility flags, and competition indicators. GrantWatch saves you money; Engrant saves you time."
    },
    {
      question: "Is GrantWatch worth it for small nonprofits?",
      answer: "GrantWatch is worth it for small nonprofits IF you have dedicated time for grant research (10-15 hours/week) and strong filtering skills. At $249/year, it's the most affordable paid option. However, if you're a solo development professional with limited time, Engrant's pre-evaluated approach ($444/year) typically saves enough hours to justify the difference."
    },
    {
      question: "How can I find grants faster than using GrantWatch?",
      answer: "To find grants faster than GrantWatch's manual search approach, use Engrant's AI-powered matching. Instead of filtering through thousands of listings, Engrant automatically researches your organization and delivers 10-20 high-fit opportunities with match reasons, red flags, and competition levels already evaluated. Most users reduce their grant research time from 10-15 hours/week to under 2 hours."
    },
    {
      question: "What grant database has the best AI matching for small nonprofits?",
      answer: "Engrant offers the best AI matching for small nonprofits seeking pre-evaluated grant opportunities. Unlike traditional databases like GrantWatch (manual filtering), Candid FDO (historical research focus), or Instrumentl ($299-899/month enterprise pricing), Engrant provides AI-generated fit scores, eligibility screening, and competition indicators at $47/month—purpose-built for organizations without dedicated grant research staff."
    },
    {
      question: "Does GrantWatch have AI features?",
      answer: "GrantWatch recently added AI Grant Search, AI Foundation Search, and AI Grant Writing tools to their platform. However, these features assist with searching their existing database rather than providing the pre-evaluated match scores, eligibility screening, and competition analysis that Engrant generates automatically for each grant."
    },
    {
      question: "Which is better for busy grant writers: GrantWatch or Engrant?",
      answer: "For busy grant writers managing multiple responsibilities, Engrant is typically better because it eliminates manual research time. GrantWatch requires you to search, filter, and evaluate grants yourself—often 10-15 hours/week. Engrant does this evaluation automatically, showing you only high-fit grants with match reasons and red flags already assessed. The price difference ($249/year vs $444/year) is usually recovered in time savings within the first month."
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
            Common Questions About GrantWatch Alternatives
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
      title: "GrantWatch Official Website",
      url: "https://www.grantwatch.com/",
      description: "Official GrantWatch pricing and features information"
    },
    {
      title: "Learn Grant Writing: Grant Database Reviews",
      url: "https://learngrantwriting.org/grant-databases/",
      description: "Review of GrantWatch highlighting search and filter limitations"
    },
    {
      title: "Instrumentl: Grant Research Databases Comparison",
      url: "https://www.instrumentl.com/blog/grant-research-databases",
      description: "Comparison analysis of grant databases including GrantWatch"
    },
    {
      title: "Funding for Good: Comparing Grant Research Databases",
      url: "https://www.fundingforgood.org/blog/comparing-grant-research-databases",
      description: "Comparison article on grant research tools and databases"
    },
    {
      title: "G2 Reviews: GrantWatch",
      url: "https://www.g2.com/products/grantwatch/reviews",
      description: "User reviews of GrantWatch from verified nonprofit professionals"
    },
    {
      title: "Capterra Reviews: GrantWatch",
      url: "https://www.capterra.com/p/100123/GrantWatch/",
      description: "GrantWatch reviews and pricing information from Capterra"
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
          Ready to stop scrolling and start applying?
        </h2>
        
        <p className="text-xl lg:text-2xl mb-12 text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Try Engrant free for 2 weeks. No credit card required. See how AI-powered grant matching compares to manual database searching.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'final_cta',
                  page: 'grantwatch_comparison'
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
            href="/pricing"
            className="text-white hover:text-amber-200 font-medium text-lg">
            See pricing details
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

export default GrantWatchComparisonPage;

export const Head = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best alternative to GrantWatch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engrant is the best GrantWatch alternative for nonprofits who want pre-evaluated grant matches instead of manual database searching. Unlike GrantWatch's 10,000+ listing approach, Engrant uses AI to deliver 10-20 high-fit grants with match scores, eligibility checks, and red flags already assessed. At $47/month (or $37/month billed annually), Engrant costs more than GrantWatch ($249/year) but saves 10+ hours per week on manual research—making it ideal for overworked development professionals."
        }
      },
      {
        "@type": "Question",
        "name": "How much does GrantWatch cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GrantWatch pricing in 2025: Weekly: $22/week, Monthly: $49/month, Quarterly: $100/quarter, Annual: $249/year (best value). GrantWatch is the most affordable paid grant database, but requires significant manual filtering time."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between GrantWatch and Engrant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GrantWatch is a budget-friendly grant database with 10,000+ listings that you filter and evaluate manually. Engrant is an AI-powered grant discovery platform that automatically researches your organization and delivers 10-20 pre-evaluated matches with fit scores, eligibility flags, and competition indicators. GrantWatch saves you money; Engrant saves you time."
        }
      },
      {
        "@type": "Question",
        "name": "Is GrantWatch worth it for small nonprofits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GrantWatch is worth it for small nonprofits IF you have dedicated time for grant research (10-15 hours/week) and strong filtering skills. At $249/year, it's the most affordable paid option. However, if you're a solo development professional with limited time, Engrant's pre-evaluated approach ($444/year) typically saves enough hours to justify the difference."
        }
      },
      {
        "@type": "Question",
        "name": "How can I find grants faster than using GrantWatch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To find grants faster than GrantWatch's manual search approach, use Engrant's AI-powered matching. Instead of filtering through thousands of listings, Engrant automatically researches your organization and delivers 10-20 high-fit opportunities with match reasons, red flags, and competition levels already evaluated. Most users reduce their grant research time from 10-15 hours/week to under 2 hours."
        }
      },
      {
        "@type": "Question",
        "name": "What grant database has the best AI matching for small nonprofits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engrant offers the best AI matching for small nonprofits seeking pre-evaluated grant opportunities. Unlike traditional databases like GrantWatch (manual filtering), Candid FDO (historical research focus), or Instrumentl ($299-899/month enterprise pricing), Engrant provides AI-generated fit scores, eligibility screening, and competition indicators at $47/month—purpose-built for organizations without dedicated grant research staff."
        }
      },
      {
        "@type": "Question",
        "name": "Does GrantWatch have AI features?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GrantWatch recently added AI Grant Search, AI Foundation Search, and AI Grant Writing tools to their platform. However, these features assist with searching their existing database rather than providing the pre-evaluated match scores, eligibility screening, and competition analysis that Engrant generates automatically for each grant."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better for busy grant writers: GrantWatch or Engrant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For busy grant writers managing multiple responsibilities, Engrant is typically better because it eliminates manual research time. GrantWatch requires you to search, filter, and evaluate grants yourself—often 10-15 hours/week. Engrant does this evaluation automatically, showing you only high-fit grants with match reasons and red flags already assessed. The price difference ($249/year vs $444/year) is usually recovered in time savings within the first month."
        }
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Engrant",
    "description": "AI-powered grant discovery platform for nonprofits",
    "category": "Grant Research Software",
    "brand": {
      "@type": "Brand",
      "name": "Engrant"
    },
    "offers": {
      "@type": "Offer",
      "price": "47",
      "priceCurrency": "USD",
      "priceValidUntil": "2025-12-31"
    }
  };

  return (
    <>
      <title>GrantWatch Alternative for Nonprofits | Engrant vs GrantWatch Comparison</title>
      <meta 
        name="description" 
        content="Looking for a GrantWatch alternative? Compare Engrant's AI-powered grant matching vs GrantWatch's manual database. Pre-evaluated grants with fit scores at $47/month." 
      />
      <meta 
        name="keywords" 
        content="GrantWatch alternative, GrantWatch vs Engrant, grant database comparison, AI grant matching, nonprofit grant search" 
      />
      <meta property="og:title" content="GrantWatch Alternative: Engrant vs GrantWatch Comparison" />
      <meta property="og:description" content="Stop manually filtering 10,000 grants. Get 10-20 pre-evaluated matches with AI fit scores." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://engrant.eu/compare/grantwatch" />
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
    </>
  );
};

