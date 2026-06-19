import React from 'react';

// {{TODO: páginas de destino en español}}
const FooterEs = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <a href="/" className="text-white font-bold text-xl">Engrant</a>
            <p className="text-sm mt-2">Búsqueda de convocatorias con IA para organizaciones sin fines de lucro</p>
            <p className="text-sm mt-4 text-slate-400">
              Belmonto 17C-1, Vilnius, Lituania
              <br />
              <a href="mailto:founder@engrant.eu" className="hover:text-white transition-colors">
                founder@engrant.eu
              </a>
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="/pricing" className="hover:text-white transition-colors">Precio</a>
            <a href="/features" className="hover:text-white transition-colors">Funciones</a>
            <a href="/learn-more" className="hover:text-white transition-colors">Más información</a>
            <a href="/docs" className="hover:text-white transition-colors">Documentación</a>
            <a href="/learn-more#comparisons" className="hover:text-white transition-colors">Comparaciones</a>
            <a href="/about" className="hover:text-white transition-colors">Acerca de</a>
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacidad</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Términos</a>
            <a href="mailto:founder@engrant.eu" className="hover:text-white transition-colors">Contacto</a>
          </nav>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Engrant. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterEs;
