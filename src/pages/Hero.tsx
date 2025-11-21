'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Variants } from "framer-motion";

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // easeOut
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div id='home' className="relative min-h-screen 2xl:min-h-[90vh] text-[#F7F7F7] overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero.jpg"
          alt="Hero background"
          className="w-full h-full object-cover object-center lg:object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#00000080]  -z-10" />
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 border-b py-2 transition-all duration-300
      ${isScrolled || isMenuOpen ? "bg-[#F7F7F7] shadow-md text-[black] border-zinc-300" : "bg-transparent text-[#F7F7F7] border-[#F7F7F7]/20"}
    `}
      >
        <div className="max-w-6xl 2xl:max-w-7xl 2xl:max-w-8xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0 2xl:px-8">
          <div className="flex items-center justify-between h-12 2xl:h-18">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative inline-flex items-end gap-1.5 shrink-0 text-2xl 2xl:text-3xl font-light ${isScrolled || isMenuOpen ? "text-black" : "text-[#F7F7F7]"
                }`}
            >
              <span className="logo leading-none cursor-pointer" title='Sumry Finance'>Sumry Finance</span>
              {/* dot */}
              <span
                className={`w-2 h-2 2xl:w-3 2xl:h-3 rounded-full mb-1 ${isScrolled || isMenuOpen ? "bg-[#0F3D3A]" : "bg-[#C8F8A9]"
                  }`}
              ></span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden md:flex items-center space-x-4 2xl:space-x-6"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm 2xl:text-base p-1 px-3 2xl:px-4 rounded-full font-medium transition-colors ${isScrolled || isMenuOpen ? "text-[#272727] hover:bg-[#272727] hover:text-[#F7F7F7]" : 'text-white  hover:text-[#272727] hover:bg-[#F7F7F7]'
                    }`}
                >
                  {item}
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex items-center space-x-4 2xl:space-x-6"
            >
              <button type='button' className={`px-3.5 py-2 2xl:px-5 2xl:py-3 rounded-[8px] bg-[#F7F7F7] hover:border-gray-400 text-[#272727] transition-colors text-sm 2xl:text-base font-medium cursor-pointer hover:text-[#F7F7F7] hover:bg-[#0F3D3A] ${isScrolled || isMenuOpen ? "border border-[#272727]" : "border-none"
                }`}>
                Get Strategy
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden cursor-pointer"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden pb-6 space-y-5 bg-[#F7F7F7] p-4"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm font-medium p-0.5 px-2.5 rounded-full text-[#272727] w-fit transition-colors hover:text-[#F7F7F7] hover:bg-[#272727]"
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-3 pt-4">
                <button type='button' className="px-4 py-2 rounded-[8px] border border-gray-600 bg-black hover:text-[#F7F7F7] hover:bg-[#0F3D3A] cursor-pointer text-[#F7F7F7] text-sm font-medium w-full">
                  Get Strategy
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl 2xl:max-w-7xl 2xl:max-w-8xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0 2xl:px-8 py-24 2xl:py-32 mt-[24px] sm:mt-[40px] 2xl:mt-[60px]">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 2xl:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4 2xl:space-y-6"
            >
              {/* Badge */}
              <motion.div
                variants={badgeVariants}
                className="w-fit flex items-center gap-3 2xl:gap-4 py-2 shrink-0 rounded-lg"
              >
                <span className="px-2 py-1 bg-[#EBEBEB] text-[#0F3D3A] rounded text-xs sm:text-[14px] 2xl:text-base font-medium text-nowrap">
                  Strategic Lending
                </span>
                <span className="text-[14px] 2xl:text-lg text-[#F7F7F7] text-nowrap">
                  Clarity in Complexity
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                variants={itemVariants}
                className="space-y-2 2xl:space-y-4"
              >
                <h1 className="logo text-5xl xs:text-6xl sm:text-6xl lg:text-[84px] 2xl:text-[120px] font-serif font-light leading-tighter tracking-tight text-[#F7F7F7]">
                  Smarter Lending, <br className='hidden sm:block' />Built Strategically
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-sm sm:text-[18px] 2xl:text-xl text-[#F7F7F7] max-w-lg 2xl:max-w-2xl w-full leading-normal tracking-tight"
              >
                A numbers-driven lending approach built on expertise, partnership, and long-term financial clarity—not just cheaper rates.
              </motion.p>

              {/* CTA Button */}
              <motion.button
                type='button'
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 px-3.5 py-2.5 2xl:px-5 2xl:py-3.5 bg-[#F7F7F7] text-black rounded-[8px] text-[14px] 2xl:text-base font-medium hover:bg-[#C8F8A9] hover:text-[#0F3D3A] transition-colors cursor-pointer"
              >
                Get Your Strategy
                <ArrowRight className="w-4 h-4 2xl:w-5 2xl:h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative h-80 sm:h-96 mt-12 lg:hidden"
          >
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      {/* <div className="max-w-7xl absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 0.9, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"
        />
      </div> */}
    </div>
  )
}
