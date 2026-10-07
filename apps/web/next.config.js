// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
//   experimental: {
//     serverComponentsExternalPackages: ['postgres'],
//   },
// };

// module.exports = nextConfig;
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  experimental: {
    serverComponentsExternalPackages: ['postgres', 'argon2'],
    // arahkan ke root monorepo (sesuaikan jumlah ../ dengan struktur folder kamu)
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingIncludes: {
      '/api/auth/**': ['../../node_modules/argon2/**/*'],
    },
  },
};

module.exports = nextConfig;