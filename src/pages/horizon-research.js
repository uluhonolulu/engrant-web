import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Check, Play, X, Clock, Shield, Headphones, Lightbulb, ArrowRight, Users, Robot, TrendingUp } from 'lucide-react';
import logo from '../images/Logo_transparent_bg.png';

const HorizonResearchPage = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  const featureDetails = {
    aiWriting: {
      title: "AI Writing Assistant",
      description: "Our AI combines structural guidance with content generation. It breaks down complex Horizon Europe requirements into manageable steps, then helps you write each section using language patterns from successful proposals. You provide the research expertise, we provide the grant writing expertise."
    },
    qualityControl: {
      title: "Smart Quality Control", 
      description: "Every section you write gets instantly assessed against key Horizon Europe evaluation factors: scientific rigor, innovation potential, feasibility, and impact pathways. Our AI identifies gaps, suggests improvements, and ensures your proposal addresses all evaluator expectations before submission."
    },
    partnerCoordination: {
      title: "Partner Coordination Hub",
      description: "Stop chasing partners with endless emails. Our system identifies exactly what information you need from each partner, generates personalized forms and shared documents, and automatically incorporates their responses into the correct proposal sections. Partners get clear guidance, you get properly formatted content."
    }
  };
  return (
    <>
      <Helmet>
        <title>Horizon Europe Proposal Writing | AI Assistant for Researchers | Engrant</title>
        <meta name="description" content="Transform your research into funded Horizon Europe projects with AI writing assistance in weeks, not months. Step-by-step guidance from concept to submission." />
      </Helmet>
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

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .modal-content {
          background: white;
          border-radius: 0.75rem;
          padding: 2rem;
          max-width: 500px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          position: relative;
        }

        .modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6b7280;
          padding: 0.25rem;
          border-radius: 0.25rem;
          transition: color 0.2s;
        }

        .modal-close:hover {
          color: #374151;
        }

        .video-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #6b7280;
          padding: 0.25rem;
          border-radius: 0.25rem;
          transition: color 0.2s;
        }

        .video-modal-close:hover {
          color: #374151;
        }

        .video-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .video-modal-content {
          background: white;
          border-radius: 0.75rem;
          padding: 2rem;
          max-width: 800px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .video-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          margin-bottom: 1rem;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 0.5rem;
        }
      `}</style>

      {/* Feature Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setActiveModal(null)}
              aria-label="Close modal"
            >
              ×
            </button>
            <div className="text-center mb-6">
              <div className="text-eublue mb-4">
                <i className={`fa-solid ${
                  activeModal === 'aiWriting' ? 'fa-robot' : 
                  activeModal === 'qualityControl' ? 'fa-chart-line' : 
                  'fa-users'
                } text-4xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                {featureDetails[activeModal].title}
              </h3>
            </div>
            <p className="text-neutral-700 leading-relaxed">
              {featureDetails[activeModal].description}
            </p>
            <div className="mt-8 text-center">
              <button 
                className="bg-eublue hover:bg-eublue-dark text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
                onClick={() => setActiveModal(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className="video-modal-overlay" onClick={() => setShowVideoModal(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                         <button 
               className="video-modal-close" 
               onClick={() => setShowVideoModal(false)}
               aria-label="Close video modal"
             >
               ×
             </button>
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                See How Engrant Works
              </h3>
              <p className="text-neutral-600">
                Watch our quick demo to see how AI-powered proposal writing works
              </p>
            </div>
                         <div className="video-container">
               {/* WowTo embed - using their official embed code */}
               <iframe 
                 src="https://app.wowto.ai/embed/M4fTiHwNN&locale=first"
                 width="100%"
                 height="100%"
                 frameBorder="0"
                 sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
                 allowFullScreen
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 title="Engrant Demo Video"
               />
             </div>
                         <div className="text-center mt-6">
               <button 
                 className="bg-eublue hover:bg-eublue-dark text-white font-semibold px-6 py-3 rounded-lg transition duration-200 cursor-pointer"
                 onClick={() => setShowVideoModal(false)}
               >
                 Close
               </button>
             </div>
          </div>
        </div>
      )}

             <div className="bg-white text-neutral-700 font-sans min-h-screen flex flex-col">
         {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen relative overflow-hidden flex items-center">
          <div className="absolute inset-0 bg-[url('/finished.png')] bg-center bg-cover" style={{ backgroundPosition: 'center 70%' }}></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
                                            <div className="bg-white/45 backdrop-blur-sm rounded-2xl p-8 mb-8 max-w-6xl mx-auto relative">
                 <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 leading-tight">
                   Turn Research Excellence Into Funded Projects
                 </h1>
                 <p className="text-xl text-neutral-600 mb-8">
                   No grant writer? No problem. Create winning Horizon Europe proposals with AI assistance tailored for researchers. Go from concept to submission in weeks, not months.
                 </p>
                 <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                   <a href="https://app.engrant.eu/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-800 to-blue-600 hover:from-blue-900 hover:to-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition duration-200 text-center inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                     Start Your Proposal Today
                   </a>
                                       <button 
                      className="bg-white/90 border border-neutral-300 hover:border-blue-600 text-neutral-700 hover:text-blue-600 text-lg font-semibold px-8 py-4 rounded-full transition duration-200 text-center flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      onClick={() => setShowVideoModal(true)}
                    >
                      <Play className="w-4 h-4 mr-2" /> See How It Works
                    </button>
                 </div>
                                   <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="w-4 h-4 text-green-800" />
                      </div>
                      <span className="ml-2 text-neutral-700">No learning curve</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-100 rounded-full p-1">
                        <Check className="w-4 h-4 text-green-800" />
                      </div>
                      <span className="ml-2 text-neutral-700">14-day free trial</span>
                    </div>
                  </div>
                 
                 {/* Logo in bottom right corner */}
                 <div className="absolute bottom-4 right-4">
                   <img src={logo} alt="Engrant Logo" className="h-6 w-auto" />
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
                  <i className="fa-solid fa-robot text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Writing Assistant</h3>
                <p className="text-neutral-600 mb-4">
                  Get step-by-step guidance through every section with AI that generates content in evaluator-friendly "EU funding language" based on your research.
                </p>
                <span 
                  className="text-eublue font-medium inline-flex items-center cursor-pointer hover:text-eublue-dark transition duration-200"
                  onClick={() => setActiveModal('aiWriting')}
                >
                  Learn more <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </span>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
                <div className="text-eublue mb-4">
                  <i className="fa-solid fa-chart-line text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Quality Control</h3>
                <p className="text-neutral-600 mb-4">
                  Get real-time evaluation against Horizon Europe criteria with specific improvement suggestions to maximize your proposal score.
                </p>
                <span 
                  className="text-eublue font-medium inline-flex items-center cursor-pointer hover:text-eublue-dark transition duration-200"
                  onClick={() => setActiveModal('qualityControl')}
                >
                  Learn more <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </span>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-300">
                <div className="text-eublue mb-4">
                  <i className="fa-solid fa-users text-3xl"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Partner Coordination Hub</h3>
                <p className="text-neutral-600 mb-4">
                  Streamline consortium management with automated partner input collection and smart integration of contributions into your proposal.
                </p>
                <span 
                  className="text-eublue font-medium inline-flex items-center cursor-pointer hover:text-eublue-dark transition duration-200"
                  onClick={() => setActiveModal('partnerCoordination')}
                >
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
                    <p className="text-sm text-neutral-600">Consortium building & idea refinement</p>
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

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
              <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
                Get started with AI-powered Horizon Europe proposal writing. No hidden fees, no surprises.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 p-8 relative overflow-hidden">
                {/* Discount Badge */}
                <div className="absolute top-0 right-0 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-bl-lg font-semibold text-sm">
                  50% OFF
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">Proposal Writing Assistant</h3>
                  <p className="text-neutral-600 mb-6">Complete your Horizon Europe proposal with AI guidance</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <span className="text-3xl font-bold text-eublue">€200</span>
                      <span className="text-lg text-neutral-500 line-through">€400</span>
                    </div>
                    <p className="text-sm text-neutral-500">Limited time offer until August 15th</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-green-600 text-xs"></i>
                    </div>
                    <span className="text-neutral-700">AI-powered writing assistance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-green-600 text-xs"></i>
                    </div>
                    <span className="text-neutral-700">Step-by-step guidance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-green-600 text-xs"></i>
                    </div>
                    <span className="text-neutral-700">Partner coordination tools</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-green-600 text-xs"></i>
                    </div>
                    <span className="text-neutral-700">Real-time quality evaluation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <i className="fa-solid fa-check text-green-600 text-xs"></i>
                    </div>
                    <span className="text-neutral-700">14-day free trial</span>
                  </div>
                </div>
                
                <a 
                  href="https://app.engrant.eu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-eublue hover:bg-eublue-dark text-white text-lg font-semibold py-4 px-6 rounded-lg transition duration-200 text-center"
                >
                  Start Your Proposal Today
                </a>
                
                <p className="text-xs text-neutral-500 text-center mt-4">
                  No credit card required • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* CTA Section */}
        <section className="py-20" style={{background: 'linear-gradient(135deg, #004494 0%, #003366 100%)'}}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Your Research Deserves to Be Funded</h2>
              <p className="text-xl text-white/90 mb-8">
                Don't let proposal writing be the barrier between your brilliant research and the funding it deserves. Start your Horizon Europe proposal today and submit with confidence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <a href="https://app.engrant.eu/" target="_blank" rel="noopener noreferrer" className="bg-white text-eublue hover:bg-neutral-100 text-lg font-semibold px-8 py-4 rounded-lg transition duration-200 inline-block text-center">
                  Start Your Proposal Today
                </a>
                <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg font-semibold px-8 py-4 rounded-lg transition duration-200">
                  Schedule a Demo
                </button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center text-white">
                  <i className="fa-regular fa-clock text-yellow-400 mr-2"></i>
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center text-white">
                  <i className="fa-solid fa-shield-check text-yellow-400 mr-2"></i>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center text-white">
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
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mr-2">
                  <span className="text-eublue font-bold text-xl">E</span>
                </div>
                <span className="text-white font-bold text-2xl">Engrant</span>
              </div>
              <p className="text-neutral-400 mb-4 max-w-md">
                AI-powered grant writing assistant for researchers. Turn your expertise into funded Horizon Europe projects.
              </p>
            </div>
            
            <div className="flex items-center">
              <a 
                href="https://www.linkedin.com/company/engrant/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500">© 2025 Engrant. All rights reserved.</p>
            <div className="flex items-center mt-4 md:mt-0">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg" alt="EU Flag" className="h-5 mr-2" />
              <span className="text-neutral-500">Compliant with Horizon Europe guidelines</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HorizonResearchPage; 