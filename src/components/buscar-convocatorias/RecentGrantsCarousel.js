import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import grant1 from '../../images/grant_cards/grant_1.png';
import grant2 from '../../images/grant_cards/grant_2.png';
import grant3 from '../../images/grant_cards/grant_3.png';
import grant4 from '../../images/grant_cards/grant_4.png';

const DEFAULT_GRANTS = [
  {
    id: '1',
    dateFound: '2026-08-12',
    sector: 'Alfabetización juvenil',
    region: 'Costa Rica',
    orgBudgetBand: 'presupuesto menor a $250 mil',
    funderType: 'Programa de subvenciones de embajada',
    amountBand: '$10 mil–$25 mil',
    image: grant1,
    alt: 'Coincidencia de convocatoria con análisis de idoneidad para una organización de alfabetización juvenil en Costa Rica',
  },
  {
    id: '2',
    dateFound: '2026-08-05',
    sector: 'Servicios a refugiados',
    region: 'Colombia',
    orgBudgetBand: 'presupuesto de $250 mil–$1 millón',
    funderType: 'Fundación regional',
    amountBand: '$25 mil–$50 mil',
    image: grant2,
    alt: 'Coincidencia de convocatoria con análisis de idoneidad para una organización de servicios a refugiados en Colombia',
  },
  {
    id: '3',
    dateFound: '2026-07-28',
    sector: 'Salud comunitaria',
    region: 'México',
    orgBudgetBand: 'presupuesto menor a $250 mil',
    funderType: 'Programa de responsabilidad social corporativa',
    amountBand: '$10 mil–$25 mil',
    image: grant3,
    alt: 'Coincidencia de convocatoria con análisis de idoneidad para una organización de salud comunitaria en México',
  },
  {
    id: '4',
    dateFound: '2026-07-19',
    sector: 'Educación ambiental',
    region: 'Perú',
    orgBudgetBand: 'presupuesto de $250 mil–$1 millón',
    funderType: 'Fundación familiar privada',
    amountBand: '$25 mil–$50 mil',
    image: grant4,
    alt: 'Coincidencia de convocatoria con análisis de idoneidad para una organización de educación ambiental en Perú',
  },
];

const formatDateFound = (isoDate) => {
  const date = new Date(`${isoDate}T12:00:00`);
  return date.toLocaleDateString('es-419', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const RecentGrantsCarousel = ({ grants = DEFAULT_GRANTS }) => {
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

  return (
    <section id="recent-grants" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Encontradas recientemente
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Convocatorias que nuestros usuarios encontraron con Engrant
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Una muestra de coincidencias recientes — programas de embajadas, fundaciones regionales y fondos de responsabilidad social corporativa en América Latina.
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
                    <div className="px-4 pt-4 pb-2 border-b border-neutral-100 bg-neutral-50">
                      <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                        Encontrada el {formatDateFound(grant.dateFound)}
                      </p>
                      {grant.sector && grant.region ? (
                        <p className="text-sm text-neutral-600 mt-1">
                          {grant.sector} · {grant.region}
                          {grant.orgBudgetBand ? ` · ${grant.orgBudgetBand}` : ''}
                        </p>
                      ) : null}
                      {grant.funderType ? (
                        <p className="text-sm text-neutral-700 mt-1 font-medium">
                          → {grant.funderType}
                          {grant.amountBand ? ` · ${grant.amountBand}` : ''}
                        </p>
                      ) : null}
                    </div>
                    <div className="aspect-video bg-neutral-100 overflow-hidden">
                      <img
                        src={grant.image}
                        alt={grant.alt || `Coincidencia de convocatoria ${grant.id}`}
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
