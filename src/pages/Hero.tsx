'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Variants } from "framer-motion";
import Navbar from './Navbar';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ['Home', 'About', 'Service', 'Team', 'Contact']
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div id='home' className="relative min-h-screen 2xl:min-h-[90vh] text-[#F7F7F7] overflow-hidden">

     

      <div className="absolute inset-0 -z-10 bg-black">
        <motion.div
          variants={imageScaleVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0"
        >
          {/* Using a tech-focused placeholder image */}
          <img
          src="/hero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover object-center lg:object-center"
        />
          {/* Gradient Overlay for text readability */}

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </div>



      <Navbar/>

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden ">
      {/* Background Image with Cinematic Gradient Overlay */}
      
        
      {/* Main Content */}
      <div className="rmax-w-6xl 2xl:max-w-7xl mx-auto px-4 md:px-8 lg:px-10 xl:px-10 2xl:px-8 pt-32 pb-20 sm:pt-40 sm:pb-28 2xl:pt-64 2xl:pb-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-8">
          <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-white">
            Engineering excellence<br />

            for a faster, smarter <br />
            <span className="text-white">semiconductor world</span>
          </motion.h1>
          
          <motion.p 
          variants={itemVariants}
          className="text-lg text-white/90 max-w-xl font-light leading-relaxed">
              Experience a numbers-driven lending approach built on expertise, partnership, and long-term financial clarity—delivering more than just competitive rates.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-sm font-semibold transition-colors flex items-center justify-center gap-2 group">
              Explore solutions
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="border border-white/30 hover:bg-white/10 hover:border-white text-white px-8 py-4 text-sm font-semibold transition-all backdrop-blur-sm">
              Schedule a call
            </button>
          </motion.div>
        </motion.div>
      </div>

    </div>
    </div>
  )
}
