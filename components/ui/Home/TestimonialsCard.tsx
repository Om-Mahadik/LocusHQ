"use client";

import React from "react";
import { Star, MapPin } from "lucide-react";

export interface Testimonial {
  quote: string;
  clientName: string;
  clientLocation: string;
  avatarSrc?: string;
}

interface TestimonialsCardProps {
  testimonial: Testimonial;
}

export function TestimonialsCard({ testimonial }: TestimonialsCardProps) {
  const { quote, clientName, clientLocation, avatarSrc } = testimonial;

  return (
    <div className="group relative w-full font-sans antialiased select-none transition-all duration-700">
      {/* High-End Deep Black Card */}
      <div className="relative flex flex-col justify-between rounded-[32px] bg-[#080808] p-8 md:p-10 border border-white/[0.06] min-h-[300px] md:min-h-[340px] transition-all duration-500 group-hover:border-white/20 group-hover:bg-[#0C0C0C] group-hover:shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        
        {/* Top: The Pure White Quote */}
        <div className="relative">
          {/* Added text-justify and [text-justify:inter-word] here */}
          <p className="text-[18px] md:text-[17px] leading-[1.6] text-white font-normal tracking-tight text-justify [text-justify:inter-word]">
            &ldquo;{quote}&rdquo;
          </p>
        </div>

        {/* Bottom: The Identity Section */}
        <div className="mt-8 flex items-center justify-between border-t border-white/[0.05] pt-6 transition-colors duration-500 group-hover:border-white/15">
          <div className="flex items-center gap-4">
            {/* Minimal Square Avatar */}
            <div className="relative h-10 w-10 md:h-12 md:w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-900 border border-white/[0.08]">
              {avatarSrc ? (
                <img 
                  src={avatarSrc} 
                  alt={clientName} 
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" 
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-zinc-500 uppercase">
                  {clientName.charAt(0)}
                </div>
              )}
            </div>
            
            <div className="flex flex-col">
              <h4 className="text-[13px] md:text-[14px] font-bold text-white tracking-wide">
                {clientName}
              </h4>
              <div className="flex items-center gap-1 mt-1 opacity-40 group-hover:opacity-60 transition-opacity">
                <MapPin className="h-3 w-3 text-white" />
                <span className="text-[10px] md:text-[11px] text-white font-medium tracking-widest">
                  {clientLocation}
                </span>
              </div>
            </div>
          </div>

          {/* Minimal Star Rating - High Focus */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] transition-all duration-500 group-hover:bg-white/[0.05]">
            <Star className="h-3.5 w-3.5 text-[#F5C518] fill-[#F5C518] transition-transform duration-500 group-hover:scale-110" />
            <span className="text-[14px] md:text-[16px] font-bold text-white tabular-nums">5.0</span>
          </div>
        </div>
      </div>
    </div>
  );
}