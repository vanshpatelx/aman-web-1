import React, { useState } from 'react';
import { Hero, Section, FeatureCard, Button, Modal } from './UI';
import { Ship, Truck, Package, Globe2, Anchor, Clock, MapPin } from 'lucide-react';
import Navbar from '../Navbar';
import { useTranslation } from 'react-i18next';

const Logistics: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
   const { t } = useTranslation();
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

  const services = t('logistics.forwarding.services', { returnObjects: true });
  const workflowSteps = t('logistics.workflow.steps', { returnObjects: true });

  return (
    <div className="animate-fade-in">
      {/* === Logistics & Forwarding Page === */}
        <Navbar/>

      <Hero
         title={t('logistics.hero.title')}
        subtitle={t('logistics.hero.subtitle')}
        imageSrc="https://picsum.photos/1600/600?random=10"
        ctaText={t('logistics.hero.ctaText')}
        onCtaClick={handleOpenQuote}
      />

      <Section title={t('logistics.forwarding.title')} description={t('logistics.forwarding.description')}>
        <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-2xl mb-12 h-96">
            <img src="https://picsum.photos/1200/600?random=11" alt="World Map Placeholder" className="w-full h-full object-cover opacity-50" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <Globe2 className="w-16 h-16 text-blue-700 mx-auto mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold text-white">{t('logistics.forwarding.globe.title')}</h3>
                    <p className="text-slate-300 mt-2">{t('logistics.forwarding.globe.subtitle')}</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {services.map((service, index) => (
              <div key={index} className="bg-[#00041F] p-6 rounded-xl border border-[#000730] shadow-sm">
                <div className="flex items-center mb-4">
                  {[<Truck className="w-8 h-8 text-blue-600 mr-3" />, 
                    <Ship className="w-8 h-8 text-blue-600 mr-3" />, 
                    <Package className="w-8 h-8 text-blue-600 mr-3" />][index]}
                  <h4 className="font-semibold text-lg text-white">{service.title}</h4>
                </div>
                <p className="text-[#A7ADBE] text-sm">{service.description}</p>
              </div>
            ))}
        </div>
      </Section>

      <Section title={t('logistics.workflow.title')} bg="gray">
          <div className="space-y-8">
        </div>
      </Section>

      <Section title={t('logistics.workflow.title')} bg="gray">
          <div className="space-y-8">
               {workflowSteps.map((step, i) => (
                  <div key={i} className="flex group">
                      <div className="flex flex-col items-center mr-6 h-full">
                          <div className="w-10 h-10 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              {i + 1}
                          </div>
                          {i < 4 && <div className="h-12 w-[1.5px] bg-gray-500 my-0.5"></div>}
                      </div>
                      <div className="pb-8">
                          <h4 className="text-lg font-bold text-white mb-1">{step.title}</h4>
                          <p className="text-[#A7ADBE]">{step.text}</p>
                      </div>
                  </div>
              ))}
          </div>
      </Section>

       <div className="bg-[#00041F] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-white">
            <h2 className="text-3xl font-bold mb-2">{t('logistics.cta.title')}</h2>
            <p className="text-[#A7ADBE]">{t('logistics.cta.subtitle')}</p>
          </div>
          <div className="flex gap-4">
             <button type='button' onClick={handleOpenQuote} className="bg-blue-700 text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg whitespace-nowrap text-center w-full sm:w-auto">{t('logistics.cta.buttons.quote')}</button>
            <button type='button' className="border border-white text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2 shadow-lg whitespace-nowrap w-full sm:w-auto justify-center"> {t('logistics.cta.buttons.track')}</button>
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