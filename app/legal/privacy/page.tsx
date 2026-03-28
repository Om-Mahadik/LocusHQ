"use client";

import React, { useEffect, useRef, useState, ReactNode } from 'react';

// 1. Define types for the RevealSection Props
interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: string;
}

function useScrollReveal() {
  const [hasAppeared, setHasAppeared] = useState(false);
  // 2. Fix: Specify HTMLDivElement for the Ref
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHasAppeared(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);
    
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return { domRef, hasAppeared }; // Returning as object for cleaner destructuring
}

const RevealSection = ({ children, className = "", delay = "0ms" }: RevealSectionProps) => {
  const { domRef, hasAppeared } = useScrollReveal();
  return (
    <div
      ref={domRef}
      style={{ transitionDelay: hasAppeared ? delay : "0ms" }}
      className={`${className} transition-all duration-1000 ease-out ${
        hasAppeared ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[150vh] bg-[#000000] flex flex-col items-center px-4 pb-20 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      <div className="w-full h-24 sm:h-32 flex-shrink-0" aria-hidden="true" />

      <header className="w-full max-w-2xl mb-10 text-center">
        <RevealSection>
          <h1 className="text-white text-xl sm:text-2xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
        </RevealSection>
      </header>

      {/* Main Content Card */}
      <RevealSection delay="150ms" className="w-full max-w-2xl">
        <main className="w-full bg-white rounded-[40px] md:rounded-[48px] shadow-2xl border border-white/5 overflow-hidden">
          <div className="p-10 md:p-16 space-y-16">
            
            <RevealSection delay="300ms">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-bold">Effective Date: March 2026</p>
              <p className="text-[13px] leading-relaxed text-gray-600">
                This Privacy Policy describes how your personal information is collected, used, and shared. 
                We are committed to protecting your personal data and your right to privacy.
              </p>
            </RevealSection>

            <RevealSection delay="400ms">
              <hr className="border-gray-100" />
            </RevealSection>

            <RevealSection>
              <h2 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">1. Information Collection</h2>
              <p className="text-[13px] leading-relaxed text-gray-600">
                We collect information that you provide directly to us when you create an account, 
                update your profile, or use our interactive features.
              </p>
            </RevealSection>

            <RevealSection>
              <h2 className="text-xs font-bold text-gray-900 mb-3 uppercase tracking-wider">2. How We Use Data</h2>
              <p className="text-[13px] leading-relaxed text-gray-600">
                The data we collect is used to maintain our services, notify you about changes, 
                and provide customer support.
              </p>
            </RevealSection>

            <RevealSection className="bg-gray-50 p-8 rounded-[24px] border border-gray-100">
              <h3 className="text-sm font-bold text-gray-900 mb-1">Have concerns?</h3>
              <p className="text-[12px] text-gray-500 leading-normal">
                Reach out to our privacy officer at 
                <span className="text-blue-600 font-medium ml-1 cursor-pointer hover:underline">privacy@yourdomain.com</span>.
              </p>
            </RevealSection>

            <RevealSection delay="200ms" className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400">
               <span className="text-[10px] uppercase tracking-widest font-medium">© 2026 YOUR BRAND</span>
               <div className="flex gap-4">
                  <button type="button" className="text-[10px] hover:text-gray-900 transition-colors uppercase tracking-widest font-bold underline decoration-gray-200 underline-offset-4">Print</button>
                  <button type="button" className="text-[10px] hover:text-gray-900 transition-colors uppercase tracking-widest font-bold underline decoration-gray-200 underline-offset-4">Terms</button>
               </div>
            </RevealSection>

          </div>
        </main>
      </RevealSection>

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_#1a1a1a_0%,_#0a0a0a_100%)] -z-20" />
    </div>
  );
}