import React from 'react';

const GRADIENT_VARIANTS = [
  { gradient: 'from-teal-200/40 to-amber-200/40', rotate: 'rotate-2' },
  { gradient: 'from-amber-200/40 to-teal-200/40', rotate: '-rotate-2' },
];

const testimonials = [
  {
    id: 'leah-hargrove',
    paragraphs: [
      "I found two really strong grant opportunities that I wouldn't have found otherwise, and applied for one — the other I'll be applying for this week.",
    ],
    name: 'Leah Hargrove',
    role: 'Ladder to the Moon Network',
  },
  {
    id: 'marcela-vargas',
    paragraphs: [
      'From our experience at Asociación Amigos del Aprendizaje (ADA), Engrant has been an invaluable tool for strengthening our international fundraising strategy. The platform is intuitive and user-friendly, and has enabled us to build a strong organizational profile that reflects our mission and the funding needs of our programs.',
      'We especially value the quality of opportunities identified — highly aligned with funders in the United States and Europe — and the pipeline and matrix view for organizing work and planning applications. For a nonprofit like ADA, Engrant is an affordable, practical solution for professionalizing grant prospecting and management.',
    ],
    name: 'Marcela Vargas',
    role: 'Asociación Amigos del Aprendizaje (ADA)',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 section-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
            What our users are saying
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {testimonials.map((item, index) => {
            const v = GRADIENT_VARIANTS[index % GRADIENT_VARIANTS.length];
            return (
              <div key={item.id} className="relative pb-8">
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${v.gradient} rounded-3xl transform ${v.rotate}`}
                />
                <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-2xl border border-neutral-200 h-full flex flex-col">
                  <div className="text-6xl leading-none text-amber-200 mb-4">&ldquo;</div>
                  <div className="space-y-4 mb-6">
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-lg text-neutral-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto" />
                </div>

                <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 bg-white px-5 py-4 rounded-2xl warm-shadow-lg border border-amber-100 max-w-[calc(100%-0.5rem)]">
                  <div className="text-sm font-semibold text-neutral-700">{item.name}</div>
                  <div className="text-xs text-neutral-500 leading-snug">{item.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
