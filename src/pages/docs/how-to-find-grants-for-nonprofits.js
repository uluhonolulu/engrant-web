import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';

const FAQ_ITEMS = [
  {
    question: 'How long does a grant search take?',
    answer:
      'The initial setup (entering your website and describing your funding need) takes about 5–10 minutes. After that, each new search runs in a few minutes and you can start reviewing results immediately.',
  },
  {
    question: 'Do I need to describe my funding need in detail?',
    answer:
      'No. You can type as little as two words — like "staff training" or "new building" — and Engrant will expand it into a detailed, structured funding need. You can always refine it afterward.',
  },
  {
    question: 'Can I search for grants for more than one project?',
    answer:
      'Yes. You can create multiple funding needs, each with its own search results and pipeline. This is useful if your organization has several programs or departments looking for funding.',
  },
  {
    question: 'Can I evaluate a grant I found on my own?',
    answer:
      "Yes. If you find a grant on another website, you can paste the URL into Engrant and it will analyze it the same way — giving you a fit rating, funder profile, red flags, and everything else.",
  },
  {
    question: 'Does Engrant write the full proposal for me?',
    answer:
      "Engrant generates a first draft based on the funder's priorities and your organization's profile. It's a starting point, not a finished application. You'll still want to review, personalize, and refine it before submitting.",
  },
  {
    question: 'How much does it cost?',
    answer:
      'Engrant offers a free trial so you can run your first search and see results before committing to a plan. Paid plans are available for ongoing use with additional features like multiple organizations and unlimited searches.',
  },
  {
    question: 'What types of grants does Engrant cover?',
    answer:
      "Engrant covers a broad range of funding opportunities including foundation grants, government programs, EU funding, and specialized funders. Results are tailored to your organization's sector, location, and eligibility.",
  },
];

const HowToFindGrantsForNonprofitsPage = () => {
  return (
    <DocsPageLayout
      title="How to Find Grants for Your Nonprofit — Without Weeks of Googling"
      description="Engrant lets you describe your nonprofit and what you need money for, then finds grants that actually match — ranked by relevance, with deadlines, competition levels, and funder details included."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Engrant lets you describe your nonprofit and what you need money for, then finds grants that actually match — ranked by relevance, with deadlines, competition levels, and funder details included. You get results in minutes, not weeks.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>How to go from &quot;we need funding&quot; to a list of matching grants in under 10 minutes</li>
          <li>How Engrant evaluates each grant for fit, competition, and effort</li>
          <li>How to save, track, and prioritize the best opportunities</li>
          <li>How to generate a first-draft proposal without starting from scratch</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Why searching for grants the traditional way takes so long</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Most nonprofit teams find grants the same way: Googling phrases like &quot;grants for youth programs in Europe,&quot; scrolling through foundation directories, bookmarking dozens of tabs, and then manually reading each funder&apos;s guidelines to figure out if they even qualify.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          The problem isn&apos;t that grants don&apos;t exist. It&apos;s that there&apos;s no efficient way to match your specific organization — with its particular mission, location, size, sector, and track record — to the grants that are actually a fit.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Engrant takes a different approach. Instead of searching by keyword, it builds a profile of your organization and matches it against grant opportunities based on eligibility, sector alignment, and funder priorities.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How Engrant finds grants that match your nonprofit</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">The process has three steps. The whole thing takes about 5-10 minutes.</p>
        <ol className="space-y-5 text-neutral-700 leading-relaxed list-decimal list-inside">
          <li>
            <strong>Step 1: Enter your website.</strong> You give Engrant your organization&apos;s URL. It automatically researches your nonprofit, and you review, correct, and confirm what it found.
          </li>
          <li>
            <strong>Step 2: Describe what you need funding for.</strong> This can be as short as two words. Engrant expands your input into a structured funding need with budget estimates, timelines, and targeting guidance for your review.
          </li>
          <li>
            <strong>Step 3: Get your results.</strong> Engrant runs the search and returns grants with a clear breakdown of why each one does or doesn&apos;t fit your organization.
          </li>
        </ol>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you see for each grant</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What you see</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Why it matters</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Relevance rating</strong> (Strong Fit, Potential Fit, Limited Fit)</td>
                <td className="px-4 py-3">Know immediately how well this grant matches your organization</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>&quot;Why this is a good fit&quot; summary</strong></td>
                <td className="px-4 py-3">Specific reasons this funder aligns with your work</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Funding amount</strong></td>
                <td className="px-4 py-3">See the grant size before you invest time reading further</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Deadline</strong></td>
                <td className="px-4 py-3">Know if you have enough time to apply</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Competition level</strong></td>
                <td className="px-4 py-3">Understand how many organizations typically apply</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Effort level</strong></td>
                <td className="px-4 py-3">Gauge how complex the application process is</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Payment terms</strong></td>
                <td className="px-4 py-3">See whether funds come upfront, in milestones, or as reimbursement</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Red flags</strong></td>
                <td className="px-4 py-3">Spot potential issues (restricted countries, matching requirements, etc.)</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Funder profile</strong></td>
                <td className="px-4 py-3">Past grantees, board members, giving patterns, contact details</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to filter and prioritize your results</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">Grants are automatically sorted into four categories:</p>
        <ol className="space-y-3 text-neutral-700 leading-relaxed list-decimal list-inside mb-5">
          <li><strong>Ready to Apply</strong> — you&apos;re eligible and the deadline is open</li>
          <li><strong>Worth Watching</strong> — could be a fit but needs more investigation</li>
          <li><strong>Expired</strong> — the deadline has passed, but worth noting for the next cycle</li>
          <li><strong>Not a Match</strong> — doesn&apos;t align with your organization</li>
        </ol>
        <p className="text-neutral-700 leading-relaxed">You can toggle these filters on and off to focus on what matters most. Each category shows a count so you can see at a glance how many opportunities you have.</p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to save grants and track your pipeline</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          When you find a grant worth pursuing, click <strong>Save Grant</strong> and optionally add notes. It moves to your pipeline — a dedicated page where all your saved grants are organized with deadlines, progress tracking, and next steps.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">Your pipeline includes:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li><strong>A preparation checklist</strong> for each grant, showing exactly what steps you need to complete before submitting</li>
          <li><strong>A visual timeline</strong> displaying all your deadlines, decision dates, and project start dates on a month-by-month calendar</li>
          <li><strong>Export options</strong> so you can generate a Word report, spreadsheet, or plain text file for your board or team</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to go from a saved grant to a proposal draft</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          For any grant in your pipeline, you can click <strong>Write Proposal</strong> to start a guided process. Engrant analyzes the funder, generates several project concept options tailored to what that funder looks for, and lets you pick one.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Then it produces a full proposal draft — with formatting, structure, and alignment scoring — that you can copy, edit, and submit. This doesn&apos;t replace your judgment or your voice. It gives you a strong starting point instead of a blank page.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How Engrant compares to manual grant searching</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Category</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Manual search</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Engrant</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Time to first results</strong></td>
                <td className="px-4 py-3">Days to weeks</td>
                <td className="px-4 py-3">Under 10 minutes</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Matching method</strong></td>
                <td className="px-4 py-3">Keyword + manual reading</td>
                <td className="px-4 py-3">AI matching against your org profile</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Eligibility check</strong></td>
                <td className="px-4 py-3">You read each funder&apos;s guidelines</td>
                <td className="px-4 py-3">Automatic, with clear fit ratings</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Funder research</strong></td>
                <td className="px-4 py-3">Separate process (990s, websites, databases)</td>
                <td className="px-4 py-3">Included with each grant result</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Deadline tracking</strong></td>
                <td className="px-4 py-3">Spreadsheets, calendar reminders</td>
                <td className="px-4 py-3">Built-in pipeline with timeline</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Proposal writing</strong></td>
                <td className="px-4 py-3">Blank page</td>
                <td className="px-4 py-3">AI-generated first draft</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Comparing grant discovery tools</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          If you&apos;re evaluating traditional grant databases alongside AI-powered search, see how Engrant compares to popular options — including pricing, features, and honest trade-offs.
        </p>
        <ul className="space-y-2 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>
            <a href="/compare/grantstation" className="text-primary-700 hover:text-primary-800 underline">GrantStation alternative</a>
            {' '}— manual database vs AI-powered matching
          </li>
          <li>
            <a href="/learn-more#comparisons" className="text-primary-700 hover:text-primary-800 underline">All tool comparisons</a>
            {' '}— Instrumentl, GrantWatch, Candid FDO, and more
          </li>
        </ul>
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

export default HowToFindGrantsForNonprofitsPage;

const CANONICAL_URL = 'https://engrant.eu/docs/how-to-find-grants-for-nonprofits/';

export const Head = () => {
  const pageTitle = 'How to Find Grants for Your Nonprofit — Without Weeks of Googling | Engrant';
  const pageDescription =
    'Describe your organization and what you need funding for. Engrant finds matching grants in minutes — ranked by fit, with deadlines, competition levels, and funder details.';

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
    headline: 'How to Find Grants for Your Nonprofit — Without Weeks of Googling',
    description: pageDescription,
    datePublished: '2026-06-01',
    dateModified: '2026-06-06',
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
        name: 'How to find grants for nonprofits',
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={CANONICAL_URL} />
      <meta property="article:published_time" content="2026-06-01T00:00:00.000Z" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <link rel="canonical" href={CANONICAL_URL} />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </>
  );
};
