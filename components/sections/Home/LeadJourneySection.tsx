"use client";

import React from "react";
import LeadJourneyDisplay from "@/components/ui/Home/LeadJourneyDisplay";
import LeadJourneyContent from "@/components/ui/Home/LeadJourneyContent";

export default function LeadJourneySection() {
  return (
    <section className="bg-black py-16 px-6 md:py-32 antialiased font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl"> {/* Increased max-width for more impact */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Content side */}
          <div className="w-full order-2 md:order-1">
            <LeadJourneyContent />
          </div>

          {/* Visual side - now takes 50% width */}
          <div className="w-full order-1 md:order-2">
            <LeadJourneyDisplay />
          </div>

        </div>
      </div>
    </section>
  );
}