import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
            <span className="text-amber-200">Hi, I'm Will</span>
            <span className="sr-only">陈丹颐</span>
          </h1>
          <p className="text-lg text-amber-100/70 mb-8">
            Danyi Chen | 陈丹颐
          </p>
          <h2 className="text-xl text-amber-100/80 mb-8">
            PhD Candidate in Mechanical Engineering @ Duke University
          </h2>
          <p className="text-lg text-amber-100/70 mb-8">
            Robotics • Medical Devices • Machine Learning
          </p>
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 rounded-xl font-bold bg-[#849483] text-white hover:bg-[#AAB8A7] transition-colors"
          >
            About Me
          </Link>
        </div>
        <div className="md:w-2/5">
          {/* Optimized image with proper sizing and modern format */}
          <div className="relative h-64 w-64 md:h-80 md:w-80 mx-auto rounded-3xl overflow-hidden">
            <Image
              src="/will-chen.jpg"
              alt="Will Chen"
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
        <h2 className="text-2xl font-bold mb-8 text-amber-200">Research Focus</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'Robot Design', 'Medical Robotics', 'Ultrasound', 'Control Systems',
            'Machine Learning', 'Experimental Design', 'Mechanical Design', 'ROS2'
          ].map((skill) => (
            <div key={skill} className="card">
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="my-20">
        <h2 className="text-2xl font-bold mb-6 text-amber-200">News</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card overflow-hidden flex flex-col justify-between h-full !p-0">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-3 text-amber-200">New paper published!</h3>
              <p className="text-amber-100/90 mb-4">
                "Design and Evaluation of a Compliant Quasi-Direct Drive End-Effector for Safe Robotic Ultrasound Imaging" published in IEEE Transactions on Medical Robotics and Bionics. (June 2026)
              </p>
            </div>
            
            <div className="px-6 pb-6 pt-4 border-t border-white/5 bg-custom-brown/20 flex flex-wrap items-center justify-between gap-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                <a 
                  href="http://dx.doi.org/10.1109/TMRB.2026.3699216"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 border border-amber-500/20 transition-all hover:scale-105 shadow-sm"
                  title="Access Publication Paper"
                >
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Paper
                </a>
                <a 
                  href="/Design_of_a_Compliant_Quasi_Direct_drive_End_Effector_for_Robotic_Ultrasound_Imaging.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-rose-500/10 text-rose-200 hover:bg-rose-500/20 border border-rose-500/20 transition-all hover:scale-105 shadow-sm"
                  title="View PDF Document"
                >
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  PDF
                </a>
              </div>
              
              <Link
                href="/about#publications"
                className="text-amber-300 hover:underline text-sm font-medium ml-auto"
              >
                All Publications →
              </Link>
            </div>
          </div>

          <div className="card overflow-hidden flex flex-col justify-between h-full !p-0">
            <div className="p-6 flex-grow">
              <h3 className="text-xl font-bold mb-3 text-amber-200">New co-authored paper published!</h3>
              <p className="text-amber-100/90 mb-4">
                "Insufflatable Modular Abdominal Simulation Environment (MASE) for Surgical Training Simulation" published in Surgical Innovation. (May 2026)
              </p>
            </div>
            
            <div className="px-6 pb-6 pt-4 border-t border-white/5 bg-custom-brown/20 flex flex-wrap items-center justify-between gap-4 mt-auto">
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://journals.sagepub.com/doi/abs/10.1177/15533506261451391"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 border border-amber-500/20 transition-all hover:scale-105 shadow-sm"
                  title="Access Publication Paper"
                >
                  <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Paper
                </a>
              </div>
              
              <Link
                href="/about#publications"
                className="text-amber-300 hover:underline text-sm font-medium ml-auto"
              >
                All Publications →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Minimalist Version */}

    </div>
  )
}