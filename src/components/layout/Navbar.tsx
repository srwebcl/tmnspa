"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${isScrolled ? "bg-darker/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <Image src="/images/logo/logo-1.webp" alt="TMN SpA Logo" width={220} height={80} className="object-contain h-16 sm:h-20 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-white hover:text-brandLight transition-colors font-medium text-sm uppercase tracking-wide">
                {link.name}
              </Link>
            ))}
            <Link href="/contacto" className="bg-brand hover:bg-brand/90 text-white px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(134,177,32,0.4)]">
              Cotizar Servicio
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-darker/95 backdrop-blur-md border-t border-white/10 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-white hover:text-brandLight font-medium text-base border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
