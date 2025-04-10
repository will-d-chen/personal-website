export default function Contact() {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold mb-8 text-amber-200">Contact Me</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <p className="text-lg mb-4 text-amber-100/90">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            
            <div className="space-y-4 mt-8">
              <div>
                <h2 className="text-lg font-medium text-amber-200">Email</h2>
                <a href="mailto:your.email@example.com" className="text-amber-300 hover:underline">
                  your.email@example.com
                </a>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-amber-200">Social Media</h2>
                <div className="flex space-x-4 mt-2">
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-amber-100/70 hover:text-amber-200">
                    GitHub
                  </a>
                  <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-amber-100/70 hover:text-amber-200">
                    Twitter
                  </a>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-amber-100/70 hover:text-amber-200">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 text-amber-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-amber-700 rounded-xl focus:ring-amber-500 focus:border-amber-500 bg-amber-900/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 text-amber-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-amber-700 rounded-xl focus:ring-amber-500 focus:border-amber-500 bg-amber-900/20 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 text-amber-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-amber-700 rounded-xl focus:ring-amber-500 focus:border-amber-500 bg-amber-900/20 text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-2 bg-amber-600 text-white font-medium rounded-xl hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }