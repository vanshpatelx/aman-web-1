import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Trans, useTranslation } from 'react-i18next';


// --- Main Component ---

const BlogPage: React.FC = () => {
  const { t } = useTranslation();

   const featuredArticle = t('blog.latestNews.featured', { returnObjects: true });
  const smallArticles = t('blog.latestNews.smallArticles', { returnObjects: true });
  const gridArticles = t('blog.gridSection.articles', { returnObjects: true });

    // Map data to include IDs and image URLs
  const FEATURED_ARTICLE = {
    id: 'featured-1',
    category: featuredArticle.category,
    title: featuredArticle.title,
    author: { name: t('blog.common.author') },
    date: t('blog.common.date'),
    imageUrl: '/SampleImage.png',
    summary: featuredArticle.summary
  };

  const LATEST_NEWS_SMALL = smallArticles.map((article, index) => ({
    id: `small-${index + 1}`,
    category: article.category,
    title: article.title,
    author: { name: t('blog.common.author') },
    date: t('blog.common.date'),
    imageUrl: '/SampleImage.png'
  }));

  const GRID_ARTICLES = gridArticles.map((article, index) => ({
    id: `grid-${index + 1}`,
    category: article.category,
    title: article.title,
    summary: article.summary,
    author: { name: t('blog.common.author') },
    date: t('blog.common.date'),
    imageUrl: '/SampleImage.png'
  }));

  // --- Sub-Components ---

  const ArticleCategory = ({ text }: { text: string }) => (
    <p className="text-xs font-medium tracking-wide text-blue-400 capitalize mb-2">
      {text}
    </p>
  );

  const MetaInfo = ({ author, date }: { author: string; date: string }) => (
    <div className="flex items-center text-sm text-[#8e96a9] mt-2">
      <span className="font-medium text-[#e3e7f1]">{author}</span>
      <span className="mx-2 text-blue-900/40">•</span>
      <span>{date}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#00020F]  text-[#b2b8ca]">

        <Navbar/>
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 xl:px-0  py-20 pt-36">
        
        {/* --- Section 1: Latest News --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#e3e7f1] mb-8">  {t('blog.latestNews.title')}</h2>
          
          <div className="flex flex-col gap-10">
            {/* Featured Large Card */}
            <div className="bg-[#0a0f1f] rounded-3xl p-4 sm:p-6 border border-blue-900/40 shadow-[0_0_15px_rgba(0,0,0,0.4)] flex flex-col lg:flex-row gap-8 items-start hover:shadow-lg transition-shadow duration-300">
              <div className="w-full lg:w-1/2 h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl bg-gray-100">
                <img 
                  src={FEATURED_ARTICLE.imageUrl} 
                  alt={FEATURED_ARTICLE.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col justify-center py-4 lg:pr-8">
                <ArticleCategory text={FEATURED_ARTICLE.category} />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#e3e7f1] leading-tight mb-4">
                  {FEATURED_ARTICLE.title}
                </h3>
                <p className="text-[#b2b8ca] mb-8 text-md leading-relaxed">
                  {FEATURED_ARTICLE.summary}
                </p>
                <MetaInfo author={FEATURED_ARTICLE.author.name} date={FEATURED_ARTICLE.date} />
              </div>
            </div>

            {/* Row of 3 Smaller Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {LATEST_NEWS_SMALL.map((article) => (
                <div key={article.id} className="flex gap-4 group">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden rounded-xl bg-gray-100">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-between py-1">
                    <div>
                      <ArticleCategory text={article.category} />
                        <h4 className="text-sm sm:text-base font-medium text-[#e3e7f1] leading-snug group-hover:text-blue-300 transition-colors">
                        {article.title}
                      </h4>
                    </div>
                    <MetaInfo author={article.author.name} date={article.date} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Section 2: Operating, Reserve, and Vault accounts --- */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-medium text-[#e3e7f1] mb-8">
               <Trans 
                i18nKey="blog.gridSection.title"
                components={{
                  br: <br />
                }}
              />
            </h2>
            
            
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
           {GRID_ARTICLES.map((article) => (
  <div
    key={article.id}
    className="group flex flex-col h-full bg-[#0a0f1f] border border-blue-900/40 rounded-2xl p-4 shadow-[0_0_15px_rgba(0,0,0,0.4)]"
  >
    {/* Image */}
    <div className="h-60 overflow-hidden rounded-2xl bg-[#11162a] mb-6 relative">
      <img
        src={article.imageUrl}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div className="flex-1 flex flex-col">
      
      {/* Category */}
      <ArticleCategory text={article.category} />

      {/* Title + Summary */}
      <div className="flex-1">
        <h3 className="text-xl font-medium text-[#e3e7f1] mb-3 group-hover:text-blue-300 transition-colors leading-tight">
          {article.title}
        </h3>

        <p className="text-[#b2b8ca] line-clamp-3 mb-6 text-sm sm:text-[14px]">
          {article.summary}
        </p>
      </div>

      {/* Meta Info */}
      <div className="flex items-center justify-between mt-auto">
        <MetaInfo author={article.author.name} date={article.date} />
      </div>

      {/* Button */}
      <button className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 mt-6 transition-colors">
        {t('blog.gridSection.button')}
        <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </div>
  </div>
        ))}

          </div>
        </section>

      </div>
      <Footer/>
    </div>
  );
};

export default BlogPage;



export interface Author {
  name: string;
  avatar?: string;
}

export interface Article {
  id: string;
  category: string;
  title: string;
  summary?: string;
  author: Author;
  date: string;
  imageUrl: string;
}