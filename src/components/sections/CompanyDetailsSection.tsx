"use client";

import { motion } from "framer-motion";
import { Briefcase, Building, FileText, MapPin, Phone, Mail, User } from "lucide-react";

export default function CompanyDetailsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Light Industrial Grid Background (optional for continuity, but let's keep it clean white here to contrast the slate-50 above) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Datos Comerciales */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 border border-slate-100 shadow-sm">
                <Building strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 tracking-tight">Datos Comerciales</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FileText className="w-5 h-5 text-slate-300 mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Razón Social</span>
                  <span className="text-slate-800 font-medium text-lg">Transportes Mineros del Norte SpA</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Briefcase className="w-5 h-5 text-slate-300 mt-0.5" strokeWidth={1.5} />
                <div className="grid grid-cols-2 gap-8 w-full">
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">RUT</span>
                    <span className="text-slate-700 font-medium">77.178.217-5</span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Giro</span>
                    <span className="text-slate-700 font-medium">Transporte de Carga</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-slate-300 mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Dirección Matriz</span>
                  <span className="text-slate-700 font-medium">Bernardo O&apos;Higgins 1426, Iquique, Tarapacá</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-slate-300 mt-0.5" strokeWidth={1.5} />
                <div>
                  <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Teléfono Central</span>
                  <span className="text-slate-700 font-medium">+56 933162517</span>
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
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#86B120] border border-slate-100 shadow-sm">
                <User strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 tracking-tight">Liderazgo Operativo</h3>
            </div>
            
            <div className="space-y-6">
              {/* Profile 1 */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:border-[#86B120]/30 hover:bg-white transition-all duration-300 group">
                <div className="w-20 h-20 bg-white rounded-full flex-shrink-0 flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <User className="w-8 h-8 text-slate-300 group-hover:text-[#86B120] transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-1">Ivette Mamani H.</h4>
                  <p className="text-[#86B120] font-medium text-sm mb-3">Gerente General</p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-light">
                    <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-slate-400" /> +56 933162517</span>
                    <span className="flex items-center gap-1.5"><Mail className="w-4 h-4 text-slate-400" /> ivette.m@tmnspa.com</span>
                  </div>
                </div>
              </div>

              {/* Profile 2 */}
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-6 items-start sm:items-center hover:border-[#86B120]/30 hover:bg-white transition-all duration-300 group">
                <div className="w-20 h-20 bg-white rounded-full flex-shrink-0 flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <User className="w-8 h-8 text-slate-300 group-hover:text-[#86B120] transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-1">Ruben Garcia M.</h4>
                  <p className="text-[#86B120] font-medium text-sm mb-3">Administrador de Contrato</p>
                  <div className="flex flex-col gap-1.5 text-sm text-slate-500 font-light">
                    <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-slate-400" /> +56 981574065</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-400" /> AV. Comercio 03, Pozo Almonte</span>
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
