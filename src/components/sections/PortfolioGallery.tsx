"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PortfolioGallery() {
  const images = Array.from({ length: 12 }, (_, i) => ({
    src: `/images/portfolio/img-${String(i + 1).padStart(2, '0')}.jpeg`,
    alt: `Operación TMN SpA ${i + 1}`
  }));

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="aspect-square relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedImg(img.src)}
            >
              <div className="absolute inset-0 bg-darker/20 group-hover:bg-transparent transition-colors z-10 duration-300" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-darker/95 flex items-center justify-center p-4 md:p-10" onClick={() => setSelectedImg(null)}>
          <button className="absolute top-6 right-6 text-white text-4xl hover:text-yellow transition-colors">&times;</button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={selectedImg} alt="Imagen ampliada" className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain" />
        </div>
      )}
    </section>
  );
}
