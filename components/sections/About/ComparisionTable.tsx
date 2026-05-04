// components/sections/About/ComparisonTable.tsx

import { Check, X } from "lucide-react";

const comparisonData = [
  {
    traditional: "Stops at the click. Hands you traffic.",
    locus: "Owns the full path — click to closed deal.",
  },
  {
    traditional: "Optimises for impressions and CPL.",
    locus: "Optimises for qualified pipeline and closed revenue.",
  },
  {
    traditional: "Manual lead follow-up — if at all.",
    locus: "AI qualification active within 60 seconds.",
  },
  {
    traditional: "Reports traffic. Cannot track revenue.",
    locus: "Live attribution — revenue tracked to source.",
  },
  {
    traditional: "Generic creative across all verticals.",
    locus: "Niche-specific playbooks per vertical.",
  },
  {
    traditional: "Junior staff after onboarding phase.",
    locus: "Senior strategist on every retained account.",
  },
  {
    traditional: "You depend on their system entirely.",
    locus: "You own the infrastructure we build.",
  },
];

export default function ComparisonTable() {
  return (
    <section className="w-full bg-black py-16 md:py-24 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <h2 className="text-[30px] md:text-[52px] font-bold tracking-tighter text-white leading-[1.1]">
            Traditional Marketing vs LocusHQ
          </h2>
          <p className="mt-6 text-white/70 text-[15px] md:text-[18px] font-normal max-w-[480px] leading-relaxed tracking-tight">
            What changes when the model is built around revenue — not retainer hours.
          </p>
        </div>

        {/* Two Tables Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Traditional Card - Flat and Muted */}
          <div className="overflow-hidden rounded-[32px] border border-white/5 bg-[#080808] flex flex-col">
            <div className="px-8 py-10 border-b border-white/5 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white/30 tracking-tight uppercase">
                Traditional
              </h3>
            </div>
            
            <div className="flex flex-col flex-grow">
              {comparisonData.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-5 px-8 py-6 text-white/30 ${
                    index !== comparisonData.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="mt-1 flex-shrink-0">
                    <X size={16} className="text-red-900/50" />
                  </div>
                  <span className="text-[15px] md:text-[16px] font-normal leading-snug">
                    {item.traditional}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* LocusHQ Card - Flat and High Contrast */}
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0A] flex flex-col">
            <div className="px-8 py-10 border-b border-white/10 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase">
                LocusHQ
              </h3>
            </div>

            <div className="flex flex-col flex-grow">
              {comparisonData.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-5 px-8 py-6 text-white ${
                    index !== comparisonData.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div className="mt-1 flex-shrink-0">
                    <Check size={16} className="text-green-600" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] md:text-[17px] font-bold leading-snug tracking-tight">
                    {item.locus}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}