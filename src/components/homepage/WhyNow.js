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
            The money moved to funders no single database covers
          </h2>
        </div>

        <div className="space-y-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          <p>
            In the US, federal grants are being frozen and cancelled. When the Center for Effective Philanthropy surveyed 585 nonprofit leaders in February 2025,{' '}
            <a
              href="https://cep.org/wp-content/uploads/2025/05/NVP_State-of-Nonprofits_2025.pdf"
              className="text-teal-700 hover:text-teal-800 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              73% said changes in federal government funding were very likely to affect their work going forward
            </a>{' '}
            — and 62% said it already was.{' '}
            <span className="text-sm text-neutral-500">(checked August 2026)</span>
          </p>
          <p>
            The money that&apos;s left is shifting toward private foundations, corporate giving programmes, and international and embassy funds. Those are scattered across{' '}
            <strong className="text-slate-800 font-semibold">thousands of funders that no single commercial database fully covers</strong>
            {' '}— and for anyone working outside the countries those databases were built for, they never were included in the first place.
          </p>
          <p>
            Outside the US the shift is sharper still. Roughly half of USAID&apos;s funding used to flow through NGOs; the agency was permanently shut down in{' '}
            <a
              href="https://www.publichealth.columbia.edu/news/study-spotlights-human-toll-abrupt-u-s-foreign-aid-cuts"
              className="text-teal-700 hover:text-teal-800 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              July 2025
            </a>
            , and US foreign aid spending{' '}
            <strong className="text-slate-800 font-semibold">fell from $68 billion in 2024 to $32 billion in 2025</strong>{' '}
            <span className="text-sm text-neutral-500">(checked August 2026)</span>. The UK, Germany and Canada announced cuts of their own. Organizations that were built on one or two large institutional funders are now looking for twenty small ones — most of which they&apos;ve never heard of.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
