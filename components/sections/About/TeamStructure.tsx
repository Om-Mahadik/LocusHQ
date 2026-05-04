// components/sections/About/TeamStructure.tsx

const features = [
  {
    count: "5+",
    title: "Performance Media Buyers",
    description: "Senior operators managing Meta and Google campaigns daily. Each buyer owns 4—6 accounts maximum.",
  },
  {
    count: "3+",
    title: "Automation Engineers",
    description: "Build AI qualification flows, CRM integrations, and pipeline infrastructure across all active accounts.",
  },
  {
    count: "2+",
    title: "Revenue Strategists",
    description: "Run diagnostics, build niche playbooks, and conduct weekly account reviews for every retained client.",
  },
  {
    count: "6",
    title: "Verticals We Go Deep In",
    description: "Not generalist positioning. Documented playbooks, benchmarks, and buyer psychology mapped per niche.",
  },
];

export default function TeamStructure() {
  return (
    <section className="w-full bg-black text-white py-0 font-sans antialiased">
      {/* Changed py-20/32 to py-0 to collapse the section space */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 pt-10 pb-0">
        {/* Managed top/bottom space strictly within the container (pb-0 removes space below) */}
        
        {/* Left Side: Narrative */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
          <h2 className="text-[30px] md:text-[42px] font-bold leading-[1.1] tracking-tighter text-center lg:text-left max-w-xl">
            A decade of running campaigns. Rebuilt as a revenue growth system.
          </h2>
          
          <div className="mt-10 space-y-8 text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-xl text-justify">
            <div className="w-full">
              <span className="text-white font-bold text-lg md:text-xl block mb-3 tracking-tight text-center lg:text-left">
                Most operators run ads and call it done.
              </span> 
              <p>
                The part they skip — what happens between the click and the closed deal — 
                is where revenue actually dies. We built LocusHQ to own that entire path.
              </p>
            </div>

            <p>
              Our team combines senior-level paid media management with an automation engineering function and a revenue strategy layer that connects ad spend to actual closed business.
            </p>

            <p className="font-medium text-white/90">
              We manage account budgets ranging from 
              <span className="text-white font-black px-1 underline decoration-blue-600/50 underline-offset-4"> $5K to $50K </span> 
              in monthly ad spend with deep niche playbooks for each vertical.
            </p>
          </div>
        </div>

        {/* Right Side: Features List */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="space-y-12">
            {features.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-6 md:gap-10 pb-8 text-left ${
                  index !== features.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <span className="text-4xl md:text-5xl font-black text-white tracking-tighter min-w-[70px] md:min-w-[100px] shrink-0 leading-none">
                  {item.count}
                </span>
                
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm md:text-[15px] leading-relaxed font-medium">
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