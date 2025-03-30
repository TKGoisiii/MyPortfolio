import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tkd.assets.newt.so', // Add Newt CMS hostname
        port: '',
        pathname: '/v1/**', // Allow images from the v1 path
      },
      {
        protocol: 'https',
        hostname: 'zenn.dev', // Add Zenn hostname
        port: '',
        pathname: '/images/**', // Allow images from the images path
      },
    ],
  },
  /* other config options can go here */
};

export default nextConfig;
