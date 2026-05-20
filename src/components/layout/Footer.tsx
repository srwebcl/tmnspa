import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      {/* Giant Watermark */}
      <div className="absolute bottom-0 left-0 w-full text-center overflow-hidden pointer-events-none select-none z-0">
        <span className="text-[12rem] md:text-[18rem] lg:text-[25rem] font-black text-white/[0.02] leading-none whitespace-nowrap tracking-tighter">
          TMN SpA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/images/logo/logo-1.webp" alt="TMN SpA Logo" width={220} height={80} className="object-contain h-16 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transportes Mineros del Norte SpA. Especialistas en proveer soluciones logísticas de alta complejidad para la gran minería en el Norte Grande de Chile.
            </p>
            <Link href="/contacto" className="inline-flex items-center gap-2 text-yellow font-bold text-sm uppercase tracking-wide hover:text-brand transition-colors group">
              Cotizar Proyecto <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div>
            <h4 className="text-white font-title font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand rounded-full"></span> Servicios
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link href="/servicios" className="hover:text-white hover:translate-x-1 inline-block transition-all">Cargas Sobredimensionadas</Link></li>
              <li><Link href="/servicios" className="hover:text-white hover:translate-x-1 inline-block transition-all">Carga a Granel</Link></li>
              <li><Link href="/servicios" className="hover:text-white hover:translate-x-1 inline-block transition-all">Líquidos y Sustancias</Link></li>
              <li><Link href="/servicios" className="hover:text-white hover:translate-x-1 inline-block transition-all">Soporte Operacional</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-title font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow rounded-full"></span> Empresa
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><Link href="/nosotros" className="hover:text-white hover:translate-x-1 inline-block transition-all">Quiénes Somos</Link></li>
              <li><Link href="/seguridad" className="hover:text-white hover:translate-x-1 inline-block transition-all">Gestión de Seguridad</Link></li>
              <li><Link href="/flota" className="hover:text-white hover:translate-x-1 inline-block transition-all">Nuestra Flota</Link></li>
              <li><Link href="/contacto" className="hover:text-white hover:translate-x-1 inline-block transition-all">Contacto 24/7</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-title font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brandLight rounded-full"></span> Cobertura
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li><span className="text-gray-200">Iquique</span> <br/><span className="text-xs text-gray-500">Casa Matriz</span></li>
              <li><span className="text-gray-200">Pozo Almonte</span> <br/><span className="text-xs text-gray-500">Base Operativa</span></li>
              <li><span className="text-gray-200">Norte Grande</span> <br/><span className="text-xs text-gray-500">Despliegue Total</span></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-gray-300">TMN SpA</span>. Todos los derechos reservados.
          </p>
          <div className="text-gray-500 text-sm flex gap-6 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Políticas SSEC</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
