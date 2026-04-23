import type { NextConfig } from 'next'

const config: NextConfig = {
  pageExtensions: ['ts', 'tsx'],
  images: { unoptimized: true },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
    ]
  },
}

export default config
