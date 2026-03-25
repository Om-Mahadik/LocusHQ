"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const serviceData = [
  { id: "01", icon: "/icons/s1.svg", title: "Hospitality & Restaurant", sub: "Fill tables. Build regulars.", img: "/images/hospitality.webp", desc: "Meta and Google campaigns for restaurants and cloud kitchens. Hyper-local targeting and WhatsApp funnels." },
  { id: "02", icon: "/icons/s2.svg", title: "Real Estate Generation", sub: "Buyer leads. Seller leads.", img: "/images/realestate.webp", desc: "Structured around qualified property inquiries. One closed deal pays for 12 months of our service." },
  { id: "03", icon: "/icons/s3.svg", title: "Med Spa & Aesthetic", sub: "Botox. Laser. Filler.", img: "/images/medspa.webp", desc: "High-intent campaigns for aesthetic clinics. We build the offer and automate the follow-up infrastructure." },
  { id: "04", icon: "/icons/s4.svg", title: "Home Services Scaling", sub: "Roofing. HVAC. Plumbing.", img: "/images/homeservices.webp", desc: "Dominating local search and social feeds. We engineer lead flows that keep technicians on the road." },
  { id: "05", icon: "/icons/s5.svg", title: "E-commerce Engineering", sub: "Scale spend. Maintain ROAS.", img: "/images/ecommerce.webp", desc: "Advanced attribution modeling and dynamic creative testing. Your ad account as a high-yield investment." },
  { id: "06", icon: "/icons/s6.svg", title: "B2B Professional Services", sub: "High-ticket. Long-cycle.", img: "/images/b2b.webp", desc: "LinkedIn and Meta frameworks for consultants. We solve the 'empty pipeline' problem with automated outreach." },
];

export default function StickyServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div 
      ref={containerRef} 
      className="relative max-w-6xl mx-auto px-6 pb-[60vh]" // Added large bottom padding so the last card has room to "stick"
    >
      <div className="flex flex-col">
        {serviceData.map((service, index) => {
          const step = 1 / serviceData.length;
          const start = index * step;
          const end = (index + 1) * step;

          // Icon Highlight Transform
          const filterValue = useTransform(
            scrollYProgress,
            [start, start + 0.05, end - 0.05, end],
            [
              "grayscale(1) opacity(0.2)", 
              "sepia(1) saturate(10) hue-rotate(-30deg) opacity(1)", 
              "sepia(1) saturate(10) hue-rotate(-30deg) opacity(1)", 
              "grayscale(1) opacity(0.2)"
            ]
          );

          // Card Stacking Math: 100px base + 60px increments for visible headers
          const topOffset = 100 + index * 60; 

          return (
            <div 
              key={service.id} 
              className="sticky w-full mb-[30vh] last:mb-0" 
              style={{ top: `${topOffset}px` }}
            >
              <div className="flex items-start gap-8 md:gap-14 group">
                
                {/* 1. THE ICON: Increased size and precise top margin */}
                <div className="mt-[6px] md:mt-[10px]"> 
                  <motion.div 
                    style={{ filter: filterValue }}
                    className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 transition-all duration-500"
                  >
                    <img 
                      src={service.icon} 
                      alt="" 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </div>

                {/* 2. THE CARD */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5%" }}
                  className="flex-1 bg-[#0A0A0A] rounded-[48px] border border-white/[0.04] p-10 md:p-14 shadow-[0_-40px_100px_-20px_rgba(0,0,0,1)] overflow-hidden"
                >
                  {/* Title & Subtitle Group */}
                  <div className="space-y-2 mb-10">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tighter text-white uppercase leading-none">
                      {service.title}
                    </h3>
                    <p className="text-zinc-700 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em]">
                      {service.sub}
                    </p>
                  </div>

                  {/* High-Contrast Image Container */}
                  <div className="relative aspect-[16/9] rounded-[32px] bg-[#111] border border-white/5 mb-10 overflow-hidden group-hover:border-white/10 transition-colors">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Minimal Body Text */}
                  <p className="text-zinc-500 text-[14px] md:text-[16px] leading-relaxed max-w-2xl font-medium">
                    {service.desc}
                  </p>

                  {/* Design Detail: Bottom ID */}
                  <div className="mt-12 pt-8 border-t border-white/[0.03] flex justify-between items-center opacity-20">
                    <span className="text-[10px] font-mono tracking-widest uppercase">system_protocol_0{service.id}</span>
                    <div className="h-[1px] w-12 bg-white" />
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}