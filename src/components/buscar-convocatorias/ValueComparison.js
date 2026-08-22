import React from 'react';
import { X, Check } from 'lucide-react';

const ValueComparison = () => {
  return (
    <section id="comparison" className="py-24 section-cream">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Comparación
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
            Donde las otras opciones se detienen
          </h2>
        </div>

        <div id="comparison-table" className="rounded-3xl overflow-hidden warm-shadow-lg">
          <div className="grid md:grid-cols-2">
            <div className="bg-slate-50 p-10 border-b md:border-b-0 md:border-r border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <X className="text-rose-500 w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-700">
                  Bases de datos de convocatorias (Instrumentl, Candid, GrantStation, FundsforNGOs)
                </h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Completas dentro de lo que cubren — pero un financiador que no contienen no existe para ti. Con precios y diseño pensados para equipos con personal de investigación.
              </p>
            </div>

            <div className="bg-slate-50 p-10 border-b border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <X className="text-rose-500 w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-700">
                  Investigación manual (Google, sitios de financiadores, reportes 990)
                </h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Gratis, y limitada por cuántos sitios de financiadores puedes abrir personalmente en una semana.
              </p>
            </div>

            <div className="bg-slate-50 p-10 md:border-r border-b md:border-b-0 border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <X className="text-rose-500 w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-700">
                  IA general (ChatGPT, Gemini)
                </h3>
              </div>
              <p className="text-neutral-600 leading-relaxed">
                Rápida y conversacional — pero inventa convocatorias que no existen, cita programas cerrados hace años, no puede verificar elegibilidad y olvida todo sobre tu cliente entre sesiones.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-10">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mr-3 flex-shrink-0">
                  <Check className="text-white w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-teal-800">
                  Engrant
                </h3>
              </div>
              <p className="text-neutral-700 font-medium leading-relaxed">
                Ejecuta agentes de búsqueda en paralelo en la web en vivo, así que los resultados no se limitan a lo que cubre ninguna base de datos — de ahí que programas de subvenciones de embajadas, fundaciones regionales y responsabilidad social corporativa sin portal público aparezcan en los resultados. Cada uno llega pre-evaluado por idoneidad, elegibilidad, competencia y señales de alerta. Recuerda las restricciones de cada organización.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueComparison;
