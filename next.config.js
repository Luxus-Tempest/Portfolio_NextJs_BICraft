/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname: '/free-photo/**'
          },
          {
            protocol: 'https',
            hostname: 'img.freepik.com',
            port: '',
            pathname: '/free-vector/**'
          },
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/photos/**'
          },
        ],
      },
}

module.exports = nextConfig
