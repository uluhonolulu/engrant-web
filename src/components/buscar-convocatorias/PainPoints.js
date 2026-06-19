import React from 'react';
import { Users, MessageSquare, Search } from 'lucide-react';

export default function PainPoints() {
  return (
    <section id="problem" className="section-warm-dark py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center bg-amber-500/20 text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
          El problema real
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-10 leading-tight">
          No pierdes las convocatorias a las que postulas. Pierdes las que nunca viste.
        </h2>

        <p className="text-xl text-slate-300 mb-16 leading-relaxed max-w-3xl mx-auto">
          Conoces a tus financiadores de siempre. Probablemente tienes una hoja de cálculo con los nombres de cada año. Así que cuando llega el momento de buscar fondos, vuelves a los que ya conoces, porque ¿qué más hay? Le preguntas a ChatGPT y te inventa convocatorias o te da fechas que ya pasaron. Buscas en Google y pasas horas entre resultados dispersos. El problema no es tu lista. Es todo lo que no está en ella: la fundación internacional que financia exactamente tu causa, el programa corporativo del que nadie te avisó, el fondo regional que apoya trabajo como el tuyo. Nada de eso aparece hasta que alguien investiga toda la web. Ese es el espacio que Engrant cubre.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
            <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-5">
              <Users className="text-rose-400 w-7 h-7" />
            </div>
            <div className="text-xl font-bold text-rose-400 mb-2">Las fundaciones que ya conoces</div>
            <div className="text-slate-400">Una fracción de lo que existe en realidad</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
            <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-5">
              <MessageSquare className="text-rose-400 w-7 h-7" />
            </div>
            <div className="text-xl font-bold text-rose-400 mb-2">ChatGPT</div>
            <div className="text-slate-400">Inventa convocatorias y da fechas que ya vencieron</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-slate-700/50">
            <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center mx-auto mb-5">
              <Search className="text-rose-400 w-7 h-7" />
            </div>
            <div className="text-xl font-bold text-rose-400 mb-2">Google</div>
            <div className="text-slate-400">Horas de búsqueda manual entre resultados dispersos</div>
          </div>
        </div>
      </div>
    </section>
  );
}
