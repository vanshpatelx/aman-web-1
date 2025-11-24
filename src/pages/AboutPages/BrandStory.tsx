import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const BrandStory: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-8 lg:mb-0">
           <span className="text-[#202020] font-bold tracking-widest text-xs uppercase mb-2 block">Section 01 — Brand Story</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Heading */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <h1 className="text-5xl lg:text-7xl font-bold text-[#202020] tracking-tight flex items-start gap-4">
              Our Story
              <ArrowDownRight className="w-12 h-12 lg:w-16 lg:h-16 text-[#202020] mt-2" strokeWidth={1.5} />
            </h1>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 leading-tight">
                Vision Semiconductor Solutions LLC was founded with a clear purpose to power the future of technology.
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Vision Semiconductor Solutions (VSS) supports the global semiconductor manufacturing industry with precision, innovation, and transparency. 
                What began as a source for surplus and spare equipment has evolved into a platform for knowledge, engineering excellence, and global collaboration.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Rooted in technical expertise, VSS aims to become a trusted hub for solutions, education, and industry influence within the semiconductor ecosystem.
              </p>
            </div>

            {/* Founder/Quote Styled Block */}
            <div className="mt-8 pt-8 border-t border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-purple-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                  alt="profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-gray-900 font-bold">Vision Semiconductor Solutions</p>
                <p className="text-gray-500 text-sm">Global Leadership Team</p>
                <p className="mt-3 text-gray-800 italic font-medium text-lg">
                  "We hold ourselves responsible first, then our team, our customers, and our community."
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BrandStory;