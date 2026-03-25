"use client";

import React from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function ContactInfo() {
  const details = [
    {
      icon: <Mail className="w-5 h-5 text-white" />,
      label: "Email us",
      value: "hello@youragency.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-white" />,
      label: "Call us",
      value: "+1 (555) 000-0000",
    },
    {
      icon: <MapPin className="w-5 h-5 text-white" />,
      label: "Location",
      value: "Toronto, Canada",
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      label: "Availability",
      value: "Mon — Fri, 9am — 6pm EST",
    },
  ];

  return (
    <div className="bg-[#0A0A0A] rounded-[40px] p-10 md:p-12 border border-white/[0.05] shadow-2xl relative overflow-hidden">
      {/* Subtle Ambient Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-[50px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 space-y-10">
        {details.map((item, index) => (
          <div key={index} className="flex items-start gap-5 group cursor-default">
            {/* Icon Container with Glass Effect */}
            <div className="h-12 w-12 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:border-white/20 group-hover:bg-white/[0.08] shadow-lg">
              {item.icon}
            </div>
            
            <div className="flex flex-col justify-center">
              <h4 className="text-zinc-500 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] mb-1.5 transition-colors duration-300 group-hover:text-zinc-300">
                {item.label}
              </h4>
              <p className="text-white font-medium text-[16px] md:text-[18px] tracking-tight leading-tight">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}