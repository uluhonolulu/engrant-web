import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/how-to-research-a-grant-funder/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'Where does Engrant get funder information?',
    answer:
      'Engrant compiles funder profiles from publicly available sources including foundation websites, grant listings, and public filings. The information is presented alongside each grant to save you the time of gathering it yourself.',
  },
  {
    question: 'Can I see funder details for a grant I found outside Engrant?',
    answer:
      "Yes. If you paste a grant URL into Engrant for evaluation, it will build a funder profile as part of the analysis — giving you the same information you'd see for any search result.",
  },
  {
    question: 'How current is the funder information?',
    answer:
      "Funder profiles are compiled when the grant is evaluated. For the most current details (like whether a specific program is still active), follow the source links to the funder's own website.",
  },
  {
    question: 'Should I contact a funder before applying?',
    answer:
      'Many funders appreciate a brief inquiry email. The contact details in the funder profile are there so you can reach out and confirm your project aligns with their current priorities before investing time in a full application.',
  },
  {
    question: 'What if I already know the funder well?',
    answer:
      "The funder profile is most useful when you're encountering a new funder. If you already have a relationship with a foundation, you probably don't need the profile — but the eligibility analysis, competition level, and red flags are still valuable for deciding whether to apply.",
  },
];

const HowToResearchGrantFunderPage = () => {
  return (
    <DocsPageLayout
      title="How to Research a Funder Before You Apply for a Grant"
      description="Engrant shows you each funder's giving history, past grantees, board members, and contact details — right alongside the grant, so you can assess fit without hours of separate research."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Every grant result in Engrant comes with a built-in funder profile — giving history, past grantees, board members, contact details, and geographic focus. You see this alongside the grant&apos;s eligibility analysis, so you can assess whether the funder is a realistic match without doing hours of separate research.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>Why funder research matters and what most nonprofits get wrong about it</li>
          <li>What funder information Engrant provides for each grant</li>
          <li>How to use funder details to decide whether to apply</li>
          <li>How to use the funder profile when writing your application</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Why funder research is worth doing — and why most people skip it</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Experienced grant writers will tell you: the single biggest factor in whether you get funded is alignment with the funder&apos;s actual priorities. Not your writing quality. Not your program design. Alignment.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          But researching a funder properly takes real effort. You need to find their 990 filings, look up past grantees, check board composition, figure out their typical grant size, and understand their geographic and thematic focus. For a single foundation, this can take an hour or more. Multiply that by 20 or 30 grants you&apos;re considering, and funder research alone becomes a full-time job.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          So most organizations skip it, or do it superficially — and end up applying to funders who were never going to fund their type of work.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What Engrant shows you about each funder</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          When you expand a grant card or open the detailed view, you&apos;ll see a funder profile that includes:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Information</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What it tells you</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Funder name and description</strong></td>
                <td className="px-4 py-3">Who they are and what they fund</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Past grantees</strong></td>
                <td className="px-4 py-3">Organizations the funder has actually given money to — the strongest signal of what they value</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Giving patterns</strong></td>
                <td className="px-4 py-3">Typical grant sizes, frequency, and focus areas</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Board members</strong></td>
                <td className="px-4 py-3">Names and titles of people making funding decisions</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Contact details</strong></td>
                <td className="px-4 py-3">Email, phone, or website for the grants office</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Geographic focus</strong></td>
                <td className="px-4 py-3">Where the funder concentrates their giving</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Source links</strong></td>
                <td className="px-4 py-3">Direct links to the funder&apos;s website, grant page, and original listing</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          This information appears alongside the grant&apos;s eligibility analysis, competition level, and effort estimate — so you can evaluate the funder and the opportunity in one place.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to use past grantees to assess your chances</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The list of past grantees is the most valuable piece of funder research. It answers the question no guidelines page can: <em>who does this funder actually give money to?</em>
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">Look at the past grantees and ask:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li><strong>Are they similar to us in size?</strong> If every past grantee is a large international NGO and you&apos;re a small community organization, that&apos;s a signal — regardless of what the eligibility criteria say.</li>
          <li><strong>Are they in our sector?</strong> A funder may say they support &quot;community development&quot; broadly, but if every past grantee works in housing, your education project may not be what they&apos;re looking for.</li>
          <li><strong>Are they in our region?</strong> Some funders say they&apos;re national but give almost exclusively to organizations in specific cities or states.</li>
          <li><strong>Is there variety?</strong> If the same organizations appear year after year, the funder may have preferred relationships. If there&apos;s turnover, they may be more open to new applicants.</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mt-5">
          This takes two minutes to scan when the information is right in front of you. It saves you from investing days into an application for a funder that was never going to be a fit.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to use funder details when writing your application</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          The funder profile isn&apos;t just for deciding whether to apply. It&apos;s also useful when you&apos;re writing:
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>Board composition</strong> tells you about the funder&apos;s values and culture. If board members come from academia, a research-grounded proposal may resonate. If they&apos;re from the business world, outcomes and metrics might matter more.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>Past grantees</strong> show you what successful applications look like in practice. If a funder consistently supports direct-service organizations, frame your work in terms of direct impact. If they fund policy and advocacy, lead with systems change.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>Geographic focus</strong> helps you position your work. If the funder focuses on East Africa and you operate across Sub-Saharan Africa, lead with your East African programs.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          <strong>Contact details</strong> are there for a reason. Many funders welcome a brief inquiry before you apply. A short email asking whether your project falls within their current priorities can save both sides time — and a response gives you a personal connection to reference in your application.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How this compares to manual funder research</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Category</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Manual research</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Engrant</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Where you find it</strong></td>
                <td className="px-4 py-3">990 databases, foundation websites, GuideStar, annual reports</td>
                <td className="px-4 py-3">Built into every grant result</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Time per funder</strong></td>
                <td className="px-4 py-3">30 minutes to 2 hours</td>
                <td className="px-4 py-3">Already there when you open the grant card</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Past grantees</strong></td>
                <td className="px-4 py-3">Often requires digging through tax filings</td>
                <td className="px-4 py-3">Listed in the funder profile</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Board info</strong></td>
                <td className="px-4 py-3">Foundation website (if published)</td>
                <td className="px-4 py-3">Included with each grant</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Contact details</strong></td>
                <td className="px-4 py-3">Sometimes buried deep in a website</td>
                <td className="px-4 py-3">Shown alongside the grant</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          The point isn&apos;t that Engrant replaces deep due diligence for your top 2–3 target funders. It&apos;s that it gives you enough to make smart decisions about which funders deserve that deeper investment — without spending hours on the ones that don&apos;t.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10" id="faq">
        <h2 className="text-3xl font-bold text-neutral-700 mb-6">Frequently asked questions</h2>
        <div className="space-y-5">
          {FAQ_ITEMS.map((faq) => (
            <div key={faq.question} className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">{faq.question}</h3>
              <p className="text-neutral-700 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </DocsPageLayout>
  );
};

export default HowToResearchGrantFunderPage;

export const Head = () => {
  const pageTitle = 'How to Research a Funder Before You Apply for a Grant | Engrant';
  const pageDescription =
    "Engrant shows you each funder's giving history, past grantees, board members, and contact details right alongside the grant — so you can assess fit without hours of separate research.";

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Research a Funder Before You Apply for a Grant',
    description: pageDescription,
    datePublished: '2026-06-29',
    dateModified: '2026-06-29',
    author: {
      '@type': 'Organization',
      name: 'Engrant',
      url: 'https://engrant.eu',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Engrant',
      url: 'https://engrant.eu',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': CANONICAL_URL,
    },
    isAccessibleForFree: true,
    inLanguage: 'en',
  };

  const breadcrumbSchema = {
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
        name: 'Docs',
        item: 'https://engrant.eu/docs/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'How to research a grant funder',
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content="research a grant funder, funder research, foundation research, past grantees, funder profile, nonprofit grants, Engrant"
      />
      <OgTwitterMeta title={pageTitle} description={pageDescription} url={CANONICAL_URL} type="article" />
      <meta property="article:published_time" content="2026-06-29T00:00:00.000Z" />
      <link rel="canonical" href={CANONICAL_URL} />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </>
  );
};
