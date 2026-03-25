"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const metrics = [
  { label: "Capital Managed", value: "$2.4M+", detail: "Direct ad-spend oversight" },
  { label: "Efficiency", value: "4.2x", detail: "Average ROAS across portfolio" },
  { label: "Network", value: "12+", detail: "Integrated SaaS ecosystems" },
  { label: "Latency", value: "<5m", detail: "Average lead response time" },
];

export default function AboutPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <main className="min-h-screen bg-black text-white antialiased font-sans selection:bg-white selection:text-black">
      
      {/* 1. MANIFESTO HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-8"
          >
            <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
              01 / Perspective
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none max-w-3xl">
              We build systems <br />
              <span className="text-zinc-800 text-3xl md:text-5xl">that out-compete.</span>
            </h1>
            <p className="text-zinc-500 text-[14px] md:text-[15px] leading-relaxed max-w-xl font-medium">
              LocusHQ is a technical marketing studio. We view the customer journey not as a creative exercise, but as a conversion funnel that can be engineered, measured, and scaled through precision automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SYSTEM METRICS */}
      <section className="py-20 px-6 border-t border-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
            {metrics.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <p className="text-zinc-600 text-[9px] font-bold uppercase tracking-[0.2em]">
                  {item.label}
                </p>
                <h3 className="text-2xl font-bold tracking-tighter">{item.value}</h3>
                <p className="text-zinc-700 text-[11px] font-medium leading-tight">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE ARCHITECTURE */}
      <section className="py-24 px-6 bg-[#050505]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                02 / Logic
              </span>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter">
                The Engineering Standard
              </h2>
              <p className="text-zinc-500 text-[13px] md:text-[14px] leading-relaxed">
                Most agencies focus on &quot;Reach.&quot; We focus on &quot;Revenue.&quot; By integrating GHL ecosystems with AI-driven lead qualification, we ensure no marketing dollar is wasted on cold signals.
              </p>
            </div>
            
            {/* Minimalist List */}
            <div className="space-y-6">
              {[
                "End-to-end attribution tracking",
                "Automated WhatsApp qualification",
                "Dynamic ad-creative iteration"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="h-[1px] w-4 bg-zinc-800 group-hover:w-8 group-hover:bg-white transition-all duration-500" />
                  <span className="text-zinc-400 text-[12px] font-bold tracking-tight">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual card - Neutral grey scale */}
          <div className="relative aspect-[4/5] bg-[#0A0A0A] rounded-[40px] border border-white/[0.03] overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.02)_0%,transparent_50%)]" />
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <div className="w-1/2 h-[1px] bg-white rotate-45 absolute" />
                <div className="w-1/2 h-[1px] bg-white -rotate-45 absolute" />
             </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING */}
      <section className="py-32 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto space-y-8"
        >
          <h2 className="text-2xl font-bold tracking-tight">Scale through precision.</h2>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-colors"
          >
            Start Project
          </a>
        </motion.div>
      </section>

    </main>
  );
}