import React from 'react';
import { Book, Download, Eye, CheckCircle } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const EbooksPage: React.FC = () => {
  const ebooks = [
    { id: 1, title: "Mastering Digital Transformation", author: "Dr. Sarah Connor", pages: 124 },
    { id: 2, title: "The Agile Leadership Guide", author: "James Cameron", pages: 89 },
    { id: 3, title: "Data Science for Executives", author: "Ellen Ripley", pages: 156 },
    { id: 4, title: "Cybersecurity Essentials", author: "Neo Anderson", pages: 204 },
  ];

  return (
    <div className="bg-[#00020F] min-h-screen pt-24 text-[#b2b8ca]">
      <Navbar />

      {/* Hero */}
      <div className="relative py-20 px-6 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://via.placeholder.com/1200x400')] bg-cover bg-center"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 id='heading' className="text-5xl font-medium text-white tracking-tight">
            Knowledge Library
          </h1>
          <p className="mt-4 text-base text-blue-200/80 max-w-2xl mx-auto">
            Technical eBooks, semiconductor insights, and premium engineering guides — free for all professionals.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto mb-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {ebooks.map(book => (
            <div
              key={book.id}
              className="group bg-[#0A1120]/70 rounded-x border border-white/5 shadow-lg hover:shadow-blue-700/20 transition-all duration-300 flex flex-col"
            >

              {/* New Rectangular Book Cover */}
              <div className="relative w-full h-48 rounded-t-xl overflow-hidden bg-[#101829]">
                <img
                alt='book'
                  src="/public/SampleImage.png"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Layer */}
                
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                  {book.title}
                </h3>

                <p className="text-sm text-blue-300/70 mt-1">by {book.author}</p>

                

                <p className="mt-3 text-sm text-blue-300/60 line-clamp-2">
                  A curated guide offering technical insights, best practices, and industry-ready knowledge.
                </p>
              </div>

              {/* Footer */}
              <div className="px-4 pb-4 border-t border-white/5 mt-auto pt-4 flex items-center gap-3">
                <button className="flex-1 py-2 text-sm font-semibold text-blue-400 rounded-[4px] border border-blue-800/40 hover:bg-blue-800/20 transition">
                  Read Online
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

export default EbooksPage;
