import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const DOCS_ITEMS = [
  {
    title: 'How to Find Grants for Your Nonprofit — Without Weeks of Googling',
    description:
      'Learn how to go from a simple funding need to a ranked list of matching grants in minutes, with fit ratings, deadlines, and funder details.',
    href: '/docs/how-to-find-grants-for-nonprofits',
  },
  {
    title: 'How to Know If Your Nonprofit Is Eligible for a Grant Before You Apply',
    description:
      'See how Engrant checks your profile against each grant’s requirements and surfaces fit ratings, match points, and red flags before you write an application.',
    href: '/docs/how-to-check-grant-eligibility-before-applying',
  },
  {
    title: 'How to Turn a Vague Funding Idea Into a Grant-Ready Project Description',
    description:
      'Learn how typing a few words — like "office rent" or "youth mentorship" — generates a complete project description with budget range, timeline, and funder targeting guidance.',
    href: '/docs/how-to-write-a-project-description-for-a-grant',
  },
  {
    title: 'How to Research a Funder Before You Apply for a Grant',
    description:
      "See each funder's giving history, past grantees, board members, and contact details right alongside the grant — so you can assess fit without hours of separate research.",
    href: '/docs/how-to-research-a-grant-funder',
  },
  {
    title: "How to Decide Which Grants to Apply For When You Can't Apply to All of Them",
    description:
      'Compare opportunities side by side using fit, competition, effort, and deadline ratings, and focus your limited time on the grants most likely to pay off.',
    href: '/docs/how-to-prioritize-grant-applications',
  },
  {
    title: 'How to Keep Track of Multiple Grant Deadlines Without Losing Your Mind',
    description:
      'Organize saved grants on a visual timeline with color-coded milestones for submission deadlines, decision dates, and project start dates — plus a table sorted by urgency.',
    href: '/docs/how-to-track-grant-deadlines',
  },
  {
    title: 'How to Know What to Work on Next Across Multiple Grant Applications',
    description:
      "Each saved grant shows a preparation checklist, a progress bar, and a 'next step' prompt — so you always know exactly what needs doing across all your applications.",
    href: '/docs/how-to-manage-multiple-grant-applications',
  },
  {
    title: "How to Write a Grant Proposal When You Don't Know Where to Start",
    description:
      'Engrant analyzes the funder, generates project concepts tailored to their priorities, and produces a full proposal draft you can edit — so you never start from a blank page.',
    href: '/docs/how-to-write-a-grant-proposal',
  },
  {
    title: 'How to Evaluate a Grant You Found on Your Own',
    description:
      'Paste any grant URL into Engrant and get a full analysis — fit rating, competition level, effort estimate, funder profile, and red flags — in minutes instead of hours.',
    href: '/docs/how-to-evaluate-a-grant-opportunity',
  },
  {
    title: 'How to Find Grants That Match a Very Specific Need',
    description:
      'Even niche or operational needs like office rent or staff training can be matched to real grants. Engrant expands your brief description into the right grant language and searches accordingly.',
    href: '/docs/grants-for-specific-nonprofit-needs',
  },
  {
    title: 'How to Prepare a Grant Pipeline Report for Your Board',
    description:
      "Export your pipeline as a Word report, spreadsheet, or text file in one click — with grant names, amounts, deadlines, status, and progress for every opportunity you're tracking.",
    href: '/docs/grant-pipeline-report-for-board',
  },
  {
    title: 'How to Manage Grants Across Multiple Programs or Organizations',
    description:
      'Switch between organizations with a dropdown — each with its own profile, funding needs, searches, and pipeline. Built for consultants and multi-program nonprofits.',
    href: '/docs/grant-management-multiple-organizations',
  },
];

const DocsIndexPage = () => {
  return (
    <DocsPageLayout
      title="Engrant Docs"
      description="Practical guides for nonprofit teams to find grants faster, prioritize opportunities, and move from search to proposal."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-4">Documentation</h2>
        <p className="text-neutral-700 leading-relaxed mb-8">
          Browse product guides, workflows, and best practices for nonprofit grant search and proposal development.
        </p>

        <div className="space-y-4">
          {DOCS_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block border border-neutral-200 rounded-xl p-5 bg-neutral-50 hover:bg-white hover:border-primary-300 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">{item.title}</h3>
              <p className="text-neutral-700 leading-relaxed">{item.description}</p>
              <p className="text-primary-700 font-medium mt-3">Read article</p>
            </a>
          ))}
        </div>
      </section>
    </DocsPageLayout>
  );
};

export default DocsIndexPage;

export const Head = () => (
  <>
    <title>Docs | Engrant</title>
    <meta
      name="description"
      content="Engrant documentation and guides for nonprofit grant search, shortlist prioritization, and proposal drafting workflows."
    />
    <OgTwitterMeta
      title="Docs | Engrant"
      description="Engrant documentation and guides for nonprofit grant search, shortlist prioritization, and proposal drafting workflows."
      url="https://engrant.eu/docs/"
    />
    <link rel="canonical" href="https://engrant.eu/docs/" />
  </>
);
