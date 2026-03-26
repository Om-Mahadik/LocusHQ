'use client';

import React, { useEffect, useState } from 'react';

// A complete set of 15 generated placeholder brand logos (Abstract SVGs)
const rawBrandsData = [
  // ROW 1
  { id: 1, delay: '0s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></svg>) },
  { id: 2, delay: '-0.4s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>) },
  { id: 3, delay: '-0.8s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12H2M12 2v20"/><path d="M7 2a10 10 0 1 0 10 0"/><path d="M7 22a10 10 0 1 1 10 0"/></svg>) },
  { id: 4, delay: '-1.2s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M9 3v18"/></svg>) },
  { id: 5, delay: '-1.6s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 4v12a4 4 0 1 1-8 0V4"/><line x1="12" y1="4" x2="12" y2="20"/></svg>) },
  // ROW 2
  { id: 6, delay: '-2.0s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8m-4-4v8"/></svg>) },
  { id: 7, delay: '-2.4s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="m16 6 4 14H4L8 6z"/><path d="M12 2v18"/></svg>) },
  { id: 8, delay: '-2.8s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3"/><ellipse cx="12" cy="12" rx="9" ry="3"/><ellipse cx="12" cy="19" rx="9" ry="3"/></svg>) },
  { id: 9, delay: '-3.2s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>) },
  { id: 10, delay: '-3.6s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10V4h6v12H3z"/><path d="M15 14v6h6V8h-6z"/></svg>) },
  // ROW 3
  { id: 11, delay: '-4.0s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><path d="M12 2v20"/><path d="M18 12h3M6 12H3"/></svg>) },
  { id: 12, delay: '-4.4s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"/><path d="M17.6 5.6a10 10 0 0 1 2.4 3.4"/><path d="M20.8 13.1a10 10 0 0 1-1 3.8"/></svg>) },
  { id: 13, delay: '-4.8s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg>) },
  { id: 14, delay: '-5.2s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="3 11 11 3 21 11 11 19 3 11"/></svg>) },
  { id: 15, delay: '-5.6s', logo: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 10h18"/><path d="M7 10v10"/><path d="M11 10v10"/><path d="M15 10v10"/></svg>) },
];

const F4 = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex flex-col justify-between h-full p-8 md:p-10 overflow-hidden bg-white rounded-3xl group min-h-[420px] border border-gray-100 shadow-sm">
      
      {/* 1. TOP SECTION (Dashboard Header) */}
      <div className="relative z-20 space-y-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-cyan-50 rounded-lg flex items-center justify-center border border-cyan-100">
            <svg className="w-4 h-4 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Portfolio Growth</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-none">
          15<span className="text-cyan-500">+</span>
        </h2>
        <p className="text-sm text-gray-400 font-medium tracking-tight mt-1">Partnerships Scaled</p>
      </div>

      {/* 2. MIDDLE SECTION (Expansion Matrix Animation) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-visible">
        {/* Radial Pulse guiding the expansion */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ecfeff_0%,_transparent_70%)] opacity-40 animate-pulse-slow" />
        
        <div className="relative w-full h-full flex flex-col items-center justify-center gap-2 px-4 opacity-30 group-hover:opacity-60 transition-opacity duration-700 translate-y-4">
          {/* North Row */}
          <div className="flex items-center justify-center gap-2 animate-matrix-expansion">
            {rawBrandsData.slice(0, 5).map((brand) => (
              <BrandNode key={brand.id} brand={brand} />
            ))}
          </div>

          {/* Central Row */}
          <div className="flex items-center justify-center gap-2 animate-matrix-expansion-delayed">
            {rawBrandsData.slice(5, 10).map((brand) => (
              <BrandNode key={brand.id} brand={brand} />
            ))}
          </div>

          {/* South Row */}
          <div className="flex items-center justify-center gap-2 animate-matrix-expansion">
            {rawBrandsData.slice(10, 15).map((brand) => (
              <BrandNode key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION (Content) */}
      <div className="relative z-20 pt-6 border-t border-gray-50 bg-white/50 backdrop-blur-md mt-auto">
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          From <span className="text-black font-semibold">fast-casual dining</span> to <span className="text-black font-semibold">multi-state real estate</span>, we scale diverse business models.
        </p>
        
        <div className="mt-4 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Documented Scaling Case Studies
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes matrixExpansion {
          0% { transform: scale(0.7) translateY(20px); opacity: 0; }
          15% { opacity: 1; }
          50% { transform: scale(1) translateY(0px); opacity: 1; }
          85% { opacity: 1; }
          100% { transform: scale(0.8) translateY(-40px); opacity: 0; }
        }

        .animate-matrix-expansion {
          animation: matrixExpansion 10s infinite ease-in-out;
        }

        @keyframes matrixExpansionDelayed {
          0% { transform: scale(0.7) translateY(20px); opacity: 0; }
          15% { opacity: 1; }
          50% { transform: scale(1.1) translateY(-10px); opacity: 1; }
          85% { opacity: 1; }
          100% { transform: scale(0.8) translateY(-40px); opacity: 0; }
        }

        .animate-matrix-expansion-delayed {
          animation: matrixExpansionDelayed 10s infinite ease-in-out;
          animation-delay: -5s;
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}} />
    </div>
  );
};

const BrandNode = ({ brand }: { brand: any }) => (
  <div
    className="w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-xl bg-white border border-gray-100 flex items-center justify-center p-2.5 shadow-sm transition-all"
  >
    <div className="w-full h-full text-cyan-600/60">
      {brand.logo}
    </div>
  </div>
);

export default F4;