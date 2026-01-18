import React from 'react';

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
            <a href="/learn-more" className="hover:text-white transition-colors">Learn More</a>
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

export default Footer;
