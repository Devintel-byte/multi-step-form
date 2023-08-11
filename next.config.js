/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/monthly-payment',
            destination: '/monthly-payment',
          },
          {
            source: '/yearly-payment',
            destination: '/yearly-payment',
          },
        ];
      },
}

module.exports = nextConfig
