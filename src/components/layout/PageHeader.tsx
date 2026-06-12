"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imagePath: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function PageHeader({ title, subtitle, imagePath, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#071324] overflow-hidden">
      {/* Industrial Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none z-0" />

      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[#071324]/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-[#071324]/50 to-transparent z-10" />
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${imagePath})` }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-400 mb-8">
            <Link href="/" className="hover:text-brandLight transition-colors">Inicio</Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-slate-600" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-brandLight transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 tracking-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
