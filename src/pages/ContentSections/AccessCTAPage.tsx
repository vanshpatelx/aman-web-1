import React from 'react';
import { ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Trans, useTranslation } from 'react-i18next';

const AccessCTAPage: React.FC = () => {
  const navigate = useNavigate();
   const { t } = useTranslation();

  const valueCards = t('accessCTA.valueProposition.cards', { returnObjects: true });

  return (
    <div className="flex flex-col min-h-screen bg-[#00020F] text-[#b2b8ca]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-full py-16 flex flex-col justify-center items-center text-center px-6 overflow-hidden border-b border-white/5">
        
        {/* Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://via.placeholder.com/1200x400')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#00020F]/40 to-[#00020F]"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 h-full">
          
          <span className="inline-block py-1 px-4 mt-20 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 text-sm font-semibold tracking-wide uppercase">
             {t('accessCTA.hero.badge')}
          </span>

          <h1 id='heading' className="text-5xl font md:text-7xl font-medium tracking-relaxed leading-normal text-white">
            <Trans
              i18nKey="accessCTA.hero.title"
              components={{
                1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400" />
              }}
            />
          </h1>

          <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto">
           {t('accessCTA.hero.subtitle')}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={() => navigate('/news')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-[4px] font-medium text-lg shadow-lg shadow-blue-600/20 transition-transform hover:scale-105 flex items-center justify-center"
            >
              {t('accessCTA.hero.buttons.trial')} <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            <button 
              onClick={() => navigate('/white-papers')}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-[4px] font-medium text-lg transition"
            >
               {t('accessCTA.hero.buttons.explore')}
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-24 bg-[#00020F]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 xl:px-0 flex flex-col justify-start ">
          
          <div className="text-center mb-16">
            <h2 id='heading' className="text-4xl font-medium tracking-normal text-white"> {t('accessCTA.valueProposition.title')}</h2>
            <p className="mt-4 text-md text-blue-300/70">
              {t('accessCTA.valueProposition.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {valueCards.map((card, index) => (
              <div key={index} className="group p-8 bg-[#0A1120]/70 border border-white/10 backdrop-blur-sm rounded-2xl hover:shadow-blue-700/20 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-900/30 border border-blue-700/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  {[
                    <Zap className="w-8 h-8 text-blue-400 group-hover:text-white" />,
                    <ShieldCheck className="w-8 h-8 text-blue-400 group-hover:text-white" />,
                    <Globe className="w-8 h-8 text-blue-400 group-hover:text-white" />
                  ][index]}
                </div>
                <h3 className="text-xl font-medium text-white mb-3">{card.title}</h3>
                <p className="text-blue-300/70">{card.description}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

    
      <Footer/>

    </div>
  );
};

export default AccessCTAPage;
