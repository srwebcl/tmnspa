import ServiceLandingLayout from "@/components/layout/ServiceLandingLayout";
import { CheckCircle, ShieldAlert } from "lucide-react";

export default function TransporteLiquidosPage() {
  return (
    <ServiceLandingLayout
      title="Transporte de Líquidos Industriales para Minería" 
      subtitle="Manejo especializado de sustancias peligrosas bajo estricta normativa vigente y máximo estándar de seguridad ambiental."
      imagePath="/images/portfolio/img-40.jpeg"
      breadcrumbs={[
        { label: "Servicios", href: "/servicios" },
        { label: "Transporte de Líquidos", href: "/servicios/transporte-liquidos" }
      ]}
    >
      <div className="bg-yellow/10 border border-yellow/20 p-8 rounded-3xl mb-16 flex flex-col md:flex-row gap-6 items-center md:items-start shadow-[0_0_30px_rgba(255,106,0,0.1)] backdrop-blur-md mt-8">
        <div className="w-16 h-16 bg-yellow/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-yellow/30">
          <ShieldAlert className="w-8 h-8 text-yellow" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Máxima Responsabilidad Ambiental</h3>
          <p className="text-gray-300 font-light text-lg leading-relaxed">
            El transporte de ácido sulfúrico, agua industrial y diésel en faenas 
            mineras requiere certificación impecable, equipos con mantención estricta y conductores 
            entrenados rigurosamente en el manejo de mercancías peligrosas.
          </p>
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto mb-16">
        <p className="text-xl text-gray-300 font-light leading-relaxed">
          En TMN SpA operamos con cisternas acondicionadas y certificadas para 
          cada tipo específico de líquido, con protocolos de seguridad de emergencia que cumplen y superan la 
          normativa vigente del Ministerio de Transportes y Telecomunicaciones.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#071324]/60 backdrop-blur-xl p-8 rounded-3xl border border-white/5 shadow-lg hover:border-brand/30 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-white mb-8">Líquidos que Transportamos</h3>
          <ul className="space-y-6">
            {['Ácido sulfúrico (H₂SO₄) — uso en procesos de lixiviación', 'Agua industrial para faenas mineras', 'Diésel y combustibles industriales'].map((item, i) => (
              <li key={i} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 group-hover:bg-brand group-hover:scale-110 transition-all">
                  <CheckCircle className="w-5 h-5 text-brandLight group-hover:text-white" />
                </div>
                <span className="font-light text-lg text-gray-300 group-hover:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-darker to-[#0a1b35] p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow/10 rounded-full blur-[80px] pointer-events-none" />
          <h3 className="text-2xl font-bold text-yellow mb-8 relative z-10">Estándares Operativos Críticos</h3>
          <ul className="space-y-6 relative z-10">
            {['Documentación RETIQ permanentemente actualizada', 'Conductores con licencia especial y capacitación activa en materiales peligrosos', 'Equipos de contención primaria y respuesta rápida a derrames en ruta', 'Protocolos de notificación a autoridades según normativa ambiental'].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2.5 bg-yellow rounded-full flex-shrink-0 shadow-[0_0_10px_rgba(255,106,0,0.8)]" />
                <span className="font-light text-gray-300 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ServiceLandingLayout>
  );
}
