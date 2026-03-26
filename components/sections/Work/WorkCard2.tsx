// src/components/work/WorkCard2.tsx
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WorkCard2() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full group mb-16 md:mb-0"
    >
      <div className="relative aspect-[4/3.8] rounded-[45px] overflow-hidden border border-blue-500/20 mb-8">
        <Image src="/imgs/work2.jpg" alt="Avora Cafe" fill className="object-cover" />
      </div>

      <div className="flex justify-between items-start mb-4 px-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight">
          Avora Cafe — Zero to Revenue in 90 Days
        </h3>
        <span className="text-2xl">🇮🇳</span>
      </div>

      <p className="text-zinc-400 text-base md:text-lg mb-2 font-light px-2">From opening day to $24,000 monthly revenue</p>
      <p className="text-zinc-600 text-[11px] mb-8 uppercase tracking-widest font-medium px-2">Restaurant Launch • India</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-zinc-900/60 border border-zinc-800/40 rounded-[35px] px-8 py-6 flex items-baseline justify-between">
          <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">$24K</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest text-right max-w-[80px]">monthly revenue</span>
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800/40 rounded-[35px] px-8 py-6 flex items-baseline justify-between">
          <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">$0.35</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest text-right max-w-[80px]">per customer conversation</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-zinc-500 text-sm ml-4">
        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
        <p>$840 USD total ad spend • 90 days</p>
      </div>
    </motion.div>
  );
}