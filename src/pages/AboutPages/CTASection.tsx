import React from 'react';
import { ChevronRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="px-6 lg:px-8 py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto bg-[#202020] rounded-3xl p-8 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
          
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Partner with Vision Semiconductor Solutions
            </h2>
            <p className="text-indigo-100 text-lg opacity-90">
              Discover how our precision and innovation can power your next technological breakthrough.
            </p>
          </div>

          <button className="bg-white text-brand-purple font-bold text-lg py-4 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center gap-2 shadow-lg whitespace-nowrap">
            Contact Us Today
            <ChevronRight size={20} strokeWidth={3} />
          </button>

        </div>
      </div>
    </section>
  );
};

export default CTASection;