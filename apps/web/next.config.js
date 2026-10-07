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
    serverComponentsExternalPackages: ['postgres', '@node-rs/argon2'],
    // Trace dependencies from the monorepo root.
    outputFileTracingRoot: path.join(__dirname, '../../'),
  },
};

module.exports = nextConfig;