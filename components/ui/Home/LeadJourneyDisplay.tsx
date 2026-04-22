"use client";

import React from "react";
import { motion } from "framer-motion";

const innerOrbit = [
  { src: "/icons/Meta.svg", alt: "Meta" },
  { src: "/icons/GoogleAds.svg", alt: "Google Ads" },
  { src: "/icons/SalesForce.svg", alt: "Salesforce" },
];

const outerOrbit = [
  { src: "/icons/Gemini.svg", alt: "Gemini" },
  { src: "/icons/GHLAutomation.png", alt: "GHL" },
  { src: "/icons/GoogleAnalytics.svg", alt: "Analytics" },
];

export default function LeadJourneyDisplay() {
  const rotationDuration = 30; 

  return (
    <section className="w-full h-full flex items-center justify-center">
      {/* 3:4 Vertical Ratio Container */}
      <div className="relative w-full max-w-[500px] aspect-[3/3.5] flex flex-col items-center justify-center overflow-hidden rounded-[40px] md:rounded-[60px] bg-[#08080C] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* --- LIGHTER DYNAMIC BACKGROUND --- */}
        <div className="absolute inset-0 z-0">
          {/* Animated Aurora Blobs */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2] 
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
            className="absolute -top-[10%] -left-[10%] w-[80%] h-[70%] bg-indigo-600/40 blur-[100px] rounded-full" 
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ willChange: "transform, opacity" }}
            className="absolute -bottom-[10%] -right-[10%] w-[70%] h-[70%] bg-violet-600/30 blur-[100px] rounded-full" 
          />
          
          {/* Subtle Light-Wash Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-transparent to-violet-500/5" />
          
          {/* More Visible Grid */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at center, #94A3B8 1px, transparent 1px)`,
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(circle at center, black 50%, transparent 95%)",
            }}
          />
        </div>

        {/* --- CENTRAL HUB (Stronger Glow) --- */}
        <div className="relative z-30 flex items-center justify-center">
          {/* Intense Core Glow to brighten the center */}
          <div className="absolute h-40 w-40 rounded-full bg-blue-500/30 blur-[50px]" />
          <div className="relative z-10 h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/30 flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <img src="/icons/lead.svg" alt="Lead" className="h-8 w-8 md:h-10 md:w-10 brightness-150 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          </div>
        </div>

        {/* --- INNER ORBIT (Counter-Clockwise) --- */}
        <motion.div
          animate={{ rotate: [0, -360] }} // Explicit array stops the reset glitch
          transition={{ repeat: Infinity, duration: rotationDuration, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="absolute h-[45%] aspect-square rounded-full border border-white/10"
        >
          {innerOrbit.map((icon, i) => {
            const angle = (i * 360) / innerOrbit.length;
            return (
              <div 
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{ 
                  transform: `rotate(${angle}deg) translate(clamp(80px, 12vw, 110px)) rotate(-${angle}deg)` 
                }}
              >
                <motion.div
                  // Set translation here so Framer controls both center positioning AND rotation without fighting Tailwind
                  style={{ x: "-50%", y: "-50%", willChange: "transform" }}
                  animate={{ rotate: [0, 360] }} // Explicit array stops the reset glitch
                  transition={{ repeat: Infinity, duration: rotationDuration, ease: "linear" }}
                  whileHover={{ scale: 1.1 }}
                  className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/20 shadow-xl cursor-pointer"
                >
                  <img src={icon.src} alt={icon.alt} className="h-6 w-6 object-contain" />
                </motion.div>
              </div>
            );
          })}
        </motion.div>

        {/* --- OUTER ORBIT (Clockwise) --- */}
        <motion.div
          animate={{ rotate: [0, 360] }} // Explicit array stops the reset glitch
          transition={{ repeat: Infinity, duration: rotationDuration, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="absolute h-[85%] aspect-square rounded-full border border-white/5"
        >
          {outerOrbit.map((icon, i) => {
            const angle = (i * 360) / outerOrbit.length + 60;
            return (
              <div 
                key={i}
                className="absolute left-1/2 top-1/2"
                style={{ 
                  transform: `rotate(${angle}deg) translate(clamp(140px, 18vw, 190px)) rotate(-${angle}deg)` 
                }}
              >
                <motion.div
                  // Set translation here so Framer controls both center positioning AND rotation without fighting Tailwind
                  style={{ x: "-50%", y: "-50%", willChange: "transform" }}
                  animate={{ rotate: [0, -360] }} // Explicit array stops the reset glitch
                  transition={{ repeat: Infinity, duration: rotationDuration, ease: "linear" }}
                  whileHover={{ scale: 1.1 }}
                  className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-zinc-900/90 backdrop-blur-md border border-white/20 shadow-2xl cursor-pointer"
                >
                  <img src={icon.src} alt={icon.alt} className="h-8 w-8 object-contain" />
                </motion.div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}