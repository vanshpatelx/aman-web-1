import { ArrowUpRightIcon } from 'lucide-react';
import React from 'react';

interface ServiceItem {
  title: string;
  description: string;
  pattern?: string; // optional pattern img
}
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services: ServiceItem[] = [
  {
    title: "Podcast Episodes",
    description: "Expert discussions on semiconductor manufacturing trends and innovations",
    pattern: "/patterns/Burst.svg" // ← replace with your image
  },
  {
    title: "Trending White Papers",
    description: "In-depth technical analysis and research from industry leaders",
    pattern: "/patterns/Looper-3.svg"
  },
  {
    title: "Market Analysis",
    description: "Real-time insights on market trends and equipment valuations",
    pattern: "/patterns/LooperGroup.svg"
  },
  {
    title: "Educational Resources",
    description: "Comprehensive guides and tutorials for semiconductor processes",
    pattern: "/patterns/Topology-1.svg"
  },
  {
    title: "Industry news",
    description: "Latest developments and emerging technologies in semiconductor manufacturing",
    pattern: "/patterns/Topology-2.svg"
  }
];

const Services: React.FC = () => {
  useGSAP(() => {
    gsap.from(".service-title", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".service-title",
        start: "top 85%",
      }
    });
    gsap.from(".service-subtitle", {
      y: 80,
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".service-title",
        start: "top 85%",
      }
    });
  }, []);

  return (
    <div className="border border-gray-200 bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-card bg-white p-8 md:p-10 flex flex-col justify-between h-full min-h-[320px] relative overflow-hidden"
        >

          {/* --- Pattern Image Placeholder (180×180px on LG) --- */}
          <img
            src={service.pattern || "/images/placeholder.png"}
            alt=""
            className="
              absolute bottom-6 right-6 
              opacity-70
              pointer-events-none
              w-[120px] h-[120px] 
              md:w-[150px] md:h-[150px] 
              lg:w-[180px] lg:h-[180px] 
              object-contain z-0
            "
          />

          <div className="overflow-hidden relative z-10">
            <div className="overflow-hidden">
              <h3 className="service-title text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
            </div>
            <div className="overflow-hidden">
              <p className="text-[#00253f]/80 service-subtitle text-sm leading-relaxed font-normal">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* View More Card */}
      <div className="bg-white p-8 md:p-10 flex flex-col justify-end items-end h-full min-h-[320px]">
        <div className="w-full flex items-center justify-end gap-3 cursor-pointer group">
          <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            Access Knowledge Center
          </span>
          <div className="w-10 h-10 rounded-full bg-[#0066B1] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
            <ArrowUpRightIcon className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
