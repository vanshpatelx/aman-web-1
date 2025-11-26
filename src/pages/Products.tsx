import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { TabContent, TABS_DATA } from '.';
import { Link } from 'react-router-dom';

const Products: React.FC = () => {
const [activeTab, setActiveTab] = useState<string>(TABS_DATA[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayData, setDisplayData] = useState<TabContent | undefined>(TABS_DATA[0]);

  useEffect(() => {
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
        const newData = TABS_DATA.find((t) => t.id === activeTab);
        setDisplayData(newData);
        setIsTransitioning(false);
    }, 300); 

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="w-full  flex flex-col  items-center bg-[#00020F] min-h-[800px]">
      {/* Navigation Tabs */}
      <div className="flex sm:flex-row sm:px-0 px-4 flex-col justify-center mb-12 space-x-0  top-0 z-0 w-full py-4 border-b border-transparent ">
        {TABS_DATA.map((tab) => (
          <button
          type='button'
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-8 py-4 text-sm capitalize transition-all duration-300 min-w-[140px] md:min-w-[180px]
              ${
                activeTab === tab.id
                  ? 'bg-blue-700 text-white shadow-lg transform '
                  : 'bg-[#ced0d3]  hover:bg-gray-200 hover:text-gray-800'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full max-w-7xl mx-auto sm:px-0 px-4  pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-3/5 relative overflow-hidden h-[400px] md:h-[600px] lg:h-[500px] bg-gray-100 rounded-[12px]">
             <div 
                className={`w-full h-full transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
             >
                <img 
                    key={displayData?.imageUrl}
                    src={displayData?.imageUrl} 
                    alt={displayData?.title}
                    className={`w-full h-full object-cover  transition-transform duration-[2000ms] ease-out ${isTransitioning ? 'scale-105' : 'scale-100'}`}
                />
             </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center items-start pl-0 lg:pl-4">
            <div 
                key={displayData?.id}
                className={`flex flex-col items-start space-y-6 ${isTransitioning ? 'opacity-50 blur-[2px] transition-all duration-300' : 'opacity-100 blur-0 fade-in-up'}`}
            >
                {/* Number */}
                <span id='heading' className="font-serif text-4xl md:text-5xl lg:text-6xl  text-[#cbcbcb]  font-light tracking-wide border-b border-transparent pb-4 block">
                    {displayData?.number}
                </span>

                {/* Title */}
                <h2 id='heading' className="font-serif text-3xl md:text-4xl lg:text-5xl text-blue-700 leading-[1.15] font-normal">
                    {displayData?.title}
                </h2>

                {/* Description */}
                <p className="font-sans text-[#A7ADBE]  leading-relaxed text-sm md:text-base lg:text-lg max-w-md font-normal">
                    {displayData?.description}
                </p>

                {/* CTA */}
               <Link to={"/about"} className="group inline-flex items-center rounded gap-2 px-6 py-3 bg-blue-700 text-white text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
                         Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;


