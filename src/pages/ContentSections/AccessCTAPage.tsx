import React from 'react';
import { ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const AccessCTAPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-[#00020F] text-[#b2b8ca]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen py-16 flex flex-col justify-center items-center text-center px-6 overflow-hidden border-b border-white/5">
        
        {/* Background */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://via.placeholder.com/1200x400')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#00020F]/40 to-[#00020F]"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          
          <span className="inline-block py-1 px-4 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 text-sm font-semibold tracking-wide uppercase">
            Exclusive Access
          </span>

          <h1 id='heading' className="text-5xl font md:text-7xl font-medium tracking-relaxed leading-normal text-white">
            Unlock the Ultimate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Knowledge Base
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto">
            Full access to semiconductor reports, white papers, deep-tech insights, and expert-curated resources.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
              onClick={() => navigate('/news')}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-[4px] font-medium text-lg shadow-lg shadow-blue-600/20 transition-transform hover:scale-105 flex items-center justify-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </button>

            <button 
              onClick={() => navigate('/white-papers')}
              className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-[4px] font-medium text-lg transition"
            >
              Explore Library
            </button>
          </div>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-24 bg-[#00020F]">
        <div className="max-w-7xl mx-auto flex flex-col justify-start ">
          
          <div className="text-center mb-16">
            <h2 id='heading' className="text-4xl font-medium tracking-normal text-white">Why Professionals Choose Us</h2>
            <p className="mt-4 text-md text-blue-300/70">
              Trusted semiconductor intelligence built for engineers, analysts, and decision-makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Card 1 */}
            <div className="group p-8 bg-[#0A1120]/70 border border-white/10 backdrop-blur-sm rounded-2xl hover:shadow-blue-700/20 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-900/30 border border-blue-700/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Zap className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Real-time Insights</h3>
              <p className="text-blue-300/70">
                Stay ahead with continuously updated semiconductor market and technology intelligence.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 bg-[#0A1120]/70 border border-white/10 backdrop-blur-sm rounded-2xl hover:shadow-blue-700/20 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-900/30 border border-blue-700/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <ShieldCheck className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Verified Sources</h3>
              <p className="text-blue-300/70">
                Every resource is validated by industry experts for technical accuracy and relevance.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 bg-[#0A1120]/70 border border-white/10 backdrop-blur-sm rounded-2xl hover:shadow-blue-700/20 transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-900/30 border border-blue-700/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <Globe className="w-8 h-8 text-blue-400 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Global Community</h3>
              <p className="text-blue-300/70">
                Join a network of engineers, researchers, and leaders shaping the future of technology.
              </p>
            </div>

          </div>
        </div>
      </section>

    
      <Footer/>

    </div>
  );
};

export default AccessCTAPage;
