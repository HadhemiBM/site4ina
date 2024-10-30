import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // or false if you want a temporary redirect
      },
    ];
  },
};

export default nextConfig;
