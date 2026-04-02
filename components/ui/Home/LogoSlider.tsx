import React from "react";
import Image from "next/image";

const LOGOS = [
  { src: "/partners-logos/1.png", alt: "Partner 1" },
  { src: "/partners-logos/2.png", alt: "Partner 2" },
  { src: "/partners-logos/3.png", alt: "Partner 3" },
  { src: "/partners-logos/4.png", alt: "Partner 4" },
  { src: "/partners-logos/5.png", alt: "Partner 5" },
  { src: "/partners-logos/6.png", alt: "Partner 6" },
  { src: "/partners-logos/7.png", alt: "Partner 7" },
  { src: "/partners-logos/8.png", alt: "Partner 8" },
  { src: "/partners-logos/9.png", alt: "Partner 9" },
  { src: "/partners-logos/10.png", alt: "Partner 10" },
  { src: "/partners-logos/11.png", alt: "Partner 11" },
  { src: "/partners-logos/12.png", alt: "Partner 12" },
  { src: "/partners-logos/13.png", alt: "Partner 13" },
  { src: "/partners-logos/14.png", alt: "Partner 14" },
];

export const LogoSlider = () => {
  return (
    <div className="bg-black py-10 w-full overflow-hidden">
      {/* Header Text */}
      <div className="text-center mb-8">
        <span className="text-gray-300 text-xs font-regular tracking-widest">
          Brands we have grown
        </span>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
      `}} />

      <div className="relative flex">
        {/* Gradients */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

        <div className="animate-scroll-infinite gap-12 flex items-center pr-12">
          {/* First set */}
          {LOGOS.map((logo, index) => (
            <div key={`logo-1-${index}`} className="relative w-28 h-8 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}

          {/* Second set (Duplicate) */}
          {LOGOS.map((logo, index) => (
            <div key={`logo-2-${index}`} className="relative w-28 h-8 flex-shrink-0">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};