import React from 'react';
import { Edit, Globe, Brain, PenTool } from 'lucide-react';
import engrantExpanded from '../../images/Engrant-expanded.png';

const HowItWorks = () => {
  const steps = [
    {
      icon: Edit,
      step: '01',
      title: 'Describe tu misión',
      description: 'Cuéntale a Engrant a quién sirves y para qué necesitas financiamiento. Si sabes escribir un correo, sabes usarlo.'
    },
    {
      icon: Globe,
      step: '02',
      title: 'Recibe coincidencias de toda la web',
      description: 'Engrant investiga tu organización y luego busca en toda la web, no en una sola base de datos, y te muestra convocatorias para las que calificas, incluidos financiadores que nunca se te habrían ocurrido.'
    },
    {
      icon: Brain,
      step: '03',
      title: 'Guarda o descarta con comentarios',
      description: 'Quédate con lo que encaja, descarta lo que no y di por qué. Engrant aprende tus límites reales.'
    },
    {
      icon: PenTool,
      step: '04',
      title: 'Mira cómo postular y recibe ayuda',
      description: 'Cada convocatoria llega con la elegibilidad en lenguaje claro, la fecha límite y lo que requiere postular. Cuando estés listo, Engrant redacta la propuesta contigo.'
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Proceso simple
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
            Cómo funciona Engrant
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            return (
              <div key={index} className="relative group h-full">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-teal-200 to-amber-200"></div>
                )}

                <div className="bg-white rounded-2xl p-8 warm-shadow border border-neutral-100 hover:border-teal-200 transition-all duration-300 group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${isEven ? 'bg-amber-100' : 'bg-teal-100'} flex items-center justify-center`}>
                      <IconComponent className={`${isEven ? 'text-amber-600' : 'text-teal-600'} w-6 h-6`} />
                    </div>
                    <span className={`text-4xl font-bold ${isEven ? 'text-amber-200' : 'text-teal-200'}`}>{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{step.title}</h3>
                  <p className="text-neutral-500 leading-relaxed flex-grow">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative max-w-5xl w-full">
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2"></div>
            <img
              src={engrantExpanded}
              alt="Interfaz de Engrant, vista ampliada"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
