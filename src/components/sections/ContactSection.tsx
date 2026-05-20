"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="contacto">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow/10 rounded-full blur-3xl -z-10 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-8 bg-brand rounded-full"></div>
              <span className="text-brand font-bold tracking-wider text-sm uppercase">Contacto Directo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-title font-bold text-darker mb-6 leading-tight">
              Hablemos de su Próximo Proyecto Logístico
            </h2>
            <p className="text-gray-600 mb-10 font-body leading-relaxed text-lg">
              Cercanía y trato directo. Estamos listos para adaptarnos a sus necesidades operacionales con transparencia y eficiencia. <strong className="text-darker bg-yellow/20 px-2 py-0.5 rounded">Operamos 24/7.</strong>
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 group">
                <div className="bg-white p-4 rounded-2xl text-brand border border-gray-100 shadow-sm group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-title font-bold text-darker mb-2 group-hover:text-brand transition-colors">Oficinas y Bases Operativas</h4>
                  <ul className="space-y-2 text-gray-500 font-medium">
                    <li><strong className="text-darker">Casa Matriz Iquique:</strong> Bernardo O'Higgins 1426</li>
                    <li><strong className="text-darker">Base Pozo Almonte:</strong> Av. Comercio 03</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-white p-4 rounded-2xl text-yellow border border-gray-100 shadow-sm group-hover:bg-yellow group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-title font-bold text-darker mb-2 group-hover:text-yellow transition-colors">Comuníquese Directamente</h4>
                  <ul className="space-y-2 text-gray-500 font-medium">
                    <li><strong className="text-darker">Gerencia (Rubén García):</strong> +56 9 81574065</li>
                    <li><strong className="text-darker">Admin. (Ivette Mamani):</strong> +56 9 33162517</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="bg-white p-4 rounded-2xl text-brand border border-gray-100 shadow-sm group-hover:bg-brand group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-title font-bold text-darker mb-2 group-hover:text-brand transition-colors">Correos Electrónicos</h4>
                  <ul className="space-y-2 text-gray-500 font-medium">
                    <li><a href="mailto:ruben.g@tmnspa.com" className="hover:text-brand transition-colors">ruben.g@tmnspa.com</a></li>
                    <li><a href="mailto:ivette.m@tmnspa.com" className="hover:text-brand transition-colors">ivette.m@tmnspa.com</a></li>
                    <li><a href="mailto:operaciones@tmnspa.com" className="hover:text-brand transition-colors">operaciones@tmnspa.com</a></li>
                  </ul>
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
            {/* Background Offset */}
            <div className="absolute inset-0 bg-darker translate-x-3 translate-y-3 rounded-3xl -z-10 hidden sm:block"></div>
            
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-title font-bold text-darker mb-8 flex items-center gap-3">
                <Send className="w-6 h-6 text-yellow" />
                Envíenos su Requerimiento
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Nombre Completo</label>
                    <input type="text" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Empresa</label>
                    <input type="text" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all" placeholder="Ej. Minera XYZ" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Teléfono / Celular</label>
                    <input type="tel" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all" placeholder="+56 9 1234 5678" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Correo Electrónico</label>
                    <input type="email" className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all" placeholder="juan@empresa.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Servicio Requerido</label>
                  <select className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all text-gray-700 font-medium appearance-none">
                    <option>Carga Sobredimensionada</option>
                    <option>Transporte de Carga a Granel</option>
                    <option>Transporte de Líquidos / Sustancias Peligrosas</option>
                    <option>Cargas Varias / Portacontenedores</option>
                    <option>Otro requerimiento especial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Detalles Adicionales</label>
                  <textarea rows={4} className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all resize-none" placeholder="Describa el origen, destino, tipo de material, etc..." />
                </div>

                <button className="w-full bg-darker hover:brightness-75 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                  Enviar Requerimiento
                  <Send className="w-5 h-5 text-yellow" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
