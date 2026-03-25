"use client";

import React from "react";

export default function LeadJourneyDisplay() {
  return (
    <div className="w-full aspect-[4/3] md:aspect-square bg-[#1A1A1A] rounded-[40px] md:rounded-[60px] border border-white/[0.03] flex items-center justify-center relative overflow-hidden mt-4 md:mt-0">
      {/* Subtle top-down inner glow for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      
      <span className="text-zinc-800 text-[10px] font-bold uppercase tracking-[0.3em]">
        Display Placeholder
      </span>
    </div>
  );
}