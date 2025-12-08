import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Suspense, useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MorphParticles } from './MorphParticles';
import { WaferModel } from './WaferModel';
import * as THREE from 'three';

interface GlobeToWaferSceneProps {
  className?: string;
}

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
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2 + 0.5}
        minPolarAngle={Math.PI / 2 - 0.5}
      />
    </>
  );
}

export function GlobeToWaferScene({ className = '' }: GlobeToWaferSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [morphProgress, setMorphProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll to morph progress
  const progress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  useEffect(() => {
    const unsubscribe = progress.on('change', (v) => {
      setMorphProgress(Math.max(0, Math.min(1, v)));
    });
    return () => unsubscribe();
  }, [progress]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 3, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <Scene morphProgress={morphProgress} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default GlobeToWaferScene;
