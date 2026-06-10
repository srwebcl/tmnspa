"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ShieldCheck, Clock, ChevronDown } from "lucide-react";

interface ContactSectionProps {
  showInfo?: boolean;
}

const servicesOptions = [
  "Carga Sobredimensionada",
  "Transporte de Carga a Granel (Bateas)",
  "Transporte de Líquidos e Industriales",
  "Servicio de Cama Baja (Maquinaria Pesada)",
  "Equipos Portacontenedores",
  "Logística Integral Especial",
  "Otro requerimiento especial"
];

export default function ContactSection({ showInfo = false }: ContactSectionProps) {
  const [selectedService, setSelectedService] = useState("Carga Sobredimensionada");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#071324] to-[#0a1523] overflow-hidden" id="contacto">
      {/* Soft top gradient line to transition from the light section */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-[120px] pointer-events-none -z-10 translate-y-1/2 -translate-x-1/2"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none -z-10 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-8 bg-brandLight rounded-full"></div>
              <span className="text-brandLight font-bold tracking-wider text-xs sm:text-sm uppercase">
                {showInfo ? "Información de Contacto" : "Contacto Directo"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Hablemos de su Próximo Proyecto Logístico
            </h2>
            <p className="text-gray-300 mb-10 font-light leading-relaxed text-base sm:text-lg opacity-90">
              Estamos listos para evaluar sus requerimientos operacionales y diseñar la solución óptima para su carga, garantizando continuidad y seguridad. <strong className="text-darker bg-yellow px-2 py-0.5 rounded font-bold">Operamos 24/7.</strong>
            </p>

            {showInfo ? (
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="bg-white/5 p-4 rounded-2xl text-brandLight border border-white/10 shadow-lg group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brandLight transition-colors">Oficinas y Bases Operativas</h4>
                    <ul className="space-y-2 text-gray-400 font-light">
                      <li><strong className="text-gray-200 font-semibold">Casa Matriz Iquique:</strong> Bernardo O&apos;Higgins 1426</li>
                      <li><strong className="text-gray-200 font-semibold">Base Pozo Almonte:</strong> Av. Comercio 03</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-white/5 p-4 rounded-2xl text-yellow border border-white/10 shadow-lg group-hover:bg-yellow group-hover:text-darker group-hover:border-yellow transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-yellow transition-colors">Comuníquese Directamente</h4>
                    <ul className="space-y-2 text-gray-400 font-light">
                      <li><strong className="text-gray-200 font-semibold">Gerencia (Rubén García):</strong> +56 9 81574065</li>
                      <li><strong className="text-gray-200 font-semibold">Admin. (Ivette Mamani):</strong> +56 9 33162517</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="bg-white/5 p-4 rounded-2xl text-brandLight border border-white/10 shadow-lg group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brandLight transition-colors">Correos Electrónicos</h4>
                    <ul className="space-y-2 text-gray-400 font-light text-sm">
                      <li><a href="mailto:ruben.g@tmnspa.com" className="hover:text-brandLight transition-colors">ruben.g@tmnspa.com</a></li>
                      <li><a href="mailto:ivette.m@tmnspa.com" className="hover:text-brandLight transition-colors">ivette.m@tmnspa.com</a></li>
                      <li><a href="mailto:operaciones@tmnspa.com" className="hover:text-brandLight transition-colors">operaciones@tmnspa.com</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/[0.02] backdrop-blur-md rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden mt-8">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/5 rounded-full blur-2xl pointer-events-none" />
                
                <h4 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
                  Compromiso de Servicio TMN SpA
                </h4>
                
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                  Disponemos de un equipo experto y flota certificada lista para movilizar sus cargas bajo el más estricto estándar operacional del sector industrial.
                </p>
                
                <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-gray-300">
                  <div className="flex items-center gap-2 bg-white/5 py-2 px-3 rounded-lg border border-white/5">
                    <Clock className="w-3.5 h-3.5 text-yellow" />
                    <span>Disponibilidad 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 py-2 px-3 rounded-lg border border-white/5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                    <span>Cultura de Seguridad</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 py-2 px-3 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow" />
                    <span>Monitoreo GPS Activo</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 py-2 px-3 rounded-lg border border-white/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                    <span>Equipamiento Moderno</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Offset */}
            <div className="absolute inset-0 bg-brand/10 translate-x-3 translate-y-3 rounded-3xl -z-10 hidden sm:block"></div>
            
            <div className="bg-white/[0.02] backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-title font-bold text-white mb-8 flex items-center gap-3">
                <Send className="w-6 h-6 text-yellow" />
                Envíenos su Requerimiento
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Nombre Completo</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all placeholder:text-gray-500" placeholder="Ej. Juan Pérez" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Empresa</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all placeholder:text-gray-500" placeholder="Ej. Minera XYZ" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Teléfono / Celular</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all placeholder:text-gray-500" placeholder="+56 9 1234 5678" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Correo Electrónico</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all placeholder:text-gray-500" placeholder="juan@empresa.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Servicio Requerido</label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all font-medium text-left flex justify-between items-center group cursor-pointer"
                    >
                      <span className={selectedService ? "text-white" : "text-gray-500"}>
                        {selectedService || "Seleccione un servicio"}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-yellow" : "group-hover:text-white"}`} />
                    </button>

                    {isDropdownOpen && (
                      <>
                        <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
                        
                        <div className="absolute left-0 mt-2 w-full bg-[#0a1523]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden max-h-60 overflow-y-auto divide-y divide-white/5 animate-in fade-in slide-in-from-top-1 duration-200">
                          {servicesOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => {
                                setSelectedService(option);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left px-4 py-3 text-sm transition-all duration-150 flex items-center justify-between cursor-pointer ${
                                selectedService === option
                                  ? "bg-yellow/10 text-yellow font-semibold"
                                  : "text-gray-300 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              <span>{option}</span>
                              {selectedService === option && (
                                <span className="w-1.5 h-1.5 rounded-full bg-yellow shadow-[0_0_8px_rgba(255,230,0,0.6)]" />
                              )}
                            </button>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <input type="hidden" name="servicio" value={selectedService} />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Detalles Adicionales</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 text-white rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-yellow/50 focus:border-yellow transition-all resize-none placeholder:text-gray-500" placeholder="Describa el origen, destino, tipo de material, etc..." />
                </div>

                <button className="w-full bg-gradient-to-r from-yellow to-[#FF9A00] text-darker font-extrabold text-lg py-4 rounded-xl flex items-center justify-center gap-3 transition-all shadow-[0_4px_25px_rgba(255,230,0,0.2)] hover:shadow-[0_6px_35px_rgba(255,230,0,0.4)] hover:-translate-y-1">
                  Enviar Requerimiento
                  <Send className="w-5 h-5 text-darker" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
