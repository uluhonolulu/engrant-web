const {
  ONE_LINE_DEFINITION,
  PRICE_VALID_UNTIL,
} = require('../constants/positioning');

const SITE_URL = 'https://engrant.eu';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Engrant',
  foundingDate: '2025-12-23',
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icons/icon-512x512.png`,
  email: 'founder@engrant.eu',
  description: ONE_LINE_DEFINITION,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Belmonto 17C-1',
    addressLocality: 'Vilnius',
    addressCountry: 'LT',
  },
  founder: {
    '@type': 'Person',
    name: 'Artem Smirnov',
    sameAs: ['https://www.linkedin.com/in/artemsmirnov/'],
  },
  sameAs: [
    'https://www.linkedin.com/company/engrant/',
    'https://www.g2.com/products/engrant/reviews',
  ],
  areaServed: 'Worldwide',
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

const buildProductSchema = ({
  name = 'Engrant Grant Research Pro',
  description,
  offers,
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  brand: {
    '@type': 'Organization',
    name: 'Engrant',
    url: SITE_URL,
  },
  offers,
});

const buildMonthlyOffer = () => ({
  '@type': 'Offer',
  price: '47',
  priceCurrency: 'USD',
  priceValidUntil: PRICE_VALID_UNTIL,
  availability: 'https://schema.org/InStock',
  url: 'https://app.engrant.eu',
  description: 'Monthly plan — 14-day free trial, no credit card required',
});

const buildAnnualOffer = () => ({
  '@type': 'Offer',
  price: '444',
  priceCurrency: 'USD',
  priceValidUntil: PRICE_VALID_UNTIL,
  availability: 'https://schema.org/InStock',
  url: 'https://app.engrant.eu',
  description: 'Annual plan — $37/month billed annually ($444/year)',
});

module.exports = {
  SITE_URL,
  organizationSchema,
  webSiteSchema,
  buildProductSchema,
  buildMonthlyOffer,
  buildAnnualOffer,
  PRICE_VALID_UNTIL,
};
