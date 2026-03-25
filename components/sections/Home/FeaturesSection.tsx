// FeaturesSection.tsx
import React from 'react';
import FeaturesCard1 from "@/components/ui/Home/FeaturesCard1";
import LeadCard from '@/components/ui/Home/LeadCard';
import CountriesCard from '@/components/ui/Home/CountriesCard';

const FeaturesSection = () => {
  return (
    <section className="bg-white min-h-screen py-32 px-6 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Simple descriptive header for the section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 max-w-2xl">
          Scale your business with optimized performance tracking.
        </h1>

        {/* The Card */}
        <FeaturesCard1 />
        <LeadCard />
        <CountriesCard />

        {/* Placeholder for future cards */}
        <div className="mt-20 text-slate-400 text-lg italic">
          (Future cards will cascade below here...)
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;