import React from 'react';

const COPY = {
  en: {
    iframeTitle: 'Recently found grants',
    badge: 'Recently found',
    heading: 'Grants our users found through Engrant',
    description:
      'A sample of recent matches — embassy programmes, regional foundations, and corporate giving funds, across four continents.',
  },
  es: {
    iframeTitle: 'Subvenciones encontradas recientemente',
    badge: 'Encontradas recientemente',
    heading: 'Convocatorias que nuestros usuarios encontraron con Engrant',
    description:
      'Una muestra de coincidencias recientes — programas de embajadas, fundaciones regionales y fondos de responsabilidad social corporativa en América Latina.',
  },
};

const RecentGrantsEmbed = ({ lang = 'en' }) => {
  const copy = COPY[lang] || COPY.en;

  return (
    <section id="recent-grants" className="py-24 bg-white relative">
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

        <iframe
          src={`https://app.engrant.eu/embed/recent-grants?lang=${lang}`}
          title={copy.iframeTitle}
          style={{ width: '100%', height: '540px', border: 0 }}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default RecentGrantsEmbed;
