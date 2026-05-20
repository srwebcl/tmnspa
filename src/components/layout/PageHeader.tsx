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
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-darker overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-darker/80 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent z-10" />
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
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-400 mb-6">
            <Link href="/" className="hover:text-brand transition-colors">Inicio</Link>
            {breadcrumbs.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-600" />
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-white">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-brand transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title font-bold text-white mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-body">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
