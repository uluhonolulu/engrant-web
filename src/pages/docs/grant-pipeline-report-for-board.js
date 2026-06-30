import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/grant-pipeline-report-for-board/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'How often should I export a pipeline report?',
    answer:
      'As often as you need one. Many organizations export before each board meeting (monthly or quarterly). Since the export is one click, there\'s no reason not to generate a fresh report whenever it\'s useful.',
  },
  {
    question: 'Can I customize what\'s included in the export?',
    answer:
      'The exports include all saved grants in your pipeline. If you want to show only a subset, remove the ones you don\'t want to include (you can always re-save them later) or use the CSV export and filter in Excel.',
  },
  {
    question: 'Do the exports include the timeline visualization?',
    answer:
      'The Word and CSV exports include text-based information (dates, deadlines, status). The visual timeline is a screen feature — for a visual representation, you could take a screenshot of the timeline to include in a presentation.',
  },
  {
    question: 'Can I share the pipeline with my team without exporting?',
    answer:
      'The pipeline is tied to your organization in Engrant, so anyone with access to that organization sees the same pipeline. For people who don\'t have Engrant access, the exports are the way to share.',
  },
  {
    question: 'What if I need a different report format?',
    answer:
      'The TXT export can be pasted into any AI tool with a prompt like "reformat this as a table for a board presentation" or "turn this into a one-page executive summary." This gives you flexibility to produce any format without manual reformatting.',
  },
];

const GrantPipelineReportForBoardPage = () => {
  return (
    <DocsPageLayout
      title="How to Prepare a Grant Pipeline Report for Your Board"
      description="Export your Engrant pipeline as a Word report, spreadsheet, or text file in one click — with grant names, amounts, deadlines, status, and progress for every opportunity you're tracking."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Click one of three export buttons on your Engrant pipeline page — Word report, spreadsheet, or text file — and get a formatted document with every grant you&apos;re tracking, including amounts, deadlines, status, preparation progress, and next steps. It takes one click and about 10 seconds.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>What boards and teams need to see in a grant pipeline report</li>
          <li>How to export your pipeline in three formats</li>
          <li>When to use each format</li>
          <li>How to keep your pipeline report-ready at all times</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What your board actually needs to see</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          When your board or executive director asks &quot;where do we stand on grants?&quot;, they want to know:
        </p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li>What grants you&apos;re pursuing and how much each is worth</li>
          <li>When the deadlines are and whether you&apos;re on track</li>
          <li>What stage each application is in</li>
          <li>What&apos;s coming up next</li>
          <li>The overall picture — how many opportunities, total potential funding, and any risks</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          Building this report from scratch — pulling together information from emails, spreadsheets, grant portals, and your own notes — typically takes half a day or more. And by the time the report is done, some of the information is already outdated.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Three export options, one click each</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">Your Engrant pipeline page has three export buttons:</p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Format</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What you get</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Best for</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Generate Report</strong> (DOCX)</td>
                <td className="px-4 py-3">A formatted Word document with grant details, status, and progress</td>
                <td className="px-4 py-3">Board meetings, formal reporting, printing</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Export to Spreadsheet</strong> (CSV)</td>
                <td className="px-4 py-3">A data file you can open in Excel or Google Sheets</td>
                <td className="px-4 py-3">Further analysis, sorting, filtering, custom formatting</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Export for AI</strong> (TXT)</td>
                <td className="px-4 py-3">A plain text summary of your pipeline</td>
                <td className="px-4 py-3">Pasting into ChatGPT or another AI tool for analysis or summary</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          Each export includes: grant name, funder, funding amount, deadline, status, preparation progress, next steps, and your notes.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">When to use each format</h2>
        <div className="space-y-5">
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Word report for board meetings</h3>
            <p className="text-neutral-700 leading-relaxed">The DOCX export gives you a formatted document you can share before a meeting or present during one. It&apos;s readable without any additional formatting — print it, email it, or include it in your board packet.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Spreadsheet for deeper analysis</h3>
            <p className="text-neutral-700 leading-relaxed">The CSV export is useful when you want to sort, filter, or add your own calculations. Import it into Excel to create a pivot table by funder type, calculate total potential funding, or add a column for probability estimates. It&apos;s also the right format if your organization has a standardized reporting template you need to fill.</p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <h3 className="text-xl font-semibold text-neutral-700 mb-2">Text file for AI-assisted analysis</h3>
            <p className="text-neutral-700 leading-relaxed">The TXT export gives you a clean text version you can paste into an AI tool. Ask it to &quot;summarize our grant pipeline for a 5-minute board update&quot; or &quot;identify which grants are at risk of missing their deadline&quot; or &quot;draft a paragraph for our annual report about our current funding pipeline.&quot;</p>
          </div>
        </div>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to keep your pipeline report-ready</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The quality of your export depends on the quality of your pipeline. A few habits that make exports more useful:
        </p>
        <ul className="space-y-4 text-neutral-700 leading-relaxed list-disc list-inside">
          <li><strong>Keep preparation steps up to date.</strong> When you complete a step (budget approved, letter of support received, narrative drafted), check it off in the preparation checklist. This keeps the progress bars accurate, so your exports reflect reality.</li>
          <li><strong>Use the notes field.</strong> When you save a grant, add a note about why you&apos;re pursuing it or any context that would be useful later. These notes appear in exports and give board members context beyond just the numbers.</li>
          <li><strong>Remove grants you&apos;ve decided to skip.</strong> If you saved a grant for consideration but decided not to apply, remove it from the pipeline. A clean pipeline with only active opportunities produces a clearer report.</li>
          <li><strong>Use color coding consistently.</strong> The color dots on each grant can represent whatever system works for you — by program, by priority, by who&apos;s responsible. Consistent use makes the pipeline more scannable, even if colors don&apos;t appear in the text exports.</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What a board-ready pipeline report looks like</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">A typical export for a small nonprofit tracking 6 grants might show:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li>2 grants with deadlines in the next 30 days, both at 80%+ preparation completion</li>
          <li>1 grant with a rolling deadline, preparation just started</li>
          <li>2 grants for upcoming cycles, saved for planning purposes</li>
          <li>1 grant where a decision is pending</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Total potential funding: $185,000. Three grants in active preparation, two in the pipeline for the next quarter.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          This is the kind of snapshot a board can absorb in two minutes — and it comes directly from data you&apos;re already maintaining as part of your normal grant management workflow.
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

export default GrantPipelineReportForBoardPage;

export const Head = () => {
  const pageTitle = 'How to Prepare a Grant Pipeline Report for Your Board | Engrant';
  const pageDescription =
    "Export your Engrant pipeline as a Word report, spreadsheet, or text file in one click — with grant names, amounts, deadlines, status, and progress for every opportunity you're tracking.";

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
    headline: 'How to Prepare a Grant Pipeline Report for Your Board',
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
        name: 'Grant pipeline report for board',
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
        content="grant pipeline report, grant report for board, export grant pipeline, nonprofit board reporting, grant tracking report, Engrant"
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
