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
  { name: "Restaurant & Hospitality", icon: <Bell size={18} className="text-orange-500" /> },
  { name: "HVAC & Roofing", icon: <Warehouse size={18} className="text-orange-500" /> },
  { name: "Visa Consulting", icon: <Plane size={18} className="text-orange-500" /> },
  { name: "Real Estate Brokerages", icon: <Building2 size={18} className="text-orange-500" /> },
  { name: "Cosmetic Dentistry", icon: <Stethoscope size={18} className="text-orange-400" /> },
  { name: "MedSpa", icon: <Sparkles size={18} className="text-orange-400" /> },
  { name: "Dermatology & Aesthetics", icon: <Droplets size={18} className="text-orange-400" /> },
];

export const IndustrySlider = () => {
  return (
    <div className="bg-black py-12 w-full overflow-hidden">
      {/* Small light grey header text */}
      <div className="text-center mb-8">
        <span className="text-gray-300 text-[10px] font-regular tracking-[0.2em]">
          Industries We Serve
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
        {/* Blackish Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <div className="industry-reverse-scroll gap-6 flex items-center pr-6">
          {/* Loop twice for seamless reverse scroll */}
          {[...INDUSTRIES, ...INDUSTRIES].map((item, index) => (
            <div 
              key={`industry-${index}`} 
              className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full flex-shrink-0"
            >
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <span className="text-gray-200 font-medium text-xs whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};