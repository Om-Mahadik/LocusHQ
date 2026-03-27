"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const serviceData = [
  {
    id: "01",
    title: "Hospitality & Restaurant",
    sub: "Fill tables. Build regulars.",
    img: "/images/hospitality.webp",
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
    img: "/images/realestate.webp",
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
    img: "/images/medspa.webp",
    metrics: [
      { value: "15x", label: "Avg ROI" },
      { value: "8k+", label: "Appointments" },
      { value: "$2.1M", label: "Client Rev" },
      { value: "95%", label: "Retention" },
    ],
  },
];

export default function StickyStackedServices() {
  return (
    <div className="relative w-full bg-black px-3 md:px-6 py-0">
      <div className="max-w-6xl mx-auto flex flex-col gap-[30vh] pb-[20vh] mt-32">
        {serviceData.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5 }}
            className="sticky top-28 w-full"
          >
            {/* --- MOBILE VERSION (Original Code) --- */}
            <div className="md:hidden w-full bg-[#0D0D0D] border border-white/10 rounded-[1.5rem] p-6 flex flex-col gap-5 shadow-[0_-20px_60px_-15px_rgba(0,0,0,1)]">
              <div className="flex flex-col gap-0.5">
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>
                <p className="text-zinc-500 text-sm font-medium">{service.sub}</p>
              </div>

              <div className="w-full h-40 relative rounded-xl bg-zinc-900 overflow-hidden border border-white/10">
                {service.img ? (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-70"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-800 text-xs">Preview</div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 py-5 border-y border-white/5">
                {service.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col gap-0.5">
                    <span className="text-xl font-bold text-white tracking-tighter">{metric.value}</span>
                    <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">{metric.label}</span>
                  </div>
                ))}
              </div>

              <button className="group flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-white text-black text-xs font-bold">
                View Case Studies
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* --- DESKTOP VERSION (Image Left, Content Right) --- */}
            <div className="hidden md:flex w-full bg-[#0D0D0D] border border-white/10 rounded-[2rem] p-10 flex-row gap-12 items-center shadow-[0_-20px_60px_-15px_rgba(0,0,0,1)]">
              {/* Image Left */}
              <div className="w-1/2 h-[420px] relative rounded-2xl bg-zinc-900 overflow-hidden border border-white/10">
                {service.img ? (
                  <img
                    src={service.img}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-800 font-medium">Preview</div>
                )}
              </div>

              {/* Content Right */}
              <div className="w-1/2 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="text-zinc-600 text-sm font-bold uppercase tracking-widest">{service.id}</span>
                  <h3 className="text-4xl font-semibold tracking-tight text-white leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-lg font-medium">{service.sub}</p>
                </div>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                  {service.metrics.map((metric, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-3xl font-bold text-white tracking-tighter">{metric.value}</span>
                      <span className="text-xs text-zinc-500 uppercase font-bold tracking-wider">{metric.label}</span>
                    </div>
                  ))}
                </div>

                <button className="group flex items-center justify-center gap-2 w-fit px-8 py-4 rounded-xl bg-white text-black text-sm font-bold hover:bg-zinc-200 transition-all active:scale-95">
                  View Case Studies
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}