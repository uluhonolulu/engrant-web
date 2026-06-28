import React from 'react';
import '../styles/shared.css';
import {
  Search, ArrowRight, ChevronDown,
  Zap, Shield, GitBranch, CheckCircle,
  Brain, Users, BarChart3, Filter
} from 'lucide-react';
import logo from '../images/logo-horizontal-remove-background.com.png';
import { OgTwitterMeta } from '../utils/seoMeta';
import Footer from '../components/Footer';

const HowEngrantSearchWorksPage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <ShortAnswer />
        <DirectMatchAgents />
        <LateralReasoningAgents />
        <WhyMultipleAgents />
        <ValidationStep />
        <ComparisonTable />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

// ─── Header ──────────────────────────────────────────────────────────────────

const Header = () => {
  return (
    <header className="bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-100/50 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logo} alt="Engrant Logo" className="h-11 w-auto rounded-lg align-middle" />
          </a>

          <nav className="hidden md:flex items-center space-x-10">
            <a href="#how-it-works" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              How It Works
            </a>
            <a href="#faq" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              FAQ
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="https://app.engrant.eu/?utm_source=how_search_works&utm_medium=cta&utm_campaign=header_cta"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', { location: 'header', page: 'how_search_works' });
                }
              }}
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md">
              Try Engrant
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  return (
    <section className="hero-gradient min-h-[500px] flex items-center py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Search className="w-4 h-4 mr-2" />
          Grant Search Technology
        </div>

        <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
          How Engrant Finds Grants Other Tools Miss
        </h1>

        <p className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
          Engrant deploys parallel AI research agents — each approaching your funding landscape from a different angle — and cross-references the results to surface 3–5× more opportunities than a single search.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="https://app.engrant.eu/?utm_source=how_search_works&utm_medium=cta&utm_campaign=hero_cta"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', { location: 'hero', page: 'how_search_works' });
              }
            }}
            className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg inline-block">
            Run Your First Search
          </a>
          <a href="#how-it-works" className="text-teal-700 hover:text-teal-800 font-medium flex items-center group">
            See how it works
            <ChevronDown className="w-5 h-5 ml-1 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>

        <p className="text-neutral-500 flex items-center justify-center">
          <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
          Free to use • No credit card required
        </p>
      </div>
    </section>
  );
};

// ─── Short Answer (Answer-First block) ───────────────────────────────────────

const ShortAnswer = () => {
  return (
    <section id="how-it-works" className="py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-2xl p-8 border border-teal-100 mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-3">Short Answer</p>
          <p className="text-xl text-neutral-700 leading-relaxed font-medium">
            Engrant runs multiple specialized AI agents in parallel — each with a different search strategy — then deduplicates, cross-references, and validates the results. The outcome is a shortlist of verified, actionable funding opportunities ranked by fit for your organization.
          </p>
        </div>

        <div className="mb-2">
          <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">TL;DR</p>
          <ul className="space-y-3">
            {[
              'Most grant tools run one search. Engrant runs many — simultaneously, with different strategies.',
              'Direct-match agents find obvious funders in your field. Lateral-reasoning agents find the ones nobody else would think to look for.',
              'Any single agent finds only 20–30% of viable opportunities. Multiple agents together find 3–5× more.',
              'Every result is validated against the funder\'s live grant page before you see it.',
              'You get a ranked shortlist of verified, open grants — not a raw database dump.',
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

// ─── Direct-Match Agents ──────────────────────────────────────────────────────

const DirectMatchAgents = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 m-0">How Direct-Match Agents Find Grants in Your Field</h2>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            When you run a grant search, Engrant's first wave of agents starts from your mission and works outward. These <strong className="text-slate-800">direct-match agents</strong> search for funders in your specific field — the obvious matches that any experienced grant researcher would find first.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            For a Parkinson's disease nonprofit, direct-match agents surface opportunities like:
          </p>

          <ul className="text-lg text-neutral-700 space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-3"></span>
              <span><strong className="text-slate-800">Pharma corporate giving programs</strong> — AbbVie, Kyowa Kirin, Boehringer Ingelheim</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-3"></span>
              <span><strong className="text-slate-800">Disease-specific foundations</strong> aligned with neurological conditions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0 mt-3"></span>
              <span><strong className="text-slate-800">Regional community funders</strong> like Florida Blue Foundation and the Health Foundation of South Florida</span>
            </li>
          </ul>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            These are the grants that typically take weeks of manual searching through funder directories and corporate giving portals to uncover. Direct-match agents surface them in minutes.
          </p>

          <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl p-6 border border-teal-100 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong className="text-teal-700">Try it yourself:</strong> Describe your organization's mission and let Engrant's agents get to work. Most searches complete in under five minutes.
            </p>
            <a
              href="https://app.engrant.eu/?utm_source=how_search_works&utm_medium=cta&utm_campaign=direct_match_cta"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', { location: 'direct_match', page: 'how_search_works' });
                }
              }}
              className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mt-4 group">
              Run a grant search now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── Lateral-Reasoning Agents ─────────────────────────────────────────────────

const LateralReasoningAgents = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 m-0">How Lateral-Reasoning Agents Find Grants You'd Never Think to Search For</h2>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Direct-match agents are powerful, but they only find the grants that are obvious to search for. The most valuable funding opportunities are often discovered through a different kind of thinking — <strong className="text-slate-800">lateral reasoning</strong>.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            Engrant's lateral-reasoning agents don't search for your exact mission. Instead, they reason about your organization's <em>multiple fundable identities</em> and search for each one separately. Consider a Parkinson's nonprofit. It isn't just a Parkinson's organization — it is also:
          </p>

          <div className="grid gap-4 my-8">
            {[
              { identity: 'A caregiver support provider', lead: 'aging-focused funders like the Next50 Foundation', icon: Users },
              { identity: 'A health equity organization serving underserved communities', lead: 'funders like the W.K. Kellogg Foundation', icon: Shield },
              { identity: 'A large national nonprofit with multi-state operations', lead: 'the Hearst Foundations', icon: GitBranch },
              { identity: 'An organization with a New York City headquarters', lead: 'the Achelis & Bodman Foundation', icon: Zap },
            ].map(({ identity, lead, icon: Icon }, i) => (
              <div key={i} className="flex items-start gap-4 bg-neutral-50 rounded-xl p-5 border border-neutral-100">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 text-teal-700 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 mb-1">{identity}</p>
                  <p className="text-neutral-600 text-sm">→ which leads to {lead}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Lateral agents also trace personal and institutional connections. Who funds the Michael J. Fox Foundation? The Edmond J. Safra family — and they have their own foundation funding Parkinson's care infrastructure in New York City. Who has a documented personal connection to Parkinson's research? Sergey Brin — and his family foundation has contributed over $55 million to the Parkinson's ecosystem.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            These are the leads that experienced grant researchers discover after months of relationship-building and network mapping. Engrant's lateral-reasoning agents surface them in minutes.
          </p>

          <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl p-6 border border-teal-100 my-8">
            <p className="text-neutral-700 leading-relaxed">
              <strong className="text-teal-700">Why this matters:</strong> Most nonprofits are only applying to the obvious grants — the ones every other organization in their field is also applying for. Lateral-reasoning agents open up an entirely different tier of funders with far less competition.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── Why Multiple Agents ──────────────────────────────────────────────────────

const WhyMultipleAgents = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 m-0">Why Running Multiple Agents Finds 3–5× More Grants</h2>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            No single search — no matter how sophisticated — finds everything. In testing, any individual agent run finds only about <strong className="text-slate-800">20–30% of total viable funding opportunities</strong>. The remaining 70–80% are unique to other runs.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            This isn't random variation. Each agent follows a <em>different chain of reasoning</em>, explores different search terms, and discovers different corners of the funding landscape. By running multiple agents in parallel and deduplicating the results, Engrant consistently uncovers significantly more relevant funders than any single search.
          </p>

          <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden my-8">
            <div className="grid grid-cols-2 bg-neutral-100 border-b border-neutral-200">
              <div className="px-6 py-3 text-sm font-bold text-neutral-600 uppercase tracking-wide">Approach</div>
              <div className="px-6 py-3 text-sm font-bold text-neutral-600 uppercase tracking-wide">% of Opportunities Found</div>
            </div>
            {[
              { approach: 'Single keyword search', pct: '10–20%', highlight: false },
              { approach: 'Single AI agent run', pct: '20–30%', highlight: false },
              { approach: 'Engrant (parallel multi-agent)', pct: '80–95%', highlight: true },
            ].map(({ approach, pct, highlight }, i) => (
              <div key={i} className={`grid grid-cols-2 border-b border-neutral-100 last:border-0 ${highlight ? 'bg-teal-50' : ''}`}>
                <div className={`px-6 py-4 text-base ${highlight ? 'font-semibold text-teal-800' : 'text-neutral-700'}`}>{approach}</div>
                <div className={`px-6 py-4 text-base font-semibold ${highlight ? 'text-teal-700' : 'text-neutral-600'}`}>{pct}</div>
              </div>
            ))}
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed">
            The parallel multi-agent approach is the core reason Engrant surfaces funding opportunities that months of traditional manual research often miss entirely.
          </p>

        </div>
      </div>
    </section>
  );
};

// ─── Validation Step ──────────────────────────────────────────────────────────

const ValidationStep = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center">
              <Filter className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 m-0">How Engrant Validates Every Grant Lead Before You See It</h2>
          </div>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Finding a grant lead is only half the job. Grant databases are full of stale listings — closed programs, broken URLs, research-only funding, or geographic mismatches that waste hours of a grant writer's time. Engrant adds a <strong className="text-slate-800">live validation step</strong> before any result reaches you.
          </p>

          <p className="text-lg text-neutral-700 leading-relaxed mb-4">
            For every lead the agents surface, Engrant visits the funder's actual grant page and checks:
          </p>

          <ol className="text-lg text-neutral-700 space-y-4 mb-8">
            {[
              { label: 'Active RFP', desc: 'Is there an open request for proposals, or is the program closed?' },
              { label: 'Eligibility', desc: 'Does your organization type, size, and geography meet the funder\'s criteria?' },
              { label: 'Grant size', desc: 'Does the typical award amount align with your budget needs?' },
              { label: 'Deadline', desc: 'Is the application window still open, or has it passed?' },
            ].map(({ label, desc }, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <strong className="text-slate-800">{label}:</strong>{' '}
                  <span className="text-neutral-700">{desc}</span>
                </div>
              </li>
            ))}
          </ol>

          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Grants that don't pass this check — broken links, closed programs, research-only funding, geographic mismatches — are filtered out or flagged before your results are delivered. What you receive is a <strong className="text-slate-800">shortlist of verified, actionable opportunities ranked by fit</strong>.
          </p>

          <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl p-6 border border-teal-100 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong className="text-teal-700">The result:</strong> You spend your time evaluating real opportunities, not chasing dead ends or manually verifying whether a program is still active.
            </p>
            <a
              href="https://app.engrant.eu/?utm_source=how_search_works&utm_medium=cta&utm_campaign=validation_cta"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', { location: 'validation', page: 'how_search_works' });
                }
              }}
              className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mt-4 group">
              See Engrant in action
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

// ─── Comparison Table ─────────────────────────────────────────────────────────

const ComparisonTable = () => {
  const rows = [
    { feature: 'Search strategy', keyword: 'Single keyword query', database: 'Keyword + filters', engrant: 'Parallel multi-agent AI' },
    { feature: 'Coverage', keyword: '10–20% of viable grants', database: '20–40% of viable grants', engrant: '80–95% of viable grants' },
    { feature: 'Lateral / indirect funders', keyword: 'No', database: 'Rarely', engrant: 'Yes — core feature' },
    { feature: 'Live grant validation', keyword: 'No', database: 'No', engrant: 'Yes — every result' },
    { feature: 'Results ranked by fit', keyword: 'No', database: 'Partial', engrant: 'Yes' },
    { feature: 'Time to first results', keyword: 'Seconds (low quality)', database: 'Minutes', engrant: 'Under 5 minutes' },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
          How Engrant Compares to Traditional Grant Research Methods
        </h2>
        <p className="text-lg text-neutral-600 text-center mb-10 max-w-2xl mx-auto">
          Here's how Engrant stacks up against keyword searches and static grant databases.
        </p>

        <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-neutral-100 border-b border-neutral-200">
                <th className="px-5 py-3 text-left font-bold text-neutral-600 uppercase tracking-wide text-xs">Feature</th>
                <th className="px-5 py-3 text-left font-bold text-neutral-500 uppercase tracking-wide text-xs">Keyword Search</th>
                <th className="px-5 py-3 text-left font-bold text-neutral-500 uppercase tracking-wide text-xs">Grant Database</th>
                <th className="px-5 py-3 text-left font-bold text-teal-700 uppercase tracking-wide text-xs bg-teal-50">Engrant</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, keyword, database, engrant }, i) => (
                <tr key={i} className="border-b border-neutral-100 last:border-0">
                  <td className="px-5 py-4 font-semibold text-slate-800">{feature}</td>
                  <td className="px-5 py-4 text-neutral-500">{keyword}</td>
                  <td className="px-5 py-4 text-neutral-500">{database}</td>
                  <td className="px-5 py-4 font-semibold text-teal-700 bg-teal-50/40">{engrant}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

// ─── FAQ ──────────────────────────────────────────────────────────────────────

const FAQ = () => {
  const faqs = [
    {
      q: 'How does Engrant find grants?',
      a: 'Engrant deploys multiple parallel AI research agents, each using a different search strategy. Direct-match agents search for funders aligned with your exact mission. Lateral-reasoning agents identify your organization\'s multiple fundable identities and search for each one separately. All results are then cross-referenced, deduplicated, and validated against live funder pages before being delivered to you.',
    },
    {
      q: 'What is the difference between direct-match agents and lateral-reasoning agents?',
      a: 'Direct-match agents start from your mission and find the obvious funders in your field — the ones any grant researcher would identify first. Lateral-reasoning agents think differently: they map your organization\'s indirect identities (as a caregiver provider, a health equity org, a regional nonprofit, etc.) and search for funders in each of those categories, uncovering opportunities that most organizations never pursue.',
    },
    {
      q: 'How many more grants does Engrant find compared to a single search?',
      a: 'In testing, any single agent run surfaces only 20–30% of total viable opportunities. By running multiple agents in parallel with different strategies, Engrant consistently finds 3–5× more relevant funders than a single search. Each agent discovers a unique slice of the funding landscape.',
    },
    {
      q: 'Does Engrant verify that grants are still open and accepting applications?',
      a: 'Yes. Every lead goes through a live validation step. Engrant visits the actual funder\'s grant page and checks for an active RFP, your organization\'s eligibility, whether the grant size matches your budget, and whether the deadline is still open. Results that don\'t pass this check are filtered out or flagged before you see them.',
    },
    {
      q: 'How long does an Engrant grant search take?',
      a: 'Most searches complete in under five minutes. The parallel agent architecture means Engrant doesn\'t run searches sequentially — multiple agents work simultaneously, so total search time doesn\'t scale with the number of agents deployed.',
    },
    {
      q: 'Is Engrant better than using a grant database?',
      a: 'Grant databases use static keyword filters, so you only find grants that match the terms you thought to search for. Engrant uses AI reasoning to identify indirect funding angles and follows chains of funder relationships, surfacing opportunities that never appear in a traditional database search. Engrant also validates results in real time, while most databases contain outdated listings.',
    },
    {
      q: 'What types of nonprofits can use Engrant to find grants?',
      a: 'Engrant works for any nonprofit organization, regardless of size or focus area. The multi-agent approach is especially valuable for organizations with complex, multi-faceted missions — the more dimensions your work has, the more lateral funding angles the agents can explore.',
    },
    {
      q: 'What happens after the grant search is complete?',
      a: 'After the search, you receive a ranked shortlist of verified, actionable opportunities filtered for fit. From there, Engrant can help you draft tailored grant proposals for each opportunity, with each proposal researched and written to match the specific funder\'s priorities.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-3 text-center">
          Frequently Asked Questions About Engrant Grant Search
        </h2>
        <p className="text-neutral-500 text-center mb-12">Everything you need to know about how Engrant finds and validates grant opportunities.</p>

        <div className="space-y-5">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{q}</h3>
              <p className="text-neutral-700 leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl border border-teal-100 p-6">
          <h3 className="text-xl font-semibold text-neutral-700 mb-3">Related: Writing proposals for the grants you find</h3>
          <p className="text-neutral-700 mb-4">
            Once you have your shortlist, Engrant can help you write tailored grant proposals for each opportunity — researched and drafted to match each funder's specific priorities.
          </p>
          <a href="/writing-winning-proposal" className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold">
            Read the grant writing guide
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

// ─── Final CTA ────────────────────────────────────────────────────────────────

const FinalCTA = () => {
  return (
    <section id="cta" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800"></div>

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white leading-tight">
          Ready to find grants you've been missing?
        </h2>

        <p className="text-xl lg:text-2xl mb-12 text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Run your first multi-agent grant search and see the opportunities your current process isn't finding.
        </p>

        <a
          href="https://app.engrant.eu/?utm_source=how_search_works&utm_medium=cta&utm_campaign=final_cta"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_click', { location: 'final_cta', page: 'how_search_works' });
            }
          }}
          className="inline-flex items-center bg-white text-teal-700 hover:bg-amber-50 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 group">
          Run Your First Search — Free
          <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        <p className="text-teal-200 mt-8 flex items-center justify-center flex-wrap gap-x-6 gap-y-2">
          <span className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            Free to use
          </span>
          <span className="flex items-center">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
            No credit card required
          </span>
        </p>
      </div>
    </section>
  );
};

export default HowEngrantSearchWorksPage;

export const Head = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Engrant find grants?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Engrant deploys multiple parallel AI research agents, each using a different search strategy. Direct-match agents search for funders aligned with your exact mission. Lateral-reasoning agents identify your organization\'s multiple fundable identities and search for each one separately. All results are cross-referenced, deduplicated, and validated against live funder pages before being delivered.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between direct-match agents and lateral-reasoning agents?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Direct-match agents start from your mission and find obvious funders in your field. Lateral-reasoning agents map your organization\'s indirect identities and search for funders in each of those categories, uncovering opportunities that most organizations never pursue.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many more grants does Engrant find compared to a single search?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Any single agent run surfaces only 20–30% of total viable opportunities. By running multiple agents in parallel, Engrant consistently finds 3–5× more relevant funders than a single search.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Engrant verify that grants are still open?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every lead goes through a live validation step. Engrant visits the actual funder\'s grant page and checks for an active RFP, eligibility, grant size fit, and open deadline. Results that don\'t pass are filtered out before you see them.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does an Engrant grant search take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most searches complete in under five minutes. The parallel agent architecture means multiple agents work simultaneously.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Engrant better than using a grant database?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Grant databases use static keyword filters. Engrant uses AI reasoning to identify indirect funding angles and follows chains of funder relationships, surfacing opportunities that never appear in a traditional database search. Engrant also validates results in real time.',
        },
      },
    ],
  };

  return (
    <>
      <title>How Engrant Finds Grants: Multi-Agent AI Search Explained | Engrant</title>
      <meta
        name="description"
        content="Engrant uses parallel AI research agents — direct-match and lateral-reasoning — to find 3–5× more grant opportunities than a single search. Every result is validated live before you see it."
      />
      <meta
        name="keywords"
        content="how Engrant works, AI grant search, grant finder, nonprofit grant search tool, multi-agent grant research, lateral reasoning grants, automated grant discovery"
      />
      <link rel="canonical" href="https://engrant.eu/how-engrant-search-works/" />
      <OgTwitterMeta
        title="How Engrant Finds Grants: Multi-Agent AI Search Explained | Engrant"
        description="Engrant uses parallel AI research agents — direct-match and lateral-reasoning — to find 3–5× more grant opportunities than a single search. Every result is validated live before you see it."
        url="https://engrant.eu/how-engrant-search-works/"
      />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </>
  );
};
