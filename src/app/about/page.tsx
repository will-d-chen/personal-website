export default function About() {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-8 text-amber-200">About Me</h1>
        
        <div className="card prose prose-invert max-w-none">
          <p className="text-amber-100/90">
            Hello! I'm [Your Name], a web developer specializing in building high-performance, 
            accessible, and user-friendly websites and applications.
          </p>
          
          <h2 className="text-2xl text-amber-200 mt-8 mb-4">My Background</h2>
          <p className="text-amber-100/90">
            With [X] years of experience in web development, I've worked on a variety of projects 
            ranging from small business websites to complex web applications. I'm passionate about 
            creating fast, optimized digital experiences that provide real value to users.
          </p>
          
          <h2 className="text-2xl text-amber-200 mt-8 mb-4">My Approach</h2>
          <p className="text-amber-100/90">
            I believe in a "performance-first" approach to web development. This means:
          </p>
          
          <ul className="text-amber-100/90 list-disc pl-5 my-4 space-y-2">
            <li>Optimizing for core web vitals and page speed</li>
            <li>Creating responsive designs that work on all devices</li>
            <li>Writing clean, maintainable code</li>
            <li>Focusing on accessibility and inclusive design</li>
            <li>Continuous learning and improvement</li>
          </ul>
          
          <h2 className="text-2xl text-amber-200 mt-8 mb-4">When I'm Not Coding</h2>
          <p className="text-amber-100/90">
            Outside of web development, I enjoy [your hobbies/interests]. I believe that maintaining 
            a healthy work-life balance and pursuing diverse interests makes me a better developer.
          </p>
        </div>
      </div>
    )
  }