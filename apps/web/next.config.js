/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // For static exports if needed
  },
  // Transpile shared packages
  transpilePackages: ['@portfolio/ui', '@portfolio/types', '@portfolio/utils'],
  // Optimize compilation
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimize package imports (Next.js 14+)
  experimental: {
    optimizePackageImports: ['@portfolio/ui', '@portfolio/types', '@portfolio/utils'],
  },
}

module.exports = nextConfig
