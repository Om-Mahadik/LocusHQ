"use client";

import React from "react";

const features = [
  "GoHighLevel (GHL)",
  "ManyChat Flows",
  "AI-Assisted Creative & Copy",
  "Multi-Platform Attribution"
];

export default function LeadJourneyContent() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      {/* Main Headline */}
      <h2 className="text-[32px] md:text-[48px] font-bold text-white leading-[1.1] tracking-tight mb-8">
        Every lead gets a journey.<br />
        Not a follow-up email.
      </h2>

      {/* Description Body */}
      <p className="text-zinc-500 max-w-2xl md:max-w-xl leading-relaxed mb-12 text-[15px] md:text-[17px] font-medium">
        Most agencies hand you a lead and walk away. We build what happens next. 
        A prospect clicks your ad at 11pm. Within 4 minutes, they receive a 
        personalised WhatsApp message, get qualified through a conversational 
        flow, and find themselves looking at your calendar — before you even 
        woken up. This is not a feature. This is the product.
      </p>

      {/* 2x2 Grid for both PC and Mobile */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-12 w-full max-w-fit">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 md:gap-4">
            {/* Custom Gemini Icon */}
            <img 
              src="/icons/Gemini.svg" 
              alt="Gemini" 
              className="w-5 h-5 md:w-6 md:h-6 shrink-0" 
            />
            {/* Pure White & Single Line */}
            <span className="text-white text-[13px] md:text-[16px] font-medium whitespace-nowrap tracking-tight">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}