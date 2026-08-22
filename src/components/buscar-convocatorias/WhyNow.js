import React from 'react';

const WhyNow = () => {
  return (
    <section id="why-now" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Por qué ahora
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-8 leading-tight">
            El financiamiento se movió hacia financiadores que ninguna base de datos cubre por completo
          </h2>
        </div>

        <div className="space-y-6 text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
          <p>
            En Estados Unidos, las subvenciones federales se congelan y cancelan. Cuando el Center for Effective Philanthropy encuestó a 585 líderes de organizaciones sin fines de lucro en febrero de 2025,{' '}
            <a
              href="https://cep.org/wp-content/uploads/2025/05/NVP_State-of-Nonprofits_2025.pdf"
              className="text-teal-700 hover:text-teal-800 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              el 73% dijo que los cambios en el financiamiento del gobierno federal muy probablemente afectarían su trabajo
            </a>{' '}
            — y el 62% dijo que ya lo estaban afectando.{' '}
            <span className="text-sm text-neutral-500">(verificado agosto 2026)</span>
          </p>
          <p>
            Lo que queda se desplaza hacia fundaciones privadas, programas de responsabilidad social corporativa y fondos internacionales y de embajadas. Están dispersos entre{' '}
            <strong className="text-slate-800 font-semibold">miles de financiadores que ninguna base de datos comercial cubre por completo</strong>
            {' '}— y para quien trabaja fuera de los países para los que esas bases de datos fueron construidas, nunca estuvieron incluidos desde el principio.
          </p>
          <p>
            En América Latina el cambio es aún más abrupto. Aproximadamente la mitad del financiamiento de USAID fluía a través de ONG; la agencia cerró permanentemente en{' '}
            <a
              href="https://www.publichealth.columbia.edu/news/study-spotlights-human-toll-abrupt-u-s-foreign-aid-cuts"
              className="text-teal-700 hover:text-teal-800 underline font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              julio de 2025
            </a>
            , y el gasto de ayuda exterior de EE.UU.{' '}
            <strong className="text-slate-800 font-semibold">cayó de $68 mil millones en 2024 a $32 mil millones en 2025</strong>{' '}
            <span className="text-sm text-neutral-500">(verificado agosto 2026)</span>. Reino Unido, Alemania y Canadá anunciaron recortes propios. Organizaciones construidas sobre uno o dos financiadores institucionales grandes ahora buscan veinte pequeños — la mayoría de los cuales nunca han escuchado.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;
