"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, Clock, Crosshair, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  {
    icon: Clock,
    value: "24/7",
    label: "Operación Continua",
    desc: "Monitoreo GPS y respuesta inmediata los 365 días del año."
  },
  {
    icon: ShieldCheck,
    value: "0",
    label: "Incidentes",
    desc: "Cultura preventiva estricta. Cero detenciones operativas."
  },
  {
    icon: Truck,
    value: "15+",
    label: "Tractocamiones",
    desc: "Flota propia moderna, equipos Volvo y Scania certificados."
  },
  {
    icon: Crosshair,
    value: "+20",
    label: "Años de Experiencia",
    desc: "Conocimiento profundo de las rutas y faenas del norte."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 bg-slate-50 overflow-hidden" id="diferenciadores">
      {/* Light Industrial Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Shipping Network Vector Background Illustration - Extremely Subtle */}
      <div className="absolute right-0 top-1/4 w-[45%] h-2/3 pointer-events-none -z-10 opacity-20 select-none hidden lg:block">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 180 L180 80 L320 180 L280 320 L120 300 Z" className="stroke-slate-200" strokeWidth="1" strokeDasharray="5 5" />
          <path d="M60 180 L280 320" className="stroke-slate-200/50" strokeWidth="1" />
          <path d="M180 80 L120 300" className="stroke-slate-200/50" strokeWidth="1" />
          <circle cx="60" cy="180" r="4" className="fill-slate-200" />
          <circle cx="180" cy="80" r="5" className="fill-slate-300" />
          <circle cx="320" cy="180" r="4" className="fill-slate-200" />
          <circle cx="120" cy="300" r="5" className="fill-slate-300" />
          <circle cx="280" cy="320" r="6" className="fill-slate-300" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Top Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-3xl"
          >
            <div className="inline-flex items-center gap-2.5 mb-6 select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86B120] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#86B120]"></span>
              </span>
              <span className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
                Nuestra Propuesta de Valor
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 mb-6 leading-[1.2] tracking-tight">
              Estándar Minero <br />
              <span className="font-light text-[#86B120] block mt-1.5 sm:mt-2 text-2xl sm:text-3xl lg:text-4xl">
                Aplicado a Toda la Industria
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-500 font-light leading-relaxed mb-12">
              En el transporte pesado, un retraso o una falla de seguridad no es una opción. Operamos bajo los rigurosos protocolos de la gran minería para garantizar la continuidad de su negocio.
            </p>
          </motion.div>

          {/* Middle Content - The 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mb-16">
            {[
              { title: "Estándar Operacional Riguroso", desc: "Monitoreo GPS activo, control de ruta y procesos estandarizados en todos nuestros servicios.", isGreen: true },
              { title: "Seguridad y Prevención Continua", desc: "Conductores certificados y mantenimiento preventivo sistemático de toda la flota.", isGreen: false },
              { title: "Trazabilidad de Extremo a Extremo", desc: "Coordinación dedicada y reportes de estado continuos para su tranquilidad.", isGreen: true }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-[#86B120]/10 text-slate-400 group-hover:text-[#86B120] group-hover:border-[#86B120]/20">
                  <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h4 className="text-slate-800 font-medium text-lg mb-2 transition-colors duration-300 group-hover:text-[#86B120]">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light max-w-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Content - The Numbers / Proof */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {stats.map((stat, idx) => {
              const isGreenTheme = idx % 2 === 0;
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className={`bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-slate-200/80 shadow-sm transition-all duration-300 group hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] flex flex-col items-center text-center`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 border shadow-sm ${
                    isGreenTheme 
                      ? "bg-[#86B120]/5 text-[#86B120] border-[#86B120]/10 group-hover:bg-[#86B120] group-hover:text-white" 
                      : "bg-[#FF9A00]/5 text-[#FF9A00] border-[#FF9A00]/10 group-hover:bg-[#FF9A00] group-hover:text-white"
                  }`}>
                    <Icon strokeWidth={1.5} className="w-6 h-6" />
                  </div>
                  
                  <div className={`text-4xl font-extrabold mb-1.5 tracking-tight transition-colors duration-300 ${
                    isGreenTheme ? "text-slate-900 group-hover:text-[#86B120]" : "text-slate-900 group-hover:text-[#FF9A00]"
                  }`}>
                    {stat.value}
                  </div>
                  
                  <div className="text-slate-800 font-bold text-sm mb-2">
                    {stat.label}
                  </div>
                  
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-light">
                    {stat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12"
          >
            <Link 
              href="/seguridad" 
              className="inline-flex items-center gap-2.5 text-slate-600 hover:text-[#86B120] transition-colors group text-sm font-medium px-6 py-3 rounded-full bg-white border border-slate-200 hover:border-[#86B120]/30 hover:bg-[#86B120]/5 shadow-sm"
            >
              Conozca nuestra Cultura Preventiva
              <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

