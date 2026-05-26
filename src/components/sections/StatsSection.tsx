"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "+20",
    label: "años de experiencia en faenas mineras e industriales",
  },
  {
    value: "15",
    label: "tractocamiones Volvo y Scania de última generación",
  },
  {
    value: "19",
    label: "semirremolques especializados y certificados",
  },
  {
    value: "24/7",
    label: "operación los 365 días del año en todo el norte",
  },
  {
    value: "8",
    label: "capacidades operacionales distintas y adaptables",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-dark text-white py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('/images/portfolio/img-42.jpeg')] bg-cover bg-center"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center px-4 py-6 md:py-2"
            >
              <div className="text-4xl md:text-5xl font-black font-display text-yellow mb-3">
                {stat.value}
              </div>
              <div className="text-sm md:text-xs text-gray-300 font-medium tracking-wide uppercase max-w-[200px] leading-snug">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
