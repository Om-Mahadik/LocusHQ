"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProcessDisplay({ activeStep }: { activeStep: number }) {
  return (
    <div className="w-full aspect-[4/5] md:aspect-square bg-[#0A0A0A] rounded-[40px] md:rounded-[60px] border border-white/[0.03] flex items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        {activeStep === 3 ? (
          /* Step 3: Phone Mockup Simulation */
          <motion.div 
            key="step3"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0 }}
            className="flex gap-4 px-6"
          >
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="w-24 h-48 md:w-32 md:h-64 bg-[#1A1A1A] rounded-2xl border border-white/10 flex flex-col p-3"
              >
                <div className="w-full h-2 bg-white/5 rounded-full mb-2" />
                <div className="w-full h-full bg-zinc-900 rounded-lg flex items-center justify-center">
                   <span className="text-[8px] text-zinc-700 font-bold uppercase tracking-tighter">Screen 0{i}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Default Placeholder for other steps */
          <motion.div 
            key="default"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-zinc-800 text-[10px] font-bold uppercase tracking-[0.4em]"
          >
            Visual Component 0{activeStep}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
    </div>
  );
}