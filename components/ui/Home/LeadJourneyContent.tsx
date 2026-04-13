"use client";

import React from "react";

const features = [
  "Instant AI Qualification",
  "Multichannel Conversion Sequences",
  "Automated Pipeline Movement",
  "Live Revenue Visibility"
];

export default function LeadJourneyContent() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left">
      {/* Main Headline */}
      <h2 className="text-[28px] md:text-[42px] font-bold text-white leading-[1.1] tracking-tight mb-6">
        Every prospect enters a system,<br />
        Not spreadsheets.
      </h2>

      {/* Description Body - Updated to White and Justified */}
      <p className="text-[14px] md:text-[28px] font-normal text-white/100 leading-[1.3] text-center [text-justify:inter-word] mb-8">
        Most agencies hand you a lead and walk away. We build what happens next. 
        A prospect clicks your ad at 11pm. Within 4 minutes, they receive a 
        personalised WhatsApp message and get qualified.
      </p>

      {/* 2x2 Grid with Wrap Support */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:gap-x-12 w-full max-w-2xl">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <img 
              src="/icons/Gemini.svg" 
              alt="Gemini" 
              className="w-4 h-4 md:w-5 md:h-5 shrink-0 mt-0.5" 
            />
            <span className="text-white text-[14px] md:text-[16px] font-medium tracking-tight text-left leading-snug">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}