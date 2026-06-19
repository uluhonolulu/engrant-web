import React from 'react';
import { Globe, Search, CheckCircle, PenTool } from 'lucide-react';
import gotitImage from '../../images/gotit.jpg';

const Solution = () => {
  return (
    <section id="solution" className="section-cream py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
              La solución
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Tus mejores convocatorias, incluidas las que nunca habrías encontrado.
            </h2>

            <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
              Describe tu organización en lenguaje sencillo. La IA de Engrant investiga tu organización y luego busca en toda la web (fundaciones, programas corporativos y fondos públicos) convocatorias que coinciden con tu misión, tu territorio y tu capacidad. Te muestra las oportunidades que ya conoces y las que no. Cada coincidencia llega con la elegibilidad explicada en lenguaje claro, cómo postular y la fecha límite, y cuando estés listo, Engrant redacta la postulación contigo.
            </p>

            <div className="space-y-5">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                  <Globe className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Más allá de tu lista</div>
                  <div className="text-neutral-500">Financiadores fuera de tu región y de tus nombres de siempre</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                  <Search className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Toda la web, no una base de datos</div>
                  <div className="text-neutral-500">Investigación en vivo, no un índice estático que armó alguien más</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-teal-200 transition-colors">
                  <CheckCircle className="text-teal-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Elegibilidad explicada</div>
                  <div className="text-neutral-500">Por qué calificas, y a qué prestar atención</div>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                  <PenTool className="text-amber-600 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-lg">Ayuda para postular</div>
                  <div className="text-neutral-500">Fechas, requisitos y un borrador de la propuesta cuando lo necesites</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/50 to-teal-200/50 rounded-3xl transform -rotate-2"></div>
              <img
                className="relative w-full h-auto rounded-2xl shadow-xl"
                src={gotitImage}
                alt="Persona investigando y encontrando oportunidades"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
