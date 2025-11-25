import React from 'react';
import { Download, FileText, ArrowRight, Star } from 'lucide-react';
import Navbar from '../Navbar';

const WhitePapersPage: React.FC = () => {
  const whitePapers = Array(9).fill(null).map((_, i) => ({
    id: i,
    title: `Strategic Insights Vol. ${i + 1}`,
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "https://via.placeholder.com/300x200"
  }));

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
        <Navbar/>

      {/* Hero Banner */}
      <div className="bg-blue-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Research & White Papers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
            In-depth analysis, industry reports, and strategic guides to help you make informed decisions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        
        {/* Featured White Paper */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-indigo-600 font-semibold mb-4">
                <Star className="w-5 h-5 fill-current" />
                <span>Editor's Pick</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The State of Global Innovation 2024
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Comprehensive data analysis on emerging technology trends, market shifts, and future predictions for the global enterprise landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                  <Download className="mr-2 h-5 w-5" /> Download PDF
                </button>
                <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                  Read Summary
                </button>
              </div>
            </div>
            <div className="bg-gray-100 h-64 md:h-auto relative">
              <img 
                src="https://via.placeholder.com/800x600" 
                alt="Featured Report" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:hidden"></div>
            </div>
          </div>
        </div>

        {/* Grid of White Papers */}
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Recent Publications</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Filter</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">Sort</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whitePapers.map((paper) => (
            <div key={paper.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col">
              <div className="relative h-48 bg-gray-200 group overflow-hidden">
                <img 
                  src={paper.image} 
                  alt={paper.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-indigo-700">
                  PDF Report
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{paper.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3">
                  {paper.summary}
                </p>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
             Load More Publications <ArrowRight className="ml-2 h-4 w-4" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default WhitePapersPage;