import ContactSection from "@/components/sections/ContactSection";
import PageHeader from "@/components/layout/PageHeader";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <PageHeader 
        title="Contacto" 
        subtitle="Estamos listos para evaluar sus requerimientos logísticos. Nuestro equipo opera 24/7 en todo el Norte Grande."
        imagePath="/images/portfolio/img-49.jpeg"
        breadcrumbs={[{ label: "Contacto", href: "/contacto" }]}
      />
      <ContactSection showInfo={true} />
    </main>
  );
}
