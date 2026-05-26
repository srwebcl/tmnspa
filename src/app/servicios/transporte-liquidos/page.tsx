import PageHeader from "@/components/layout/PageHeader";
import { CheckCircle, ShieldAlert } from "lucide-react";

export default function TransporteLiquidosPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageHeader 
        title="Transporte de Líquidos Industriales para Minería" 
        subtitle="Manejo especializado de sustancias peligrosas bajo estricta normativa vigente."
        imagePath="/images/portfolio/img-40.jpeg"
        breadcrumbs={[
          { label: "Servicios", href: "/servicios" },
          { label: "Transporte de Líquidos", href: "/servicios/transporte-liquidos" }
        ]}
      />
      
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-body">
        <div className="bg-yellow/10 border border-yellow/30 p-6 rounded-2xl mb-12 flex gap-4 items-start">
          <ShieldAlert className="w-8 h-8 text-yellow flex-shrink-0" />
          <p className="text-gray-700 text-lg">
            El transporte de ácido sulfúrico, agua industrial y diesel en faenas 
            mineras requiere certificación, equipos especiales y conductores 
            entrenados en manejo de mercancías peligrosas.
          </p>
        </div>

        <p className="text-xl text-gray-600 leading-relaxed mb-12">
          En TMN operamos con cisternas acondicionadas y certificadas para 
          cada tipo de líquido, con protocolos de seguridad que cumplen la 
          normativa vigente del Ministerio de Transportes y Telecomunicaciones.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-title font-bold text-darker mb-6">Líquidos que Transportamos</h3>
            <ul className="space-y-4">
              {['Ácido sulfúrico (H₂SO₄) — uso en procesos de lixiviación', 'Agua industrial', 'Diesel y combustibles industriales'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-brand flex-shrink-0" />
                  <span className="font-medium text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-darker p-8 rounded-3xl border border-gray-800 text-white shadow-xl">
            <h3 className="text-2xl font-title font-bold text-yellow mb-6">Estándares Operativos</h3>
            <ul className="space-y-4">
              {['Documentación RETIQ actualizada', 'Conductores con licencia y capacitación en materiales peligrosos', 'Equipos de contención y respuesta a derrames', 'Notificación a autoridades según normativa'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-yellow rounded-full flex-shrink-0" />
                  <span className="font-medium text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
