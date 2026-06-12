"use client";

import { motion } from "framer-motion";
import { Briefcase, Building, FileText, MapPin, Phone, Mail, User } from "lucide-react";

export default function CompanyDetailsSection() {
  return (
    <section className="py-24 bg-[#020813] relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Datos Comerciales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-[#071324]/60 backdrop-blur-xl rounded-[2rem] p-10 border border-white/5 shadow-xl relative overflow-hidden group hover:border-brand/20 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center text-brand border border-white/10 shadow-md group-hover:bg-brand/10 group-hover:border-brand/30 transition-all duration-500">
                <Building strokeWidth={1.5} className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">Datos Comerciales</h3>
            </div>
            
            <ul className="space-y-6 relative z-10">
              <li className="flex items-start gap-4">
                <div className="mt-0.5 p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <FileText className="w-4 h-4 text-brandLight" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Razón Social</span>
                  <span className="text-gray-200 font-medium text-lg">Transportes Mineros del Norte SpA</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Briefcase className="w-4 h-4 text-brandLight" strokeWidth={1.5} />
                </div>
                <div className="grid grid-cols-2 gap-8 w-full">
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">RUT</span>
                    <span className="text-gray-300 font-medium">77.178.217-5</span>
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Giro</span>
                    <span className="text-gray-300 font-medium">Transporte de Carga</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4 text-brandLight" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Dirección Matriz</span>
                  <span className="text-gray-300 font-medium">Bernardo O&apos;Higgins 1426, Iquique, Tarapacá</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-0.5 p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Phone className="w-4 h-4 text-brandLight" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Teléfono Central</span>
                  <span className="text-gray-300 font-medium">+56 933162517</span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Equipo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-black/50 rounded-2xl flex items-center justify-center text-yellow border border-white/10 shadow-md">
                <User strokeWidth={1.5} className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">Liderazgo Operativo</h3>
            </div>
            
            <div className="space-y-6">
              {/* Profile 1 */}
              <div className="bg-[#071324]/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 shadow-lg flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:border-yellow/30 hover:shadow-[0_0_30px_rgba(255,106,0,0.15)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 w-20 h-20 bg-darker rounded-full flex-shrink-0 flex items-center justify-center border border-white/10 shadow-inner overflow-hidden group-hover:scale-105 group-hover:border-yellow/40 transition-all duration-500">
                  <User className="w-8 h-8 text-gray-500 group-hover:text-yellow transition-colors" strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-yellow transition-colors duration-300">Ivette Mamani H.</h4>
                  <p className="text-gray-400 font-medium text-sm mb-3">Gerente General</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-light">
                    <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-brandLight" /> +56 933162517</span>
                    <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-brandLight" /> ivette.m@tmnspa.com</span>
                  </div>
                </div>
              </div>

              {/* Profile 2 */}
              <div className="bg-[#071324]/60 backdrop-blur-xl rounded-[2rem] p-8 border border-white/5 shadow-lg flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:border-yellow/30 hover:shadow-[0_0_30px_rgba(255,106,0,0.15)] transition-all duration-500 group relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="relative z-10 w-20 h-20 bg-darker rounded-full flex-shrink-0 flex items-center justify-center border border-white/10 shadow-inner overflow-hidden group-hover:scale-105 group-hover:border-yellow/40 transition-all duration-500">
                  <User className="w-8 h-8 text-gray-500 group-hover:text-yellow transition-colors" strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-semibold text-white mb-1 group-hover:text-yellow transition-colors duration-300">Ruben Garcia M.</h4>
                  <p className="text-gray-400 font-medium text-sm mb-3">Administrador de Contrato</p>
                  <div className="flex flex-col gap-1.5 text-sm text-gray-500 font-light">
                    <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-brandLight" /> +56 981574065</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-brandLight" /> AV. Comercio 03, Pozo Almonte</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
