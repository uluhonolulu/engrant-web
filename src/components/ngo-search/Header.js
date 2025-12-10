import React from 'react';
import logo from '../../images/logo-horizontal-remove-background.com.png';

const Header = () => {
  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="EnGrant Logo" className="h-12 w-auto rounded-lg align-middle" />
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
