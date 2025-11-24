import React, { useState } from 'react';
import { Plus, Minus, ChevronRight } from 'lucide-react';

export const Equipment: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('energy-audits');

  const toggleItem = (id: string) => {
    if (activeId === id) {
      setActiveId('');
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-16 pb-24 px-6 md:px-12 lg:px-24">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-8 text-gray-950">
          Engineering pathways <br className="hidden md:block" />
          to industrial sustainability
        </h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          From energy generation to long-term system efficiency, we deliver solutions
          that cut costs, reduce emissions, and ensure resilient operations.
        </p>
      </div>

      {/* Main Content Split */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        
        {/* Left Side: Accordion Menu */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="border-t border-gray-200">
            {SERVICE_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div key={item.id} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleItem(item.id)}
                    className={`w-full py-6 flex items-center justify-between text-left group transition-colors duration-200 ${
                      isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className={`text-lg font-medium ${isActive ? 'font-semibold' : ''}`}>
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
                    <a 
                      href="#" 
                      className="inline-flex items-center   text-[#0066B1] font-medium  hover:underline"
                    >
                      Learn more 
                      <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <button className="bg-gray-900 text-white text-sm  font-semibold py-4 px-8  transition-colors duration-200 w-full sm:w-auto text-center">
              Request audit
            </button>
          </div>
        </div>

        {/* Right Side: Visual Illustration */}
        <div className="lg:col-span-7 pt-8 lg:pt-0 hidden md:block">
          {/* 
            In a real app, we might switch the illustration based on the activeId.
            For this clone, we use the wireframe solar panel as the primary visual.
          */}
          <div className="relative w-full bg-[url('/Equipment.png')] bg-cover bg-center aspect-[4/3] flex items-center justify-center p-8">
             
          </div>
        </div>
        
      </div>
    </div>
  );
};


export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}


const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'energy-audits',
    title: 'Energy audits & diagnostics',
    description: 'In-depth analysis of energy use, uncovering inefficiencies and hidden costs.'
  },
  {
    id: 'automation',
    title: 'Industrial automation upgrades',
    description: 'Modernizing control systems to enhance precision, safety, and operational throughput.'
  },
  {
    id: 'renewable',
    title: 'Renewable power integration',
    description: 'Seamlessly connecting solar, wind, and storage solutions into existing grid infrastructures.'
  },
  {
    id: 'hvac',
    title: 'HVAC & Thermal optimization',
    description: 'Advanced thermal management strategies to reduce waste heat and improve climate control efficiency.'
  }
];