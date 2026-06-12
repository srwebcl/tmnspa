"use client";

import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceLandingLayoutProps {
  title: string;
  subtitle: string;
  imagePath: string;
  breadcrumbs: { label: string; href: string }[];
  children: ReactNode;
}

export default function ServiceLandingLayout({
  title,
  subtitle,
  imagePath,
  breadcrumbs,
  children
}: ServiceLandingLayoutProps) {
  return (
    <main className="min-h-screen bg-[#071324] font-body relative overflow-hidden">
      {/* Decorative Dark Background Gradients for the whole page */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-0 w-[500px] h-[500px] bg-yellow/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-[0.02] pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pb-24 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-2 text-sm font-medium text-gray-400 mb-12"
          >
            <Link href="/" className="hover:text-brandLight transition-colors">Inicio</Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-600" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-brandLight transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brandLight text-xs font-bold tracking-[0.2em] uppercase mb-6 shadow-md backdrop-blur-md">
                Servicio Especializado
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
                {title}
              </h1>
              <p className="text-gray-400 font-light text-lg md:text-xl leading-relaxed">
                {subtitle}
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px] rounded-[2.5rem] p-2 bg-gradient-to-br from-white/10 to-transparent shadow-[0_0_40px_rgba(0,0,0,0.3)] group"
            >
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-darker">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={imagePath} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/60 via-transparent to-transparent opacity-80 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area (Children) */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {children}
      </section>

      {/* Global Bottom CTA Banner */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[3rem] overflow-hidden bg-[#071324]/60 backdrop-blur-2xl border border-white/5 shadow-2xl group"
        >
          {/* Subtle Glows inside the CTA */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand/10 rounded-full blur-[100px] pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow/5 rounded-full blur-[80px] pointer-events-none z-0" />
          
          <div className="relative z-10 px-8 py-16 md:py-20 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center md:text-left">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                ¿Necesita una cotización para su <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brandLight to-brand drop-shadow-[0_0_15px_rgba(0,87,255,0.3)]">próximo proyecto</span>?
              </h3>
              <p className="text-gray-400 font-light text-lg lg:text-xl leading-relaxed">
                Nuestro equipo de operaciones evaluará sus requerimientos y le entregará una propuesta técnica y comercial a la medida.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto flex-shrink-0">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2.5 text-white group text-base font-semibold px-8 py-4 rounded-full bg-brand hover:bg-brandLight hover:shadow-[0_0_30px_rgba(0,87,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 border border-brandLight/50"
              >
                Solicitar Cotización
                <ArrowRight className="w-5 h-5 translate-x-0 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}
