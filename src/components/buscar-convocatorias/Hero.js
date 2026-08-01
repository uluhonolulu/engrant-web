import React, { useState } from 'react';
import { Compass, Globe, CheckCircle, Calendar, PenTool } from 'lucide-react';
import engrantCondensedEs from '../../images/Engrant-condensed-es.png';

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
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              Para equipos de recaudación de fondos en organizaciones sin fines de lucro
            </div>

            <h1 className="text-4xl font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
              Encuentra las convocatorias que de verdad te corresponden.
            </h1>

            <h2 className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal">
              Engrant investiga toda la web en tiempo real y te muestra las convocatorias vigentes para las que calificas: por qué calificas, cómo postular y cuándo vencen.
            </h2>

            <div id="value-bullets" className="space-y-4 mb-10">
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <Compass className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Convocatorias más allá de tu lista de siempre</span>
                  <span className="text-neutral-500">, no solo las fundaciones que ya conoces</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors flex-shrink-0">
                  <Globe className="text-amber-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Investigación en vivo de toda la web</span>
                  <span className="text-neutral-500">, no una sola base de datos ni lo que ChatGPT recuerda</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <CheckCircle className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Elegibilidad explicada</span>
                  <span className="text-neutral-500">: por qué de verdad calificas, en lenguaje claro</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center mr-3 group-hover:bg-amber-200 transition-colors flex-shrink-0">
                  <Calendar className="text-amber-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Cómo y cuándo postular</span>
                  <span className="text-neutral-500">: requisitos y fechas límite desde el inicio</span>
                </div>
              </div>
              <div className="flex items-center text-base group">
                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-3 group-hover:bg-teal-200 transition-colors flex-shrink-0">
                  <PenTool className="text-teal-600 w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="font-semibold text-slate-800">Ayuda para postular cuando la necesites</span>
                  <span className="text-neutral-500">: redacta la propuesta contigo una vez que encuentras la indicada</span>
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
                  className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg w-full whitespace-nowrap"
                >
                  Encontrar mis convocatorias
                </button>
              </form>
              {error ? (
                <p className="text-amber-700 mt-2 mb-0 text-sm">
                  {error}
                </p>
              ) : null}
              <p className="text-neutral-500 mt-4 mb-0 flex items-center">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                Prueba gratis de 14 días • Sin tarjeta de crédito
              </p>
            </div>
          </div>

          <div id="hero-visual" className="mt-12 lg:mt-0">
            <div className="relative w-full max-w-[599px] mx-auto lg:mx-0">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
              <img
                className="relative w-full h-auto rounded-2xl shadow-2xl"
                src={engrantCondensedEs}
                alt="Interfaz de coincidencia de convocatorias de Engrant"
                fetchPriority="high"
              />
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
