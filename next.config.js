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
  // Disable build tracing to prevent stack overflow
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      }
    }
    return config
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // File extensions to handle
  pageExtensions: ['tsx', 'ts', 'jsx', 'js']
}

module.exports = nextConfig