import React from 'react';
import { Play, Clock, Calendar, Search, ArrowRight, Mic2, BarChart3, Globe } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Trans, useTranslation } from 'react-i18next';

interface Episode {
  id: number;
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string;
  category: string;
}

const PodcastsPage: React.FC = () => {
   const { t } = useTranslation();
  const episodes: Episode[] = [
    {
      id: 1,
      title: "The Future of Fintech",
      description: "Exploring the intersection of finance and technology. We dive deep into blockchain, decentralized finance, and the algorithms shaping modern banking.",
      date: "Oct 12, 2023",
      duration: "45 min",
      image: "/SampleImage.png",
      category: "Technology"
    },
    {
      id: 2,
      title: "Sustainable Architecture",
      description: "How modern engineering is meeting environmental challenges. A look at smart materials and energy-efficient designs.",
      date: "Oct 05, 2023",
      duration: "32 min",
      image: "/SampleImage.png",
      category: "Design"
    }
  ];

    const categories = t('podcasts.episodes.categories', { returnObjects: true });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans">
      <Navbar />
      
      {/* Hero Section - Matching Screenshot Aesthetic */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] bg-blue-900/20 blur-[120px] rounded-[100%] pointer-events-none -z-10 mix-blend-screen" />
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-blue-600/20 blur-[100px] rounded-[100%] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 xl:px-0 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 id="heading" className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
               <Trans 
                i18nKey="podcasts.hero.title"
                components={{
                  1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200" />
                }} />
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
               {t('podcasts.hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-[4px] transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
                {t('podcasts.hero.buttons.explore')} <ArrowRight size={18} />
              </button>
              <button className="px-8 py-3.5 bg-transparent border border-slate-700 hover:border-slate-500 text-white font-semibold rounded-[4px] transition-all flex items-center justify-center">
                {t('podcasts.hero.buttons.schedule')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 xl:px-0 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Episodes */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Featured Section Header */}
            <div className="flex items-end justify-between border-b border-white/10 pb-4">
              <h2 className="text-3xl font-bold text-white">{t('podcasts.featured.title')}</h2>
              <div className="hidden sm:flex gap-2">
                 <button type='button' title='mic-icon' className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"><Mic2 size={20}/></button>
                 <button type='button' title='bar-chart' className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"><BarChart3 size={20}/></button>
              </div>
            </div>

            {/* Featured High-Emphasis Card */}
            <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-slate-900/50 hover:border-blue-500/30 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                   <img 
                    src="/SampleImage.png" 
                    alt="Featured" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 md:hidden"></div>
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-center relative">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/20">
                              {t('podcasts.featured.featuredBadge')}
                        </span>
                        <span className="text-slate-400 text-sm flex items-center gap-1">
                            <Clock size={14} /> 1 hr 15 min
                        </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                         {t('podcasts.featured.featuredEpisode.title')}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                         {t('podcasts.featured.featuredEpisode.description')}
                    </p>
                    <button className="flex items-center gap-3 text-white font-medium group/btn">
                        <div className="w-10 h-10 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover/btn:bg-blue-500 group-hover/btn:text-white transition-colors">
                            <Play size={16} fill="currentColor" />
                        </div>
                        <span className="group-hover/btn:translate-x-1 transition-transform">{t('podcasts.featured.featuredEpisode.button')}</span>
                    </button>
                </div>
              </div>
            </div>

            {/* Episode List */}
            <div className="space-y-6">
              {episodes.map((ep) => (
                <div key={ep.id} className="group bg-slate-900/50 border border-white/5 rounded-xl p-5 hover:bg-slate-900 hover:border-white/20 transition-all duration-300 flex flex-col sm:flex-row gap-6">
                  {/* Image */}
                  <div className="w-full sm:w-40 sm:h-40 flex-shrink-0 rounded-[4px] overflow-hidden relative">
                    <img 
                        src={ep.image} 
                        alt={ep.title} 
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                         <Play className="text-white drop-shadow-lg" size={32} fill="white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">{ep.category}</span>
                        <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar size={12}/> {ep.date}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-1">
                        {ep.title}
                    </h4>
                    
                    <p className="text-slate-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {ep.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-auto">
                        <div className="flex items-center text-xs text-slate-500 gap-1 bg-white/5 px-2 py-1 rounded">
                            <Clock size={12} /> {ep.duration}
                        </div>
                        <button className="text-xs font-medium text-slate-300 hover:text-white transition-colors">
                             {t('podcasts.episodes.episode.showNotes')}
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
        
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-slate-900 p-8 rounded-2xl border border-blue-500/20 text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-xl font-bold text-white mb-2 relative z-10"> {t('podcasts.sidebar.newsletter.title')}</h3>
              <p className="text-blue-200 text-sm mb-6 relative z-10">
                {t('podcasts.sidebar.newsletter.subtitle')}
              </p>
              
              <div className="space-y-3 relative z-10">
                <input 
                    type="email" 
                    placeholder={t('podcasts.sidebar.newsletter.placeholder')}
                    className="w-full px-4 py-2.5 bg-slate-950/50 border border-blue-500/30 rounded-[4px] text-white placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-colors text-sm" 
                />
                <button type='button' className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2.5 rounded-[4px] text-sm transition-colors shadow-lg shadow-blue-900/20">
                      {t('podcasts.sidebar.newsletter.button')}
                </button>
              </div>
            </div>
            
            {/* Mini About */}
            <div className="p-6">
                <h4 className="text-white font-bold mb-2">{t('podcasts.sidebar.about.title')}
</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                     {t('podcasts.sidebar.about.content')}
                </p>
                <a href="#" className="text-blue-400 text-sm mt-2 inline-block hover:underline"> {t('podcasts.sidebar.about.link')}</a>
            </div>

          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PodcastsPage;