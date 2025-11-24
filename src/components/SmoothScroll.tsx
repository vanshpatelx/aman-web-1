import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis only once
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        if (lenisRef.current) {
          lenisRef.current.raf(time);
          requestAnimationFrame(raf);
        }
      }

      requestAnimationFrame(raf);
    }

    return () => {
      // Cleanup on unmount
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    // Handle route changes
    if (lenisRef.current) {
      // Handle hash links
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            lenisRef.current?.scrollTo(element, { offset: 0, duration: 1.5 });
          }, 100);
        }
      } else {
        // Scroll to top on route change (without hash)
        lenisRef.current.scrollTo(0, { immediate: false });
      }
    }
  }, [location.pathname, location.hash]);

  return <>{children}</>;
}

