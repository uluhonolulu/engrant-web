import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import grant1 from '../../images/grant_cards/grant_1.png';
import grant2 from '../../images/grant_cards/grant_2.png';
import grant3 from '../../images/grant_cards/grant_3.png';
import grant4 from '../../images/grant_cards/grant_4.png';

const RecentGrantsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const scrollTo = useCallback((index) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  const grants = [
    { id: 1, image: grant1 },
    { id: 2, image: grant2 },
    { id: 3, image: grant3 },
    { id: 4, image: grant4 },
  ];

  return (
    <section id="recent-grants" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Recently Found
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Grants we've matched recently
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            See examples of grants our AI has matched for organizations like yours
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {grants.map((grant) => (
                <div
                  key={grant.id}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] flex-shrink-0 flex-grow-0 min-w-0 pr-6 last:pr-0"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 warm-shadow hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-video bg-neutral-100 overflow-hidden">
                      <img
                        src={grant.image}
                        alt={`Grant match ${grant.id}`}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-teal-50 hover:border-teal-300 text-neutral-700 cursor-pointer z-10"
            onClick={scrollPrev}
            aria-label="Previous grant"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-teal-50 hover:border-teal-300 text-neutral-700 cursor-pointer z-10"
            onClick={scrollNext}
            aria-label="Next grant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {grants.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === selectedIndex
                  ? 'bg-teal-600 w-8'
                  : 'bg-neutral-300 hover:bg-neutral-400'
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentGrantsCarousel;
