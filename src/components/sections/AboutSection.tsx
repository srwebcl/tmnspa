"use client";

import { motion } from "framer-motion";
import { CheckSquare, Target, Eye, Shield } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white relative" id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-1 w-12 bg-yellow"></div>
            <span className="text-darker font-bold tracking-widest text-sm uppercase">Quiénes Somos</span>
            <div className="h-1 w-12 bg-yellow"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-title font-black text-darker leading-[1.1] mb-8"
          >
            Especialistas en Transporte para la Gran Minería
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-body leading-relaxed text-lg lg:text-xl"
          >
            Resolvemos necesidades logísticas de alta complejidad para grandes y medianas empresas, contratistas industriales y proyectos de apoyo operacional en todo el norte de Chile.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Main Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-title font-bold text-darker mb-6">
              Trayectoria y Presencia
            </h3>
            <p className="text-gray-600 mb-10 font-body leading-relaxed text-lg">
              Somos una empresa con una fuerte especialización dedicada al transporte de carga por carretera. Nuestra operación se concentra estratégicamente en la macrozona norte de Chile, contando con bases logísticas y operativas en <span className="font-bold text-darker border-b-2 border-yellow/50 pb-0.5">Pozo Almonte e Iquique</span>.
            </p>

            <div className="space-y-8 bg-slate-50 p-8 rounded-2xl border border-gray-100">
              <div className="flex items-start gap-5">
                <div className="p-3 bg-yellow/10 rounded-xl text-yellow flex-shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-title font-bold text-xl text-darker mb-2 uppercase tracking-wide">Nuestra Misión</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Brindar soluciones integrales de transporte operando con altísimos estándares de seguridad y eficiencia, enfocándonos en garantizar la continuidad operacional de nuestros clientes.
                  </p>
                </div>
              </div>
              
              <div className="w-full h-px bg-gray-200"></div>

              <div className="flex items-start gap-5">
                <div className="p-3 bg-brand/10 rounded-xl text-brand flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-title font-bold text-xl text-darker mb-2 uppercase tracking-wide">Nuestra Visión</h4>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Ser la empresa logística minera más confiable de la región, destacando por nuestra excelencia operacional, arraigada cultura de seguridad y relaciones comerciales a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Clean, Massive Image Block */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl border-8 border-white group"
          >
            <div className="absolute inset-0 bg-darker/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="w-full h-full bg-[url('/images/portfolio/img-47.jpeg')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" />
            
            {/* Elegant Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-xl z-20 flex items-center justify-between border border-gray-100">
              <div>
                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Respaldo Total</div>
                <div className="text-xl font-title font-bold text-darker">Más de 20 años de experiencia</div>
              </div>
              <div className="font-display text-5xl font-black text-yellow">+20</div>
            </div>
          </motion.div>
        </div>

        {/* Corporate Values Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-darker border-t-4 border-yellow rounded-2xl p-10 md:p-14 shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('/images/portfolio/img-02.jpeg')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between">
            <h3 className="font-title font-black text-3xl text-white flex items-center gap-3 uppercase tracking-wider shrink-0">
              <Shield className="w-10 h-10 text-yellow" /> Valores
            </h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-10 gap-y-6">
              {[
                "Seguridad Integral", "Compromiso", "Excelencia Operacional", 
                "Responsabilidad", "Trabajo en Equipo", "Respeto"
              ].map((val, idx) => (
                <div key={idx} className="flex items-center gap-3 text-white font-bold text-sm tracking-widest uppercase">
                  <CheckSquare className="w-5 h-5 text-brand" /> {val}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
