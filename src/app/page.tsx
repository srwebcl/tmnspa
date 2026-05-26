import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <HeroSection />
      <ClientsSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ContactSection />
    </main>
  );
}
