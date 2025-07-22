import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators:false,
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
  eslint:{
    ignoreDuringBuilds:true
  }
};

export default nextConfig;
