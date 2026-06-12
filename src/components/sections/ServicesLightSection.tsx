"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, Droplet, Tractor, Box, Map, PackageOpen, ChevronRight, Clock, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Partículas estelares (Light Trails)
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
    const colors = ['bg-brand/60', 'bg-yellow/40', 'bg-white/20', 'bg-brandLight/50'];
    setTrails(
      Array.from({ length: 25 }).map((_, i) => {
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
    <div className="absolute top-0 left-0 w-full h-[700px] overflow-hidden pointer-events-none z-0 opacity-40">
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className={`absolute rounded-full ${trail.color}`}
          style={{
            height: trail.height,
            width: `${trail.width}px`,
            top: `${trail.y}%`,
            left: trail.isLeftToRight ? '-300px' : '100%',
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
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#071324] to-transparent pointer-events-none"
      />
    </div>
  );
};

const services = [
  {
    icon: Truck,
    title: "Carga a Granel en Bateas",
    description: "Transporte de sales, áridos, concentrados y óxidos de cobre con alta capacidad y eficiencia comprobada.",
    theme: "brand",
    href: "/servicios/transporte-granel",
    image: "/images/portfolio/img-12.jpeg"
  },
  {
    icon: Box,
    title: "Cargas Sobredimensionadas",
    description: "Movimiento experto de cargas de gran volumen y sobrepeso bajo estricta normativa y coordinación de escolta.",
    theme: "yellow",
    href: "/servicios/carga-sobredimensionada",
    image: "/images/portfolio/img-24.jpeg"
  },
  {
    icon: Droplet,
    title: "Transporte de Líquidos",
    description: "Traslado seguro de ácido, agua industrial y diésel, cumpliendo todos los estándares de prevención medioambiental.",
    theme: "brand",
    href: "/servicios/transporte-liquidos",
    image: "/images/portfolio/img-40.jpeg"
  },
  {
    icon: Tractor,
    title: "Servicio de Cama Baja",
    description: "Servicio especializado para la movilización segura y eficiente de maquinaria y equipos pesados del sector.",
    theme: "yellow",
    href: "/servicios/cama-baja",
    image: "/images/portfolio/img-66.jpeg"
  },
  {
    icon: PackageOpen,
    title: "Ramplas y Portacontenedores",
    description: "Equipos de cama plana para estiba y transporte ágil de contenedores marítimos e industriales de 20 y 40 pies.",
    theme: "brand",
    href: "/servicios/portacontenedores",
    image: "/images/portfolio/img-51.jpeg"
  },
  {
    icon: Map,
    title: "Logística Integral Especial",
    description: "Coordinación de transporte punto a punto, asegurando trazabilidad, seguridad y estricto cumplimiento de tiempos.",
    theme: "yellow",
    href: "/servicios/logistica-integral",
    image: "/images/portfolio/img-62.jpeg"
  }
];

export default function ServicesLightSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="relative py-24 bg-[#071324] pt-32 overflow-hidden" id="servicios-grid">
      
      {/* Decorative Dark Background Gradients */}
      {!hideHeader && <LightTrailsBackground />}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-[0.02] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs (Subtle integration) */}
        {!hideHeader && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-12 justify-center lg:justify-start"
          >
            <Link href="/" className="hover:text-brandLight transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <span className="text-white">Nuestros Servicios</span>
          </motion.div>
        )}

        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-20 lg:text-left lg:mx-0 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="inline-flex items-center gap-2.5 mb-6 select-none bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand"></span>
              </span>
              <span className="text-gray-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
                Capacidad Operativa
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Nuestros <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-brand drop-shadow-[0_0_15px_rgba(0,87,255,0.3)]">Servicios Logísticos</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Soluciones de transporte especializadas para asegurar la continuidad de las industrias más exigentes del norte del país.
            </motion.p>

            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <div className="flex items-center gap-2 bg-darker/50 border border-white/5 rounded-full px-4 py-2 backdrop-blur-md">
                <Clock className="w-4 h-4 text-brandLight" />
                <span className="text-sm font-medium text-gray-300">Operación 24/7</span>
              </div>
              <div className="flex items-center gap-2 bg-darker/50 border border-white/5 rounded-full px-4 py-2 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-yellow" />
                <span className="text-sm font-medium text-gray-300">Estándar Minero</span>
              </div>
            </motion.div>
          </div>
        )}

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 ${hideHeader ? 'mt-4' : ''}`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            const isBrand = service.theme === "brand";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="flex"
              >
                <Link
                  href={service.href}
                  className={`group relative w-full bg-[#071324]/60 backdrop-blur-xl rounded-[2rem] border border-white/5 shadow-lg transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] ${
                    isBrand 
                      ? "hover:border-brand/40 hover:shadow-[0_0_30px_rgba(0,87,255,0.15)]" 
                      : "hover:border-yellow/40 hover:shadow-[0_0_30px_rgba(255,106,0,0.15)]"
                  }`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${isBrand ? 'bg-brand/5' : 'bg-yellow/5'}`}></div>
                  
                  {/* Card Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-darker">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-[#071324]/40 to-transparent opacity-90" />
                  </div>

                  {/* Floating Icon Badge */}
                  <div className={`absolute top-56 left-8 -translate-y-1/2 z-20 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md border border-white/10 group-hover:scale-110 transition-transform duration-500 bg-black/60 backdrop-blur-md ${isBrand ? 'group-hover:border-brand/40 group-hover:bg-brand/10' : 'group-hover:border-yellow/40 group-hover:bg-yellow/10'}`}>
                    <Icon className={`w-6 h-6 ${isBrand ? 'text-brandLight group-hover:text-brand' : 'text-yellow group-hover:text-yellow'}`} strokeWidth={1.5} />
                  </div>

                  {/* Card Body */}
                  <div className="pt-10 px-8 pb-8 flex-grow flex flex-col relative z-10">
                    <h3 className={`text-xl font-semibold text-white mb-3 transition-colors duration-300 ${isBrand ? 'group-hover:text-brandLight' : 'group-hover:text-yellow'}`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow text-sm sm:text-base group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                    
                    <div 
                      className={`inline-flex items-center text-sm font-medium transition-colors mt-auto ${
                        isBrand ? "text-brandLight group-hover:text-brand" : "text-yellow group-hover:text-[#ff8c33]"
                      }`}
                    >
                      Conocer más <ArrowRight className="ml-2 w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* High-Impact Elegant CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative rounded-[3rem] overflow-hidden bg-[#071324]/60 backdrop-blur-2xl border border-white/5 shadow-2xl group"
        >
          {/* Subtle Glows inside the CTA */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow/5 rounded-full blur-[80px] pointer-events-none z-0" />
          
          <div className="relative z-10 px-8 py-16 md:py-20 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                ¿Necesita mover carga crítica con <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-brand drop-shadow-[0_0_15px_rgba(0,87,255,0.3)]">máxima seguridad</span>?
              </h3>
              <p className="text-gray-400 font-light text-lg lg:text-xl leading-relaxed">
                Nuestro equipo de expertos está listo para diseñar la solución logística perfecta para su proyecto minero o industrial.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2.5 text-white group text-base font-semibold px-8 py-4 rounded-full bg-brand hover:bg-brandLight hover:shadow-[0_0_30px_rgba(0,87,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 border border-brandLight/50"
              >
                Cotizar Servicio Ahora
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/flota"
                className="inline-flex items-center justify-center gap-2.5 text-gray-300 hover:text-white transition-all duration-300 group text-base font-medium px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 backdrop-blur-md"
              >
                Ver Nuestra Flota
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
