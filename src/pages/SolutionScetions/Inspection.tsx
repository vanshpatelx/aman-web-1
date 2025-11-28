import React, { useState } from 'react';
import { Hero, Section, FeatureCard, Button, Modal } from './UI';
import { ClipboardCheck, Camera, FileText, CheckCircle, AlertTriangle, UserCheck } from 'lucide-react';
import Navbar from '../Navbar';
import { useTranslation } from 'react-i18next';

const Inspection: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const { t } = useTranslation();
  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        alert("Inspection request received! We will contact you to schedule.");
        handleCloseQuote();
    }, 500);
  };

  const features = t('inspection.whyMatter.features', { returnObjects: true });
  const qualitySteps = t('inspection.qualityProcess.steps', { returnObjects: true });
  const inspectors = t('inspection.evaluators.inspectors', { returnObjects: true });

  return (
    <div className="animate-fade-in">
      {/* === Inspection Page === */}
              <Navbar/>

      <Hero
        title={t('inspection.hero.title')}
        subtitle={t('inspection.hero.subtitle')}
        imageSrc="https://picsum.photos/1600/600?random=3"
        ctaText={t('inspection.hero.ctaText')}
        onCtaClick={handleOpenQuote}
      />

      <Section title={t('inspection.whyMatter.title')} description={t('inspection.whyMatter.description')}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
                 <img src="https://picsum.photos/400/300?random=4" alt="Inspector checking engine" className="rounded-lg shadow-md w-full h-48 object-cover" />
                 <img src="https://picsum.photos/400/300?random=5" alt="Undercarriage measurement" className="rounded-lg shadow-md w-full h-48 object-cover mt-8" />
            </div>
            <div>
                <h3 className="text-2xl font-medium text-white mb-4">{t('inspection.whyMatter.heading')}</h3>
                <p className="text-[#A7ADBE] mb-6 leading-relaxed">
                    {t('inspection.whyMatter.content')}
                </p>
                <div className="space-y-4">
                   {features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        {[<ClipboardCheck className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />, 
                          <Camera className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />, 
                          <FileText className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />][index]}
                        <div>
                            <h4 className="font-normal text-white">{feature.title}</h4>
                            <p className="text-sm text-[#A7ADBE]">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
      </Section>

      <Section title={t('inspection.qualityProcess.title')}>
        <div className="relative">
             {/* Timeline Line */}
             <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200"></div>
             
             <div className="space-y-12">
                {qualitySteps.map((step, idx) => (
                     <div key={idx} className={`flex items-center justify-between ${step.side === 'right' ? 'flex-row-reverse' : ''}`}>
                         <div className="w-full md:w-5/12"></div>
                         <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white shadow-lg z-10">
                             {[<UserCheck className="w-5 h-5" />, 
                               <CheckCircle className="w-5 h-5" />, 
                               <AlertTriangle className="w-5 h-5" />, 
                               <FileText className="w-5 h-5" />][idx]}
                         </div>
                         <div className="w-full md:w-5/12 bg-[#00041F] border border-[#000730] rounded-lg p-6 shadow-sm">
                             <h4 className="font-medium text-lg text-white mb-2">{step.title}</h4>
                             <p className="text-[#A7ADBE] text-sm">{step.desc}</p>
                         </div>
                     </div>
                 ))}
             </div>
        </div>
      </Section>

       <Section title={t('inspection.evaluators.title')}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {inspectors.map((inspector, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-[#00041F] border border-[#000730]">
                  <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 overflow-hidden">
                      <img src={`https://picsum.photos/200/200?random=${20 + index}`} alt="Inspector" />
                  </div>
                  <h4 className="text-xl font-semibold tracking-wider text-white mb-3">{inspector.name}</h4>
                  <p className="text-[#A7ADBE] text-sm mb-4">{inspector.role}</p>
                  <p className="text-slate-400 italic">{inspector.quote}</p>
                </div>
              ))}
          </div>
      </Section>

      <div className="bg-[#00041F] py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">{t('inspection.cta.title')}</h2>
          <p className="text-xl text-[#A7ADBE] mb-8">{t('inspection.cta.subtitle')}</p>
          <button type='button' className="bg-blue-700 text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-blue-800 transition-colors duration-300" onClick={handleOpenQuote}>{t('inspection.cta.button')}</button>
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