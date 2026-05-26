import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#071324] pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Glow Spheres from Hero */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Subtle Dark Industrial Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none -z-10" />

      {/* Giant Watermark */}
      <div className="absolute bottom-0 left-0 w-full text-center overflow-hidden pointer-events-none select-none z-0">
        <span className="text-[12rem] md:text-[18rem] lg:text-[25rem] font-black text-white/[0.01] leading-none whitespace-nowrap tracking-tighter">
          TMN SpA
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Info and CTA */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 hover:scale-[1.02] transition-transform duration-300 origin-left">
              <Image src="/images/logo/logo-1.webp" alt="TMN SpA Logo" width={220} height={80} className="object-contain h-16 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
              Transportes Mineros del Norte SpA. Especialistas en proveer soluciones logísticas de alta complejidad para la gran minería en el Norte Grande de Chile.
            </p>
            <div className="mt-4">
              <Link 
                href="/contacto" 
                className="relative overflow-hidden inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow to-[#FF9A00] text-darker font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_4px_15px_rgba(255,230,0,0.15)] hover:shadow-[0_6px_25px_rgba(255,230,0,0.3)] hover:-translate-y-0.5 group border border-white/10"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-1.5">
                  Cotizar Proyecto 
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>

          {/* Column 2: Services links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#86B120] shadow-[0_0_8px_rgba(134,177,32,0.6)]" /> 
              Servicios
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><Link href="/servicios/carga-sobredimensionada" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Cargas Sobredimensionadas</Link></li>
              <li><Link href="/servicios/transporte-granel" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Carga a Granel (Bateas)</Link></li>
              <li><Link href="/servicios/transporte-liquidos" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Líquidos e Industriales</Link></li>
              <li><Link href="/servicios/cama-baja" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Servicio de Cama Baja</Link></li>
              <li><Link href="/servicios/portacontenedores" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Portacontenedores</Link></li>
              <li><Link href="/servicios/logistica-integral" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Logística Integral</Link></li>
            </ul>
          </div>

          {/* Column 3: Company links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFE600] shadow-[0_0_8px_rgba(255,230,0,0.6)]" /> 
              Empresa
            </h4>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li><Link href="/nosotros" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Quiénes Somos</Link></li>
              <li><Link href="/seguridad" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Gestión de Seguridad</Link></li>
              <li><Link href="/flota" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Nuestra Flota</Link></li>
              <li><Link href="/contacto" className="hover:text-white hover:translate-x-1.5 inline-block transition-all duration-300 hover:text-yellow">Contacto 24/7</Link></li>
            </ul>
          </div>

          {/* Column 4: Coverage links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brandLight shadow-[0_0_8px_rgba(134,177,32,0.4)]" /> 
              Cobertura
            </h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex flex-col gap-0.5">
                <span className="text-gray-200 font-medium">Iquique</span> 
                <span className="text-xs text-gray-500">Casa Matriz · O&apos;Higgins 1426</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-gray-200 font-medium">Pozo Almonte</span> 
                <span className="text-xs text-gray-500">Base Operativa · Av. Comercio 03</span>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-gray-200 font-medium">Norte Grande</span> 
                <span className="text-xs text-gray-500">Despliegue Total Operacional</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-light">
            &copy; {new Date().getFullYear()} <span className="text-gray-300">TMN SpA</span>. Todos los derechos reservados.
          </p>
          <div className="text-gray-500 text-sm flex gap-6 font-light">
            <Link href="#" className="hover:text-white transition-colors duration-300">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors duration-300">Políticas SSEC</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
