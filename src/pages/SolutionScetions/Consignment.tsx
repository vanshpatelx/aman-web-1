import React, { useState } from 'react';
import { Hero, Section, FeatureCard, Button, Modal } from './UI';
import { Warehouse, Tag, PieChart, Shield, Eye, MapPin } from 'lucide-react';
import Navbar from '../Navbar';
import { useTranslation } from 'react-i18next';

const Consignment: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
   const { t } = useTranslation();
  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        alert("Consignment space reserved! We will contact you to finalize details.");
        handleCloseQuote();
    }, 500);
  };

  const revenueFeatures = t('consignment.hassleFree.revenueModel.features', { returnObjects: true });
  const benefits = t('consignment.hassleFree.benefits', { returnObjects: true });
  const trackingFeatures = t('consignment.tracking.features', { returnObjects: true });

  return (
    <div className="animate-fade-in">
                <Navbar/>

      {/* === Consignment Page === */}

      <Hero
         title={t('consignment.hero.title')}
        subtitle={t('consignment.hero.subtitle')}
        imageSrc="https://picsum.photos/1600/600?random=8"
        ctaText={t('consignment.hero.ctaText')}
        onCtaClick={handleOpenQuote}
      />

      <Section title={t('consignment.hassleFree.title')} description={t('consignment.hassleFree.description')}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#00041F] rounded-2xl overflow-hidden shadow-lg border border-[#000730]">
                <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-white">{t('consignment.hassleFree.revenueModel.title')}</h3>
                    <p className="text-[#A7ADBE] mb-6">
                         {t('consignment.hassleFree.revenueModel.content')}
                    </p>
                    <div className="space-y-4">
                         {revenueFeatures.map((feature, index) => (
                          <div key={index} className="flex justify-between items-center p-3 border border-[#000730] rounded-[8px]">
                            <span className="font-medium text-white">{feature.label}</span>
                            <span className={`font-normal ${
                              feature.value === 'Included' || feature.value === 'Free' || 
                              feature.value === 'शामिल' || feature.value === 'मुफ्त' ||
                              feature.value === 'Inclus' || feature.value === 'Gratuit' 
                                ? 'text-green-600' : 'text-blue-600'
                            }`}>
                              {feature.value}
                            </span>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
                 {benefits.map((benefit, index) => (
                   <div key={index} className="flex items-start">
                     <div className="bg-white p-3 rounded-[8px] mr-4 text-blue-600">
                         {[<Warehouse className="w-6 h-6" />, 
                           <Eye className="w-6 h-6" />, 
                           <Shield className="w-6 h-6" />][index]}
                     </div>
                     <div>
                         <h4 className="text-lg font-semibold text-white">{benefit.title}</h4>
                         <p className="text-[#A7ADBE] text-sm">{benefit.description}</p>
                     </div>
                   </div>
                 ))}
            </div>
        </div>
      </Section>

      <Section title={t('consignment.tracking.title')} bg="gray">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trackingFeatures.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={[<MapPin className="w-8 h-8" />, 
                         <Tag className="w-8 h-8" />, 
                         <PieChart className="w-8 h-8" />][index]}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
          </div>
      </Section>

      <div className="relative py-24 bg-slate-900 overflow-hidden">
          <img src="https://picsum.photos/1600/800?random=9" alt="Consignment Yard" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('consignment.cta.title')}</h2>
              <p className="text-xl text-slate-300 mb-8">{t('consignment.cta.subtitle')}</p>
              <button type='button' className="bg-blue-700 text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-blue-800 transition-colors duration-300" onClick={handleOpenQuote}>{t('consignment.cta.button')}</button>
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