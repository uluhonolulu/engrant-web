import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  return (
    <section id="recent-grants" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Encontradas recientemente
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Convocatorias que nuestros usuarios no sabían que existían
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Coincidencias reales que Engrant encontró para organizaciones como la tuya: financiadores que no estaban en su radar.
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
                    <div className="aspect-video bg-neutral-100 overflow-hidden flex items-center justify-center p-6">
                      <p className="text-neutral-500 text-center text-sm">
                        {'{{TODO: capturas de convocatorias LatAm}}'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-teal-50 hover:border-teal-300 text-neutral-700 cursor-pointer z-10"
            onClick={scrollPrev}
            aria-label="Convocatoria anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg flex items-center justify-center transition-all duration-200 hover:bg-teal-50 hover:border-teal-300 text-neutral-700 cursor-pointer z-10"
            onClick={scrollNext}
            aria-label="Siguiente convocatoria"
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
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentGrantsCarousel;
