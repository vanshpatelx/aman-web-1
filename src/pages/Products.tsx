import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { TabContent, TABS_DATA } from '.';

const Products: React.FC = () => {
const [activeTab, setActiveTab] = useState<string>(TABS_DATA[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayData, setDisplayData] = useState<TabContent | undefined>(TABS_DATA[0]);

  useEffect(() => {
    // When activeTab changes, we trigger a transition
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
        const newData = TABS_DATA.find((t) => t.id === activeTab);
        setDisplayData(newData);
        setIsTransitioning(false);
    }, 300); // Wait for fade out to complete slightly before updating data for smoother feel

    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="w-full flex flex-col items-center bg-white min-h-[800px]">
      {/* Navigation Tabs */}
      <div className="flex justify-center mb-12 space-x-0 sticky top-0 z-30 bg-white/95 backdrop-blur-sm w-full py-4 border-b border-transparent">
        {TABS_DATA.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 min-w-[140px] md:min-w-[180px]
              ${
                activeTab === tab.id
                  ? 'bg-[#1A1A1A] text-white shadow-lg transform '
                  : 'bg-[#F4F4F4] text-gray-500 hover:bg-gray-200 hover:text-gray-800'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="w-full max-w-[1600px] px-4 md:px-12 lg:px-20 pb-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-3/5 relative overflow-hidden h-[400px] md:h-[600px] lg:h-[600px] bg-gray-100">
             <div 
                className={`w-full h-full transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
             >
                {/* We use a key on the img to force a clean unmount/mount transition or just swap src smoothly */}
                <img 
                    key={displayData?.imageUrl}
                    src={displayData?.imageUrl} 
                    alt={displayData?.title}
                    className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${isTransitioning ? 'scale-105' : 'scale-100'}`}
                />
             </div>
          </div>

          {/* Right Column: Text */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center items-start pl-0 lg:pl-4">
            <div 
                key={displayData?.id} // Forces re-render for animation reset
                className={`flex flex-col items-start space-y-6 ${isTransitioning ? 'opacity-50 blur-[2px] transition-all duration-300' : 'opacity-100 blur-0 fade-in-up'}`}
            >
                {/* Number */}
                <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0066B1]/40 font-light tracking-wide border-b border-transparent pb-4 block">
                    {displayData?.number}
                </span>

                {/* Title */}
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-[1.15] font-normal">
                    {displayData?.title}
                </h2>

                {/* Description */}
                <p className="font-sans text-gray-500 leading-relaxed text-sm md:text-base lg:text-lg max-w-md font-light">
                    {displayData?.description}
                </p>

                {/* CTA */}
                <button className="group flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-gray-900 uppercase mt-4 hover:text-[#0066B1] transition-colors">
                    <span className="border-b border-transparent group-hover:border-[#0066B1] transition-all pb-0.5">
                        {displayData?.cta}
                    </span>
                    <div className="rounded-full border border-gray-300 p-2 group-hover:border-[#0066B1] group-hover:bg-[#0066B1] group-hover:text-white transition-all duration-300">
                        <ArrowRight size={12} strokeWidth={3} />
                    </div>
                </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;


