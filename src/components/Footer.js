import React from 'react';

const Footer = ({ tagline = 'AI-powered grant matching for nonprofits' }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <a href="/" className="text-white font-bold text-xl">Engrant</a>
            <p className="text-sm mt-2">{tagline}</p>
            <p className="text-sm mt-4 text-slate-400">
              Belmonto 17C-1, Vilnius, Lithuania
              <br />
              <a href="mailto:founder@engrant.eu" className="hover:text-white transition-colors">
                founder@engrant.eu
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="/pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/features" className="hover:text-white transition-colors">Features</a>
            <a href="/learn-more" className="hover:text-white transition-colors">Learn More</a>
            <a href="/about" className="hover:text-white transition-colors">About</a>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms</a>
            <a href="mailto:founder@engrant.eu" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Engrant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
