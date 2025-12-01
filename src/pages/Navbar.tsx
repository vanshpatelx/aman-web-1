import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { Globe, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [openLang, setOpenLang] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const languageLabels = {
    "en": "English",
    "hi": "Hindi",
    "fr": "French",
    "ko": "Korean",
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
    "cs": "Czech",
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
    { name: t("nav.home"), to: "/" },
    { name: t("nav.about"), to: "/about" },
    { name: t("nav.content"), to: "#services" },
    { name: t("nav.solutions"), to: "#" }
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
        <img alt="logo" src="/Logo.png" className="w-auto h-14" />

        {/* Desktop Nav */}
        <div className="hidden md:flex  items-center gap-8">

          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-medium text-[#A7ADBE] hover:text-blue-700 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button type="button" className="bg-white hover:bg-blue-700 hover:text-white text-black text-sm font-medium px-6 py-2 rounded transition">
            {t("nav.shop")}
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              title="change-language"
              className="flex items-center gap-2 text-blue-700"
              onClick={() => setOpenLang(!openLang)}
            >
              <Globe size={20} />
            </button>

            {openLang && (
              <div className="absolute right-0 mt-2 bg-black border border-white/20 rounded-md py-2 w-40 z-50">
                {Object.keys(languageLabels).map((lang) => (
                  <button
                    type="button"
                    key={lang}
                    onClick={() => changeLang(lang)}
                    className="block w-full px-4 py-2 text-left hover:bg-white/10 text-white"
                  >
                    {languageLabels[lang]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-4">

          {/* Language Icon */}
          <button title="globe" onClick={() => setOpenLang(!openLang)} className="text-blue-700 hidden md:block">
            <Globe size={20} />
          </button>

          {/* Hamburger Menu */}
          <button onClick={() => setMobileMenu(!mobileMenu)} className="text-white">
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
                <Link
                  key={link.name}
                  to={link.to}
                  onClick={() => setMobileMenu(false)}
                  className="text-lg font-medium text-[#A7ADBE] hover:text-blue-600 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={() => setMobileMenu(false)}
              className="bg-white hover:bg-blue-700 hover:text-white 
        text-black text-sm font-medium px-6 py-2 rounded transition"
            >
              {t("nav.shop")}
            </button>

            {/* Language */}
            <div className="mt-2">
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
