import React from 'react';
import { Download, FileText, ArrowRight, Star, ArrowUpRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const WhitePapersPage: React.FC = () => {
  const whitePapers = Array(3).fill(null).map((_, i) => ({
    id: i,
    title: `Strategic Insights Vol. ${i + 1}`,
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: "/public/SampleImage.png"
  }));

  return (
    <div className="bg-[#00020F] min-h-screen  text-[#b2b8ca]">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-blue-700 py-16 pt-36 ">
        <div className="max-w-7xl mx-auto text-center">
          <h1 id='heading' className="text-[14px] font-medium text-white sm:text-5xl md:text-6xl">
            Research & White Papers
          </h1>
          <p className="mt-4 max-w-2xl mx-auto  text-lg text-blue-200">
            Semiconductor market insights, fabrication trends, and advanced technology briefs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto -mt-10 mb-16">

        {/* Featured White Paper */}
        <div className="bg-[#0a0d1f] rounded-xl shadow-xl overflow-hidden mb-16 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-blue-400 font-normal mb-4">
                <Star className="w-5 h-5" />
                <span>Editor's Pick</span>
              </div>

              <h2 className="text-3xl font-medium text-white mb-4">
                The State of Global Chip Innovation 2024
              </h2>

              <p className="text-[#A7ADBE] mb-8 text-md leading-relaxed">
                Analysis of fab expansions, supply chain resilience, lithography breakthroughs, and competitive dynamics shaping next-gen semiconductor ecosystems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="inline-flex items-center justify-center rounded px-6 py-3 text-base font-medium  text-white bg-blue-700 hover:bg-blue-600 transition-colors">
                  <Download className="mr-2 h-5 w-5" /> Download PDF
                </button>

                <button className="inline-flex items-center justify-center px-6 py-3 rounded border border-gray-600 text-base font-medium  text-[#b2b8ca] bg-[#0e1126] hover:bg-[#14172f] transition-colors">
                  Read Summary
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
          <h3 className="text-2xl font-medium text-white">Recent Publications</h3>
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
                  View<ArrowUpRight className="mr-2 h-4 w-4" /> 
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
