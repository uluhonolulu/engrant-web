import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';

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
    <meta property="og:title" content="Docs | Engrant" />
    <meta
      property="og:description"
      content="Explore Engrant guides for finding matching grants faster and moving from search to proposal with confidence."
    />
    <link rel="canonical" href="https://engrant.eu/docs" />
  </>
);
