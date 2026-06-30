import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/how-to-manage-multiple-grant-applications/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'Are the preparation steps the same for every grant?',
    answer:
      'No. Each grant gets its own set of steps based on the specific application requirements. A simple grant might have 3–4 steps; a complex one might have 12 or more.',
  },
  {
    question: 'Can I add my own preparation steps?',
    answer:
      'The checklist is generated based on the grant\'s requirements. You can use the notes field on each grant to track additional tasks specific to your workflow.',
  },
  {
    question: 'What does "All steps complete" mean?',
    answer:
      'It means every checkbox in the preparation checklist is marked done. This is a good signal that you\'re ready to submit, though you should still review your application materials before sending.',
  },
  {
    question: 'Can I see all my next steps in one view?',
    answer:
      'Yes. The pipeline table shows the "next step" for every saved grant in a single column. You can scan the entire column to decide what to work on without opening individual checklists.',
  },
  {
    question: 'How do I handle a grant where I\'m waiting on someone else?',
    answer:
      'The preparation steps often include items that depend on others (like letters of support). Leave those unchecked, add a note about who you\'re waiting on, and focus on steps you can complete yourself. When the outstanding item comes in, check it off.',
  },
  {
    question: "What if I realize a grant isn't worth pursuing anymore?",
    answer:
      'You can remove it from your pipeline at any time. Keeping your pipeline clean — only grants you\'re actively working on — makes the "what to do next" decision easier.',
  },
];

const HowToManageMultipleGrantApplicationsPage = () => {
  return (
    <DocsPageLayout
      title="How to Know What to Work on Next Across Multiple Grant Applications"
      description="Each saved grant in Engrant shows a preparation checklist, a progress bar, and a 'next step' prompt — so you always know exactly what needs doing across all your applications."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Every saved grant in Engrant has a preparation checklist with specific steps, a progress bar showing how far along you are, and a &quot;next step&quot; prompt visible from the pipeline table. Open the pipeline and you immediately see which applications need attention, which are on track, and what the next action is for each one.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>Why managing multiple applications is harder than it sounds</li>
          <li>How preparation checklists break each grant into concrete steps</li>
          <li>How to use the pipeline table to spot what needs attention right now</li>
          <li>How to balance work across grants with different deadlines</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">The problem with managing grant applications in your head</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          When you&apos;re working on one grant, you know where you are. When you&apos;re working on five, things start falling through the cracks.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Each application has its own set of requirements — letters of support, budgets, logic frameworks, financial statements, narrative sections. They&apos;re at different stages of completion. They have different deadlines. And the preparation work for one often gets interrupted by an urgent task from another.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Without a system, you end up asking yourself the same questions every morning: <em>Where did I leave off on the UNESCO application? Did I already send the letter of support request for the Ford Foundation grant? Which one is due first?</em>
        </p>
        <p className="text-neutral-700 leading-relaxed">
          These questions eat time and mental energy that should go into the actual writing.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How preparation checklists work</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          When Engrant evaluates a grant, it identifies the specific preparation steps needed for that application. These appear as a checklist attached to the grant in your pipeline.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">Each step includes:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li><strong>A checkbox</strong> — toggle it when the step is done</li>
          <li><strong>A short name</strong> — what the task is (e.g., &quot;Budget narrative,&quot; &quot;Letter of support,&quot; &quot;Organizational chart&quot;)</li>
          <li><strong>A full description</strong> — details about what the funder expects for this step</li>
          <li><strong>A badge</strong> (sometimes) — categorizing the step</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          The steps are specific to each grant. A simple letter of inquiry might have 3 steps. A complex EU-funded program might have 15.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How the pipeline table shows your full workload</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The pipeline table gives you a dashboard view across all your active applications:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What you see</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">How it helps</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Progress bar</strong> for each grant</td>
                <td className="px-4 py-3">See at a glance how complete each application is (e.g., &quot;3 of 8 steps done&quot;)</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Next step</strong> text</td>
                <td className="px-4 py-3">Know what to do next without opening the checklist</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Deadline countdown</strong></td>
                <td className="px-4 py-3">Color-coded: green (plenty of time), yellow (getting close), red (urgent)</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>&quot;All steps complete&quot;</strong></td>
                <td className="px-4 py-3">Confirms you&apos;re ready to submit</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          This means your daily workflow becomes: open the pipeline, scan the table, find the grant with the most urgent combination of deadline and incomplete steps, and start working on its next step.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">A practical approach to balancing work across grants</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          When you have several active applications, the pipeline helps you make two decisions every day:
        </p>
        <div className="space-y-5">
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">1. What&apos;s most urgent?</h3>
            <p className="text-neutral-700 leading-relaxed">Look at the deadline countdown. Grants in red need attention now. Grants in green can wait. If two grants are both in yellow, check which one has more steps remaining — that&apos;s the one where you&apos;re further behind.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">2. What&apos;s the smallest useful thing I can do?</h3>
            <p className="text-neutral-700 leading-relaxed">Look at the next step for each grant. Some steps are quick (uploading a document you already have), others are substantial (writing a project narrative). On a day when you only have an hour, knock out a quick step for one grant rather than starting a big task you can&apos;t finish.</p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How preparation steps connect to proposal writing</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          For grants in your pipeline, the <strong>Write Proposal</strong> button appears alongside the preparation checklist. This isn&apos;t a separate workflow — it&apos;s part of the same progress.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Once your preparation steps are complete (or mostly complete), you can click Write Proposal to generate a first draft. The system uses what it knows about the funder and your organization to produce a starting point you can edit and refine.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          This means the preparation checklist feeds directly into the proposal. Research the funder, gather your documents, complete the preparation steps, and generate the draft — it&apos;s a single flow, not separate processes.
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

export default HowToManageMultipleGrantApplicationsPage;

export const Head = () => {
  const pageTitle = 'How to Know What to Work on Next Across Multiple Grant Applications | Engrant';
  const pageDescription =
    "Each saved grant in Engrant shows a preparation checklist, a progress bar, and a 'next step' prompt — so you always know exactly what needs doing across all your applications.";

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
    headline: 'How to Know What to Work on Next Across Multiple Grant Applications',
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
        name: 'How to manage multiple grant applications',
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
        content="manage multiple grant applications, grant application tracking, grant preparation checklist, grant pipeline, what to work on next, nonprofit grants, Engrant"
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
