// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8055",
        pathname: "/assets/**",
      },
    ],
    domains: ["lh3.googleusercontent.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
