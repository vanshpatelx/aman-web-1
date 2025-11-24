import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About  Us', to: '/about' },
    { name: 'Content', to: '#' },
    { name: 'Solutions', to: '#' },

  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only trigger if scrolled more than 10px (to avoid jittery behavior)
      if (Math.abs(currentScrollY - lastScrollY.current) < 10) {
        return;
      }

      // Scrolling down - hide navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 100 && !isHidden.current) {
        if (navRef.current) {
          isHidden.current = true;
          gsap.to(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }
      // Scrolling up - show navbar
      else if (currentScrollY < lastScrollY.current && isHidden.current) {
        if (navRef.current) {
          isHidden.current = false;
          gsap.to(navRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }

      // Always show navbar at the top
      if (currentScrollY <= 100 && isHidden.current) {
        if (navRef.current) {
          isHidden.current = false;
          gsap.to(navRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={navRef} className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-[95%] md:max-w-[1250px] bg-zinc-950/70 backdrop-blur-md border border-white/10 rounded-xl px-6 py-3 md:px-8 flex items-center justify-between shadow-2xl transition-all duration-300">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center shrink-0">
          <img 
            src="/Logo.png" 
            alt="Logo" 
            className="w-20 h-auto object-contain"
          />
        </div>


        {/* Right Side Group */}
        <div className="flex items-center gap-8">
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-white hover:bg-blue-900 hover:text-white text-black text-sm font-medium px-6 py-2 rounded transition-colors duration-200 shadow-md shadow-orange-900/20">
            Shop Now  
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;