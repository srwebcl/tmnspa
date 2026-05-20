"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, BrainCircuit, Radio, Stethoscope, Video } from "lucide-react";

export default function SafetySection() {
  return (
    <section className="py-24 relative overflow-hidden" id="seguridad">
      {/* Premium Dark Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-darker/95 z-10" />
        <div className="w-full h-full bg-[url('/images/portfolio/img-02.jpeg')] bg-cover bg-fixed bg-center grayscale opacity-50" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-8 bg-yellow rounded-full"></div>
              <span className="text-yellow font-bold tracking-wider text-sm uppercase">Seguridad y Prevención</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-title font-bold text-white mb-6 leading-tight">
              La Seguridad es Nuestra Prioridad Principal
            </h2>
            <p className="text-gray-300 mb-10 font-body leading-relaxed text-lg">
              Promovemos una cultura preventiva integral, priorizando la salud, seguridad y bienestar de nuestros trabajadores en cada operación. Operamos con seguros especializados para la protección de activos y resguardo de carga en ruta.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-brand/10 p-4 rounded-2xl text-brand border border-brand/20 group-hover:bg-brand group-hover:text-darker transition-all duration-300 shadow-[0_0_20px_rgba(134,177,32,0.1)]">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-title font-bold text-white mb-2 group-hover:text-brand transition-colors">Salud Ocupacional</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Sistema de Gestión SST, test preventivos de alcohol y drogas, y evaluaciones médicas permanentes en altura geográfica.</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="bg-yellow/10 p-4 rounded-2xl text-yellow border border-yellow/20 group-hover:bg-yellow group-hover:text-darker transition-all duration-300 shadow-[0_0_20px_rgba(255,193,7,0.1)]">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-xl font-title font-bold text-white mb-2 group-hover:text-yellow transition-colors">Gestión Preventiva</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Trabajo coordinado con la Mutual de Seguridad, auditorías en terreno e investigaciones de mejora continua.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glassmorphism Card */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-10 w-24 h-1 bg-gradient-to-r from-brand to-yellow rounded-b-full"></div>
              
              <h3 className="text-2xl font-title font-bold text-white mb-8 flex items-center gap-3">
                <BrainCircuit className="text-yellow w-8 h-8" />
                Tecnología en Ruta
              </h3>
              
              <ul className="space-y-6">
                {[
                  { icon: BrainCircuit, text: "Sensores de fatiga, somnolencia y alerta de salida de carril" },
                  { icon: Video, text: 'Cámaras "Tercer ojo" en cabina para monitoreo constante' },
                  { icon: Activity, text: "GPS multibanda con cobertura nacional e internacional" },
                  { icon: Radio, text: "Radios base Motorola con frecuencias mineras habilitadas" }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="flex items-center gap-5 group"
                  >
                    <div className="p-3 bg-white/5 rounded-xl text-gray-300 group-hover:text-white group-hover:bg-brand/20 transition-all border border-white/5 group-hover:border-brand/30">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors leading-snug">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
