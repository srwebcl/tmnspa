"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, ShieldAlert, Truck, FileCheck, Users } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Experiencia Comprobada",
    desc: "Años de trayectoria operando exitosamente en las principales faenas mineras e industriales del norte."
  },
  {
    icon: Clock,
    title: "Respuesta Inmediata",
    desc: "Operación logística 24/7. Capacidad de reacción rápida ante contingencias y requerimientos urgentes."
  },
  {
    icon: ShieldAlert,
    title: "Seguridad y Prevención",
    desc: "Altísimos estándares de seguridad, cultura preventiva inquebrantable y monitoreo satelital en ruta."
  },
  {
    icon: Truck,
    title: "Flota Moderna",
    desc: "Equipos versátiles de última generación, con estricto mantenimiento preventivo para asegurar continuidad."
  },
  {
    icon: FileCheck,
    title: "Cumplimiento Normativo",
    desc: "Total apego a las exigencias legales, resoluciones medioambientales y normativas del sector minero."
  },
  {
    icon: Users,
    title: "Trato Directo",
    desc: "Atención 100% personalizada. Comunicación directa con gerencia sin intermediarios burocráticos."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="proceso">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-50 via-white to-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-semibold tracking-wide mb-6 uppercase"
          >
            Propuesta de Valor
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-4xl md:text-5xl font-light text-darker mb-6"
          >
            ¿Por qué elegir <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brandLight">TMN SpA?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 font-light text-lg md:text-xl leading-relaxed"
          >
            Nuestra estructura está diseñada para ser el socio estratégico ideal de las empresas que no pueden detener su producción.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-[0.03] group-hover:scale-150 transition-all duration-700 pointer-events-none origin-bottom-left">
                <pillar.icon className="h-40 w-40 text-darker" />
              </div>
              <div className="flex flex-col h-full relative z-10">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gray-50 border-2 border-gray-100 rounded-2xl flex items-center justify-center group-hover:border-brand/30 group-hover:bg-brand/5 transition-colors duration-300">
                    <pillar.icon className="w-8 h-8 text-darker group-hover:text-brand transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="font-semibold text-xl text-darker mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 flex justify-center"
        >
          <div className="bg-dark rounded-3xl p-8 md:p-12 w-full max-w-5xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(134,177,32,0.15),transparent_60%)]" />
            <div className="relative z-10">
              <h3 className="font-semibold text-3xl md:text-4xl text-white mb-4">¿Buscas optimizar tu logística operativa?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-light text-lg">
                Habla directamente con nuestra gerencia. Diseñaremos una propuesta técnica y comercial a la medida de tu faena.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contacto" className="bg-brand hover:bg-brandLight text-white font-semibold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(134,177,32,0.3)] hover:shadow-[0_0_30px_rgba(134,177,32,0.5)] hover:-translate-y-0.5">
                  Cotizar Servicio
                </Link>
                <a href="tel:+56900000000" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-full border border-white/20 transition-all duration-300 backdrop-blur-sm">
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
