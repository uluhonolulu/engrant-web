import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/how-to-write-a-grant-proposal/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'How long does proposal generation take?',
    answer:
      "Usually 5–10 minutes. You'll see a progress indicator while it's working.",
  },
  {
    question: 'Can I generate proposals for any grant in my pipeline?',
    answer:
      'Yes. Any saved grant has a Write Proposal button. The quality of the proposal depends on how much information is available about the funder and the grant requirements.',
  },
  {
    question: "What if I don't like any of the concept options?",
    answer:
      'The concepts are suggestions based on funder analysis. If none feel right, pick the closest one — you can heavily edit the resulting proposal, or use it as inspiration for a different direction.',
  },
  {
    question: 'Can I copy the proposal into Word or Google Docs?',
    answer:
      'Yes. The Copy button copies the proposal as formatted text that you can paste into any document editor with formatting intact.',
  },
  {
    question: 'Does the proposal include a budget table?',
    answer:
      "The draft includes a budget narrative — how funds would be used and why. For a detailed line-item budget table, you'd create that in a spreadsheet based on the narrative's framework.",
  },
  {
    question: 'Will the funder know this was AI-generated?',
    answer:
      "The draft is a starting point. After you've added your specific details, adjusted the tone, and refined the content, the final submission will be yours. The important thing is that the information is accurate and the proposal genuinely represents your organization and project.",
  },
  {
    question: 'Can I generate a new proposal for the same grant?',
    answer:
      'Yes. You can re-enter the wizard, choose a different concept, and generate a fresh draft at any time.',
  },
];

const HowToWriteGrantProposalPage = () => {
  return (
    <DocsPageLayout
      title="How to Write a Grant Proposal When You Don't Know Where to Start"
      description="Engrant analyzes the funder, generates project concepts tailored to their priorities, and produces a full proposal draft you can edit — so you never start from a blank page."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> For any grant in your pipeline, click Write Proposal. Engrant analyzes the funder&apos;s priorities, generates several project concept options tailored to what that funder looks for, and then produces a full proposal draft based on the concept you choose. You get a formatted, structured starting point — not a blank page.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>Why blank-page paralysis is the most common grant writing problem</li>
          <li>How Engrant generates project concepts matched to the funder</li>
          <li>What the generated proposal includes</li>
          <li>How to use the draft as a starting point, not a finished product</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">The blank page problem</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          You&apos;ve found a great grant. You&apos;ve read the guidelines. You understand what the funder wants. And now you&apos;re staring at an empty document, trying to figure out how to begin.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          This is where most grant applications stall. Not because the organization doesn&apos;t do great work, but because translating that work into a compelling proposal — in the funder&apos;s language, addressing the funder&apos;s priorities, in the funder&apos;s preferred format — is a specialized skill that many small nonprofits don&apos;t have in-house.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Hiring a grant writer helps, but costs money many organizations don&apos;t have. Templates from the internet are generic and don&apos;t account for the specific funder you&apos;re targeting. And adapting a previous proposal is risky if the funder&apos;s priorities are different.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How Engrant generates project concepts</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          When you click <strong>Write Proposal</strong> on a saved grant, a two-step wizard opens.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          <strong>Step 1: Choose a concept.</strong> Engrant first analyzes the funder — their priorities, past giving, and what they&apos;ve signaled they&apos;re looking for. Then it generates several project concept options tailored to that specific funder.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">Each concept shows:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li><strong>A title</strong> — what the project would be called</li>
          <li><strong>A description</strong> — what the project would do, in a few sentences</li>
          <li><strong>Whether it&apos;s recommended</strong> — with an explanation of why this concept aligns particularly well with the funder&apos;s priorities</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mb-4">
          You&apos;re not locked into any of these. They&apos;re starting points — directions you could take the proposal. Pick the one that&apos;s closest to what you want to do, or the one that surprises you with an angle you hadn&apos;t considered.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          <strong>Step 2: Generate the proposal.</strong> Based on your selected concept, your organization&apos;s profile, and the funder&apos;s requirements, Engrant generates a full proposal draft. This takes a few minutes.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What the generated proposal includes</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The draft you receive isn&apos;t a vague outline. It&apos;s a structured document with:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Section</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What you get</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Project title</strong></td>
                <td className="px-4 py-3">A clear, specific title aligned with the funder&apos;s language</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Project narrative</strong></td>
                <td className="px-4 py-3">Goals, activities, target population, methodology, and expected impact</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Budget narrative</strong></td>
                <td className="px-4 py-3">How funds would be used, tied to the project activities</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Alignment section</strong></td>
                <td className="px-4 py-3">How your work connects to the funder&apos;s stated priorities</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Outcomes and indicators</strong></td>
                <td className="px-4 py-3">Measurable results the funder would expect</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Organizational background</strong></td>
                <td className="px-4 py-3">Your qualifications to deliver this project, drawn from your profile</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5 mb-4">You also see:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li><strong>Word count</strong> — so you know how it compares to the funder&apos;s length requirements</li>
          <li><strong>Alignment score</strong> — how closely the proposal matches the funder&apos;s priorities</li>
          <li><strong>A Copy button</strong> — to copy the full text (as formatted HTML or markdown) into your own document</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Why this is a starting point, not a finished application</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The generated proposal is meant to solve the blank-page problem, not replace your expertise. It gives you:
        </p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li><strong>Structure</strong> — the sections are organized in a logical flow that funders expect</li>
          <li><strong>Language</strong> — the writing uses grant terminology and frames your work in terms funders understand</li>
          <li><strong>Specificity</strong> — the content references your actual organization, your actual work, and the actual funder&apos;s priorities</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mb-4">But it still needs your input. You&apos;ll want to:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li><strong>Add specifics</strong> that only you know — names of partner organizations, exact budget figures, real outcome data from past projects</li>
          <li><strong>Adjust the tone</strong> to match your organization&apos;s voice</li>
          <li><strong>Verify accuracy</strong> — AI-generated content may include assumptions or generalizations that need correction</li>
          <li><strong>Customize</strong> sections that require funder-specific formatting or information</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          Think of it as getting a strong first draft from a colleague who knows your organization and the funder, but who needs you to review, refine, and sign off.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How the proposal connects to everything else in Engrant</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The proposal wizard doesn&apos;t exist in isolation. It builds on work you&apos;ve already done:
        </p>
        <ol className="space-y-3 text-neutral-700 leading-relaxed list-decimal list-inside mb-5">
          <li><strong>Your organization profile</strong> (from the setup wizard) provides the background, track record, and eligibility markers</li>
          <li><strong>Your funding need description</strong> gives the project context and scope</li>
          <li><strong>The grant&apos;s funder analysis</strong> shapes the concept options</li>
          <li><strong>The preparation checklist</strong> ensures you&apos;ve gathered supporting materials before writing</li>
        </ol>
        <p className="text-neutral-700 leading-relaxed">
          This means the proposal isn&apos;t generated from thin air — it&apos;s based on real information about your organization and the specific grant you&apos;re targeting.
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

export default HowToWriteGrantProposalPage;

export const Head = () => {
  const pageTitle = "How to Write a Grant Proposal When You Don't Know Where to Start | Engrant";
  const pageDescription =
    'Engrant analyzes the funder, generates project concepts tailored to their priorities, and produces a full proposal draft you can edit — so you never start from a blank page.';

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
    headline: "How to Write a Grant Proposal When You Don't Know Where to Start",
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
        name: 'How to write a grant proposal',
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
        content="how to write a grant proposal, grant proposal draft, grant writing, proposal generator, nonprofit grant proposal, Engrant"
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
