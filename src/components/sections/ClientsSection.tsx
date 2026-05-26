"use client";

import Image from "next/image";

const clientLogos = [
  { name: "Komatsu", src: "/images/clientes/png/komatsu.png" },
  { name: "Albemarle", src: "/images/clientes/png/albemarle.png" },
  { name: "SK Rental", src: "/images/clientes/png/sk-rental.png" },
  { name: "Agunsa", src: "/images/clientes/png/agunsa.webp" },
  { name: "ACF Baquedano", src: "/images/clientes/png/acf-baquedano.png" },
  { name: "Cosayach", src: "/images/clientes/png/cosayach.svg" },
  { name: "Quiborax", src: "/images/clientes/png/quiborax.avif" },
];

export default function ClientsSection() {
  // Duplicate logos multiple times to ensure enough width for seamless scrolling
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="relative py-12 bg-[#071324] border-b border-white/5 overflow-hidden z-10 animate-marquee-hover">
      {/* Dynamic Keyframes for CSS Carousel Ticker */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-hover:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />

      {/* Fade Gradients at Edges to Blend Seamlessly */}
      <div className="absolute top-0 left-0 w-16 sm:w-36 h-full bg-gradient-to-r from-[#071324] to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-16 sm:w-36 h-full bg-gradient-to-l from-[#071324] to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-6">
        <div className="text-center">
          <p className="text-gray-400 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
            Respaldados por líderes de la gran minería e industria
          </p>
        </div>
      </div>

      {/* Marquee Ticker Track */}
      <div className="relative w-full overflow-hidden flex py-3">
        <div className="animate-marquee flex items-center">
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="relative w-[120px] h-[45px] sm:w-[150px] sm:h-[55px] flex items-center justify-center mx-8 sm:mx-12 group flex-shrink-0"
            >
              {/* Display logos in color, slightly transparent by default, full opacity on hover */}
              <div className="relative w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ease-out cursor-default">
                <Image
                  src={logo.src}
                  alt={`Logo de ${logo.name}`}
                  fill
                  sizes="(max-w-640px) 120px, 150px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
