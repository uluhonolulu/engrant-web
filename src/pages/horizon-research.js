import React from 'react';
import { Link } from 'gatsby';
import logo from '../images/Logo_transparent_bg.png';

const HorizonResearchPage = () => {
  return (
    <>
      {/* Custom styles for this page */}
      <style jsx global>{`
        .highlighted-section {
          outline: 2px solid #3F20FB;
          background-color: rgba(63, 32, 251, 0.1);
        }

        .edit-button {
          position: absolute;
          z-index: 1000;
        }

        ::-webkit-scrollbar {
          display: none;
        }

        html, body {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .eublue {
          color: #004494;
        }

        .bg-eublue {
          background-color: #004494;
        }

        .bg-eublue-dark {
          background-color: #003366;
        }

        .bg-accent-light {
          background-color: #F5F9FF;
        }

        .bg-accent-yellow {
          background-color: #FFD617;
        }

        .text-eublue {
          color: #004494;
        }

        .text-eublue-dark {
          color: #003366;
        }

        .hover\\:bg-eublue-dark:hover {
          background-color: #003366;
        }

        .hover\\:text-eublue:hover {
          color: #004494;
        }

        .border-eublue {
          border-color: #004494;
        }

        .from-eublue {
          --tw-gradient-from: #004494;
        }

        .to-eublue-dark {
          --tw-gradient-to: #003366;
        }
      `}</style>

      <div className="bg-white text-neutral-700 font-sans min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="p-6 container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="EnGrant Logo" className="h-36 w-auto rounded-lg align-middle" />
          </div>
          <div>
            <Link to="/" className="text-primary-600 hover:text-primary-700 font-semibold">
              &larr; Back to Home
            </Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent-light to-white h-[650px] relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
                    Turn Research Excellence Into Funded Projects
                  </h1>
                  <p className="text-xl text-neutral-600 mb-8">
                    No grant writer? No problem. Create winning Horizon Europe proposals with AI assistance tailored for researchers. Go from concept to submission in weeks, not months.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                    <button className="bg-eublue hover:bg-eublue-dark text-white text-lg font-semibold px-8 py-4 rounded-lg transition duration-200 text-center">
                      Start Your Proposal Today
                    </button>
                    <button className="bg-white border border-neutral-300 hover:border-eublue text-neutral-700 hover:text-eublue text-lg font-semibold px-8 py-4 rounded-lg transition duration-200 text-center flex items-center justify-center">
                      <i className="fa-solid fa-play mr-2 text-sm"></i> See How It Works
                    </button>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1">
                        <i className="fa-solid fa-check text-green-600"></i>
                      </div>
                      <span className="ml-2 text-neutral-700">No learning curve</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1">
                        <i className="fa-solid fa-check text-green-600"></i>
                      </div>
                      <span className="ml-2 text-neutral-700">14-day free trial</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="bg-white rounded-xl shadow-xl p-4 max-w-lg mx-auto">
                  <img className="w-full rounded-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ccf9cff45c-10c24c6cfdbc68ec0bba.png" alt="researcher looking relieved at computer with Horizon Europe proposal on screen, professional academic setting, EU blue accents" />
                  <div className="absolute -bottom-4 -left-4 bg-accent-yellow text-eublue-dark font-bold py-2 px-4 rounded-lg transform rotate-[-2deg] shadow-md">
                    <span className="text-sm">Complete proposals in weeks, not months!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-400 to-eublue h-2"></div>
        </section>

        {/* Trust Signals */}
        <section className="bg-neutral-50 py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-neutral-600 font-medium">Trusted by researchers across Europe</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-eublue">500+</div>
                <p className="text-neutral-600">Proposals Created</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eublue">85%</div>
                <p className="text-neutral-600">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-eublue">€120M</div>
                <p className="text-neutral-600">Funding Secured</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <i className="fa-solid fa-certificate text-yellow-400 text-2xl mr-2"></i>
                  <span className="text-eublue font-semibold">EU Compliant</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Point Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Your Research Can't Wait For Available Grant Writers</h2>
              <p className="text-xl text-neutral-700">
                You're a brilliant scientist, not a proposal writer - yet you're stuck writing a 40-page Horizon Europe proposal while competing against teams with dedicated grant professionals. With only a few weeks until the deadline, every day counts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-red-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-red-700 mb-3">Without Engrant</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-red-500 mt-1 mr-2"></i>
                      <span>Weeks spent deciphering complex EU templates and requirements</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-red-500 mt-1 mr-2"></i>
                      <span>Missing critical sections that evaluators look for</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-red-500 mt-1 mr-2"></i>
                      <span>Using academic language instead of "EU funding language"</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-red-500 mt-1 mr-2"></i>
                      <span>Endless email chains coordinating partner contributions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-xmark text-red-500 mt-1 mr-2"></i>
                      <span>Rushed submission with formatting errors</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">With Engrant</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>AI instantly analyzes call requirements and creates templates</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Step-by-step guidance through every required section</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Content generation in evaluator-friendly "EU language"</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Streamlined partner coordination and input management</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fa-solid fa-check text-green-500 mt-1 mr-2"></i>
                      <span>Polished, complete submission with time to spare</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative">
                  <img className="w-full rounded-lg shadow-lg" src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8ab3e14cbc-bb600fad69e616113ba9.png" alt="split screen showing stressed researcher with messy papers vs confident researcher using organized digital tool, professional academic setting" />
                  <div className="absolute -bottom-4 right-4 bg-white shadow-lg rounded-lg py-2 px-4">
                    <div className="flex items-center">
                      <div className="mr-3">
                        <div className="text-xl font-bold text-red-500">12 weeks</div>
                        <div className="text-xs text-neutral-500">Without AI</div>
                      </div>
                      <i className="fa-solid fa-arrow-right text-neutral-400"></i>
                      <div className="ml-3">
                        <div className="text-xl font-bold text-green-500">6 weeks</div>
                        <div className="text-xs text-neutral-500">With Engrant</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-accent-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">From Research Idea to Submitted Proposal</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                Engrant's AI assistant guides you through every step of the Horizon Europe proposal process, turning your research expertise into funding-ready content.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
                <div className="text-eublue mb-4">
                  <i className="fa-solid fa-lightbulb text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Step-by-Step AI Guidance</h3>
                <p className="text-neutral-600 mb-4">
                  Get intelligent suggestions for each section as you write, with examples from successful proposals and EU evaluator insights.
                </p>
                <span className="text-eublue font-medium inline-flex items-center cursor-pointer">
                  Learn more <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </span>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
                <div className="text-eublue mb-4">
                  <i className="fa-solid fa-pen-fancy text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Write Like a Pro</h3>
                <p className="text-neutral-600 mb-4">
                  AI trained on successful Horizon Europe proposals generates content in EU funding language that resonates with evaluators.
                </p>
                <span className="text-eublue font-medium inline-flex items-center cursor-pointer">
                  Learn more <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </span>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
                <div className="text-eublue mb-4">
                  <i className="fa-solid fa-chart-line text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Evaluation</h3>
                <p className="text-neutral-600 mb-4">
                  Get instant feedback against Horizon Europe criteria with specific improvement suggestions to maximize your score.
                </p>
                <span className="text-eublue font-medium inline-flex items-center cursor-pointer">
                  Learn more <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </span>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
                <div className="text-eublue mb-4">
                  <i className="fa-solid fa-pen-fancy text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Write Like a Pro</h3>
                <p className="text-neutral-600 mb-4">
                  AI trained on successful Horizon Europe proposals generates content in EU funding language that resonates with evaluators.
                </p>
                <span className="text-eublue font-medium inline-flex items-center cursor-pointer">
                  Learn more <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </span>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
                <div className="text-eublue mb-4">
                  <i className="fa-solid fa-chart-line text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Evaluation</h3>
                <p className="text-neutral-600 mb-4">
                  Get instant feedback against Horizon Europe criteria with specific improvement suggestions to maximize your score.
                </p>
                <span className="text-eublue font-medium inline-flex items-center cursor-pointer">
                  Learn more <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </span>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
                <div className="text-eublue mb-4">
                  <i className="fa-solid fa-users text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Consortium Building</h3>
                <p className="text-neutral-600 mb-4">
                  Smart partner finding and automated coordination of partner inputs without endless email chains.
                </p>
                <span className="text-eublue font-medium inline-flex items-center cursor-pointer">
                  Learn more <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How Engrant Works</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                Our AI-powered platform streamlines the entire proposal process, from call selection to final submission.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-eublue rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    1
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3">Upload Your Research Concept</h3>
                  <p className="text-neutral-700 mb-4">
                    Upload your research concept and existing materials. Our AI will analyze your content and help structure it for the specific Horizon Europe call you're targeting.
                  </p>

                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-eublue rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    2
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3">Streamline Partner Coordination</h3>
                  <p className="text-neutral-700 mb-4">
                    Our AI analyzes your existing content against call requirements, identifies missing information, and automatically generates personalized forms for each partner. Partner responses are incorporated directly into your draft.
                  </p>
                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <div className="flex items-center text-sm text-neutral-600">
                      <i className="fa-solid fa-clock mr-2"></i>
                      <span>Time saved: 1-2 weeks of partner coordination emails</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-eublue rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    3
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3">Draft with AI Assistance</h3>
                  <p className="text-neutral-700 mb-4">
                    Our AI guides you through each section, generating content in "EU funding language" based on your input. Get real-time evaluation against Horizon Europe criteria.
                  </p>
                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <div className="flex items-center text-sm text-neutral-600">
                      <i className="fa-solid fa-clock mr-2"></i>
                      <span>Time saved: 1-2 weeks of initial drafting</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-6 md:mb-0 md:pr-8">
                  <div className="bg-eublue rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mx-auto">
                    4
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-3">Finalize and Submit</h3>
                  <p className="text-neutral-700 mb-4">
                    Coordinate partner inputs through our platform, receive final proposal evaluation, and export a perfectly formatted document ready for submission.
                  </p>
                  <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                    <div className="flex items-center text-sm text-neutral-600">
                      <i className="fa-solid fa-clock mr-2"></i>
                      <span>Time saved: 2-3 days of formatting and coordination setup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-eublue text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Deadline with Time to Spare</h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Engrant dramatically accelerates your proposal development process while improving quality.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 text-neutral-800">
              <div className="flex items-center justify-between mb-8">
                <div className="text-center">
                  <div className="text-sm text-neutral-500">TODAY</div>
                  <div className="font-bold text-eublue">START</div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-neutral-200 rounded-full relative">
                    <div className="absolute h-2 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-full"></div>
                    <div className="absolute -top-1 left-1/4 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="absolute -top-1 left-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="absolute -top-1 left-3/4 w-4 h-4 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-neutral-500">WEEK 6</div>
                  <div className="font-bold text-green-600">SUBMIT</div>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="font-medium">Week 1</div>
                  <p className="text-sm text-neutral-600">Proposal structure & AI setup</p>
                </div>
                <div className="text-center">
                  <div className="font-medium">Week 2-3</div>
                  <p className="text-sm text-neutral-600">Draft core sections with AI</p>
                </div>
                <div className="text-center">
                  <div className="font-medium">Week 4-5</div>
                  <p className="text-sm text-neutral-600">Partner coordination & integration</p>
                </div>
                <div className="text-center">
                  <div className="font-medium">Week 6</div>
                  <p className="text-sm text-neutral-600">Review, refinement & submission</p>
                </div>
              </div>
              
              <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-start">
                  <i className="fa-solid fa-lightbulb text-yellow-500 mt-1 mr-3 text-xl"></i>
                  <p className="text-neutral-700">
                    <span className="font-medium">Quick Start Tip:</span> Begin with Engrant at least 6 weeks before your deadline for optimal results. Our users typically complete proposals in 4-6 weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories from Researchers Like You</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                Hear from researchers who secured Horizon Europe funding with Engrant's help.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-accent-light rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Dr. Michael Chen" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">Dr. Michael Chen</h4>
                    <p className="text-neutral-600">Molecular Biology Researcher</p>
                    <p className="text-eublue font-medium">University of Copenhagen</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  "As a first-time coordinator, I was overwhelmed by the Horizon Europe requirements. Engrant's AI helped me structure my proposal perfectly and generate content that resonated with evaluators. We secured €3.2M in funding!"
                </p>
                <div className="flex items-center text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
              
              <div className="bg-accent-light rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg" alt="Prof. Sophia Martinez" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">Prof. Sophia Martinez</h4>
                    <p className="text-neutral-600">Climate Science Department</p>
                    <p className="text-eublue font-medium">Technical University of Madrid</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  "Our grant writer was unavailable, and we had just 3 weeks until the deadline. Engrant helped us create a compelling proposal from scratch. The AI guidance on impact pathways was particularly valuable."
                </p>
                <div className="flex items-center text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
              </div>
              
              <div className="bg-accent-light rounded-xl p-8 shadow-sm">
                <div className="flex items-center mb-6">
                  <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg" alt="Dr. Thomas Weber" className="w-16 h-16 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-lg">Dr. Thomas Weber</h4>
                    <p className="text-neutral-600">Research Manager</p>
                    <p className="text-eublue font-medium">Fraunhofer Institute</p>
                  </div>
                </div>
                <p className="text-neutral-700 mb-4">
                  "The partner coordination features saved us countless hours of back-and-forth emails. Engrant transformed our technical research into EU-friendly language that scored high on all evaluation criteria."
                </p>
                <div className="flex items-center text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-eublue to-eublue-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Research Deserves to Be Funded</h2>
              <p className="text-xl opacity-90 mb-8">
                Don't let proposal writing be the barrier between your brilliant research and the funding it deserves. Start your Horizon Europe proposal today and submit with confidence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <button className="bg-white text-eublue hover:bg-neutral-100 text-lg font-semibold px-8 py-4 rounded-lg transition duration-200">
                  Start Your Proposal Today
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg font-semibold px-8 py-4 rounded-lg transition duration-200">
                  Schedule a Demo
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center">
                  <i className="fa-regular fa-clock text-yellow-400 mr-2"></i>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-shield-check text-yellow-400 mr-2"></i>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-headset text-yellow-400 mr-2"></i>
                  <span>Priority support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-2">
                  <span className="text-eublue font-bold text-xl">E</span>
                </div>
                <span className="text-white font-bold text-2xl">Engrant</span>
              </div>
              <p className="mb-4">
                AI-powered grant writing assistant for researchers. Turn your expertise into funded Horizon Europe projects.
              </p>
              <div className="flex space-x-4">
                <span className="text-neutral-400 hover:text-white cursor-pointer">
                  <i className="fa-brands fa-twitter"></i>
                </span>
                <span className="text-neutral-400 hover:text-white cursor-pointer">
                  <i className="fa-brands fa-linkedin"></i>
                </span>
                <span className="text-neutral-400 hover:text-white cursor-pointer">
                  <i className="fa-brands fa-facebook"></i>
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><span className="hover:text-white cursor-pointer">Features</span></li>
                <li><span className="hover:text-white cursor-pointer">How It Works</span></li>
                <li><span className="hover:text-white cursor-pointer">Pricing</span></li>
                <li><span className="hover:text-white cursor-pointer">Success Stories</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><span className="hover:text-white cursor-pointer">Blog</span></li>
                <li><span className="hover:text-white cursor-pointer">Horizon Europe Guide</span></li>
                <li><span className="hover:text-white cursor-pointer">Webinars</span></li>
                <li><span className="hover:text-white cursor-pointer">Documentation</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><span className="hover:text-white cursor-pointer">About Us</span></li>
                <li><span className="hover:text-white cursor-pointer">Contact</span></li>
                <li><span className="hover:text-white cursor-pointer">Privacy Policy</span></li>
                <li><span className="hover:text-white cursor-pointer">Terms of Service</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2023 Engrant. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="EU Flag" className="h-5 mr-2" />
              <span>Compliant with Horizon Europe guidelines</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HorizonResearchPage; 