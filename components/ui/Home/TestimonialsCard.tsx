"use client";

import React from "react";
import { Star, MapPin, Utensils, Sparkles, Sun, Building2, Globe, Wrench, Stethoscope, FileText, Home } from "lucide-react";

export interface Testimonial {
  quote: string;
  clientName: string;
  clientLocation: string;
  avatarSrc?: string;
}

interface TestimonialsCardProps {
  testimonial: Testimonial;
}

// Updated Helper to handle the new categories
const getIndustryDetails = (location: string) => {
  const loc = location.toLowerCase();
  
  // Industry-specific checks first
  if (loc.includes("restaurant")) return { icon: <Utensils className="h-3 w-3" />, label: "Hospitality" };
  if (loc.includes("medspa") || loc.includes("dentistry")) return { icon: <Sparkles className="h-3 w-3" />, label: "Wellness" };
  if (loc.includes("hvac")) return { icon: <Wrench className="h-3 w-3" />, label: "Trade Services" };
  if (loc.includes("visa") || loc.includes("consulting")) return { icon: <FileText className="h-3 w-3" />, label: "Professional" };
  if (loc.includes("estate")) return { icon: <Home className="h-3 w-3" />, label: "Real Estate" };
  if (loc.includes("solar")) return { icon: <Sun className="h-3 w-3" />, label: "Energy" };
  
  // Fallback to location-based if no industry is found
  if (loc.includes("toronto") || loc.includes("vancouver") || loc.includes("calgary") || loc.includes("mississauga")) {
    return { icon: <Building2 className="h-3 w-3" />, label: "Local Biz" };
  }
  
  return { icon: <Globe className="h-3 w-3" />, label: "Business" };
};

export function TestimonialsCard({ testimonial }: TestimonialsCardProps) {
  const { quote, clientName, clientLocation, avatarSrc } = testimonial;
  const industry = getIndustryDetails(clientLocation);

  return (
    <div className="group relative w-full font-sans antialiased select-none transition-all duration-700">
      {/* High-End Deep Black Card */}
      <div className="relative flex flex-col justify-between rounded-[32px] bg-[#080808] p-8 md:p-10 border border-white/[0.06] min-h-[320px] md:min-h-[360px] transition-all duration-500 group-hover:border-white/20 group-hover:bg-[#0C0C0C] group-hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        {/* Top Section: Industry Tag & Stars */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 transition-colors group-hover:text-white group-hover:bg-white/[0.08]">
            {industry.icon}
            <span className="text-[10px] uppercase tracking-[0.15em] font-bold">
              {industry.label}
            </span>
          </div>
          
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3 w-3 text-[#F5C518] fill-[#F5C518] opacity-90" />
            ))}
          </div>
        </div>

        {/* Quote Content - Pure White */}
        <div className="relative flex-grow">
          <p className="text-[17px] md:text-[18px] leading-[1.6] text-white font-normal tracking-tight text-justify [text-justify:inter-word] drop-shadow-sm">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {/* Bottom Section: Client Identity */}
        <div className="mt-8 flex items-center justify-between border-t border-white/[0.05] pt-6 transition-colors duration-500 group-hover:border-white/15">
          <div className="flex items-center gap-4">
            {/* Square Avatar */}
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-zinc-900 border border-white/[0.08]">
              {avatarSrc ? (
                <img 
                  src={avatarSrc} 
                  alt={clientName} 
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[12px] font-black text-zinc-500 uppercase group-hover:text-[#F5C518] transition-colors">
                  {clientName.charAt(0)}
                </div>
              )}
            </div>
            
            <div className="flex flex-col">
              <h4 className="text-[14px] font-bold text-white tracking-wide">
                {clientName}
              </h4>
              <div className="flex items-center gap-1 mt-1 opacity-50 group-hover:opacity-100 transition-opacity">
                <MapPin className="h-3 w-3 text-[#F5C518]" />
                <span className="text-[10px] md:text-[11px] text-zinc-400 group-hover:text-white font-medium tracking-tight transition-colors">
                  {clientLocation}
                </span>
              </div>
            </div>
          </div>

          {/* Verification Badge */}
          <div className="hidden sm:flex flex-col items-end">
             <span className="text-[10px] text-zinc-600 font-bold uppercase tracking-tighter">Verified Review</span>
             <div className="h-1 w-8 bg-[#F5C518] rounded-full mt-1 group-hover:w-12 transition-all duration-500" />
          </div>
        </div>
      </div>
    </div>
  );
}