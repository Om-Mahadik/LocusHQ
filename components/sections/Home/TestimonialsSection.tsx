"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { Star } from "lucide-react";
import { TestimonialsCard, Testimonial } from "@/components/ui/Home/TestimonialsCard";

const testimonialsData: Testimonial[] = [
  { 
    quote: "We'd tried two other agencies before this. Both delivered reach, neither delivered reservations. LocusHQ rebuilt how leads moved through our system — ads, follow-up, booking flow. Tables started filling consistently within 5-6 weeks. No gimmicks, no discounts.", 
    clientName: "James Kowalski", 
    clientLocation: "Toronto, ON · Restaurant" 
  },
  { 
    quote: "The difference was that they didn't stop at lead gen. They built a qualification flow so anyone booking a consult already knew the pricing and was serious. My no-show rate dropped and the quality of clients improved noticeably.", 
    clientName: "Priya Menon", 
    clientLocation: "Brampton, ON · MedSpa" 
  },
  { 
    quote: "We had volume but most of it wasn't converting. Wrong area, wrong service type. After the system went live we were getting fewer leads but closing more of them. That's the shift we needed.", 
    clientName: "Daniel Reeves", 
    clientLocation: "Calgary, AB · HVAC" 
  },
  { 
    quote: "What stood out was the diagnostic before anything was built. They mapped exactly where patients were dropping off — turned out it wasn't the ads, it was what happened after the click. Fast to work with, clear on what they were doing and why.", 
    clientName: "Sarah Lin", 
    clientLocation: "Vancouver, BC · Cosmetic Dentistry" 
  },
  { 
    quote: "Half our consultation calls used to be people who weren't remotely ready. LocusHQ added a pre-qualification sequence before the call even happens. We stopped wasting hours and started closing more of the right people.", 
    clientName: "Rajan Toor", 
    clientLocation: "Mississauga, ON · Visa Consulting" 
  },
  { 
    quote: "They started with a gap analysis — showed us where leads were going cold in our pipeline before pitching anything. That alone made them different from every other agency that had approached us.", 
    clientName: "Michelle Carter", 
    clientLocation: "Sydney, NSW · Real Estate" 
  }
];

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
  // Duplicate data to ensure a smooth loop
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
    <section className="bg-black py-12 px-4 md:py-24 md:px-6 font-sans antialiased overflow-hidden">
      <motion.div 
        className="mx-auto max-w-[1200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3.5xl md:text-5xl font-bold tracking-tighter text-white mb-6">
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