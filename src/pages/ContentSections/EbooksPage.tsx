import React from 'react';
import { Book, Download, Eye, CheckCircle } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useTranslation } from 'react-i18next';

const EbooksPage: React.FC = () => {
  const { t } = useTranslation();


  const ebooksData = t('ebooks.books', { returnObjects: true }) as { title: string; author: string; description: string }[];

  const ebooks = ebooksData.map((book, index) => ({
    id: index + 1,
    title: book.title,
    author: book.author,
    description: book.description,
    pages: [124, 89, 156, 204][index], // Keep page counts in component
    imageUrl: "/SampleImage.png"
  }));

  return (
    <div className="bg-[#00020F] min-h-screen pt-24 text-[#b2b8ca]">
      <Navbar />

      {/* Hero */}
      <div className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://via.placeholder.com/1200x400')] bg-cover bg-center"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          <h1 id='heading' className="text-5xl font-medium text-white tracking-tight">
            {t('ebooks.hero.title')}
          </h1>
          <p className="mt-4 text-base text-blue-200/80 max-w-2xl mx-auto">
            {t('ebooks.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 xl:px-0 mb-16 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">

          {ebooks.map(book => (
            <div
              key={book.id}
              className="group bg-[#0A1120]/70 rounded-xl border border-white/5 shadow-lg hover:shadow-blue-700/20 transition-all duration-300 flex flex-col"
            >

              {/* Book Cover */}
              <div className="relative w-full h-48 rounded-t-xl overflow-hidden bg-[#101829]">
                <img
                  alt={book.title}
                  src={book.imageUrl}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Layer */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="text-white w-8 h-8" />
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                  {book.title}
                </h3>

                <p className="text-sm text-blue-300/70 mt-1">
                  {t('ebooks.common.by')} {book.author}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <Book className="w-4 h-4 text-blue-400/60" />
                  <span className="text-xs text-blue-300/60">
                    {t('ebooks.common.pages', { count: book.pages })}
                  </span>
                </div>

                <p className="mt-3 text-sm text-blue-300/60 line-clamp-2">
                  {book.description}
                </p>
              </div>

              {/* Footer */}
              <div className="px-4 pb-4 border-t border-white/5 mt-auto pt-4 flex items-center gap-3">
                <button className="flex-1 py-2 text-sm font-semibold text-blue-400 rounded-[4px] border border-blue-800/40 hover:bg-blue-800/20 transition">
                  {t('ebooks.buttons.readOnline')}
                </button>
                <button className="p-2 text-blue-400 rounded-[4px] border border-blue-800/40 hover:bg-blue-800/20 transition">
                  <Download className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EbooksPage;
