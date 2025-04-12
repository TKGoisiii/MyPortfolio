import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tkd.assets.newt.so',
        pathname: '/v1/**',
      },
      {
        protocol: 'https',
        hostname: 'tk-workspace.s3.ap-northeast-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'zenn.dev',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
