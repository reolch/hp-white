/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  images: {
    domains: ['localhost'],
    path: process.env.NEXT_PUBLIC_BASE_PATH || '',
    loader: 'custom',
    loaderFile: './image-loader.js',
  }
}

module.exports = nextConfig 