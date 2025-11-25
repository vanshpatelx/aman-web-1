import React from 'react';
import { User, MessageCircle, Clock, Search, ChevronRight } from 'lucide-react';
import Navbar from '../Navbar';

const BlogPage: React.FC = () => {
  const posts = Array(5).fill(null).map((_, i) => ({
    id: i,
    title: "10 Strategies for Effective Leadership in 2024",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.",
    author: "Michael Scott",
    date: "Nov 15, 2023",
    readTime: "5 min read",
    tags: ["Leadership", "Management"],
    image: "https://via.placeholder.com/300x200"
  }));

  return (
    <div className="bg-gray-50 min-h-screen py-12">
        <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Post */}
        <div className="mb-12 bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                <img 
                    src="https://via.placeholder.com/600x400" 
                    alt="Featured Blog" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full font-semibold">Featured</span>
                    <span className="text-gray-500 text-sm">Nov 18, 2023</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-indigo-600 cursor-pointer">
                    Why Digital Privacy Matters More Than Ever
                </h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            <User className="w-6 h-6" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Sarah Jenkins</p>
                            <p className="text-xs text-gray-500">Editor in Chief</p>
                        </div>
                    </div>
                    <button className="text-indigo-600 font-medium hover:underline flex items-center">
                        Read Article <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Blog Feed */}
            <div className="lg:col-span-2 space-y-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Latest Stories</h3>
                {posts.map(post => (
                    <article key={post.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="w-full md:w-1/3 h-48 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 cursor-pointer">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-50 mt-auto">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</span>
                                </div>
                                <span className="flex items-center"><MessageCircle className="w-3 h-3 mr-1" /> 12</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
                
                {/* Search */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search articles..." 
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                        />
                        <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                    </div>
                </div>

                {/* Categories */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">Explore Topics</h4>
                    <ul className="space-y-2">
                        {['Technology', 'Leadership', 'Marketing', 'Productivity', 'Design', 'Development'].map((cat, i) => (
                            <li key={i}>
                                <a href="#" className="flex justify-between items-center text-gray-600 hover:text-indigo-600 transition-colors group">
                                    <span>{cat}</span>
                                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full group-hover:bg-indigo-100 group-hover:text-indigo-700">{10 + i * 3}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recent Posts - Text Only */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">Most Popular</h4>
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="group cursor-pointer">
                                <h5 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors leading-snug">
                                    How to scale your application for millions of users
                                </h5>
                                <span className="text-xs text-gray-400 mt-1 block">Oct 2{i}, 2023</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;