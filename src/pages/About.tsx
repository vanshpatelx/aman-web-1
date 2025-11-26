import React, { useRef } from "react";
import { CheckCircle2, Lightbulb, ScanEye, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const sentence = `
Powering the Future of Technology Through Unrivaled Innovation and a Global Vision for Femiconductor Progress.
`;

const words = sentence.trim().split(" ");

const About: React.FC = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 70%"],
  });

  return (
    <section className="w-full relative bg-[#00020F]">
      <div className="w-full relative max-w-7xl mx-auto scroll-container px-6 py-24 lg:py-32 overflow-hidden">
        <div className="flex flex-col items-center">

          {/* Header Tag */}
          <div className="inline-flex justify-center items-center gap-1.5 px-6 py-2.5 rounded-full border border-[#01083e] bg-[#000529] backdrop-blur-sm mb-10">
            <span className="text-[14px] font-medium text-[#b2b8ca]">
              About Vision Semiconductor
            </span>
          </div>

          {/* Headline */}
          <h2
            ref={ref}
            id="heading"
            className="text-2xl md:text-4xl lg:text-[44px] leading-relaxed font-normal text-center max-w-5xl mx-auto tracking-normal"
          >
            {words.map((word, i) => {
              const start = i / words.length;
              const end = (i + 1) / words.length;

              const color = useTransform(
                scrollYProgress,
                [start, end],
                ["#A7ADBE", "#ffffff"]
              );

              return (
                <motion.span
                  key={i}
                  style={{ color }}
                  className="inline-block mr-2 leading-tight"
                >
                  {word}
                </motion.span>
              );
            })}
          </h2>

          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl mx-auto mt-14 mb-12 lg:mb-16">

            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-2 md:p-3 rounded-full bg-transparent">
                <img src="./icon.svg" alt="" className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <p className="text-xs md:text-base font-medium text-[#A7ADBE] max-w-[150px] leading-normal">
                Innovation
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-2 md:p-3 rounded-full bg-transparent">
               <img src="./icon3.svg" alt="" className="w-8 h-8 md:w-12 md:h-12 stroke-[1.5]" />
              </div>
              <p className="text-xs md:text-base font-medium text-[#A7ADBE] max-w-[150px] leading-normal">
                Expertise
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-2 md:p-3 rounded-full bg-transparent">
                <img src="./icon2.svg" alt="" className="w-8 h-8 md:w-12 md:h-12 stroke-[1.5]" />
              </div>
              <p className="text-xs md:text-base font-medium text-[#A7ADBE] max-w-[150px] leading-relaxed">
                Vision
              </p>
            </div>

          </div>

          {/* Learn More Button */}
          <Link
            to={"/about"}
            className="group inline-flex items-center rounded gap-2 px-6 py-3 bg-blue-700 text-white text-sm font-medium hover:bg-blue-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default About;