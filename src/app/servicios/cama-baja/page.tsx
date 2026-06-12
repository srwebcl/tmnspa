import ServiceLandingLayout from "@/components/layout/ServiceLandingLayout";
import { CheckCircle } from "lucide-react";

export default function CamaBajaPage() {
  return (
    <ServiceLandingLayout
      title="Cama Baja para Maquinaria Pesada y Minería" 
      subtitle="Movilización eficiente y segura de maquinaria pesada, excavadoras y grúas de gran tonelaje hacia las faenas más remotas."
      imagePath="/images/portfolio/img-66.jpeg"
      breadcrumbs={[
        { label: "Servicios", href: "/servicios" },
        { label: "Cama Baja", href: "/servicios/cama-baja" }
      ]}
    >
      <div className="prose prose-lg prose-invert max-w-4xl mx-auto text-center mb-20 mt-8">
        <p className="text-xl font-light leading-relaxed text-gray-300">
          Trasladamos los equipos colosales que hacen funcionar la minería y la industria pesada nacional: excavadoras, 
          cargadores frontales, perforadoras, grúas y maquinaria especializada 
          de cualquier fabricante.
        </p>
        <p className="text-xl font-light text-gray-400 mt-6">
          Nuestra <strong className="text-white font-bold">cama baja Tremac 3 ejes (2022)</strong> está habilitada para cargas 
          de hasta 70 toneladas, contando con rampas de acceso reforzadas y un sistema de 
          amarre completamente certificado.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-[#071324]/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/5 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
            <div className="w-10 h-1 bg-yellow rounded-full shadow-[0_0_10px_rgba(255,106,0,0.5)]" />
            Equipos Frecuentes
          </h3>
          <ul className="space-y-5">
            {['Excavadoras Komatsu PC series', 'Cargadores frontales CAT y Komatsu', 'Perforadoras de minería a cielo abierto', 'Grúas telescópicas industriales', 'Camiones de extracción fuera de carretera'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 group-hover:bg-brand group-hover:scale-110 transition-all">
                  <CheckCircle className="w-4 h-4 text-brandLight group-hover:text-white" />
                </div>
                <span className="font-light text-gray-300 group-hover:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-darker to-[#0a1b35] p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[80px] pointer-events-none" />
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4 relative z-10">
            <div className="w-10 h-1 bg-brandLight rounded-full shadow-[0_0_10px_rgba(0,87,255,0.5)]" />
            Proceso Operativo
          </h3>
          <div className="space-y-6 relative z-10">
            {[
              'Revisión técnica del equipo a trasladar', 
              'Estudio topográfico de ruta y permisos especiales', 
              'Carga supervisada por nuestro equipo de ingenieros', 
              'Traslado con vehículos de escolta reglamentarios', 
              'Descarga y entrega puntual en faena'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl shadow-sm hover:border-brand/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-brand text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-[0_0_15px_rgba(0,87,255,0.4)]">
                  {i + 1}
                </div>
                <span className="font-light text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceLandingLayout>
  );
}
