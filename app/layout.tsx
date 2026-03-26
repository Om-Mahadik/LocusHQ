"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MNavbar from "@/components/sections/Layout/MNavbar";
import DNavBar from "@/components/sections/Layout/DNavBar";
import Footer from "@/components/sections/Layout/Footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDragEnd = (_: any, info: any) => {
    if (info.offset.x > 50) setIsOpen(false);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0a0a0a] antialiased overflow-x-hidden">
        {/* We only render the interactive bits once mounted to avoid hydration errors */}
        {mounted && (
          <>
            <DNavBar />
            <MNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}

        <motion.div
          drag={isOpen ? "x" : false}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.05}
          onDragEnd={onDragEnd}
          // The key fix: If not mounted, stay at 0 to match server-side initial state
          animate={mounted && isOpen ? { x: "-82%" } : { x: "0%" }}
          transition={{ 
            type: "spring", 
            damping: 30, 
            stiffness: 300, 
            mass: 0.8 
          }}
          className="relative z-[100] bg-white min-h-screen shadow-[-30px_0_60px_rgba(0,0,0,0.5)] will-change-transform touch-pan-y"
        >
          <AnimatePresence>
            {mounted && isOpen && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-[110] cursor-grab active:cursor-grabbing bg-black/5" 
                onClick={() => setIsOpen(false)} 
              />
            )}
          </AnimatePresence>

          <main className="flex-1 text-black">
            {children}
          </main>
          
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}