import React from 'react';
import heroLcpImage from '../images/Engrant-condensed-es.png';
import homepageFaqDataEs from '../data/homepageFaqDataEs';
import { AUDIENCE, GEOGRAPHY, ONE_LINE_DEFINITION } from '../constants/positioningEs';
import { buildFaqSchema, OgTwitterMeta } from '../utils/seoMeta';
import '../styles/shared.css';
import Header from '../components/buscar-convocatorias/Header';
import Hero from '../components/buscar-convocatorias/Hero';
import RecentGrantsCarousel from '../components/buscar-convocatorias/RecentGrantsCarousel';
import DiscoveryCaseStudy from '../components/buscar-convocatorias/DiscoveryCaseStudy';
import WhyNow from '../components/buscar-convocatorias/WhyNow';
import HowItWorks from '../components/buscar-convocatorias/HowItWorks';
import ValueComparison from '../components/buscar-convocatorias/ValueComparison';
import AlsoIncluded from '../components/buscar-convocatorias/AlsoIncluded';
import LoomVideo from '../components/buscar-convocatorias/LoomVideo';
import Pricing from '../components/buscar-convocatorias/Pricing';
import Testimonials from '../components/buscar-convocatorias/Testimonials';
import FAQ from '../components/buscar-convocatorias/FAQ';
import FinalCTA from '../components/buscar-convocatorias/FinalCTA';
import FooterEs from '../components/buscar-convocatorias/FooterEs';

const BuscarConvocatoriasPage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen">
        <Header />
        <Hero />
        <RecentGrantsCarousel />
        <DiscoveryCaseStudy />
        <WhyNow />
        <HowItWorks />
        <ValueComparison />
        <AlsoIncluded />
        <LoomVideo />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <FooterEs tagline={ONE_LINE_DEFINITION} />
    </div>
  );
};

export default BuscarConvocatoriasPage;

export const Head = () => {
  const pageTitle = 'Encuentra financiadores que no están en ninguna base de datos | Engrant';
  const pageDescription = `${ONE_LINE_DEFINITION} Diseñado para ${AUDIENCE}. ${GEOGRAPHY}`;
  const canonicalUrl = 'https://engrant.eu/buscar-convocatorias/';

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
    inLanguage: 'es-419',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Engrant',
      url: 'https://engrant.eu/',
    },
    about: {
      '@type': 'SoftwareApplication',
      name: 'Engrant',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '47',
        priceCurrency: 'USD',
      },
      areaServed: {
        '@type': 'Place',
        name: 'América Latina',
      },
    },
  };

  return (
    <>
      <html lang="es" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hreflang="en" href="https://engrant.eu/" />
      <link rel="alternate" hreflang="es" href="https://engrant.eu/buscar-convocatorias/" />
      <link rel="alternate" hreflang="x-default" href="https://engrant.eu/" />
      <OgTwitterMeta title={pageTitle} description={pageDescription} url={canonicalUrl} />
      <meta property="og:locale" content="es_LA" />
      <meta property="og:locale:alternate" content="en_US" />
      <script type="application/ld+json">{JSON.stringify(buildFaqSchema(homepageFaqDataEs))}</script>
      <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" as="image" href={heroLcpImage} />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
};
