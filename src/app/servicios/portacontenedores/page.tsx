import PageHeader from "@/components/layout/PageHeader";
import { CheckCircle, Anchor } from "lucide-react";

export default function PortacontenedoresPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Portacontenedores 20 y 40 Pies — Norte de Chile" 
        subtitle="Conectamos el puerto con la faena o bodega, asegurando la continuidad de su cadena de suministro."
        imagePath="/images/portfolio/img-51.jpeg"
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "Portacontenedores", href: "/servicios/portacontenedores" }
        ]}
      />
      
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Contamos con 4 portacontenedores Tremac y 1 Pravaz (2024), habilitados 
              para contenedores de 20 y 40 pies en operaciones de comercio exterior, 
              logística portuaria e industrial.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Operamos regularmente desde el Puerto de Iquique hacia faenas en 
              Tarapacá y Antofagasta, coordinando con agentes de aduana y operadores logísticos.
            </p>
          </div>
          <div className="w-48 h-48 bg-slate-50 rounded-full border border-gray-100 flex items-center justify-center flex-shrink-0 shadow-inner">
            <Anchor className="w-20 h-20 text-yellow opacity-50" />
          </div>
        </div>

        <div className="bg-darker rounded-[2.5rem] p-10 sm:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-brand/5"></div>
          <h3 className="relative z-10 text-2xl font-title font-bold text-white mb-8 flex items-center gap-4">
            <div className="w-3 h-3 bg-brand rounded-full"></div>
            Servicios Incluidos en la Operación
          </h3>
          <div className="relative z-10 grid sm:grid-cols-2 gap-6">
            {[
              'Retiro de contenedor en puerto',
              'Traslado a destino en faena o bodega',
              'Devolución de contenedor vacío al depósito',
              'Coordinación directa con agente de aduana',
              'Gestión de documentación de tránsito'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <CheckCircle className="w-6 h-6 text-brand flex-shrink-0" />
                <span className="text-gray-200 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
