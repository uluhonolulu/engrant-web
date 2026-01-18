import React from 'react';
import '../styles/shared.css';
import { FileText, ArrowRight, ChevronDown } from 'lucide-react';
import logo from '../images/logo-horizontal-remove-background.com.png';
import Footer from '../components/Footer';

const LearnMorePage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <ComparisonPagesSection />
        <GuidesSection />
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
            <a href="/" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#comparisons" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Comparisons
            </a>
            <a href="#guides" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Guides
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://app.engrant.eu/"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'header',
                    page: 'learn_more'
                  });
                }
              }}
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md">
              Try Engrant
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
    <section className="hero-gradient min-h-[400px] flex items-center py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <FileText className="w-4 h-4 mr-2" />
          Resources
        </div>
        
        <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
          Learn More About Grant Writing & Tools
        </h1>
        
        <p className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
          Compare Engrant with other grant discovery tools, or learn how to write winning proposals. All the resources you need in one place.
        </p>
      </div>
    </section>
  );
};

// Comparison Pages Section
const ComparisonPagesSection = () => {
  const comparisons = [
    {
      title: "Candid Foundation Directory Online Alternative",
      url: "/compare/candid-foundation-directory-online",
      description: "Compare Engrant's AI-powered grant matching vs Foundation Directory Online. Get pre-evaluated grants with fit scores, not 300+ results to sort through."
    },
    {
      title: "GrantX Comparison",
      url: "/compare/grantx",
      description: "Compare Engrant and GrantX for grant discovery. Different pricing models and different audiences. See which tool fits your nonprofit's needs."
    },
    {
      title: "GrantWatch Comparison",
      url: "/compare/grantwatch",
      description: "Compare Engrant vs GrantWatch. See how AI-powered matching and pre-evaluated grants compare to traditional grant databases."
    },
    {
      title: "Instrumentl Comparison",
      url: "/compare/instrumentl",
      description: "Compare Engrant vs Instrumentl. See how our focused AI matching compares to comprehensive workflow management platforms."
    }
  ];

  return (
    <section id="comparisons" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Comparison Pages</h2>
        <p className="text-lg text-neutral-600 mb-12 max-w-3xl">
          See how Engrant compares to other grant discovery tools. Each comparison includes pricing, features, and honest assessments to help you choose the right tool for your nonprofit.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {comparisons.map((comparison, index) => (
            <a
              key={index}
              href={comparison.url}
              className="block bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 rounded-xl p-6 transition-all duration-200 hover:shadow-lg group"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">
                {comparison.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {comparison.description}
              </p>
              <span className="inline-flex items-center text-teal-700 font-medium group-hover:translate-x-1 transition-transform">
                Read comparison
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Guides Section
const GuidesSection = () => {
  const guides = [
    {
      title: "A Comprehensive Guide to Writing a Winning Proposal",
      url: "/writing-winning-proposal",
      description: "Learn the proven steps to craft compelling grant proposals that secure funding. See how Engrant streamlines each step of the process, from alignment with funders to final polish."
    }
  ];

  return (
    <section id="guides" className="py-16 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Guides</h2>
        <p className="text-lg text-neutral-600 mb-12 max-w-3xl">
          Step-by-step guides to help you write winning proposals and make the most of grant opportunities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <a
              key={index}
              href={guide.url}
              className="block bg-white hover:bg-neutral-50 border border-neutral-200 rounded-xl p-6 transition-all duration-200 hover:shadow-lg group"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">
                {guide.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {guide.description}
              </p>
              <span className="inline-flex items-center text-teal-700 font-medium group-hover:translate-x-1 transition-transform">
                Read guide
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnMorePage;

export const Head = () => {
  return (
    <>
      <title>Learn More | Engrant Resources & Comparisons</title>
      <meta 
        name="description" 
        content="Compare Engrant with other grant discovery tools, or learn how to write winning proposals. All the resources you need in one place." 
      />
      <meta 
        name="keywords" 
        content="grant writing resources, grant tool comparisons, grant writing guides, nonprofit resources" 
      />
    </>
  );
};
