export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8 text-amber-200">Contact</h1>
      
      <div className="card">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-amber-200">Email</h2>
            <a href="mailto:will.chen@duke.edu" className="text-amber-300 hover:underline">
              will.chen@duke.edu
            </a>
          </div>
          
          <div>
            <h2 className="text-lg font-medium text-amber-200">Phone</h2>
            <a href="tel:9204280645" className="text-amber-300 hover:underline">
              (920) 428-0645
            </a>
          </div>
          
          <div>
            <h2 className="text-lg font-medium text-amber-200">Location</h2>
            <p className="text-amber-100/90">
              Duke University<br />
              Department of Mechanical Engineering<br />
              Durham, NC
            </p>
          </div>
          
          <div>
            <h2 className="text-lg font-medium text-amber-200">Links</h2>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/william-d-chen-878b1b174/" target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">
                LinkedIn
              </a>
              <a href="https://github.com/will-d-chen" target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">
                GitHub
              </a>
              <a href="https://scholar.google.com/citations?user=_y5PQDYAAAAJ&hl=en&oi=sra" target="_blank" rel="noreferrer" className="text-amber-300 hover:underline">
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}