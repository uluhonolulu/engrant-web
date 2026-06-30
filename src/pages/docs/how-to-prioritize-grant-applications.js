import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/how-to-prioritize-grant-applications/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'How many grants should I apply for at once?',
    answer:
      "There's no universal number, but quality matters more than quantity. Most small-to-mid-sized nonprofits can handle 3–5 strong applications at a time. Engrant's pipeline view helps you see your full workload so you can judge capacity realistically.",
  },
  {
    question: "What if I'm a Strong Fit for a grant but the competition is very high?",
    answer:
      'A strong fit is still your best asset. High competition means more applicants, but it also means the funder is well-known and actively giving. If your profile genuinely aligns, the application is worth the effort — especially if you have enough time to prepare thoroughly.',
  },
  {
    question: 'Should I apply for grants with rolling deadlines?',
    answer:
      'Yes, but don\'t deprioritize them just because there\'s no urgency. Rolling deadlines mean funds can run out at any time. Treat them as "apply when ready" rather than "apply whenever."',
  },
  {
    question: 'What if a great grant has a very tight deadline?',
    answer:
      'Be realistic about what you can produce in the time available. A rushed application with errors or missing components is worse than not applying. Save the grant, note the cycle, and prepare early for next time.',
  },
  {
    question: 'Can I see all five factors without clicking into each grant?',
    answer:
      'Yes. The grant card in search results shows the fit rating, competition level, effort level, funding amount, and deadline — all visible without expanding the card.',
  },
];

const HowToPrioritizeGrantApplicationsPage = () => {
  return (
    <DocsPageLayout
      title="How to Decide Which Grants to Apply For When You Can't Apply to All of Them"
      description="Engrant rates each grant by fit, competition, effort, and deadline — so you can compare opportunities side by side and focus on the ones most likely to pay off."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Engrant shows you the fit rating, competition level, effort required, funding amount, deadline, and payment terms for every grant — all in one view. You can compare opportunities side by side and focus your limited time on the grants most likely to result in funding.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>Why prioritizing matters more than finding more grants</li>
          <li>The five factors that determine whether a grant is worth your time</li>
          <li>How to use Engrant&apos;s ratings to make quick prioritization decisions</li>
          <li>A simple framework for choosing between competing opportunities</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">The real bottleneck isn&apos;t finding grants — it&apos;s choosing between them</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Most grant seekers think their problem is not finding enough opportunities. But after running a thorough search, the opposite is usually true: you end up with a list of 15 or 20 potentially relevant grants, and you have the capacity to apply for maybe 3 or 4 of them well.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          A rushed application to 10 grants will almost always lose to a strong application to 3 well-chosen ones. The decision of <em>which</em> grants to pursue is often more important than the applications themselves.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          The challenge is that making this decision requires information that&apos;s normally hard to get — how competitive is this grant? How complex is the application? Is the funder actually likely to fund someone like us? Getting those answers usually requires reading every set of guidelines in full, which brings you right back to the time problem.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">The five factors that determine if a grant is worth applying for</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          Engrant evaluates each grant on five dimensions. Together, they tell you whether an opportunity deserves your time.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Factor</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What it tells you</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Why it matters</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Fit rating</strong></td>
                <td className="px-4 py-3">How well your organization matches the funder&apos;s priorities</td>
                <td className="px-4 py-3">A Strong Fit means your profile aligns closely; Limited Fit means significant gaps exist</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Competition level</strong></td>
                <td className="px-4 py-3">How many organizations typically apply</td>
                <td className="px-4 py-3">High competition means even a strong application may not succeed</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Effort level</strong></td>
                <td className="px-4 py-3">How complex the application process is</td>
                <td className="px-4 py-3">Some grants require a two-page letter; others need a 50-page proposal with audited financials</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Funding amount</strong></td>
                <td className="px-4 py-3">How much money is available</td>
                <td className="px-4 py-3">A $5,000 grant requiring the same effort as a $50,000 one may not be worth it</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Deadline</strong></td>
                <td className="px-4 py-3">How much time you have</td>
                <td className="px-4 py-3">A great grant with a deadline in 5 days may not be realistic</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          Each of these is visible on the grant card without clicking through to the full details.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">A practical framework for prioritization</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">Combine the five factors into a quick decision:</p>
        <div className="space-y-5">
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Apply first: Strong Fit + Low-Medium Competition + Reasonable Deadline</h3>
            <p className="text-neutral-700 leading-relaxed">These are your highest-value targets. The funder&apos;s priorities align with your work, you&apos;re not competing against hundreds of applicants, and you have time to prepare a strong application.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Apply if you can: Strong Fit + High Competition + Good Deadline</h3>
            <p className="text-neutral-700 leading-relaxed">Worth the investment if you have capacity, because your profile matches well. But go in knowing the odds are lower.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Quick wins: Potential Fit + Low Effort + Rolling Deadline</h3>
            <p className="text-neutral-700 leading-relaxed">If the application is simple (a letter of inquiry, a short form), it may be worth applying even without a perfect match. Low effort means low risk.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Watch for later: Strong Fit + Deadline Passed</h3>
            <p className="text-neutral-700 leading-relaxed">Engrant shows expired grants that match your profile. Save these — many grants recur annually. Knowing about them now means you can prepare early for the next cycle.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Skip: Limited Fit + High Effort + Tight Deadline</h3>
            <p className="text-neutral-700 leading-relaxed">The math doesn&apos;t work. You&apos;d spend significant time on an application where your alignment is weak and time is short.</p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to use filters to focus on what matters</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">Engrant groups your search results into four categories:</p>
        <ol className="space-y-3 text-neutral-700 leading-relaxed list-decimal list-inside mb-5">
          <li><strong>Ready to Apply</strong> — eligible, deadline open</li>
          <li><strong>Worth Watching</strong> — possible fit, needs review</li>
          <li><strong>Expired</strong> — deadline passed, but useful for future cycles</li>
          <li><strong>Not a Match</strong> — clear misalignment</li>
        </ol>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Start by looking only at Ready to Apply. Within that group, sort mentally by fit rating and competition level. Your best opportunities are the Strong Fit grants with manageable competition.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Then check Worth Watching for any that might move into your shortlist with a closer look.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How your pipeline helps you stay focused</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          Once you&apos;ve decided which grants to pursue, save them to your pipeline. Each saved grant shows:
        </p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li>A <strong>progress bar</strong> tracking your preparation steps</li>
          <li>The <strong>next step</strong> you need to work on</li>
          <li>The <strong>deadline</strong> with a countdown in days</li>
          <li><strong>Color coding</strong> so you can visually tag your priorities</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          This turns the abstract question of &quot;what should I work on?&quot; into a concrete list with clear next actions.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Payment terms: the factor most people forget</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Engrant shows payment terms for each grant — whether funds come upfront, in milestones, or as reimbursement. This matters more than most organizations realize.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          A $100,000 reimbursement-based grant means you need $100,000 in cash flow to front the costs before getting paid back. If you don&apos;t have that liquidity, a smaller grant with upfront payment may be more valuable to you in practice.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Factor this into your prioritization, especially if your organization operates with tight cash flow.
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

export default HowToPrioritizeGrantApplicationsPage;

export const Head = () => {
  const pageTitle = "How to Decide Which Grants to Apply For When You Can't Apply to All of Them | Engrant";
  const pageDescription =
    'Engrant rates each grant by fit, competition, effort, and deadline — so you can compare opportunities side by side and focus on the ones most likely to pay off.';

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
    headline: "How to Decide Which Grants to Apply For When You Can't Apply to All of Them",
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
        name: 'How to prioritize grant applications',
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
        content="prioritize grant applications, which grants to apply for, grant prioritization, grant fit rating, grant competition, nonprofit grants, Engrant"
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
