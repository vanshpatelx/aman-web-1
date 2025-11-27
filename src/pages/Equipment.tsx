import React, { useState } from 'react';
import { Plus, Minus, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Equipment: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('energy-audits');
   const { t } = useTranslation();

  const SERVICE_ITEMS = t('equipment.services', { returnObjects: true }) as ServiceItem[];

  const toggleItem = (id: string) => {
    if (activeId === id) {
      setActiveId('');
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className="min-h-screen w-full  mx-auto bg-[#00020F] pt-16 pb-24 ">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        
        <h1 id='heading' className="text-4xl md:text-5xl max-w-4xl lg:text-6xl font-medium leading-relaxed tracking-tight mb-8 text-white">
          {t('equipment.heading')}
        </h1>
        <p className="text-[#A7ADBE] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {t('equipment.subheading')}
        </p>
      </div>

    

      {/* Main Content Split */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center justify-between">
        
        {/* Left Side: Accordion Menu */}
        <div className="lg:col-span-7 flex flex-col order-1 lg:order-0">
          <div className="border-t border-[#242424] sm:px-0 px-4">
            {SERVICE_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div key={item.id} className="border-t border-[#242424] ">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full py-6 flex items-center justify-between text-left group transition-colors duration-200 ${
                      isActive ? 'text-blue-700 ' : 'text-[#A7ADBE] hover:text-[#22222]'
                    }`}
                  >
                    <span className={`text-lg font-normal ${isActive ? 'font-normal' : ''}`}>
                      {item.title}
                    </span>
                    <span className="text-gray-400 group-hover:text-gray-600 transition-colors ml-4">
                      {isActive ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                  </button>
                  
                  {/* Expanded Content */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive ? 'max-h-48 opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-500 leading-relaxed mb-4 pr-4">
                      {item.description}
                    </p>
                    <Link
                    to={item.link}
                    className="inline-flex underline-offset-2 items-center text-[#A7ADBE] hover:text-blue-700 font-medium hover:underline"
                  >
                    Learn more
                    <ChevronRight size={16} className="ml-1" />
                  </Link>

                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 sm:px-0 px-4">
            <button className="bg-blue-700 flex gap-3 justify-center items-center hover:bg-blue-800 rounded  text-white text-sm  font-medium py-4 px-8  transition-colors duration-200 w-full sm:w-auto text-center">
              Request audit
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Side: Visual Illustration */}
        <div className="lg:col-span-5 pt-8 lg:pt-0 order-0 lg:order-1 flex w-full h-full sm:justify-end">
             <img src="semiconductor.png" className='object-contain' alt="" />
    </div>
        
      </div>
    </div>
  );
};


export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  link: string;    // <-- ADDED
}