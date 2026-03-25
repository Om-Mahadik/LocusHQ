"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialsCard, Testimonial } from "@/components/ui/Home/TestimonialsCard";

const testimonialsData: Testimonial[] = [
  {
    quote: "We launched in Rajouri Garden Delhi's most competitive food corridors. In 90 days the campaigns brought us to ₹20 lakhs a month.",
    clientName: "Avora Cafe",
    clientLocation: "Delhi, India",
  },
  {
    quote: "Our cost per lead dropped 25% and the volume actually went up at the same time. They delivered both.",
    clientName: "Aroha Banquet",
    clientLocation: "Delhi, India",
    avatarSrc: "/images/aroha-avatar.jpg"
  },
  {
    quote: "Building a customer base in Toronto from scratch is hard. They understood the market and built us a profitable engine.",
    clientName: "Tamasha Toronto",
    clientLocation: "Toronto, Canada",
    avatarSrc: "/images/tamasha-avatar.jpg"
  },
  {
    quote: "The lead quality from GHL is night and day compared to our previous agency. Highly recommended for ROI.",
    clientName: "Luxe Medspa",
    clientLocation: "Sydney, Australia",
  },
  {
    quote: "Systematic scaling began after 60 days. The data-driven approach is what separates LocusHQ from others.",
    clientName: "Solar Grid",
    clientLocation: "Vancouver, Canada",
  }
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const displayCount = 3;
  
  const extendedData = [...testimonialsData, ...testimonialsData.slice(0, displayCount)];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = async () => {
    if (index >= testimonialsData.length) {
      await controls.set({ x: "0%" });
      setIndex(1);
      controls.start({ x: "-33.33%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } });
    } else {
      setIndex((prev) => prev + 1);
      controls.start({ x: `-${(index + 1) * 33.33}%`, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } });
    }
  };

  return (
    <section className="bg-black py-16 px-4 md:px-6 font-sans antialiased overflow-hidden">
      {/* Reduced max-width to 1100px to squeeze the cards together */}
      <div className="mx-auto max-w-[1100px]">
        
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mb-4">
            Testimonials
          </h2>
          <div className="flex items-center gap-2.5 rounded-full bg-[#181818] border border-white/5 px-4 py-1.5">
            <Star className="h-3.5 w-3.5 text-[#F5C518] fill-[#F5C518]" />
            <span className="text-sm font-bold text-white">5.0</span>
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest ml-1">
              Rating
            </span>
          </div>
        </div>

        <div className="relative">
          {/* Desktop Slider */}
          <div className="hidden md:block">
            <motion.div
              animate={controls}
              className="flex gap-4" 
              style={{ width: "100%" }}
            >
              {extendedData.map((testimonial, i) => (
                <div key={i} className="min-w-[calc(33.33%-0.75rem)]">
                  <TestimonialsCard testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Mobile Stack */}
          <div className="flex md:hidden flex-col gap-4">
            {testimonialsData.slice(0, 3).map((t, i) => (
              <TestimonialsCard key={i} testimonial={t} />
            ))}
          </div>

          <div className="hidden md:flex justify-center gap-1.5 mt-10">
            {testimonialsData.map((_, i) => (
              <div 
                key={i}
                className={`h-1 transition-all duration-700 rounded-full ${
                  (index % testimonialsData.length) === i ? "w-8 bg-[#F5C518]" : "w-1.5 bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}