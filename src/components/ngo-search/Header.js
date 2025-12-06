import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-primary-700">Engrant</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-neutral-600 hover:text-neutral-800 transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-neutral-600 hover:text-neutral-800 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-neutral-600 hover:text-neutral-800 transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://app.engrant.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium inline-block">
              Get my matches
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
