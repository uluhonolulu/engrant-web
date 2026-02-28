import React, { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Load Senja widget script if not already loaded
    if (!document.querySelector('script[src*="widget.senja.io"]')) {
      const script = document.createElement('script');
      script.src = 'https://widget.senja.io/widget/eb3ea723-1cc7-49fa-bcd3-f8b3bee50ded/platform.js';
      script.type = 'text/javascript';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="testimonials" className="py-24 section-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
            What our users are saying
          </h2>
        </div>
        
        <div 
          className="senja-embed" 
          data-id="eb3ea723-1cc7-49fa-bcd3-f8b3bee50ded" 
          data-mode="shadow" 
          data-lazyload="false" 
          style={{ display: 'block', width: '100%' }}
        />
      </div>
    </section>
  );
};

export default Testimonials;
