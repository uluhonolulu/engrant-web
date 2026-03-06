import React from 'react';
import '../../styles/shared.css';
import logo from '../../images/logo-horizontal-remove-background.com.png';
import exportImage from '../../images/export.png';
import Footer from '../../components/Footer';

const ExportYourPipelinePage = () => {
  return (
    <div className="bg-[#fffbf5] min-h-screen w-full">
      <header className="bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-100/50 sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <img src={logo} alt="EnGrant Logo" className="h-11 w-auto rounded-lg align-middle" />
            </a>
            <nav className="hidden md:flex items-center space-x-10">
              <a href="/features" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Features
              </a>
              <a href="/pricing" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Pricing
              </a>
              <a href="/learn-more" className="text-neutral-600 hover:text-primary-700 transition-colors duration-200 font-medium">
                Learn More
              </a>
            </nav>
            <a
              href="https://app.engrant.eu/"
              className="btn-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block shadow-md"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <main className="w-full">
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-700 leading-tight mb-6">
              Share Your Funding Strategy — Without Copying and Pasting
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Engrant&apos;s pipeline export features let grant professionals generate a polished funding strategy report or download structured grant data in seconds. Whether you&apos;re reporting to leadership or running deeper analysis, your pipeline can now leave the app.
            </p>
            <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <img
                src={exportImage}
                alt="Engrant saved grants export and report buttons"
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </section>

        <section className="py-14 bg-[#fffbf5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-700 mb-4">Generate a Funding Strategy Report</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Click &quot;Generate Report&quot; in your Saved Grants table and Engrant produces a downloadable Word (.docx) document containing grant titles, funders, award amounts, deadlines, and your current pipeline status — formatted and ready to share.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              This is the fastest way to hand a client or executive director a professional overview of your funding strategy without reformatting anything manually.
            </p>
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
              <p className="text-neutral-700 font-medium">💼 Ideal for grant consultants delivering progress updates to clients</p>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-700 mb-4">Export Your Full Pipeline Data</h2>
            <p className="text-lg text-neutral-700 leading-relaxed mb-4">
              Click &quot;Export Grants&quot; to download a structured text file containing all your saved grants — including your evaluation notes, decisions, selected ideas, and original grant data.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed mb-6">
              Drop it into ChatGPT, Claude, or any spreadsheet tool for deeper analysis, archiving, or building custom reports.
            </p>
            <div className="rounded-xl border border-primary-200 bg-primary-50 px-5 py-4">
              <p className="text-neutral-700 font-medium">🔍 Ideal for grant managers who want to analyze or archive their pipeline data</p>
            </div>
          </div>
        </section>

        <section className="py-14 bg-[#fffbf5]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-700 mb-8">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-3">How do I export my grants from Engrant?</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Open your Saved Grants table and click &quot;Export Grants&quot; to download a structured file with your full pipeline, including evaluation notes and grant details.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-3">Can I generate a grant report to share with my board or leadership?</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Yes. Click &quot;Generate Report&quot; in your Saved Grants table to download a formatted Word document with your funding strategy — ready to present without any manual formatting.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-3">What format is the exported grant data in?</h3>
                <p className="text-neutral-700 leading-relaxed">
                  The export is a structured plain-text file containing your grant data, evaluation notes, and decisions — easy to open in any AI assistant, spreadsheet, or analysis tool.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-3">Can grant consultants use Engrant to share results with clients?</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Yes. The funding strategy report is designed specifically for consultants who need to deliver a professional pipeline summary to clients in a shareable format.
                </p>
              </div>

              <div className="bg-white border border-neutral-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-neutral-700 mb-3">Does Engrant support exporting to Excel or CSV?</h3>
                <p className="text-neutral-700 leading-relaxed">
                  Currently Engrant exports a structured text file and a Word report. If you need a specific format, <a className="text-primary-700 hover:text-primary-800 underline" href="mailto:support@engrant.eu">contact us / send feedback</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-neutral-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to build your funding pipeline?</h2>
            <p className="text-xl text-neutral-200 mb-8">
              Try Engrant free for 2 weeks — no credit card required.
            </p>
            <a
              href="https://app.engrant.eu/"
              className="inline-flex items-center bg-white text-neutral-700 hover:bg-neutral-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200"
            >
              Start Free Trial →
            </a>
          </div>
        </section>
      </main>

      <Footer tagline="Export your grant pipeline and share polished funding strategy reports" />
    </div>
  );
};

export default ExportYourPipelinePage;

export const Head = () => (
  <>
    <title>Export Your Grant Pipeline | Funding Reports &amp; Data Export – Engrant</title>
    <meta
      name="description"
      content="Generate a polished Word funding strategy report or export your full grant pipeline as structured data. Built for nonprofit grant professionals and consultants."
    />
    <link rel="canonical" href="https://engrant.io/features/export-your-pipeline" />
  </>
);
