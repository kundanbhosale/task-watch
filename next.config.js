/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  swcMinify: true,

  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
