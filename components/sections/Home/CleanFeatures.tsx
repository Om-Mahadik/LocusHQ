"use client";

import React, { useEffect, useRef, useState, memo, forwardRef } from "react";
import { motion } from "framer-motion";

const statsData = [
  {
    id: "spend",
    value: "$500k",
    shortLabel: "Ad Spend",
    title: "Total Ad Spend Managed",
    desc: "Across hospitality, real estate, B2B, and service businesses in India, Canada, Australia, and USA",
    activeColor: "#d8f5da",
  },
  {
    id: "leads",
    value: "6000+",
    shortLabel: "Qualified Leads",
    title: "Qualified Leads Generated",
    desc: "Banquet, restaurant, real estate, and service business inquiries with documented CPL data.",
    activeColor: "#E0F2FE",
  },
  {
    id: "brands",
    value: "15+",
    shortLabel: "Brands Scaled",
    title: "Brands Scaled Successfully",
    desc: "Restaurants, event venues, service businesses across five differnt countries worldwide.",
    activeColor: "#F3E8FF",
  },
  {
    id: "countries",
    value: "5",
    shortLabel: "Countries - One System",
    title: "Global Reach Deployed",
    desc: "Personalized lead generation systems deployed seamlessly across international markets.",
    activeColor: "#FFE4E6",
  },
];

// React.memo prevents all cards from re-rendering simultaneously
const StatCard = memo(
  forwardRef<
    HTMLDivElement,
    {
      stat: typeof statsData[0];
      index: number;
      isActive: boolean;
      onClick: () => void;
    }
  >(({ stat, index, isActive, onClick }, ref) => {
    return (
      <motion.div
        data-index={index}
        ref={ref}
        animate={{ 
          backgroundColor: isActive ? stat.activeColor : "#FFFFFF",
        }}
        // Background color can still use the premium Apple-style ease
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[32px] overflow-hidden cursor-pointer will-change-[background-color]"
        onClick={onClick}
      >
        <div className="px-6 py-5 md:px-8 md:py-6 flex flex-col">
          
          {/* --- Top Row --- */}
          <div className="flex justify-between items-center w-full">
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
              {stat.value}
            </h2>

            <div className="flex items-center gap-3">
              <motion.div
                initial={false}
                animate={{ scale: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="hidden md:flex items-center justify-center"
              >
                <div className="w-2 h-2 rounded-full bg-gray-900 animate-pulse" />
              </motion.div>
              
              <span className="text-sm md:text-base text-gray-600 font-medium whitespace-nowrap">
                {stat.shortLabel}
              </span>
            </div>
          </div>

          {/* --- Expanded Content --- */}
          <motion.div
            initial={false}
            animate={{ 
              height: isActive ? "auto" : 0, 
              opacity: isActive ? 1 : 0 
            }}
            transition={{ 
              // FIXED: Switched to easeInOut so the open/close speeds perfectly mirror each other
              height: { duration: 0.4, ease: "easeInOut" },
              opacity: { duration: 0.25, delay: isActive ? 0.1 : 0 } 
            }}
            className="overflow-hidden will-change-[height,opacity]"
          >
            {/* FIXED: Added strict heights (h-[130px] md:h-[100px]) to force all text blocks 
                to have the exact same physical size. This mathematically stops layout shift. */}
            <div className="pt-4 md:pt-6 flex flex-col gap-2 h-[130px] md:h-[100px]">
              <h3 className="text-lg md:text-[24px] font-medium text-gray-900 leading-tight">
                {stat.title}
              </h3>
              <p className="text-sm md:text-[16px] text-gray-800 leading-relaxed max-w-md">
                {stat.desc}
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    );
  })
);

StatCard.displayName = "StatCard";


export default function CleanFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollTicking = useRef(false);

  // Exact Center Detection Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollTicking.current) {
        window.requestAnimationFrame(() => {
          const viewportCenterY = window.innerHeight / 2;
          
          let closestIndex = 0;
          let minDistance = Infinity;

          itemRefs.current.forEach((card, index) => {
            if (!card) return;
            
            const rect = card.getBoundingClientRect();
            const cardCenterY = rect.top + (rect.height / 2);
            const distanceToCenter = Math.abs(viewportCenterY - cardCenterY);

            if (distanceToCenter < minDistance) {
              minDistance = distanceToCenter;
              closestIndex = index;
            }
          });

          setActiveIndex(closestIndex);
          scrollTicking.current = false;
        });
        scrollTicking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className="w-full bg-black py-16 md:py-32 px-4 md:px-6 font-sans min-h-screen flex items-center">
      <div className="max-w-3xl w-full mx-auto bg-[#0A0A0A] border border-white/10 p-3 md:p-4 rounded-[40px] md:rounded-[48px] shadow-2xl">
        <div className="flex flex-col gap-2 md:gap-3">
          
          {statsData.map((stat, index) => (
            <StatCard
              key={stat.id}
              stat={stat}
              index={index}
              isActive={index === activeIndex}
              ref={(el) => { itemRefs.current[index] = el; }}
              onClick={() => {
                itemRefs.current[index]?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
}