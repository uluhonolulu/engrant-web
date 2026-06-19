import React from 'react';
import logo from '../../images/logo-horizontal-remove-background.com.png';

const Header = () => {
  return (
    <header className="bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-100/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="https://engrant.eu/" className="flex items-center">
              <img src={logo} alt="EnGrant Logo" className="h-11 w-auto rounded-lg align-middle" />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <a href="#how-it-works" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Cómo funciona
            </a>
            <a href="#pricing" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Precio
            </a>
            <a href="#faq" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Preguntas frecuentes
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://app.engrant.eu/?utm_source=convocatorias&utm_medium=cta&utm_campaign=header_cta"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'header'
                  });
                }
              }}
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md">
              Encontrar mis convocatorias
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
