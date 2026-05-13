/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/hbpu-campus-nav',
  assetPrefix: '/hbpu-campus-nav/',
  trailingSlash: true,
}

module.exports = nextConfig
