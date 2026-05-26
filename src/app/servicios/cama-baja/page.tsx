import PageHeader from "@/components/layout/PageHeader";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CamaBajaPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Cama Baja para Maquinaria Pesada y Equipos de Minería" 
        subtitle="Movilización eficiente de maquinaria pesada, excavadoras y grúas de gran tonelaje."
        imagePath="/images/portfolio/img-66.jpeg"
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "Cama Baja", href: "/servicios/cama-baja" }
        ]}
      />
      
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        <div className="prose prose-lg prose-brand max-w-none text-gray-600 mb-16">
          <p className="text-xl leading-relaxed mb-6">
            Trasladamos los equipos que hacen funcionar la minería y la industria pesada: excavadoras, 
            cargadores frontales, perforadoras, grúas y maquinaria especializada 
            de cualquier fabricante.
          </p>
          <p>
            Nuestra <strong className="text-darker">cama baja Tremac 3 ejes (2022)</strong> está habilitada para cargas 
            de hasta 70 toneladas y cuenta con rampas de acceso y sistema de 
            amarre certificado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-title font-bold text-darker mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-yellow rounded-full" />
              Equipos que hemos trasladado
            </h3>
            <ul className="space-y-4 bg-slate-50 p-8 rounded-3xl border border-gray-100">
              {['Excavadoras Komatsu PC series', 'Cargadores frontales CAT y Komatsu', 'Perforadoras de minería a cielo abierto', 'Grúas telescópicas industriales', 'Camiones de extracción fuera de carretera'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-brand flex-shrink-0" />
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-title font-bold text-darker mb-6 flex items-center gap-3">
              <div className="w-8 h-1 bg-brand rounded-full" />
              Proceso Operativo
            </h3>
            <div className="space-y-4">
              {[
                'Revisión técnica del equipo a trasladar', 
                'Estudio de ruta y permisos si aplica', 
                'Carga supervisada por nuestro equipo', 
                'Traslado con escolta cuando se requiere', 
                'Descarga y entrega en faena'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-darker text-yellow flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-darker hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Cotizar Traslado <ArrowRight className="w-5 h-5 text-yellow" />
          </Link>
        </div>
      </section>
    </main>
  );
}
