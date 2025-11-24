import React, { useState, useEffect, useRef } from 'react';

// --- Types & Constants ---




const featureContent = [
  {
    label: "Manufacturers",
    title: "Modular architecture",
    description:
      "Explore equipment from leading OEMs including ASML, Applied Materials, Lam Research, TEL, and KLA.",
    img: "/asml.jpg",   // <-- use your URL here
  },
  {
    label: "Opportunities",
    title: "Featured Opportunities",
    description:
      "Access exclusive high-value listings, rare systems, and competitively priced, in-demand semiconductor tools.",
    img: "/indemandsemi.jpg",   // <-- second image
    buttonText: "Explore",
  },
   {
    label: "New Inventory",
    title: "New Arrivals",
    description:
      "Discover the latest additions, from cutting-edge wafer tools to refurbished production-ready systems.",
    img: "/semiready.jpeg",   // <-- use your URL here
  },
   {
    label: "Portal",
    title: "Customer Portal",
    description:
      "Request quotes, manage POs, and streamline procurement with a unified customer workspace.",
    img: "/Po.jpeg",   // <-- use your URL here
  },
];




interface FeatureProps {
  label: string;
  title: string;
  description: string;
  buttonText?: string;
  img?: string;   // <-- add this
}

const FeatureSection: React.FC<FeatureProps> = ({
  label,
  title,
  description,
}) => {
  return (
    
    <div className="flex flex-col justify-center max-w-lg pl-20 ">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-gray-700 font-medium text-sm tracking-wide">
          {label}
        </span>
      </div>

      <h1 className="text-5xl font-medium text-gray-900 mb-6 tracking-tight leading-[1.1]">
        {title}
      </h1>

      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        {description}
      </p>

      <button className="group flex items-center text-[#0066B1] font-semibold hover:text-blue-600 transition-colors w-fit">
        Learn More
        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};


// --- Main Export ---

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ----- featureContent (same as your code) -----

const Shop: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((el, index) => {
      if (!el) return;

      const direction = index % 2 === 0 ? -50 : 50;

      gsap.fromTo(
        el,
        { autoAlpha: 0, y: direction },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col w-full h-full">

      {featureContent.map((item, index) => (
        <div
          key={index}
          ref={(el) => (sectionsRef.current[index] = el!)}
          className={`opacity-0 flex flex-col lg:flex-row w-full h-full relative ${
            index !== 0 ? "mt-20" : ""
          } ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Text Section */}
          <div className="flex-1 p-12 lg:p-20 flex flex-col justify-center bg-white z-10">
            <FeatureSection
              label={item.label}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
            />
          </div>

          {/* Image Section */}
          <div
            className={`flex-1 bg-gray-50/50 relative flex flex-col ${
              index % 2 === 0
                ? "border-l border-gray-100 pr-8 lg:pr-28"
                : "border-r border-gray-100 pl-8 lg:pl-28"
            }`}
          >
            <div className="flex-grow flex items-center justify-center relative z-10 pt-10">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      ))}

    </div>
  );
};

export default Shop;



