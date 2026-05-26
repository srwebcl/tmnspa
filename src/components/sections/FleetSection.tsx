"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function FleetSection() {
  return (
    <section className="py-24 bg-light relative" id="flota">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-1 w-8 bg-brand rounded-full"></div>
            <span className="text-brand font-bold tracking-wider text-sm uppercase">Infraestructura</span>
            <div className="h-1 w-8 bg-brand rounded-full"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-title font-bold text-darker mb-6 leading-tight"
          >
            Flota Moderna y Clientes Estratégicos
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-body text-lg"
          >
            Contamos con equipos de última generación para garantizar la continuidad operacional. Tractocamiones Volvo y Scania de alta gama adaptados a las exigencias de la industria minera.
          </motion.p>
        </div>

        {/* Feature Grid with Image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-yellow translate-x-4 translate-y-4 rounded-[2rem] -z-10"></div>
            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
              <div className="absolute inset-0 bg-darker/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="w-full h-full bg-[url('/images/portfolio/img-45.jpeg')] bg-cover bg-center hover:scale-105 transition-transform duration-1000" />
            </div>
            
            {/* Overlay Stat Card */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-20 border border-gray-100 flex items-center gap-4">
              <div className="bg-darker/5 p-4 rounded-xl">
                <span className="font-display text-4xl font-black text-brand">100%</span>
              </div>
              <div>
                <p className="font-bold text-darker text-sm uppercase tracking-wide">Monitoreo</p>
                <p className="text-gray-500 text-xs">GPS 24/7 en toda la flota</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-title font-bold text-darker mb-6">Equipamiento Especializado</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              15 tractocamiones propios y 19 semirremolques especializados. No tercerizamos el transporte, lo que nos permite garantizar el estándar TMN en cada ruta.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-darker mb-4 uppercase tracking-wide flex items-center gap-2"><div className="w-2 h-2 bg-brand rounded-full"></div> Tractocamiones (15 Unidades)</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-brand flex-shrink-0" /><span className="text-gray-600 text-sm">Volvo FH500 y FH540 (Alta tracción y seguridad)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-brand flex-shrink-0" /><span className="text-gray-600 text-sm">Volvo FM420 y FM460 (Versatilidad en faena)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-brand flex-shrink-0" /><span className="text-gray-600 text-sm">Scania R500 (Rendimiento superior)</span></li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-darker mb-4 uppercase tracking-wide flex items-center gap-2"><div className="w-2 h-2 bg-yellow rounded-full"></div> Semirremolques (19 Unidades)</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow flex-shrink-0" /><span className="text-gray-600 text-sm">Bateas Tolva Tremac y Randon 20m³ (Granel)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow flex-shrink-0" /><span className="text-gray-600 text-sm">Cama Baja Tremac 3 Ejes (Maquinaria pesada)</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow flex-shrink-0" /><span className="text-gray-600 text-sm">Portacontenedores 20&apos; y 40&apos; Tremac y Pravaz</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-yellow flex-shrink-0" /><span className="text-gray-600 text-sm">Ramplas 3 Ejes y Rampla Rebajada Goren</span></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 border-l-4 border-gray-300 p-4 rounded-r-xl">
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                * Flota auditada y disponible para inspección técnica. Revisión técnica, SOAP y seguros de responsabilidad civil al día.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
