'use client';

import React, { useEffect, useState } from 'react';

const F2 = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const flags = [
    { id: 'in', src: '/icons/india-flag.svg' },
    { id: 'ca', src: '/icons/canada-flag.svg' },
    { id: 'au', src: '/icons/australia-flag.svg' },
    { id: 'us', src: '/icons/usa-flag.svg' },
  ];

  if (!mounted) return null;

  return (
    <div className="relative flex flex-col justify-between h-full p-8 md:p-10 overflow-hidden bg-white rounded-3xl group min-h-[420px] border border-gray-100 shadow-sm">
      
      {/* 1. TOP SECTION (Matching F1 Layout) */}
      <div className="relative z-10 space-y-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center border border-blue-100">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Global Presence</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter leading-tight">
          4 Countries<span className="text-blue-500">.</span>
        </h2>
        <p className="text-sm text-gray-400 font-medium tracking-tight">One Unified Ad System</p>
      </div>

      {/* 2. MIDDLE SECTION (Your Animation Stage) */}
      <div className="relative h-44 w-full flex items-center justify-center overflow-visible">
        {/* The Arc Line Reference */}
        <div className="absolute top-24 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />

        <div className="relative w-full h-full">
          {flags.map((flag, index) => (
            <div
              key={flag.id}
              className="smooth-arc-node"
              style={{ 
                animationDelay: `${index * -2}s`,
              }}
            >
              <div className="w-full h-full rounded-full bg-white shadow-xl border border-gray-100 p-1 flex items-center justify-center overflow-hidden">
                <img 
                  src={flag.src} 
                  alt="flag" 
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. BOTTOM SECTION (Matching F1 Content) */}
      <div className="relative z-10 pt-6 border-t border-gray-50">
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Optimizing <span className="text-black font-semibold">restaurants, event venues,</span> and service businesses across 4 countries.
        </p>
        
        <div className="mt-4 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            India • Canada • Australia • USA
          </p>
        </div>
      </div>

      <style>{`
        .smooth-arc-node {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 50px;
          height: 50px;
          margin-left: -25px;
          margin-top: -25px;
          animation: curved-move 8s infinite linear;
          opacity: 0;
          will-change: transform, opacity;
        }

        @keyframes curved-move {
          0% {
            transform: translate(-140px, 40px) scale(0.6);
            opacity: 0;
          }
          10% { opacity: 1; }
          25% {
            transform: translate(-90px, -20px) scale(0.9);
          }
          50% {
            transform: translate(0px, -60px) scale(1.5);
            opacity: 1;
            z-index: 50;
          }
          75% {
            transform: translate(90px, -20px) scale(0.9);
          }
          90% { opacity: 1; }
          100% {
            transform: translate(140px, 40px) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default F2;