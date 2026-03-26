"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Bot, CalendarDays, Zap, User } from "lucide-react";

const nodes = [
  { id: 1, label: "ManyChat", icon: MessageSquare, color: "#EC4899", y: 15 },
  { id: 2, label: "AI Creative", icon: Bot, color: "#0EA5E9", y: 38 },
  { id: 3, label: "GHL Booking", icon: CalendarDays, color: "#F59E0B", y: 62 },
  { id: 4, label: "Attribution", icon: Zap, color: "#8B5CF6", y: 85 },
];

export default function LeadJourneyDisplay() {
  return (
    <div className="relative group w-full">
      {/* Glow Effect behind the card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-[60px] blur-2xl opacity-50 group-hover:opacity-75 transition duration-1000" />
      
      <div className="relative w-full aspect-square md:aspect-[4/4.5] bg-white rounded-[40px] md:rounded-[60px] border border-white/10 flex flex-col items-center justify-center overflow-hidden shadow-2xl">
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

        <div className="relative w-full h-full max-w-[90%] flex items-center justify-between">
          
          {/* SVG Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 100 100">
            {nodes.map((node) => (
              <g key={node.id}>
                <motion.path
                  d={`M 15 50 C 35 50, 45 ${node.y}, 75 ${node.y}`}
                  stroke="#F1F1F4"
                  strokeWidth="0.8"
                  fill="none"
                />
                <motion.path
                  d={`M 15 50 C 35 50, 45 ${node.y}, 75 ${node.y}`}
                  stroke={node.color}
                  strokeWidth="0.8"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: node.id * 0.7,
                    ease: "easeInOut",
                  }}
                />
              </g>
            ))}
          </svg>

          {/* LEFT: Entry Hub */}
          <div className="relative z-10 ml-4">
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-zinc-900 flex flex-col items-center justify-center shadow-2xl"
            >
              <User className="text-white mb-1" size={24} />
              <span className="text-[8px] font-black text-zinc-400 uppercase tracking-tighter">Lead</span>
            </motion.div>
          </div>

          {/* RIGHT: Node List */}
          <div className="flex flex-col justify-between h-[85%] z-10 pr-4">
            {nodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <div 
                  className="w-3 h-3 rounded-full border-2 border-white shadow-sm shrink-0" 
                  style={{ backgroundColor: node.color }} 
                />
                <div className="w-40 md:w-56 bg-white/80 backdrop-blur-md border border-zinc-100 p-3 md:p-4 rounded-2xl shadow-lg shadow-black/[0.03]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl" style={{ backgroundColor: `${node.color}15`, color: node.color }}>
                      <node.icon size={20} />
                    </div>
                    <div>
                      <p className="text-[12px] md:text-[14px] font-black text-zinc-900 leading-none">{node.label}</p>
                      <p className="text-[9px] font-bold text-zinc-400 uppercase mt-1">Live Tracking</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
}