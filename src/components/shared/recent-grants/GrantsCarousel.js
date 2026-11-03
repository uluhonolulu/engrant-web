import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import PublicGrantCard from './PublicGrantCard';
import { fillTemplate } from './copy';

const AUTOPLAY_MS = 6000;

const GrantsCarousel = ({ grants, copy }) => {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    function handleChange(event) {
      setPrefersReducedMotion(event.matches);
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    updateScrollState();

    const track = trackRef.current;
    if (!track) {
      return undefined;
    }

    track.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      track.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [grants.length]);

  useEffect(() => {
    if (prefersReducedMotion || isHovered || grants.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      scrollToIndex((activeIndex + 1) % grants.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, grants.length, isHovered, prefersReducedMotion]);

  return (
    <section
      className="flex w-full flex-col gap-2"
      aria-roledescription="carousel"
      tabIndex={0}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      onKeyDown={handleKeyDown}
    >
      <div className="relative">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-1 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {grants.map((grant, index) => (
            <div
              key={`${grant.title}-${index}`}
              className="flex h-full flex-none snap-start basis-[86%] sm:basis-[48%] lg:basis-[32%]"
              aria-label={fillTemplate(copy.carousel.slideLabel, {
                index: index + 1,
                total: grants.length,
              })}
            >
              <PublicGrantCard grant={grant} copy={copy} />
            </div>
          ))}
        </div>

        {canScrollPrev && (
          <button
            type="button"
            className="absolute left-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white/95 p-2 text-neutral-700 shadow-sm transition hover:bg-white sm:inline-flex"
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label={copy.carousel.previous}
          >
            <ChevronLeft size={18} />
          </button>
        )}

        {canScrollNext && (
          <button
            type="button"
            className="absolute right-1 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white/95 p-2 text-neutral-700 shadow-sm transition hover:bg-white sm:inline-flex"
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label={copy.carousel.next}
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>

      <div className="flex shrink-0 justify-center gap-2">
        {grants.map((grant, index) => (
          <button
            key={`dot-${grant.title}-${index}`}
            type="button"
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === activeIndex ? 'bg-teal-600' : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
            onClick={() => scrollToIndex(index)}
            aria-label={fillTemplate(copy.carousel.slideLabel, {
              index: index + 1,
              total: grants.length,
            })}
          />
        ))}
      </div>
    </section>
  );

  function handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollToIndex(activeIndex - 1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollToIndex(activeIndex + 1);
    }
  }

  function scrollToIndex(index) {
    const track = trackRef.current;
    if (!track || grants.length === 0) {
      return;
    }

    const clampedIndex = Math.max(0, Math.min(index, grants.length - 1));
    const slide = track.children[clampedIndex];
    if (!slide) {
      return;
    }

    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    setActiveIndex(clampedIndex);
  }

  function updateScrollState() {
    const track = trackRef.current;
    if (!track || grants.length === 0) {
      setCanScrollPrev(false);
      setCanScrollNext(false);
      setActiveIndex(0);
      return;
    }

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    const currentLeft = track.scrollLeft;
    const nextIndex = getClosestSlideIndex(track);
    setActiveIndex(nextIndex);
    setCanScrollPrev(currentLeft > 4);
    setCanScrollNext(currentLeft < maxScrollLeft - 4);
  }

  function getClosestSlideIndex(track) {
    const slides = [...track.children];
    if (slides.length === 0) {
      return 0;
    }

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft - track.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  }
};

export default GrantsCarousel;
