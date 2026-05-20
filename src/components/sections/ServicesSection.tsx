"use client";

import { motion } from "framer-motion";
import { ArrowRight, Truck, Droplet, Tractor, Box, Map, PackageOpen } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Truck,
    title: "Carga a Granel en Bateas",
    description: "Transporte de sales, áridos, concentrados y óxidos de cobre con alta capacidad y eficiencia comprobada.",
    iconBg: "bg-brand/10",
    iconColor: "text-brand",
    borderColor: "border-brand/20",
  },
  {
    icon: Box,
    title: "Cargas Sobredimensionadas",
    description: "Movimiento experto de cargas de gran volumen y sobrepeso bajo estricta normativa y coordinación de escolta.",
    iconBg: "bg-yellow/10",
    iconColor: "text-yellow",
    borderColor: "border-yellow/20",
  },
  {
    icon: Droplet,
    title: "Transporte de Líquidos",
    description: "Traslado seguro de ácido, agua industrial y diésel, cumpliendo todos los estándares de prevención medioambiental.",
    iconBg: "bg-brand/10",
    iconColor: "text-brand",
    borderColor: "border-brand/20",
  },
  {
    icon: Tractor,
    title: "Servicio de Cama Baja",
    description: "Servicio especializado para la movilización segura y eficiente de maquinaria y equipos pesados del sector.",
    iconBg: "bg-yellow/10",
    iconColor: "text-yellow",
    borderColor: "border-yellow/20",
  },
  {
    icon: PackageOpen,
    title: "Ramplas y Portacontenedores",
    description: "Equipos de cama plana para estiba y transporte ágil de contenedores marítimos e industriales de 20 y 40 pies.",
    iconBg: "bg-brand/10",
    iconColor: "text-brand",
    borderColor: "border-brand/20",
  },
  {
    icon: Map,
    title: "Logística Integral Especial",
    description: "Coordinación de transporte punto a punto, asegurando trazabilidad, seguridad y estricto cumplimiento de tiempos.",
    iconBg: "bg-yellow/10",
    iconColor: "text-yellow",
    borderColor: "border-yellow/20",
  }
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden" id="servicios">
      {/* Decorative Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-darker via-dark to-dark opacity-80" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium tracking-wide mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
            Capacidad Operativa
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light text-white mb-6"
          >
            Nuestros <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow via-brandLight to-brand">Servicios Logísticos</span>
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
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-8 ${service.iconBg} border ${service.borderColor} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                  <Icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-medium text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <Link 
                  href="/servicios" 
                  className="inline-flex items-center text-sm font-medium text-gray-300 group-hover:text-brand transition-colors mt-auto"
                >
                  Conocer más <ArrowRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Link>
                
                {/* Hover gradient border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand/30 rounded-2xl transition-colors duration-300 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)' }} />
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/servicios"
            className="inline-flex items-center px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 text-white font-medium transition-all duration-300 hover:border-white/40 group"
          >
            Ver Catálogo de Equipos
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-brand" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
