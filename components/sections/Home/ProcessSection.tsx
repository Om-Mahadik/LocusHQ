"use client";

import React, { useState } from 'react';
import ProcessDisplay from "@/components/ui/Home/ProcessDisplay"; 
import ProcessFlow from "@/components/ui/Home/ProcessFlow";

const ProcessSection = () => {
  // Started with Step 1, no auto-timer to keep it user-controlled and "simple"
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="bg-black text-white py-16 px-6 md:py-32 md:px-12 lg:px-20 font-sans antialiased">
      <div className="max-w-6xl mx-auto">
        {/* Simple 2-column grid without sticky constraints */}
        <div className="flex flex-col md:grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          
          {/* LEFT: Visual Preview */}
          <div className="w-full md:col-span-6 lg:col-span-7">
            <ProcessDisplay activeStep={activeStep} />
          </div>

          {/* RIGHT: Interactive Process Flow */}
          <div className="w-full md:col-span-6 lg:col-span-5">
            <ProcessFlow activeStep={activeStep} setActiveStep={setActiveStep} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;