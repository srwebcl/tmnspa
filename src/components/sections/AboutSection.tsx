"use client";

import { motion } from "framer-motion";
import { CheckSquare, Target, Eye, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

// Partículas estelares (copiadas de ServicesSection pero ajustadas para el Hero)
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
      Array.from({ length: 30 }).map((_, i) => {
        const width = Math.random() * 200 + 50;
        const isLeftToRight = Math.random() > 0.5;
        return {
          id: i,
          width,
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 12 + 3,
          delay: Math.random() * -15,
          isLeftToRight,
          height: Math.random() > 0.8 ? '3px' : '1.5px',
        };
      })
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
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
        className="absolute bottom-0 left-0 w-full h-[40%] bg-[linear-gradient(to_bottom,transparent,rgba(0,87,255,0.03))] border-t border-brand/5"
        style={{ transform: 'perspective(1000px) rotateX(75deg)', transformOrigin: 'bottom' }}
      />
    </div>
  );
};

export default function AboutSection() {
  return (
    <section className="bg-[#071324] relative overflow-hidden pt-32 pb-24" id="nosotros">
      
      {/* Backgrounds and Particles */}
      <LightTrailsBackground />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-[150px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs (Subtle integration) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-12"
        >
          <Link href="/" className="hover:text-brandLight transition-colors">Inicio</Link>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-white">Quiénes Somos</span>
        </motion.div>

        {/* Hero Section of Nosotros */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium tracking-[0.2em] uppercase mb-6 shadow-md backdrop-blur-md cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Nuestra Trayectoria
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
              Especialistas en Transporte para la{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-brand drop-shadow-[0_0_15px_rgba(0,87,255,0.3)]">
                Gran Minería
              </span>
            </h1>
            
            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
              <p>
                Resolvemos necesidades logísticas de alta complejidad para grandes y medianas empresas, contratistas industriales y proyectos de apoyo operacional. Nuestra operación se concentra estratégicamente en la macrozona norte de Chile, contando con bases logísticas en <span className="font-semibold text-gray-200 border-b border-brand/40 pb-0.5">Pozo Almonte e Iquique</span>.
              </p>
              <p>
                A lo largo de más de dos décadas, hemos construido relaciones de confianza con las principales operaciones mineras de la región, adaptando nuestra flota y procesos para cumplir con las más altas exigencias de seguridad y continuidad operacional.
              </p>
            </div>
          </motion.div>

          {/* Perfect Image Placement 1 */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] lg:h-[550px] rounded-[2.5rem] p-2 bg-gradient-to-br from-white/10 to-transparent shadow-[0_0_40px_rgba(0,0,0,0.3)] group"
          >
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/images/portfolio/nosotros-header.jpeg" 
                alt="Flota TMN SpA" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darker/80 via-transparent to-transparent opacity-80 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#071324]/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 group-hover:border-brand/30 transition-colors duration-500 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1 group-hover:text-gray-300">Respaldo Total</div>
                  <div className="text-lg font-semibold text-white">Más de 20 años de experiencia</div>
                </div>
                <div className="text-4xl font-black text-brand drop-shadow-[0_0_10px_rgba(0,87,255,0.5)] group-hover:text-brandLight transition-colors">+20</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Propósito Estratégico (Misión, Visión, Valores) */}
        <div className="mb-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="text-left">
              <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Nuestro Propósito Estratégico</h3>
              <p className="text-gray-400 font-light text-lg leading-relaxed">
                Los pilares que fundamentan nuestra operación y compromiso con el cliente. Hemos construido nuestra reputación sobre una base sólida de valores inquebrantables.
              </p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2.5rem] p-2 bg-gradient-to-br from-brand/20 to-transparent shadow-[0_0_40px_rgba(0,87,255,0.15)] group"
            >
              <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/portfolio/nosotros-about.jpeg" 
                  alt="Operaciones Logísticas" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Misión */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-[#071324]/60 backdrop-blur-xl p-8 lg:p-10 rounded-[2rem] border border-white/5 shadow-lg hover:border-brand/40 hover:shadow-[0_0_30px_rgba(0,87,255,0.15)] transition-all duration-500 group flex flex-col h-full hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-brandLight group-hover:bg-brand/10 group-hover:border-brand/30 transition-all duration-500 mb-6 shadow-md">
                  <Target className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-xl text-white mb-4 transition-colors duration-300 group-hover:text-brandLight">Nuestra Misión</h4>
                <p className="text-gray-400 leading-relaxed font-light flex-grow group-hover:text-gray-300 transition-colors">
                  Brindar soluciones integrales de transporte operando con altísimos estándares de seguridad y eficiencia, enfocándonos en garantizar la continuidad operacional de nuestros clientes.
                </p>
              </div>
            </motion.div>

            {/* Visión */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#071324]/60 backdrop-blur-xl p-8 lg:p-10 rounded-[2rem] border border-white/5 shadow-lg hover:border-brand/40 hover:shadow-[0_0_30px_rgba(0,87,255,0.15)] transition-all duration-500 group flex flex-col h-full hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-brandLight group-hover:bg-brand/10 group-hover:border-brand/30 transition-all duration-500 mb-6 shadow-md">
                  <Eye className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-xl text-white mb-4 transition-colors duration-300 group-hover:text-brandLight">Nuestra Visión</h4>
                <p className="text-gray-400 leading-relaxed font-light flex-grow group-hover:text-gray-300 transition-colors">
                  Ser la empresa logística minera más confiable de la región, destacando por nuestra excelencia operacional, arraigada cultura de seguridad y relaciones comerciales a largo plazo.
                </p>
              </div>
            </motion.div>

            {/* Valores */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-darker/60 backdrop-blur-xl p-8 lg:p-10 rounded-[2rem] border border-white/10 shadow-xl hover:border-yellow/40 hover:shadow-[0_0_30px_rgba(255,106,0,0.15)] transition-all duration-500 group flex flex-col h-full hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
              <div className="absolute inset-0 bg-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center text-yellow group-hover:bg-yellow/10 group-hover:border-yellow/30 transition-all duration-500 mb-6 shadow-inner">
                  <Shield className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-xl text-white mb-6 group-hover:text-yellow transition-colors duration-300">Nuestros Valores</h4>
                <div className="flex flex-col gap-3.5 flex-grow justify-center">
                  {[
                    "Seguridad Integral", "Compromiso", "Excelencia Operacional", 
                    "Responsabilidad", "Trabajo en Equipo", "Respeto"
                  ].map((val, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300 font-medium text-sm tracking-wide hover:text-white transition-colors duration-300 group/item">
                      <CheckSquare className="w-4 h-4 text-brandLight group-hover/item:text-yellow transition-colors" strokeWidth={2} /> {val}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
