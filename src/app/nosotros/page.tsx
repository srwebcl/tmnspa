import AboutSection from "@/components/sections/AboutSection";
import PageHeader from "@/components/layout/PageHeader";

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-light">
      <PageHeader 
        title="Quiénes Somos" 
        subtitle="Conozca nuestra historia, misión y los valores que nos impulsan a ser líderes en el transporte logístico del Norte de Chile."
        imagePath="/images/portfolio/img-47.jpeg"
        breadcrumbs={[{ label: "Quiénes Somos", href: "/nosotros" }]}
      />
      <AboutSection />
    </main>
  );
}
