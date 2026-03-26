'use client';
import { motion } from 'framer-motion';

const F1 = () => {
  return (
    <div className="relative flex flex-col justify-between h-full p-8 md:p-10 overflow-hidden bg-white rounded-3xl group min-h-[420px] border border-gray-100 shadow-sm">
      
      {/* 1. DASHBOARD HEADER */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center border border-emerald-100">
              <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Ad Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter">
            $500K<span className="text-emerald-500">+</span>
          </h2>
          <p className="text-sm text-gray-400 font-medium tracking-tight">Total Ad Spend Managed</p>
        </div>

        {/* Growth Percentage Pill */}
        <div className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-[11px] font-bold flex items-center gap-1 border border-emerald-100/50">
          12.4% <span className="text-[14px]">↗</span>
        </div>
      </div>

      {/* 2. ULTRA-THIN LINE GRAPH */}
      <div className="relative h-32 w-full mt-8">
        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="thinGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Vertical Grid Marks */}
          {[20, 40, 60, 80].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="40" stroke="#f3f4f6" strokeWidth="0.5" />
          ))}
          
          {/* Area Fill */}
          <motion.path
            d="M 0 38 Q 10 35, 20 37 T 40 28 T 60 32 T 80 15 T 100 8 L 100 40 L 0 40 Z"
            fill="url(#thinGradient)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          {/* The Ultra-Thin Line */}
          <motion.path
            d="M 0 38 Q 10 35, 20 37 T 40 28 T 60 32 T 80 15 T 100 8"
            fill="none"
            stroke="#10b981"
            strokeWidth="0.75" // Very thin line as requested
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Active Tooltip & Pulse Point */}
          <motion.g
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
          >
            <circle cx="100" cy="8" r="3" fill="#10b981" fillOpacity="0.2" />
            <circle cx="100" cy="8" r="1" fill="#10b981" />
            <rect x="75" y="-12" width="25" height="12" rx="2" fill="black" />
            <text x="87.5" y="-4" textAnchor="middle" fill="white" fontSize="5" fontWeight="bold">ACTIVE</text>
          </motion.g>
        </svg>
      </div>

      {/* 3. CONTENT FOOTER */}
      <div className="relative z-10 pt-6 mt-4">
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Across <span className="text-black font-semibold">hospitality, real estate, B2B,</span> and service businesses in India, Canada, Australia, and USA.
        </p>
        
        {/* "Extra" callout style from the image */}
        <div className="mt-4 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-xs font-medium text-gray-400">
            Scaling <span className="text-emerald-600 font-bold">global accounts</span> this month 😎
          </p>
        </div>
      </div>

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
    </div>
  );
};

export default F1;