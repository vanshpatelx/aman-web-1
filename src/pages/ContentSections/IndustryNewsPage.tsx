import React, { useState } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const IndustryNewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Chip Manufacturing", "Regulations", "Startups", "Corporate", "R&D"];

  const newsItems = Array(2).fill(null).map((_, i) => ({
    id: i,
    title: i % 2 === 0 
      ? "Global Chip Markets Rally as AI Demand Hits Record High"
      : "New Semiconductor Export Rules Create Industry Uncertainty",
    excerpt: "Cutting-edge fabs, new lithography breakthroughs, and geopolitical regulations continue shaping the semiconductor ecosystem.",
    date: `Jan ${10 - i}, 2025`,
    author: "Dr. Jane Doe",
    category: i % 2 === 0 ? "Chip Manufacturing" : "Regulations",
    image: `/public/SampleImage.png`
  }));

  return (
    <div className="bg-[#00020F] min-h-screen text-[#b2b8ca]">
      <Navbar/>

      <div className="max-w-7xl mx-auto pt-36 py-12">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold text-white mb-8 border-l-4 border-blue-700 pl-4">
          Semiconductor Industry News
        </h1>

        {/* FEATURED STORY */}
        <div className="mb-12">
          <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-black aspect-[21/9] md:aspect-[3/1]">
            <img 
              src="/public/SampleImage.png" 
              alt="Featured News" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-2/3">
              <span className="inline-block bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                Breaking
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                Major Breakthrough in Quantum Chip Efficiency Announced Today
              </h2>

              <div className="flex items-center text-gray-300 text-sm gap-4">
                <span className="flex items-center"><Calendar className="w-4 h-4 mr-1"/> Jan 12, 2025</span>
                <span className="flex items-center"><User className="w-4 h-4 mr-1"/> Dr. John Smith</span>
              </div>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER */}
       

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* MAIN FEED */}
          <div className="md:col-span-2 space-y-8">
            {newsItems.map((item) => (
              <article 
                key={item.id} 
                className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800 flex flex-col sm:flex-row gap-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-full sm:w-48 h-32 flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden">
                  <img src={item.image} alt="News" className="w-full h-full object-cover" />
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 hover:text-blue-400 cursor-pointer">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                    {item.excerpt}
                  </p>

                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-semibold text-blue-500 hover:text-blue-300"
                  >
                    Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}

        
          </div>

          {/* SIDEBAR */}
          <div className="space-y-8">

            {/* TRENDING TAGS */}
            <div className="bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2">
                Trending Topics
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#EUVLithography', '#ChipFabrication', '#AIChips', '#3DNAND', '#QuantumComputing'].map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-slate-800 text-gray-300 rounded-full text-xs font-medium hover:bg-slate-700 cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* SUBSCRIBE BOX */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-600 p-6 rounded-xl shadow-lg  text-white">
              <h3 className="text-lg font-bold mb-2">Daily Semiconductor Digest</h3>
              <p className="text-blue-100 text-sm mb-4">
                Get top chip-industry headlines delivered every morning.
              </p>

              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-3 py-2 rounded text-gray-900 text-sm focus:outline-none" 
                />
                <button className="w-full py-2 bg-blue-900 rounded font-medium text-sm hover:bg-blue-950 transition-colors">
                  Sign Up
                </button>
              </form>
            </div>

          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default IndustryNewsPage;
