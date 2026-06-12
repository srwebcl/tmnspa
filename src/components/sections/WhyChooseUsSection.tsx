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
    <section className="relative py-24 md:py-32 bg-[#071324] overflow-hidden" id="diferenciadores">
      {/* Decorative Dark Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-[150px] pointer-events-none z-0" />
      
      {/* Subtle Truck Silhouette / Texture */}
      <div className="absolute inset-0 bg-[url('/images/portfolio/camion-tmns.jpeg')] bg-cover bg-center bg-fixed opacity-[0.04] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Top Header Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-3xl mb-16"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium tracking-[0.2em] uppercase mb-6 shadow-md backdrop-blur-md cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Nuestra Propuesta de Valor
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.2] mb-6">
              Estándar Minero <br />
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-brand pb-2 pt-2 inline-block drop-shadow-[0_0_15px_rgba(0,87,255,0.3)]">
                Aplicado a Toda la Industria
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
              En el transporte pesado, un retraso o una falla de seguridad no es una opción. Operamos bajo los rigurosos protocolos de la gran minería para garantizar la continuidad de su negocio.
            </p>
          </motion.div>

          {/* Middle Content - The 3 Pillars */}
          <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl mb-16">
            {[
              { title: "Estándar Operacional Riguroso", desc: "Monitoreo GPS activo, control de ruta y procesos estandarizados en todos nuestros servicios.", isBrand: true },
              { title: "Seguridad y Prevención Continua", desc: "Conductores certificados y mantenimiento preventivo sistemático de toda la flota.", isBrand: false },
              { title: "Trazabilidad de Extremo a Extremo", desc: "Coordinación dedicada y reportes de estado continuos para su tranquilidad.", isBrand: true }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative w-full bg-[#071324]/60 backdrop-blur-xl rounded-[2rem] border border-white/5 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center p-8 overflow-hidden"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-transparent group-hover:border-brand/40 transition-colors duration-500 pointer-events-none z-30" />
                <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shadow-[inset_0_0_40px_rgba(0,87,255,0.1),0_0_30px_rgba(0,87,255,0.2)] z-20" />

                <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-brand/10 group-hover:border-brand/40 shadow-xl group-hover:shadow-[0_0_20px_rgba(0,87,255,0.4)] z-30 relative">
                  <ShieldCheck className="w-8 h-8 text-white/50 group-hover:text-brand transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-semibold text-xl mb-3 transition-colors duration-300 relative z-30">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed font-light relative z-30 group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Content - The Numbers / Proof */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full relative z-20">
            {stats.map((stat, idx) => {
              const isBrandTheme = idx % 2 === 0;
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className={`bg-[#071324]/40 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-white/5 hover:border-white/20 shadow-lg transition-all duration-500 group hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden relative`}
                >
                  {/* Subtle Background Glow on Hover */}
                  <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] blur-xl ${isBrandTheme ? 'bg-brand/10' : 'bg-yellow/10'} pointer-events-none`} />

                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 border relative z-10 ${
                    isBrandTheme 
                      ? "bg-brand/5 text-brand border-brand/20 group-hover:bg-brand/20 group-hover:shadow-[0_0_20px_rgba(0,87,255,0.4)]" 
                      : "bg-yellow/5 text-yellow border-yellow/20 group-hover:bg-yellow/20 group-hover:shadow-[0_0_20px_rgba(255,106,0,0.4)]"
                  }`}>
                    <Icon strokeWidth={1.5} className="w-7 h-7" />
                  </div>
                  
                  <div className={`text-4xl md:text-5xl font-extrabold mb-2 tracking-tight transition-colors duration-300 relative z-10 drop-shadow-md ${
                    isBrandTheme ? "text-white group-hover:text-brandLight" : "text-white group-hover:text-yellow"
                  }`}>
                    {stat.value}
                  </div>
                  
                  <div className="text-gray-200 font-semibold text-sm mb-2 relative z-10">
                    {stat.label}
                  </div>
                  
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light relative z-10 group-hover:text-gray-400 transition-colors">
                    {stat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16 relative z-30"
          >
            <Link
              href="/seguridad"
              className="relative overflow-hidden inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-yellow to-[#FF9A00] text-darker font-bold transition-all duration-500 shadow-[0_0_30px_rgba(255,106,0,0.25)] hover:shadow-[0_0_50px_rgba(255,106,0,0.45)] hover:-translate-y-1 group border border-white/20"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center font-bold tracking-widest uppercase text-sm">
                Conozca nuestra Cultura Preventiva
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
