import React from 'react';
import heroLcpImage from '../images/Engrant-condensed.png';
import homepageFaqData from '../data/homepageFaqData';
import { ONE_LINE_DEFINITION } from '../constants/positioning';
import { buildFaqSchema, OgTwitterMeta } from '../utils/seoMeta';
import '../styles/shared.css';
import Header from '../components/homepage/Header';
import Hero from '../components/homepage/Hero';
import RecentGrantsCarousel from '../components/ngo-search/RecentGrantsCarousel';
import DiscoveryCaseStudy from '../components/homepage/DiscoveryCaseStudy';
import WhyNow from '../components/homepage/WhyNow';
import HowItWorks from '../components/homepage/HowItWorks';
import ValueComparison from '../components/homepage/ValueComparison';
import AlsoIncluded from '../components/homepage/AlsoIncluded';
import LoomVideo from '../components/ngo-search/LoomVideo';
import Pricing from '../components/homepage/Pricing';
import Testimonials from '../components/homepage/Testimonials';
import FAQ from '../components/homepage/FAQ';
import FinalCTA from '../components/homepage/FinalCTA';
import Footer from '../components/Footer';

const HomePage = () => {
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
        <Footer tagline={ONE_LINE_DEFINITION} />
    </div>
  );
};

export default HomePage;

export const Head = () => {
  const pageTitle = 'Find Funders Not in Any Grant Database | Engrant';
  const pageDescription = ONE_LINE_DEFINITION;
  const canonicalUrl = 'https://engrant.eu/';

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />
      <OgTwitterMeta title={pageTitle} description={pageDescription} url={canonicalUrl} />
      <script type="application/ld+json">{JSON.stringify(buildFaqSchema(homepageFaqData))}</script>
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
