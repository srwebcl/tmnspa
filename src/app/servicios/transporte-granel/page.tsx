import ServiceLandingLayout from "@/components/layout/ServiceLandingLayout";
import { CheckCircle } from "lucide-react";

export default function TransporteGranelPage() {
  return (
    <ServiceLandingLayout
      title="Transporte de Carga a Granel en Bateas" 
      subtitle="Soluciones de transporte masivo para minería e industria pesada con la más alta capacidad operativa."
      imagePath="/images/portfolio/img-12.jpeg"
      breadcrumbs={[
        { label: "Servicios", href: "/servicios" },
        { label: "Transporte a Granel", href: "/servicios/transporte-granel" }
      ]}
    >
      <div className="grid lg:grid-cols-12 gap-12 items-start mt-8">
        {/* Left Column: Description */}
        <div className="lg:col-span-5 prose prose-lg prose-invert">
          <p className="text-xl leading-relaxed text-gray-300 font-light">
            Operamos con bateas tolva Tremac y Randon de 20m³, diseñadas específicamente para soportar el 
            transporte de materiales mineros e industriales a granel de alta densidad.
          </p>
          <p className="text-gray-400 font-light mt-6">
            Trabajamos con empresas que exigen puntualidad rigurosa, documentación en 
            regla y conductores con pase habilitado para faena. Cada uno de nuestros despachos incluye 
            guías de despacho digitales, registros exactos de peso y trazabilidad GPS en tiempo real para su completa tranquilidad.
          </p>
        </div>

        {/* Right Column: Cards */}
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
          <div className="bg-[#071324]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg hover:border-brand/30 transition-colors duration-300">
            <h3 className="text-xl font-bold text-white mb-6">Materiales que Transportamos</h3>
            <ul className="space-y-4">
              {['Sales minerales (cloruro de sodio, sulfatos)', 'Áridos y gravas industriales', 'Concentrado de cobre', 'Óxidos de cobre', 'Material estéril de minería'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-light text-gray-300 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[#071324]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg hover:border-yellow/30 transition-colors duration-300">
            <h3 className="text-xl font-bold text-white mb-6">Nuestra Flota Granelera</h3>
            <ul className="space-y-4 mb-8">
              {['Bateas tolva Tremac 20m³ — 5 unidades', 'Bateas tolva Randon 20m³ — 5 unidades', 'Tractocamiones Volvo FH500 y FM460'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <CheckCircle className="w-5 h-5 text-yellow flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-light text-gray-300 group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-brand/10 border border-brand/20 p-5 rounded-2xl">
              <p className="font-bold uppercase tracking-wider text-xs mb-1 text-brandLight">Zonas de Cobertura</p>
              <p className="text-white font-medium">Regiones de Tarapacá, Antofagasta y Atacama.</p>
            </div>
          </div>
        </div>
      </div>
    </ServiceLandingLayout>
  );
}
