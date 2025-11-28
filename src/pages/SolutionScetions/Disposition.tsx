import React, { useState } from 'react';
import { Hero, Section, FeatureCard, Button, Modal } from './UI';
import { Recycle, DollarSign, Truck, FileCheck, RefreshCw, BarChart, AlertTriangle } from 'lucide-react';
import Navbar from '../Navbar';
import { useTranslation } from 'react-i18next';

const Disposition: React.FC = () => {
  const { t } = useTranslation();
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

  const recoverySteps = t('disposition.recoveryProcess.steps', { returnObjects: true });
  const caseStudyMetrics = t('disposition.recoveryProcess.caseStudy.metrics', { returnObjects: true });
  const workflowFeatures = t('disposition.workflow.features', { returnObjects: true });


  return (
    <div className="animate-fade-in">
      {/* === Disposition Page === */}
      <Navbar />

      <Hero
        title={t('disposition.hero.title')}
        subtitle={t('disposition.hero.subtitle')}
        imageSrc="https://picsum.photos/1600/600?random=6"
        ctaText={t('disposition.hero.ctaText')}
        onCtaClick={handleOpenQuote}
      />

      <Section title={t('disposition.recoveryProcess.title')} description={t('disposition.recoveryProcess.description')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-white">
          {recoverySteps.map((step, index) => (
            <div key={index} className={`bg-[#00041F] p-6 rounded-xl shadow-lg border-t-4 ${index === 0 ? 'border-blue-600' :
                index === 1 ? 'border-green-600' :
                  'border-purple-600'
              }`}>
              <h3 className="text-xl font-bold mb-3 flex items-center">
                {[<RefreshCw className="w-5 h-5 mr-2 text-blue-600" />,
                <Recycle className="w-5 h-5 mr-2 text-green-600" />,
                <DollarSign className="w-5 h-5 mr-2 text-purple-600" />][index]}
                {step.title}
              </h3>
              <p className="text-[#A7ADBE]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[#00041F] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold tracking-wide text-white mb-4">{t('disposition.recoveryProcess.caseStudy.title')}</h3>
            <p className="text-[#A7ADBE] mb-6">
               {t('disposition.recoveryProcess.caseStudy.content')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {caseStudyMetrics.map((metric, index) => (
                <div key={index} className="p-4 rounded-lg shadow-sm space-y-1">
                  <div className="text-3xl font-bold text-blue-600">{metric.value}</div>
                  <div className="text-sm text-[#A7ADBE]">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 h-64 w-full">
            <img src="https://picsum.photos/600/400?random=7" alt="Fleet of trucks" className="w-full h-full object-cover rounded-xl shadow-md" />
          </div>
        </div>
      </Section>

       <Section title={t('disposition.workflow.title')} bg="gray">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         {workflowFeatures.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={[<Truck className="w-8 h-8" />, 
                     <FileCheck className="w-8 h-8" />, 
                     <BarChart className="w-8 h-8" />, 
                     <Recycle className="w-8 h-8" />][index]}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>


      <div className="bg-[#00041F] py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">{t('disposition.cta.title')}</h2>
        <button type='button' className="bg-blue-700 text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-blue-800 transition-colors duration-300" onClick={handleOpenQuote}> {t('disposition.cta.button')}</button>
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