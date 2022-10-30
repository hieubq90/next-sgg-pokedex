/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  // configuration for Sass loader
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components'), path.join(__dirname, 'pages')]
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
