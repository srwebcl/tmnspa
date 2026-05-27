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

export default function ServicesLightSection({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden" id="servicios-grid">
      {/* Light Industrial Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="inline-flex items-center gap-2.5 mb-6 select-none"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86B120] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#86B120]"></span>
              </span>
              <span className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
                Capacidad Operativa
              </span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-800 mb-6 leading-tight"
            >
              Nuestros <span className="font-light text-[#86B120]">Servicios Logísticos</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              Soluciones de transporte especializadas para asegurar la continuidad de las industrias más exigentes del norte del país.
            </motion.p>
          </div>
        )}

        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 ${hideHeader ? 'mt-4' : ''}`}>
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
                  className={`group relative w-full bg-white rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 flex flex-col overflow-hidden hover:shadow-lg ${
                    isGreenTheme 
                      ? "hover:border-[#86B120]/30" 
                      : "hover:border-[#FF9A00]/30"
                  }`}
                >
                  {/* Card Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    {/* Shadow overlay to blend with the card background */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />
                  </div>

                  {/* Floating Icon Badge centered on the bottom border of the image */}
                  <div className={`absolute top-56 left-8 -translate-y-1/2 z-20 w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-md border border-slate-50 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${service.iconColor}`} strokeWidth={1.5} />
                  </div>

                  {/* Card Body */}
                  <div className="pt-10 px-8 pb-8 flex-grow flex flex-col relative z-10 bg-white">
                    <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-500 font-light leading-relaxed mb-8 flex-grow text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    <div 
                      className={`inline-flex items-center text-sm font-medium transition-colors mt-auto ${
                        isGreenTheme ? "text-[#86B120]" : "text-[#FF9A00]"
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link
            href="/flota"
            className="inline-flex items-center gap-2.5 text-slate-600 hover:text-[#86B120] transition-colors group text-sm font-medium px-8 py-3.5 rounded-full bg-white border border-slate-200 hover:border-[#86B120]/30 hover:bg-[#86B120]/5 shadow-sm"
          >
            Ver Catálogo de Equipos (Flota)
            <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
