"use client";

import "./globals.css";
import React, { useEffect, useState } from "react";
import ClientLayout from "./ClientLayout";
import Watermark from "@/components/sections/Watermark/Watermark"; // Adjust path if needed
import Lenis from "lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const lenis = new Lenis({
      duration: 3.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <body>
        {isMounted && (
          <>
            <div
              className="custom-cursor"
              style={{
                transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
                zIndex: 10000,
              }}
            />
            
            {/* Toggle this component based on payment status <Watermark /> */}
            
          </>
        )}

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}