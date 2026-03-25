"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Fingerprint } from "lucide-react";

const leadPersonas = [
  { name: "J", industry: "B2B", bg: "bg-blue-100", text: "text-blue-900" },
  { name: "S", industry: "RE", bg: "bg-amber-100", text: "text-amber-900" },
  { name: "M", industry: "Tech", bg: "bg-emerald-100", text: "text-emerald-900" },
  { name: "A", industry: "Ecom", bg: "bg-purple-100", text: "text-purple-900" },
  { name: "N", industry: "Serv", bg: "bg-sky-100", text: "text-sky-900" },
];

export default function LeadStackCard() {
  const targetLeads = 6000;
  const [count, setCount] = useState(0);
  const [visibleAvatars, setVisibleAvatars] = useState<typeof leadPersonas>([]);
  const [mounted, setMounted] = useState(false);
  const leadIndexRef = useRef(0);

  // Fix Hydration: Only run animations after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // 1. Counter Logic
  useEffect(() => {
    if (!mounted) return;
    
    let start = 0;
    const duration = 2000;
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
  }, [mounted]);

  // 2. Avatar Loop Logic
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      const nextAvatar = leadPersonas[leadIndexRef.current % leadPersonas.length];
      setVisibleAvatars((prev) => {
        const newStack = [...prev, nextAvatar];
        return newStack.length > 5 ? newStack.slice(1) : newStack;
      });
      leadIndexRef.current += 1;
    }, 1500);

    return () => clearInterval(interval);
  }, [mounted]);

  if (!mounted) return null; // Prevents SSR mismatch errors

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full max-w-sm bg-[#F2FAF2] rounded-[32px] p-8 border border-emerald-900/5 shadow-sm relative overflow-hidden"
    >
      <div className="flex gap-2 mb-8">
        <div className="p-2 bg-emerald-100/50 rounded-lg">
          <Users className="w-4 h-4 text-emerald-800" />
        </div>
        <div className="p-2 bg-emerald-100/50 rounded-lg">
          <Fingerprint className="w-4 h-4 text-emerald-800" />
        </div>
      </div>

      <div className="text-center mb-8">
        <p className="text-[10px] font-bold text-emerald-900/40 uppercase tracking-[0.2em] mb-2">
          Systems Performance
        </p>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-bold tracking-tighter text-slate-950 tabular-nums">
            {count.toLocaleString()}
            <span className="text-emerald-500 font-medium ml-1">+</span>
          </span>
        </div>
      </div>

      <div className="bg-white/40 rounded-2xl p-6 border border-black/5 min-h-[120px] flex flex-col items-center justify-center">
        <div className="flex items-center -space-x-3 mb-4">
          <AnimatePresence mode="popLayout">
            {visibleAvatars.map((lead, idx) => (
              <motion.div
                key={`${lead.name}-${leadIndexRef.current - visibleAvatars.length + idx}`}
                initial={{ opacity: 0, scale: 0.5, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.5, x: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`w-10 h-10 rounded-full ${lead.bg} ${lead.text} border-2 border-white flex items-center justify-center text-[12px] font-bold shadow-sm`}
              >
                {lead.name}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="flex gap-4">
          {["B2B", "ECOM", "SaaS"].map((tag) => (
            <span key={tag} className="text-[9px] font-bold text-emerald-900/30 uppercase tracking-widest">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
    </motion.div>
  );
}