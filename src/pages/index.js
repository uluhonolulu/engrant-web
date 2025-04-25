import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <StaticImage 
            src="../images/hero-bg.jpg" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Navigation */}
          <nav className="p-6">
            <div className="container mx-auto">
              <div className="flex items-center text-primary-600 font-bold text-xl">
                <span className="text-red-500 mr-2">💡</span>
                Engrant
              </div>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="container mx-auto px-6 pt-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
                No more sleepless nights before proposal submission deadline
      </h1>
              <p className="text-xl text-neutral-600 mb-8">
                Transform Fragmented Partner Inputs into Fund-Ready European Grant Proposals
              </p>
              <button className="bg-primary-500 text-white px-8 py-3 rounded hover:bg-primary-600 transition-colors">
                Get early access
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-800 mb-16">
            Streamline Your EU Grant Proposals
          </h2>
          <p className="text-center text-neutral-600 max-w-3xl mx-auto mb-16">
            Engrant transforms disjointed partner contributions into cohesive, fund-ready European grant proposals through collaborative proposal engineering. Our platform ensures that sensitive data is protected with GDPR-compliant encryption, allowing your team to focus on what matters most - effective proposals and successful funding.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 rounded-lg">
              <div className="h-48 mb-6 bg-neutral-100 rounded-lg overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/e9ecef/495057?text=Team+Meeting" 
                  alt="Collaborative Proposal Creation"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                Collaborative Proposal Creation
              </h3>
              <p className="text-neutral-600">
                Our platform facilitates real-time collaboration among partners, ensuring that each contribution is seamlessly integrated into the proposal. This reduces confusion and fosters teamwork, leading to more successful grant submissions.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="h-48 mb-6 bg-neutral-100 rounded-lg overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/e9ecef/495057?text=Security" 
                  alt="GDPR-Compliant Security"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                GDPR-Compliant Security
              </h3>
              <p className="text-neutral-600">
                Engrant is committed to data protection. Our platform uses GDPR-compliant encryption, giving you peace of mind that sensitive information is secure while you work on grant proposals.
              </p>
            </div>

            <div className="p-6 rounded-lg">
              <div className="h-48 mb-6 bg-neutral-100 rounded-lg overflow-hidden">
                <img 
                  src="https://placehold.co/600x400/e9ecef/495057?text=Management" 
                  alt="Easy Proposal Management"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                Easy Proposal Management
              </h3>
              <p className="text-neutral-600">
                With Engrant, managing multiple proposals becomes effortless. Our user-friendly interface allows you to track progress, assign tasks, and manage timelines, ensuring that your team stays on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Engrant</h3>
              <p className="text-primary-100">
                Transforming fragmented inputs into successful proposals.
              </p>
            </div>
            <div className="grid grid-cols-2">
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/" className="hover:text-primary-200">Home</a></li>
                  <li><a href="/about" className="hover:text-primary-200">About</a></li>
                  <li><a href="/services" className="hover:text-primary-200">Services</a></li>
                  <li><a href="/contact" className="hover:text-primary-200">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><Link to="/privacy-policy" className="hover:text-primary-200">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Engrant - EU Grant Proposal Platform</title>
