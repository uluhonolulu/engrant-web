import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';

const PAGE_PATH = '/docs/how-to-check-grant-eligibility-before-applying/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'What does Engrant check to determine eligibility?',
    answer:
      "Engrant compares your organization's sector, mission, location, size, legal status, budget, track record, and special eligibility markers (like women-led or minority-led status) against the grant's stated requirements, geographic restrictions, and funder priorities.",
  },
  {
    question: 'How accurate are the fit ratings?',
    answer:
      "The ratings are based on publicly available information about both your organization and the grant. They're designed to save you from clearly mismatched opportunities and highlight strong matches. For Potential Fit grants, you should review the detailed analysis to make your own judgment.",
  },
  {
    question: "Can I update my organization's profile if something is wrong?",
    answer:
      'Yes. When Engrant first researches your organization, you review the findings and can add context or corrections. You can also reopen this profile at any time from the dashboard to update it.',
  },
  {
    question: 'Does Engrant check eligibility for grants I find outside the platform?',
    answer:
      "Yes. You can paste any grant URL into Engrant and get a full eligibility analysis against your organization's profile, including the fit rating, match points, and red flags.",
  },
  {
    question: 'What if I disagree with a fit rating?',
    answer:
      "The detailed analysis for each grant shows exactly why it received its rating. If you believe your organization qualifies despite a lower rating, you can still save the grant and proceed — the ratings are guidance, not restrictions.",
  },
  {
    question: 'Does eligibility checking cost extra?',
    answer:
      "No. Eligibility analysis is built into every grant search and every manual grant evaluation. It's part of how Engrant works, not an add-on feature.",
  },
];

const HowToCheckGrantEligibilityPage = () => {
  return (
    <DocsPageLayout
      title="How to Know If Your Nonprofit Is Eligible for a Grant Before You Apply"
      description="Stop wasting time on grants you can't win. Engrant checks your organization's profile against each grant's requirements and shows you a clear fit rating — before you write a single word."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Engrant automatically checks your organization&apos;s profile — sector, location, size, legal status, track record — against each grant&apos;s requirements and shows you a clear relevance rating (Strong Fit, Potential Fit, Limited Fit, or Ineligible) with specific reasons. You see this before you invest any time in the application.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>Why eligibility checking is the biggest time sink in grant searching</li>
          <li>What Engrant actually checks when it rates a grant&apos;s fit</li>
          <li>How to read the fit ratings, match points, and red flags</li>
          <li>How to quickly evaluate a grant you found on your own</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Why most nonprofits waste time on grants they can&apos;t win</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Here&apos;s a pattern most grant seekers know too well: you find a promising grant, spend 20 minutes reading the guidelines, maybe start outlining your application — and then discover on page 4 that it&apos;s restricted to organizations with annual budgets over $5 million, or only available in three US states, or requires a consortium of at least four partners.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          According to nonprofit professionals, reading and evaluating a single grant&apos;s guidelines takes anywhere from 30 minutes to several hours. Multiply that by the dozens of opportunities you encounter in a typical search, and you&apos;re looking at days of work just to figure out which grants are even worth pursuing.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          The core problem: most grant databases let you search by keyword or category, but they don&apos;t know anything about <em>your</em> organization. So they can&apos;t tell you whether you actually qualify.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How Engrant checks eligibility automatically</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          When you set up Engrant, it researches your organization from your website and builds a detailed profile covering:
        </p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li>
            <strong>Mission and sector alignment</strong> — what your organization does and who it serves
          </li>
          <li>
            <strong>Geographic eligibility</strong> — where you&apos;re based, where you operate, EU membership status
          </li>
          <li>
            <strong>Organization size</strong> — team size, annual budget, operational scale
          </li>
          <li>
            <strong>Legal status</strong> — registration type, tax-exempt status
          </li>
          <li>
            <strong>Track record</strong> — years of experience, largest projects managed, past funders
          </li>
          <li>
            <strong>Special eligibility markers</strong> — women-led, minority-led, youth-led, faith-based, disability-focused, indigenous-led
          </li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          When you run a grant search, Engrant compares this profile against each grant&apos;s actual requirements — not just keywords, but specific eligibility criteria like geographic restrictions, budget thresholds, sector focus, and funder priorities.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to read the fit rating on each grant</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">Every grant in your search results gets one of four relevance ratings:</p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Rating</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What it means</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What to do</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">
                  <strong>Strong Fit</strong>
                </td>
                <td className="px-4 py-3">Your organization clearly matches the funder&apos;s priorities, geography, sector, and size requirements</td>
                <td className="px-4 py-3">Prioritize this one — you&apos;re well-positioned to apply</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">
                  <strong>Potential Fit</strong>
                </td>
                <td className="px-4 py-3">Most criteria align, but some aspects need closer review or aren&apos;t certain</td>
                <td className="px-4 py-3">Worth investigating — read the detailed analysis to understand the gaps</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">
                  <strong>Limited Fit</strong>
                </td>
                <td className="px-4 py-3">Some alignment exists, but significant mismatches are present</td>
                <td className="px-4 py-3">Probably not worth the effort unless you can address the gaps</td>
              </tr>
              <tr>
                <td className="px-4 py-3">
                  <strong>Ineligible</strong>
                </td>
                <td className="px-4 py-3">Clear disqualifying factors (wrong country, wrong sector, budget too small, etc.)</td>
                <td className="px-4 py-3">Skip it — the specific reasons are listed so you understand why</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What &quot;Why this is a good fit&quot; actually tells you</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          Below each grant&apos;s rating, you&apos;ll see a section explaining the specific match points. These aren&apos;t vague descriptions — they&apos;re concrete reasons tied to your organization&apos;s profile.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">For example, you might see:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>&quot;Your focus on maternal health aligns with this funder&apos;s priority area of reproductive health services&quot;</li>
          <li>&quot;Your location in Kenya qualifies under this grant&apos;s Sub-Saharan Africa geographic focus&quot;</li>
          <li>&quot;Your annual budget of $800K falls within the funder&apos;s target range of $500K–$2M&quot;</li>
          <li>&quot;Your 12 years of field experience exceeds the minimum 5-year track record requirement&quot;</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mt-5">
          This tells you not just <em>that</em> you&apos;re a fit, but <em>why</em> — which is also useful when you start writing your application.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to spot red flags before you invest time</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">Grants with potential issues show a red flags section highlighting things like:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li>Geographic restrictions that may not include your operating region</li>
          <li>Matching fund requirements (you need to raise a percentage yourself)</li>
          <li>Consortium requirements (you need partner organizations to apply)</li>
          <li>Restrictive payment terms (reimbursement-only, meaning you need cash flow to front costs)</li>
          <li>Very high competition levels</li>
          <li>Short timelines that may not leave enough time to prepare a strong application</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          These red flags appear right on the grant card — you don&apos;t need to click through or read the full guidelines to spot them.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to evaluate a grant you found on your own</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Sometimes you come across a grant on a foundation&apos;s website, in a newsletter, or from a colleague&apos;s recommendation. You don&apos;t need to run a full search to check it.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Paste the grant&apos;s URL into Engrant and it will analyze the page and evaluate the opportunity against your organization&apos;s profile — giving you the same fit rating, match points, red flags, competition level, effort estimate, and funder details you&apos;d get from a regular search result.
        </p>
        <p className="text-neutral-700 leading-relaxed mt-4">
          This takes a couple of minutes and replaces the manual process of reading through guidelines, cross-referencing your organization&apos;s details, and making a judgment call.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to use eligibility information to prioritize your applications</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          Once you&apos;ve reviewed your results, the combination of fit rating, competition level, effort level, and deadline gives you enough information to make a quick prioritization decision:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Scenario</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Recommendation</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">Strong Fit + Low Competition + Deadline in 6 weeks</td>
                <td className="px-4 py-3">Apply — this is your best opportunity</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">Strong Fit + High Competition + Deadline in 2 weeks</td>
                <td className="px-4 py-3">Consider carefully — strong fit but tight timeline and lots of applicants</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">Potential Fit + Low Effort + Rolling deadline</td>
                <td className="px-4 py-3">Worth a shot — low investment and no time pressure</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Limited Fit + High Effort + Deadline next week</td>
                <td className="px-4 py-3">Skip — poor return on time invested</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          Save the grants you want to pursue, and they move to your pipeline where you can track preparation steps and deadlines.
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

export default HowToCheckGrantEligibilityPage;

export const Head = () => {
  const pageTitle = 'How to Know If Your Nonprofit Is Eligible for a Grant Before You Apply | Engrant';
  const pageDescription =
    "Stop wasting time on grants you can't win. Engrant checks your organization's profile against each grant's requirements and shows you a clear fit rating before you apply.";

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
    headline: 'How to Know If Your Nonprofit Is Eligible for a Grant Before You Apply',
    description: pageDescription,
    datePublished: '2026-04-11',
    dateModified: '2026-04-11',
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
        name: 'How to check grant eligibility before applying',
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
        content="grant eligibility, nonprofit grant eligibility, check if eligible for grant, grant fit rating, grant requirements, nonprofit grants, Engrant"
      />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="article:published_time" content="2026-04-11T00:00:00.000Z" />
      <link rel="canonical" href={CANONICAL_URL} />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </>
  );
};
