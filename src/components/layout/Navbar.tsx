"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Quiénes Somos", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Seguridad", href: "/seguridad" },
    { name: "Flota", href: "/flota" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <>
      {/* Top Bar - Hidden on mobile, shows contact info */}
      <div className="hidden lg:block bg-[#0A1A2F] border-b border-white/10 text-gray-300 py-2 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium tracking-wider">
          <div className="flex gap-6">
            <a href="tel:+56981574065" className="flex items-center gap-2 hover:text-brand transition-colors">
              <Phone className="w-4 h-4 text-brand" /> +56 9 8157 4065
            </a>
            <a href="mailto:contacto@tmnspa.com" className="flex items-center gap-2 hover:text-brand transition-colors">
              <Mail className="w-4 h-4 text-brand" /> contacto@tmnspa.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-yellow">
            <Clock className="w-4 h-4" />
            <span>Atención y Operación 24/7 en Faenas</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${isScrolled ? "bg-dark shadow-2xl py-3" : "bg-dark py-4"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/images/logo/logo-1.webp" alt="TMN SpA Logo" width={220} height={80} className="object-contain h-14 sm:h-16 w-auto transition-all" priority />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-200 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-all font-medium text-sm tracking-wide">
                  {link.name}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-white/10">
                <Link href="/contacto" className="bg-brand hover:bg-brandLight text-darker px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_4px_15px_rgba(134,177,32,0.3)] hover:shadow-[0_6px_20px_rgba(134,177,32,0.5)] flex items-center gap-2 group">
                  Cotizar <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-4">
              <a href="tel:+56981574065" className="bg-brand/20 text-brand p-2.5 rounded-lg border border-brand/20">
                <Phone className="w-5 h-5" />
              </a>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/10">
                {isMobileMenuOpen ? <X className="w-7 h-7 text-brand" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-dark border-b border-white/10 shadow-2xl transition-all duration-300 origin-top overflow-hidden ${isMobileMenuOpen ? "h-[480px] opacity-100" : "h-0 opacity-0"}`}>
          <div className="px-4 py-6 flex flex-col h-full bg-gradient-to-b from-dark to-[#0A1A2F]">
            <div className="space-y-2 flex-grow">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-gray-200 hover:bg-white/5 hover:text-white rounded-xl font-medium text-lg border border-transparent hover:border-white/10 transition-all"
                >
                  {link.name}
                  <ChevronRight className="w-5 h-5 text-brand opacity-50" />
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-6 border-t border-white/10">
              <Link 
                href="/contacto" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-brand hover:bg-brandLight text-darker text-center py-4 rounded-xl font-bold text-lg shadow-lg flex justify-center items-center gap-2 transition-all"
              >
                Solicitar Cotización <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
