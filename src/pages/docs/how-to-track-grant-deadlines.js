import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/how-to-track-grant-deadlines/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'Can I add a grant to my pipeline manually?',
    answer:
      'Yes. The "Add Grant from Webpage" button lets you paste a grant URL. Engrant evaluates it against your organization\'s profile and adds it to your pipeline with the same deadline tracking and preparation steps.',
  },
  {
    question: 'What if a deadline changes?',
    answer:
      "Grant deadlines in your pipeline reflect what was found during evaluation. If a funder extends or changes a deadline, the information in your pipeline is what was captured at evaluation time — check the source link for the latest.",
  },
  {
    question: 'Can my whole team see the pipeline?',
    answer:
      'The pipeline is tied to your organization, so anyone with access to that organization in Engrant sees the same saved grants, progress, and deadlines.',
  },
  {
    question: 'How far ahead does the timeline show?',
    answer:
      'The timeline displays all your saved grants across their full date range — from the earliest upcoming milestone to the latest project start date. You can scroll horizontally to see future months.',
  },
  {
    question: 'Can I color-code my grants?',
    answer:
      'Yes. Each grant row has a color dot you can click to assign a color. Use this however works for your workflow — by program area, by priority level, by who\'s responsible, or any other system.',
  },
  {
    question: 'Does the pipeline work on mobile?',
    answer:
      'The table view works on mobile with a card-based layout. The timeline is best viewed on a larger screen.',
  },
];

const HowToTrackGrantDeadlinesPage = () => {
  return (
    <DocsPageLayout
      title="How to Keep Track of Multiple Grant Deadlines Without Losing Your Mind"
      description="Engrant organizes your saved grants on a visual timeline with color-coded milestones for submission deadlines, decision dates, and project start dates — plus a table sorted by urgency."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Engrant&apos;s grant pipeline shows all your saved grants in a table sorted by urgency and on a visual timeline with color-coded milestones — submission deadlines, decision dates, call openings, and project start dates. You see exactly what&apos;s due when, how many days remain, and what preparation steps are still outstanding.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>How the pipeline table organizes your grants by deadline urgency</li>
          <li>How the visual timeline shows your full schedule at a glance</li>
          <li>What the different milestone markers mean</li>
          <li>How to use the countdown and progress tracking to stay on top of things</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Why spreadsheets stop working after three or four grants</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Most nonprofits track grant deadlines in a spreadsheet, a shared Google Sheet, or a calendar. This works fine when you&apos;re managing one or two applications. But once you&apos;re juggling five or more — each with different submission deadlines, decision timelines, and preparation requirements — the spreadsheet becomes a source of anxiety rather than clarity.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          The problems compound: you forget to update a row, a deadline shifts and you don&apos;t catch it, the preparation steps for one grant get mixed up with another, and you can&apos;t easily see which grant needs attention <em>right now</em> versus next month.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How the pipeline table keeps your grants sorted by urgency</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          When you save grants from your search results, they appear in your pipeline — a dedicated page accessible from the sidebar as &quot;Saved Grants.&quot; The table automatically sorts your grants by urgency:
        </p>
        <ol className="space-y-3 text-neutral-700 leading-relaxed list-decimal list-inside mb-5">
          <li><strong>Open grants with a fixed deadline</strong> — sorted by soonest deadline first</li>
          <li><strong>Open grants with a rolling deadline</strong> — always available but funds may run out</li>
          <li><strong>Everything else</strong> — closed, upcoming cycles, etc.</li>
        </ol>
        <p className="text-neutral-700 leading-relaxed mb-5">Each row shows:</p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Column</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What it shows</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Grant name and funder</strong></td>
                <td className="px-4 py-3">With a status badge (Open, Closed, Upcoming Cycle, Invite Only)</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Funding amount</strong></td>
                <td className="px-4 py-3">So you can weigh the opportunity</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Progress</strong></td>
                <td className="px-4 py-3">A bar showing completed vs. total preparation steps</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Deadline</strong></td>
                <td className="px-4 py-3">The date, plus a color-coded countdown (green = plenty of time, yellow = getting close, red = urgent)</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Next step</strong></td>
                <td className="px-4 py-3">What you need to do next, or &quot;All steps complete&quot;</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Notes</strong></td>
                <td className="px-4 py-3">Anything you wrote when saving the grant</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          This means you open the pipeline and immediately know: what&apos;s most urgent, how far along each application is, and what to do next.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How the visual timeline shows your full schedule</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          Above the table is a collapsible timeline that displays all your grants on a month-by-month calendar. Each grant appears as a horizontal bar showing the work window — the period between now and the submission deadline.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">Four types of color-coded markers appear on the timeline:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li><strong>Diamond</strong> — submission deadline</li>
          <li><strong>Circle</strong> — decision date (when you&apos;ll hear back)</li>
          <li><strong>Outlined diamond</strong> — call opening (when a future grant cycle starts accepting applications)</li>
          <li><strong>Square</strong> — project start date</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mb-4">
          A vertical <strong>&quot;Today&quot; line</strong> crosses the timeline so you can see where you are relative to all your deadlines.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Hovering over any marker shows the specific date and confidence level. Clicking a grant name in the timeline highlights and scrolls to its row in the table below.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How the preparation checklist keeps each application on track</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          Clicking the progress bar on any grant opens a detailed checklist of preparation steps specific to that grant. Each step has:
        </p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li>A <strong>checkbox</strong> you can toggle as you complete it</li>
          <li>A <strong>short name</strong> describing the task</li>
          <li>A <strong>full description</strong> explaining what&apos;s needed</li>
          <li>Sometimes a <strong>badge</strong> indicating the step&apos;s category</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mb-4">
          A progress bar at the top shows overall completion (&quot;4 of 7 steps completed&quot;). You click <strong>Save Changes</strong> when you&apos;re done updating.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          This replaces the common practice of maintaining a separate to-do list or project plan for each grant application. The steps live right next to the grant they belong to, and the progress is visible from the main pipeline table without clicking in.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to use the timeline to plan your month</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">The timeline view is most useful for seeing conflicts and planning work:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li><strong>Overlapping bars</strong> mean you have multiple grants competing for your time in the same period. If two deadlines fall in the same week, you&apos;ll need to start one earlier.</li>
          <li><strong>Gaps</strong> show periods where you have breathing room — good times to work on grants with rolling deadlines or prepare for upcoming cycles.</li>
          <li><strong>Past-due markers</strong> with warning icons show if a work window has started but you haven&apos;t begun — a signal to either start immediately or drop the grant.</li>
          <li><strong>Decision dates</strong> tell you when you&apos;ll hear back, so you can plan cash flow and project staffing accordingly.</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to export your pipeline for meetings and reporting</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">Three export options are available from the pipeline page:</p>
        <ol className="space-y-3 text-neutral-700 leading-relaxed list-decimal list-inside mb-5">
          <li><strong>Generate Report</strong> — downloads a formatted Word document (DOCX) with all your saved grants, their status, and progress</li>
          <li><strong>Export to Spreadsheet</strong> — downloads a CSV file you can open in Excel or Google Sheets</li>
          <li><strong>Export for AI</strong> — downloads a plain text file (TXT) you can paste into ChatGPT or another AI tool for further analysis</li>
        </ol>
        <p className="text-neutral-700 leading-relaxed">
          These are useful for board meetings, team check-ins, or when a funder asks what else you&apos;re applying for.
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

export default HowToTrackGrantDeadlinesPage;

export const Head = () => {
  const pageTitle = 'How to Keep Track of Multiple Grant Deadlines Without Losing Your Mind | Engrant';
  const pageDescription =
    'Engrant organizes your saved grants on a visual timeline with color-coded milestones for submission deadlines, decision dates, and project start dates — plus a table sorted by urgency.';

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
    headline: 'How to Keep Track of Multiple Grant Deadlines Without Losing Your Mind',
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
        name: 'How to track grant deadlines',
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
        content="track grant deadlines, grant deadline tracker, grant pipeline, grant timeline, manage grant deadlines, nonprofit grants, Engrant"
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
