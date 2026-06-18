import Link from 'next/link'
import { projects } from './data'

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8 text-amber-200">Projects</h1>
      
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => {
          const githubUrl = project.githubUrl
          const articleUrl = project.articleUrl || (project.publications?.[0]?.articleUrl)
          const pdfUrl = project.pdfUrl || (project.publications?.[0]?.pdfUrl)
          const pdfLabel = project.pdfLabel || (project.publications?.[0]?.pdfLabel) || 'PDF'

          return (
            <div key={project.id} className="card overflow-hidden flex flex-col justify-between h-full !p-0">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-amber-200">{project.title}</h2>
                  <span className={`text-xs px-2 py-1 rounded-xl whitespace-nowrap ${
                    project.status === 'In Progress' 
                      ? 'bg-blue-900/40 text-blue-200' 
                      : project.status === 'Completed'
                      ? 'bg-green-900/40 text-green-200'
                      : 'bg-amber-900/40 text-amber-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-amber-100/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-[#849483] text-white text-xs rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="px-6 pb-6 pt-4 border-t border-white/5 bg-custom-brown/20 flex flex-wrap items-center justify-between gap-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {githubUrl && (
                    <a 
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-amber-900/40 text-amber-200 hover:bg-amber-900/60 transition-colors border border-amber-900/20"
                      title="GitHub Repository"
                    >
                      <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Code
                    </a>
                  )}
                  {articleUrl && (
                    <a 
                      href={articleUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 border border-amber-500/20 transition-all hover:scale-105 shadow-sm"
                      title="Access Publication Article"
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Paper
                    </a>
                  )}
                  {pdfUrl && (
                    <a 
                      href={pdfUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-rose-500/10 text-rose-200 hover:bg-rose-500/20 border border-rose-500/20 transition-all hover:scale-105 shadow-sm"
                      title="View PDF Document"
                    >
                      <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {pdfLabel}
                    </a>
                  )}
                </div>
                
                <Link 
                  href={`/projects/${project.id}`} 
                  className="text-amber-300 hover:underline text-sm font-medium ml-auto"
                >
                  Details →
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}