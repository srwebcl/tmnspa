import PageHeader from "@/components/layout/PageHeader";
import { ShieldAlert, Route, FileCheck, Truck, Clock } from "lucide-react";

export default function CargaSobredimensionadaPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Transporte de Cargas Sobredimensionadas y Sobrepeso" 
        subtitle="Experiencia técnica, escolta y gestión integral de rutas complejas."
        imagePath="/images/portfolio/img-24.jpeg"
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "Carga Sobredimensionada", href: "/servicios/carga-sobredimensionada" }
        ]}
      />
      
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-relaxed">
            El transporte de cargas sobredimensionadas requiere más que un camión 
            grande. Requiere experiencia en ruta, gestión burocrática y una brigada 
            de apoyo que responda cuando algo no sale según plan.
          </p>
        </div>

        <h3 className="text-3xl font-title font-bold text-darker mb-10 text-center">Nuestro Proceso</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { icon: ShieldAlert, title: "Evaluación Técnica", desc: "Dimensiones, peso, centro de gravedad, restricciones de amarre." },
            { icon: Route, title: "Estudio de Ruta", desc: "Identificamos puentes, pendientes, cables y puntos de paso limitado." },
            { icon: FileCheck, title: "Permisos MOP", desc: "Tramitamos todos los permisos ante el Ministerio de Obras Públicas." },
            { icon: Truck, title: "Escolta Vial", desc: "Camionetas de escolta propias con señalización reglamentaria." },
            { icon: Clock, title: "Brigada 24/7", desc: "Camión grúa, cama baja de respaldo y apoyo operativo inmediato." }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:border-yellow/30 transition-colors">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-brand">
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="font-title font-bold text-xl text-darker mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-darker rounded-[2rem] p-10 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-3xl" />
          <h3 className="text-2xl font-title font-bold text-yellow mb-8 relative z-10">Equipos Especializados Disponibles</h3>
          <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
            {['Rampla rebajada Goren 2025 (cargas de gran altura)', 'Cama baja Tremac 3 ejes 2022', 'Ramplas 3 ejes Tremac 2023 — 3 unidades', 'Tractocamiones 6x4 Volvo FH500 (mayor tracción en pendiente)'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="w-2 h-2 rounded-full bg-brand flex-shrink-0" />
                <span className="font-medium text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
