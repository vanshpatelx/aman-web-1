import React from 'react';
import { Play, Clock, Calendar, Share2, MoreHorizontal } from 'lucide-react';
import Navbar from '../Navbar';

const PodcastsPage: React.FC = () => {
  const episodes = [
    {
      id: 1,
      title: "The Future of Fintech",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      date: "Oct 12, 2023",
      duration: "45 min",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Sustainable Architecture",
      description: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      date: "Oct 05, 2023",
      duration: "32 min",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "AI in Healthcare",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "Sep 28, 2023",
      duration: "58 min",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 4,
      title: "Remote Work Culture",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      date: "Sep 20, 2023",
      duration: "41 min",
      image: "https://via.placeholder.com/150"
    }
  ];

  const categories = ["Technology", "Business", "Health", "Design", "Marketing", "Science"];

  return (
    <div className="bg-white">
                <Navbar/>

      {/* Header Section */}
      <div className="relative w-full h-96 bg-gray-900">
        <img 
          src="https://via.placeholder.com/1200x400" 
          alt="Podcast Banner" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            The Knowledge Cast
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Deep dives into the trends shaping our world. Listen to industry experts discuss the future.
          </p>
          <button className="mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:-translate-y-1">
            Subscribe Now
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Featured Podcast Block */}
            <div className="bg-indigo-50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-sm border border-indigo-100">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img 
                  src="https://via.placeholder.com/300x300" 
                  alt="Featured Episode" 
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase mb-2">Featured Episode</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Ep 100: A Century of Innovation</h2>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
                </p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors">
                    <Play className="w-5 h-5 ml-1" />
                  </button>
                  <div className="text-sm text-gray-500">
                    <div className="font-medium text-gray-900">Listen Now</div>
                    <div>1 hr 15 min</div>
                  </div>
                </div>
              </div>
            </div>

            {/* List of Episodes */}
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Latest Episodes</h3>
                <span className="text-indigo-600 text-sm font-medium cursor-pointer hover:underline">View All</span>
              </div>

              {episodes.map((ep) => (
                <div key={ep.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-32 h-32 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden relative group cursor-pointer">
                      <img src={ep.image} alt={ep.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                          <Play className="w-4 h-4 text-indigo-600 ml-0.5" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900 hover:text-indigo-600 cursor-pointer">{ep.title}</h4>
                        <div className="flex items-center text-sm text-gray-500 mt-2 md:mt-0 space-x-4">
                          <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {ep.date}</span>
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {ep.duration}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {ep.description}
                      </p>
                      
                      {/* Audio Player Mockup */}
                      <div className="bg-gray-50 rounded-full p-2 flex items-center gap-3">
                        <button className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-gray-600 hover:bg-indigo-600 hover:text-white transition-colors">
                          <Play className="w-3 h-3 ml-0.5" />
                        </button>
                        <div className="flex-grow h-1 bg-gray-300 rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-indigo-500 rounded-full"></div>
                        </div>
                        <span className="text-xs text-gray-500 font-mono">12:30 / {ep.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 hover:bg-white hover:shadow-sm rounded-lg cursor-pointer transition-colors text-gray-600 hover:text-indigo-600">
                    <span>{cat}</span>
                    <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full text-gray-600">{(idx + 1) * 4}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-600 p-6 rounded-xl text-white text-center">
              <h3 className="text-xl font-bold mb-3">Never Miss an Episode</h3>
              <p className="text-indigo-100 text-sm mb-6">Join 10,000+ subscribers and get the latest insights delivered to your inbox.</p>
              <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 rounded-lg text-gray-900 mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-300" />
              <button className="w-full bg-indigo-800 hover:bg-indigo-900 py-2 rounded-lg font-medium transition-colors">Subscribe</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PodcastsPage;