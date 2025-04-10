import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://yourwebsite.com'
  
  // Projects for sitemap
  const projects = [
    { id: 'project-one' },
    { id: 'project-two' },
    { id: 'project-three' },
    { id: 'project-four' },
  ]
  
  // Base pages
  const routes = ['', '/about', '/projects', '/contact'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
  
  // Project pages
  const projectRoutes = projects.map(project => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...routes, ...projectRoutes]
}