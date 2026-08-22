import React, { useState } from 'react';
import { Compass, Globe, ShieldCheck } from 'lucide-react';
import engrantCondensedEs from '../../images/Engrant-condensed-es.png';
import { CTA_LABEL, TRIAL_MICRO } from '../../constants/positioningEs';

const Hero = () => {
  const [orgUrl, setOrgUrl] = useState('');
  const [error, setError] = useState('');

  return (
    <section id="hero" className="hero-gradient min-h-[720px] flex items-center pb-24 pt-12 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div id="hero-content">
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Tu analista de investigación de convocatorias con IA
            </div>

            <h1 className="text-4xl font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
              Encuentra los financiadores que no conoces. Ya evaluados.
            </h1>

            <p className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal">
              Engrant mira más allá de cualquier base de datos que uses, y luego evalúa cada financiador contra tu misión — idoneidad, elegibilidad y señales de alerta, listo antes de que abras un solo sitio de financiador.
            </p>

            <div id="value-bullets" className="space-y-4 mb-10">
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <Compass className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1 text-neutral-700">
                  Encuentra financiadores que no estaban en tu radar
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors flex-shrink-0">
                  <Globe className="text-amber-600 w-4 h-4" />
                </div>
                <div className="flex-1 text-neutral-700">
                  Funciona donde tú trabajas — no solo donde las bases de datos de EE.UU. tienen cobertura
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <ShieldCheck className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1 text-neutral-700">
                  Cada coincidencia llega pre-evaluada, no como un nombre que debes investigar
                </div>
              </div>
            </div>

            <div id="hero-cta" className="mb-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  value={orgUrl}
                  onChange={(e) => setOrgUrl(e.target.value)}
                  placeholder="tuorganizacion.org"
                  aria-label="Sitio web de la organización"
                  className="w-full min-w-0 px-5 py-4 rounded-full text-lg border border-slate-200 bg-white text-slate-800 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500"
                />
                <button
                  type="submit"
                  className="btn-primary w-full text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg text-center"
                >
                  {CTA_LABEL}
                </button>
              </form>
              {error ? (
                <p className="text-amber-700 mt-2 mb-0 text-sm">
                  {error}
                </p>
              ) : null}
              <p className="text-neutral-500 mt-4 mb-0 flex items-center">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                {TRIAL_MICRO}
              </p>
            </div>
          </div>

          <div id="hero-visual" className="mt-12 lg:mt-0">
            <div className="relative w-full max-w-[617px] mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
              <img
                className="relative w-full h-auto rounded-2xl shadow-2xl"
                src={engrantCondensedEs}
                alt="Tarjeta de convocatoria de Engrant mostrando análisis de idoneidad, elegibilidad y señales de alerta antes de visitar el sitio del financiador"
                fetchPriority="high"
              />
              <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 max-w-[calc(100%-1rem)] bg-white px-5 py-4 rounded-2xl warm-shadow-lg border-2 border-teal-200 shadow-teal-100/50">
                <div className="text-sm font-bold text-teal-700">No limitado a una base de datos</div>
                <div className="text-sm text-neutral-600 font-medium">La IA investiga toda la web</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function handleSubmit(event) {
    event.preventDefault();

    if (!orgUrl.trim()) {
      setError('Ingresa el sitio web de tu organización');
      return;
    }

    setError('');
    window.location.href =
      `https://app.engrant.eu/?utm_source=convocatorias&utm_medium=hero_search&utm_campaign=hero_search_cta&org_url=${encodeURIComponent(orgUrl)}`;
  }
};

export default Hero;
