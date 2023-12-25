/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "madebydesignesia.com",
      },
    ],
  },
};

module.exports = nextConfig;
