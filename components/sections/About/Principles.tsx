// components/sections/About/Principles.tsx

const principles = [
  {
    id: "01",
    title: "Revenue first. Not traffic.",
    description: "We measure success in the same currency the client does — tables filled, jobs booked, treatments confirmed, clients signed. Closed revenue is the only output that counts.",
  },
  {
    id: "02",
    title: "Systems outlast campaigns.",
    description: "A revenue system keeps producing after the build phase ends. A one-off campaign stops the moment the spend stops. We build infrastructure — not bursts.",
  },
  {
    id: "03",
    title: "Diagnose before you prescribe.",
    description: "Every engagement opens with a Revenue Leak Diagnosis — mapping where prospects enter, where they stall, and where revenue escapes. Nothing gets built until the diagnosis is complete.",
  },
];

export default function Principles() {
  return (
    <section className="w-full bg-black text-white py-20 md:py-32 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32">
        
        {/* Left Side: Title & Subtitle */}
        <div className="lg:w-[40%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-[30px] md:text-[52px] font-bold leading-[1.1] tracking-tighter">
            Three operating principles.
          </h2>
          <p className="mt-8 text-white/70 text-[15px] md:text-[18px] leading-relaxed max-w-[480px] tracking-tight">
            The fundamental beliefs that guide every decision we make and every system we build.
          </p>
        </div>

        {/* Right Side: Principles List */}
        <div className="lg:w-[60%]">
          <div className="space-y-12 md:space-y-16">
            {principles.map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-start gap-6 md:gap-10 pb-12 ${
                  index !== principles.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                {/* ID Number */}
                <span className="text-xl md:text-2xl font-black text-white/30 tabular-nums shrink-0 mt-1 uppercase tracking-widest">
                  {item.id}
                </span>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter leading-none">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-[15px] md:text-[17px] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}