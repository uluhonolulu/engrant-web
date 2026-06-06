import React from 'react';

const WhyNow = () => {
  return (
    <section id="why-now" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Why now
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
            The ground just shifted under nonprofit funding
          </h2>
        </div>

        <div className="space-y-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          <p>
            Federal grants are being frozen and cancelled. A 2025 Center for Effective Philanthropy survey found 34% of nonprofits have already lost federal funding or expect to. The money that's left is moving toward private foundations and corporate giving — over a third of U.S. foundations expect to increase their giving — but it's scattered across thousands of funders that no single database fully indexes.
          </p>
          <p>
            For you, that means two things at once: more nonprofits are coming to you to replace lost funding, and the grants they need are harder to find than ever. Your client list is growing. Your research hours can't grow with it.
          </p>
          <p className="text-xl text-teal-700 font-semibold text-center">
            Engrant is how you keep up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
