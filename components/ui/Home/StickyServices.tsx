"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const serviceData = [
  {
    id: "01",
    title: "Hospitality & Restaurant",
    sub: "Fill tables. Build regulars.",
    img: "/imgs/work1.jpg",
    metrics: [
      { value: "12x", label: "Avg ROI" },
      { value: "45k+", label: "Leads Gen" },
      { value: "2.4M", label: "Revenue" },
      { value: "85%", label: "Fill Rate" },
    ],
  },
  {
    id: "02",
    title: "Real Estate Generation",
    sub: "Buyer leads. Seller leads.",
    img: "/imgs/work1.jpg",
    metrics: [
      { value: "8x", label: "Avg ROI" },
      { value: "12k+", label: "Buyer Leads" },
      { value: "$45M", label: "Property Sold" },
      { value: "92%", label: "Qual Rate" },
    ],
  },
  {
    id: "03",
    title: "Med Spa & Aesthetic",
    sub: "Botox. Laser. Filler.",
    img: "/imgs/work1.jpg",
    metrics: [
      { value: "15x", label: "Avg ROI" },
      { value: "8k+", label: "Appointments" },
      { value: "$2.1M", label: "Client Rev" },
      { value: "95%", label: "Retention" },
    ],
  },
];

const ServiceCard = ({ service }: { service: typeof serviceData[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Track scroll over a larger distance to give us stable numbers
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 250px", "start 112px"], 
  });

  // THE STEP FUNCTION TRICK
  // 0 -> 0.95: Card is coming up, stays completely WHITE.
  // 0.95 -> 0.951: The microscopic instant it stacks, it toggles.
  // 0.951 -> 1.0: Card is stacked, stays completely BLACK forever.
  const steps = [0, 0.95, 0.951, 1];

  const bg = useTransform(scrollYProgress, steps, ["#ffffff", "#ffffff", "#0D0D0D", "#0D0D0D"]);
  const textMain = useTransform(scrollYProgress, steps, ["#18181b", "#18181b", "#ffffff", "#ffffff"]);
  const textSub = useTransform(scrollYProgress, steps, ["#52525b", "#52525b", "#71717a", "#71717a"]);
  const borderMain = useTransform(scrollYProgress, steps, ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.1)"]);
  const borderFaint = useTransform(scrollYProgress, steps, ["rgba(0,0,0,0.05)", "rgba(0,0,0,0.05)", "rgba(255,255,255,0.05)", "rgba(255,255,255,0.05)"]);
  const imgBg = useTransform(scrollYProgress, steps, ["#f4f4f5", "#f4f4f5", "#18181b", "#18181b"]);
  const btnBg = useTransform(scrollYProgress, steps, ["#18181b", "#18181b", "#ffffff", "#ffffff"]);
  const btnText = useTransform(scrollYProgress, steps, ["#ffffff", "#ffffff", "#000000", "#000000"]);
  const shadow = useTransform(scrollYProgress, steps, [
    "0px -20px 60px -15px rgba(0,0,0,0.1)",
    "0px -20px 60px -15px rgba(0,0,0,0.1)",
    "0px -20px 60px -15px rgba(0,0,0,1)",
    "0px -20px 60px -15px rgba(0,0,0,1)",
  ]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5 }}
      className="sticky top-28 w-full"
    >
      {/* --- MOBILE VERSION --- */}
      <motion.div
        style={{ backgroundColor: bg, borderColor: borderMain, boxShadow: shadow }}
        className="md:hidden w-full border rounded-[1.5rem] p-6 flex flex-col gap-5"
      >
        <div className="flex flex-col gap-0.5">
          <motion.h3 style={{ color: textMain }} className="text-xl font-semibold tracking-tight">
            {service.title}
          </motion.h3>
          <motion.p style={{ color: textSub }} className="text-sm font-medium">{service.sub}</motion.p>
        </div>

        <motion.div style={{ backgroundColor: imgBg, borderColor: borderMain }} className="w-full h-40 relative rounded-xl overflow-hidden border">
          {service.img ? (
            <img 
              src={service.img} 
              alt={service.title} 
              // Changed opacity-70 to opacity-100 to remove whitish filter
              className="absolute inset-0 w-full h-full object-cover opacity-100" 
            />
          ) : (
            <motion.div style={{ color: textSub }} className="absolute inset-0 flex items-center justify-center text-xs">Preview</motion.div>
          )}
        </motion.div>

        <motion.div style={{ borderColor: borderFaint }} className="grid grid-cols-2 gap-4 py-5 border-y">
          {service.metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col gap-0.5">
              <motion.span style={{ color: textMain }} className="text-xl font-bold tracking-tighter">{metric.value}</motion.span>
              <motion.span style={{ color: textSub }} className="text-[10px] uppercase font-bold tracking-wider">{metric.label}</motion.span>
            </div>
          ))}
        </motion.div>

        <motion.button 
          style={{ backgroundColor: btnBg, color: btnText }} 
          whileTap={{ scale: 0.95 }}
          className="group flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-xs font-bold transition-transform active:scale-95"
        >
          View Case Studies
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* --- DESKTOP VERSION --- */}
      <motion.div
        style={{ backgroundColor: bg, borderColor: borderMain, boxShadow: shadow }}
        className="hidden md:flex w-full border rounded-[2rem] p-10 flex-row gap-12 items-center"
      >
        {/* Image Left */}
        <motion.div style={{ backgroundColor: imgBg, borderColor: borderMain }} className="w-1/2 h-[420px] relative rounded-2xl overflow-hidden border">
          {service.img ? (
            <img 
              src={service.img} 
              alt={service.title} 
              // Changed opacity-80 to opacity-100 to remove whitish filter
              className="absolute inset-0 w-full h-full object-cover opacity-100 transition-transform duration-500 hover:scale-105" 
            />
          ) : (
            <motion.div style={{ color: textSub }} className="absolute inset-0 flex items-center justify-center font-medium">Preview</motion.div>
          )}
        </motion.div>

        {/* Content Right */}
        <div className="w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <motion.span style={{ color: textSub }} className="text-sm font-bold uppercase tracking-widest">{service.id}</motion.span>
            <motion.h3 style={{ color: textMain }} className="text-4xl font-semibold tracking-tight leading-tight">
              {service.title}
            </motion.h3>
            <motion.p style={{ color: textSub }} className="text-lg font-medium">{service.sub}</motion.p>
          </div>

          <motion.div style={{ borderColor: borderFaint }} className="grid grid-cols-2 gap-8 py-8 border-y">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <motion.span style={{ color: textMain }} className="text-3xl font-bold tracking-tighter">{metric.value}</motion.span>
                <motion.span style={{ color: textSub }} className="text-xs uppercase font-bold tracking-wider">{metric.label}</motion.span>
              </div>
            ))}
          </motion.div>

          <motion.button 
            style={{ backgroundColor: btnBg, color: btnText }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center justify-center gap-2 w-fit px-8 py-4 rounded-xl text-sm font-bold transition-transform active:scale-95 hover:opacity-80"
          >
            View Case Studies
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function StickyServices() {
  return (
    <div className="relative w-full bg-black px-3 md:px-6 py-0">
      <div className="max-w-6xl mx-auto flex flex-col gap-[30vh] pb-[20vh] mt-32">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}