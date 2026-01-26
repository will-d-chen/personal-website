export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-bold mb-8 text-amber-200">Contact</h1>

      <div className="card">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-medium text-amber-200">Email</h2>
            <a href="mailto:will.chen@duke.edu" className="text-amber-300">
              will.chen@duke.edu
            </a>
          </div>


          <div>
            <h2 className="text-lg font-medium text-amber-200">Location</h2>
            <p className="text-amber-100/90">
              100 Science Dr.<br />
              Department of Mechanical Engineering, Duke University<br />
              Durham, NC 27708
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-amber-200">Links</h2>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.linkedin.com/in/danyi-chen-878b1b174/" target="_blank" rel="noreferrer" className="text-amber-300">
                LinkedIn
              </a>
              <a href="https://github.com/will-d-chen" target="_blank" rel="noreferrer" className="text-amber-300">
                GitHub
              </a>
              <a href="https://scholar.google.com/citations?user=_y5PQDYAAAAJ&hl=en&oi=sra" target="_blank" rel="noreferrer" className="text-amber-300">
                Google Scholar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}