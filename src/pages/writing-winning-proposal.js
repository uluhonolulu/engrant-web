import React from 'react';
import '../styles/shared.css';
import { 
  Check, Target, FileText, Sparkles, Search, 
  Eye, ArrowRight, ChevronDown
} from 'lucide-react';
import logo from '../images/logo-horizontal-remove-background.com.png';
import Footer from '../components/Footer';

const WritingWinningProposalPage = () => {
  return (
    <div className="bg-[#fffbf5] text-neutral-700 min-h-screen w-full">
      <Header />
      <main className="w-full">
        <Hero />
        <Introduction />
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        <Conclusion />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <header className="bg-[#fffbf5]/95 backdrop-blur-md border-b border-amber-100/50 sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logo} alt="EnGrant Logo" className="h-11 w-auto rounded-lg align-middle" />
          </a>

          <nav className="hidden md:flex items-center space-x-10">
            <a href="#introduction" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Guide
            </a>
            <a href="#cta" className="text-neutral-600 hover:text-teal-700 transition-colors duration-200 font-medium">
              Get Started
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a 
              href="https://app.engrant.eu/"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'header',
                    page: 'writing_winning_proposal'
                  });
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

// Hero Section
const Hero = () => {
  return (
    <section className="hero-gradient min-h-[500px] flex items-center py-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <FileText className="w-4 h-4 mr-2" />
          Grant Writing Guide
        </div>
        
        <h1 className="text-4xl lg:text-[3.5rem] font-bold text-slate-800 mb-6 leading-[1.15] tracking-tight">
          A Comprehensive Guide to Writing a Winning Proposal
        </h1>
        
        <p className="text-xl lg:text-2xl text-neutral-600 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
          Learn the proven steps to craft compelling grant proposals that secure funding. See how Engrant streamlines each step of the process.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://app.engrant.eu/"
            onClick={() => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'cta_click', {
                  location: 'hero',
                  page: 'writing_winning_proposal'
                });
              }
            }}
            className="btn-primary text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg inline-block">
            Start Writing with Engrant
          </a>
          <a href="#introduction" className="text-teal-700 hover:text-teal-800 font-medium flex items-center group">
            Read the guide
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

// Introduction Section
const Introduction = () => {
  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Introduction</h2>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Writing a compelling grant proposal is a critical skill for any nonprofit organization. A well-crafted proposal can unlock the funding needed to make a real impact. This guide, based on insights from industry experts, provides a step-by-step approach to writing a winning proposal, with a focus on leveraging modern tools to streamline the process.
          </p>
          
          <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl p-6 border border-teal-100 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong className="text-teal-700">How Engrant helps:</strong> Engrant streamlines the entire proposal writing process by automatically generating comprehensive drafts that align with funder requirements. Our AI assumes your identity as the writer, ensuring every proposal maintains your organization's authentic voice and perspective.
            </p>
            <a 
              href="https://app.engrant.eu/"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'introduction',
                    page: 'writing_winning_proposal'
                  });
                }
              }}
              className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mt-4 group">
              Try Engrant now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Step 1: The Foundation
const StepOne = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h2 className="text-3xl font-bold text-slate-800 m-0">The Foundation: Alignment with the Funder</h2>
          </div>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            The most crucial step in grant writing is ensuring your project aligns with the funder's mission and focus areas. A brilliant proposal submitted to the wrong funder is destined to fail. Before you write a single word, thoroughly research the funder to understand their priorities, past projects they have funded, and their funding guidelines. This initial investment of time will dramatically increase your chances of success.
          </p>
          
          <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl p-6 border border-teal-100 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong className="text-teal-700">How Engrant helps:</strong> Engrant automatically researches each funder's mission, priorities, and funding history before writing your proposal. Before generating any content, Engrant will ask you for any missing information needed to create a perfectly aligned proposal that speaks directly to what the funder values most.
            </p>
            <a 
              href="https://app.engrant.eu/"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'step_one',
                    page: 'writing_winning_proposal'
                  });
                }
              }}
              className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mt-4 group">
              Get aligned proposals with Engrant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Step 2: The Core Components
const StepTwo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h2 className="text-3xl font-bold text-slate-800 m-0">The Core Components of a Strong Proposal</h2>
          </div>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            A successful proposal tells a clear and compelling story. It should be easy for the funder to understand the problem you are addressing, the solution you are proposing, and the impact you expect to make. The key components of a strong proposal are:
          </p>
          
          <ul className="text-lg text-neutral-700 leading-relaxed mb-6 space-y-4">
            <li className="flex items-start">
              <Check className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-800">Problem Statement:</strong> Clearly and concisely describe the problem your project will address. Use data and statistics to quantify the problem and demonstrate its significance. This is where you build the case for why your project is necessary.
              </div>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-800">Target Audience:</strong> Define the specific population or community that will benefit from your project. Be as precise as possible in describing their demographics, needs, and how your project will serve them.
              </div>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-800">Proposed Solution:</strong> Detail your project and how it will address the problem you have identified. Explain your methodology, activities, and timeline. This section should be practical and demonstrate that you have a well-thought-out plan.
              </div>
            </li>
            <li className="flex items-start">
              <Check className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-800">Goals and Objectives:</strong> Your goals should be broad statements about what you hope to achieve, while your objectives should be specific, measurable, achievable, relevant, and time-bound (SMART). This demonstrates that you have a clear vision for success and a way to measure it.
              </div>
            </li>
          </ul>
          
          <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl p-6 border border-teal-100 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong className="text-teal-700">How Engrant helps:</strong> Engrant automatically structures all these components into a cohesive, compelling narrative. Before writing, Engrant will prompt you for any missing details about your problem statement, target audience, solution, and objectives to ensure every section is complete and compelling.
            </p>
            <a 
              href="https://app.engrant.eu/"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'step_two',
                    page: 'writing_winning_proposal'
                  });
                }
              }}
              className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mt-4 group">
              Create complete proposals with Engrant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Step 3: Leveraging Engrant
const StepThree = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h2 className="text-3xl font-bold text-slate-800 m-0">Leveraging Engrant for a More Efficient Process</h2>
          </div>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Traditionally, grant writing has been a time-consuming and often stressful process. However, Engrant has revolutionized the way nonprofits can approach proposal development. Engrant can help you:
          </p>
          
          <ul className="text-lg text-neutral-700 leading-relaxed mb-6 space-y-4">
            <li className="flex items-start">
              <Sparkles className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-800">Structure Your Ideas:</strong> Transform unstructured thoughts and project details into a coherent and well-organized proposal outline.
              </div>
            </li>
            <li className="flex items-start">
              <FileText className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-800">Draft Compelling Content:</strong> Generate high-quality drafts of your entire proposal, including the executive summary, narrative, and supporting documents.
              </div>
            </li>
            <li className="flex items-start">
              <Search className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-800">Find and Cite Sources:</strong> Automatically find and cite relevant data and statistics to support your problem statement, saving you hours of research time.
              </div>
            </li>
            <li className="flex items-start">
              <Target className="w-6 h-6 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong className="text-slate-800">Create Detailed Budgets:</strong> Generate a comprehensive, line-item budget that anticipates all potential expenses. This is often one of the most challenging parts of proposal writing, and Engrant can provide a significant advantage.
              </div>
            </li>
          </ul>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            By using Engrant, your role shifts from being a writer to an editor. You can focus on refining the Engrant-generated content, ensuring it accurately reflects your project and speaks in your organization's voice. This not only saves time but also improves the overall quality of your proposals.
          </p>
          
          <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl p-6 border border-teal-100 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong className="text-teal-700">How Engrant helps:</strong> Engrant writes complete proposals from start to finish, assuming your identity as the writer to add a genuine human element to every proposal. Before generating content, Engrant will always ask you for any missing pieces of information to ensure nothing is left out. Once complete, you simply review and refine to make it perfect.
            </p>
            <a 
              href="https://app.engrant.eu/"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'step_three',
                    page: 'writing_winning_proposal'
                  });
                }
              }}
              className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mt-4 group">
              Start writing with Engrant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Step 4: The Final Polish
const StepFour = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-shrink-0 w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
              4
            </div>
            <h2 className="text-3xl font-bold text-slate-800 m-0">The Final Polish: Review and Refine</h2>
          </div>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            Once you have a complete draft, it is essential to review and refine it. Check for clarity, consistency, and any grammatical errors. It is also a good practice to have someone who is not familiar with your project read the proposal to ensure it is easy to understand. A fresh pair of eyes can often catch mistakes that you might have missed.
          </p>
          
          <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl p-6 border border-teal-100 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong className="text-teal-700">How Engrant helps:</strong> Engrant performs an automatic review of everything it creates, checking for consistency and removing AI artifacts to ensure your proposal reads naturally. However, human review is always required—Engrant provides you with a polished draft, but your final review ensures the proposal perfectly reflects your organization's voice and meets all requirements.
            </p>
            <a 
              href="https://app.engrant.eu/"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'step_four',
                    page: 'writing_winning_proposal'
                  });
                }
              }}
              className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mt-4 group">
              Get polished proposals with Engrant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Conclusion Section
const Conclusion = () => {
  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Conclusion</h2>
          
          <p className="text-lg text-neutral-700 leading-relaxed mb-6">
            By following these steps and leveraging the power of modern technology, you can streamline your proposal writing process and increase your chances of securing the funding you need to achieve your mission. Remember, a winning proposal is one that is not only well-written but also strategically aligned with the funder's priorities.
          </p>
          
          <div className="bg-gradient-to-br from-teal-50 to-amber-50/30 rounded-xl p-6 border border-teal-100 my-8">
            <p className="text-neutral-700 leading-relaxed mb-4">
              <strong className="text-teal-700">Ready to get started?</strong> Engrant makes it easy to write winning proposals that align with funder priorities. Try Engrant today and see how it transforms your grant writing process.
            </p>
            <a 
              href="https://app.engrant.eu/"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'cta_click', {
                    location: 'conclusion',
                    page: 'writing_winning_proposal'
                  });
                }
              }}
              className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold mt-4 group">
              Start writing winning proposals
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = () => {
  return (
    <section id="cta" className="py-28 relative overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-64 h-64 bg-teal-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white leading-tight">
          Ready to write winning proposals?
        </h2>
        
        <p className="text-xl lg:text-2xl mb-12 text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Let Engrant handle the writing while you focus on refining and perfecting your proposals.
        </p>
        
        <a 
          href="https://app.engrant.eu/"
          onClick={() => {
            if (typeof window !== 'undefined' && window.gtag) {
              window.gtag('event', 'cta_click', {
                location: 'final_cta',
                page: 'writing_winning_proposal'
              });
            }
          }}
          className="inline-flex items-center bg-white text-teal-700 hover:bg-amber-50 px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-1 group">
          Start writing with Engrant
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


export default WritingWinningProposalPage;

export const Head = () => {
  return (
    <>
      <title>A Comprehensive Guide to Writing a Winning Proposal | Engrant</title>
      <meta 
        name="description" 
        content="Learn the proven steps to write winning grant proposals. See how Engrant streamlines each step of the proposal writing process, from research to final polish." 
      />
      <meta 
        name="keywords" 
        content="grant writing, grant proposal, proposal writing, grant writing guide, nonprofit grants, how to write a grant proposal" 
      />
    </>
  );
};
