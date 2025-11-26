import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';

const BrandStory: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-[#00020F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-0">
        
        <div className="my-12 sm:my-6 ">
           <span className="text-[#6B7280] font-medium tracking-widest text-xs uppercase mb-2 block">Section 01 — Brand Story</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mt-4">
          
          {/* Left Column: Heading */}
          <div className="lg:w-1/3 flex flex-col items-start">
            <h1 className="text-5xl lg:text-6xl justify-center font-medium text-white tracking-tight flex items-center gap-5">
              Our Story
              <ArrowUpRight className="w-12 h-12 lg:w-12 lg:h-12  text-white mt-2" strokeWidth={1.5} />
            </h1>
          </div>

          {/* Right Column: Content */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-4xl font-normal text-white leading-tight">
                Vision Semiconductor Solutions LLC was founded with a clear purpose to power the future of technology.
              </h2>
              
              <p className="text-[14px] md:text-lg text-[#A7ADBE] leading-relaxed">
                Vision Semiconductor Solutions (VSS) supports the global semiconductor manufacturing industry with precision, innovation, and transparency. 
                What began as a source for surplus and spare equipment has evolved into a platform for knowledge, engineering excellence, and global collaboration.
              </p>
              
              <p className="text-[14px] md:text-lg text-[#A7ADBE] leading-relaxed">
                Rooted in technical expertise, VSS aims to become a trusted hub for solutions, education, and industry influence within the semiconductor ecosystem.
              </p>
            </div>

            {/* Founder/Quote Styled Block */}
            <div className="mt-8 pt-8 border-t border-[#242424] flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-purple to-purple-600 flex-shrink-0 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                  alt="profile" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="text-white font-medium">Vision Semiconductor Solutions</p>
                <p className="text-gray-500 text-sm">Global Leadership Team</p>
                <p className="mt-3 text-gray-400 italic font-normal text-lg">
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