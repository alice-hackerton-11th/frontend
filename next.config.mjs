/** @type {import('next').NextConfig} */
const config = {
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
