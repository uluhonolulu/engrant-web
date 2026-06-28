import React from 'react';
import '../styles/shared.css';
import Header from '../components/buscar-convocatorias/Header';
import Hero from '../components/buscar-convocatorias/Hero';
import PainPoints from '../components/buscar-convocatorias/PainPoints';
import Solution from '../components/buscar-convocatorias/Solution';
import HowItWorks from '../components/buscar-convocatorias/HowItWorks';
import ValueComparison from '../components/buscar-convocatorias/ValueComparison';
import Pricing from '../components/buscar-convocatorias/Pricing';
import WhoThisIsFor from '../components/buscar-convocatorias/WhoThisIsFor';
import Trust from '../components/buscar-convocatorias/Trust';
import Testimonials from '../components/buscar-convocatorias/Testimonials';
import RecentGrantsCarousel from '../components/buscar-convocatorias/RecentGrantsCarousel';
import LoomVideo from '../components/buscar-convocatorias/LoomVideo';
import FAQ from '../components/buscar-convocatorias/FAQ';
import FinalCTA from '../components/buscar-convocatorias/FinalCTA';
import FooterEs from '../components/buscar-convocatorias/FooterEs';
import { OgTwitterMeta } from '../utils/seoMeta';

const BuscarConvocatoriasPage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen">
        <Header />
        <Hero />
        <PainPoints />
        <Solution />
        <HowItWorks />
        <LoomVideo />
        <ValueComparison />
        <Pricing />
        <WhoThisIsFor />
        <Trust />
        <Testimonials />
        <RecentGrantsCarousel />
        <FAQ />
        <FinalCTA />
        <FooterEs />
    </div>
  );
};

export default BuscarConvocatoriasPage;

export const Head = () => {
  const pageTitle = 'Encuentra las convocatorias que te corresponden | Engrant';
  const pageDescription =
    'Deja de buscar a mano o de confiar en ChatGPT. Engrant investiga toda la web y te muestra convocatorias reales y vigentes para tu organización: con elegibilidad, cómo postular y fechas. $47 USD/mes. Prueba gratis de 14 días.';
  const canonicalUrl = 'https://engrant.eu/buscar-convocatorias/';

  return (
    <>
      <html lang="es" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <OgTwitterMeta title={pageTitle} description={pageDescription} url={canonicalUrl} />
      <meta property="og:locale" content="es_LA" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
};
