import React, { useState } from 'react';
import { Hero, Section, FeatureCard, Button, Modal } from './UI';
import { Ship, Truck, Package, Globe2, Anchor, Clock, MapPin } from 'lucide-react';
import Navbar from '../Navbar';

const Logistics: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        alert("Quote request submitted successfully! A logistics coordinator will contact you shortly.");
        handleCloseQuote();
    }, 500);
  };

  return (
    <div className="animate-fade-in">
      {/* === Logistics & Forwarding Page === */}
        <Navbar/>

      <Hero
        title="Heavy Equipment Logistics"
        subtitle="Door-to-door transport solutions for oversized cargo. We handle dismantling, packing, freight forwarding, and customs clearance."
        imageSrc="https://picsum.photos/1600/600?random=10"
        ctaText="Get a Shipping Quote"
        onCtaClick={handleOpenQuote}
      />

      <Section title="Global Forwarding Network" description="Seamlessly moving heavy machinery across borders and oceans.">
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl mb-12 h-96">
            <img src="https://picsum.photos/1200/600?random=11" alt="World Map Placeholder" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <Globe2 className="w-16 h-16 text-blue-400 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold text-white">Connecting 150+ Ports Worldwide</h3>
                    <p className="text-slate-300 mt-2">Live tracking available for all ocean and air freight.</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-center mb-4">
                    <Truck className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-lg">Inland Heavy Haul</h4>
                </div>
                <p className="text-slate-600 text-sm"> Specialized low-boys and RGN trailers for oversized loads. We handle all permitting and escort vehicle requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                 <div className="flex items-center mb-4">
                    <Ship className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-lg">RoRo & Container</h4>
                </div>
                <p className="text-slate-600 text-sm">Flexible ocean freight options. Roll-on/Roll-off for drivable units or containerization for dismantled parts.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                 <div className="flex items-center mb-4">
                    <Package className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="font-bold text-lg">Dismantling & Packing</h4>
                </div>
                <p className="text-slate-600 text-sm">Professional dismantling services to fit large machinery into standard containers, reducing shipping costs significantly.</p>
            </div>
        </div>
      </Section>

      <Section title="Shipping Workflow" bg="gray">
          <div className="space-y-8">
              {[
                  { title: "Quote & Planning", text: "Route analysis and cost estimation based on dimensions and weight.", icon: <Clock /> },
                  { title: "Prep & Pickup", text: "Washing (for quarantine compliance) and loading onto transport.", icon: <Truck /> },
                  { title: "Export Customs", text: "Documentation filing (AES, Commercial Invoice, Packing List).", icon: <Anchor /> },
                  { title: "Ocean Freight", text: "Vessel departure and transit monitoring.", icon: <Ship /> },
                  { title: "Import & Delivery", text: "Customs clearance at destination and final mile delivery.", icon: <MapPin /> }
              ].map((step, i) => (
                  <div key={i} className="flex group">
                      <div className="flex flex-col items-center mr-6">
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              {i + 1}
                          </div>
                          {i < 4 && <div className="h-full w-0.5 bg-slate-300 my-2"></div>}
                      </div>
                      <div className="pb-8">
                          <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                          <p className="text-slate-600">{step.text}</p>
                      </div>
                  </div>
              ))}
          </div>
      </Section>

       <div className="bg-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-white">
            <h2 className="text-3xl font-bold mb-2">Need to move big iron?</h2>
            <p className="text-blue-200">Our logistics experts are ready to plan your route.</p>
          </div>
          <div className="flex gap-4">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50" onClick={handleOpenQuote}>Request Quote</Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-100 hover:bg-blue-800">Track Shipment</Button>
          </div>
        </div>
      </div>

      <Modal isOpen={isQuoteOpen} onClose={handleCloseQuote} title="Request Shipping Quote">
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
            <textarea required rows={3} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="E.g., 2018 CAT 320 Excavator, approx 45,000 lbs"></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Origin City</label>
              <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="City, Country" />
            </div>
             <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Destination City</label>
              <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="City, Country" />
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full justify-center">Submit Request</Button>
          </div>
          <p className="text-xs text-slate-400 text-center mt-2">
            By submitting, you agree to our privacy policy. Estimates are valid for 7 days.
          </p>
        </form>
      </Modal>
    </div>
  );
};

export default Logistics;