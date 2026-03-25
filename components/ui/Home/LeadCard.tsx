"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Fingerprint, Plus } from "lucide-react";

const LeadStackCard = () => {
  const targetLeads = 6000;
  const [count, setCount] = useState(0);
  const [visibleAvatars, setVisibleAvatars] = useState([]);
  const leadIndexRef = useRef(0);

  // 1. Dynamic Counter Logic (Stops at 6000+)
  useEffect(() => {
    let start = 0;
    const duration = 2500; // 2.5 seconds
    const increment = targetLeads / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetLeads) {
        setCount(targetLeads);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  // Diverse Lead Personas for the Avatars
  const leadPersonas = [
    { name: "John D.", industry: "B2B", bg: "bg-blue-100", text: "text-blue-900" },
    { name: "Sarah M.", industry: "Real Estate", bg: "bg-amber-100", text: "text-amber-900" },
    { name: "Mike K.", industry: "Tech", bg: "bg-emerald-100", text: "text-emerald-900" },
    { name: "Alex R.", industry: "E-com", bg: "bg-purple-100", text: "text-purple-900" },
    { name: "Niya P.", industry: "Service", bg: "bg-sky-100", text: "text-sky-900" },
  ];

  // 2. Continuous "One-by-One Addition" Logic
  useEffect(() => {
    const additionInterval = setInterval(() => {
      // Add a new avatar sequentially
      const nextAvatar = leadPersonas[leadIndexRef.current % leadPersonas.length];
      setVisibleAvatars((prev) => {
        // Keep the stack minimal (e.g., max 5 avatars visible)
        if (prev.length >= 5) {
          return [...prev.slice(1), nextAvatar]; // Remove oldest, add new
        } else {
          return [...prev, nextAvatar]; // Just add new
        }
      });
      leadIndexRef.current += 1; // Increment for the next persona
    }, 1500); // New avatar added every 1.5 seconds

    return () => clearInterval(additionInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-sm bg-[#F2FAF2] rounded-2xl p-8 border border-emerald-900/5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] font-sans relative"
    >
      {/* 3. Top Header Group (Minimalist Icons) */}
      <div className="flex justify-start mb-6 gap-3">
        <div className="p-2.5 bg-emerald-100/70 rounded-xl">
          <Users className="w-5 h-5 text-emerald-800" />
        </div>
        <div className="p-2.5 bg-emerald-100/70 rounded-xl">
          <Fingerprint className="w-5 h-5 text-emerald-800" />
        </div>
      </div>

      {/* 4. Main Statistic (The Focus) */}
      <div className="text-center mb-10 relative">
        <p className="text-[12px] font-medium text-slate-500 uppercase tracking-wider mb-2">
          Qualified Leads Generated
        </p>
        <div className="flex items-baseline justify-center">
          <span className="text-6xl font-extrabold tracking-tighter text-slate-950 tabular-nums">
            {count.toLocaleString()}<span className="text-emerald-500/40">+</span>
          </span>
        </div>
      </div>

      {/* 5. The Dynamic Avatar Stack (The Continuous Loop) */}
      <div className="w-full bg-white/40 rounded-xl p-6 border border-black/5 flex flex-col items-center gap-6 overflow-hidden min-h-[160px] relative">
        
        {/* Continuous Addition Container (Vertical Movement) */}
        <div className="flex items-center -space-x-3 h-14 relative w-full justify-center">
          <AnimatePresence>
            {visibleAvatars.map((lead, idx) => {
              // unique key combining content and list position
              const uniqueKey = `${lead.name}-${leadIndexRef.current - visibleAvatars.length + idx}`;
              return (
                <motion.div
                  key={uniqueKey}
                  initial={{ opacity: 0, x: -30, scale: 0.8 }} // Entering: faded, moved left, scaled down
                  animate={{ opacity: 1, x: 0, scale: 1 }}     // Visible: fully present
                  exit={{ opacity: 0, x: 10, scale: 0.8 }}       // Exiting: faded, moved right, scaled down
                  transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }} // Spring-like entry
                  className={`w-12 h-12 rounded-full ${lead.bg} ${lead.text} border-2 border-white/60 flex items-center justify-center flex-shrink-0 shadow-lg`}
                  style={{ zIndex: visibleAvatars.length - idx }} // Reversed stack for proper overlapping
                >
                  {/* Lead Details */}
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-[14px] font-extrabold leading-none">
                      {lead.name.split(" ")[0][0]}
                    </span>
                    <span className="text-[9px] font-medium opacity-70 leading-none">
                      {lead.industry}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {/* Subtle Looping Glow/Pulse on the addition nexus */}
          <motion.div
             animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
             transition={{ duration: 2, repeat: Infinity }}
             className="absolute left-[-2rem] w-6 h-6 rounded-full bg-emerald-500/20 blur-md pointer-events-none"
          />
        </div>

        {/* Minimal Feature List for context */}
        <div className="w-full flex justify-around text-center pt-2 border-t border-slate-100">
           {["B2B", "Service", "Real Estate"].map(industry => (
             <span key={industry} className="text-[10px] font-bold text-slate-400 tracking-wider">
               {industry} Focus
             </span>
           ))}
        </div>
      </div>

      {/* Ambient Looping Decoration */}
      <motion.div 
        animate={{ opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-200 rounded-full blur-[60px] pointer-events-none"
      />
    </motion.div>
  );
};

export default LeadStackCard;