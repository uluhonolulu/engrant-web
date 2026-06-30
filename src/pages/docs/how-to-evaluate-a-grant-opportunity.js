import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/how-to-evaluate-a-grant-opportunity/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'What kinds of URLs work?',
    answer:
      'Any URL that points to a grant description page — foundation websites, government grant portals, databases, or direct links to calls for proposals. The page needs to contain enough information about the grant for Engrant to analyze.',
  },
  {
    question: 'Does the evaluation add the grant to my pipeline automatically?',
    answer:
      'It depends on how you access it. From the pipeline\'s "Add Grant from Webpage" button, yes — it\'s saved automatically. From the dashboard\'s evaluation tool, the grant appears for review and you can choose to save it.',
  },
  {
    question: 'Can I evaluate multiple grants at once?',
    answer:
      'You evaluate one URL at a time. Each evaluation takes a few minutes. If you have several grants to check, you can submit them one after another.',
  },
  {
    question: 'What if the grant page requires a login?',
    answer:
      'Engrant needs to be able to read the page content from the URL. If the grant details are behind a login wall, the evaluation may not capture full information. In that case, try finding a public-facing page for the same grant.',
  },
  {
    question: 'Is the analysis as thorough as a regular search result?',
    answer:
      'Yes. The evaluation uses the same process — analyzing the grant requirements and comparing them against your organization\'s profile. You get the same fit rating, red flags, funder information, and preparation steps.',
  },
  {
    question: 'Can I evaluate a grant that I already found in an Engrant search?',
    answer:
      "You don't need to — grants from search results already have the full analysis. The URL evaluation feature is specifically for grants you found outside of Engrant.",
  },
];

const HowToEvaluateGrantOpportunityPage = () => {
  return (
    <DocsPageLayout
      title="How to Evaluate a Grant You Found on Your Own"
      description="Paste any grant URL into Engrant and get a full analysis — fit rating, competition level, effort estimate, funder profile, and red flags — in minutes instead of hours."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Paste a grant&apos;s URL into Engrant and it will analyze the page, assess the opportunity against your organization&apos;s profile, and give you the same detailed breakdown you&apos;d get from a regular search — fit rating, funder profile, competition level, effort estimate, red flags, and preparation steps. It takes a few minutes.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>When and why you&apos;d evaluate a grant you found outside Engrant</li>
          <li>How the evaluation works</li>
          <li>What the analysis includes</li>
          <li>What to do with the results</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">You found a grant. Now what?</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Grants come from everywhere — a newsletter, a colleague&apos;s email, a foundation&apos;s website, a conference tip, a LinkedIn post. When someone says &quot;you should apply for this,&quot; your first question is always the same: <em>Is it actually a fit for us?</em>
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Answering that question properly means reading the full guidelines, checking eligibility criteria against your organization&apos;s profile, researching the funder, estimating how competitive it is, and figuring out how much work the application will be. This easily takes an hour or more — and at the end, you might discover it&apos;s not a match.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Engrant lets you skip the manual evaluation. Paste the URL and get the analysis.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to evaluate a grant in Engrant</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">You can do this from two places:</p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>From the dashboard:</strong> Click <strong>Evaluate a grant from a webpage</strong>, select which funding need the grant relates to, paste the URL, and click <strong>Start Evaluation</strong>.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>From the pipeline:</strong> Click <strong>Add Grant from Webpage</strong>, paste the URL, and Engrant evaluates and adds it to your saved grants.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          In both cases, Engrant reads the grant page, extracts the requirements and funder information, and evaluates the opportunity against your organization&apos;s profile.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What the analysis includes</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The evaluation gives you the same information you&apos;d see for any grant in your search results:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Section</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What you learn</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Fit rating</strong></td>
                <td className="px-4 py-3">Strong Fit, Potential Fit, Limited Fit, or Ineligible — with specific reasons</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Match points</strong></td>
                <td className="px-4 py-3">Why this grant aligns (or doesn&apos;t) with your organization&apos;s sector, location, size, and mission</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Red flags</strong></td>
                <td className="px-4 py-3">Issues to be aware of: geographic restrictions, matching requirements, tight timelines, restrictive payment terms</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Competition level</strong></td>
                <td className="px-4 py-3">How competitive this grant typically is</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Effort level</strong></td>
                <td className="px-4 py-3">How complex the application process is</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Funding amount</strong></td>
                <td className="px-4 py-3">Grant size and payment terms</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Deadline</strong></td>
                <td className="px-4 py-3">Submission date and whether you have enough time</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Funder profile</strong></td>
                <td className="px-4 py-3">Past grantees, board members, contact details, giving patterns</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Application process</strong></td>
                <td className="px-4 py-3">Required documents, steps, and contact information</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Preparation steps</strong></td>
                <td className="px-4 py-3">A checklist of what you need to do to apply</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          This replaces the manual process of reading guidelines, cross-referencing your details, and making judgment calls — compressed into a few minutes.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Common situations where this is useful</h2>
        <div className="space-y-5">
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">A board member sends you a grant link</h3>
            <p className="text-neutral-700 leading-relaxed">Instead of spending an afternoon reading the guidelines to report back, paste the URL and have a clear assessment in minutes. You can tell the board whether it&apos;s a Strong Fit or not, and why.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">You spot a grant in a newsletter</h3>
            <p className="text-neutral-700 leading-relaxed">Newsletters often list grants with minimal context. The URL evaluation gives you the full picture without visiting the funder&apos;s website and piecing together information from multiple pages.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">A colleague at another nonprofit mentions a grant</h3>
            <p className="text-neutral-700 leading-relaxed">&quot;You should apply for this&quot; is well-intentioned advice, but the grant may not be a fit for your specific organization. The evaluation tells you quickly whether it&apos;s worth pursuing.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">You find a grant on a foundation&apos;s website</h3>
            <p className="text-neutral-700 leading-relaxed">Foundation websites vary wildly in how well they organize their information. Some bury key eligibility details three pages deep. Engrant extracts and organizes everything in one view.</p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What to do after the evaluation</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          If the grant is a good fit, you can <strong>save it</strong> to your pipeline. It joins your other saved grants with deadline tracking, preparation steps, and progress monitoring — the same as any grant found through a search.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          If it&apos;s not a fit, you know immediately — and you&apos;ve saved yourself the time you would have spent reading the full guidelines and writing a partial application before discovering the mismatch.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Either way, the evaluation pays for itself in time. The alternative — reading, researching, and assessing manually — would take an hour or more for a single grant. Doing it through Engrant takes minutes.
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

export default HowToEvaluateGrantOpportunityPage;

export const Head = () => {
  const pageTitle = 'How to Evaluate a Grant You Found on Your Own | Engrant';
  const pageDescription =
    'Paste any grant URL into Engrant and get a full analysis — fit rating, competition level, effort estimate, funder profile, and red flags — in minutes instead of hours.';

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
    headline: 'How to Evaluate a Grant You Found on Your Own',
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
        name: 'How to evaluate a grant opportunity',
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
        content="evaluate a grant, grant evaluation, assess grant opportunity, grant fit analysis, evaluate grant from URL, nonprofit grants, Engrant"
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
