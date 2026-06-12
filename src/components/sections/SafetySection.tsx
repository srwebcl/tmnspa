"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, BrainCircuit, Radio, Stethoscope, Video, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Partículas estelares (Light Trails) para simular escaneo/monitoreo
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

export default function SafetySection() {
  return (
    <section className="relative pt-32 pb-24 bg-[#071324] overflow-hidden" id="seguridad">
      
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
          <span className="text-white">Seguridad y Prevención</span>
        </motion.div>

        {/* HERO SECTION - Estandarizado con el resto del sitio */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Text Content */}
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
              Estándar Minero
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              La <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-[#ff8c33] drop-shadow-[0_0_15px_rgba(255,106,0,0.3)]">Seguridad</span> es Nuestra Prioridad
            </h1>
            
            <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Promovemos una cultura preventiva integral, priorizando la salud, seguridad y bienestar de nuestros trabajadores en cada operación. Operamos con seguros especializados para la protección total de activos y resguardo de la carga en ruta.
            </p>
          </motion.div>

          {/* Hero Image - Igual a las Landing Pages de Servicios */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] p-2 bg-gradient-to-br from-white/10 to-transparent shadow-[0_0_40px_rgba(0,0,0,0.3)] group"
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-darker">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/portfolio/img-68.jpeg" 
                alt="Seguridad y Prevención" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071324]/80 via-transparent to-transparent opacity-90 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* CONTENT GRID - Pilares de Seguridad */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            <div className="flex items-start gap-5 group bg-[#071324]/40 p-6 rounded-3xl border border-white/5 backdrop-blur-md hover:border-brand/30 transition-all duration-300 shadow-lg">
              <div className="bg-brand/10 p-4 rounded-2xl text-brandLight border border-brand/20 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(0,87,255,0.15)] flex-shrink-0 mt-1">
                <Stethoscope className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brandLight transition-colors">Salud Ocupacional</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-300">Sistema de Gestión SST certificado, test preventivos de alcohol y drogas constantes, y evaluaciones médicas permanentes para operaciones en altura geográfica.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 group bg-[#071324]/40 p-6 rounded-3xl border border-white/5 backdrop-blur-md hover:border-yellow/30 transition-all duration-300 shadow-lg">
              <div className="bg-yellow/10 p-4 rounded-2xl text-yellow border border-yellow/20 group-hover:bg-yellow group-hover:text-[#071324] transition-all duration-300 shadow-[0_0_15px_rgba(255,106,0,0.15)] flex-shrink-0 mt-1">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow transition-colors">Gestión Preventiva Activa</h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed group-hover:text-gray-300">Trabajo coordinado permanentemente con la Mutual de Seguridad, rigurosas auditorías en terreno e investigaciones de mejora continua orientadas a cero accidentes.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full"
          >
            {/* Glassmorphism Premium Card */}
            <div className="bg-gradient-to-br from-[#0a1b35]/80 to-[#071324]/90 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-10 lg:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.6)] relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
              <div className="absolute top-0 right-10 w-32 h-1.5 bg-gradient-to-r from-brand to-brandLight rounded-b-full shadow-[0_0_15px_rgba(0,87,255,0.8)]"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand/10 rounded-full blur-[60px] pointer-events-none"></div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-10 flex items-center gap-4 relative z-10">
                <div className="p-3 bg-brand/20 rounded-2xl border border-brand/30 shadow-[0_0_15px_rgba(0,87,255,0.3)]">
                  <BrainCircuit className="text-brandLight w-8 h-8" />
                </div>
                Tecnología en Ruta
              </h3>
              
              <ul className="space-y-6 relative z-10">
                {[
                  { icon: BrainCircuit, text: "Sensores de fatiga, somnolencia y alerta inteligente de salida de carril" },
                  { icon: Video, text: 'Cámaras "Tercer ojo" en cabina para monitoreo constante de conducción' },
                  { icon: Activity, text: "GPS multibanda con cobertura nacional, internacional y zonas ciegas" },
                  { icon: Radio, text: "Radios base Motorola con frecuencias mineras autorizadas habilitadas" }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="flex items-start gap-5 group/item"
                  >
                    <div className="p-3 bg-white/5 rounded-xl text-gray-400 group-hover/item:text-white group-hover/item:bg-brand/20 transition-all border border-white/5 group-hover/item:border-brand/30 group-hover/item:shadow-[0_0_15px_rgba(0,87,255,0.2)] mt-0.5 flex-shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 font-light text-lg group-hover/item:text-white transition-colors leading-relaxed">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* High-Impact Elegant CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden bg-[#071324]/60 backdrop-blur-2xl border border-white/5 shadow-2xl group"
        >
          {/* Subtle Glows inside the CTA */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow/5 rounded-full blur-[80px] pointer-events-none z-0" />
          
          <div className="relative z-10 px-8 py-16 md:py-20 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                ¿Su proyecto exige <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow to-[#ff8c33] drop-shadow-[0_0_15px_rgba(255,106,0,0.3)]">cero accidentes</span> en ruta?
              </h3>
              <p className="text-gray-400 font-light text-lg lg:text-xl leading-relaxed">
                Nuestra flota y nuestros conductores cumplen con las normativas mineras más exigentes del país. Conversemos sobre su próximo traslado seguro.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2.5 text-[#071324] group text-base font-bold px-8 py-4 rounded-full bg-yellow hover:bg-[#ff8c33] hover:shadow-[0_0_30px_rgba(255,106,0,0.4)] transition-all duration-300 transform hover:-translate-y-1"
              >
                Cotizar Proyecto
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
