/** @type {import('next').NextConfig} */
const config = {
  env: {
    API_URL: process.env.API_URL || 'https://azkmngyckrbaqgga.tunnel-pt.elice.io',
  },

  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
    },
  },

  typescript: {
    ignoreBuildErrors: true,
  },
}

export default config
