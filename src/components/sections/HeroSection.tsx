"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative bg-white flex flex-col">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-darker py-16">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover opacity-90"
        >
          <source src="/videos/camion-movimiento.mp4" type="video/mp4" />
        </video>
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 z-0 bg-darker/30 mix-blend-multiply" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-darker/95 via-darker/50 to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-darker/80 via-transparent to-darker/30" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_left_center,rgba(134,177,32,0.25),transparent_60%)]" />
        
        <div className="container relative z-10 px-4 mx-auto max-w-7xl flex flex-col items-start justify-center text-left -mt-12 md:-mt-24">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-6 mt-4"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-200 text-sm font-medium tracking-wide shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow"></span>
              </span>
              Líderes en el Norte Grande
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl"
          >
            Transporte de Carga y <br className="hidden md:block" />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow via-brandLight to-brand drop-shadow-[0_0_20px_rgba(134,177,32,0.4)]">
              Logística Industrial
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md"
          >
            Movilizamos el motor del Norte de Chile. Transportamos cargas de punto a punto para la minería y todo tipo de industrias, garantizando entrega segura, monitoreo 24/7 y una flota versátil y moderna.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-5"
          >
            <Link
              href="/contacto"
              className="relative overflow-hidden text-base px-8 py-3.5 rounded-full bg-gradient-to-r from-brand to-brandLight hover:from-brandLight hover:to-brand transition-all duration-300 shadow-[0_4px_20px_rgba(134,177,32,0.3)] hover:shadow-[0_6px_25px_rgba(134,177,32,0.5)] hover:-translate-y-0.5 group text-white font-medium flex items-center border border-brandLight/30"
            >
              <span className="relative z-10 flex items-center tracking-wide">
                Cotizar Ahora <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              href="/servicios"
              className="text-base px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 hover:-translate-y-0.5 text-white font-medium tracking-wide shadow-lg"
            >
              Nuestros Servicios
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
