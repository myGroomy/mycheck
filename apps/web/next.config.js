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
    // Trace dependencies from the monorepo root.
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingIncludes: {
      '/api/auth/login': [
        '../../node_modules/argon2/prebuilds/linux-x64/argon2.glibc.node',
      ],
      '/api/auth/change-pin': [
        '../../node_modules/argon2/prebuilds/linux-x64/argon2.glibc.node',
      ],
      '/api/shifts/*/close': [
        '../../node_modules/argon2/prebuilds/linux-x64/argon2.glibc.node',
      ],
      '/api/admin/users': [
        '../../node_modules/argon2/prebuilds/linux-x64/argon2.glibc.node',
      ],
      '/api/admin/users/*': [
        '../../node_modules/argon2/prebuilds/linux-x64/argon2.glibc.node',
      ],
      '/api/admin/users/*/force-logout': [
        '../../node_modules/argon2/prebuilds/linux-x64/argon2.glibc.node',
      ],
      '/api/admin/users/*/unlock': [
        '../../node_modules/argon2/prebuilds/linux-x64/argon2.glibc.node',
      ],
      '/api/admin/users/*/reset-pin': [
        '../../node_modules/argon2/prebuilds/linux-x64/argon2.glibc.node',
      ],
    },
  },
};

module.exports = nextConfig;