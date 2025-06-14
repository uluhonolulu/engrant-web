import React from 'react';
import { Link } from 'gatsby';
import { CheckCircle2, ShieldCheck, UploadCloud, Target, TrendingUp, FileText, Cog, Users, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart as RechartsBarChart, PieChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { ClerkProvider } from '@clerk/clerk-react';
import WaitingList from '../components/WaitingList';

const NgoDashPage = () => {
  const painPoints = [
    { icon: <FileText className="w-12 h-12 mx-auto text-primary-500 mb-4" />, title: "Scrambling for numbers", text: "every time a grant application is due" },
    { icon: <Cog className="w-12 h-12 mx-auto text-primary-500 mb-4" />, title: "Counting papers and records", text: "at year-end for reports" },
    { icon: <Users className="w-12 h-12 mx-auto text-primary-500 mb-4" />, title: "Managing different requirements", text: "for 5+ funding sources" },
  ];

  const features = [
      { icon: <UploadCloud />, title: "Smart Setup", description: "Upload grants, get instant dashboards." },
      { icon: <TrendingUp />, title: "Simple Entry", description: "Just numbers, no duplicate data entry." },
      { icon: <Target />, title: "Real-time Progress", description: "See exactly where each grant stands." },
      { icon: <FileText />, title: "Instant Reports", description: "Answer any funder question in seconds." },
      { icon: <BarChart />, title: "Multi-grant Tracking", description: "Manage 10+ grants without double-counting." },
      { icon: <Cog />, title: "Plain English Customization", description: "Just tell us what to change." },
  ];

  const faqs = [
    { q: "Do I need to set up the dashboard myself?", a: "No! The dashboard sets up automatically from your grant documents. Adjust with plain English, or we'll set it up for you." },
    { q: "What if grant requirements change mid-year?", a: "Just upload the new document and your dashboard adjusts automatically." },
    { q: "Is this another database to maintain?", a: "This is your command center, not another database. Enter key numbers weekly (2 minutes) and save hours on every report." },
    { q: "Can every nonprofit use this?", a: "Yes! Whether you have 2 grants or 20, 4 staff or 400, if you report to funders, this is for you." },
  ];

  const chartData = [
      { name: 'Grant A', progress: 75, amt: 100 },
      { name: 'Grant B', progress: 50, amt: 100 },
      { name: 'Grant C', progress: 90, amt: 100 },
      { name: 'Grant D', progress: 25, amt: 100 },
  ];

  return (
    <div className="bg-white text-neutral-700 font-sans">
      {/* Navigation */}
      <nav className="p-6 container mx-auto flex justify-between items-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center text-primary-600 font-bold text-xl">
          <motion.div whileHover={{ rotate: 360, scale: 1.2 }}>
            <span className="text-green-500 mr-2 text-2xl">💡</span>
          </motion.div>
          Engrant
        </div>
        <div>
          <a href="#waitlist" className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors font-semibold shadow-md hover:shadow-lg">
            Join the Waiting List
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="font-semibold text-primary-600">Be first to access • 50% lifetime discount for early adopters</p>
            <h1 className="text-5xl md:text-6xl font-bold text-neutral-800 mt-4 mb-6">
              Never Count Papers for Grant Reports Again
            </h1>
            <p className="text-xl md:text-2xl text-neutral-600 mb-8">
              Track grant outcomes in real-time with dashboards that build themselves from your grant agreements
            </p>
            <a href="#waitlist" className="bg-primary-600 text-white px-10 py-4 rounded-full hover:bg-primary-700 transition-colors text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105">
              Join the Waiting List
            </a>
          </motion.div>
        </div>
      </header>

      {/* Pain Point Section */}
      <section className="py-20 bg-neutral-50 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Still Tracking Grant Outcomes in Spreadsheets?</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-16">You're not alone. Nonprofits waste countless hours on manual reporting. There's a better way.</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {painPoints.map((point, index) => (
              <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                {point.icon}
                <h3 className="text-xl font-semibold text-neutral-800">{point.title}</h3>
                <p className="text-neutral-600 mt-2">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">How It Works in 3 Simple Steps</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
            <div className="space-y-12">
                 {[
                    { title: "Upload Your Grant PDF", description: "Upload your grant agreement PDF. That's it." },
                    { title: "Get an Instant Dashboard", description: "Our AI reads the grant and creates your custom tracking dashboard automatically." },
                    { title: "Track Progress Weekly", description: "Your team enters key numbers in under 2 minutes/week. You see progress instantly." }
                ].map((step, index) => (
                    <motion.div key={step.title} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: index * 0.3 }} className="flex items-start space-x-4">
                        <div className="shrink-0 bg-primary-100 text-primary-600 rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">{index + 1}</div>
                        <div>
                            <h3 className="text-xl font-semibold text-neutral-800">{step.title}</h3>
                            <p className="text-neutral-600 mt-1">{step.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
              <div className="bg-white p-6 border rounded-2xl shadow-2xl">
                <h3 className="font-bold text-lg mb-4 text-neutral-800">Mock Dashboard Preview</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <RechartsBarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <RechartsBarChart dataKey="progress" fill="#8884d8" name="Progress (%)" />
                    </RechartsBarChart>
                </ResponsiveContainer>
                <img 
                  src="https://placehold.co/800x200/F3F4F6/1F2937?text=Demographics+Served+(Pie+Chart)"
                  alt="Modern dashboard interface showing multiple grant progress bars, pie charts for demographics served, and a weekly data entry modal - style: clean, professional, light background with blue and green accents"
                  className="w-full h-full object-cover rounded-lg mt-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 bg-neutral-50 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-neutral-800 mb-16">Everything You Need, Nothing You Don't</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-start space-x-4">
                <div className="shrink-0 bg-green-100 text-green-600 rounded-lg h-12 w-12 flex items-center justify-center">
                  {React.cloneElement(feature.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-800">{feature.title}</h3>
                  <p className="text-neutral-600 mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Adopter Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-primary-600 text-white rounded-2xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center overflow-hidden">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <h2 className="text-4xl font-bold mb-4">Join the Waiting List for 50% Off Forever</h2>
              <p className="text-primary-200 text-lg mb-6">
                Early adopters are partners in our mission. We're offering a lifetime discount as a thank you for your trust and feedback.
              </p>
              <div className="bg-white/20 rounded-lg p-6">
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">$100</span>
                  <span className="ml-2 text-xl text-primary-200">/month</span>
                </div>
                <div className="text-lg text-primary-100 line-through mt-2">Regular price: $200/month</div>
                <ul className="space-y-2 mt-4 text-primary-50">
                  <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-green-300" /> Unlimited users and grants</li>
                  <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-green-300" /> Lifetime 50% discount</li>
                </ul>
              </div>
              <p className="text-sm text-primary-200 mt-6">Need an additional nonprofit discount? Just ask.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="mt-8 md:mt-0">
               <img 
                  src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Before+%26+After"
                  alt="Split screen showing before and after - left side: person surrounded by stacks of paper looking stressed, right side: same person relaxed at computer with dashboard on screen - style: friendly illustration, diverse representation"
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust/Security Section */}
      <section className="py-20 bg-neutral-50 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <ShieldCheck className="w-16 h-16 mx-auto text-green-500 mb-4" />
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">Your Data is Safe</h2>
          <p className="text-lg text-neutral-600">
            We are built on enterprise-grade security and privacy principles.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-neutral-800">No Personal Client Information</h3>
              <p className="text-neutral-600 text-sm mt-2">We only track aggregate numbers required by funders, never sensitive client data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-neutral-800">Secure Cloud Storage</h3>
              <p className="text-neutral-600 text-sm mt-2">All data is encrypted in transit and at rest using industry-standard protocols.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-neutral-800">Export Your Data Anytime</h3>
              <p className="text-neutral-600 text-sm mt-2">You own your data. Export it in common formats whenever you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center text-neutral-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                    <details className="group">
                        <summary className="flex justify-between items-center font-semibold cursor-pointer text-lg text-neutral-800 list-none">
                            {faq.q}
                            <span className="transition-transform transform group-open:rotate-180">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </span>
                        </summary>
                        <p className="text-neutral-600 mt-2">{faq.a}</p>
                    </details>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waiting List Section */}
      <section id="waitlist" className="py-20 bg-neutral-800 text-white px-4">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-neutral-300 text-lg mb-8">Get early access and a lifetime 50% discount. We're launching soon.</p>
          
          <div className="max-w-md mx-auto">
            <ClerkProvider publishableKey={process.env.GATSBY_CLERK_PUBLISHABLE_KEY}>
              <WaitingList />
            </ClerkProvider>
          </div>

          <p className="text-sm text-neutral-400 mt-8">We're launching soon. Waitlist members get first access.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-400 py-12 px-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Engrant. All rights reserved.</p>
          <div className="mt-4">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NgoDashPage;

export const Head = () => <title>Engrant for Nonprofits - Grant Tracking Simplified</title>; 