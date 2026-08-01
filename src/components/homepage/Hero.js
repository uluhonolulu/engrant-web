import React, { useState } from 'react';
import { Target, Search, AlertTriangle } from 'lucide-react';
import engrantCondensed from '../../images/Engrant-condensed.png';

const Hero = () => {
  const [orgUrl, setOrgUrl] = useState('');
  const [error, setError] = useState('');

  return (
    <section id="hero" className="hero-gradient min-h-[720px] flex items-center pb-24 pt-12 relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div id="hero-content">
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Your AI grant research analyst
            </div>

            <h1 className="text-4xl font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
              Find the grants worth applying to
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal">
              Enter your organization's website. Get 30–50 pre-evaluated grants — each with a fit score, red flags, and what to watch for.
            </h2>
            
            <div id="value-bullets" className="space-y-4 mb-10">
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <Search className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Fit analysis</span>
                  <span className="text-neutral-500"> — not raw search results</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors flex-shrink-0">
                  <Target className="text-amber-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">30–50 matches</span>
                  <span className="text-neutral-500"> — not 400 to sift through</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <AlertTriangle className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Red flags</span>
                  <span className="text-neutral-500"> — before you waste time applying</span>
                </div>
              </div>
            </div>
            
            <div id="hero-cta" className="mb-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="text"
                  value={orgUrl}
                  onChange={(e) => setOrgUrl(e.target.value)}
                  placeholder="yourorganization.org"
                  aria-label="Organization website"
                  className="flex-1 w-full min-w-0 px-5 py-4 rounded-full text-lg border border-slate-200 bg-white text-slate-800 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500"
                />
                <button
                  type="submit"
                  className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg shrink-0 whitespace-nowrap"
                >
                  Find my grants
                </button>
              </form>
              {error ? (
                <p className="text-amber-700 mt-2 mb-0 text-sm">
                  {error}
                </p>
              ) : null}
              <p className="text-neutral-500 mt-4 mb-0 flex items-center">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                14-day free trial • No credit card required
              </p>
            </div>
          </div>
          
          <div id="hero-visual" className="mt-12 lg:mt-0">
            <div className="relative w-full max-w-[617px] mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
              <img
                className="relative w-full h-auto rounded-2xl shadow-2xl"
                src={engrantCondensed}
                alt="Engrant grant matching interface"
                fetchPriority="high"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl warm-shadow-lg border border-amber-100">
                <div className="text-sm font-bold text-teal-600">Not limited to a database</div>
                <div className="text-sm text-neutral-500 font-medium">AI researches the entire web</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function handleSubmit(event) {
    event.preventDefault();

    if (!orgUrl.trim()) {
      setError("Enter your organization's website");
      return;
    }

    setError('');
    window.location.href =
      `https://app.engrant.eu/?utm_source=landing&utm_medium=hero_search&utm_campaign=hero_search_cta&org_url=${encodeURIComponent(orgUrl)}`;
  }
};

export default Hero;
