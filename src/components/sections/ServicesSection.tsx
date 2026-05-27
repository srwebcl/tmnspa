"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, Droplet, Tractor, Box, Map, PackageOpen } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: Truck,
    title: "Carga a Granel en Bateas",
    description: "Transporte de sales, áridos, concentrados y óxidos de cobre con alta capacidad y eficiencia comprobada.",
    iconBg: "bg-[#86B120]/10",
    iconColor: "text-[#86B120]",
    borderColor: "border-[#86B120]/20",
    href: "/servicios/transporte-granel",
    image: "/images/portfolio/img-12.jpeg"
  },
  {
    icon: Box,
    title: "Cargas Sobredimensionadas",
    description: "Movimiento experto de cargas de gran volumen y sobrepeso bajo estricta normativa y coordinación de escolta.",
    iconBg: "bg-[#FF9A00]/10",
    iconColor: "text-[#FF9A00]",
    borderColor: "border-[#FF9A00]/20",
    href: "/servicios/carga-sobredimensionada",
    image: "/images/portfolio/img-24.jpeg"
  },
  {
    icon: Droplet,
    title: "Transporte de Líquidos",
    description: "Traslado seguro de ácido, agua industrial y diésel, cumpliendo todos los estándares de prevención medioambiental.",
    iconBg: "bg-[#86B120]/10",
    iconColor: "text-[#86B120]",
    borderColor: "border-[#86B120]/20",
    href: "/servicios/transporte-liquidos",
    image: "/images/portfolio/img-40.jpeg"
  },
  {
    icon: Tractor,
    title: "Servicio de Cama Baja",
    description: "Servicio especializado para la movilización segura y eficiente de maquinaria y equipos pesados del sector.",
    iconBg: "bg-[#FF9A00]/10",
    iconColor: "text-[#FF9A00]",
    borderColor: "border-[#FF9A00]/20",
    href: "/servicios/cama-baja",
    image: "/images/portfolio/img-66.jpeg"
  },
  {
    icon: PackageOpen,
    title: "Ramplas y Portacontenedores",
    description: "Equipos de cama plana para estiba y transporte ágil de contenedores marítimos e industriales de 20 y 40 pies.",
    iconBg: "bg-[#86B120]/10",
    iconColor: "text-[#86B120]",
    borderColor: "border-[#86B120]/20",
    href: "/servicios/portacontenedores",
    image: "/images/portfolio/img-51.jpeg"
  },
  {
    icon: Map,
    title: "Logística Integral Especial",
    description: "Coordinación de transporte punto a punto, asegurando trazabilidad, seguridad y estricto cumplimiento de tiempos.",
    iconBg: "bg-[#FF9A00]/10",
    iconColor: "text-[#FF9A00]",
    borderColor: "border-[#FF9A00]/20",
    href: "/servicios/logistica-integral",
    image: "/images/portfolio/img-62.jpeg"
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0a1523] to-[#071324] overflow-hidden" id="servicios">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#86B120]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF9A00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium tracking-[0.2em] uppercase mb-6 shadow-md cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86B120] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#86B120]"></span>
            </span>
            Capacidad Operativa
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
          >
            Nuestros <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A00] to-[#86B120] pb-2 pt-1 inline-block">Servicios Logísticos</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 font-light text-lg md:text-xl leading-relaxed"
          >
            Soluciones de transporte especializadas para asegurar la continuidad de las industrias más exigentes del norte del país.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isGreenTheme = service.iconColor === "text-[#86B120]";
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
                  className={`group relative w-full bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden ${
                    isGreenTheme 
                      ? "hover:border-[#86B120]/30 hover:shadow-[0_10px_35px_rgba(134,177,32,0.12)] hover:bg-white/[0.05]" 
                      : "hover:border-[#FF9A00]/30 hover:shadow-[0_10px_35px_rgba(255,154,0,0.12)] hover:bg-white/[0.05]"
                  }`}
                >
                  {/* Card Image Header */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Shadow overlay to blend with the card background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1523] via-[#0a1523]/40 to-transparent" />
                  </div>

                  {/* Floating Icon Badge centered on the bottom border of the image */}
                  <div className={`absolute top-48 left-6 -translate-y-1/2 z-20 w-12 h-12 rounded-xl flex items-center justify-center ${service.iconBg} border ${service.borderColor} group-hover:scale-105 transition-transform duration-300 shadow-lg backdrop-blur-md`}>
                    <Icon className={`w-6 h-6 ${service.iconColor}`} strokeWidth={1.5} />
                  </div>

                  {/* Card Body */}
                  <div className="pt-8 px-6 pb-6 flex-grow flex flex-col relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF9A00] transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    <div 
                      className={`inline-flex items-center text-sm font-semibold transition-colors mt-auto ${
                        isGreenTheme ? "text-[#86B120] group-hover:text-white" : "text-[#FF9A00] group-hover:text-white"
                      }`}
                    >
                      Conocer más <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </div>
                  </div>
                  
                  {/* Hover gradient border effect */}
                  <div 
                    className={`absolute inset-0 border-2 border-transparent rounded-2xl transition-colors duration-300 pointer-events-none`}
                    style={{ 
                      maskImage: 'linear-gradient(to bottom, black, transparent)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
                    }} 
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/flota"
            className="relative overflow-hidden inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-[#86B120] to-[#5a7815] text-white font-bold transition-all duration-500 shadow-[0_0_30px_rgba(134,177,32,0.2)] hover:shadow-[0_0_50px_rgba(134,177,32,0.45)] hover:-translate-y-1 group border border-white/20"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 flex items-center justify-center font-bold tracking-wide text-sm">
              Ver Catálogo de Equipos (Flota)
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300 text-white" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
