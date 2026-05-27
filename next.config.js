/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "@heroicons/react",
      "react-icons",
    ],
  },
};

module.exports = nextConfig;
