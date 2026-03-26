// src/components/work/WorkCard3.tsx
"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function WorkCard3() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full group"
    >
      <div className="relative aspect-[4/3.8] rounded-[45px] overflow-hidden bg-zinc-900 mb-8">
        <Image src="/imgs/work3.jpg" alt="Sufiaana" fill className="object-cover" />
      </div>

      <div className="flex justify-between items-start mb-4 px-2">
        <h3 className="text-2xl md:text-3xl font-semibold text-white leading-tight tracking-tight">
          Sufiaana — 900 Leads at Under $2 Each
        </h3>
        <span className="text-2xl">🇮🇳</span>
      </div>

      <p className="text-zinc-400 text-base md:text-lg mb-2 font-light px-2">High-volume banquet lead generation</p>
      <p className="text-zinc-600 text-[11px] mb-8 uppercase tracking-widest font-medium px-2">Restaurant & Banquet • India</p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-zinc-900/60 border border-zinc-800/40 rounded-[35px] px-8 py-6 flex items-baseline justify-between">
          <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">900+</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest text-right">leads</span>
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800/40 rounded-[35px] px-8 py-6 flex items-baseline justify-between">
          <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">$1.80</span>
          <span className="text-zinc-500 text-[10px] uppercase tracking-widest text-right">Avg CPL</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-zinc-500 text-sm ml-4">
        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
        <p>$1,250 USD total investment</p>
      </div>
    </motion.div>
  );
}