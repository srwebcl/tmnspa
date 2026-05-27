import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Preloader from "@/components/layout/Preloader";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TMN SpA | Transporte de Carga y Logística Industrial en el Norte de Chile",
  description: "TMN SpA ofrece transporte de carga punto a punto, logística integral, camas bajas, bateas y portacontenedores para la minería y la industria en el Norte de Chile.",
  keywords: [
    "Transporte de carga", 
    "Logística industrial", 
    "Transporte minero", 
    "Cama baja", 
    "Bateas", 
    "Cargas sobredimensionadas", 
    "Norte de Chile", 
    "Iquique", 
    "Pozo Almonte", 
    "TMN SpA"
  ],
  authors: [{ name: "SRweb" }],
  creator: "SRweb",
  openGraph: {
    title: "TMN SpA | Logística y Transporte Industrial",
    description: "Especialistas en el transporte de carga y logística para la minería y la industria. Operación 24/7 en el Norte de Chile.",
    url: "https://tmnspa.cl",
    siteName: "TMN SpA",
    locale: "es_CL",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} font-body text-dark antialiased`}
      >
        <Preloader />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
