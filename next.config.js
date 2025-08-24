/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only export for production builds, not development
  ...(process.env.NODE_ENV === 'production' && { output: 'export' }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Disable server-side features for static export only in production
  experimental: {
    // Force static export for all pages in production only
  }
}

module.exports = nextConfig
