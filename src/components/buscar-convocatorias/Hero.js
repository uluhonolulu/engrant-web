import React from 'react';
import { Compass, Globe, CheckCircle, Calendar, PenTool } from 'lucide-react';
import engrantCondensed from '../../images/Engrant-condensed.png';

const Hero = () => {
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

            <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
              Encuentra las convocatorias que de verdad te corresponden.
            </h1>

            <h2 className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal">
              Buscar financiamiento hoy significa pasar horas en Google, preguntarle a ChatGPT y recibir convocatorias que no existen o que cerraron hace años, o volver siempre a las mismas fundaciones de siempre. Engrant investiga toda la web en tiempo real y te muestra las convocatorias vigentes para las que calificas: por qué calificas, cómo postular y cuándo vencen.
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
              <a
                href="https://app.engrant.eu/?utm_source=convocatorias&utm_medium=cta&utm_campaign=hero_cta"
                onClick={() => {
                  if (typeof window !== 'undefined' && window.gtag) {
                    window.gtag('event', 'cta_click', {
                      location: 'hero'
                    });
                  }
                }}
                className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg inline-block">
                Encontrar las convocatorias que me faltan
              </a>
              <p className="text-neutral-500 mt-4 mb-0 flex items-center">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                Prueba gratis de 14 días • Sin tarjeta de crédito
              </p>
            </div>
          </div>

          <div id="hero-visual" className="mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
              <img
                className="relative w-full h-auto rounded-2xl shadow-2xl"
                src={engrantCondensed}
                alt="Interfaz de coincidencia de convocatorias de Engrant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
