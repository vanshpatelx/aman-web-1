import React from 'react';
import { ShieldCheck, Zap, Globe, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';

const AccessCTAPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://via.placeholder.com/1200x400" 
            alt="Access Banner" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-sm font-semibold tracking-wide uppercase">
            Exclusive Access
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Unlock the Ultimate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Knowledge Base</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Get unlimited access to thousands of premium resources including white papers, expert podcasts, and industry reports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button 
                onClick={() => navigate('/news')}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold text-lg shadow-lg shadow-indigo-500/30 transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button 
                onClick={() => navigate('/white-papers')}
                className="px-8 py-4 bg-transparent border border-gray-500 hover:bg-white/10 text-white rounded-lg font-bold text-lg transition-all"
            >
              Explore Library
            </button>
          </div>
          <p className="text-sm text-gray-400 pt-4">No credit card required for demo.</p>
        </div>
      </section>

      {/* Value Proposition Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Professionals Choose Us</h2>
                <p className="mt-4 text-lg text-gray-600">We provide the tools you need to stay ahead of the curve.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Card 1 */}
                <div className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                        <Zap className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Insights</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                        <ShieldCheck className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Sources</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                        <Globe className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Global Community</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-sm font-semibold text-gray-500 tracking-widest uppercase mb-8">Trusted by industry leaders</p>
              <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
                  {/* Dummy Logo Placeholders */}
                  <div className="text-2xl font-bold text-gray-800">ACME Corp</div>
                  <div className="text-2xl font-bold text-gray-800">GlobalTech</div>
                  <div className="text-2xl font-bold text-gray-800">Nebula</div>
                  <div className="text-2xl font-bold text-gray-800">Vertigo</div>
                  <div className="text-2xl font-bold text-gray-800">FoxRun</div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default AccessCTAPage;