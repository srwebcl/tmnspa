import ServiceLandingLayout from "@/components/layout/ServiceLandingLayout";
import { CheckCircle, Anchor } from "lucide-react";

export default function PortacontenedoresPage() {
  return (
    <ServiceLandingLayout
      title="Portacontenedores 20 y 40 Pies — Norte de Chile" 
      subtitle="Conectamos el puerto marítimo directamente con su faena o bodega, asegurando la continuidad ininterrumpida de su cadena de suministro."
      imagePath="/images/portfolio/img-51.jpeg"
      breadcrumbs={[
        { label: "Servicios", href: "/servicios" },
        { label: "Portacontenedores", href: "/servicios/portacontenedores" }
      ]}
    >
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-20 mt-8">
        <div className="flex-1 prose prose-lg prose-invert">
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Contamos con 4 portacontenedores Tremac y 1 Pravaz (2024), habilitados legal y técnicamente 
            para movilizar contenedores de 20 y 40 pies en complejas operaciones de comercio exterior, 
            logística portuaria y abastecimiento industrial.
          </p>
          <p className="text-lg text-gray-400 font-light leading-relaxed mt-6">
            Operamos rutas regulares y prioritarias desde el Puerto de Iquique hacia las faenas ubicadas en las regiones de 
            Tarapacá y Antofagasta, coordinando en tiempo real con agentes de aduana y grandes operadores logísticos.
          </p>
        </div>
        <div className="w-64 h-64 bg-brand/5 rounded-full border border-brand/20 flex items-center justify-center flex-shrink-0 shadow-[0_0_50px_rgba(0,87,255,0.1)] relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent rounded-full animate-pulse" />
          <Anchor className="w-24 h-24 text-brandLight relative z-10 drop-shadow-[0_0_15px_rgba(0,87,255,0.5)]" />
        </div>
      </div>

      <div className="bg-[#071324]/60 backdrop-blur-2xl rounded-[3rem] p-10 sm:p-16 relative overflow-hidden shadow-2xl border border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow/5 rounded-full blur-[100px] pointer-events-none" />
        
        <h3 className="relative z-10 text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <div className="w-4 h-4 bg-yellow rounded-full shadow-[0_0_10px_rgba(255,106,0,0.8)] animate-pulse"></div>
          Servicios Incluidos en la Operación Portuaria
        </h3>
        
        <div className="relative z-10 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {[
            'Retiro ágil de contenedor en puerto',
            'Traslado seguro a destino en faena o bodega',
            'Devolución oportuna de contenedor vacío al depósito',
            'Coordinación directa con el agente de aduana designado',
            'Gestión completa de documentación de tránsito'
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-brand/10 hover:border-brand/30 transition-all duration-300 group shadow-lg">
              <div className="bg-brand/20 p-2 rounded-xl group-hover:bg-brand transition-colors">
                <CheckCircle className="w-6 h-6 text-brandLight group-hover:text-white" />
              </div>
              <span className="text-gray-200 font-light text-lg leading-relaxed group-hover:text-white transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </ServiceLandingLayout>
  );
}
