import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    id: 'project-one',
    title: 'Project One',
    description: 'A fast, responsive web application built with React and Next.js.',
    detailedDescription: 'This project showcases modern web development techniques including static site generation, API integration, and responsive design.',
    image: 'https://placehold.co/800x600',
    technologies: ['React', 'Next.js', 'TailwindCSS', 'API Integration'],
    link: 'https://project-one.com',
    github: 'https://github.com/yourusername/project-one'
  },
  {
    id: 'project-two',
    title: 'Project Two',
    description: 'An e-commerce platform optimized for performance and conversion.',
    detailedDescription: 'A high-performance e-commerce solution with advanced product filtering, cart functionality, and streamlined checkout process.',
    image: 'https://placehold.co/800x600',
    technologies: ['TypeScript', 'Next.js', 'Redux', 'Stripe API'],
    link: 'https://project-two.com',
    github: 'https://github.com/yourusername/project-two'
  },
  {
    id: 'project-three',
    title: 'Project Three',
    description: 'A data visualization dashboard with real-time updates.',
    detailedDescription: 'Interactive dashboard displaying complex data sets with filtering capabilities and real-time updates via WebSockets.',
    image: 'https://placehold.co/800x600',
    technologies: ['React', 'D3.js', 'WebSockets', 'Node.js'],
    link: 'https://project-three.com',
    github: 'https://github.com/yourusername/project-three'
  },
  {
    id: 'project-four',
    title: 'Project Four',
    description: 'A progressive web app for productivity and task management.',
    detailedDescription: 'Mobile-first PWA with offline capabilities, push notifications, and synchronization across devices.',
    image: 'https://placehold.co/800x600',
    technologies: ['PWA', 'IndexedDB', 'Service Workers', 'Push API'],
    link: 'https://project-four.com',
    github: 'https://github.com/yourusername/project-four'
  }
]

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8 text-amber-200">My Projects</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div key={project.id} className="card overflow-hidden">
            <div className="relative h-60 w-full rounded-xl overflow-hidden mb-4">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-2">
              <h2 className="text-xl font-bold mb-2 text-amber-200">{project.title}</h2>
              <p className="text-amber-100/70 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-amber-900/40 text-amber-200 text-xs rounded-xl"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link 
                href={`/projects/${project.id}`} 
                className="text-amber-300 hover:underline"
              >
                View details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}