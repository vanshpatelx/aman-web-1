import React, { useState } from 'react';
import { Hero, Section, FeatureCard, Button, Modal } from './UI';
import { Users, TrendingUp, Handshake, Search, ChevronRight, Check } from 'lucide-react';
import Navbar from '../Navbar';
import { MarqueeSection } from '../MarqueeSection';

const Brokering: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      alert("Inquiry submitted successfully! A broker will contact you shortly.");
      handleCloseQuote();
    }, 500);
  };

  return (
    <div className="animate-fade-in">
      <Navbar />

      <Hero
        title="Global Equipment Brokering"
        subtitle="Connect with a worldwide network of buyers and sellers. We simplify the complexities of industrial equipment trading with verified listings and secure transactions."
        imageSrc="https://picsum.photos/1600/600?random=1"
        ctaText="Request Access"
        onCtaClick={handleOpenQuote}
      />

      <Section title="Marketplace Overview" description="Access thousands of verified industrial assets across construction, mining, and manufacturing sectors.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-[#A7ADBE] text-lg">
            <p>
              Our brokering platform bridges the gap between surplus equipment owners and businesses in need of reliable machinery. We handle the heavy lifting of negotiations, verification, and documentation.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <img src="check.svg" alt="" />
                <span><strong className='font-semibold'>30,000+</strong> Active buyers in our database.</span>
              </li>
              <li className="flex items-center gap-4">
                <img src="check.svg" alt="" />
                <span><strong className='font-semibold'>$500M+</strong> In completed equipment transactions.</span>
              </li>
              <li className="flex items-center gap-4">
                <img src="check.svg" alt="" />
                <span>Transparent fee structures with no hidden costs.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img src="https://picsum.photos/800/600?random=2" alt="Equipment Marketplace" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <Section title="Sourcing Workflow" description="How we connect you with the right machinery.">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-0">
          {[
            { step: '01', title: 'Request', icon: <Search className="w-6 h-6" />, desc: 'Submit your equipment requirements or list your asset for sale.' },
            { step: '02', title: 'Match', icon: <Users className="w-6 h-6" />, desc: 'Our AI-driven engine matches assets with qualified buyers instantly.' },
            { step: '03', title: 'Verify', icon: <Check className="w-6 h-6" />, desc: 'Inspectors verify condition and documentation before proceeding.' },
            { step: '04', title: 'Close', icon: <Handshake className="w-6 h-6" />, desc: 'Secure payment processing and logistics coordination finalize the deal.' },
          ].map((item, idx) => (
            <div key={idx} className="relative p-6 bg-[#00041F] rounded-xl shadow-sm border border-[#000730]">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-lg shadow-lg">
                {item.step}
              </span>
              <div className="mt-4 mb-4 text-white bg-blue-600 w-fit p-2 rounded-full">{item.icon}</div>
              <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-[#A7ADBE] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why Choose Our Brokerage">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <FeatureCard
            icon={<img alt='people-icon' src='./people.svg' className='w-10 h-10' />}
            title="Global Reach"
            description="Access markets in over 50 countries. We handle cross-border trade complexities, including customs and compliance."
          />
          <FeatureCard
            icon={<img alt='fire-icon' src='./fire.svg' className='w-10 h-10' />}
            title="Fraud Protection"
            description="Every transaction is secured via escrow services. We verify every buyer and seller to prevent fraud."
          />
          <FeatureCard
            icon={<img alt='connection-icon' src='./connection.svg' className='w-10 h-10' />}
            title="Market Intelligence"
            description="Leverage our proprietary data to price your equipment competitively or ensure you aren't overpaying."
          />
        </div>
      </Section>

      <div className="py-16 bg-[#00020F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 id="heading" className="text-lg font-semibold text-[#A7ADBE] uppercase tracking-wider ">Trusted by Industry Leaders</h3>
          <MarqueeSection />
        </div>
      </div>

      <div className="bg-[#00041F] py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Ready to Buy or Sell?</h2>
          <p className="text-xl text-[#A7ADBE] mb-8">Join thousands of businesses optimizing their asset management today.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button type='button' onClick={handleOpenQuote} className="bg-blue-700 text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap text-center w-full sm:w-auto">
              Browse Inventory
            </button>
            <button type='button' onClick={handleOpenQuote} className="border border-white text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 shadow-lg whitespace-nowrap w-full sm:w-auto justify-center">
              Contact a Broker
            </button>

          </div>
        </div>
      </div>

      <Modal isOpen={isQuoteOpen} onClose={handleCloseQuote} title="Brokerage Inquiry">
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
            <label className="block text-sm font-medium text-slate-700 mb-1">Inquiry Type</label>
            <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
              <option>I want to Buy Equipment</option>
              <option>I want to Sell Equipment</option>
              <option>General Inquiry</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Equipment / Requirements</label>
            <textarea required rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Describe the equipment you are looking for or selling..."></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Company</label>
              <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Company Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full justify-center">Submit Inquiry</Button>
          </div>
          <p className="text-xs text-slate-400 text-center mt-2">
            By submitting, you agree to share your contact details with our brokerage team.
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default Brokering;