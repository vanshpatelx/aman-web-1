import { useEffect, useRef, useState } from "react";
import Globe, { GlobeMethods } from "react-globe.gl";

const GlobeBackground = () => {
  const globeRef = useRef<GlobeMethods | null>(null);

  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  const [shift, setShift] = useState({
    x: 200,
    y: 40,
  });

  // Rotation
  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    if (!controls) return;

    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableRotate = true;

    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
  }, []);

  // Responsive Resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;


      if (width <= 480) {
        // Mobile
        setShift({ x: 0, y: 20 }); 
      } else if (width <= 768) {
        // Tablet
        setShift({ x: 0, y: 0 }); 
      } else {
        // Desktop
        setShift({ x: 210, y: 30 });
      }

      setSize({
        width,
        height: window.innerHeight,
      });
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive
  useEffect(() => {
    if (!globeRef.current) return;

    const width = size.width;
    let altitude = 2.5;

    if (width > 1600) altitude = 1.6;
    else if (width > 1440) altitude = 1.75;
    else if (width > 1280) altitude = 2.0;
    else if (width > 1024) altitude = 2.3;
    else altitude = 2.8;

    globeRef.current.pointOfView(
      { lat: 0, lng: 0, altitude },
      1200
    );
  }, [size.width]);

  return (
    <div className="absolute inset-0 z-30 w-full h-full overflow-hidden flex items-center justify-center">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          transform: `translateX(${shift.x}px) translateY(${shift.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          showAtmosphere
          atmosphereColor="#4ea8ff"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          waitForGlobeReady
          animateIn={false}
        />
      </div>
    </div>
  );
};

export default GlobeBackground;
