import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Turbopack experimental system TLS for environments that block Google Fonts
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
