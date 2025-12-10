import { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { MorphParticles } from './MorphParticles';
import { WaferModel } from './WaferModel';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Scene({ morphProgress }: { morphProgress: number }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const sphereSize = 2.5; 
  return (
    <>
      {/* LIGHTS */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[0, 4, 2]} intensity={0.5} />

      {/* PARTICLES */}
      <MorphParticles progress={morphProgress} particleCount={4000} />

      {/* WAFER*/}
      {!isMobile && (
        <WaferModel
          opacity={Math.pow(morphProgress, 2)}
          scale={1 * (0.9 + morphProgress * 0.1)}
        />
      )}

      {/* GLOBE */}
      <mesh>
        <sphereGeometry args={[sphereSize, 32, 32]} />
        <meshBasicMaterial
          color="#4ea8ff"
          wireframe
          transparent
          opacity={Math.pow(1 - morphProgress, 2) * 0.25}
        />
      </mesh>  

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 2 + 0.2}
        minPolarAngle={Math.PI / 2 - 0.2}
      />
    </>
  );
}

export function PersistentMorphScene({ heroRef, aboutRef }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [morphProgress, setMorphProgress] = useState(0);
  const [showGlow, setShowGlow] = useState(false);
  const [fadeOut, setFadeOut] = useState(0);
  const [isReady, setIsReady] = useState(false);

  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (heroRef.current && aboutRef.current) setIsReady(true);
  }, [heroRef, aboutRef]);

  useEffect(() => {
    if (!containerRef.current || !isReady) return;

    const container = containerRef.current;

    gsap.set(container, {
      x: '0vw',
      scale: 1.05,
    });

    const ctx = gsap.context(() => {
      
      // FIRST SCROLLTRIGGER 
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        endTrigger: aboutRef.current,
        end: 'center center',
        scrub: 0.5,
        onUpdate: (self) => {
          const p = self.progress;
          setMorphProgress(Math.min(1, p * 1.25));

          // MOBILE: stops before About
          if (isMobile) {
            setShowGlow(p < 0.4);
          } else {
            // DESKTOP 
            setShowGlow(p > 0.55);
          }

          // Position + scale animation
          gsap.set(container, {
            x: p * 40,
            y: p * 70,
            scale: 1.05 - p * 0.18,
          });
        },
      });

      // Fade out animation when scrolling past about section
      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: 'center center',
        end: 'bottom center',
        scrub: 0.4,
        onUpdate: (self) => {
          setFadeOut(self.progress);

          // MOBILE Glow 
          if (isMobile && self.progress > 0.1) {
            setShowGlow(false);
          }
        },
      });

    });

   window.addEventListener("resize", () => ScrollTrigger.refresh());

    return () => {
      ctx.revert();
      window.removeEventListener('resize', () => ScrollTrigger.refresh ());
      
    };
  }, [isReady]);

  return (
    <div
      ref={containerRef}
      className={`fixed z-10 transition-opacity duration-300
        ${
          isMobile
            ? 'top-32 left-1/2 -translate-x-1/2 w-[100vw] h-[70vh] overflow-hidden'
            : 'top-32 -right-20 xl:right-0 w-[70vw] h-[80vh] lg:w-[60vw] lg:h-[85vh] xl:w-[60vw] xl:[60vh] z-40'
        }`}
      style={{
        opacity: 1 - fadeOut,
        pointerEvents: fadeOut > 0.9 ? 'none' : 'auto',
        willChange: 'transform, opacity',
      }}
    >

      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          rounded-full transition-opacity duration-700 pointer-events-none
          ${showGlow ? 'opacity-60' : 'opacity-0'}`}
        style={{
          width: isMobile ? '330px' : '600px',
          height: isMobile ? '330px' : '600px',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(59,130,246,0) 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* 3D CANVAS */}
      <Canvas
        camera={{ position: [0, 1.2, 6], fov: isMobile ? 50 : 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene morphProgress={morphProgress} />
      </Canvas>

    </div>
  );
}

export default PersistentMorphScene;
