  import React, { useState } from 'react';
  import { Hero, Section, FeatureCard, Button, Modal } from './UI';
  import { Recycle, DollarSign, Truck, FileCheck, RefreshCw, BarChart, AlertTriangle } from 'lucide-react';
import Navbar from '../Navbar';

  const Disposition: React.FC = () => {
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);

    const handleOpenQuote = () => setIsQuoteOpen(true);
    const handleCloseQuote = () => setIsQuoteOpen(false);
    
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setTimeout(() => {
          alert("Disposition request submitted. A recovery specialist will review your assets.");
          handleCloseQuote();
      }, 500);
    };

    return (
      <div className="animate-fade-in">
        {/* === Disposition Page === */}
        <Navbar/>

        <Hero
          title="Strategic Asset Disposition"
          subtitle="Maximize recovery value from surplus assets. We offer environmentally compliant, profitable solutions for end-of-life or surplus equipment."
          imageSrc="https://picsum.photos/1600/600?random=6"
          ctaText="Start Recovery"
          onCtaClick={handleOpenQuote}
        />

        <Section title="The Asset Recovery Process" description="Turn idle machinery into working capital securely and efficiently.">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-white">
            <div className="bg-[#00041F] p-6 rounded-xl shadow-lg border-t-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3 flex items-center">
                <RefreshCw className="w-5 h-5 mr-2 text-blue-600" /> Assessment
              </h3>
              <p className="text-[#A7ADBE]">
                We catalog your surplus inventory and determine the best disposition channel: resale, refurbishment, or recycling.
              </p>
            </div>
            <div className="bg-[#00041F] p-6 rounded-xl shadow-lg border-t-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 flex items-center text-white">
                <Recycle className="w-5 h-5 mr-2 text-green-600" /> Compliance
              </h3>
              <p className="text-[#A7ADBE]">
                Hazardous fluids removal, data destruction, and e-waste compliance are handled according to EPA regulations.
              </p>
            </div>
            <div className="bg-[#00041F]  p-6 rounded-xl shadow-lg border-t-4 border-purple-600">
              <h3 className="text-xl font-bold mb-3 flex items-center text-white">
                <DollarSign className="w-5 h-5 mr-2 text-purple-600" /> Liquidation
              </h3>
              <p className="text-[#A7ADBE]">
                Assets are sold via private treaty, auction, or scrap markets to maximize return on investment.
              </p>
            </div>
          </div>

          <div className="bg-[#00041F] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold tracking-wide text-white mb-4">Case Study: Construction Fleet Liquidation</h3>
              <p className="text-[#A7ADBE] mb-6">
                A major infrastructure firm needed to offload 50+ units of aging earthmoving equipment. Our team managed the logistics, refurbishment, and auctioning process.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className=" p-4 rounded-lg shadow-sm space-y-1">
                  <div className="text-3xl font-bold text-blue-600">120%</div>
                  <div className="text-sm text-[#A7ADBE]">Recovery vs Book Value</div>
                </div>
                <div className=" p-4 rounded-lg shadow-sm space-y-1">
                  <div className="text-3xl font-bold text-blue-600">30 Days</div>
                  <div className="text-sm text-[#A7ADBE]">Project Timeline</div>
                </div>
              </div>
            </div>
            <div className="flex-1 h-64 w-full">
              <img src="https://picsum.photos/600/400?random=7" alt="Fleet of trucks" className="w-full h-full object-cover rounded-xl shadow-md" />
            </div>
          </div>
        </Section>

        <Section title="Resale & Recycling Workflow" bg="gray">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Truck className="w-8 h-8" />}
              title="Logistics & Removal"
              description="We arrange heavy haul transport and site clearance."
            />
            <FeatureCard 
              icon={<FileCheck className="w-8 h-8" />}
              title="Title Transfer"
              description="Handling all lien releases and ownership documentation."
            />
            <FeatureCard 
              icon={<BarChart className="w-8 h-8" />}
              title="Multi-Channel Sales"
              description="Listing on global marketplaces and exclusive networks."
            />
            <FeatureCard 
              icon={<Recycle className="w-8 h-8" />}
              title="Green Disposal"
              description="Certified recycling for non-salvageable components."
            />
          </div>
        </Section>

      
        <div className="bg-[#00041F] py-16 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Turn Liability into Liquidity</h2>
          <button type='button' className="bg-blue-700 text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-blue-800 transition-colors duration-300" onClick={handleOpenQuote}>Get a Free Valuation</button>
        </div>

        <Modal isOpen={isQuoteOpen} onClose={handleCloseQuote} title="Asset Disposition Inquiry">
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
              <label className="block text-sm font-medium text-slate-700 mb-1">List of Assets / Inventory</label>
              <textarea required rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Please list major items or provide a summary of the lot..."></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location of Assets</label>
                <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="City, State" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Company Name" />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full justify-center">Submit for Valuation</Button>
            </div>
            <p className="text-xs text-slate-400 text-center mt-2">
              Our team typically provides preliminary valuations within 2 business days.
            </p>
          </form>
        </Modal>

      </div>
    );
  };

  export default Disposition;