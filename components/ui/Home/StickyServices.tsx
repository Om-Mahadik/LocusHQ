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
      { value: "$ 2.4M", label: "Revenue" },
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
      { value: "$ 45M", label: "Property Sold" },
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
      { value: "$ 2.1M", label: "Client Rev" },
      { value: "95%", label: "Retention" },
    ],
  },
];

const ServiceCard = ({ service }: { service: typeof serviceData[0] }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 250px", "start 64px"],
  });

  const steps = [0, 0.95, 0.951, 1];

  const bg = useTransform(scrollYProgress, steps, ["#ffffff", "#ffffff", "#0D0D0D", "#0D0D0D"]);
  const textMain = useTransform(scrollYProgress, steps, ["#18181b", "#18181b", "#ffffff", "#ffffff"]);
  const textSub = useTransform(scrollYProgress, steps, ["#52525b", "#52525b", "#71717a", "#71717a"]);
  const borderMain = useTransform(scrollYProgress, steps, ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.1)"]);
  const borderTable = useTransform(scrollYProgress, steps, ["rgba(0,0,0,0.1)", "rgba(0,0,0,0.1)", "rgba(255,255,255,0.15)", "rgba(255,255,255,0.15)"]);
  const btnBg = useTransform(scrollYProgress, steps, ["#18181b", "#18181b", "#ffffff", "#ffffff"]);
  const btnText = useTransform(scrollYProgress, steps, ["#ffffff", "#ffffff", "#000000", "#000000"]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.5 }}
      className="sticky top-18 w-full"
    >
      <motion.div
        style={{ backgroundColor: bg, borderColor: borderMain }}
        className="w-full border rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12"
      >
        {/* Mobile: Title comes first (order-1), Desktop: Title is inside the right column */}
        <div className="block md:hidden order-1 w-full text-center">
            <motion.h3 style={{ color: textMain }} className="text-2xl font-semibold tracking-tight">
              {service.title}
            </motion.h3>
        </div>

        {/* Image Container: Order 2 on mobile, Order 1 on desktop. height increased to [550px] on desktop */}
        <motion.div 
          className="w-full md:w-1/2 h-64 md:h-[550px] relative rounded-xl overflow-hidden order-2 md:order-1"
        >
          <img
            src={service.img}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Column: Order 3 on mobile, Order 2 on desktop */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center gap-6 order-3 md:order-2">
          
          {/* Desktop Only Title */}
          <div className="hidden md:flex flex-col items-center gap-1">
            <motion.h3 style={{ color: textMain }} className="text-3xl font-semibold tracking-tight">
              {service.title}
            </motion.h3>
          </div>

          {/* Metrics Grid */}
          <motion.div 
            style={{ borderColor: borderTable }} 
            className="grid grid-cols-2 w-full border-l border-t"
          >
            {service.metrics.map((metric, idx) => (
              <motion.div 
                key={idx} 
                style={{ borderColor: borderTable }}
                className="flex flex-col items-center justify-center py-4 border-r border-b"
              >
                <motion.span style={{ color: textMain }} className="text-xl md:text-2xl font-bold">
                  {metric.value}
                </motion.span>
                <motion.span style={{ color: textSub }} className="text-[9px] font-regular tracking-tighter">
                  {metric.label}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Button */}
          <motion.button
            style={{ backgroundColor: btnBg, color: btnText }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-center gap-2 px-8 py-3 rounded-full text-xs font-bold transition-all w-full md:w-auto"
          >
            Case Studies
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function StickyServices() {
  return (
    <div className="relative w-full bg-black px-0 md:px-6 py-0">
      {/* max-w-6xl for desktop, full width for mobile */}
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 md:gap-8 pb-[10vh] mt-4">
        {serviceData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}