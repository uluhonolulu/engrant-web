import {
  AUDIENCE,
  GEOGRAPHY,
  MECHANISM,
  ONE_LINE_DEFINITION,
  PRICE_ANNUAL_PER_MONTH,
  PRICE_ANNUAL_TOTAL,
  PRICE_MONTHLY,
  PRICE_VALID_UNTIL,
} from '../constants/positioning';

const homepageFaqData = [
  {
    question: 'How is this different from a grant database?',
    answer:
      'Grant databases only show funders they include. A database can only show what it covers — comprehensive within that coverage, invisible outside it. Engrant runs parallel search agents across the live web, surfacing embassy small-grants programmes, regional foundations, and corporate giving with no public portal. Each match arrives pre-evaluated for fit, eligibility, competition, and red flags — so discovery is usable, not just a longer list to research yourself.',
  },
  {
    question: 'How does the AI understand the organization?',
    answer:
      'When you enter an organization name or website, Engrant researches it automatically — mission, geography, budget signals, and stated priorities. When you save or reject a grant, you can say why ("wrong geographic focus," "amount too large," "requires consortium partner"). That feedback is stored per organization profile, so recommendations improve without mixing constraints across clients.',
  },
  {
    question: 'Can I use Engrant for multiple organizations?',
    answer:
      'Yes — unlimited organization profiles are included on both pricing tiers. Each profile maintains its own constraint history: feedback on one client never affects another\'s recommendations. Consultants running five clients and development staff managing multiple programmes use separate profiles without extra per-seat fees.',
  },
  {
    question: 'What about data privacy?',
    answer:
      'Organization data is used only to run your searches and improve recommendations for that profile. Engrant does not share your client information with other users or use it to train models for competitors. Processing runs on Engrant\'s own infrastructure; see the Privacy Policy for GDPR details including data retention and deletion requests.',
  },
  {
    question: 'What if I only need one grant?',
    answer:
      'Many users subscribe to find a single strong opportunity — one embassy programme or regional foundation they would never have surfaced manually. There is no per-search charge: run as many searches as you need during your trial or subscription until you find the right fit.',
  },
  {
    question: 'How much does it cost?',
    answer:
      `Engrant costs $${PRICE_MONTHLY}/month, or $${PRICE_ANNUAL_PER_MONTH}/month billed annually ($${PRICE_ANNUAL_TOTAL}/year — save $120). Both tiers include unlimited searches, unlimited organization profiles, and all features. A 14-day free trial requires no credit card. Cancel anytime. Pricing guaranteed through ${PRICE_VALID_UNTIL}.`,
  },
  {
    question: 'Do you have grants for my sector/region?',
    answer:
      `${GEOGRAPHY} When you describe an organization and its location, Engrant filters to funders it is actually eligible for — including embassy programmes, regional foundations, and corporate giving outside major database coverage areas.`,
  },
  {
    question: 'Does Engrant work outside the United States?',
    answer:
      `${GEOGRAPHY} The interface is available in English and Spanish (/buscar-convocatorias/). Paying customers span Africa, Latin America, Europe, and North America. Embassy and international funder coverage is a core use case — funders outside US-shaped database coverage are often the clearest proof that live-web search finds what fixed databases miss.`,
  },
  {
    question: "What's the difference between Engrant and Instrumentl / Candid / GrantStation?",
    answer:
      'Those platforms search their own databases — comprehensive within them, invisible outside them. Instrumentl pricing starts at $299/month (checked August 2026). GrantStation is ~$894/year for full access. Candid Foundation Directory starts at ~$200/month for individuals. Engrant searches the live web and returns each funder pre-evaluated for your organization at $47/month or $444/year.',
  },
  {
    question: 'Can Engrant help write the proposal?',
    answer:
      'Engrant offers proposal drafting help — a first draft grounded in the funder\'s actual stated requirements, to work from. It does not write or submit a finished proposal on your behalf, and output is not submission-ready without your review and revision.',
  },
  {
    question: 'Does Engrant track deadlines?',
    answer:
      'Engrant writes pipeline events — expected call open, deadline, decision date — into your existing calendar app. You set as many reminders as you want through that calendar; Engrant does not run its own reminder system or send deadline emails independently of your calendar settings.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Yes — 14 days, no credit card required, all features included. The only feature that naturally falls outside a 14-day trial is the monthly email update on new matching funders, since the first one arrives after 30 days.',
  },
  {
    question: 'Who runs Engrant?',
    answer:
      'Engrant is built by Artem Smirnov, a software developer of 25+ years who serves on the board of Teplo, a French nonprofit supporting Ukraine. He lives in Lithuania with his family. Engrant was founded 23 December 2025 and operates from Vilnius, Lithuania. See /about/ for the full story.',
  },
];

export default homepageFaqData;
