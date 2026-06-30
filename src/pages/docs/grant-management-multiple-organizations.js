import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/grant-management-multiple-organizations/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'Is there a limit to how many organizations I can create?',
    answer:
      'Paid plans support multiple organizations. The exact limit depends on your plan — check the pricing page for details.',
  },
  {
    question: 'Can I share an organization with a colleague?',
    answer:
      'Organizations are visible to anyone with access to that organization in Engrant. This means a consultant can set up an organization and their client can also view it, or team members within a nonprofit can all access the same pipeline.',
  },
  {
    question: 'Does each organization need a separate website?',
    answer:
      "Yes — the website URL is how Engrant researches the organization's profile. If a program doesn't have its own website, you can use the parent organization's website and then add context during the review step to specify the program's focus.",
  },
  {
    question: 'Can I copy a funding need from one organization to another?',
    answer:
      "Not directly. Each organization's funding needs are specific to its profile. Since the same funding need might match different grants for different organizations (because of different locations, sectors, or eligibility), it's better to create the need fresh for each one.",
  },
  {
    question: 'What happens if I delete an organization?',
    answer:
      'Deleting an organization removes its profile, all associated funding needs, search results, and saved grants. This can\'t be undone, so make sure to export any data you want to keep first.',
  },
  {
    question: 'Do searches count separately for each organization?',
    answer:
      'Yes, searches are per-organization. Running a search for Organization A doesn\'t affect your search availability for Organization B.',
  },
];

const GrantManagementMultipleOrganizationsPage = () => {
  return (
    <DocsPageLayout
      title="How to Manage Grants Across Multiple Programs or Organizations"
      description="Switch between organizations in Engrant with a dropdown — each with its own profile, funding needs, searches, and pipeline. Built for consultants and multi-program nonprofits."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Engrant lets you create separate organizations, each with its own profile, funding needs, search results, and grant pipeline. Switch between them from a dropdown in the sidebar. Everything stays separated — searches for one organization never mix with another.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>Who benefits from managing multiple organizations</li>
          <li>How organization switching works</li>
          <li>How each organization maintains its own profile and pipeline</li>
          <li>How to set up a new organization</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Who needs to manage grants for more than one organization</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          Several types of users routinely deal with multiple organizations or programs:
        </p>
        <ul className="space-y-4 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li><strong>Grant consultants and fundraising advisors.</strong> You work with several nonprofits, each with different missions, geographies, and funding needs. You need to run searches, save grants, and track pipelines for each client separately.</li>
          <li><strong>Multi-program nonprofits.</strong> Your organization runs distinct programs — a health clinic, a youth program, and a community center — each with different funding requirements. Searching for &quot;youth mentorship&quot; grants shouldn&apos;t surface results for medical equipment.</li>
          <li><strong>Umbrella organizations and networks.</strong> You coordinate funding for a network of smaller organizations, each with their own profile and eligibility.</li>
          <li><strong>Founders with multiple initiatives.</strong> You run more than one nonprofit or social enterprise and need to find funding for each separately.</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          In all these cases, the fundamental requirement is the same: keep each organization&apos;s grant work separate while managing it all from one account.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How organization switching works</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          A dropdown in the sidebar shows all your organizations. Click it and select a different one. That&apos;s it.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">When you switch organizations, everything updates:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li><strong>The dashboard</strong> shows that organization&apos;s name, website, and funding needs</li>
          <li><strong>Search results</strong> reflect that organization&apos;s profile and eligibility</li>
          <li><strong>The pipeline</strong> shows only grants saved for that organization</li>
          <li><strong>The timeline</strong> displays that organization&apos;s deadlines</li>
          <li><strong>Exports</strong> generate reports for that organization only</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          There&apos;s no cross-contamination. A grant saved under Organization A doesn&apos;t appear in Organization B&apos;s pipeline. A search run for Organization A uses Organization A&apos;s profile — its sector, location, size, and track record.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How each organization gets its own profile</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          When you create a new organization, the setup process is the same as your first one:
        </p>
        <ol className="space-y-3 text-neutral-700 leading-relaxed list-decimal list-inside mb-5">
          <li><strong>Enter the organization&apos;s website.</strong> Engrant researches it automatically — mission, sector, location, team size, legal status, funding history, eligibility markers.</li>
          <li><strong>Review the findings.</strong> A detailed dialog shows everything Engrant found. Add context or corrections if needed.</li>
          <li><strong>Confirm the profile.</strong> Once it looks right, the organization is ready to use.</li>
        </ol>
        <p className="text-neutral-700 leading-relaxed mb-5">Each organization has its own:</p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What&apos;s separate</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Why it matters</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Organization profile</strong></td>
                <td className="px-4 py-3">Different mission, sector, location, and eligibility</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Funding needs</strong></td>
                <td className="px-4 py-3">Each organization has different projects and priorities</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Search results</strong></td>
                <td className="px-4 py-3">Grants are matched against that specific organization</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Grant pipeline</strong></td>
                <td className="px-4 py-3">Saved grants, preparation steps, and deadlines are per-organization</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Exports and reports</strong></td>
                <td className="px-4 py-3">Reports cover only the selected organization</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          This means a search for a healthcare nonprofit in Nairobi returns completely different results than a search for an education nonprofit in Berlin — even when both are managed from the same account.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Setting up additional organizations</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">To add a new organization:</p>
        <ol className="space-y-3 text-neutral-700 leading-relaxed list-decimal list-inside mb-5">
          <li>Open the organization dropdown in the sidebar</li>
          <li>Select <strong>Create new organization</strong></li>
          <li>Enter the organization&apos;s website URL</li>
          <li>Review and confirm the research findings</li>
          <li>Add your first funding need (or skip to search broadly)</li>
        </ol>
        <p className="text-neutral-700 leading-relaxed mb-4">
          The new organization appears in the dropdown alongside your existing ones. You can switch between them at any time.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Creating additional organizations is available on paid plans.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How consultants use this in practice</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          If you&apos;re a grant consultant, a typical workflow might look like:
        </p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li><strong>Monday morning:</strong> Switch to Client A, check their pipeline, see a deadline in 10 days with 2 preparation steps remaining. Note that you need their budget figures.</li>
          <li><strong>Monday afternoon:</strong> Switch to Client B, run a new search for their latest funding need. Save 3 promising grants to their pipeline.</li>
          <li><strong>Tuesday:</strong> Switch to Client C, export their pipeline as a Word report for their board meeting this week.</li>
          <li><strong>Wednesday:</strong> Switch back to Client A, mark two preparation steps as complete, start the proposal draft.</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mt-5">
          Each client&apos;s work is completely separate, but you manage it all from one place without logging in and out of different accounts.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How multi-program nonprofits use this</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          If your organization runs multiple distinct programs, you might set up separate organizations for each:
        </p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li><strong>Main organization</strong> — for general operating support and unrestricted funding</li>
          <li><strong>Youth Program</strong> — for youth-specific grants with its own profile emphasizing youth services</li>
          <li><strong>Health Clinic</strong> — for health grants with a profile focused on healthcare delivery</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          Each &quot;organization&quot; in Engrant has its own profile, so grant searches are tailored to the specific program&apos;s sector and needs. A funder who supports youth development but not healthcare will appear in the Youth Program&apos;s results but not the Health Clinic&apos;s.
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

export default GrantManagementMultipleOrganizationsPage;

export const Head = () => {
  const pageTitle = 'How to Manage Grants Across Multiple Programs or Organizations | Engrant';
  const pageDescription =
    'Switch between organizations in Engrant with a dropdown — each with its own profile, funding needs, searches, and pipeline. Built for consultants and multi-program nonprofits.';

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
    headline: 'How to Manage Grants Across Multiple Programs or Organizations',
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
        name: 'Grant management for multiple organizations',
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
        content="manage grants multiple organizations, grant consultant tool, multi-program grant management, grant management for consultants, nonprofit grants, Engrant"
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
