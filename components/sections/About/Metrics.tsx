// components/sections/About/Metrics.tsx

const metrics = [
  {
    value: "10+",
    label: "Years In Performance Marketing",
  },
  {
    value: "25+",
    label: "Brands Scaled Across 6 Verticals",
  },
  {
    value: "$2M+",
    label: "Revenue Engineered Through Paid Systems",
  },
  {
    value: "4",
    label: "International Markets Operated",
  },
];

export default function Metrics() {
  return (
    <section className="w-full bg-black pt-4 pb-16 md:pt-6 md:pb-24 font-sans antialiased px-4 md:px-6"> 
      {/* Container: White rounded rectangle with light theme */}
      <div className="max-w-7xl mx-auto bg-white rounded-[40px] md:rounded-[54px] py-12 md:py-16 px-6 shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center px-4"
            >
              {/* Value: Switched to black for light theme */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tighter leading-none">
                {metric.value}
              </h2>
              
              {/* Label: Switched to zinc-500 for a clean light-mode look */}
              <p className="mt-4 text-[12px] md:text-[11px] text-zinc-500 font-semibold tracking-widest max-w-[140px] md:max-w-[180px] leading-tight">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}