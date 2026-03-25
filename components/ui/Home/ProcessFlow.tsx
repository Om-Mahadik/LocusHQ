"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { id: 1, label: "STEP 01", title: "Audit & Diagnose", desc: "We map where you are, where money is leaking, and what your customer acquisition actually looks like end-to-end. Before we touch a single campaign, we understand the full picture." },
  { id: 2, label: "STEP 02", title: "Build the Campaign Architecture", desc: "Campaign structure, audience segmentation, creative brief, offer construction, and tracking setup — all built before the first dollar is spent. We don't guess. We engineer." },
  { id: 3, label: "STEP 03", title: "Deploy AI-Powered Lead Journey", desc: "The ad brings them in. The system takes over. GHL automations, ManyChat flows, and WhatsApp sequences that respond in under 5 minutes, qualify the lead, and book the call — automatically." },
  { id: 4, label: "STEP 04", title: "Optimise, Report, Scale", desc: "Weekly performance reviews. Honest numbers. If something isn't working, we say it and fix it — not hide it in a reach report. When efficiency thresholds are hit, we scale spend." }
];

export default function ProcessFlow({ activeStep, setActiveStep }: any) {
  
  // Auto-play logic: Changes the step every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev: number) => (prev % steps.length) + 1);
    }, 5000); // Adjust time here (5000ms = 5s)

    return () => clearInterval(interval);
  }, [setActiveStep]);

  // Precision calculation to hit the center of the rounded squares
  const lineHeight = ((activeStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="flex flex-col select-none">
      <h2 className="text-[30px] md:text-[40px] font-bold tracking-tighter mb-4 text-white">The Process</h2>
      <p className="text-zinc-500 text-[14px] md:text-[15px] mb-12 font-medium">Four steps. From zero signal to booked client.</p>

      <div className="relative">
        {/* Track Background */}
        <div className="absolute left-[18px] top-4 bottom-4 w-[1px] bg-white/5" />
        
        {/* Smooth Fluid Line */}
        <motion.div 
          className="absolute left-[18px] top-4 w-[1px] bg-[#BB8066] z-10 origin-top shadow-[0_0_10px_rgba(187,128,102,0.3)]"
          animate={{ height: `${lineHeight}%` }} 
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        <div className="space-y-12">
          {steps.map((step) => {
            const isCurrent = activeStep === step.id;
            const isCompleted = activeStep >= step.id;

            return (
              <div 
                key={step.id} 
                className="relative flex gap-6 cursor-pointer group" 
                onClick={() => setActiveStep(step.id)} // User can still click to skip
              >
                {/* Rounded Square Node */}
                <motion.div 
                  animate={{ 
                    backgroundColor: isCompleted ? "#BB8066" : "#1A1A1A",
                    color: isCompleted ? "#000" : "#525252",
                    scale: isCurrent ? 1.05 : 1
                  }}
                  className="relative z-20 flex items-center justify-center w-[36px] h-[36px] rounded-xl font-bold text-[12px] shrink-0 transition-all duration-300 shadow-lg"
                >
                  {step.id}
                </motion.div>

                {/* Content */}
                <div className="flex-1 pt-0.5">
                  <span className={`text-[9px] font-bold tracking-[0.2em] transition-colors duration-300 ${isCurrent ? 'text-[#BB8066]' : 'text-zinc-600'}`}>
                    {step.label}
                  </span>
                  <h3 className={`text-[15px] md:text-[17px] font-semibold mt-0.5 tracking-tight transition-colors duration-300 ${isCurrent ? 'text-white' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                    {step.title}
                  </h3>

                  <AnimatePresence mode="sync">
                    {isCurrent && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-500 text-[13px] md:text-[14px] leading-relaxed mt-3 max-w-[340px]">
                          {step.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}