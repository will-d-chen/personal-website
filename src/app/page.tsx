import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Hi, I'm <span className="text-amber-200">Your Name</span>
          </h1>
          <h2 className="text-xl text-amber-100/80 mb-6">
            Web Developer & Designer
          </h2>
          <p className="text-lg text-amber-100/70 mb-8">
            I build high-performance websites and applications with modern technologies.
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/projects" 
              className="px-4 py-2 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-200"
            >
              View Projects
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 border border-amber-400/30 font-medium rounded-xl hover:bg-amber-900/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-200"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="md:w-2/5">
          {/* Optimized image with proper sizing and modern format */}
          <div className="relative h-64 w-64 md:h-80 md:w-80 mx-auto rounded-full overflow-hidden">
            <Image
              src="https://placehold.co/400x400"
              alt="Your Name"
              fill
              sizes="(max-width: 768px) 256px, 320px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="my-20">
        <h2 className="text-2xl font-bold mb-8 text-amber-200">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'JavaScript', 'TypeScript', 'React', 'Next.js',
            'TailwindCSS', 'Node.js', 'GraphQL', 'SQL'
          ].map((skill) => (
            <div key={skill} className="card">
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="my-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-amber-200">Featured Projects</h2>
          <Link href="/projects" className="text-amber-300 hover:underline">
            View all
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Project One',
              description: 'A fast, responsive web application built with React and Next.js.',
              image: 'https://placehold.co/600x400',
              link: '/projects/project-one'
            },
            {
              title: 'Project Two',
              description: 'An e-commerce platform optimized for performance and conversion.',
              image: 'https://placehold.co/600x400',
              link: '/projects/project-two'
            }
          ].map((project) => (
            <div key={project.title} className="card overflow-hidden">
              <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xl font-bold mb-2 text-amber-200">{project.title}</h3>
                <p className="text-amber-100/70 mb-4">{project.description}</p>
                <Link 
                  href={project.link} 
                  className="text-amber-300 hover:underline"
                >
                  View details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}