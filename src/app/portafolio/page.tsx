import PageHeader from "@/components/layout/PageHeader";
import PortfolioGallery from "@/components/sections/PortfolioGallery";

export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader 
        title="Portafolio de Operaciones" 
        subtitle="Operaciones reales, en faenas reales, para clientes que exigen resultados. Conozca el trabajo de TMN SpA en terreno."
        imagePath="/images/portfolio/img-61.jpeg"
        breadcrumbs={[{ label: "Portafolio", href: "/portafolio" }]}
      />
      <PortfolioGallery />
    </main>
  );
}
