import React, { useState } from 'react';
import { Hero, Section, FeatureCard, Button, Modal } from './UI';
import { Warehouse, Tag, PieChart, Shield, Eye, MapPin } from 'lucide-react';
import Navbar from '../Navbar';

const Consignment: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        alert("Consignment space reserved! We will contact you to finalize details.");
        handleCloseQuote();
    }, 500);
  };

  return (
    <div className="animate-fade-in">
                <Navbar/>

      {/* === Consignment Page === */}

      <Hero
        title="Equipment Consignment Services"
        subtitle="Secure storage and professional sales management for your heavy equipment. You maintain ownership while we handle the sale."
        imageSrc="https://picsum.photos/1600/600?random=8"
        ctaText="Consign Your Equipment"
        onCtaClick={handleOpenQuote}
      />

      <Section title="Hassle-Free Selling" description="We store, maintain, and sell your assets from our secure yards.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Revenue Sharing Model</h3>
                    <p className="text-slate-600 mb-6">
                        Unlike auctions where you lose control of the price, our consignment model puts you in the driver's seat. We agree on a net price or a commission percentage.
                    </p>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="font-semibold text-slate-700">Marketing & Listing</span>
                            <span className="text-green-600 font-bold">Included</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="font-semibold text-slate-700">Storage (90 Days)</span>
                            <span className="text-green-600 font-bold">Free</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="font-semibold text-slate-700">Maintenance Wash</span>
                            <span className="text-green-600 font-bold">Included</span>
                        </div>
                         <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <span className="font-semibold text-slate-700">Commission</span>
                            <span className="text-blue-600 font-bold">8-12%</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
                 <div className="flex items-start">
                     <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                         <Warehouse className="w-6 h-6" />
                     </div>
                     <div>
                         <h4 className="text-lg font-bold">Prime Locations</h4>
                         <p className="text-slate-600 text-sm">Our consignment yards are located near major ports and highways for easy buyer access and logistics.</p>
                     </div>
                 </div>
                 <div className="flex items-start">
                     <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                         <Eye className="w-6 h-6" />
                     </div>
                     <div>
                         <h4 className="text-lg font-bold">Maximum Visibility</h4>
                         <p className="text-slate-600 text-sm">Walk-in traffic combined with premium digital placement ensures your asset gets seen by serious buyers.</p>
                     </div>
                 </div>
                 <div className="flex items-start">
                     <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                         <Shield className="w-6 h-6" />
                     </div>
                     <div>
                         <h4 className="text-lg font-bold">Secure Facilities</h4>
                         <p className="text-slate-600 text-sm">24/7 security monitoring, fenced yards, and regular battery/fluid maintenance checks while in storage.</p>
                     </div>
                 </div>
            </div>
        </div>
      </Section>

      <Section title="Tracking & Transparency" bg="gray">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon={<MapPin className="w-6 h-6" />}
                title="Real-time Inventory"
                description="View your consigned assets in our portal. Check status, view listing hits, and manage offers."
              />
              <FeatureCard 
                icon={<Tag className="w-6 h-6" />}
                title="Dynamic Pricing"
                description="We provide data-driven price adjustments based on market interest to ensure a timely sale."
              />
              <FeatureCard 
                icon={<PieChart className="w-6 h-6" />}
                title="Performance Reports"
                description="Weekly updates on leads, inquiries, and physical inspections conducted on your equipment."
              />
          </div>
      </Section>

      <div className="relative py-24 bg-slate-900 overflow-hidden">
          <img src="https://picsum.photos/1600/800?random=9" alt="Consignment Yard" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Space is limited in our prime yards.</h2>
              <p className="text-xl text-slate-300 mb-8">Reserve your spot today and get your equipment in front of verified buyers.</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white border-none" onClick={handleOpenQuote}>Reserve Space</Button>
          </div>
      </div>

      <Modal isOpen={isQuoteOpen} onClose={handleCloseQuote} title="Consignment Request">
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
            <label className="block text-sm font-medium text-slate-700 mb-1">Equipment Description</label>
            <textarea required rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="E.g., 2018 CAT 320 Excavator..."></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Current Location</label>
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
            By submitting, you agree to our consignment terms and privacy policy.
          </p>
        </form>
      </Modal>

    </div>
  );
};

export default Consignment;