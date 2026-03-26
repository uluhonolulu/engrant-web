import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GRADIENT_VARIANTS = [
  { gradient: 'from-teal-200/40 to-amber-200/40', rotate: 'rotate-2' },
  { gradient: 'from-amber-200/40 to-teal-200/40', rotate: '-rotate-2' },
  { gradient: 'from-teal-200/40 to-amber-200/40', rotate: 'rotate-1' },
  { gradient: 'from-amber-200/40 to-teal-200/40', rotate: '-rotate-1' },
];

const testimonials = [
  {
    id: 'stacy-feder',
    quote:
      'Each grant breakdown covers exactly what I include in my funding strategies: eligibility, fit analysis, application steps, alignment considerations, and priority ranking - this was a huge benefit to see! The percentage ranking and "considerations" section mirror my own vetting process.',
    name: 'Stacy Feder',
    role: 'Grant Manager | Funding Strategist',
  },
  {
    id: 'shoshana-grossman-crist',
    quote:
      "When I tried Engrant, I was honestly over . the . moon. ✨ Its AI is the best I've seen at identifying really aligned funders — quickly — no matter where in the world your organization works.",
    name: 'Shoshana Grossman-Crist',
    role: 'Founder of Social Impact Compass',
  },
  {
    id: 'loukas-kimeritze',
    quote:
      'The fact that it searches online is crazy to me, because the amount of output it gave me is really comprehensive.',
    name: 'Loukas Kimeritze',
    role: 'Funding Consultant',
  },
  {
    id: 'magalie-laliberte',
    quote:
      'Other AI platforms give you outdated and inaccurate information; here EnGrant is always on point.',
    name: 'Magalie Laliberté',
    role: 'Grant Strategist',
  },
  {
    id: 'william-johnson',
    quote:
      "I am a premium member of Candid. But I never met this kind of tool. I've been through this for so many years, and what you did is what I was looking for.",
    name: 'William Johnson',
    role: 'Solidarity For Her Education And Empowerment',
  },
  {
    id: 'leah-hargrove',
    quote:
      "I found two really strong grant opportunities that I wouldn't have found otherwise, and applied for one — the other I'll be applying for this week.",
    name: 'Leah Hargrove',
    role: 'Ladder to the Moon Network',
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

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

        <div className="relative pb-4">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch">
              {testimonials.map((item, index) => {
                const v = GRADIENT_VARIANTS[index % GRADIENT_VARIANTS.length];
                return (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_40%] flex-shrink-0 flex-grow-0 min-w-0 pr-6 last:pr-0 flex pb-24 sm:pb-28"
                  >
                    <div className="relative w-full pb-8">
                      <div
                        className={`absolute -inset-4 bg-gradient-to-br ${v.gradient} rounded-3xl transform ${v.rotate}`}
                      />
                      <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-neutral-200 h-full flex flex-col">
                        <div className="text-6xl leading-none text-amber-200 mb-4">“</div>
                        <p className="text-lg text-neutral-700 leading-relaxed mb-6">{item.quote}</p>
                        <div className="mt-auto" />
                      </div>

                      <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 bg-white px-5 py-4 rounded-2xl warm-shadow-lg border border-amber-100 max-w-[calc(100%-0.5rem)]">
                        <div className="text-sm font-semibold text-neutral-700">{item.name}</div>
                        <div className="text-xs text-neutral-500 leading-snug">{item.role}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-teal-50 hover:border-teal-300 text-neutral-700 cursor-pointer z-10 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-teal-50 hover:border-teal-300 text-neutral-700 cursor-pointer z-10 disabled:opacity-40 disabled:pointer-events-none disabled:cursor-not-allowed"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`h-2 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? 'bg-teal-600 w-8'
                  : 'bg-neutral-300 hover:bg-neutral-400 w-2'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to testimonial ${index + 1}: ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
