import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tmnspa.com'
  
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
