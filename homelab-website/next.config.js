/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'ahmed1.live',
          },
        ],
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig;
