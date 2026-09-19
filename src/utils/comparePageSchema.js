const { SITE_URL } = require('./siteSchema');

const LAST_REVIEWED = '2026-09-19';
const LAST_REVIEWED_LABEL = 'September 2026';
const REVIEWER_INITIALS = 'AS';

function faqAnswerToText(answer) {
  if (typeof answer === 'string') return answer;
  if (answer == null) return '';
  return String(answer);
}

function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.schemaAnswer || faqAnswerToText(faq.answer),
      },
    })),
  };
}

function buildBreadcrumbSchema(pageName, pagePath) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Comparisons',
        item: `${SITE_URL}/compare/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageName,
        item: `${SITE_URL}${pagePath}`,
      },
    ],
  };
}

module.exports = {
  LAST_REVIEWED,
  LAST_REVIEWED_LABEL,
  REVIEWER_INITIALS,
  buildFaqSchema,
  buildBreadcrumbSchema,
};
