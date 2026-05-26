import ServicesSection from "@/components/sections/ServicesSection";
import PageHeader from "@/components/layout/PageHeader";

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader 
        title="Nuestros Servicios" 
        subtitle="Soluciones logísticas integrales adaptadas a las exigencias de la minería y la industria nacional."
        imagePath="/images/portfolio/img-50.jpeg"
        breadcrumbs={[{ label: "Servicios", href: "/servicios" }]}
      />
      <ServicesSection hideHeader={true} />
    </main>
  );
}
