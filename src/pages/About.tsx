import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();
  const ref = useRef(null);

 const sentence = t("about.headline") || "";
const words = sentence.trim().split(" ") || [];

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start 90%", "end 70%"],
});

// only ONE transform hook
const color = useTransform(scrollYProgress, [0, 1], ["#A7ADBE", "#ffffff"]);

  return (
    <section className="w-full relative bg-[#00020F]">
      <div className="w-full relative max-w-7xl mx-auto scroll-container px-6 py-24 lg:py-32 overflow-hidden">
        <div className="flex flex-col items-center">

          {/* Header Tag */}
          <div className="inline-flex justify-center items-center gap-1.5 px-6 py-2.5 rounded-full border border-[#01083e] bg-[#000529] backdrop-blur-sm mb-10">
            <span className="text-[14px] font-medium text-[#b2b8ca]">
              {t("about.sectionTitle")}
            </span>
          </div>

          {/* Headline */}
          <h2
  ref={ref}
  id="heading"
  className="text-2xl md:text-4xl lg:text-[44px] leading-relaxed font-normal text-center max-w-5xl mx-auto tracking-normal"
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

          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 w-full max-w-4xl mx-auto mt-14 mb-12 lg:mb-16">

            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-2 md:p-3 rounded-full bg-transparent">
                <img src="./icon.svg" alt="" className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <p className="text-xs md:text-base font-medium text-[#A7ADBE] max-w-[150px] leading-normal">
                {t("about.features.innovation")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-2 md:p-3 rounded-full bg-transparent">
                <img src="./icon3.svg" alt="" className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <p className="text-xs md:text-base font-medium text-[#A7ADBE] max-w-[150px] leading-normal">
                {t("about.features.expertise")}
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="p-2 md:p-3 rounded-full bg-transparent">
                <img src="./icon2.svg" alt="" className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <p className="text-xs md:text-base font-medium text-[#A7ADBE] max-w-[150px] leading-relaxed">
                {t("about.features.vision")}
              </p>
            </div>

          </div>

          {/* Learn More Button */}
          <Link
            to={"/about"}
            className="group inline-flex items-center rounded gap-2 px-6 py-3 bg-blue-700 text-white text-sm font-medium hover:bg-blue-900 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {t("about.cta")}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

        </div>
      </div>
    </section>
  );
};

export default About;