/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
  experimental: {
    appDir: true,
  },

  async rewrites() {
    return [
      {
        source: '/maps-api',
        destination: 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=${API_KEY}&autoload=false',
      }
    ]
  }
}

module.exports = nextConfig
