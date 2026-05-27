"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Building2, User, MessageSquare, ChevronDown } from "lucide-react";

const WHATSAPP_NUMBER = "56981574065";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    service: "",
    message: ""
  });

  const services = [
    "Carga a Granel en Bateas",
    "Cargas Sobredimensionadas",
    "Transporte de Líquidos",
    "Servicio de Cama Baja",
    "Ramplas y Portacontenedores",
    "Logística Integral Especial",
    "Otra consulta"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, mi nombre es *${formData.name}* de la empresa *${formData.company}*.\n\nMe interesa cotizar el servicio de: *${formData.service}*\n\nMensaje: ${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    // Reset form
    setFormData({ name: "", company: "", service: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-[380px] bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex flex-col origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-[#071324] p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/20 rounded-full blur-3xl" />
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.898.536 3.67 1.459 5.16L2 22l4.996-1.31C8.36 21.523 10.116 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.636 0-3.178-.426-4.498-1.168l-3.232.848.868-3.141A8.204 8.204 0 013.75 12c0-4.549 3.701-8.25 8.25-8.25s8.25 3.701 8.25 8.25-3.701 8.25-8.25 8.25z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">Atención a Empresas</h3>
                  <p className="text-slate-400 text-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-pulse"></span>
                    En línea, respuesta rápida
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 bg-white space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-[#86B120]" /> Nombre
                  </label>
                  <input 
                    required
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre" 
                    className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-3 py-2.5 outline-none focus:border-[#86B120] focus:ring-1 focus:ring-[#86B120]/20 transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                    <Building2 className="w-3 h-3 text-[#86B120]" /> Empresa
                  </label>
                  <input 
                    required
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Tu empresa" 
                    className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-3 py-2.5 outline-none focus:border-[#86B120] focus:ring-1 focus:ring-[#86B120]/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <ChevronDown className="w-3 h-3 text-[#86B120]" /> Servicio de Interés
                </label>
                <select 
                  required
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-3 py-2.5 outline-none focus:border-[#86B120] focus:ring-1 focus:ring-[#86B120]/20 transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>Selecciona un servicio...</option>
                  {services.map((s, i) => (
                    <option key={i} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                  <MessageSquare className="w-3 h-3 text-[#86B120]" /> Mensaje Corto
                </label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detalles de carga, origen/destino..." 
                  rows={2}
                  className="w-full bg-slate-50 border border-slate-200 text-sm rounded-xl px-3 py-2.5 outline-none focus:border-[#86B120] focus:ring-1 focus:ring-[#86B120]/20 transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm py-3.5 rounded-xl shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all flex items-center justify-center gap-2 group mt-2"
              >
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Iniciar Chat
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center justify-center"
      >
        {!isOpen && (
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25"></div>
        )}
        <div className={`relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 ${isOpen ? 'bg-slate-800' : 'bg-[#25D366]'} z-10`}>
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <svg className="w-8 h-8 text-white translate-x-[1px] translate-y-[-1px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.898.536 3.67 1.459 5.16L2 22l4.996-1.31C8.36 21.523 10.116 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.25c-1.636 0-3.178-.426-4.498-1.168l-3.232.848.868-3.141A8.204 8.204 0 013.75 12c0-4.549 3.701-8.25 8.25-8.25s8.25 3.701 8.25 8.25-3.701 8.25-8.25 8.25z"/>
            </svg>
          )}
        </div>
      </button>
    </div>
  );
}
