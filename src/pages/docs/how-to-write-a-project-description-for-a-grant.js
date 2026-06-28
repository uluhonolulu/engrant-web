import React from 'react';
import DocsPageLayout from '../../components/docs/DocsPageLayout';
import { OgTwitterMeta } from '../../utils/seoMeta';

const PAGE_PATH = '/docs/how-to-write-a-project-description-for-a-grant/';
const CANONICAL_URL = `https://engrant.eu${PAGE_PATH}`;

const FAQ_ITEMS = [
  {
    question: 'Do I have to use the converted description, or can I write my own?',
    answer:
      "You can write a detailed description yourself if you prefer. The conversion is there to help when you're starting from a rough idea. Either way, you review and confirm before searching.",
  },
  {
    question: 'Can I change the funding need later?',
    answer:
      'Yes. You can edit any funding need from the Funding Needs page. When you edit, the conversion dialog reappears so you can review and refine the description, then run a new search with the updated version.',
  },
  {
    question: 'Does the conversion work for any type of funding need?',
    answer:
      "Yes — operational costs, program funding, equipment, capital projects, staffing, research, pilot programs. Engrant adapts the structure based on what you describe and what it knows about your organization.",
  },
  {
    question: 'How does Engrant know what budget range to suggest?',
    answer:
      "It bases the estimate on your organization's size, annual budget, location, and the type of work described. It's a starting range for search purposes, not a binding number.",
  },
  {
    question: 'Can I create multiple funding needs for different projects?',
    answer:
      "Yes. Each funding need gets its own description, its own search results, and its own place in your pipeline. This is useful if your organization has several programs or departments looking for different types of funding.",
  },
  {
    question: 'What if I only have one word?',
    answer:
      "That works. Even a single word like \"rent\" or \"training\" gives Engrant enough to generate a first draft based on your organization's profile. You can always refine it from there.",
  },
];

const HowToWriteProjectDescriptionPage = () => {
  return (
    <DocsPageLayout
      title="How to Turn a Vague Funding Idea Into a Grant-Ready Project Description"
      description="Type a few words like 'capacity building' or 'youth mentorship' and Engrant expands it into a structured project description with budget range, timeline, and success indicators — ready for grant searching."
    >
      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <p className="text-lg text-neutral-700 leading-relaxed">
          <strong>Short answer:</strong> Type as little as two words — like &quot;office rent&quot; or &quot;youth mentorship&quot; — into Engrant and it converts your idea into a structured funding need with a full project description, budget estimate, timeline, success indicators, and guidance on which types of funders to target. You review it, tweak anything that&apos;s off, and use it to search for matching grants.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What you&apos;ll learn</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside">
          <li>Why you don&apos;t need a polished project description to start searching for grants</li>
          <li>How Engrant expands a short idea into grant-ready language</li>
          <li>What the converted description includes</li>
          <li>How to refine it if the first version isn&apos;t quite right</li>
        </ul>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">The problem: you know you need funding, but you don&apos;t have a project plan yet</h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Most grant search tools expect you to already know exactly what you&apos;re looking for. They want keywords, categories, funding amounts, geographic focus. But in reality, many nonprofits start much earlier in the process — with something more like:
        </p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li>&quot;We need money for rent&quot;</li>
          <li>&quot;We want to do something with capacity building&quot;</li>
          <li>&quot;Our youth program needs funding&quot;</li>
          <li>&quot;We&apos;re thinking about expanding to a new region&quot;</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed mb-4">
          These are real funding needs, but they&apos;re not described in the language funders use. And writing a proper project description — with objectives, target populations, activities, budgets, and outcomes — takes time and grant-writing experience that many small organizations don&apos;t have.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          So people get stuck. They can&apos;t search effectively because they don&apos;t have a clear description, and they can&apos;t write a clear description because they don&apos;t know what funders are looking for.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How Engrant turns a short idea into a structured funding need</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          When you create a funding need in Engrant, you type whatever you have — even if it&apos;s just a couple of words. Engrant uses what it knows about your organization (from the profile it built when you entered your website) to expand your input into a complete, structured description.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-5">Here&apos;s what happens:</p>
        <ol className="space-y-5 text-neutral-700 leading-relaxed list-decimal list-inside">
          <li>
            <strong>You type your idea.</strong> This can be as brief as &quot;staff training&quot; or as detailed as a full paragraph. There&apos;s no minimum length and no required format.
          </li>
          <li>
            <strong>Engrant expands it.</strong> Using your organization&apos;s sector, mission, size, location, and track record, it generates a structured funding need written in the kind of language funders understand.
          </li>
          <li>
            <strong>A summary dialog appears.</strong> You see the converted description and can review everything before proceeding.
          </li>
          <li>
            <strong>You refine if needed.</strong> If something is off — wrong focus, missing a detail, too broad — you click &quot;add more context,&quot; type your correction, and regenerate.
          </li>
          <li>
            <strong>You confirm and search.</strong> Once the description looks right, you continue and Engrant uses it to find matching grants.
          </li>
        </ol>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">What the converted description includes</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The expanded funding need isn&apos;t just a longer version of what you typed. It&apos;s a structured document that covers everything a grant search needs to work well:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-neutral-200 rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">Section</th>
                <th className="text-left text-neutral-700 font-semibold px-4 py-3 border-b border-neutral-200">What it contains</th>
              </tr>
            </thead>
            <tbody className="text-neutral-700">
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Title</strong></td>
                <td className="px-4 py-3">A clear, specific name for the funding need</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Core funding need</strong></td>
                <td className="px-4 py-3">A single sentence describing exactly what costs need funding</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Project description</strong></td>
                <td className="px-4 py-3">2–3 paragraphs covering goals, target population, activities, and expected impact</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Estimated budget range</strong></td>
                <td className="px-4 py-3">A realistic range based on your organization&apos;s size and the type of work</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Timeline</strong></td>
                <td className="px-4 py-3">Implementation timeframe and urgency level</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Success indicators</strong></td>
                <td className="px-4 py-3">Measurable outcomes funders would expect to see</td>
              </tr>
              <tr className="border-b border-neutral-100">
                <td className="px-4 py-3"><strong>Funder targeting guidance</strong></td>
                <td className="px-4 py-3">What types of funders to look for — specialized funders, geographic funders, grant types, and special eligibility categories</td>
              </tr>
              <tr>
                <td className="px-4 py-3"><strong>Exclusions</strong></td>
                <td className="px-4 py-3">What types of funding don&apos;t apply — geographic mismatches, sector mismatches, wrong funding mechanisms</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-5">
          This structure doesn&apos;t just help with searching. It also gives you a head start if you later need to write an actual application — the core language is already there.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Examples of what you can type and what you get back</h2>
        <div className="space-y-6">
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <p className="text-neutral-600 font-semibold mb-2 text-sm uppercase tracking-wide">You type</p>
            <p className="text-xl font-bold text-neutral-700 mb-4">&quot;office rent&quot;</p>
            <p className="text-neutral-600 font-semibold mb-2 text-sm uppercase tracking-wide">You get</p>
            <p className="text-neutral-700 leading-relaxed">
              A description covering operational sustainability, the need for secure workspace, how stable operations support program delivery, a budget estimate based on your location and org size, and guidance to search for funders who support core/operating costs.
            </p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <p className="text-neutral-600 font-semibold mb-2 text-sm uppercase tracking-wide">You type</p>
            <p className="text-xl font-bold text-neutral-700 mb-4">&quot;youth mentorship program&quot;</p>
            <p className="text-neutral-600 font-semibold mb-2 text-sm uppercase tracking-wide">You get</p>
            <p className="text-neutral-700 leading-relaxed">
              A project description covering mentorship activities, target age group, expected outcomes (school retention, career readiness), session frequency, mentor recruitment, a budget range, and targeting toward youth development funders in your region.
            </p>
          </div>
          <div className="border border-neutral-200 rounded-xl p-5 bg-neutral-50">
            <p className="text-neutral-600 font-semibold mb-2 text-sm uppercase tracking-wide">You type</p>
            <p className="text-xl font-bold text-neutral-700 mb-4">&quot;capacity building&quot;</p>
            <p className="text-neutral-600 font-semibold mb-2 text-sm uppercase tracking-wide">You get</p>
            <p className="text-neutral-700 leading-relaxed">
              A description focused on organizational strengthening — staff development, systems improvement, strategic planning — with indicators like staff retention and operational efficiency, and targeting toward capacity-building and institutional development funders.
            </p>
          </div>
        </div>
        <p className="text-neutral-700 leading-relaxed mt-6">
          The key insight: Engrant doesn&apos;t just pad your words with filler. It uses your organization&apos;s actual profile to make the description specific and realistic.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">How to refine the description if it&apos;s not quite right</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The first conversion is usually close, but it might miss a nuance — maybe you specifically want to focus on a particular community, or the budget range seems too high, or the timeline doesn&apos;t match your plans.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-5">When the summary dialog appears, you can:</p>
        <ol className="space-y-5 text-neutral-700 leading-relaxed list-decimal list-inside">
          <li>
            <strong>Click &quot;add more context&quot;</strong> at the bottom of the dialog
          </li>
          <li>
            <strong>Type your corrections</strong> — for example: &quot;This is specifically for our Nairobi office, budget should be under $20K, we need it for 12 months&quot;
          </li>
          <li>
            <strong>Click &quot;Apply Changes&quot;</strong> to regenerate the description with your additions
          </li>
        </ol>
        <p className="text-neutral-700 leading-relaxed mt-5">
          The regenerated version incorporates your corrections while keeping the structured format. You can repeat this as many times as needed.
        </p>
      </section>

      <section className="bg-white border border-neutral-200 rounded-2xl p-7 sm:p-10 mb-10">
        <h2 className="text-3xl font-bold text-neutral-700 mb-5">Why this matters for your grant search results</h2>
        <p className="text-neutral-700 leading-relaxed mb-5">
          The quality of your funding need description directly affects the quality of your search results. A vague description returns vague matches. A structured description with clear budget ranges, geographic focus, and sector alignment returns grants that are actually relevant.
        </p>
        <p className="text-neutral-700 leading-relaxed mb-4">By converting even a rough idea into a well-structured funding need, Engrant can:</p>
        <ul className="space-y-3 text-neutral-700 leading-relaxed list-disc list-inside mb-5">
          <li>Match you with funders who specifically support that type of work</li>
          <li>Filter out grants that are too large or too small for your budget range</li>
          <li>Prioritize funders active in your geographic area</li>
          <li>Identify specialized funding streams you might not have known about</li>
        </ul>
        <p className="text-neutral-700 leading-relaxed">
          This is why the conversion step exists — it bridges the gap between &quot;I have a rough idea&quot; and &quot;I need precise search results.&quot;
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

export default HowToWriteProjectDescriptionPage;

export const Head = () => {
  const pageTitle = 'How to Turn a Vague Funding Idea Into a Grant-Ready Project Description | Engrant';
  const pageDescription =
    "Type a few words like 'capacity building' or 'youth mentorship' and Engrant expands it into a structured project description with budget range, timeline, and success indicators — ready for grant searching.";

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
    headline: 'How to Turn a Vague Funding Idea Into a Grant-Ready Project Description',
    description: pageDescription,
    datePublished: '2026-04-11',
    dateModified: '2026-04-11',
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
        name: 'How to write a project description for a grant',
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
        content="grant project description, how to write a grant description, nonprofit funding need, grant application writing, grant-ready project description, Engrant"
      />
      <OgTwitterMeta title={pageTitle} description={pageDescription} url={CANONICAL_URL} type="article" />
      <meta property="article:published_time" content="2026-04-11T00:00:00.000Z" />
      <link rel="canonical" href={CANONICAL_URL} />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </>
  );
};
