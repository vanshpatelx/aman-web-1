import React, { useState } from 'react';
import { Hero, Section, FeatureCard, Button, Modal } from './UI';
import { Globe, Users, ShieldCheck, TrendingUp, Handshake, Search } from 'lucide-react';
import Navbar from '../Navbar';

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
        <Navbar/>
      {/* === Equipment Brokering Page === */}
      
      <Hero
        title="Global Equipment Brokering"
        subtitle="Connect with a worldwide network of buyers and sellers. We simplify the complexities of industrial equipment trading with verified listings and secure transactions."
        imageSrc="https://picsum.photos/1600/600?random=1"
        ctaText="Request Access"
        onCtaClick={handleOpenQuote}
      />

      <Section title="Marketplace Overview" description="Access thousands of verified industrial assets across construction, mining, and manufacturing sectors.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-slate-600 text-lg">
            <p>
              Our brokering platform bridges the gap between surplus equipment owners and businesses in need of reliable machinery. We handle the heavy lifting of negotiations, verification, and documentation.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 mr-3">✓</div>
                <span><strong>30,000+</strong> Active buyers in our database.</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 mr-3">✓</div>
                <span><strong>$500M+</strong> In completed equipment transactions.</span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mt-1 mr-3">✓</div>
                <span>Transparent fee structures with no hidden costs.</span>
              </li>
            </ul>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <img src="https://picsum.photos/800/600?random=2" alt="Equipment Marketplace" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      <Section title="Sourcing Workflow" description="How we connect you with the right machinery." bg="gray">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Request', icon: <Search className="w-6 h-6" />, desc: 'Submit your equipment requirements or list your asset for sale.' },
            { step: '02', title: 'Match', icon: <Users className="w-6 h-6" />, desc: 'Our AI-driven engine matches assets with qualified buyers instantly.' },
            { step: '03', title: 'Verify', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Inspectors verify condition and documentation before proceeding.' },
            { step: '04', title: 'Close', icon: <Handshake className="w-6 h-6" />, desc: 'Secure payment processing and logistics coordination finalize the deal.' },
          ].map((item, idx) => (
            <div key={idx} className="relative p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <span className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {item.step}
              </span>
              <div className="mt-4 mb-4 text-blue-600">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Why Choose Our Brokerage">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Globe className="w-6 h-6" />}
            title="Global Reach"
            description="Access markets in over 50 countries. We handle cross-border trade complexities, including customs and compliance."
          />
          <FeatureCard 
            icon={<ShieldCheck className="w-6 h-6" />}
            title="Fraud Protection"
            description="Every transaction is secured via escrow services. We verify every buyer and seller to prevent fraud."
          />
          <FeatureCard 
            icon={<TrendingUp className="w-6 h-6" />}
            title="Market Intelligence"
            description="Leverage our proprietary data to price your equipment competitively or ensure you aren't overpaying."
          />
        </div>
      </Section>

      <div className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-semibold text-slate-400 uppercase tracking-wider mb-8">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale">
            {[1, 2, 3, 4, 5].map((i) => (
              <img key={i} src={`https://picsum.photos/150/60?random=${i + 10}`} alt="Partner Logo" className="h-12 object-contain" />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Buy or Sell?</h2>
          <p className="text-xl text-blue-100 mb-8">Join thousands of businesses optimizing their asset management today.</p>
          <div className="flex justify-center gap-4">
            <Button variant="secondary" size="lg" className="!bg-white !text-blue-600 hover:!bg-blue-50" onClick={handleOpenQuote}>Browse Inventory</Button>
            <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-blue-700" onClick={handleOpenQuote}>Contact a Broker</Button>
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