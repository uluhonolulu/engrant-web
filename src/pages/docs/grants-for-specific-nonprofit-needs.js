import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/grants-for-specific-nonprofit-needs/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'Can I really just type two words?',
    answer:
      'Yes. Even "office rent" or "new van" gives Engrant enough to generate a structured funding need based on your organization\'s profile. You can always add more detail in the refinement step.',
  },
  {
    question: 'What if no grants match my specific need?',
    answer:
      'Very niche needs may return fewer results. Try broadening your description slightly, or check the Worth Watching category. Some needs may be better funded as part of a larger project — Engrant can help you identify those umbrella categories.',
  },
  {
    question: 'Does Engrant find grants for overhead costs?',
    answer:
      'Yes. Many funders support core costs, operating support, and unrestricted funding. Engrant identifies these funders when your need is operational rather than program-specific.',
  },
  {
    question: 'Can I search for salary funding?',
    answer:
      'Yes. Staff costs and salary support are common funding categories. Describe what roles or positions need funding, and Engrant will match you with funders who support staffing as part of their grants.',
  },
  {
    question: 'What about very small needs (under $5,000)?',
    answer:
      'Small grants exist, and Engrant can find them. The budget range in your expanded funding need helps filter for grants that match your scale — so you\'re not wading through $500,000 opportunities when you need $3,000.',
  },
  {
    question: 'Can I combine a specific need with a broader project?',
    answer:
      'Yes. You might describe "office rent" as a standalone need, or you might describe "operational support for our youth mentorship program" to combine the specific cost with your program context. Both approaches work — the second may match a wider set of funders.',
  },
];

const GrantsForSpecificNonprofitNeedsPage = () => {
  return (
    <DocsPageLayout
      title="How to Find Grants That Match a Very Specific Need (Like Rent, Equipment, or a Pilot Program)"
      description="Even niche or operational needs like office rent or staff training can be matched to real grants. Engrant expands your brief description into the right grant language and searches accordingly."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Type your specific need into Engrant — even something as narrow as &quot;office rent&quot; or &quot;laptops for staff&quot; — and it expands your input into structured grant language, then finds funders who actually support that type of work. You don&apos;t need to know the right keywords or categories. You just describe what you need money for.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>Why specific and operational needs are harder to fund (and what to do about it)</li>
          <li>How Engrant translates niche needs into searchable grant language</li>
          <li>Examples of specific needs that can be matched to real grants</li>
          <li>How to improve your results when searching for niche funding</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Why &quot;we need money for rent&quot; doesn&apos;t return useful grant results</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Traditional grant databases are built around broad categories: health, education, environment, community development. They work well when your need fits neatly into one of those boxes — &quot;we want to run a literacy program&quot; maps cleanly to education grants.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">But many real funding needs are more specific or more operational:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li>Office rent</li>
          <li>A vehicle for outreach work</li>
          <li>Staff salaries during a gap between grants</li>
          <li>IT equipment</li>
          <li>Training for your team</li>
          <li>A pilot program you haven&apos;t fully designed yet</li>
          <li>Matching funds for another grant</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mb-4">
          These are legitimate needs, but they don&apos;t match the language most grant databases use. Search for &quot;rent&quot; and you&apos;ll get results about rental assistance programs for individuals, not operating support for nonprofits. Search for &quot;laptops&quot; and you get technology education grants, not equipment funding.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          The problem isn&apos;t that funding doesn&apos;t exist for these needs. It&apos;s that the funding is categorized differently — under &quot;operating support,&quot; &quot;capacity building,&quot; &quot;organizational development,&quot; or &quot;general purpose grants&quot; — and you&apos;d need to know those terms to find it.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How Engrant translates your specific need into grant language</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          When you type a specific need into Engrant, it doesn&apos;t search for those exact words. Instead, it:
        </p>
        <ol className="space-y-5 text-neutral-700 leading-relaxed list-decimal list-inside">
          <li><strong>Understands what you actually need.</strong> &quot;Office rent&quot; means you need operating support. &quot;Laptops for staff&quot; means you need equipment or capacity-building funding. &quot;A new van&quot; means you need capital or infrastructure support.</li>
          <li><strong>Expands it using your organization&apos;s profile.</strong> Your sector, location, size, and track record determine which funders and funding categories are relevant. A health nonprofit seeking equipment funding will match different funders than an education nonprofit seeking the same.</li>
          <li><strong>Generates a structured funding need.</strong> Your brief input becomes a complete description with budget range, timeline, success indicators, and targeting guidance — all in language funders use.</li>
          <li><strong>Searches using the structured description.</strong> The search matches against funders who support that type of work for organizations like yours, not just funders whose guidelines happen to contain the word &quot;rent.&quot;</li>
        </ol>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Examples of specific needs and how they get matched</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What you type</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">How Engrant categorizes it</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Types of grants you might find</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">&quot;Office rent&quot;</td>
                <td className="px-4 py-3">Operating support, core costs, organizational sustainability</td>
                <td className="px-4 py-3">General operating grants, unrestricted funding, capacity-building grants</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">&quot;Staff training&quot;</td>
                <td className="px-4 py-3">Capacity building, organizational development, professional development</td>
                <td className="px-4 py-3">Workforce development grants, capacity grants, institutional strengthening</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">&quot;New vehicle&quot;</td>
                <td className="px-4 py-3">Capital expenditure, infrastructure, program delivery support</td>
                <td className="px-4 py-3">Equipment grants, capital grants, infrastructure funding</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">&quot;Pilot program for youth&quot;</td>
                <td className="px-4 py-3">Program development, youth services, innovation funding</td>
                <td className="px-4 py-3">Seed grants, innovation funds, youth development programs</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">&quot;Matching funds&quot;</td>
                <td className="px-4 py-3">Co-financing, leverage funding, partnership support</td>
                <td className="px-4 py-3">Challenge grants, matching fund programs, co-investment opportunities</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3">&quot;Monitoring and evaluation&quot;</td>
                <td className="px-4 py-3">Organizational capacity, impact measurement, learning</td>
                <td className="px-4 py-3">M&amp;E grants, learning and evaluation funding, research support</td>
              </tr>
              <tr>
                <td className="px-4 py-3">&quot;Conference attendance&quot;</td>
                <td className="px-4 py-3">Professional development, networking, knowledge exchange</td>
                <td className="px-4 py-3">Travel grants, professional development funding, fellowship programs</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          In each case, the search goes far beyond the literal words you typed.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to get better results for niche needs</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          If your first search for a very specific need returns limited results, here are ways to improve it:
        </p>
        <ul className="space-y-4 text-neutral-700 leading-relaxed list-disc list-inside">
          <li><strong>Add more context when refining.</strong> When the conversion dialog appears, click &quot;add more context&quot; and specify details: &quot;This is for our Nairobi office, budget under $15K, needed for 12 months.&quot; More context helps Engrant target the right funders.</li>
          <li><strong>Think about the broader category.</strong> If &quot;microscopes for our lab&quot; returns few results, try &quot;laboratory equipment for our health research program.&quot; The broader framing opens up more funder categories while still being specific to your situation.</li>
          <li><strong>Create multiple funding needs.</strong> If you need funding for several specific things, create separate funding needs for each. &quot;Office rent&quot; and &quot;staff training&quot; may match completely different funders. Keeping them separate produces better-targeted results for each.</li>
          <li><strong>Check the Worth Watching category.</strong> For niche needs, some of your best matches may be in the &quot;Worth Watching&quot; filter rather than &quot;Ready to Apply.&quot; These are grants where the alignment is strong but something (timing, eligibility nuance, or information availability) needs a closer look.</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Operational costs are fundable — here&apos;s why funders support them</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          A common misconception among nonprofits is that funders only support programs, not operations. While it&apos;s true that many funders prefer project-based funding, a significant number specifically support:
        </p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li><strong>Core costs</strong> — because they understand that programs can&apos;t run without infrastructure</li>
          <li><strong>Capacity building</strong> — because stronger organizations deliver better programs</li>
          <li><strong>General operating support</strong> — because unrestricted funding gives organizations flexibility to respond to needs</li>
          <li><strong>Bridge funding</strong> — because gaps between grants threaten organizational stability</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          Engrant knows which funders support these categories and matches them to operational needs. You don&apos;t need to dress up &quot;rent&quot; as a &quot;program&quot; — the system finds funders who genuinely support what you need.
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

export default GrantsForSpecificNonprofitNeedsPage;

export const Head = () => {
  const pageTitle = 'How to Find Grants That Match a Very Specific Need (Like Rent, Equipment, or a Pilot Program) | Engrant';
  const pageDescription =
    'Even niche or operational needs like office rent or staff training can be matched to real grants. Engrant expands your brief description into the right grant language and searches accordingly.';

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
    headline: 'How to Find Grants That Match a Very Specific Need (Like Rent, Equipment, or a Pilot Program)',
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
        name: 'Grants for specific nonprofit needs',
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
        content="grants for operating costs, grants for equipment, grants for rent, operating support grants, capacity building grants, niche nonprofit funding, Engrant"
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
