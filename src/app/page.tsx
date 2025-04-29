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
          </h1>
          <h2 className="text-xl text-amber-100/80 mb-8">
            PhD Student in Mechanical Engineering @ Duke University
          </h2>
          <p className="text-lg text-amber-100/70 mb-8">
            Robotics • Medical Devices • Machine Learning
          </p>
          <a 
            href="/about" 
            className="inline-flex items-center px-6 py-3 rounded-xl font-bold bg-[#849483] text-white hover:bg-[#AAB8A7] transition-colors"
          >
            About Me
          </a>
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

      {/* Current Project Section */}
      <section className="my-20">
        <h2 className="text-2xl font-bold mb-6 text-amber-200">Current Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-3 text-amber-200">Low Intensity Focused Ultrasound</h3>
            <p className="text-amber-100/90 mb-4">
              Non-invasive localized mild hyperthermia for prostate cancer treatment.
            </p>
            <Link 
              href="/projects/lifu-hyperthermia" 
              className="text-amber-300 hover:underline"
            >
              Details →
            </Link>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-3 text-amber-200">Nonlinear Delayed Dynamics</h3>
            <p className="text-amber-100/90 mb-4">
              System identification for machine turning processes with time-delay effects.
            </p>
            <Link 
              href="/projects/nonlinear-dynamics" 
              className="text-amber-300 hover:underline"
            >
              Details →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Technologies Section - Minimalist Version */}

    </div>
  )
}