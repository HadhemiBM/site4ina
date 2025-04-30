import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: "export",
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "ddngbriyu",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "ml_default",
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
    ],
    unoptimized: true,

  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/accueil",
        permanent: true,
      },
    ];
  },

  trailingSlash: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      console.log("Client-side build running on port:", process.env.PORT);
    }
    return config;
  },
};

export default nextConfig;
