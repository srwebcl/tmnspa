import PageHeader from "@/components/layout/PageHeader";
import { CheckCircle } from "lucide-react";

export default function TransporteGranelPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Transporte de Carga a Granel en Bateas" 
        subtitle="Soluciones de transporte masivo para minería e industria pesada."
        imagePath="/images/portfolio/img-12.jpeg"
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "Transporte a Granel", href: "/servicios/transporte-granel" }
        ]}
      />
      
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        <div className="prose prose-lg prose-yellow max-w-none text-gray-600">
          <p className="text-xl leading-relaxed mb-8">
            Operamos con bateas tolva Tremac y Randon de 20m³, aptas para el 
            transporte de materiales mineros e industriales a granel de alta densidad. 
          </p>
          <p className="mb-12">
            Trabajamos con empresas que exigen puntualidad, documentación en 
            regla y conductores habilitados para faena. Cada despacho incluye 
            guías de despacho, registros de peso y trazabilidad GPS en tiempo real.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mt-12">
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-title font-bold text-darker mb-6">Materiales que transportamos</h3>
              <ul className="space-y-4">
                {['Sales minerales (cloruro de sodio, sulfatos)', 'Áridos y gravas industriales', 'Concentrado de cobre', 'Óxidos de cobre', 'Material estéril de minería'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-brand flex-shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100">
              <h3 className="text-2xl font-title font-bold text-darker mb-6">Equipos disponibles</h3>
              <ul className="space-y-4 mb-8">
                {['Bateas tolva Tremac 20m³ — 5 unidades', 'Bateas tolva Randon 20m³ — 5 unidades', 'Tractocamiones Volvo FH500 y FM460 4x2 y 6x4'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-yellow flex-shrink-0" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-darker text-white p-6 rounded-2xl">
                <p className="font-bold uppercase tracking-wider text-sm mb-1 text-yellow">Cobertura</p>
                <p>Tarapacá, Antofagasta, Atacama</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
