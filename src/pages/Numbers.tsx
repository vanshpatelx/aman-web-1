import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from 'react-i18next';

interface StatItem {
  label: string;
  value: string;
  description: string;
}



const Numbers: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);


  const { t } = useTranslation();

  const headline = t("section2.title") || "";
  const words = headline.trim().split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 70%"],
  });

  const color = useTransform(scrollYProgress, [0, 1], ["#A7ADBE", "#ffffff"]);

  // Stats
const stats = t("section2.stats", { returnObjects: true }) as StatItem[];

  return (
<div className="min-h-[70vh] scroll-container2 relative flex items-center justify-center p-4 bg-[#00020F] border-y border-gray-900 py-8">
  <div className="w-full max-w-7xl mx-auto py-12">
    {/* Spherical gradient background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-3xl" />
      </div>
    </div>

    {/* Header Section */}
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8 relative z-10">
      <div className="max-w-3xl relative">
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
        
        <h2
          ref={ref}
          className="text-4xl sm:text-5xl max-w-2xl text-gray-400 tracking-tight leading-[1.1] relative z-10"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              style={{ color }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        <p className="mt-6 text-lg text-[#A7ADBE] max-w-2xl leading-relaxed relative z-10">
          {t("section2.description")}
        </p>
      </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded px-6 py-3 border border-transparent text-base text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              {t("section2.cta")}
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((stat: StatItem, index: number) => (
            <div
              key={index}
              className="flex flex-col border-t border-[#242424] pt-8 lg:border-t-0 lg:pt-0"
            >
              <div className="flex flex-col pt-8 px-6 h-full space-y-5 lg:border-l lg:border-[#242424]">
                
                <dt className="text-sm font-normal text-[#A7ADBE]/80 capitalize mb-5">
                  {stat.label}
                </dt>

                <dd className="text-4xl sm:text-5xl font-medium text-blue-700 mb-6 tracking-tight">
                  {stat.value}
                </dd>

                <p className="text-sm text-[#A7ADBE] leading-normal">
                  {stat.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Numbers;
