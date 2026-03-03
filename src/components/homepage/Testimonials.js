import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 section-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-neutral-700">
            What our users are saying
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 items-stretch">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-neutral-200 h-full flex flex-col">
              <div className="text-6xl leading-none text-amber-200 mb-4">
                “
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                Each grant breakdown covers exactly what I include in my funding strategies: eligibility, fit analysis,
                application steps, alignment considerations, and priority ranking - this was a huge benefit to see! The
                percentage ranking and &quot;considerations&quot; section mirror my own vetting process.
              </p>
              <div className="mt-auto" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white px-5 py-4 rounded-2xl warm-shadow-lg border border-amber-100">
              <div className="text-sm font-semibold text-neutral-700">
                Stacy Feder
              </div>
              <div className="text-xs text-neutral-500">
                Grant Manager | Funding Strategist
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-200/40 to-teal-200/40 rounded-3xl transform -rotate-2"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-neutral-200 h-full flex flex-col">
              <div className="text-6xl leading-none text-amber-200 mb-4">
                “
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                When I tried Engrant, I was honestly over . the . moon. ✨ Its AI is the best I&apos;ve seen at identifying
                really aligned funders — quickly — no matter where in the world your organization works.
              </p>
              <div className="mt-auto" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white px-5 py-4 rounded-2xl warm-shadow-lg border border-amber-100">
              <div className="text-sm font-semibold text-neutral-700">
                Shoshana Grossman-Crist
              </div>
              <div className="text-xs text-neutral-500">
                Founder of Social Impact Compass
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
