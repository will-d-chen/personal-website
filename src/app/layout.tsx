import type { Metadata, Viewport } from 'next'
import { Spectral } from 'next/font/google'
import './globals.css'

// Font optimization - subset loading, display swap
const spectral = Spectral({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spectral',
  weight: ['200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Your Name | Personal Website',
  description: 'A high-performance personal website showcasing my work and skills',
  metadataBase: new URL('https://yourwebsite.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Your Name | Personal Website',
    description: 'A high-performance personal website showcasing my work and skills',
    url: 'https://yourwebsite.com',
    siteName: 'Your Name',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | Personal Website',
    description: 'A high-performance personal website showcasing my work and skills',
  },
}

export const viewport: Viewport = {
  themeColor: '#423C30',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spectral.variable}`}>
      <body className="antialiased bg-custom-brown text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

// Header Component
function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-custom-brown/80 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl">Your Name</span>
            </div>
            <nav className="ml-6 flex space-x-8">
              <a href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-amber-200">Home</a>
              <a href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-amber-200">About</a>
              <a href="/projects" className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-amber-200">Projects</a>
              <a href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium hover:text-amber-200">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-custom-brown border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-amber-200/70">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {/* Social links */}
            <a href="https://github.com" className="text-amber-200/70 hover:text-amber-200">GitHub</a>
            <a href="https://twitter.com" className="text-amber-200/70 hover:text-amber-200">Twitter</a>
            <a href="https://linkedin.com" className="text-amber-200/70 hover:text-amber-200">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}