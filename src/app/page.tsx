"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SafetySection from "@/components/sections/SafetySection";
import FleetSection from "@/components/sections/FleetSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-light">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <SafetySection />
      <FleetSection />
      <ContactSection />
    </main>
  );
}
