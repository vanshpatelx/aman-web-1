import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);

  const navLinks = [
    { name: t("nav.home"), to: "/" },
    { name: t("nav.about"), to: "/about" },
    { name: t("nav.content"), to: "#services" },
    { name: t("nav.solutions"), to: "#" }
  ];

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

  return (
    <div ref={navRef} className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-7xl mx-auto bg-[#00020F] backdrop-blur-md border border-blue-700/30 rounded-[15px] px-6 py-3 md:px-8 flex items-center justify-between shadow-lg">

        {/* Logo */}
        <img alt="logo" src="/Logo.png" className="w-auto h-14" />

        {/* Right Side */}
        <div className="flex items-center gap-8">

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* CTA Button */}
          <button type="button" className="bg-white hover:bg-blue-700 hover:text-white text-black text-sm font-medium px-6 py-2 rounded transition">
            {t("nav.shop")}
          </button>

          {/* Language Switcher */}
          <div className="relative group">
            <button
              type="button"
              title="change-language"
              className="flex items-center gap-2 text-blue-700"
              onClick={() => setOpen(!open)}
            >
              <Globe size={20} />
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 bg-black border border-white/20 rounded-md py-2 w-32 z-50">
                <button
                  type="button"
                  onClick={() => changeLang("en")}
                  className="block w-full px-4 py-2 text-left hover:bg-white/10 text-white"
                >
                  English
                </button>

                <button
                  type="button"
                  onClick={() => changeLang("hi")}
                  className="block w-full px-4 py-2 text-left hover:bg-white/10 text-white"
                >
                  Hindi
                </button>

                <button
                  type="button"
                  onClick={() => changeLang("fr")}
                  className="block w-full px-4 py-2 text-left hover:bg-white/10 text-white"
                >
                  French
                </button>
              </div>
            )}
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
