const SITE_URL = 'https://engrant.eu';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Engrant',
  url: SITE_URL,
  logo: `${SITE_URL}/icons/icon-512x512.png`,
  email: 'founder@engrant.eu',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Belmonto 17C-1',
    addressLocality: 'Vilnius',
    addressCountry: 'LT',
  },
  description:
    'AI-powered grant discovery platform for nonprofits. Engrant returns 30–50 pre-evaluated grants per search with fit analysis, eligibility signals, and strategic considerations.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'founder@engrant.eu',
    contactType: 'customer support',
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Engrant',
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: 'Engrant',
    url: SITE_URL,
  },
};

module.exports = {
  SITE_URL,
  organizationSchema,
  webSiteSchema,
};
