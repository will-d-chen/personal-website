import type { Metadata, Viewport } from 'next'
import { Spectral } from 'next/font/google'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

// Font optimization - subset loading, display swap
const spectral = Spectral({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-spectral',
  weight: ['400', '500', '600', '700'], // Add 500 and 600 for medium and semibold
})

export const metadata: Metadata = {
  title: 'Will Chen',
  description: 'Will Chen, PhD student in Mechanical Engineering at Duke University',
  metadataBase: new URL('https://willchen.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/flavicon.ico', sizes: '32x32' },
      { url: '/flavicon.svg', type: 'image/svg+xml' }
    ],
  },
  openGraph: {
    title: 'Will Chen',
    description: 'Will Chen, PhD student in Mechanical Engineering at Duke University',
    url: 'https://willchen.com',
    siteName: 'Will Chen',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Will Chen | Robotics Engineer',
    description: 'Will Chen, PhD student in Mechanical Engineering at Duke University',
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-custom-brown text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

// Header Component
function Header() {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-custom-brown/80 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-20">
          <nav className="flex space-x-4 sm:space-x-8 md:space-x-16 items-center">
            <a href="/" className="inline-flex items-center px-1 pt-1 text-base sm:text-lg font-medium hover:text-amber-200">Home</a>
            <a href="/about" className="inline-flex items-center px-1 pt-1 text-base sm:text-lg font-medium hover:text-amber-200">About</a>
            <a href="/projects" className="inline-flex items-center px-1 pt-1 text-base sm:text-lg font-medium hover:text-amber-200">Projects</a>
            <a href="/personal" className="inline-flex items-center px-1 pt-1 text-base sm:text-lg font-medium hover:text-amber-200">Personal</a>
            <a href="/contact" className="inline-flex items-center px-1 pt-1 text-base sm:text-lg font-medium hover:text-amber-200">Contact</a>
          </nav>
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
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-amber-200/70">
            © 2025 Will Chen
          </p>
          <p className="text-sm text-amber-200/80">
            Built with Next.js • React • TypeScript • Tailwind CSS
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/will-d-chen" target="_blank" rel="noreferrer" className="text-amber-200/70">GitHub</a>
            <a href="https://www.linkedin.com/in/william-d-chen-878b1b174/" target="_blank" rel="noreferrer" className="text-amber-200/70">LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=_y5PQDYAAAAJ&hl=en&oi=sra" target="_blank" rel="noreferrer" className="text-amber-200/70">Scholar</a>
          </div>
        </div>
      </div>
    </footer>
  )
}