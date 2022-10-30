/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  // configuration for Sass loader
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components'), path.join(__dirname, 'pages')]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.pokemondb.net']
  },
  webpack(config) {
    config.plugins.push(
        require('unplugin-icons/webpack')({
          compiler: 'jsx',
          jsx: 'react',
        }),
    )
    return config
  },
}

module.exports = nextConfig
