"use client";
import Image from "next/image";
import React from "react";

const INDUSTRIES = [
  { name: "Restaurant & Hospitality", src: "/imgs/restaurant.png" },
  { name: "HVAC & Roofing", src: "/imgs/hvac.png" },
  { name: "Visa Consulting", src: "/imgs/visas.png" },
  { name: "Real Estate", src: "/imgs/real-estate.png" },
  { name: "Cosmetic Dentistry", src: "/imgs/cosmetic-dentistry.png" },
  { name: "MedSpa", src: "/imgs/spa.png" },
  { name: "Dermatology & Aesthetics", src: "/imgs/dermatology.png" },
];

export const IndustrySlider = () => {
  const scrollItems = [...INDUSTRIES, ...INDUSTRIES, ...INDUSTRIES];

  return (
    // Removed py-16 to eliminate space above and below
    <div className="bg-black py-5 w-full overflow-hidden">
      
      {/* Header - Reduced mb-12 to mb-8 for a tighter fit */}
      <div className="text-center mb-8">
        <span className="text-white text-[14px] font-medium">
          Industries we serve
        </span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infiniteScrollReverse {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
        .animate-infinite-reverse {
          animation: infiniteScrollReverse 35s linear infinite;
        }
      `}} />

      <div className="relative flex">
        {/* Gradients */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-infinite-reverse gap-10 md:gap-16">
          {scrollItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex flex-col items-center justify-center gap-5 w-[140px] md:w-[180px] shrink-0"
            >
              {/* Proper Bright White Icons */}
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <Image
                  src={item.src}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="brightness-0 invert opacity-100"
                />
              </div>

              {/* Simple White Labels */}
              <span className="text-white text-[13px] md:text-[15px] text-center font-normal leading-snug whitespace-normal px-2">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};