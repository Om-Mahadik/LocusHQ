"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialsCard, Testimonial } from "@/components/ui/Home/TestimonialsCard";

const testimonialsData: Testimonial[] = [
  { quote: "We launched in Rajouri Garden Delhi's most competitive food corridors. In 90 days the campaigns brought us to ₹20 lakhs a month.", clientName: "Avora Cafe", clientLocation: "Delhi, India" },
  { quote: "Our cost per lead dropped 25% and the volume actually went up at the same time. They delivered both.", clientName: "Aroha Banquet", clientLocation: "Delhi, India" },
  { quote: "Building a customer base in Toronto from scratch is hard. They understood the market and built us a profitable engine.", clientName: "Tamasha Toronto", clientLocation: "Toronto, Canada" },
  { quote: "The lead quality from GHL is night and day compared to our previous agency. Highly recommended for ROI.", clientName: "Luxe Medspa", clientLocation: "Sydney, Australia" },
  { quote: "Systematic scaling began after 60 days. The data-driven approach is what separates LocusHQ from others.", clientName: "Solar Grid", clientLocation: "Vancouver, Canada" }
];

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)", scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  
  const slideDuration = 4000;
  const extendedData = [...testimonialsData, ...testimonialsData];

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleNext = useCallback(async () => {
    const nextIndex = index + 1;
    const stepSize = isMobile ? 100 : (100 / 3);
    
    await controls.start({ 
      x: `-${nextIndex * stepSize}%`, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    });

    if (nextIndex >= testimonialsData.length) {
      controls.set({ x: "0%" });
      setIndex(0);
    } else {
      setIndex(nextIndex);
    }
  }, [index, controls, isMobile]);

  useEffect(() => {
    if (!isMounted) return;
    const timer = setInterval(() => {
      handleNext();
    }, slideDuration);
    return () => clearInterval(timer);
  }, [handleNext, isMounted]);

  if (!isMounted) return <section className="bg-black py-16" />;

  return (
    <section className="bg-black py-16 px-4 md:py-24 md:px-6 font-sans antialiased overflow-hidden">
      <motion.div 
        className="mx-auto max-w-[1200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">
            Client Success
          </h2>
          <div className="flex items-center gap-3 rounded-full bg-zinc-900/50 border border-white/10 px-5 py-2 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 text-[#F5C518] fill-[#F5C518]" />
              ))}
            </div>
            <div className="h-4 w-[1px] bg-white/20 mx-1" />
            <span className="text-sm font-bold text-white">5.0</span>
            <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest ml-1">Top Rated</span>
          </div>
        </motion.div>

        {/* Slider Section */}
        <motion.div variants={fadeInUp} className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={controls}
              initial={{ x: "0%" }}
              className="flex"
            >
              {extendedData.map((testimonial, i) => (
                <div 
                  key={`testimonial-${i}`} 
                  className="min-w-full md:min-w-[33.333%] px-2 md:px-3"
                >
                   <TestimonialsCard testimonial={testimonial} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Progress Indicators */}
          <motion.div 
            variants={fadeInUp} 
            className="flex justify-center gap-3 mt-12"
          >
            {testimonialsData.map((_, i) => (
              <div 
                key={`dot-${i}`}
                className="relative h-1.5 bg-white/10 rounded-full overflow-hidden transition-all duration-500"
                style={{ width: index === i ? "60px" : "12px" }}
              >
                {index === i && (
                  <motion.div 
                    key={`progress-${index}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4, ease: "linear" }}
                    className="absolute inset-0 bg-[#F5C518] origin-left"
                  />
                )}
                {index > i && <div className="absolute inset-0 bg-[#F5C518]" />}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}