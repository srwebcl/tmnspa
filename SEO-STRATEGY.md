# SEO Strategy — TMN SpA
## Transportes Mineros del Norte SpA

> Estrategia SEO local y técnica para posicionamiento en el norte de Chile (Tarapacá, Antofagasta, Atacama).

---

## 1. Investigación de Keywords

### 1.1 Keywords Primarias (Alto volumen, Alta intención comercial)

| Keyword | Intención | Competencia | Prioridad |
|---|---|---|---|
| transporte minero norte de Chile | Comercial | Media | ★★★★★ |
| empresa de transporte Iquique | Comercial | Media | ★★★★★ |
| transporte de carga minera Tarapacá | Comercial | Baja | ★★★★★ |
| carga sobredimensionada norte Chile | Comercial | Baja | ★★★★★ |
| transporte minero Antofagasta | Comercial | Media | ★★★★ |
| transporte carga granel Iquique | Comercial | Baja | ★★★★ |

### 1.2 Keywords Secundarias (Long tail, alta conversión)

| Keyword | Página Target |
|---|---|
| transporte bateas concentrado cobre Iquique | /servicios/transporte-granel |
| cama baja maquinaria minera Tarapacá | /servicios/cama-baja |
| portacontenedores 40 pies norte Chile | /servicios/portacontenedores |
| transporte ácido sulfúrico minería Chile | /servicios/transporte-liquidos |
| permisos MOP carga sobredimensionada | /servicios/carga-sobredimensionada |
| empresa transporte COSAYACH proveedor | /nosotros |
| flota Volvo FH500 transporte minero | /flota |
| transporte minero Pozo Almonte | /contacto |

### 1.3 Keywords de Marca

- tmn spa
- transportes mineros del norte
- tmn transporte iquique
- tmnspa.cl

### 1.4 Keywords por Zona Geográfica

**Tarapacá:**
- transporte minero Iquique
- empresa transporte Pozo Almonte
- transporte carga Colchane
- logística minera Alto Hospicio

**Antofagasta:**
- transporte minero Calama
- empresa transporte Antofagasta
- logística Atacama

**Rutas mineras específicas:**
- transporte ruta A-16 Collahuasi
- transporte Quebrada Blanca
- transporte Salar Atacama
- transporte Lagunas minería

---

## 2. On-Page SEO

### 2.1 Estructura de Metadata por Página

#### Home (`/`)
```
title: "TMN SpA | Transporte Minero Norte de Chile — Iquique"
description: "Transportes Mineros del Norte SpA: +20 años en logística minera e industrial en el Norte Grande de Chile. Flota moderna, operación 24/7, cobertura Tarapacá y Antofagasta."
```

#### Servicios (`/servicios`)
```
title: "Servicios de Transporte Minero | TMN SpA — Norte de Chile"
description: "Transporte a granel, carga sobredimensionada, cama baja, portacontenedores y logística integral para la industria minera del norte de Chile."
```

#### Transporte Granel (`/servicios/transporte-granel`)
```
title: "Transporte de Carga a Granel en Bateas | TMN SpA Iquique"
description: "Transporte de sales, áridos, concentrados y óxidos de cobre en bateas 20m³. Servicio especializado para mineras Tarapacá y Antofagasta. Flota Randon y Tremac."
```

#### Carga Sobredimensionada (`/servicios/carga-sobredimensionada`)
```
title: "Transporte Carga Sobredimensionada Norte Chile | TMN SpA"
description: "Transporte de cargas sobredimensionadas y sobrepeso con gestión de permisos MOP. Estudios de ruta, escolta y brigada de emergencia 24/7 en el norte de Chile."
```

#### Contacto (`/contacto`)
```
title: "Contacto TMN SpA — Transporte Minero Iquique | Cotizar"
description: "Contacta a Transportes Mineros del Norte SpA en Iquique. Solicita cotización para transporte minero, carga especial o logística integral. Respuesta inmediata."
```

### 2.2 Estructura de Encabezados (H1-H6)

**Reglas:**
- **H1**: Único por página, incluye keyword primaria + ubicación
- **H2**: Secciones principales de contenido
- **H3**: Subsecciones, beneficios, servicios específicos
- **H4-H6**: Detalles técnicos, tablas, listas

**Ejemplo Home:**
```
H1: Transporte Minero del Norte de Chile
H2: Nuestros Servicios de Transporte
  H3: Transporte a Granel
  H3: Carga Sobredimensionada
  H3: Transporte de Líquidos
H2: Por Qué Elegir TMN SpA
H2: Nuestra Flota
H2: Clientes que Confían en Nosotros
H2: Contáctenos
```

### 2.3 Optimización de Imágenes

```html
<!-- Formato recomendado -->
<Image
  src="/images/fleet/volvo-fh500-tmn.webp"
  alt="Tractocamión Volvo FH500 de TMN SpA en faena minera Tarapacá"
  width={1200}
  height={800}
  loading="lazy"    <!-- excepto hero: eager -->
  placeholder="blur"
/>
```

**Nombrado de archivos:**
- `transporte-carga-granel-iquique.webp`
- `cama-baja-maquinaria-minera-tarapaca.webp`
- `flota-volvo-fh500-tmn-spa.webp`

---

## 3. SEO Técnico

### 3.1 Core Web Vitals — Objetivos

| Métrica | Objetivo | Estrategia |
|---|---|---|
| LCP | < 2.5s | next/image, CDN Vercel Edge |
| FID / INP | < 100ms | Code splitting, Suspense |
| CLS | < 0.1 | Reservar dimensiones img, no layout shift |
| TTFB | < 800ms | ISR/SSG donde posible |

### 3.2 Rendering Strategy

```
/ (Home)           → SSG + ISR (revalidate: 3600)
/nosotros          → SSG
/servicios/*       → SSG (contenido estático)
/flota             → SSG + ISR (si BD dinámica)
/portafolio        → ISR (revalidate: 86400)
/contacto          → Client Component (formulario)
/api/contact       → Route Handler (server-side email)
```

### 3.3 Sitemap Dinámico (`src/app/sitemap.ts`)

```typescript
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tmnspa.cl'
  
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/nosotros`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/servicios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/servicios/transporte-granel`, priority: 0.9 },
    { url: `${baseUrl}/servicios/carga-sobredimensionada`, priority: 0.9 },
    { url: `${baseUrl}/servicios/transporte-liquidos`, priority: 0.8 },
    { url: `${baseUrl}/servicios/cama-baja`, priority: 0.8 },
    { url: `${baseUrl}/servicios/portacontenedores`, priority: 0.7 },
    { url: `${baseUrl}/servicios/logistica-integral`, priority: 0.7 },
    { url: `${baseUrl}/flota`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/seguridad`, priority: 0.6 },
    { url: `${baseUrl}/portafolio`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contacto`, priority: 0.8 },
  ]
}
```

### 3.4 Robots.txt (`src/app/robots.ts`)

```typescript
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://tmnspa.cl/sitemap.xml',
  }
}
```

### 3.5 Open Graph & Social

```typescript
// src/lib/metadata.ts
export const defaultMetadata = {
  metadataBase: new URL('https://tmnspa.cl'),
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'TMN SpA — Transportes Mineros del Norte',
    images: [{
      url: '/og/tmn-og-default.jpg',
      width: 1200,
      height: 630,
      alt: 'TMN SpA — Transporte Minero Norte de Chile',
    }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

---

## 4. SEO Local

### 4.1 Schema JSON-LD — LocalBusiness

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TransportationCompany"],
  "@id": "https://tmnspa.cl/#business",
  "name": "Transportes Mineros del Norte SpA",
  "alternateName": "TMN SpA",
  "url": "https://tmnspa.cl",
  "logo": "https://tmnspa.cl/images/logo/tmn-logo-color.svg",
  "image": "https://tmnspa.cl/og/tmn-og-default.jpg",
  "description": "Empresa de transporte y logística minera con más de 20 años de experiencia en el norte de Chile. Especialistas en transporte de carga para la industria minera e industrial de Tarapacá y Antofagasta.",
  "foundingDate": "2004",
  "taxID": "77.178.217-5",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bernardo O'Higgins 1426",
    "addressLocality": "Iquique",
    "addressRegion": "Tarapacá",
    "postalCode": "1100000",
    "addressCountry": "CL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -20.2133,
    "longitude": -70.1503
  },
  "telephone": "+56933162517",
  "email": "ivette.m@tmnspa.com",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "areaServed": [
    { "@type": "State", "name": "Tarapacá" },
    { "@type": "State", "name": "Antofagasta" },
    { "@type": "State", "name": "Atacama" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servicios de Transporte",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transporte de Carga a Granel" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transporte Carga Sobredimensionada" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transporte de Líquidos Industriales" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Servicio Cama Baja" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Portacontenedores" } }
    ]
  },
  "sameAs": [
    "https://www.linkedin.com/company/tmnspa",
    "https://www.instagram.com/tmnspa"
  ]
}
```

### 4.2 Checklist Google Business Profile

- [ ] Nombre exacto: "Transportes Mineros del Norte SpA"
- [ ] Categoría principal: "Empresa de transporte de carga"
- [ ] Categorías secundarias: "Empresa de logística", "Servicio de transporte industrial"
- [ ] Dirección: Bernardo O'Higgins 1426, Iquique, Tarapacá, Chile
- [ ] Teléfono: +56 933162517
- [ ] Sitio web: https://tmnspa.cl
- [ ] Horario: 24 horas, 365 días
- [ ] Descripción (750 chars con keywords)
- [ ] Fotos: logo, flota, equipo, instalaciones (mínimo 20)
- [ ] Atributos: "Identifica como empresa local", "Tiene estacionamiento"
- [ ] Posts regulares (1/semana mínimo)
- [ ] Responder todas las reseñas

### 4.3 NAP Consistency (Name, Address, Phone)

Usar **exactamente** este formato en TODAS las páginas y directorios:

```
Transportes Mineros del Norte SpA
Bernardo O'Higgins 1426, Iquique, Tarapacá, Chile
+56 933162517
ivette.m@tmnspa.com
```

### 4.4 Directorios Locales Prioritarios

| Directorio | URL | Prioridad |
|---|---|---|
| Google Business Profile | business.google.com | ★★★★★ |
| Páginas Amarillas Chile | amarillas.cl | ★★★★ |
| Yelp Chile | yelp.cl | ★★★ |
| Kompass Chile | cl.kompass.com | ★★★★ |
| Empresa.cl | empresa.cl | ★★★ |
| LinkedIn Company | linkedin.com | ★★★★ |

---

## 5. Content Strategy

### 5.1 Content Calendar (Blog/Noticias — Opcional Fase 2)

| Mes | Tema | Keywords Target |
|---|---|---|
| Ene | Normativa transporte carga sobredimensionada Chile 2026 | normativa MOP carga especial |
| Feb | ¿Qué es el transporte a granel en minería? | transporte granel minería |
| Mar | Seguridad vial en rutas mineras del norte | seguridad transporte minero |
| Abr | Cómo elegir una empresa de transporte para tu mina | contratar transporte minero |
| May | Tecnología GPS y monitoreo en transporte minero | GPS monitoreo transporte |
| Jun | Flota Volvo FH500: por qué la usamos en minería | Volvo FH500 minería Chile |

### 5.2 Link Building Estratégico

- **Proveedores**: Solicitar mención en sitios de COSAYACH, Quiborax, Salar Albemarle
- **Asociaciones gremiales**: Registro en CAMIONEROS, ASOEX logística
- **Prensa regional**: El Nortino, La Estrella de Iquique
- **LinkedIn**: Artículos sobre logística minera, compartidos por equipo

---

## 6. Monitoreo y KPIs

### 6.1 Herramientas

- **Google Search Console** — Indexación, clicks, impresiones
- **Google Analytics 4** — Tráfico, conversiones, comportamiento
- **Vercel Analytics** — Core Web Vitals en producción
- **Ahrefs / Semrush** (opcional) — Backlinks, keywords tracking

### 6.2 KPIs Mensuales

| KPI | Objetivo 3 meses | Objetivo 6 meses |
|---|---|---|
| Posición media keywords primarias | Top 20 | Top 10 |
| Tráfico orgánico mensual | 200 sesiones | 500 sesiones |
| Conversiones formulario/mes | 3 leads | 10 leads |
| Core Web Vitals: LCP | < 2.5s | < 2.0s |
| Impresiones Search Console | 5.000/mes | 15.000/mes |

---

*Última actualización: Mayo 2026 — Versión 1.0*
