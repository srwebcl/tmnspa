import FleetSection from "@/components/sections/FleetSection";
import PageHeader from "@/components/layout/PageHeader";

export default function FlotaPage() {
  return (
    <main className="min-h-screen bg-light">
      <PageHeader 
        title="Infraestructura y Flota" 
        subtitle="Equipos de última generación y semirremolques especializados para garantizar la continuidad operacional de nuestros clientes."
        imagePath="/images/portfolio/img-45.jpeg"
        breadcrumbs={[{ label: "Flota", href: "/flota" }]}
      />
      <FleetSection />
    </main>
  );
}
