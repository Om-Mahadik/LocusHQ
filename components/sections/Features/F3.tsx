'use client';

import React, { useEffect, useState } from 'react';

const F3 = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const leads = [
    { id: 1, name: 'Anjali S.', left: '5%', delay: '0s', dur: '8s', color: 'bg-emerald-50 border-emerald-100 text-emerald-700' },
    { id: 2, name: 'Rahul G.', left: '35%', delay: '-2s', dur: '9s', color: 'bg-amber-50 border-amber-100 text-amber-700' },
    { id: 3, name: 'Priyanka D.', left: '65%', delay: '-4s', dur: '7s', color: 'bg-rose-50 border-rose-100 text-rose-700' },
    { id: 4, name: 'Amit P.', left: '15%', delay: '-6s', dur: '10s', color: 'bg-blue-50 border-blue-100 text-blue-700' },
    { id: 5, name: 'Sonal S.', left: '50%', delay: '-3s', dur: '8.5s', color: 'bg-violet-50 border-violet-100 text-violet-700' },
    { id: 6, name: 'Vikram R.', left: '75%', delay: '-1s', dur: '9.5s', color: 'bg-cyan-50 border-cyan-100 text-cyan-700' },
    { id: 7, name: 'Neha K.', left: '25%', delay: '-7s', dur: '8.2s', color: 'bg-orange-50 border-orange-100 text-orange-700' },
    { id: 8, name: 'Rohan M.', left: '60%', delay: '-5s', dur: '7.8s', color: 'bg-indigo-50 border-indigo-100 text-indigo-700' },
  ];

  if (!mounted) return null;

  return (
    <div className="relative flex flex-col justify-between h-full p-8 md:p-10 overflow-hidden bg-white rounded-3xl group min-h-[420px] border border-gray-100 shadow-sm">
      
      {/* 1. TOP SECTION (Matching Layout Consistency) */}
      <div className="relative z-20 space-y-1">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 bg-violet-50 rounded-lg flex items-center justify-center border border-violet-100">
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Acquisition</span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-none">
          6,000<span className="text-violet-500">+</span>
        </h2>
        <p className="text-sm text-gray-400 font-medium tracking-tight mt-1">Qualified Leads Generated</p>
      </div>

      {/* 2. MIDDLE SECTION (Falling Leads Animation) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Blurs to hide entry/exit */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
        
        <div className="relative w-full h-full px-4">
          {leads.map((lead) => (
            <div
              key={lead.id}
              className="absolute will-change-transform"
              style={{ 
                left: lead.left,
                top: '-20px',
                animation: `floatFall ${lead.dur} linear infinite`,
                animationDelay: lead.delay,
              }}
            >
              <div className={`flex items-center gap-1.5 pl-1 pr-3 py-1 rounded-full border shadow-sm backdrop-blur-sm ${lead.color}`}>
                <div className="w-6 h-6 rounded-full overflow-hidden border border-white/50 flex-shrink-0">
                  <img 
                    src={`https://i.pravatar.cc/150?u=${lead.id + 100}`} 
                    alt="avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[10px] font-extrabold tracking-tight whitespace-nowrap uppercase">
                  {lead.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. BOTTOM SECTION (Description) */}
      <div className="relative z-20 pt-6 border-t border-gray-50 bg-white/50 backdrop-blur-md">
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          High-intent inquiries for <span className="text-black font-semibold">banquets, real estate,</span> and services with documented CPL data.
        </p>
        
        <div className="mt-4 flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Verified Inbound Traffic Only
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatFall {
          0% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(0.9); 
            opacity: 0; 
          }
          15% { opacity: 1; }
          50% { 
            transform: translateY(200px) translateX(15px) rotate(4deg) scale(1); 
          }
          85% { opacity: 1; }
          100% { 
            transform: translateY(400px) translateX(-10px) rotate(-4deg) scale(0.9); 
            opacity: 0; 
          }
        }
      `}} />
    </div>
  );
};

export default F3;