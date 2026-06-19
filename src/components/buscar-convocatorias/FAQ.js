import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const faqData = [
    {
      question: 'Ya conozco a mis financiadores locales, ¿qué encontrará Engrant que yo no?',
      answer: 'Mucho. Engrant investiga toda la web, así que encuentra financiadores más allá de tu región y de tu lista de siempre: fundaciones internacionales, programas corporativos y fondos regionales que apoyan tu causa pero nunca aparecen en una búsqueda local. Luego te dice por qué calificas, cómo postular y cuándo vence.'
    },
    {
      question: '¿En qué se diferencia de usar ChatGPT?',
      answer: 'ChatGPT suena seguro, pero inventa convocatorias y te da fechas que ya vencieron: no verifica nada. Engrant investiga la web en vivo y te devuelve convocatorias reales y vigentes, con la elegibilidad, cómo postular y la fecha límite ya analizadas.'
    },
    {
      question: '¿En qué se diferencia de buscar en Google?',
      answer: 'Google te da horas de resultados dispersos que tú tienes que filtrar y verificar. Engrant hace la investigación por ti y te entrega solo las convocatorias para las que de verdad calificas, con el análisis ya hecho.'
    },
    {
      question: '¿Cómo entiende la IA mi organización?',
      answer: 'Describes tu misión en lenguaje sencillo y nuestra IA investiga tu organización en línea. Cuando guardas o descartas convocatorias, le dices por qué: "enfoque geográfico equivocado", "monto demasiado grande", "requiere socio en consorcio". La IA aprende tus límites reales, no solo palabras clave.'
    },
    {
      question: '¿Qué pasa con la privacidad de mis datos?',
      answer: 'Tus datos se usan solo para tus búsquedas. Nunca compartimos tu información con otras organizaciones ni la usamos para ayudar a la competencia. Cada organización es única y tratamos tus datos así.'
    },
    {
      question: '¿Necesito conocimientos técnicos?',
      answer: 'Si sabes escribir un correo, sabes usar Engrant. Describe tu misión en lenguaje sencillo, eso es todo.'
    },
    {
      question: '¿Qué tan rápido puedo empezar?',
      answer: 'Te registras en menos de un minuto. Describes tu misión y tendrás tus coincidencias seleccionadas en unos 15 minutos.'
    },
    {
      question: '¿Y si solo necesito una convocatoria?',
      answer: 'Perfecto. Solo necesitas ganar una. Muchas organizaciones encuentran con Engrant esa convocatoria ideal que marca toda la diferencia.'
    },
    {
      question: '¿Cuánto cuesta?',
      answer: '$47 USD al mes, con una prueba gratis de 14 días. Sin tarjeta de crédito para empezar. Es menos que una hora de un consultor, y puedes cancelar cuando quieras. Borradores de propuestas incluidos.'
    },
    {
      question: 'Mi organización es pequeña o el presupuesto es ajustado, ¿qué opciones tengo?',
      answer: 'Hay planes anuales y un descuento para el primer año para organizaciones pequeñas. Empieza la prueba gratis y, si el presupuesto es una barrera real, escríbeme a founder@engrant.eu y lo resolvemos.'
    },
    {
      question: '¿Tienen convocatorias para [mi sector o región]?',
      answer: 'Engrant no está limitado a una lista fija. Investiga financiadores de fundaciones, corporativos y públicos en toda la web. Describe tu misión y tu ubicación, y filtra a las oportunidades para las que de verdad calificas.'
    }
  ];

  return (
    <section id="faq" className="py-24 section-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Preguntas frecuentes
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
            ¿Dudas? Respuestas.
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-neutral-100 warm-shadow overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-teal-50/30 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-slate-800 text-lg pr-4">
                  {item.question}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  openItems.has(index) ? 'bg-teal-500' : 'bg-teal-100'
                }`}>
                  <ChevronDown className={`transition-all duration-300 ${
                    openItems.has(index) ? 'rotate-180 text-white' : 'text-teal-600'
                  }`} />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openItems.has(index) ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-8 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  function toggleFAQ(index) {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  }
};

export default FAQ;
