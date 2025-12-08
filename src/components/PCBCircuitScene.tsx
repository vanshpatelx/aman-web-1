import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Circuit paths - more contained within the viewBox
const circuitPaths = {
  left: [
    "M 300 250 H 260 L 240 230 H 190 L 170 230 H 120",
    "M 300 270 H 265 L 245 290 H 200 L 180 270 H 130",
    "M 300 230 H 260 L 240 210 H 195 L 175 210 H 125",
    "M 300 290 H 255 L 235 310 H 185 L 165 290 H 115",
    "M 300 210 H 265 L 245 190 H 200 L 180 170 H 135",
    "M 300 310 H 260 L 240 330 H 195 L 175 350 H 140",
    "M 300 190 H 270 L 250 170 H 210 L 190 150 H 150",
    "M 300 330 H 265 L 245 350 H 205 L 185 370 H 145",
  ],
  right: [
    "M 500 250 H 540 L 560 230 H 610 L 630 230 H 680",
    "M 500 270 H 535 L 555 290 H 600 L 620 270 H 670",
    "M 500 230 H 540 L 560 210 H 605 L 625 210 H 675",
    "M 500 290 H 545 L 565 310 H 615 L 635 290 H 685",
    "M 500 210 H 535 L 555 190 H 600 L 620 170 H 665",
    "M 500 310 H 540 L 560 330 H 605 L 625 350 H 660",
    "M 500 190 H 530 L 550 170 H 590 L 610 150 H 650",
    "M 500 330 H 535 L 555 350 H 595 L 615 370 H 655",
  ],
  top: [
    "M 370 200 V 160 L 355 140 V 100 L 355 80 V 50",
    "M 390 200 V 165 L 405 145 V 105 L 390 85 V 55",
    "M 350 200 V 160 L 335 140 V 105 L 320 85 V 60",
    "M 410 200 V 155 L 425 135 V 90 L 440 70 V 45",
    "M 430 200 V 160 L 445 140 V 100 L 460 80 V 55",
    "M 330 200 V 165 L 315 145 V 110 L 300 90 V 65",
  ],
  bottom: [
    "M 370 300 V 340 L 355 360 V 400 L 355 420 V 450",
    "M 390 300 V 335 L 405 355 V 395 L 390 415 V 445",
    "M 350 300 V 340 L 335 360 V 395 L 320 415 V 440",
    "M 410 300 V 345 L 425 365 V 410 L 440 430 V 455",
    "M 430 300 V 340 L 445 360 V 400 L 460 420 V 445",
    "M 330 300 V 335 L 315 355 V 390 L 300 410 V 435",
  ],
};

// Energy pulse using CSS animation for reliable hover response
function EnergyPulse({ 
  pathData, 
  delay = 0, 
  duration = 3,
  reverse = false,
  isHovered = false,
}: { 
  pathData: string; 
  delay?: number; 
  duration?: number;
  reverse?: boolean;
  isHovered?: boolean;
}) {
  const speed = isHovered ? 0.35 : 1;
  
  return (
    <motion.path
      key={isHovered ? 'hovered' : 'normal'}
      d={pathData}
      fill="none"
      stroke="url(#pulseGradient)"
      strokeWidth={isHovered ? "3.5" : "2.5"}
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{
        pathLength: [0, isHovered ? 0.4 : 0.25, 0],
        opacity: [0, 1, 0],
        pathOffset: reverse ? [1, 0] : [0, 1],
      }}
      transition={{
        duration: duration * speed,
        delay: delay * speed,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        filter: isHovered 
          ? 'drop-shadow(0 0 8px #00d4ff) drop-shadow(0 0 16px #00aaff) drop-shadow(0 0 24px #0077cc)'
          : 'drop-shadow(0 0 4px #00bfff) drop-shadow(0 0 8px #0077cc)',
      }}
    />
  );
}

// Circuit node with hover response
function CircuitNode({ cx, cy, delay = 0, isHovered = false }: { cx: number; cy: number; delay?: number; isHovered?: boolean }) {
  return (
    <g>
      {/* Outer glow */}
      <motion.circle
        key={`glow-${isHovered}`}
        cx={cx}
        cy={cy}
        r={isHovered ? 8 : 5}
        fill="#00bfff"
        initial={{ opacity: 0.1 }}
        animate={{ opacity: isHovered ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1] }}
        transition={{
          duration: isHovered ? 0.5 : 2,
          delay: delay * (isHovered ? 0.2 : 1),
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ filter: isHovered ? 'blur(5px)' : 'blur(3px)' }}
      />
      {/* Core dot */}
      <motion.circle
        key={`core-${isHovered}`}
        cx={cx}
        cy={cy}
        r={isHovered ? 3.5 : 2.5}
        fill="#00d4ff"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: isHovered ? [0.8, 1, 0.8] : [0.5, 1, 0.5] }}
        transition={{
          duration: isHovered ? 0.5 : 2,
          delay: delay * (isHovered ? 0.2 : 1),
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </g>
  );
}

export function PCBCircuitScene({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Endpoint nodes - contained positions
  const nodePositions = [
    // Left endpoints
    { cx: 120, cy: 230 }, { cx: 130, cy: 270 }, { cx: 125, cy: 210 },
    { cx: 115, cy: 290 }, { cx: 135, cy: 170 }, { cx: 140, cy: 350 },
    { cx: 150, cy: 150 }, { cx: 145, cy: 370 },
    // Right endpoints
    { cx: 680, cy: 230 }, { cx: 670, cy: 270 }, { cx: 675, cy: 210 },
    { cx: 685, cy: 290 }, { cx: 665, cy: 170 }, { cx: 660, cy: 350 },
    { cx: 650, cy: 150 }, { cx: 655, cy: 370 },
    // Top endpoints
    { cx: 355, cy: 50 }, { cx: 390, cy: 55 }, { cx: 320, cy: 60 },
    { cx: 440, cy: 45 }, { cx: 460, cy: 55 }, { cx: 300, cy: 65 },
    // Bottom endpoints
    { cx: 355, cy: 450 }, { cx: 390, cy: 445 }, { cx: 320, cy: 440 },
    { cx: 440, cy: 455 }, { cx: 460, cy: 445 }, { cx: 300, cy: 435 },
  ];

  return (
    <div 
      className={`w-full h-full flex items-center justify-center ${className}`}
      style={{ overflow: 'visible' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 800 500"
        className="w-full h-full"
        style={{ 
          overflow: 'visible',
          transition: 'filter 0.3s ease',
          filter: isHovered ? 'brightness(1.3)' : 'brightness(1)',
        }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Main background glow gradient */}
          <radialGradient id="mainGlow" cx="50%" cy="50%" r="60%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#00bfff" stopOpacity={isHovered ? "0.7" : "0.4"} />
            <stop offset="30%" stopColor="#0066cc" stopOpacity={isHovered ? "0.4" : "0.25"} />
            <stop offset="60%" stopColor="#003366" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          
          {/* Chip glow gradient */}
          <radialGradient id="chipGlowGradient" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity={isHovered ? "0.8" : "0.5"} />
            <stop offset="40%" stopColor="#0088cc" stopOpacity={isHovered ? "0.5" : "0.3"} />
            <stop offset="70%" stopColor="#004466" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          
          {/* Energy pulse gradient */}
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0" />
            <stop offset="30%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="70%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
          </linearGradient>
          
          {/* Chip surface gradient */}
          <linearGradient id="chipSurface" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0d1a2a" />
            <stop offset="50%" stopColor="#050a10" />
            <stop offset="100%" stopColor="#0d1a2a" />
          </linearGradient>
          
          {/* Filter for strong glow */}
          <filter id="strongGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation={isHovered ? "12" : "8"} result="blur1" />
            <feGaussianBlur stdDeviation={isHovered ? "6" : "4"} result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background ambient glow */}
        <ellipse
          cx="400"
          cy="250"
          rx={isHovered ? 280 : 220}
          ry={isHovered ? 200 : 150}
          fill="url(#mainGlow)"
          style={{ transition: 'all 0.4s ease' }}
        />
        
        {/* Secondary glow layer */}
        <ellipse
          cx="400"
          cy="250"
          rx={isHovered ? 180 : 140}
          ry={isHovered ? 130 : 100}
          fill="url(#chipGlowGradient)"
          style={{ transition: 'all 0.4s ease' }}
        />

        {/* Static circuit traces - base layer (dark outline) */}
        {Object.values(circuitPaths).flat().map((path, i) => (
          <path
            key={`trace-base-${i}`}
            d={path}
            fill="none"
            stroke="#0a1a2a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}

        {/* Circuit traces - highlight layer */}
        {Object.values(circuitPaths).flat().map((path, i) => (
          <path
            key={`trace-${i}`}
            d={path}
            fill="none"
            stroke={isHovered ? "#2a6a9a" : "#1a5580"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: 'stroke 0.3s ease' }}
          />
        ))}

        {/* Animated energy pulses */}
        {mounted && (
          <>
            {circuitPaths.left.map((path, i) => (
              <EnergyPulse
                key={`pulse-left-${i}-${isHovered}`}
                pathData={path}
                delay={i * 0.4}
                duration={4}
                reverse={true}
                isHovered={isHovered}
              />
            ))}
            {circuitPaths.right.map((path, i) => (
              <EnergyPulse
                key={`pulse-right-${i}-${isHovered}`}
                pathData={path}
                delay={i * 0.4 + 0.2}
                duration={4}
                isHovered={isHovered}
              />
            ))}
            {circuitPaths.top.map((path, i) => (
              <EnergyPulse
                key={`pulse-top-${i}-${isHovered}`}
                pathData={path}
                delay={i * 0.5}
                duration={4.5}
                reverse={true}
                isHovered={isHovered}
              />
            ))}
            {circuitPaths.bottom.map((path, i) => (
              <EnergyPulse
                key={`pulse-bottom-${i}-${isHovered}`}
                pathData={path}
                delay={i * 0.5 + 0.25}
                duration={4.5}
                isHovered={isHovered}
              />
            ))}
          </>
        )}

        {/* Circuit nodes at endpoints */}
        {mounted && nodePositions.map((pos, i) => (
          <CircuitNode
            key={`node-${i}-${isHovered}`}
            cx={pos.cx}
            cy={pos.cy}
            delay={i * 0.06}
            isHovered={isHovered}
          />
        ))}

        {/* Central chip - glow layer */}
        <rect
          x="285"
          y="185"
          width="230"
          height="130"
          fill="url(#chipGlowGradient)"
          filter="url(#strongGlow)"
          rx="6"
          style={{ transition: 'all 0.3s ease' }}
        />

        {/* Central chip - outer frame */}
        <rect
          x="295"
          y="195"
          width="210"
          height="110"
          fill="url(#chipSurface)"
          stroke={isHovered ? "#00e5ff" : "#00a8cc"}
          strokeWidth={isHovered ? "2" : "1.5"}
          rx="4"
          style={{ 
            transition: 'all 0.3s ease',
            filter: isHovered ? 'drop-shadow(0 0 10px #00d4ff)' : 'none',
          }}
        />
        
        {/* Chip inner detail - die area */}
        <rect
          x="315"
          y="215"
          width="170"
          height="70"
          fill="#020508"
          stroke="#1a4a6e"
          strokeWidth="0.5"
          rx="2"
        />
        
        {/* Chip die pattern */}
        <g opacity="0.3">
          {[...Array(8)].map((_, i) => (
            <line
              key={`die-h-${i}`}
              x1="320"
              y1={225 + i * 8}
              x2="480"
              y2={225 + i * 8}
              stroke="#1a3a5a"
              strokeWidth="0.5"
            />
          ))}
          {[...Array(16)].map((_, i) => (
            <line
              key={`die-v-${i}`}
              x1={325 + i * 10}
              y1="220"
              x2={325 + i * 10}
              y2="280"
              stroke="#1a3a5a"
              strokeWidth="0.5"
            />
          ))}
        </g>

        {/* Chip pins/pads */}
        {[...Array(12)].map((_, i) => (
          <rect
            key={`pin-top-${i}`}
            x={310 + i * 15}
            y="195"
            width="8"
            height="3"
            fill={isHovered ? "#2a7aa0" : "#1a5580"}
            rx="0.5"
            style={{ transition: 'fill 0.3s ease' }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <rect
            key={`pin-bottom-${i}`}
            x={310 + i * 15}
            y="302"
            width="8"
            height="3"
            fill={isHovered ? "#2a7aa0" : "#1a5580"}
            rx="0.5"
            style={{ transition: 'fill 0.3s ease' }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <rect
            key={`pin-left-${i}`}
            x="295"
            y={210 + i * 15}
            width="3"
            height="8"
            fill={isHovered ? "#2a7aa0" : "#1a5580"}
            rx="0.5"
            style={{ transition: 'fill 0.3s ease' }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <rect
            key={`pin-right-${i}`}
            x="502"
            y={210 + i * 15}
            width="3"
            height="8"
            fill={isHovered ? "#2a7aa0" : "#1a5580"}
            rx="0.5"
            style={{ transition: 'fill 0.3s ease' }}
          />
        ))}

        {/* Animated chip border glow */}
        {mounted && (
          <motion.rect
            key={`chip-border-${isHovered}`}
            x="295"
            y="195"
            width="210"
            height="110"
            fill="none"
            stroke="#00d4ff"
            strokeWidth={isHovered ? 3 : 1.5}
            rx="4"
            initial={{ opacity: 0.4 }}
            animate={{ opacity: isHovered ? [0.8, 1, 0.8] : [0.4, 0.7, 0.4] }}
            transition={{
              duration: isHovered ? 0.5 : 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: isHovered 
                ? 'drop-shadow(0 0 12px #00d4ff) drop-shadow(0 0 24px #00aaff)'
                : 'drop-shadow(0 0 6px #00d4ff) drop-shadow(0 0 12px #0066cc)',
            }}
          />
        )}
      </svg>
    </div>
  );
}

export default PCBCircuitScene;
