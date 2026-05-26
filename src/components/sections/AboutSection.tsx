"use client";

import { motion } from "framer-motion";
import { CheckSquare, Target, Eye, Shield } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="nosotros">
      {/* Light Industrial Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center gap-2.5 mb-6 select-none"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#86B120] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#86B120]"></span>
            </span>
            <span className="text-slate-500 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em]">
              Quiénes Somos
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-800 leading-[1.1] mb-8 tracking-tight"
          >
            Especialistas en Transporte para la Gran Minería
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 font-light leading-relaxed text-lg lg:text-xl max-w-3xl mx-auto"
          >
            Resolvemos necesidades logísticas de alta complejidad para grandes y medianas empresas, contratistas industriales y proyectos de apoyo operacional en todo el norte de Chile.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16">
          
          {/* Main Content Area (Trayectoria) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:pr-8"
          >
            <h3 className="text-3xl font-semibold text-slate-800 mb-6 tracking-tight">
              Trayectoria y Presencia
            </h3>
            <div className="space-y-6 text-slate-500 font-light leading-relaxed text-lg">
              <p>
                Somos una empresa con una fuerte especialización dedicada al transporte de carga por carretera. Nuestra operación se concentra estratégicamente en la macrozona norte de Chile, contando con bases logísticas y operativas en <span className="font-semibold text-slate-800 border-b border-[#86B120]/30 pb-0.5">Pozo Almonte e Iquique</span>.
              </p>
              <p>
                A lo largo de más de dos décadas, hemos construido relaciones de confianza con las principales operaciones mineras de la región, adaptando nuestra flota y procesos para cumplir con las más altas exigencias de seguridad y continuidad operacional.
              </p>
            </div>
          </motion.div>

          {/* Clean, Massive Image Block */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 group"
          >
            <div className="absolute inset-0 bg-[#071324]/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="w-full h-full bg-[url('/images/portfolio/img-47.jpeg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            
            {/* Elegant Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-sm z-20 flex items-center justify-between border border-white/20">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Respaldo Total</div>
                <div className="text-lg font-semibold text-slate-800">Más de 20 años de experiencia</div>
              </div>
              <div className="text-4xl font-black text-[#86B120]">+20</div>
            </div>
          </motion.div>
        </div>

        {/* Propósito Estratégico (Misión, Visión, Valores) */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-semibold text-slate-800 tracking-tight mb-4">Nuestro Propósito Estratégico</h3>
            <p className="text-slate-500 font-light text-lg">Los pilares que fundamentan nuestra operación y compromiso con el cliente.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Misión */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm hover:border-[#86B120]/30 hover:shadow-md transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#86B120] group-hover:bg-[#86B120]/5 transition-colors duration-300 mb-6">
                <Target className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-xl text-slate-800 mb-4 transition-colors duration-300 group-hover:text-[#86B120]">Nuestra Misión</h4>
              <p className="text-slate-500 leading-relaxed font-light flex-grow">
                Brindar soluciones integrales de transporte operando con altísimos estándares de seguridad y eficiencia, enfocándonos en garantizar la continuidad operacional de nuestros clientes.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-100 shadow-sm hover:border-[#86B120]/30 hover:shadow-md transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#86B120] group-hover:bg-[#86B120]/5 transition-colors duration-300 mb-6">
                <Eye className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h4 className="font-semibold text-xl text-slate-800 mb-4 transition-colors duration-300 group-hover:text-[#86B120]">Nuestra Visión</h4>
              <p className="text-slate-500 leading-relaxed font-light flex-grow">
                Ser la empresa logística minera más confiable de la región, destacando por nuestra excelencia operacional, arraigada cultura de seguridad y relaciones comerciales a largo plazo.
              </p>
            </motion.div>

            {/* Valores */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#071324] p-8 lg:p-10 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden group flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#86B120]/10 border border-[#86B120]/20 flex items-center justify-center text-[#86B120] mb-6 shadow-inner">
                  <Shield className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-xl text-white mb-6">Nuestros Valores</h4>
                <div className="flex flex-col gap-3.5 flex-grow justify-center">
                  {[
                    "Seguridad Integral", "Compromiso", "Excelencia Operacional", 
                    "Responsabilidad", "Trabajo en Equipo", "Respeto"
                  ].map((val, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-300 font-medium text-sm tracking-wide hover:text-white transition-colors duration-300">
                      <CheckSquare className="w-4 h-4 text-[#86B120]" strokeWidth={2} /> {val}
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
