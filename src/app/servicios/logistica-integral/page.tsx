import PageHeader from "@/components/layout/PageHeader";
import { CheckCircle, Network } from "lucide-react";
import Link from "next/link";

export default function LogisticaIntegralPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Logística Integral y Coordinación de Transporte Especial" 
        subtitle="Más que transporte, somos su departamento logístico externo para operaciones complejas."
        imagePath="/images/portfolio/img-62.jpeg"
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "Logística Integral", href: "/servicios/logistica-integral" }
        ]}
      />
      
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Network className="w-16 h-16 text-yellow mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="text-3xl font-title font-bold text-darker mb-6">
            Cuando la operación es compleja, necesitas más que un transportista.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Necesitas un coordinador que conozca la ruta, los permisos, los 
            tiempos de la faena y tenga respaldo para cuando algo falla. 
            <strong className="text-darker"> Eso somos nosotros.</strong>
          </p>
        </div>

        <div className="bg-slate-50 p-10 md:p-14 rounded-[2rem] border border-gray-100 shadow-sm mb-16">
          <h3 className="text-2xl font-title font-bold text-darker mb-8 text-center">Nuestro servicio integral incluye:</h3>
          
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-8">
            {[
              'Planificación de operaciones de transporte múltiple',
              'Coordinación de tiempos con el operador de la faena',
              'Gestión de permisos especiales (MOP, etc.)',
              'Monitoreo GPS centralizado en tiempo real',
              'Informes de trazabilidad para el cliente',
              'Brigada de emergencia y respuesta en ruta',
              'Atención directa con gerencia — sin intermediarios'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-brand flex-shrink-0 mt-0.5" />
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-darker text-white p-10 rounded-[2rem] text-center shadow-xl">
          <p className="text-lg text-gray-300 italic mb-8">
            &ldquo;Hemos coordinado operaciones de traslado para Komatsu, SK Rental y 
            otras grandes empresas que requieren precisión horaria y documentación impecable.&rdquo;
          </p>
          <Link href="/contacto" className="inline-block bg-yellow hover:bg-yellow/90 text-darker font-bold px-8 py-3 rounded-full transition-colors">
            Conversemos sobre su proyecto
          </Link>
        </div>

      </section>
    </main>
  );
}
