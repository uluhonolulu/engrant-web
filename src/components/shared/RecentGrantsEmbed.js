import React, { useEffect, useState } from 'react';
import GrantsCarousel from './recent-grants/GrantsCarousel';
import { getRecentGrantsCopy } from './recent-grants/copy';
import './recent-grants/recent-grants.css';

const APP_ORIGIN = process.env.GATSBY_APP_URL || 'https://app.engrant.eu';

const RecentGrantsEmbed = ({ lang = 'en' }) => {
  const copy = getRecentGrantsCopy(lang);
  const [grants, setGrants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadGrants() {
      setLoading(true);
      setFailed(false);

      try {
        const response = await fetch(
          `${APP_ORIGIN}/api/public/recent-grants?lang=${encodeURIComponent(lang)}`
        );
        if (!response.ok) {
          throw new Error(`Recent grants request failed with ${response.status}`);
        }

        const data = await response.json();
        const nextGrants = Array.isArray(data) ? data : [];

        if (!cancelled) {
          setGrants(nextGrants);
          setLoading(false);
          setFailed(nextGrants.length === 0);
        }
      } catch {
        if (!cancelled) {
          setGrants([]);
          setLoading(false);
          setFailed(true);
        }
      }
    }

    loadGrants();

    return () => {
      cancelled = true;
    };
  }, [lang]);

  if (failed) {
    return null;
  }

  return (
    <section id="recent-grants" className="recent-grants-section py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            {copy.badge}
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            {copy.heading}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {copy.description}
          </p>
        </div>

        {loading ? (
          <div className="grid min-h-[420px] gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-hidden="true">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-[400px] animate-pulse rounded-[14px] border border-neutral-200 bg-neutral-100"
              />
            ))}
          </div>
        ) : (
          <GrantsCarousel grants={grants} copy={copy} />
        )}
      </div>
    </section>
  );
};

export default RecentGrantsEmbed;
