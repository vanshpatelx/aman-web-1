import React from 'react';
import { ChevronRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="px-6 lg:px-8 py-12 lg:py-20 bg-[#00020F]">
      <div className="max-w-7xl mx-auto bg-[#00041F] rounded-3xl p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
        

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Partner with Vision Semiconductor Solutions
            </h2>
            <p className="text-indigo-100 text-lg opacity-90">
              Discover how our precision and innovation can power your next technological breakthrough.
            </p>
          </div>

          <button type='button' className="bg-blue-700 text-white rounded-[5px] font-medium text-lg py-3 px-6 hover:bg-blue-800 transition-colors duration-300 flex items-center gap-2 shadow-lg whitespace-nowrap">
            Contact Us Today
            <ChevronRight size={20} strokeWidth={3} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;