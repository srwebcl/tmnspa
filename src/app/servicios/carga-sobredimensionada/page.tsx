import ServiceLandingLayout from "@/components/layout/ServiceLandingLayout";
import { ShieldAlert, Route, FileCheck, Truck, Clock } from "lucide-react";

export default function CargaSobredimensionadaPage() {
  return (
    <ServiceLandingLayout
      title="Cargas Sobredimensionadas y Sobrepeso" 
      subtitle="Experiencia técnica, escolta profesional y gestión integral de rutas complejas para piezas monumentales."
      imagePath="/images/portfolio/img-24.jpeg"
      breadcrumbs={[
        { label: "Servicios", href: "/servicios" },
        { label: "Carga Sobredimensionada", href: "/servicios/carga-sobredimensionada" }
      ]}
    >
      <div className="text-center max-w-4xl mx-auto mb-16 mt-8">
        <p className="text-xl text-gray-300 font-light leading-relaxed">
          El transporte de cargas sobredimensionadas requiere mucho más que un camión grande. Requiere experiencia milimétrica en ruta, gestión burocrática impecable y una brigada de apoyo que responda inmediatamente cuando surgen imprevistos.
        </p>
      </div>

      <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">Metodología y Proceso Operativo</h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {[
          { icon: ShieldAlert, title: "Evaluación Técnica", desc: "Análisis de dimensiones, peso, centro de gravedad y restricciones de amarre.", theme: "yellow" },
          { icon: Route, title: "Estudio de Ruta", desc: "Identificamos puentes, pendientes, altura de cables y puntos de paso limitado.", theme: "brand" },
          { icon: FileCheck, title: "Permisos MOP", desc: "Tramitamos y gestionamos todos los permisos ante el Ministerio de Obras Públicas.", theme: "yellow" },
          { icon: Truck, title: "Escolta Vial", desc: "Vehículos de escolta propios equipados con señalización y balizas reglamentarias.", theme: "brand" },
          { icon: Clock, title: "Brigada 24/7", desc: "Camión grúa, cama baja de respaldo y equipo de apoyo operativo inmediato.", theme: "yellow" }
        ].map((item, idx) => {
          const isBrand = item.theme === "brand";
          return (
            <div key={idx} className={`bg-[#071324]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg transition-all duration-300 group ${isBrand ? 'hover:border-brand/40' : 'hover:border-yellow/40'}`}>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md border transition-colors ${isBrand ? 'bg-brand/10 border-brand/20 text-brandLight group-hover:bg-brand group-hover:text-white' : 'bg-yellow/10 border-yellow/20 text-yellow group-hover:bg-yellow group-hover:text-white'}`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="font-bold text-xl text-white mb-3">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-darker to-[#0a1b35] rounded-[2.5rem] p-10 md:p-16 text-white relative overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px] pointer-events-none" />
        <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Equipos Especializados Disponibles</h3>
        <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
          {['Rampla rebajada Goren 2025 (cargas de gran altura)', 'Cama baja Tremac 3 ejes 2022', 'Ramplas 3 ejes Tremac 2023 — 3 unidades', 'Tractocamiones 6x4 Volvo FH500 (mayor tracción en pendiente)'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-brand/30 transition-colors">
              <div className="w-2 h-2 rounded-full bg-brandLight flex-shrink-0" />
              <span className="font-light text-gray-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </ServiceLandingLayout>
  );
}
