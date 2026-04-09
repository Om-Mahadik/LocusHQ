import React from "react";
import { 
  Bell, 
  Warehouse, 
  Plane, 
  Building2, 
  Sparkles, 
  Droplets, 
  Stethoscope 
} from "lucide-react";

const INDUSTRIES = [
  { name: "Restaurant & Hospitality", icon: <Bell size={20} className="text-orange-500" /> },
  { name: "HVAC & Roofing", icon: <Warehouse size={20} className="text-orange-500" /> },
  { name: "Visa Consulting", icon: <Plane size={20} className="text-orange-500" /> },
  { name: "Real Estate Brokerages", icon: <Building2 size={20} className="text-orange-500" /> },
  { name: "Cosmetic Dentistry", icon: <Stethoscope size={20} className="text-orange-400" /> },
  { name: "MedSpa", icon: <Sparkles size={20} className="text-orange-400" /> },
  { name: "Dermatology & Aesthetics", icon: <Droplets size={20} className="text-orange-400" /> },
];

export const IndustrySlider = () => {
  return (
    <div className="bg-black py-12 w-full overflow-hidden">
      
      {/* Header Text */}
      <div className="text-center mb-10">
        <span className="text-white text-[12px] font-regular tracking-widest">
          Industries we serve
        </span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes reverseScroll {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .industry-reverse-scroll {
          display: flex;
          width: max-content;
          animation: reverseScroll 40s linear infinite !important;
        }
      `}} />

      <div className="relative flex items-center">
        {/* Gradients */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="industry-reverse-scroll gap-6 md:gap-8 flex items-center pr-6 md:pr-8">
          
          {/* Loop twice for seamless reverse scroll */}
          {[...INDUSTRIES, ...INDUSTRIES].map((item, index) => (
            <div 
              key={`industry-${index}`} 
              // 1. Applied specific hex #0A0A0A for background and updated hover state
              className="flex items-center gap-3 md:gap-4 bg-[#0A0A0A] border border-white/5 px-6 py-3 md:px-8 md:py-4 rounded-full flex-shrink-0 hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              
              {/* 2. Text changed to pure white */}
              <span className="text-white font-medium text-[12px] md:text-[14px] whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
};