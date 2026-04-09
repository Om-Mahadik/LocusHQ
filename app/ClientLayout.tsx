"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MNavbar from "@/components/sections/Layout/MNavbar";
import DNavBar from "@/components/sections/Layout/DNavBar";
import Footer from "@/components/sections/Layout/Footer";

// A premium ease-in-out curve (starts slow, speeds up, glides to a stop)
const premiumEaseInOut = [0.65, 0, 0.35, 1];

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 768) setIsOpen(false);
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const onDragEnd = (_: any, info: any) => {
    if (info.offset.x > 50 && info.velocity.x > 20) {
      setIsOpen(false);
    }
  };

  return (
    <>
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
        animate={{ x: mounted && isOpen ? "-82%" : "0%" }}
        // APPLIED PREMIUM EASE-IN-OUT HERE
        transition={{ duration: 0.5, ease: premiumEaseInOut }}
        style={{ willChange: "transform" }}
        className="relative z-[100] min-h-screen bg-transparent overflow-x-hidden"
      >
        <AnimatePresence>
          {mounted && isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // MATCHED THE EASE-IN-OUT FOR THE OVERLAY
              transition={{ duration: 0.4, ease: premiumEaseInOut }}
              style={{ willChange: "opacity" }}
              className="absolute inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>

        <div className={isOpen ? "pointer-events-none select-none" : ""}>
          <main>{children}</main>
          <Footer />
        </div>
      </motion.div>
    </>
  );
}