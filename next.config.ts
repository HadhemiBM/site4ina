import type { NextConfig } from "next";

const nextConfig: NextConfig = {


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
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },

  trailingSlash: true,
};

export default nextConfig;
