import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface MorphParticlesProps {
  progress: number; // 0 = globe, 1 = wafer
  particleCount?: number;
}

export function MorphParticles({ progress, particleCount = 3000 }: MorphParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);

  // Generate positions for globe and wafer shapes
  const { globePositions, waferPositions, colors } = useMemo(() => {
    const globe = new Float32Array(particleCount * 3);
    const wafer = new Float32Array(particleCount * 3);
    const cols = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Globe positions (sphere)
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 2.5;

      globe[i3] = radius * Math.cos(theta) * Math.sin(phi);
      globe[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      globe[i3 + 2] = radius * Math.cos(phi);

      // Wafer positions (flat disc)
      const waferRadius = Math.sqrt(Math.random()) * 2.5;
      const waferAngle = Math.random() * Math.PI * 2;

      wafer[i3] = waferRadius * Math.cos(waferAngle);
      wafer[i3 + 1] = (Math.random() - 0.5) * 0.1; // Slight height variation
      wafer[i3 + 2] = waferRadius * Math.sin(waferAngle);

      // Colors - transition from blue/cyan (globe) to blue/purple (wafer)
      cols[i3] = 0.2 + Math.random() * 0.3; // R
      cols[i3 + 1] = 0.5 + Math.random() * 0.3; // G
      cols[i3 + 2] = 0.9 + Math.random() * 0.1; // B
    }

    return {
      globePositions: globe,
      waferPositions: wafer,
      colors: cols,
    };
  }, [particleCount]);

  // Interpolated positions
  const currentPositions = useMemo(
    () => new Float32Array(particleCount * 3),
    [particleCount]
  );

  useFrame((state) => {
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Lerp between globe and wafer positions
      const easeProgress = easeInOutCubic(progress);
      
      // Add some turbulence during transition
      const turbulence = Math.sin(progress * Math.PI) * 0.5;
      const noise = Math.sin(time * 2 + i * 0.01) * turbulence;

      positions[i3] = THREE.MathUtils.lerp(
        globePositions[i3],
        waferPositions[i3],
        easeProgress
      ) + noise * 0.1;
      
      positions[i3 + 1] = THREE.MathUtils.lerp(
        globePositions[i3 + 1],
        waferPositions[i3 + 1],
        easeProgress
      ) + noise * 0.15;
      
      positions[i3 + 2] = THREE.MathUtils.lerp(
        globePositions[i3 + 2],
        waferPositions[i3 + 2],
        easeProgress
      ) + noise * 0.1;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Rotate like frisbee (Y-axis) with fixed tilt to match wafer
    pointsRef.current.rotation.y = time * 0.15;
    pointsRef.current.rotation.x = 0.5; // Tilted back towards viewer for light reflection
    pointsRef.current.rotation.z = 0.3; // Angled to the left

    // Update material opacity based on progress
    if (materialRef.current) {
      // Fade particles to 0 when morph is complete (>= 0.85 progress)
      let particleOpacity: number;
      if (progress >= 0.85) {
        // Fade from 0.8 to 0 between 85% and 100%
        particleOpacity = Math.max(0, (1 - (progress - 0.85) / 0.15) * 0.8);
      } else {
        particleOpacity = 0.6 + Math.sin(progress * Math.PI) * 0.4;
      }
      materialRef.current.opacity = particleOpacity;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={currentPositions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Easing function for smooth transition
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export default MorphParticles;
