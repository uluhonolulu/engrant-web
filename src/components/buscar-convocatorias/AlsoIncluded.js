import React from 'react';
import { Calendar, FileText, Building2, Mail, Download } from 'lucide-react';

const AlsoIncluded = () => {
  const items = [
    {
      icon: Calendar,
      text: 'Eventos del pipeline en tu propio calendario — apertura esperada de convocatoria, fecha límite, fecha de decisión y más, escritos en la app de calendario que ya usas, con los recordatorios que quieras configurar',
    },
    {
      icon: FileText,
      text: 'Ayuda para redactar propuestas — un primer borrador basado en los requisitos reales declarados por el financiador, para trabajar a partir de él',
    },
    {
      icon: Building2,
      text: 'Perfiles de organización ilimitados — cada uno aprende sus propias restricciones',
    },
    {
      icon: Mail,
      text: 'Actualizaciones mensuales por correo sobre nuevos financiadores que coinciden con tus organizaciones guardadas',
    },
    {
      icon: Download,
      text: 'Exportación del pipeline',
    },
  ];

  return (
    <section id="also-included" className="py-16 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-neutral-200 text-neutral-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            También incluido
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-700">
            Todo lo que viene después de la búsqueda
          </h2>
        </div>

        <ul className="space-y-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-neutral-600">
              <item.icon className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AlsoIncluded;
