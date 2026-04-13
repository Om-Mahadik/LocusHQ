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
    <div className="flex flex-col items-center md:items-start max-w-7xl mx-auto font-sans antialiased">
      {/* Main Headline - Styled to match ProcessFlow's 4xl/6xl look */}
      <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight md:leading-tight tracking-tighter mb-6 text-center md:text-left">
        Every prospect enters a system,<br className="hidden md:block" />
        Not spreadsheets.
      </h2>

      {/* Description Body - Styled to match ProcessFlow's zinc-400 subheader */}
      <p className="text-zinc-400 text-base md:text-xl font-normal leading-relaxed text-center md:text-left md:text-justify [text-justify:inter-word] mb-10 max-w-2xl">
        Most agencies hand you a lead and walk away. We build what happens next. 
        A prospect clicks your ad at 11pm. Within 4 minutes, they receive a 
        personalised WhatsApp message and get qualified.
      </p>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:gap-x-12 w-full max-w-2xl">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 group">
            <div className="flex-shrink-0 mt-1">
              <img 
                src="/icons/Gemini.svg" 
                alt="Gemini" 
                className="w-4 h-4 md:w-5 md:h-5 opacity-80 group-hover:opacity-100 transition-opacity" 
              />
            </div>
            <span className="text-white text-[14px] md:text-[16px] font-medium tracking-tight text-left leading-snug">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}