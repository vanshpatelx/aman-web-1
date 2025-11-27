import { ArrowUpRight, ArrowUpRightIcon } from 'lucide-react';
import React from 'react';
import { Link } from "react-router-dom";

interface ServiceItem {
  title: string;
  description: string;
  pattern?: string;
  link: string;
}

const contentVariants: Variants = {
  initial: {
    y: 0
  },
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};


const arrowVariants: Variants = {
  initial: {
    x: 0,
    y: 0,
    rotate: 0
  },
  hover: {
    x: 3,
    y: -3,
    rotate: 45,
    transition: {
      type:"tween",
      stiffness: 500,
      damping: 15
    }
  }
};


const patternVariants: Variants = {
  initial: {
    scale: 1,
    opacity: 0.9,
    rotate: 0
  },
  hover: {
    scale: 1.1,
    opacity: 1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, Variants } from 'framer-motion';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);


const Services: React.FC = () => {

   const { t } = useTranslation();
  
  const services = t('services.services', { returnObjects: true }) as ServiceItem[];

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
    <div id='services' className='w-full bg-[#00020F] mx-auto py-12 h-full'>
      <div className="border border-[#242424] w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileHover="hover"
            className="relative"
          >
            <Link
              to={service.link}
              className="service-card bg-[#00020F] border-[0.5px] border-[#242424]/70 p-8 md:p-8 flex flex-col justify-between h-full min-h-[320px] relative group cursor-pointer overflow-hidden"
            >
              {/* Pattern Image */}
              <motion.img
                src={service.pattern || "/images/placeholder.png"}
                alt=""
                variants={patternVariants}
                className="
          absolute bottom-6 right-6 
          pointer-events-none
          w-[110px] h-[110px]
          md:w-[140px] md:h-[140px]
          lg:w-[170px] lg:h-[170px]
          object-contain z-0
        "
              />

              {/* Content  */}
              <motion.div
                variants={contentVariants}
                className="overflow-hidden relative z-4"
              >
                <div className='flex justify-between items-start'>
                  <h3 className="service-title text-2xl font-semibold text-white mb-4 transition-colors">
                    {service.title}
                  </h3>

                  {/*  Arrow */}
                  <motion.div
                    variants={arrowVariants}
                    className="p-2 rounded-[8px]"
                  >
                    <ArrowUpRight
                      className="w-6 h-6 text-blue-700"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </div>

                <p className="text-[#A7ADBE]/80 text-sm leading-relaxed font-normal max-w-[275px]">
                  {service.description}
                </p>
              </motion.div>

              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-1" />
            </Link>
          </motion.div>
        ))}

        {/* View More CTA */}
        <Link
          to="/Accessctapage"
          className="bg-[#00020F] p-8 md:p-10 flex flex-col justify-end items-end h-full min-h-[320px] group"
        >
          <div className="w-full flex items-center justify-end gap-3">
            <span className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors">
              Access Knowledge Center
            </span>
            <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
              <ArrowUpRightIcon className="w-5 h-5 text-white" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
