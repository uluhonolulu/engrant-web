import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 section-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Testimonios
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
            Lo que dicen nuestros usuarios
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pb-8">
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/40 to-amber-200/40 rounded-3xl transform rotate-2" />
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl border border-neutral-200">
              <div className="text-6xl leading-none text-amber-200 mb-4">&ldquo;</div>
              <div className="space-y-4 mb-6">
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Desde nuestra experiencia en la Asociación Amigos del Aprendizaje (ADA), Engrant ha sido una herramienta muy valiosa para fortalecer nuestra estrategia de búsqueda de financiamiento internacional. La plataforma es intuitiva, fácil de usar y nos permitió desarrollar un perfil institucional sólido y preciso, alineado con nuestra misión y con las necesidades de financiamiento de nuestros programas.
                </p>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  Valoramos especialmente la calidad de las oportunidades identificadas — muy alineadas con fundaciones en Estados Unidos y Europa — y el pipeline de oportunidades en formato de matriz para organizar el trabajo y planificar postulaciones. Para una organización sin fines de lucro como ADA, Engrant representa una solución accesible, eficiente y muy amigable para profesionalizar la gestión de grants.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 bg-white px-5 py-4 rounded-2xl warm-shadow-lg border border-amber-100">
              <div className="text-sm font-semibold text-neutral-700">Marcela Vargas</div>
              <div className="text-xs text-neutral-500 leading-snug">Asociación Amigos del Aprendizaje (ADA)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
