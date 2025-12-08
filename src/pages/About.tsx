import React, { forwardRef, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const textRef = useRef(null);

  const sentence = t("about.headline") || "";
  const words = sentence.trim().split(" ") || [];

  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 90%", "end 70%"],
  });

  const color = useTransform(scrollYProgress, [0, 1], ["#A7ADBE", "#ffffff"]);

  return (
    <section ref={ref} className="w-full relative bg-[#00020F] min-h-[80vh]">
      <div className="w-full relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Header Tag */}
            <div className="inline-flex justify-center items-center gap-1.5 px-6 py-2.5 rounded-full border border-[#01083e] bg-[#000529] backdrop-blur-sm mb-8">
              <span className="text-[14px] font-medium text-[#b2b8ca]">
                {t("about.sectionTitle")}
              </span>
            </div>

            {/* Headline */}
            <h2
              ref={textRef}
              id="heading"
              className="text-2xl md:text-3xl lg:text-4xl leading-relaxed font-normal max-w-2xl tracking-normal mb-6"
            >
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  style={{ color }}
                  className="inline-block mr-2 leading-tight"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            {/* Description */}
            <p className="text-[#A7ADBE] text-base md:text-lg leading-relaxed max-w-xl mb-8">
              Precision-engineered semiconductor solutions powering the future of innovation. Our advanced wafer technology delivers unmatched quality and performance.
            </p>

            {/* Learn More Button */}
            <Link
              to={"/about"}
              className="group inline-flex items-center rounded gap-2 px-6 py-3 bg-blue-700 text-white text-sm font-medium hover:bg-blue-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t("about.cta")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Side - Space for 3D Wafer (rendered by PersistentMorphScene) */}
          <div className="flex-1 w-full h-[350px] md:h-[450px] lg:h-[500px] relative">
            {/* The 3D scene is rendered globally and positioned here via scroll */}
          </div>
          
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
