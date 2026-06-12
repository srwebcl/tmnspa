import ServiceLandingLayout from "@/components/layout/ServiceLandingLayout";
import { CheckCircle, Network } from "lucide-react";

export default function LogisticaIntegralPage() {
  return (
    <ServiceLandingLayout
      title="Logística Integral y Transporte Especial" 
      subtitle="Más que transporte, nos convertimos en su departamento logístico externo para ejecutar operaciones de alta complejidad."
      imagePath="/images/portfolio/img-62.jpeg"
      breadcrumbs={[
        { label: "Servicios", href: "/servicios" },
        { label: "Logística Integral", href: "/servicios/logistica-integral" }
      ]}
    >
      <div className="text-center max-w-4xl mx-auto mb-20 mt-8">
        <div className="w-24 h-24 mx-auto mb-8 bg-yellow/10 rounded-3xl flex items-center justify-center border border-yellow/20 shadow-[0_0_30px_rgba(255,106,0,0.15)] rotate-3 hover:rotate-0 transition-transform duration-500">
          <Network className="w-12 h-12 text-yellow drop-shadow-md" strokeWidth={1.5} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
          Cuando la operación es crítica, necesitas más que un transportista.
        </h2>
        <p className="text-xl text-gray-300 font-light leading-relaxed">
          Necesitas un coordinador que domine la ruta, anticipe los permisos, sincronice los 
          tiempos de la faena y tenga la infraestructura de respaldo para cuando surgen imprevistos. 
          <strong className="text-brandLight font-bold"> Ese aliado estratégico somos nosotros.</strong>
        </p>
      </div>

      <div className="bg-[#071324]/60 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl mb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
        
        <h3 className="text-2xl font-bold text-white mb-12 text-center relative z-10 flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brandLight"></div>
          Nuestro Servicio Logístico 360° Incluye
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brandLight"></div>
        </h3>
        
        <div className="grid sm:grid-cols-2 gap-y-8 gap-x-12 relative z-10">
          {[
            'Planificación maestra de operaciones de transporte múltiple',
            'Sincronización de tiempos de entrega con el operador de la faena',
            'Gestión proactiva de permisos especiales (MOP y autoridades locales)',
            'Monitoreo GPS centralizado y escolta en tiempo real',
            'Informes ejecutivos de trazabilidad para el cliente final',
            'Brigada de emergencia técnica y respuesta mecánica en ruta',
            'Atención comercial directa con gerencia — cero intermediarios'
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-5 group">
              <div className="bg-brand/10 p-2 rounded-xl border border-brand/20 group-hover:bg-brand group-hover:scale-110 transition-all mt-0.5">
                <CheckCircle className="w-5 h-5 text-brandLight group-hover:text-white" />
              </div>
              <span className="font-light text-lg text-gray-300 group-hover:text-white transition-colors leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-darker to-[#0a1b35] border border-white/10 p-10 md:p-14 rounded-[3rem] text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-10 mix-blend-overlay pointer-events-none z-0" />
        <p className="text-xl md:text-2xl text-gray-300 font-light italic mb-0 relative z-10 leading-relaxed max-w-4xl mx-auto">
          &ldquo;Hemos coordinado operaciones logísticas masivas para gigantes como <span className="text-white font-bold">Komatsu</span>, <span className="text-white font-bold">SK Rental</span> y 
          otras corporaciones que exigen precisión horaria absoluta y documentación impecable.&rdquo;
        </p>
      </div>
    </ServiceLandingLayout>
  );
}
