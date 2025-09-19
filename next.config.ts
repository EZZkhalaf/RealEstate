// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // 👈 matches your Directus server
        port: "8055", // 👈 must include port if used
        pathname: "/assets/**",
      },
    ],
  },
};

module.exports = nextConfig;
