"use client";

import React from "react";
import { motion } from "framer-motion";

const CountriesCard = () => {
  const regions = [
    { name: "India", file: "india-flag.svg", angle: -145 },
    { name: "Canada", file: "canada-flag.svg", angle: -115 },
    { name: "USA", file: "usa-flag.svg", angle: -65 },
    { name: "Australia", file: "australia-flag.svg", angle: -35 },
  ];

  const radius = 110; // Slightly tighter radius for a shorter card

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-sm bg-white rounded-[2rem] p-8 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.03)] border border-slate-100 flex flex-col items-center overflow-hidden"
    >
      {/* 1. The Core Visualization (Shorter Header) */}
      <div className="relative h-48 w-full flex items-center justify-center mb-4">
        
        {/* Subtle Static Radial Guide */}
        <div className="absolute w-[220px] h-[220px] border border-slate-50 rounded-full" />

        {/* The Minimalist Core (Replacing "System" text) */}
        <div className="relative z-20 w-10 h-10 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center shadow-inner">
           <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-emerald-500"
           />
        </div>

        {/* Flag Nodes & Connections */}
        {regions.map((region, idx) => {
          const x = Math.cos((region.angle * Math.PI) / 180) * radius;
          const y = Math.sin((region.angle * Math.PI) / 180) * radius;

          return (
            <div
              key={region.file}
              className="absolute flex items-center justify-center"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {/* Ultra-subtle connection lines */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 0.05, scaleY: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="absolute w-[1px] bg-slate-900 origin-bottom"
                style={{
                  height: radius - 20,
                  transform: `rotate(${region.angle + 90}deg) translateY(${radius / 2}px)`,
                }}
              />

              {/* Enlarged Flag Container */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20, 
                  delay: 0.1 + idx * 0.1 
                }}
                className="relative z-10 w-14 h-14 rounded-full bg-white shadow-lg border border-slate-50 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={`/icons/${region.file}`}
                  alt={region.name}
                  className="w-9 h-9 object-contain" // Enlarged icons
                />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* 2. Compact Content Section */}
      <div className="w-full text-center">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          4 Countries — One System
        </h2>
        <div className="mt-2 flex flex-col items-center">
          <p className="text-slate-400 text-[13px] font-medium max-w-[200px]">
            Unified infrastructure across global markets.
          </p>
          {/* Subtle Accent Line */}
          <div className="h-[2px] w-8 bg-emerald-500/20 rounded-full mt-4" />
        </div>
      </div>
    </motion.div>
  );
};

export default CountriesCard;