import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MorphParticles } from './MorphParticles';
import { WaferModel } from './WaferModel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Scene({ morphProgress }: { morphProgress: number }) {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#3b82f6" />
      <pointLight position={[0, 5, 0]} intensity={0.5} color="#60a5fa" />

      {/* Morph particles */}
      <MorphParticles progress={morphProgress} particleCount={4000} />

      {/* Wafer model that fades in as morph completes */}
      <WaferModel 
        opacity={Math.pow(morphProgress, 2)} 
        scale={0.9 + morphProgress * 0.1} 
      />

      {/* Globe wireframe that fades out */}
      <mesh>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshBasicMaterial
          color="#4ea8ff"
          wireframe
          transparent
          opacity={Math.pow(1 - morphProgress, 2) * 0.3}
        />
      </mesh>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2 + 0.3}
        minPolarAngle={Math.PI / 2 - 0.3}
      />
    </>
  );
}

interface PersistentMorphSceneProps {
  heroRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
}

export function PersistentMorphScene({ heroRef, aboutRef }: PersistentMorphSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [morphProgress, setMorphProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [showGlow, setShowGlow] = useState(false);
  const [fadeOut, setFadeOut] = useState(0);

  // Wait for refs to be available
  useEffect(() => {
    const checkRefs = () => {
      if (heroRef.current && aboutRef.current) {
        setIsReady(true);
      }
    };
    
    checkRefs();
    const timer = setTimeout(checkRefs, 100);
    
    return () => clearTimeout(timer);
  }, [heroRef, aboutRef]);

  useEffect(() => {
    if (!containerRef.current || !isReady || !heroRef.current || !aboutRef.current) return;

    const container = containerRef.current;
    
    // Get responsive values
    const getResponsiveValues = () => {
      const width = window.innerWidth;
      if (width < 768) {
        return {
          startX: '10vw',
          endX: '15vw',
          startScale: 0.4,
          endScale: 0.3,
          endY: window.innerHeight * 0.1,
        };
      } else if (width < 1024) {
        return {
          startX: '-5vw',
          endX: '5vw',
          startScale: 0.9,
          endScale: 0.7,
          endY: window.innerHeight * 0.3,
        };
      } else {
        return {
          startX: '0vw',
          endX: '10vw',
          startScale: 1.15,
          endScale: 0.85,
          endY: window.innerHeight * 0.3,
        };
      }
    };

    const values = getResponsiveValues();

    // Set initial position
    gsap.set(container, {
      x: values.startX,
      y: 0,
      scale: values.startScale,
    });

    // Parse viewport units to pixels for consistent interpolation
    const parseVw = (vw: string) => {
      const num = parseFloat(vw);
      return (num / 100) * window.innerWidth;
    };

    const startXPx = parseVw(values.startX);
    const endXPx = parseVw(values.endX);

    const ctx = gsap.context(() => {
      // Main morph animation from Hero to About
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        endTrigger: aboutRef.current,
        end: 'center center',
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // Update morph progress
          setMorphProgress(Math.min(1, progress * 1.5));
          
          // Show glow when morph is mostly complete
          setShowGlow(progress > 0.7);
          
          // Use pixel values for smooth interpolation
          const currentX = startXPx + (endXPx - startXPx) * progress;
          const currentY = values.endY * progress;
          const currentScale = values.startScale + (values.endScale - values.startScale) * progress;
          
          gsap.set(container, {
            x: currentX,
            y: currentY,
            scale: currentScale,
            force3D: true,
          });
        },
      });

      // Fade out animation when scrolling past about section
      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: 'top center',
        end: 'top top',
        scrub: 0.3,
        onUpdate: (self) => {
          setFadeOut(self.progress);
        },
      });

    });

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [heroRef, aboutRef, isReady]);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 right-0 w-[80vw] md:w-[60vw] h-screen z-20 transition-opacity duration-300"
      style={{ 
        willChange: 'transform, opacity',
        opacity: 1 - fadeOut,
        pointerEvents: fadeOut > 0.9 ? 'none' : 'auto',
      }}
    >
      {/* Blue glow effect behind wafer */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full transition-opacity duration-700 pointer-events-none ${
          showGlow ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.9) 0%, rgba(59, 130, 246, 0.6) 30%, rgba(59, 130, 246, 0.3) 50%, rgba(59, 130, 246, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Secondary inner glow for more intensity */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full transition-opacity duration-700 pointer-events-none ${
          showGlow ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.8) 0%, rgba(59, 130, 246, 0.4) 50%, rgba(59, 130, 246, 0) 70%)',
          filter: 'blur(30px)',
        }}
      />
      
      <Canvas
        camera={{ position: [0, 2, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene morphProgress={morphProgress} />
      </Canvas>
    </div>
  );
}

export default PersistentMorphScene;
