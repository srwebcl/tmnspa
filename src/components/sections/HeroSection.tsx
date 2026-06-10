"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const VIDEOS = [
  "/videos/Camiones_en_movimiento_rutas_norte_202606081842.mp4"
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % VIDEOS.length);
    }, 8000); // Change video every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[#071324] flex flex-col h-screen overflow-hidden selection:bg-brand selection:text-white">
      {/* Fallback Static Image (SEO & Instant Load) */}
      <Image
        src="/images/portfolio/img-70.jpeg"
        alt="TMN SpA Operaciones"
        fill
        priority
        className="absolute inset-0 z-0 w-full h-full object-cover scale-105 opacity-40 select-none pointer-events-none"
      />

      {/* Background Videos with Crossfade (Client only) */}
      {mounted && VIDEOS.map((src, index) => (
        <video
          key={src}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 z-10 w-full h-full object-cover scale-105 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentVideoIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 z-20 bg-black/50" />
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#071324]/95 via-[#071324]/30 to-transparent" />
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#071324] via-transparent to-transparent opacity-90" />
      
      {/* Main Content */}
      <div className="relative z-30 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-24">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-yellow/20 text-gray-300 text-xs font-medium tracking-[0.2em] uppercase mb-6 shadow-xl hover:border-brandLight/40 hover:bg-brand/5 hover:text-white transition-all duration-500 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow"></span>
              </span>
              Iquique · Tarapacá · Antofagasta
            </div>

            {/* Headline - Refined and Elegant with Staggered Animation */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.25] mb-6 drop-shadow-2xl flex flex-col"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2, delayChildren: 2.2 }
                }
              }}
            >
              <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} className="font-semibold pb-1">
                Transporte de Carga y
              </motion.span>
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }} 
                className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-brand drop-shadow-md pb-3 pt-1"
              >
                Logística Industrial
              </motion.span>
            </motion.h1>

            {/* Paragraph - More subtle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.8, ease: "easeOut" }}
              className="text-base md:text-lg text-gray-300 max-w-xl font-light leading-relaxed mb-10 drop-shadow-md opacity-90"
            >
              Más de dos décadas garantizando la continuidad operacional de la minería, construcción y comercio exterior. Equipamiento propio y monitoreo continuo en todo el Norte Grande.
            </motion.p>

            {/* Spectacular Gradient Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3.2, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start justify-start gap-5"
            >
              
              {/* Button 1: Yellow/Orange Gradient (T & N colors) */}
              <Link
                href="/contacto"
                className="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow to-[#FF9A00] transition-all duration-500 shadow-[0_0_30px_rgba(255,230,0,0.25)] hover:shadow-[0_0_50px_rgba(255,230,0,0.45)] hover:-translate-y-1 group border border-white/20"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 flex items-center justify-center font-bold text-darker tracking-wide text-sm">
                  Cotizar Operación
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>
              
              {/* Button 2: Green Gradient (M colors) */}
              <Link
                href="/servicios"
                className="relative overflow-hidden w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-yellow to-[#FF9A00] transition-all duration-500 shadow-[0_0_30px_rgba(255,230,0,0.25)] hover:shadow-[0_0_50px_rgba(255,230,0,0.45)] hover:-translate-y-1 group border border-white/20"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 flex items-center justify-center font-bold text-darker tracking-wide text-sm">
                  Ver Capacidades
                </span>
              </Link>

            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-yellow"
        >
          <ChevronDown className="w-5 h-5 opacity-80 filter drop-shadow-[0_0_8px_rgba(255,230,0,0.4)]" />
        </motion.div>
      </motion.div>

    </div>
  );
}
