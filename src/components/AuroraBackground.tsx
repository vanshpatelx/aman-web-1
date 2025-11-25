
import React from 'react';


export const AuroraBackgroundProps : React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-30 bg-[#FAFAFA]">
      {/* CSS Injection for custom animations */}
      <style>
        {`
          @keyframes blob-bounce {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          @keyframes blob-spin {
            0% { transform: rotate(0deg) scale(1); }
            50% { transform: rotate(180deg) scale(1.2); }
            100% { transform: rotate(360deg) scale(1); }
          }
          @keyframes drift {
            0% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(15%, 10%) rotate(5deg); }
            100% { transform: translate(0, 0) rotate(0deg); }
          }
          .animate-blob {
            animation: blob-bounce 15s infinite ease-in-out;
          }
          .animate-blob-slow {
             animation: blob-bounce 20s infinite ease-in-out reverse;
          }
          .animate-drift {
            animation: drift 25s infinite ease-in-out alternate;
          }
          .animation-delay-2000 {
            animation-delay: 3s;
          }
          .animation-delay-4000 {
            animation-delay: 7s;
          }
          .paused {
            animation-play-state: paused !important;
          }
        `}
      </style>

      {/* 
         Enhanced Gradient:
         Using slightly stronger pastel tones to mimic the vibrant mesh effect in the video.
         The mix-blend-multiply on a light background creates that watercolor/mesh look.
      */}

      <div className={`relative w-full h-full filter blur-[80px] opacity-90 `}>
        
        {/* Top Left - Vibrant Violet */}
        <div className={`absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob `}></div>
        
        {/* Top Right - Cyan/Blue */}
        <div className={`absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 `}></div>
        
        {/* Bottom Left - Soft Pink */}
        <div className={`absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 `}></div>

        {/* Bottom Right - Lavender/Indigo */}
        <div className={`absolute bottom-[-20%] right-[-20%] w-[70vw] h-[70vw] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-slow `}></div>

        {/* Center Floating Accent - White/Highlight to create depth and 'shine' */}
        <div className={`absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-white rounded-full mix-blend-overlay filter blur-2xl opacity-60 animate-drift `}></div>
      </div>
      
      {/* Noise Overlay for texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};
