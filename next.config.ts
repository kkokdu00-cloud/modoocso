import type { NextConfig } from 'next'

const config: NextConfig = {
  pageExtensions: ['ts', 'tsx'],
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'ALLOWALL' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cso-chatbot-production.up.railway.app https://fonts.googleapis.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://cso-chatbot-production.up.railway.app",
              "frame-src 'self' https://cso-chatbot-production.up.railway.app",
              "frame-ancestors *",
            ].join('; '),
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      {
        source: '/((?!searchlight).*)',
        has: [{ type: 'host', value: 'searchlight.modoocso.kr' }],
        destination: '/searchlight',
        permanent: false,
      },
    ]
  },
}

export default config