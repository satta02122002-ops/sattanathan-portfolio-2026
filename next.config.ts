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

// Only initialise Cloudflare Workers bindings in local dev — never during production builds
if (process.env.NODE_ENV === 'development') {
  import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
}
