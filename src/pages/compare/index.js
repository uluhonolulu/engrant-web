import React from 'react';
import '../../styles/shared.css';
import { ArrowRight, Sparkles, Scale } from 'lucide-react';
import logo from '../../images/logo-horizontal-remove-background.com.png';
import Footer from '../../components/Footer';
import LastReviewed from '../../components/compare/LastReviewed';
import { OgTwitterMeta } from '../../utils/seoMeta';
import { LAST_REVIEWED } from '../../utils/comparePageSchema';

const COMPARISONS = [
  {
    title: 'Engrant vs Instrumentl',
    href: '/compare/instrumentl/',
    blurb:
      'Discovery-first live-web matching vs Instrumentl’s curated database and full grant lifecycle tools — pricing from $299/month on Discover.',
  },
  {
    title: 'Engrant vs GrantWatch',
    href: '/compare/grantwatch/',
    blurb:
      'AI pre-evaluated matches vs a traditional grant listing database — see how fit scores compare to keyword search.',
  },
  {
    title: 'Engrant vs GrantStation',
    href: '/compare/grantstation/',
    blurb:
      'Live-web discovery with fit scores vs manual searching across GrantStation’s funder database.',
  },
  {
    title: 'Engrant vs Candid (FDO)',
    href: '/compare/candid-foundation-directory-online/',
    blurb:
      'Fast, pre-evaluated grant discovery vs deep U.S. foundation research and 990 history in Candid Premium.',
  },
  {
    title: 'Engrant vs fundsforNGOs',
    href: '/compare/fundsforngos/',
    blurb:
      'Global AI matching vs fundsforNGOs Premium at $49/year online, plus their free resource library.',
  },
  {
    title: 'Engrant vs GrantX',
    href: '/compare/grantx/',
    blurb:
      'Flat unlimited worldwide search vs GrantX’s U.S. credit tiers, 900k+ funders, team seats, and performance fee on wins.',
  },
];

const CompareHubPage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen w-full">
      <Header />
      <LastReviewed />
      <main className="w-full">
        <Hero />
        <ComparisonGrid />
      </main>
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-100/50 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logo} alt="EnGrant Logo" className="h-11 w-auto rounded-lg align-middle" />
          </a>
          <div className="flex items-center space-x-4">
            <a
              href="https://app.engrant.eu/?utm_source=compare_hub&utm_medium=cta&utm_campaign=header_cta"
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md"
            >
              Try Engrant Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero-gradient py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Scale className="w-4 h-4 mr-2" />
          Honest side-by-side reviews
        </div>
        <h1 className="text-4xl lg:text-[3.25rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
          Grant tool comparisons
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          We compare Engrant to the grant databases and AI platforms nonprofits actually evaluate — pricing, geography, and who each product is built for. No fluff, no invented testimonials.
        </p>
      </div>
    </section>
  );
};

const ComparisonGrid = () => {
  return (
    <section className="py-16 bg-white border-t border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {COMPARISONS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group block bg-[#fffbf5] hover:bg-teal-50/40 border border-amber-100/80 rounded-2xl p-8 transition-all duration-200 hover:shadow-lg hover:border-teal-200"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="text-xl font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
                  {item.title}
                </h2>
                <Sparkles className="w-5 h-5 text-amber-500 flex-shrink-0 opacity-80" />
              </div>
              <p className="text-neutral-600 leading-relaxed mb-6">{item.blurb}</p>
              <span className="inline-flex items-center text-teal-700 font-semibold group-hover:translate-x-1 transition-transform">
                Read comparison
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompareHubPage;

const BREADCRUMB_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://engrant.eu/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Grant tool comparisons',
      item: 'https://engrant.eu/compare/',
    },
  ],
};

export const Head = () => {
  return (
    <>
      <title>Grant Tool Comparisons (2026) | Engrant vs Instrumentl, GrantX & More</title>
      <meta
        name="description"
        content="Compare Engrant with Instrumentl, GrantWatch, GrantStation, Candid FDO, fundsforNGOs, and GrantX. Pricing, features, and honest fit guidance for nonprofits."
      />
      <meta name="dateModified" content={LAST_REVIEWED} />
      <link rel="canonical" href="https://engrant.eu/compare/" />
      <OgTwitterMeta
        title="Grant Tool Comparisons (2026) | Engrant"
        description="Side-by-side comparisons of Engrant vs major grant discovery and research platforms."
        url="https://engrant.eu/compare/"
      />
      <script type="application/ld+json">
        {JSON.stringify(BREADCRUMB_SCHEMA)}
      </script>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </>
  );
};
