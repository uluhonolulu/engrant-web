import React from 'react';
import '../../styles/shared.css';
import logo from '../../images/logo-horizontal-remove-background.com.png';
import Footer from '../Footer';

const DocsPageLayout = ({ title, description, children }) => {
  return (
    <div className="bg-[#fffbf5] min-h-screen w-full">
      <header className="bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-100/50 sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Engrant Logo" className="h-11 w-auto rounded-lg align-middle" />
            </a>
            <nav className="hidden md:flex items-center space-x-10">
              <a href="/features" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="/pricing" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="/learn-more" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Learn More
              </a>
              <a href="/docs/how-to-find-grants-for-nonprofits" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Docs
              </a>
            </nav>
            <a
              href="https://app.engrant.eu/?utm_source=docs&utm_medium=cta&utm_campaign=header_cta"
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <main className="w-full py-12 sm:py-16">
        <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-700 mb-3">Docs</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-700 leading-tight mb-4">{title}</h1>
            <p className="text-lg text-neutral-700 leading-relaxed">{description}</p>
          </div>
          {children}
        </article>
      </main>

      <Footer tagline="Documentation and practical guides for nonprofit grant search and proposal workflows" />
    </div>
  );
};

export default DocsPageLayout;
