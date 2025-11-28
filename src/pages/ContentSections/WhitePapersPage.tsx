import React from 'react';
import { Download, FileText, ArrowRight, Star, ArrowUpRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useTranslation } from 'react-i18next';

const WhitePapersPage: React.FC = () => {

    const { t } = useTranslation();
     const whitePapersData = t('whitePapers.recent.papers', { returnObjects: true });
  
  const whitePapers = whitePapersData.map((paper, i) => ({
    id: i,
    title: paper.title,
    summary: paper.summary,
    image: "/SampleImage.png"
  }));


  return (
    <div className="bg-[#00020F] min-h-screen  text-[#b2b8ca]">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-blue-700 py-16 pt-36 ">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 xl:px-0 text-center">
          <h1 id='heading' className="text-4xl font-medium text-white sm:text-5xl md:text-6xl">
             {t('whitePapers.hero.title')}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto  text-lg text-blue-200">
            {t('whitePapers.hero.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 xl:px-0 -mt-10 mb-16">

        {/* Featured White Paper */}
        <div className="bg-[#0a0d1f] rounded-xl shadow-xl overflow-hidden mb-16 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-blue-400 font-normal mb-4">
                <Star className="w-5 h-5" />
               <span>{t('whitePapers.featured.editorsPick')}</span>
              </div>

              <h2 className="text-3xl font-medium text-white mb-4">
                 {t('whitePapers.featured.title')}
              </h2>

              <p className="text-[#A7ADBE] mb-8 text-md leading-relaxed">
                 {t('whitePapers.featured.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type='button' className="inline-flex items-center justify-center rounded px-6 py-3 text-base font-medium  text-white bg-blue-700 hover:bg-blue-600 transition-colors">
                  <Download className="mr-2 h-5 w-5" />  {t('whitePapers.featured.buttons.download')}
                </button>

                <button type='button' className="inline-flex items-center justify-center px-6 py-3 rounded border border-gray-600 text-base font-medium  text-[#b2b8ca] bg-[#0e1126] hover:bg-[#14172f] transition-colors">
                     {t('whitePapers.featured.buttons.summary')}
                </button>
              </div>
            </div>

            <div className="bg-gray-800 h-64 md:h-auto relative">
              <img
                src="/SampleImage.png"
                alt="Featured Report"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#00020F] via-transparent to-transparent md:hidden"></div>
            </div>
          </div>
        </div>

        {/* Recent White Papers */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-medium text-white"> {t('whitePapers.recent.title')}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitePapers.map((paper) => (
            <div
              key={paper.id}
              className="bg-[#0a0d1f] rounded-[8px] shadow-sm border border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 bg-gray-900 group overflow-hidden">
                <img
                  src={paper.image}
                  alt={paper.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-medium text-white mb-2 line-clamp-2">
                  {paper.title}
                </h3>

                <p className="text-[#b2b8ca] text-sm mb-6 flex-grow line-clamp-3">
                  {paper.summary}
                </p>

                <button className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-normal rounded text-blue-400 bg-blue-700/20 hover:bg-blue-700/30 transition-colors">
                  {t('whitePapers.recent.button')}
                  <ArrowUpRight className="mr-2 h-4 w-4" /> 
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default WhitePapersPage;
