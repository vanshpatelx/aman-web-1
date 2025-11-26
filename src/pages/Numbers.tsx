import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

interface StatItem {
  label: string;
  value: string;
  description: string;
}

const stats: StatItem[] = [
  {
    label: 'Tool Life Extended',
    value: '+40%',
    description: 'Manufacturers extend the operational life of legacy semiconductor tools through our strategic parts, expertise, and lifecycle support.'
  },
  {
    label: 'Cost of Ownership Reduced',
    value: '25–35%',
    description: 'Through optimized sourcing, refurbished equipment, and knowledge-driven decisions, fabs significantly lower maintenance and operating costs.'
  },
  {
    label: 'Downtime Minimized',
    value: '1200 hrs',
    description: 'Teams reduce breakdowns and production delays with reliable parts, faster sourcing, and expert guidance across tool categories.'
  },
  {
    label: 'Global Reach',
    value: '20+',
    description: 'VSS connects fabs, engineers, brokers, and service teams worldwide—empowering a global semiconductor ecosystem.'
  }
];

const Numbers: React.FC = () => {
  const ref = useRef<HTMLHeadingElement>(null);


  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 55%", "end 40%"], // adjust start/end as needed
  });

  const sentence = `It’s like giving every tool in your fab a second life`;
  const words = sentence.split(" ");

  return (
    <div className="min-h-screen scroll-container2 relative flex items-center justify-center p-4 bg-[#00020F]">
      <div className="w-full max-w-7xl mx-auto py-12 ">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2
              ref={ref}
              className="text-4xl sm:text-5xl max-w-2xl text-gray-400 tracking-tight leading-[1.1]"
            >
              {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                const color = useTransform(scrollYProgress, [start, end], ["#A7ADBE", "#ffffff"]);

                return (
                  <motion.span
                    key={i}
                    style={{ color }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                );
              })}
            </h2>

            <p className="mt-6 text-lg text-[#A7ADBE] max-w-2xl leading-relaxed">
              Our mission-driven approach reduces cost of ownership, improves reliability, and keeps legacy equipment productive for years longer.          
            </p>
          </div>

          <div className="flex-shrink-0">
            <button 
              type="button"
              className="inline-flex items-center justify-center rounded px-6 py-3 border border-transparent text-base text-white bg-blue-700 hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Get started
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col border-t border-[#242424] pt-8 lg:border-t-0 lg:pt-0 relative group">
              <div className={`flex flex-col pt-8 px-6 ${index !== 0 ? 'lg:border-l lg:border-[#242424]' : ''} h-full justify-start space-y-5`}>
                <dt className="text-sm font-normal text-[#A7ADBE]/80 capitalize  mb-5">
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
