"use client";

import React from "react";
import { motion } from "framer-motion";

const serviceData = [
  { id: "01", icon: "/icons/s1.svg", title: "Hospitality & Restaurant", sub: "Fill tables. Build regulars.", img: "/images/hospitality.webp", desc: "Meta and Google campaigns for restaurants and cloud kitchens. Hyper-local targeting and WhatsApp funnels." },
  { id: "02", icon: "/icons/s2.svg", title: "Real Estate Generation", sub: "Buyer leads. Seller leads.", img: "/images/realestate.webp", desc: "Structured around qualified property inquiries. One closed deal pays for 12 months of our service." },
  { id: "03", icon: "/icons/s3.svg", title: "Med Spa & Aesthetic", sub: "Botox. Laser. Filler.", img: "/images/medspa.webp", desc: "High-intent campaigns for aesthetic clinics. We build the offer and automate the follow-up infrastructure." },
  { id: "04", icon: "/icons/s4.svg", title: "Home Services Scaling", sub: "Roofing. HVAC. Plumbing.", img: "/images/homeservices.webp", desc: "Dominating local search and social feeds. We engineer lead flows that keep technicians on the road." },
  { id: "05", icon: "/icons/s5.svg", title: "E-commerce Engineering", sub: "Scale spend. Maintain ROAS.", img: "/images/ecommerce.webp", desc: "Advanced attribution modeling and dynamic creative testing. Your ad account as a high-yield investment." },
  { id: "06", icon: "/icons/s6.svg", title: "B2B Professional Services", sub: "High-ticket. Long-cycle.", img: "/images/b2b.webp", desc: "LinkedIn and Meta frameworks for consultants. We solve the 'empty pipeline' problem with automated outreach." },
];

export default function StickyStackedServices() {
  return (
    <div className="relative w-full bg-black px-2 md:px-6 py-24">
      {/* NEW: Added gap-16 md:gap-32 to the container. 
        This is what creates the massive space between the cards 
        AS THEY SCROLL UP from below, before they stick. 
      */}
      <div className="max-w-5xl mx-auto flex flex-col gap-16 md:gap-32 pb-[40vh]">
        {serviceData.map((service, index) => {
          
          // Slightly increased the stacking offset so the headers have more room to breathe
          const topOffset = 40 + index * 100;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5 }}
              className="sticky w-full flex items-start gap-2 md:gap-8"
              style={{ top: `${topOffset}px` }}
            >
              
              {/* Left Side Icon */}
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#111] border border-white/10 flex items-center justify-center flex-shrink-0 mt-6 md:mt-8 shadow-xl relative z-10">
                {service.icon ? (
                  <img src={service.icon} alt="" className="w-4 h-4 md:w-7 md:h-7 object-contain opacity-80" />
                ) : (
                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#f26c4f]" /> 
                )}
              </div>

              {/* The Card */}
              <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-5 md:p-10 shadow-[0_-40px_60px_-15px_rgba(0,0,0,0.85)] min-h-[500px] flex flex-col relative z-0">
                
                {/* Header */}
                <div className="mb-6 md:mb-12">
                  <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base font-medium mt-1 md:mt-2">
                    {service.sub}
                  </p>
                </div>

                {/* Content Body */}
                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10 items-stretch flex-1">
                  
                  {/* NEW: Image Container Max Height. 
                    Removed aspect-video on desktop. Replaced with h-full and a massive min-h-[400px] lg:min-h-[500px].
                  */}
                  <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-full md:min-h-[400px] lg:min-h-[500px] rounded-[1.5rem] md:rounded-[2rem] bg-[#111] border border-white/5 overflow-hidden order-1 md:order-2">
                    {service.img && (
                      <img 
                        src={service.img} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover opacity-80" 
                      />
                    )}
                  </div>

                  {/* Text Content - Centered vertically to match the tall image */}
                  <div className="order-2 md:order-1 w-full flex flex-col justify-center">
                    <p className="text-zinc-400 text-sm md:text-lg leading-relaxed">
                      {service.desc}
                    </p>
                    
                    <button className="mt-8 md:mt-12 px-6 py-3 md:py-4 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors w-full md:w-max px-10">
                      Learn More
                    </button>
                  </div>

                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}