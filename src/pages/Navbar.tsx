import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { ChevronDown, Globe, Menu, TrendingUp, Wrench, X, Settings, Package, Briefcase, Search, Truck } from "lucide-react";
import { motion, Variants } from "framer-motion";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openLang, setOpenLang] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");
  const [openMobileDropdown, setOpenMobileDropdown] = useState("");
  const languageLabels = {
    "en": "English",
    "in": "Hindi",
    "fr": "French",
    "kr": "Korean",
    "de": "German",
    "es": "Spanish",
    "it": "Italian",
    "pt": "Portuguese",
    "ms": "Malay",
    "id": "Indonesian",
    "th": "Thai",
    "nl": "Dutch",
    "pl": "Polish",
    "vi": "Vietnamese",
    "ar": "Arabic",
    "cz": "Czech",
  };

  const iconMap = {
    "Equipment Brokering": Briefcase,
    "Inspection Services": Search,
    "Consignment Program": Package,
    "Turnkey Purchasing": Settings,
    "Logistics & Forwarding": Truck,
  };
  const dropdownVariant: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  };

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08 }
    })
  };
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpenLang(false);
  };

  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);

  const navLinks = [
    { name: "Home", to: "/" },

    { name: "About Us", to: "/about" },

    {
      name: "Content",
      dropdown: {
        left: [
          { title: "Industry News & Trends", desc: "Latest updates in semiconductor innovation", to:"/IndustryNewsPage" },
          { title: "Technical Resources", desc: "In-depth technical documentation", to:"/EbooksPage" },
          { title: "Podcasts", desc: "Expert insights and discussions", to:"/PodcastsPage" },
        ],
        right: [
          {heading: "Market Analysis",link: "/BlogPage"},
          {heading:"Educational Resources", link:"/WhitePapersPage"}
        ]
      }
    },

    {
      name: "Solutions",
      dropdown: {
        left: [
          { title: "Equipment Brokering", desc: "Connect buyers and sellers", to:"/Brokering" },
          { title: "Inspection Services", desc: "Quality assurance and testing", to:"/Inspection" },
          { title: "Consignment Program", desc: "Sell your equipment hassle-free", to:"/Disposition" },
        ],
        right: [
          {heading:"Consignment", link:"/Consignment"},
          {heading:"Logistics & Forwarding", link:"/Logistics"}
        ]
      }
    },
  ];

  // Hide-on-scroll navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !isHidden.current) {
        isHidden.current = true;
        gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.3 });
      } else if (currentScrollY < lastScrollY.current && isHidden.current) {
        isHidden.current = false;
        gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.3 });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate mobile menu
  useEffect(() => {
    if (mobileMenu) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
    }
  }, [mobileMenu]);

  return (
    <div ref={navRef} className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`w-full max-w-7xl mx-auto bg-[#00020F] backdrop-blur-md 
      border border-blue-700/30 rounded-[15px] px-6 py-3 md:px-8 
      flex items-center justify-between shadow-lg 
      ${mobileMenu ? "rounded-b-none border-b-0" : ""}`}
      >

        {/* Logo */}
        <Link to='/'><img alt="Vision Semiconductor Solutions logo" src="/Logo.png" className="w-auto h-14 text-white" /></Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex  items-center gap-8">

          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative">
                    <Link
                    to={link.to}
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.name ? "" : link.name)
                      }
                      className="text-sm font-medium text-[#A7ADBE] hover:text-blue-700 transition flex items-center gap-1"
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown size={14} />}
                    </Link>

                    {/* Mega Dropdown */}
                    {link.dropdown && openDropdown === link.name && (
                      <motion.div
                        variants={dropdownVariant}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="
  absolute 
  top-full 
  -left-[550px]
  -translate-x-1/2
  mt-4
  bg-[#0A0F2A]/90
  backdrop-blur-2xl
  border border-white/10
  shadow-[0_10px_40px_rgba(0,0,0,0.4)]
  rounded-3xl
  p-8
  w-[820px]
  flex gap-10
  z-50
"
                      >
                        {/* LEFT CARDS WITH ICONS */}
                        <div className="grid grid-cols-2 gap-6 flex-1">
                          {link.dropdown.left.map((item, index) => {
                            const IconComp = iconMap[item.title] || Briefcase;

                            return (
                              <Link to={item.to}>
                              <motion.div
                                key={item.title}
                                variants={cardVariant}
                                custom={index}
                                initial="hidden"
                                animate="visible"
                                className="
              p-5 rounded-2xl
              bg-white/5
              border border-white/10
              hover:bg-white/[0.08]
              hover:border-blue-500/40
              transition-all duration-200
              cursor-pointer
              group
            "
                              >
                                <div className="flex items-center gap-3">
                                  <IconComp size={20} className="text-blue-400" />
                                  <h4 className="text-white font-semibold text-[15px]">
                                    {item.title}
                                  </h4>
                                </div>

                                <p className="text-[12px] text-gray-400 leading-relaxed mt-2">
                                  {item.desc}
                                </p>
                              </motion.div>
                                </Link>
                            );
                          })}
                        </div>


                        {/* RIGHT LINKS */}
                        <div className="w-48 flex flex-col gap-4 border-l border-white/10 pl-6">
                          {link.dropdown.right.map((item) => (
                            <Link to={item.link}
                              key={item.heading}
                              className="
            text-white/80 text-sm text-left
            hover:text-blue-400
            transition-all
            flex items-center gap-2
          "
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              {item.heading}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>


          <div className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "shop" ? "" : "shop")
              }
              className="bg-white hover:bg-blue-700 hover:text-white text-black text-sm font-medium px-4 py-2 rounded transition lg:flex items-center gap-1 hidden"
            >
              {t("nav.shop")}
              <ChevronDown size={14} />
            </button>

            {openDropdown === "shop" && (
              <motion.div
                variants={dropdownVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="
        absolute top-full right-1/2 mt-4
        bg-[#0A0F2A]/90 backdrop-blur-2xl
        border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        rounded-3xl p-3 w-[600px]
        grid grid-cols-2 gap-4 z-50
      "
              >
                {[
                  {
                    title: "Browse by Manufacturer",
                    desc: "Find equipment by brand",
                    icon: Wrench,
                  },
                  {
                    title: "Browse by Process",
                    desc: "Search by process type",
                    icon: Settings,
                  },
                  {
                    title: "Browse by Condition",
                    desc: "Filter by equipment condition",
                    icon: TrendingUp,
                  }
                ].map((item, index) => {
                  const IconComp = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={cardVariant}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      className="
              p-5 rounded-2xl
              bg-white/5 border border-white/10
              hover:bg-white/[0.08] hover:border-blue-500/40
              transition-all duration-200 cursor-pointer group
            "
                    >
                      <div className="flex items-center gap-3">
                        <IconComp size={22} className="text-blue-400" />
                        <h4 className="text-white font-semibold text-[15px]">
                          {item.title}
                        </h4>
                      </div>

                      <p className="text-[12px] text-gray-400 leading-relaxed mt-2">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>

          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              title="change-language"
              onClick={() => setOpenLang(!openLang)}
              className="flex items-center gap-2 text-blue-700 hover:text-blue-500 transition"
            >
              <Globe size={24} />
            </button>

            {openLang && (
              <div
                className="absolute right-0 mt-2 bg-[#00020F] border border-white/20 
      rounded-xl shadow-lg p-3 w-72 z-50"
              >
                <p className="text-xs text-gray-400 px-1 pb-2">Select Language</p>
                <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto custom-scroll">

                  {Object.keys(languageLabels).map((lang) => (
                    <button
                      type="button"
                      key={lang}
                      onClick={() => {
                        changeLang(lang);
                        setOpenLang(false);
                      }}
                      className="flex items-center gap-2 px-2 py-2 rounded-lg 
            hover:bg-white/10 transition text-white text-sm"
                    >
                      {/* Small circle flag */}
                      <img
                        src={`https://flagcdn.com/24x18/${lang === "en" ? "gb" : lang}.png`}
                        className="w-4 h-4 object-cover rounded-sm"
                        alt={lang}
                      />
                      {languageLabels[lang]}
                    </button>
                  ))}

                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-4">

          {/* Language Icon */}
          <div className="relative">
            <button title="globe" onClick={() => setOpenLang(!openLang)} className="text-blue-700">
              <Globe size={24} />
            </button>
            {openLang && (
              <div className="absolute right-0 mt-2 bg-[#00020F] border border-white/20 rounded-md py-2 w-40 z-[100] max-h-60 overflow-y-auto custom-scroll">
                {Object.keys(languageLabels).map((lang) => (
                  <button
                    type="button"
                    key={lang}
                    onClick={() => changeLang(lang)}
                    className="w-full px-4 py-2 text-left flex gap-2 hover:bg-white/10 text-white text-sm"
                  >
                    <img
                      src={`https://flagcdn.com/24x18/${lang === "en" ? "gb" : lang}.png`}
                      className="w-4 h-4 object-cover rounded-sm"
                      alt={lang}
                    />
                    {languageLabels[lang as keyof typeof languageLabels]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger Menu */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="mb-2 text-white">
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Dropdown --- */}
      {mobileMenu && (
        <div
          ref={mobileMenuRef}
          className="md:hidden absolute top-full left-0 right-0  
      bg-[#00020F] border border-blue-700/30 border-t-0 rounded-b-xl 
       shadow-xl p-6 mx-auto w-[calc(100%-2rem)] max-w-7xl "
        >
          <div className="flex flex-col gap-6 ">

            {/* Nav Links */}
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {!link.dropdown && (
                    <Link
                      to={link.to}
                      onClick={() => setMobileMenu(false)}
                      className="text-lg font-medium text-[#A7ADBE] hover:text-blue-600 transition"
                    >
                      {link.name}
                    </Link>
                  )}

                  {link.dropdown && (
                    <div>
                      <button
                        onClick={() =>
                          setOpenMobileDropdown(
                            openMobileDropdown === link.name ? "" : link.name
                          )
                        }
                        className="w-full flex justify-between items-center text-lg font-medium text-[#A7ADBE] hover:text-blue-600 transition"
                      >
                        {link.name}
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${openMobileDropdown === link.name ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Mobile Expand Content */}
                      {openMobileDropdown === link.name && (
                        <div className="mt-3 pl-4 flex flex-col gap-3">
                          {link.dropdown.left.map((item) => (
                            <Link to = {item.to} >
                            <div key={item.title} className="text-white">
                              <p className="font-medium">{item.title}</p>
                              <p className="text-xs text-gray-400">{item.desc}</p>
                            </div>
                            </Link>
                          ))}
                            {link.dropdown.right.map((item) => (
                           <Link to={item.link}
                              key={item.heading}
                              className="
            text-white/80 text-sm text-left
            hover:text-blue-400
            transition-all
            flex items-center space-y-4 gap-2
          "
                            >
                              
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              {item.heading}
                            </Link>
                            ))}
                        </div>
                      )}
                    </div>
                  )}

                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === "shopMobile" ? "" : "shopMobile")
              }
              className="w-full bg-white text-black text-sm font-medium 
    px-6 py-3 rounded flex items-center justify-between
    hover:bg-blue-700 hover:text-white transition"
            >
              {t("nav.shop")}
              <ChevronDown size={18} />
            </button>

            {/* MOBILE DROPDOWN */}
            {openDropdown === "shopMobile" && (
              <div
                className="mt-3 bg-[#0A0F2A]/90 backdrop-blur-xl border border-white/10 
      rounded-2xl p-5 grid grid-cols-1 gap-4"
              >
                {[
                  {
                    title: "Browse by Manufacturer",
                    desc: "Find equipment by brand",
                    icon: Wrench,
                  },
                  {
                    title: "Browse by Process",
                    desc: "Search by process type",
                    icon: Settings,
                  },
                  {
                    title: "Browse by Condition",
                    desc: "Filter by equipment condition",
                    icon: TrendingUp,
                  }
                ].map((item) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-white/5 border border-white/10 
            hover:bg-white/[0.08] hover:border-blue-500/40
            transition cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <IconComp size={22} className="text-blue-400" />
                        <h3 className="text-white font-semibold text-[15px]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-[12px] text-gray-400 mt-1">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Mobile Language Selector */}
            <div className="mt-2 hidden">
              <p className="text-xs text-gray-400 mb-3">Language</p>
              <div className="flex gap-3 flex-wrap">
                {
                  [
                    "en",      // English
                    "hi",      // Hindi
                    "fr",      // French
                    "ko",      // Korean
                    "de",      // German
                    "es",      // Spanish
                    "it",      // Italian
                    "pt",      // Portuguese
                    "ms",      // Malay
                    "id",      // Indonesian
                    "th",      // Thai
                    "nl",      // Dutch
                    "pl",      // Polish
                    "vi",      // Vietnamese
                    "ar",      // Arabic
                    "cs",      // Czech
                  ].map((lang) => (
                    <button
                      type="button"
                      title={languageLabels[lang]}
                      key={lang}
                      onClick={() => changeLang(lang)}
                      className="px-3 py-1 border border-white/20 rounded text-white hover:bg-white/10"
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
              </div>
            </div>

          </div>
        </div>
      )}


    </div>
  );
};

export default Navbar;
