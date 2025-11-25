import React, { useEffect } from 'react';
import { Leaf, CheckCircle2, Lightbulb, ScanEye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { AuroraBackgroundProps } from '@/components/AuroraBackground';

gsap.registerPlugin(ScrollTrigger, SplitText);



const About: React.FC = () => {
   useEffect(() => {
    // Wait for fonts to load
    document.fonts.ready.then(() => {
      gsap.set(".container", { opacity: 1 })
      
      // Create SplitText instance
      let split = SplitText.create(".animate-me", { 
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
          trigger: ".animate-me",
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
    <section className='w-full relative '>
    
    <div  className="w-full relative  max-w-7xl mx-auto scroll-container px-6 py-24 lg:py-32  overflow-hidden">
      
      <div className="flex flex-col items-center">
        {/* Header Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50/50 backdrop-blur-sm mb-10">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-gray-500 uppercase">
            About Vision Semiconductor
          </span>
        </div>

        {/* Main Headline */}
        <div className="overflow-hidden" >
          <h2  id="heading" className="text-2xl animate-me md:text-4xl lg:text-[2.75rem] leading-relaxed font-medium text-center text-[#222222] max-w-5xl mx-auto tracking-normal mb-16 lg:mb-24">
          At Sumry Finance, we combine accounting-level rigour with strategic lending expertise to help clients make smarter, long-term decisions. We go beyond rates — we build structures that align with your financial goals, protect you, and compound over time.        
          </h2>
        </div>

      

        {/* Feature Icons */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl mx-auto mb-12 lg:mb-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-2 md:p-3 rounded-full bg-transparent">
              <CheckCircle2 className="w-5 h-5 md:w-12 md:h-12 text-gray-400 stroke-[1.5]" />
            </div>
            <p className="text-xs md:text-base font-medium text-gray-900 max-w-[150px] leading-relaxed">
              Clarity
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-2 md:p-3 rounded-full bg-transparent">
              <Lightbulb className="w-5 h-5 md:w-12 md:h-12 text-gray-400 stroke-[1.5]" />
            </div>
            <p className="text-xs md:text-base font-medium text-gray-900 max-w-[150px] leading-relaxed">
              Strategy
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center gap-3">
            <div className="p-2 md:p-3 rounded-full bg-transparent">
              <ScanEye className="w-5 h-5 md:w-12 md:h-12 text-gray-400 stroke-[1.5]" />
            </div>
            <p className="text-xs md:text-base font-medium text-gray-900 max-w-[150px] leading-relaxed">
              Precision

            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <Link to={"/about"} className="group inline-flex items-center rounded gap-2 px-6 py-3 bg-blue-700 text-white text-sm font-medium hover:bg-blue-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        
      </div>
    </div>
    </section>
  );
};

export default About;