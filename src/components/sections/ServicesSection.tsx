"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, Droplet, Tractor, Box, Map, PackageOpen, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";

const services = [
  {
    icon: Truck,
    title: "Carga a Granel en Bateas",
    description: "Transporte de sales, áridos, concentrados y óxidos de cobre con alta capacidad y eficiencia comprobada.",
    href: "/servicios/transporte-granel",
    image: "/images/portfolio/img-12.jpeg"
  },
  {
    icon: Box,
    title: "Cargas Sobredimensionadas",
    description: "Movimiento experto de cargas de gran volumen y sobrepeso bajo estricta normativa y coordinación de escolta.",
    href: "/servicios/carga-sobredimensionada",
    image: "/images/portfolio/img-24.jpeg"
  },
  {
    icon: Droplet,
    title: "Transporte de Líquidos",
    description: "Traslado seguro de ácido, agua industrial y diésel, cumpliendo todos los estándares de prevención medioambiental.",
    href: "/servicios/transporte-liquidos",
    image: "/images/portfolio/img-40.jpeg"
  },
  {
    icon: Tractor,
    title: "Servicio de Cama Baja",
    description: "Servicio especializado para la movilización segura y eficiente de maquinaria y equipos pesados del sector.",
    href: "/servicios/cama-baja",
    image: "/images/portfolio/img-66.jpeg"
  },
  {
    icon: PackageOpen,
    title: "Ramplas y Portacontenedores",
    description: "Equipos de cama plana para estiba y transporte ágil de contenedores marítimos e industriales de 20 y 40 pies.",
    href: "/servicios/portacontenedores",
    image: "/images/portfolio/img-51.jpeg"
  },
  {
    icon: Map,
    title: "Logística Integral Especial",
    description: "Coordinación de transporte punto a punto, asegurando trazabilidad, seguridad y estricto cumplimiento de tiempos.",
    href: "/servicios/logistica-integral",
    image: "/images/portfolio/img-62.jpeg"
  }
];

// Componente interno para el fondo temático de transportes (Estelas de luz / Highway Trails)
const LightTrailsBackground = () => {
  const [trails, setTrails] = useState<any[]>([]);

  useEffect(() => {
    // Colores corporativos y neutros para las estelas
    const colors = ['bg-brand/60', 'bg-yellow/40', 'bg-white/20', 'bg-brandLight/50'];
    
    setTrails(
      Array.from({ length: 30 }).map((_, i) => {
        const width = Math.random() * 200 + 50; // 50px a 250px de largo
        const isLeftToRight = Math.random() > 0.5; // Dirección
        return {
          id: i,
          width,
          y: Math.random() * 100, // Top aleatorio 0-100%
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 12 + 3, // Velocidad variable 3s a 15s
          delay: Math.random() * -15, // Delay negativo para flujo continuo inicial
          isLeftToRight,
          height: Math.random() > 0.8 ? '3px' : '1.5px', // Algunas líneas son más gruesas
        };
      })
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-50">
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className={`absolute rounded-full ${trail.color}`}
          style={{
            height: trail.height,
            width: `${trail.width}px`,
            top: `${trail.y}%`,
            left: trail.isLeftToRight ? '-300px' : '100%',
            // Efecto neon en la propia línea
            boxShadow: `0 0 10px ${trail.color.includes('brand') ? 'rgba(0,87,255,0.6)' : trail.color.includes('yellow') ? 'rgba(255,106,0,0.6)' : 'rgba(255,255,255,0.3)'}`
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
      
      {/* Malla de perspectiva simulada (rejilla sutil en la parte inferior) */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[40%] bg-[linear-gradient(to_bottom,transparent,rgba(0,87,255,0.03))] border-t border-brand/5"
        style={{ transform: 'perspective(1000px) rotateX(75deg)', transformOrigin: 'bottom' }}
      />
    </div>
  );
};

export default function ServicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  }, []);

  // Calculate relative offset for infinite carousel effect
  const getOffset = (index: number) => {
    let offset = index - currentIndex;
    if (offset < -Math.floor(services.length / 2)) offset += services.length;
    if (offset > Math.floor(services.length / 2)) offset -= services.length;
    return offset;
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#020813] overflow-hidden" id="servicios">
      {/* Decorative Dark Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] pointer-events-none z-0" />
      
      {/* Light Trails Background */}
      <LightTrailsBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 md:mb-16">
        
        {/* Centered Title Area */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium tracking-[0.2em] uppercase mb-6 shadow-md backdrop-blur-md cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Capacidad Operativa
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Nuestros <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-brand pb-2 pt-1 inline-block drop-shadow-[0_0_15px_rgba(0,87,255,0.3)]">Servicios Logísticos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-light text-lg md:text-xl leading-relaxed max-w-2xl"
          >
            Soluciones de transporte especializadas con tecnología de punta y máxima precisión para asegurar la continuidad de las industrias más exigentes.
          </motion.p>
        </div>
      </div>

      {/* 3D Coverflow Carousel Container */}
      <div className="relative w-full max-w-[1800px] mx-auto flex items-center justify-center py-4 md:py-8 z-10">
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 md:left-12 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 bg-[#071324]/80 backdrop-blur-xl flex items-center justify-center text-white transition-all duration-300 hover:border-brand hover:bg-brand/20 hover:shadow-[0_0_30px_rgba(0,87,255,0.5)] group"
          aria-label="Anterior servicio"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 group-hover:text-brandLight transition-colors" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 md:right-12 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 bg-[#071324]/80 backdrop-blur-xl flex items-center justify-center text-white transition-all duration-300 hover:border-brand hover:bg-brand/20 hover:shadow-[0_0_30px_rgba(0,87,255,0.5)] group"
          aria-label="Siguiente servicio"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 group-hover:text-brandLight transition-colors" />
        </button>

        {/* Carousel Tracks */}
        <div className="relative w-full h-[460px] sm:h-[550px] flex justify-center items-center overflow-hidden pointer-events-none px-4">
          {services.map((service, index) => {
            const offset = getOffset(index);
            
            // Render only items that are somewhat close to center to optimize performance
            if (Math.abs(offset) > 2) return null; 

            const isActive = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <motion.div
                key={service.title}
                initial={false}
                animate={{
                  x: `${offset * 110}%`,
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : (isVisible ? 0.35 : 0),
                  zIndex: isActive ? 30 : (isVisible ? 20 : 10),
                  filter: isActive ? "blur(0px)" : "blur(6px)"
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute w-[85vw] max-w-[550px] h-[440px] sm:h-[520px] pointer-events-auto`}
                style={{
                  cursor: isActive ? 'auto' : (isVisible ? 'pointer' : 'default')
                }}
                onClick={() => {
                  if (isPrev) prevSlide();
                  if (isNext) nextSlide();
                }}
              >
                <Link
                  href={service.href}
                  className={`group relative w-full h-full bg-[#071324]/60 backdrop-blur-xl rounded-[2.5rem] border border-white/5 transition-all duration-500 flex flex-col overflow-hidden block ${isActive ? 'hover:-translate-y-2' : ''}`}
                  onClick={(e) => { if(!isActive) e.preventDefault(); }}
                >
                  {/* Neon Glow Border Effect on Hover (Only for Active) */}
                  {isActive && (
                    <>
                      <div className="absolute inset-0 rounded-[2.5rem] border-2 border-transparent group-hover:border-brand/80 transition-colors duration-500 pointer-events-none z-30" />
                      <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(0,87,255,0.2),0_0_40px_rgba(0,87,255,0.4)] z-20" />
                    </>
                  )}

                  {/* Card Image Header */}
                  <div className="relative h-[200px] sm:h-[260px] w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      className={`object-cover transition-all duration-700 ease-out ${isActive ? 'grayscale-[30%] group-hover:grayscale-0 group-hover:scale-110' : 'grayscale'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/95 via-[#071324]/50 to-transparent z-10" />
                  </div>

                  {/* Icon Badge */}
                  <div className={`absolute top-[170px] sm:top-[230px] left-8 z-30 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-black/60 backdrop-blur-xl border transition-all duration-500 shadow-2xl ${isActive ? 'border-white/10 group-hover:border-brand/60 group-hover:bg-brand/10 group-hover:shadow-[0_0_20px_rgba(0,87,255,0.5)]' : 'border-white/5'}`}>
                    <service.icon className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-500 ${isActive ? 'text-white group-hover:text-brandLight' : 'text-white/50'}`} strokeWidth={1.5} />
                  </div>

                  {/* Card Body */}
                  <div className="pt-14 sm:pt-16 px-6 sm:px-8 pb-8 flex-grow flex flex-col relative z-20">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300 tracking-wide ${isActive ? 'text-white group-hover:text-brandLight' : 'text-white/70'}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`font-light leading-relaxed mb-4 sm:mb-6 flex-grow text-sm sm:text-base transition-opacity duration-300 ${isActive ? 'text-gray-300 opacity-90 group-hover:opacity-100' : 'text-gray-500 line-clamp-3'}`}>
                      {service.description}
                    </p>
                    
                    <div className={`inline-flex items-center text-xs sm:text-sm font-semibold tracking-wider uppercase mt-auto transition-colors ${isActive ? 'text-white/80 group-hover:text-white' : 'text-white/30'}`}>
                      Conocer más 
                      <ArrowRight className={`ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 ease-out ${isActive ? 'text-brand opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0' : 'opacity-0'}`} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-6 md:mt-8 text-center px-4 relative z-20"
      >
        <Link
          href="/flota"
          className="relative overflow-hidden inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-yellow to-[#FF9A00] text-darker font-bold transition-all duration-500 shadow-[0_0_30px_rgba(255,230,0,0.25)] hover:shadow-[0_0_50px_rgba(255,230,0,0.45)] hover:-translate-y-1 group border border-white/20"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          <span className="relative z-10 flex items-center justify-center font-bold tracking-widest uppercase text-sm">
            Ver Catálogo de Equipos
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 text-darker" />
          </span>
        </Link>
      </motion.div>

    </section>
  );
}
