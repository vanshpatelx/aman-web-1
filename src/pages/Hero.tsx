'use client'

import { motion } from 'framer-motion'
import { ArrowRight} from 'lucide-react'
import { Variants } from "framer-motion";
import Navbar from './Navbar';
import {useTranslation} from 'react-i18next'
import GlobeBackground from '@/components/GlobeBackground';

export default function Hero() {
  const {t } = useTranslation()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom Ease Out
      },
    },
  };

  const imageScaleVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id='home' className="relative h-full  z-10 min-h-screen 2xl:min-h-[100vh] text-[#F7F7F7] overflow-hidden">

     

      <div className="absolute flex justify-center items-end inset-0 z-20 ">
       <GlobeBackground />
      </div>



      <Navbar/>

      {/* Hero Section */}
      <div className="relative min-h-[115vh] h-full w-screen overflow-hidden z-30">
      
        
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-6 xl:px-0 pt-56 pb-28 sm:pt-56 sm:pb-28 2xl:pt-64 2xl:pb-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-6">
          <motion.h1
          variants={itemVariants}
          id='heading'
          className="text-4xl md:text-6xl font-normal leading-normal tracking-normal text-white">
            {t("heading")}
          </motion.h1>
          
          <motion.p 
          variants={itemVariants}
          className="text-base text-white/90 max-w-xl font-normal leading-relaxed tracking-wide">
            {t("subheading")}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 pt-4 px-4 sm:px-0">
            <button type='button' className="bg-blue-700 rounded text-white hover:bg-blue-800 px-6 py-3 font-medium transition-colors text-base flex items-center justify-center gap-2 group">
              {t("cta1")}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button type='button' className="border hover:bg-white hover:text-black rounded border-white/30 bg-whitbe hover:border-white text-white px-6 py-3  font-medium text-base transition-all backdrop-blur-sm">
              {t("cta2")}
            </button>
          </motion.div>
        </motion.div>
      </div>

    </div>
    </div>
  )
}
