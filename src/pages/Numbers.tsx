import React, { useEffect } from 'react';
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);


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
    value: '1,200 hrs',
    description: 'Teams reduce breakdowns and production delays with reliable parts, faster sourcing, and expert guidance across tool categories.'
  },
  {
    label: 'Global Reach',
    value: '20+',
    description: 'VSS connects fabs, engineers, brokers, and service teams worldwide—empowering a global semiconductor ecosystem.'
  }
];

const Numbers: React.FC = () => {
    useEffect(() => {
    // Wait for fonts to load
    document.fonts.ready.then(() => {
      gsap.set(".container2", { opacity: 1 })
      
      // Create SplitText instance
      let split = SplitText.create(".animate-me2", { 
        type: "words", 
        aria: "hidden" 
      })

      // Set initial color 
      gsap.set(split.words, { color: "#E5E7EB" })

      // Create ScrollTrigger animation for color change
      gsap.to(split.words, {
        color: "#000000", // Blue color
        duration: 1,
        ease: "sine.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".animate-me2",
          start: "top 80%",
          end: "bottom 30%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      })
    })

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
  return (
    <section className="min-h-screen scroll-container2 bg-white flex items-center justify-center p-4">

    <div className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
        <div className="max-w-4xl">
          <h2  id="heading2" className="text-4xl animate-me2 sm:text-5xl lg:text-6xl  text-gray-500 tracking-tight leading-[1.1]">
            It’s like giving every tool in   <span className="text-gray-500">your fab a second life</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl leading-relaxed">
            Our mission-driven approach reduces cost of ownership, improves reliability, and keeps legacy equipment productive for years longer.          
            </p>
        </div>
        
        <div className="flex-shrink-0">
          <button 
            type="button"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base rounded-lg text-white bg-black hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Get started
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {stats.map((stat, index) => (
          <div key={index} className="flex box1 flex-col border-t  border-gray-100 pt-8 lg:border-t-0 lg:pt-0 relative group">
           
            <div className={`
              lg:pl-8 
              ${index !== 0 ? 'lg:border-l lg:border-gray-200' : ''} 
              h-full flex flex-col justify-start
            `}>
              <dt className="text-xs font-bold text-[#0066B1] uppercase tracking-widest mb-2">
                {stat.label}
              </dt>
              <dd className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                {stat.value}
              </dd>
              <p className="text-sm text-gray-500 leading-relaxed">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Numbers;