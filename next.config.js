/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML Export for edge hosting
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'], // Modern image formats
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  experimental: {
    optimizeCss: false,
    optimizePackageImports: ['react-icons'], // Optimize imports
  },
  poweredByHeader: false, // Security best practice
  // Modern compression
  compress: true,
  // Cache optimization
  generateEtags: true,
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig