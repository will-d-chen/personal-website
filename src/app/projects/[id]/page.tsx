import Link from 'next/link'
import { notFound } from 'next/navigation'
import ImageGallery from './ImageGallery'
import { projects } from '../data'

// Static path generation for optimal performance
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)
  
  if (!project) {
    notFound()
  }
  
  const galleryImages = [
    ...(project.mainImage ? [{
      src: project.mainImage,
      alt: `${project.title} overview`,
      caption: `${project.title} Overview`
    }] : []),
    ...(project.images || [])
  ]
  
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/projects" className="inline-flex items-center mb-8 text-amber-300 hover:underline">
        ← Projects
      </Link>
      
      <div className="card">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-amber-200">{project.title}</h1>
          <span className={`text-sm px-2.5 py-1 rounded-xl ${
            project.status === 'In Progress' 
              ? 'bg-blue-900/40 text-blue-200' 
              : project.status === 'Completed'
              ? 'bg-green-900/40 text-green-200'
              : 'bg-amber-900/40 text-amber-200'
          }`}>
            {project.status}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 bg-[#849483] text-white text-xs rounded-xl"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-amber-100/90 mb-6">{project.detailedDescription}</p>
          
          <ul className="text-amber-100/80 list-disc pl-5 space-y-2 mb-6">
            {project.keyPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          
          {project.publication && (
            <div className="mt-6 p-4 bg-amber-900/20 rounded-xl">
              <h3 className="text-lg text-amber-200 mb-2">Related Publication</h3>
              <p className="text-amber-100/90 text-sm mb-4">
                {project.publication}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.articleUrl && (
                  <a 
                    href={project.articleUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 border border-amber-500/20 transition duration-200 hover:scale-105 shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Paper
                  </a>
                )}
                {project.pdfUrl && (
                  <a 
                    href={project.pdfUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-rose-500/10 text-rose-200 hover:bg-rose-500/20 border border-rose-500/20 transition duration-200 hover:scale-105 shadow-sm"
                  >
                    <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {project.pdfLabel || 'PDF'}
                  </a>
                )}
              </div>
            </div>
          )}

          {project.publications && (
            <div className="mt-6 p-4 bg-amber-900/20 rounded-xl space-y-4">
              <h3 className="text-lg text-amber-200 mb-2">Related Publications</h3>
              {project.publications.map((pub, idx) => (
                <div key={idx} className={idx > 0 ? "pt-4 border-t border-amber-900/40" : ""}>
                  <p className="text-amber-100/90 text-sm mb-3">
                    {pub.text}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.articleUrl && (
                      <a 
                        href={pub.articleUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 border border-amber-500/20 transition duration-200 hover:scale-105 shadow-sm"
                      >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Paper
                      </a>
                    )}
                    {pub.pdfUrl && (
                      <a 
                        href={pub.pdfUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-rose-500/10 text-rose-200 hover:bg-rose-500/20 border border-rose-500/20 transition duration-200 hover:scale-105 shadow-sm"
                      >
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        {pub.pdfLabel || 'PDF'}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {project.githubUrl && (
          <div className="flex justify-start mt-8">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-3 py-1 rounded-xl bg-amber-900/40 text-amber-200 hover:bg-amber-900/60 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        )}

        {project.youtubeVideos && project.youtubeVideos.length > 0 && (
          <div className="mt-12 border-t border-white/10 pt-8">
            <h3 className="text-xl font-bold text-amber-200 mb-6 font-sans">Videos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.youtubeVideos.map((video, index) => (
                <div key={index} className="flex flex-col bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                  <div className="relative aspect-video w-full">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4 bg-custom-brown/40 backdrop-blur-sm border-t border-white/5">
                    <p className="text-amber-100/90 text-sm font-sans text-center font-medium">{video.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <ImageGallery images={galleryImages} />
      </div>
    </div>
  )
}