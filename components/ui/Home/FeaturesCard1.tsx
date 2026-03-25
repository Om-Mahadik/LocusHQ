"use client";

import React, { useEffect, useState } from "react";
import { DollarSign, Landmark, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CapitalAttractionCard = () => {
  const [count, setCount] = useState(0);
  const target = 500;

  // 1. Dynamic Counter Logic
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className="relative w-full max-w-sm bg-[#FCFFFC] rounded-[3rem] p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] border border-emerald-100/30 overflow-hidden"
    >
      {/* 2. The Capital Flow Visualization (The Unique Loop) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 400 400" className="w-96 h-96 overflow-visible preserve-3d">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0" />
              <stop offset="50%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
            
            {/* The paths for capital attraction: flowing to the center (200,200) */}
            <path id="flowPath1" d="M0,0 C100,0 150,150 200,200" />
            <path id="flowPath2" d="M400,0 C300,0 250,150 200,200" />
            <path id="flowPath3" d="M0,400 C100,400 150,250 200,200" />
            <path id="flowPath4" d="M400,400 C300,400 250,250 200,200" />
          </defs>

          {/* Looping Particles (Data Packets) */}
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <motion.path
                d={i === 1 ? "M0,0 C100,0 150,150 200,200" : i === 2 ? "M400,0 C300,0 250,150 200,200" : i === 3 ? "M0,400 C100,400 150,250 200,200" : "M400,400 C300,400 250,250 200,200"}
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth="2"
                strokeDasharray="40, 100"
                animate={{ strokeDashoffset: [280, 0] }} // Flows inward
                transition={{
                  duration: 2.5 + i * 0.5, // Varied speeds
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              {/* Central pulse where the money 'collides' */}
              <motion.circle
                cx="200"
                cy="200"
                r="40"
                fill="#10b981"
                fillOpacity="0.05"
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
              />
            </React.Fragment>
          ))}
        </svg>
      </div>

      {/* 3. Central Coin Icon */}
      <div className="relative z-10 flex justify-center mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-200/50 relative overflow-hidden group"
        >
          <DollarSign className="w-8 h-8 text-white relative z-10" />
          {/* Subtle spinning glow on the coin itself */}
          <div className="absolute inset-0 bg-white/20 -z-0 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute inset-0 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </motion.div>
      </div>

      {/* Main Content (The Numbers) */}
      <div className="relative z-10 text-center mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2"
        >
          Total Capital Managed
        </motion.p>
        <motion.h2 
          className="text-7xl font-black tracking-tighter text-slate-900 leading-none tabular-nums"
        >
          ${count}<span className="text-4xl text-emerald-500/40">k</span>
        </motion.h2>
        <p className="text-xl font-medium text-slate-500 mt-3 tracking-wide">
          Ad Spend Volume
        </p>
      </div>

      {/* Footer Details (Unique Metric Pulse) */}
      <div className="relative z-10 pt-10 border-t border-slate-100/50 flex justify-between items-center text-center px-4">
        {[
          { icon: Landmark, label: "Market Access", val: "Global" },
          { icon: TrendingUp, label: "Growth MoM", val: "+28.5%" },
        ].map((item, idx) => (
          <div key={idx}>
            <p className="text-[9px] font-bold uppercase tracking-widest text-slate-300 mb-1">{item.label}</p>
            <div className="flex items-center gap-2 justify-center">
              <item.icon className="w-4 h-4 text-emerald-500 opacity-40" />
              <span className="text-sm font-bold text-slate-800 tracking-tight">{item.val}</span>
              <motion.div 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: idx * 0.6 }}
                className="w-1 h-1 rounded-full bg-emerald-400"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CapitalAttractionCard;