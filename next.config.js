/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Static HTML Export for edge hosting
    images: {
      formats: ['image/avif', 'image/webp'], // Modern image formats
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'placehold.co',
        },
      ],
    },
    experimental: {
      optimizeCss: true, // CSS optimization
      optimizePackageImports: ['react-icons'], // Optimize imports
    },
    poweredByHeader: false, // Security best practice
    // Modern compression
    compress: true,
    // Cache optimization
    generateEtags: true,
  }
  
  module.exports = nextConfig