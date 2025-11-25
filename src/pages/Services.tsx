import { ArrowUpRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from "react-router-dom"; // <-- ADD THIS

interface ServiceItem {
  title: string;
  description: string;
  pattern?: string;
  link: string; // <-- ADD LINK
}

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services: ServiceItem[] = [
  {
    title: "Podcast Episodes",
    description: "Expert discussions on semiconductor manufacturing trends and innovations",
    pattern: "/patterns/Burst.svg",
    link: "/PodcastsPage"
  },
  {
    title: "Trending White Papers",
    description: "In-depth technical analysis and research from industry leaders",
    pattern: "/patterns/Looper-3.svg",
    link: "/WhitePapersPage"
  },
  {
    title: "Market Analysis",
    description: "Real-time insights on market trends and equipment valuations",
    pattern: "/patterns/LooperGroup.svg",
    link: "/BlogPage"
  },
  {
    title: "Educational Resources",
    description: "Comprehensive guides and tutorials for semiconductor processes",
    pattern: "/patterns/Topology-1.svg",
    link: "/EbooksPage"
  },
  {
    title: "Industry news",
    description: "Latest developments and emerging technologies in semiconductor manufacturing",
    pattern: "/patterns/Topology-2.svg",
    link: "/IndustryNewsPage"
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
    <div className="border border-gray-200 w-full max-w-7xl mx-auto bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px]">
      
      {services.map((service, index) => (
        <Link
          to={service.link}
          key={index}
          className="service-card bg-white p-8 md:p-10 flex flex-col justify-between h-full min-h-[320px] relative overflow-hidden group"
        >
          <img
            src={service.pattern || "/images/placeholder.png"}
            alt=""
            className="
              absolute bottom-6 right-6 
              opacity-90
              pointer-events-none
              w-[110px] h-[110px]
              md:w-[140px] md:h-[140px]
              lg:w-[170px] lg:h-[170px]
              object-contain z-0
            "
          />

          <div className="overflow-hidden relative z-4">
            <h3 className="service-title text-3xl font-semibold text-[#222222] mb-4 group-hover:text-blue-700 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-normal max-w-[275px]">
              {service.description}
            </p>
          </div>
        </Link>
      ))}

      {/* View More CTA */}
      <Link
        to="/Accessctapage"
        className="bg-white p-8 md:p-10 flex flex-col justify-end items-end h-full min-h-[320px] group"
      >
        <div className="w-full flex items-center justify-end gap-3">
          <span className="text-lg font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
            Access Knowledge Center
          </span>
          <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <ArrowUpRightIcon className="w-5 h-5 text-white" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Services;
