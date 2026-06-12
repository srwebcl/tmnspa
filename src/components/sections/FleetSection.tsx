"use client";

import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, ArrowRight, Truck, Component } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Partículas estelares (Light Trails) para simular rutas y velocidad
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
    <div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden pointer-events-none z-0 opacity-40">
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

// Componente para la Galería de Flota
const FleetGallery = () => {
  const images = [
    { src: '/images/portfolio/img-45.jpeg', title: 'Tractocamiones en Ruta' },
    { src: '/images/portfolio/img-12.jpeg', title: 'Bateas Tolva Tremac 20m³' },
    { src: '/images/portfolio/img-66.jpeg', title: 'Cama Baja 3 Ejes' },
    { src: '/images/portfolio/img-24.jpeg', title: 'Transporte de Carga Sobredimensionada' },
  ];

  return (
    <div className="mt-24 mb-32 relative z-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">Nuestros Equipos en Acción</h3>
        <p className="text-gray-400 font-light text-lg">Galería referencial de la infraestructura terrestre que opera diariamente en faenas mineras.</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-3xl overflow-hidden h-64 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.src} 
              alt={img.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-5 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <div className="w-8 h-1 bg-brandLight rounded-full mb-3 shadow-[0_0_10px_rgba(0,87,255,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="text-white font-bold text-sm tracking-wide shadow-sm">{img.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function FleetSection() {
  return (
    <section className="relative pt-32 pb-24 bg-[#071324] overflow-hidden" id="flota">
      
      {/* Decorative Dark Background Gradients */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-[0.02] pointer-events-none z-0" />
      
      <LightTrailsBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-400 mb-12 justify-center lg:justify-start"
        >
          <Link href="/" className="hover:text-brandLight transition-colors">Inicio</Link>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-white">Infraestructura y Flota</span>
        </motion.div>

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brandLight text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-md backdrop-blur-md">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandLight opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brandLight"></span>
              </span>
              Infraestructura
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Flota Moderna y <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-brand drop-shadow-[0_0_15px_rgba(0,87,255,0.3)]">Clientes Estratégicos</span>
            </h1>
            
            <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Contamos con equipos de última generación para garantizar la continuidad operacional. Tractocamiones Volvo y Scania de alta gama adaptados rigurosamente a las exigencias de la industria minera.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] p-2 bg-gradient-to-br from-white/10 to-transparent shadow-[0_0_40px_rgba(0,0,0,0.3)] group"
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-darker border border-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/portfolio/img-45.jpeg" 
                alt="Flota TMN" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/80 via-transparent to-transparent opacity-90 pointer-events-none" />
              
              {/* Overlay Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 md:right-auto md:left-auto md:bottom-8 md:-left-8 bg-[#071324]/80 backdrop-blur-xl p-5 md:p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20 border border-white/10 flex items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-brand/20 p-4 rounded-xl border border-brand/30 shadow-[0_0_15px_rgba(0,87,255,0.2)]">
                  <span className="font-bold text-3xl text-brandLight">100%</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm uppercase tracking-wider">Monitoreo</p>
                  <p className="text-gray-400 font-light text-xs">GPS 24/7 en toda la flota</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DETAILS GRID - Equipamiento Especializado */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Equipamiento Especializado Propio</h2>
            <p className="text-gray-400 font-light text-lg">
              15 tractocamiones propios y 19 semirremolques especializados. No tercerizamos el transporte estratégico, lo que nos permite garantizar el estándar TMN en cada kilómetro de la ruta.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Card Tractocamiones */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gradient-to-br from-[#0a1b35]/80 to-[#071324]/90 border border-white/10 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand/10 rounded-full blur-[50px] pointer-events-none" />
              <h4 className="font-bold text-white text-2xl mb-8 flex items-center gap-4 relative z-10">
                <div className="p-3 bg-brand/20 rounded-xl border border-brand/30 shadow-[0_0_15px_rgba(0,87,255,0.2)]">
                  <Truck className="text-brandLight w-6 h-6" />
                </div>
                Tractocamiones <span className="text-brandLight font-light text-lg ml-auto">(15 Unidades)</span>
              </h4>
              <ul className="space-y-5 relative z-10">
                {[
                  'Volvo FH500 y FH540 (Alta tracción, seguridad superior y potencia en pendiente)',
                  'Volvo FM420 y FM460 (Máxima versatilidad y eficiencia en faena minera)',
                  'Scania R500 (Rendimiento superior y aerodinámica optimizada)'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-brandLight flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card Semirremolques */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-[#12100a]/80 to-[#071324]/90 border border-white/10 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-yellow/10 rounded-full blur-[50px] pointer-events-none" />
              <h4 className="font-bold text-white text-2xl mb-8 flex items-center gap-4 relative z-10">
                <div className="p-3 bg-yellow/20 rounded-xl border border-yellow/30 shadow-[0_0_15px_rgba(255,106,0,0.2)]">
                  <Component className="text-yellow w-6 h-6" />
                </div>
                Semirremolques <span className="text-yellow font-light text-lg ml-auto">(19 Unidades)</span>
              </h4>
              <ul className="space-y-5 relative z-10">
                {[
                  'Bateas Tolva Tremac y Randon 20m³ (Especial para transporte a granel)',
                  'Cama Baja Tremac 3 Ejes (Para maquinaria pesada de gran tonelaje)',
                  'Portacontenedores 20\' y 40\' Tremac y Pravaz',
                  'Ramplas 3 Ejes y Rampla Rebajada Goren'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 max-w-4xl mx-auto bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm flex items-center justify-center text-center"
          >
            <p className="text-sm text-gray-400 font-light uppercase tracking-wider">
              <span className="text-brandLight font-bold">*</span> Toda nuestra flota está auditada y disponible para inspección técnica. Revisión técnica, SOAP y seguros de responsabilidad civil al día.
            </p>
          </motion.div>
        </div>

        {/* NUEVO: Galería Referencial de Equipos */}
        <FleetGallery />

        {/* High-Impact Elegant CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden bg-[#071324]/60 backdrop-blur-2xl border border-white/5 shadow-2xl group"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow/5 rounded-full blur-[80px] pointer-events-none z-0" />
          
          <div className="relative z-10 px-8 py-16 md:py-20 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                ¿Busca capacidad operativa <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-brand drop-shadow-[0_0_15px_rgba(0,87,255,0.3)]">comprobada</span>?
              </h3>
              <p className="text-gray-400 font-light text-lg lg:text-xl leading-relaxed">
                Nuestra flota y equipo técnico están listos para asumir los desafíos logísticos más exigentes. Conversemos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2.5 text-white group text-base font-bold px-8 py-4 rounded-full bg-brand hover:bg-brandLight hover:shadow-[0_0_30px_rgba(0,87,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 border border-brandLight/50"
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
