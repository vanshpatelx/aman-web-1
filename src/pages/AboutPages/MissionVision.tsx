import React from 'react';

const MissionVision: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Intro */}
        <div className="mb-12">
          <h3 className="text-brand-orange font-normal text-lg tracking-wide uppercase">Driving the Industry Forward</h3>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-12"></div>

        {/* Mission Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-24 mb-12">
          <div className="lg:w-1/3">
            <span className="text-gray-400 font-medium tracking-widest text-xs uppercase mb-2 block">Section 02</span>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#222222]">Mission</h2>
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-normal text-gray-900 mb-2">Empowering the Future of Semiconductor Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to deliver reliable semiconductor equipment and knowledge to engineers, manufacturers, and innovators worldwide. 
              We make high-performance solutions accessible, efficient, and scalable—empowering the next generation of technology and manufacturing excellence.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-12"></div>

        {/* Vision Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-24 mb-12">
          <div className="lg:w-1/3">
            <span className="text-gray-400 font-medium tracking-widest text-xs uppercase mb-2 block">Section 03</span>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900">Vision</h2>
          </div>
          <div className="lg:w-2/3">
            <h3 className="text-3xl font-normal text-gray-900 mb-2">Shaping Tomorrow, Today</h3>
            <p className="text-gray-600 leading-relaxed">
              We envision becoming a global center for semiconductor solutions, education, and industry leadership. 
              Through clarity, innovation, and long-term commitment, we aim to influence the future of the semiconductor ecosystem and elevate technological progress around the world.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200"></div>

      </div>
    </section>
  );
};

export default MissionVision;