/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@mss/ui", "@mss/database"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
    ],
  },
};

module.exports = nextConfig;
