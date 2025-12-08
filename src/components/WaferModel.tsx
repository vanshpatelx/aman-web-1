import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface WaferModelProps {
  opacity?: number;
  scale?: number;
}

export function WaferModel({ opacity = 1, scale = 1 }: WaferModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const waferRef = useRef<THREE.Mesh>(null);

  // Create circuit pattern texture procedurally
  const circuitTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d')!;
    
    // Dark silicon base
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, 512, 512);
    
    // Grid pattern (die layout)
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 0.5;
    
    const gridSize = 32;
    for (let i = 0; i <= 512; i += gridSize) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, 512);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(512, i);
      ctx.stroke();
    }
    
    // Circuit traces
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 1;
    for (let i = 0; i < 20; i++) {
      const x1 = Math.random() * 512;
      const y1 = Math.random() * 512;
      const x2 = x1 + (Math.random() - 0.5) * 100;
      const y2 = y1 + (Math.random() - 0.5) * 100;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    
    // Small die pads
    ctx.fillStyle = '#93c5fd';
    for (let x = gridSize / 2; x < 512; x += gridSize) {
      for (let y = gridSize / 2; y < 512; y += gridSize) {
        if (Math.random() > 0.3) {
          ctx.fillRect(x - 4, y - 4, 8, 8);
        }
      }
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    groupRef.current.rotation.x = 0.5; // Tilted back towards viewer for light reflection
    groupRef.current.rotation.z = 0.3; // Angled to the left
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Main wafer disc */}
      <mesh ref={waferRef} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.08, 64]} />
        <meshStandardMaterial
          map={circuitTexture}
          color="#4a90d9"
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={opacity}
          emissive="#1e40af"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Wafer edge bevel */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.04, 16, 64]} />
        <meshStandardMaterial
          color="#6b7280"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={opacity}
        />
      </mesh>
      
      {/* Notch indicator */}
      <mesh position={[0, 0.05, 2.5]}>
        <boxGeometry args={[0.15, 0.1, 0.15]} />
        <meshStandardMaterial
          color="#374151"
          metalness={0.8}
          roughness={0.3}
          transparent
          opacity={opacity}
        />
      </mesh>
      
    </group>
  );
}

export default WaferModel;
