"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, Zap, ShieldCheck, BarChart3 } from 'lucide-react';

const steps = [
  // Slightly reduced icon sizes (from 36 to 32) to match the smaller circle
  { id: 1, icon: <Fingerprint size={32} strokeWidth={1} />, title: "Audit & Diagnose", desc: "We map where you are, where money is leaking, and what your customer acquisition actually looks like end-to-end." },
  { id: 2, icon: <Zap size={32} strokeWidth={1} />, title: "Campaign Architecture", desc: "Campaign structure, audience segmentation, and tracking setup — all built before the first dollar is spent." },
  { id: 3, icon: <ShieldCheck size={32} strokeWidth={1} />, title: "AI Lead Journey", desc: "GHL automations and WhatsApp sequences that respond in under 5 minutes to book the call — automatically." },
  { id: 4, icon: <BarChart3 size={32} strokeWidth={1} />, title: "Optimize & Scale", desc: "Weekly performance reviews. If something isn't working, we fix it. When efficiency is hit, we scale spend." }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);
  const STEP_DURATION = 5000; // 5 seconds per step

  // Bulletproof Timer Logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, STEP_DURATION);

    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    // Removed md:hidden, added md:py-24 for better desktop vertical rhythm
    <section className="w-full px-6 py-16 md:py-24 bg-black text-white select-none flex flex-col items-center overflow-hidden">
      
      {/* 1. HEADER */}
      <div className="mb-12 md:mb-16 text-center w-full">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-5">
          The Process
        </h2>
        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-[280px] md:max-w-md mx-auto">
          Four steps. From zero signal to booked client.
        </p>
      </div>

      {/* 2. NUMBER & LINE TIMELINE (Constrained width for desktop) */}
      <div className="relative flex items-center justify-between mb-12 md:mb-16 w-full max-w-2xl px-2">
        {/* Faded Background Line */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[1px] bg-white/10 -z-20" />
        
        {/* Animated Active Line */}
        <div 
          className="absolute left-6 top-1/2 -translate-y-1/2 h-[1px] bg-white -z-10 transition-all duration-500 ease-out"
          style={{ width: `calc(${((activeStep - 1) / (steps.length - 1)) * 100}% - 3rem)` }}
        />

        {/* The Numbers */}
        {steps.map((step) => {
          const isActive = activeStep === step.id;
          const isPast = activeStep > step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className="bg-black px-3 py-1 md:px-4 md:py-2 outline-none cursor-pointer"
            >
              <span 
                className={`font-mono text-sm md:text-base tracking-widest transition-all duration-500 ${
                  isActive ? 'text-white font-bold scale-110 inline-block' : isPast ? 'text-white/60' : 'text-zinc-700'
                }`}
              >
                0{step.id}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. OPEN CENTER HUD (Reduced size to w-36 h-36) */}
      <div className="relative w-36 h-36 md:w-40 md:h-40 mx-auto mb-10 shrink-0 flex items-center justify-center">
        
        {/* Very faint ambient light behind the icon */}
        <div className="absolute inset-0 bg-white/[0.02] blur-[40px] rounded-full pointer-events-none" />

        {/* SVG Progress Ring (Updated ViewBox and Radius for new size) */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
          {/* Background Track */}
          <circle cx="80" cy="80" r="78" fill="none" stroke="currentColor" strokeWidth="1" className="text-white/10" />
          
          {/* Animated White Progress Line */}
          <motion.circle
            key={`circle-${activeStep}`}
            cx="80" cy="80" r="78" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
            strokeLinecap="round"
          />
        </svg>

        {/* Centered Icon Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ scale: 0.8, opacity: 0, filter: "blur(4px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.8, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center text-white"
          >
            {steps[activeStep - 1].icon}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. TEXT CONTENT AREA (Constrained width, locked height prevents jumping) */}
      <div className="relative h-[160px] md:h-[130px] w-full max-w-xl text-center shrink-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-start"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
              {steps[activeStep - 1].title}
            </h3>
            <p className="text-zinc-500 text-[15px] md:text-base leading-relaxed max-w-[320px] md:max-w-md">
              {steps[activeStep - 1].desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}