"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { 
    id: 1, 
    title: "Audit & Diagnose", 
    desc: "We map where you are, where money is leaking, and what your customer acquisition actually looks like end-to-end. Before we touch a single campaign, we understand the full picture." 
  },
  { 
    id: 2, 
    title: "Build the Campaign Architecture", 
    desc: "Campaign structure, audience segmentation, creative brief, offer construction, and tracking setup — all built before the first dollar is spent. We don't guess. We engineer." 
  },
  { 
    id: 3, 
    title: "Deploy AI-Powered Lead Journey", 
    desc: "The ad brings them in. The system takes over. GHL automations, ManyChat flows, and WhatsApp sequences that respond in under 5 minutes, qualify the lead, and book the call — automatically. No lead goes cold." 
  },
  { 
    id: 4, 
    title: "Optimise, Report, Scale", 
    desc: "Weekly performance reviews. Honest numbers. If something isn't working, we say it and fix it — not hide it in a reach report. When efficiency is hit, we scale spend. Always moving." 
  }
];

export default function ProcessFlow() {
  const [activeStep, setActiveStep] = useState(1);
  const STEP_DURATION = 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, STEP_DURATION);
    return () => clearTimeout(timer);
  }, [activeStep]);

  return (
    <section className="w-full px-6 py-20 bg-black text-white font-sans antialiased overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <div className="md:col-span-1 flex flex-col justify-start text-center md:text-left md:sticky md:top-32">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              A simple setup that <br className="hidden md:block" />
              gets you moving fast
            </h2>
            <p className="text-zinc-400 text-base md:text-xl leading-relaxed max-w-md mx-auto md:mx-0">
              Set it up once, bring your team in, and run everything from one dashboard.
            </p>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="md:col-span-1 flex flex-col h-[450px] md:h-[450px]">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;
              const isLast = index === steps.length - 1;

              return (
                <div 
                  key={step.id} 
                  className="relative flex items-start gap-x-6 w-full"
                >
                  {/* Indicator & Line */}
                  <div className="flex flex-col items-center flex-shrink-0 relative">
                    <button
                      onClick={() => setActiveStep(step.id)}
                      className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-xl border-2 transition-all duration-500 ease-out ${
                        isActive 
                          ? 'bg-white border-white scale-125 shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                          : 'border-zinc-800 bg-black hover:border-zinc-600'
                      }`}
                    >
                      <span className={`font-mono font-black text-lg transition-all duration-500 ${
                        isActive ? 'text-black scale-110' : 'text-zinc-500'
                      }`}>
                        0{step.id}
                      </span>
                    </button>

                    {!isLast && (
                      <div className="absolute top-14 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-zinc-800" />
                    )}
                  </div>

                  {/* Content Block */}
                  <div 
                    className="flex flex-col flex-grow pt-2 pb-10 cursor-pointer" 
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div className="flex flex-col mb-1">
                      {/* Updated Title size: text-lg md:text-xl */}
                      <h3 className={`text-lg md:text-xl font-bold transition-all duration-500 tracking-tight ${
                        isActive ? 'text-white' : 'text-zinc-600'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={`content-${step.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          {/* Updated Description size: text-[13px] md:text-sm */}
                          <p className="text-zinc-400 text-[13px] md:text-sm leading-relaxed mt-2 max-w-md text-justify [text-justify:inter-word]">
                            {step.desc}
                          </p>
                          
                          {/* Progress bar */}
                          <div className="mt-6 w-full h-[1px] bg-zinc-900 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{ duration: STEP_DURATION / 1000, ease: "linear" }}
                              className="h-full bg-white"
                            />
                          </div>
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
    </section>
  );
}