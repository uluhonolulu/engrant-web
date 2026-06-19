import React from 'react';

const WhoThisIsFor = () => {
  return (
    <section id="who-this-is-for" className="py-24 section-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Para ti
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-8">
            Hecho para quien lleva la recaudación de fondos en solitario
          </h2>
        </div>

        <p className="text-lg text-neutral-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
          Eres la única persona en tu organización que se ocupa de las convocatorias. La dirección quiere más postulaciones presentadas. La junta directiva quiere mejores tasas de éxito. Y te quedas hasta tarde cada noche solo tratando de encontrar oportunidades que de verdad encajen. Engrant te devuelve las noches.
        </p>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-200 to-amber-200 rounded-3xl opacity-50 blur-sm"></div>
          <div className="relative bg-white rounded-2xl p-10 shadow-xl">
            <div className="absolute -top-6 left-10">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
            </div>
            <p className="text-xl text-slate-700 italic mb-6 leading-relaxed pt-4">
              Paso más tiempo buscando convocatorias que escribiéndolas, y la mitad de las que encuentro ni siquiera encajan con nuestra misión.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-0.5 bg-gradient-to-r from-teal-500 to-amber-400 mr-4"></div>
              <p className="text-teal-600 font-medium">
                El problema que Engrant resuelve
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
