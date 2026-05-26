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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-[#071324]/95 backdrop-blur-xl shadow-2xl" : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"}`}>
      {/* Top Bar - Hidden on mobile, shows contact info */}
      <div className={`hidden lg:block border-b transition-colors duration-500 py-2 ${isScrolled ? "border-white/5" : "border-white/10"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-medium tracking-wider text-gray-300">
          <div className="flex gap-6">
            <a href="tel:+56981574065" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand" /> +56 9 8157 4065
            </a>
            <a href="mailto:contacto@tmnspa.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand" /> contacto@tmnspa.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-yellow/90">
            <Clock className="w-3.5 h-3.5" />
            <span>Atención y Operación 24/7 en Faenas</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-500 ${isScrolled ? "py-3" : "py-5"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image src="/images/logo/logo-1.webp" alt="TMN SpA Logo" width={220} height={80} className="object-contain h-14 sm:h-16 w-auto transition-all" priority />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-gray-200 hover:text-yellow hover:bg-white/5 px-4 py-2 rounded-lg transition-all font-medium text-sm tracking-wide">
                  {link.name}
                </Link>
              ))}
              <div className="ml-4 pl-4 border-l border-white/10">
                <Link href="/contacto" className="bg-gradient-to-r from-yellow to-[#FF9A00] text-darker px-6 py-2.5 rounded-full font-bold transition-all shadow-[0_4px_15px_rgba(255,230,0,0.25)] hover:shadow-[0_6px_20px_rgba(255,230,0,0.45)] hover:-translate-y-0.5 flex items-center gap-2 group border border-white/20">
                  Cotizar <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center gap-3">
              <a href="tel:+56981574065" className="bg-brand/10 text-brand p-2.5 rounded-xl border border-brand/20 hover:bg-brand/20 transition-all">
                <Phone className="w-5 h-5" />
              </a>
              <button 
                onClick={() => setIsMobileMenuOpen(true)} 
                className="text-white p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/5"
                aria-label="Abrir menú"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer - Full Screen Overlay */}
        <div 
          className={`fixed inset-0 w-full h-screen z-[100] bg-[#071324]/98 backdrop-blur-2xl flex flex-col transition-all duration-500 ease-out lg:hidden ${
            isMobileMenuOpen 
              ? "opacity-100 pointer-events-auto translate-x-0" 
              : "opacity-0 pointer-events-none translate-x-full"
          }`}
        >
          {/* Mobile Menu Top Bar */}
          <div className="flex justify-between items-center px-4 py-5 border-b border-white/5">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex-shrink-0 flex items-center">
              <Image src="/images/logo/logo-1.webp" alt="TMN SpA Logo" width={180} height={60} className="object-contain h-12 w-auto" priority />
            </Link>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-white p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10 shadow-lg"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6 text-yellow" />
            </button>
          </div>

          {/* Mobile Menu Navigation Links */}
          <div className="flex-grow flex flex-col justify-center px-6 py-10 overflow-y-auto">
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group relative inline-block py-2 text-2xl sm:text-3xl font-light text-gray-300 hover:text-white transition-colors"
                >
                  <span className="text-yellow text-xs font-bold font-mono align-super mr-2 opacity-50">0{index + 1}</span>
                  <span className="relative font-display tracking-wide font-medium">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow to-[#FF9A00] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Footer Info */}
          <div className="p-6 bg-[#0a1523] border-t border-white/5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-400">
              <a href="tel:+56981574065" className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="p-2 rounded-lg bg-yellow/10 text-yellow">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-semibold text-white text-xs">+56 9 8157 4065</span>
              </a>
              <a href="mailto:contacto@tmnspa.com" className="flex items-center gap-3 py-2.5 px-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                <div className="p-2 rounded-lg bg-brand/10 text-brand">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-semibold text-white text-xs">contacto@tmnspa.com</span>
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-xs text-yellow/80">
              <Clock className="w-4 h-4" />
              <span>Operación 24/7 en Faenas Mineras</span>
            </div>

            <Link 
              href="/contacto" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full bg-gradient-to-r from-yellow to-[#FF9A00] text-darker text-center py-4 rounded-xl font-bold text-lg shadow-[0_4px_25px_rgba(255,230,0,0.25)] hover:shadow-[0_6px_35px_rgba(255,230,0,0.45)] flex justify-center items-center gap-2 transition-all hover:scale-[1.02]"
            >
              Solicitar Cotización <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
