"use client";

import ContactSection from "@/components/sections/ContactSection";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const LightTrailsBackground = () => {
  const [trails, setTrails] = useState<Array<{
    id: number;
    width: number;
    y: number;
    color: string;
    duration: number;
    delay: number;
    isLeftToRight: boolean;
    height: string;
  }>>([]);

  useEffect(() => {
    const colors = ['bg-brand/50', 'bg-yellow/30', 'bg-white/10', 'bg-brandLight/40'];
    setTrails(
      Array.from({ length: 20 }).map((_, i) => {
        const width = Math.random() * 200 + 50;
        const isLeftToRight = Math.random() > 0.5;
        return {
          id: i,
          width,
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 15 + 5,
          delay: Math.random() * -20,
          isLeftToRight,
          height: Math.random() > 0.8 ? '3px' : '1.5px',
        };
      })
    );
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none z-0 opacity-40">
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className={`absolute rounded-full ${trail.color}`}
          style={{
            height: trail.height,
            width: `${trail.width}px`,
            top: `${trail.y}%`,
            left: trail.isLeftToRight ? '-300px' : '100%',
            boxShadow: `0 0 10px ${trail.color.includes('brand') ? 'rgba(0,87,255,0.4)' : trail.color.includes('yellow') ? 'rgba(255,106,0,0.4)' : 'rgba(255,255,255,0.2)'}`
          }}
          animate={{
            x: trail.isLeftToRight ? ['0vw', '120vw'] : ['0vw', '-120vw'],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: trail.duration,
            repeat: Infinity,
            delay: trail.delay,
            ease: "linear",
          }}
        />
      ))}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#071324] to-transparent pointer-events-none"
      />
    </div>
  );
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#071324] overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-[0.02] pointer-events-none z-0" />
      <LightTrailsBackground />

      <section className="relative pt-32 pb-12 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-400 mb-12 justify-center lg:justify-start"
          >
            <Link href="/" className="hover:text-brandLight transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-white">Contacto</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-md backdrop-blur-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-yellow"></span>
                </span>
                Operaciones 24/7
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Hablemos de su <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-[#ff8c33] drop-shadow-[0_0_15px_rgba(255,106,0,0.3)]">Próximo Proyecto</span>
              </h1>
              
              <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Estamos listos para evaluar sus requerimientos logísticos y diseñar la solución óptima para su carga en todo el Norte Grande.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] lg:h-[400px] rounded-[2.5rem] p-2 bg-gradient-to-br from-white/10 to-transparent shadow-[0_0_40px_rgba(0,0,0,0.3)] group"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-darker">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/portfolio/img-49.jpeg" 
                  alt="Contacto TMN" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/80 via-transparent to-transparent opacity-90 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection showInfo={true} isSubpage={true} />
    </main>
  );
}
