import React from 'react';
import { Book, Download, Eye, CheckCircle } from 'lucide-react';
import Navbar from '../Navbar';

const EbooksPage: React.FC = () => {
  const ebooks = [
    { id: 1, title: "Mastering Digital Transformation", author: "Dr. Sarah Connor", pages: 124 },
    { id: 2, title: "The Agile Leadership Guide", author: "James Cameron", pages: 89 },
    { id: 3, title: "Data Science for Executives", author: "Ellen Ripley", pages: 156 },
    { id: 4, title: "Cybersecurity Essentials", author: "Neo Anderson", pages: 204 },
    { id: 5, title: "Cloud Computing Architectures", author: "Morpheus Smith", pages: 178 },
    { id: 6, title: "UX Design Principles 2024", author: "Trinity Moss", pages: 95 },
    { id: 7, title: "Blockchain Beyond Crypto", author: "Satoshi N.", pages: 142 },
    { id: 8, title: "Sustainable Business Models", author: "Greta T.", pages: 110 },
  ];

  return (
    <div className="bg-white min-h-screen">
                <Navbar/>

      {/* Hero Section */}
      <div className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-20"
            src="https://via.placeholder.com/1200x400"
            alt="Library background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Knowledge Library
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
            Curated eBooks and comprehensive guides to elevate your expertise. Access our premium collection completely free.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ebooks.map((book) => (
            <div key={book.id} className="group flex flex-col bg-white">
              {/* Book Cover Container */}
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-200 shadow-md group-hover:shadow-xl transition-all duration-300">
                <img
                  src="https://via.placeholder.com/200x300"
                  alt={book.title}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex flex-col items-center justify-center space-y-3 opacity-0 group-hover:opacity-100">
                  <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm flex items-center hover:bg-indigo-50 transition-colors">
                    <Eye className="w-4 h-4 mr-2" /> Preview
                  </button>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-full font-medium text-sm flex items-center hover:bg-indigo-700 transition-colors">
                    <Download className="w-4 h-4 mr-2" /> Download
                  </button>
                </div>
              </div>
              
              <div className="mt-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-indigo-600 transition-colors">
                  {book.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">by {book.author}</p>
                <div className="mt-2 text-xs text-gray-400 flex items-center gap-2">
                    <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{book.pages} Pages</span>
                    <span className="flex items-center text-green-600"><CheckCircle className="w-3 h-3 mr-1" /> PDF</span>
                </div>
                <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                 <button className="flex-1 text-center py-2 text-sm font-semibold text-indigo-600 border border-indigo-200 rounded hover:bg-indigo-50 transition-colors">
                    Read Online
                 </button>
                 <button className="flex-none p-2 text-gray-400 border border-gray-200 rounded hover:text-gray-600 hover:bg-gray-50">
                    <Download className="w-5 h-5" />
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EbooksPage;