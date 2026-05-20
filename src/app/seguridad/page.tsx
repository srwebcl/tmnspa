import SafetySection from "@/components/sections/SafetySection";
import PageHeader from "@/components/layout/PageHeader";

export default function SeguridadPage() {
  return (
    <main className="min-h-screen bg-darker">
      <PageHeader 
        title="Cultura de Seguridad" 
        subtitle="Nuestra prioridad número uno en cada operación. Estándares mineros, tecnología preventiva y monitoreo constante."
        imagePath="/images/portfolio/img-68.jpeg"
        breadcrumbs={[{ label: "Seguridad", href: "/seguridad" }]}
      />
      <SafetySection />
    </main>
  );
}
