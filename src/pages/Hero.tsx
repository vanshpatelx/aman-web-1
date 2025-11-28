'use client'

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Variants } from "framer-motion";
import Navbar from "./Navbar";
import { useTranslation } from "react-i18next";
import GlobeBackground from "@/components/GlobeBackground";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const { t } = useTranslation();

  // Refs
  const globeRef = useRef(null);
  const heroRef = useRef(null);

  // GSAP ScrollTrigger
 useEffect(() => {
  if (!globeRef.current || !heroRef.current) return;

  // Run GSAP only on medium (>=768px) and above
  if (window.innerWidth < 768) return;

  const ctx = gsap.context(() => {
    gsap.fromTo(
      globeRef.current,
      { y: 0, x: 0 },
      {
        x: 300,
        scale: 0.3,
        y: 700,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  return () => ctx.revert();
}, []);


  // Framer Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section>
      <div
        id="home"
        ref={heroRef}
        className="relative h-full min-h-screen text-[#F7F7F7] overflow-hidden z-10"
      >
        {/* Globe wrapper for GSAP */}
        <div
          ref={globeRef}
          className="absolute inset-0 z-20 flex justify-center items-end pointer-events-none"
        >
          <GlobeBackground />
        </div>

        <Navbar />

        {/* Hero Content */}
        <div className="relative min-h-[115vh] w-screen z-30 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 xl:px-0 pt-56 pb-28 2xl:pt-64 2xl:pb-36">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-3xl space-y-6"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-6xl font-normal leading-normal text-white"
              >
                {t("heading")}
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base text-white/90 max-w-xl leading-relaxed"
              >
                {t("subheading")}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 pt-4 px-4 sm:px-0"
              >
                <button className="bg-blue-700 rounded text-white hover:bg-blue-800 px-6 py-3 flex items-center gap-2 transition">
                  {t("cta1")}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>

                <button className="border rounded border-white/30 text-white hover:bg-white hover:text-black px-6 py-3 transition backdrop-blur-sm">
                  {t("cta2")}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
