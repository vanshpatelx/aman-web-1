import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Navbar from '../Navbar';

const IndustryNewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Market Trends", "Regulation", "Startups", "Corporate", "M&A"];

  const newsItems = Array(6).fill(null).map((_, i) => ({
    id: i,
    title: i % 2 === 0 ? "Global Markets Rally Amidst Tech Surge" : "New Regulations Shake Up The Financial Sector",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    date: `Nov ${10 - i}, 2023`,
    author: "Jane Doe",
    category: i % 2 === 0 ? "Market Trends" : "Regulation",
    image: `https://via.placeholder.com/300x200?text=News+${i+1}`
  }));

  return (
    <div className="bg-gray-50 min-h-screen">
                <Navbar/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 border-l-4 border-indigo-600 pl-4">Industry News</h1>

        {/* Featured Story */}
        <div className="mb-12">
            <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-black aspect-[21/9] md:aspect-[3/1]">
                <img 
                    src="https://via.placeholder.com/1200x600" 
                    alt="Featured News" 
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-60 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-2/3">
                    <span className="inline-block bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
                        Breaking
                    </span>
                    <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                        Major Breakthrough in Quantum Computing Efficiency Announced Today
                    </h2>
                    <div className="flex items-center text-gray-300 text-sm gap-4">
                        <span className="flex items-center"><Calendar className="w-4 h-4 mr-1"/> Nov 12, 2023</span>
                        <span className="flex items-center"><User className="w-4 h-4 mr-1"/> John Smith</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-gray-200">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        activeCategory === cat 
                        ? 'bg-indigo-600 text-white shadow-md' 
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* News Feed */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
                {newsItems.map((item) => (
                    <article key={item.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-6 hover:shadow-md transition-shadow">
                        <div className="w-full sm:w-48 h-32 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden">
                            <img src={item.image} alt="News Thumb" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">{item.category}</span>
                                <span className="text-gray-300">•</span>
                                <span className="text-xs text-gray-500">{item.date}</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer">{item.title}</h3>
                            <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                {item.excerpt}
                            </p>
                            <a href="#" className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                                Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                    </article>
                ))}
                
                <div className="flex justify-center pt-4">
                    <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                        Load More Articles
                    </button>
                </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Trending Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        {['#TechTrends', '#Finance', '#Innovation', '#Leadership', '#Sustainability', '#Growth'].map(tag => (
                            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-gray-200 cursor-pointer">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-xl shadow-lg text-white">
                    <h3 className="text-lg font-bold mb-2">Daily Digest</h3>
                    <p className="text-indigo-100 text-sm mb-4">Get the top headlines delivered to your inbox every morning.</p>
                    <form className="space-y-3">
                        <input type="email" placeholder="Email Address" className="w-full px-3 py-2 rounded text-gray-900 text-sm focus:outline-none" />
                        <button className="w-full py-2 bg-indigo-900 rounded font-medium text-sm hover:bg-gray-900 transition-colors">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryNewsPage;