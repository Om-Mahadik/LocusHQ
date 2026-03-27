"use client";

import React from "react";

const features = [
  "GoHighLevel (GHL)",
  "ManyChat Flows",
  "AI Creative & Copy",
  "Multi-Platform Attribution"
];

export default function LeadJourneyContent() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      {/* Main Headline */}
      <h2 className="text-[28px] md:text-[42px] font-bold text-white leading-[1.1] tracking-tight mb-6">
        Every lead gets a journey.<br />
        Not a follow-up email.
      </h2>

      {/* Description Body */}
      <p className="text-zinc-400 max-w-[380px] md:max-w-lg leading-relaxed mb-10 text-[15px] md:text-[16px] font-medium">
        Most agencies hand you a lead and walk away. We build what happens next. 
        A prospect clicks your ad at 11pm. Within 4 minutes, they receive a 
        personalised WhatsApp message and get qualified.
      </p>

      {/* 2x2 Grid with Wrap Support to prevent Overflow */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-12 w-full max-w-2xl">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            {/* Custom Gemini Icon - Positioned at top to handle wrapped text */}
            <img 
              src="/icons/Gemini.svg" 
              alt="Gemini" 
              className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" 
            />
            {/* 1. Removed whitespace-nowrap so text wraps instead of going off-screen.
                2. Set base size to 14px (Standard readable minimum).
            */}
            <span className="text-white text-[14px] md:text-[16px] font-medium tracking-tight text-left leading-snug">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}