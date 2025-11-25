import React, { useState } from 'react';
import { Hero, Section, FeatureCard, Button, Modal } from './UI';
import { ClipboardCheck, Camera, FileText, CheckCircle, AlertTriangle, UserCheck } from 'lucide-react';
import Navbar from '../Navbar';

const Inspection: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        alert("Inspection request received! We will contact you to schedule.");
        handleCloseQuote();
    }, 500);
  };

  return (
    <div className="animate-fade-in">
      {/* === Inspection Page === */}
              <Navbar/>

      <Hero
        title="Certified Equipment Inspections"
        subtitle="Unbiased, detailed, and rapid inspection reports. Know exactly what you are buying or selling with our standardized assessment protocols."
        imageSrc="https://picsum.photos/1600/600?random=3"
        ctaText="Schedule Inspection"
        onCtaClick={handleOpenQuote}
      />

      <Section title="Why Inspections Matter" description="Mitigate risk and ensure fair value with our comprehensive reporting.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
                 <img src="https://picsum.photos/400/300?random=4" alt="Inspector checking engine" className="rounded-lg shadow-md w-full h-48 object-cover" />
                 <img src="https://picsum.photos/400/300?random=5" alt="Undercarriage measurement" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" />
            </div>
            <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">A Deep Dive into Machine Health</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                    Our inspectors don't just kick the tires. We perform rigorous operational tests, fluid analysis, and undercarriage measurements. A typical report includes over 100 data points and 50+ high-resolution photos.
                </p>
                <div className="space-y-4">
                    <div className="flex items-start">
                        <ClipboardCheck className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-slate-900">Standardized Checklists</h4>
                            <p className="text-sm text-slate-500">Consistent evaluation criteria across all equipment categories.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Camera className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-slate-900">Visual Evidence</h4>
                            <p className="text-sm text-slate-500">Detailed photo and video documentation of wear and tear.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FileText className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                        <div>
                            <h4 className="font-semibold text-slate-900">Digital Reports</h4>
                            <p className="text-sm text-slate-500">Instant access to reports via our secure cloud portal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Section>

      <Section title="Quality Assurance Process" bg="gray">
        <div className="relative">
             {/* Timeline Line */}
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200"></div>
             
             <div className="space-y-12">
                 {[
                     { title: "Booking & Dispatch", desc: "Inspector assigned based on equipment type and location expertise.", icon: <UserCheck className="w-5 h-5" />, side: "left" },
                     { title: "On-Site Evaluation", desc: "Visual check, operational testing, and fluid sampling performed.", icon: <CheckCircle className="w-5 h-5" />, side: "right" },
                     { title: "Data Review", desc: "Senior technical leads review raw data for anomalies.", icon: <AlertTriangle className="w-5 h-5" />, side: "left" },
                     { title: "Report Publication", desc: "Final report generated with valuation estimates (optional).", icon: <FileText className="w-5 h-5" />, side: "right" },
                 ].map((step, idx) => (
                     <div key={idx} className={`flex items-center justify-between ${step.side === 'right' ? 'flex-row-reverse' : ''}`}>
                         <div className="w-full md:w-5/12"></div>
                         <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-lg border-4 border-white z-10">
                             {step.icon}
                         </div>
                         <div className="w-full md:w-5/12 bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                             <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                             <p className="text-slate-600 text-sm">{step.desc}</p>
                         </div>
                     </div>
                 ))}
             </div>
        </div>
      </Section>

      <Section title="Evaluator Highlights">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-xl bg-slate-50">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src="https://picsum.photos/200/200?random=20" alt="Inspector" />
                  </div>
                  <h4 className="font-bold text-lg">Mike T.</h4>
                  <p className="text-blue-600 text-sm mb-4">Senior Heavy Machinery Specialist</p>
                  <p className="text-slate-500 italic">"I've inspected over 2,000 excavators. I know exactly where stress fractures hide."</p>
              </div>
              <div className="text-center p-6 border rounded-xl bg-slate-50">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src="https://picsum.photos/200/200?random=21" alt="Inspector" />
                  </div>
                  <h4 className="font-bold text-lg">Sarah L.</h4>
                  <p className="text-blue-600 text-sm mb-4">Cranes & Lifting Equipment</p>
                  <p className="text-slate-500 italic">"Safety is the priority. My reports ensure compliance with OSHA and ISO standards."</p>
              </div>
              <div className="text-center p-6 border rounded-xl bg-slate-50">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src="https://picsum.photos/200/200?random=22" alt="Inspector" />
                  </div>
                  <h4 className="font-bold text-lg">David R.</h4>
                  <p className="text-blue-600 text-sm mb-4">Trucks & Fleet</p>
                  <p className="text-slate-500 italic">"Engine diagnostics tell the real story. We don't guess, we measure."</p>
              </div>
          </div>
      </Section>

      <div className="bg-slate-900 py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Don't risk a bad deal.</h2>
          <p className="text-slate-400 mb-8">Get the facts before you sign the check.</p>
          <Button size="lg" className="w-full sm:w-auto" onClick={handleOpenQuote}>Request a Sample Report</Button>
        </div>
      </div>

      <Modal isOpen={isQuoteOpen} onClose={handleCloseQuote} title="Request Inspection">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
              <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
              <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Doe" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input required type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@company.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Equipment Details</label>
            <textarea required rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Year, Make, Model, Serial # (if available)"></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Asset Location</label>
              <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="City, State" />
            </div>
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input required type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full justify-center">Submit Request</Button>
          </div>
          <p className="text-xs text-slate-400 text-center mt-2">
            Standard response time is under 4 hours during business days.
          </p>
        </form>
      </Modal>

    </div>
  );
};

export default Inspection;