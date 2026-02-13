import type { NextConfig } from "next";

// รันคำสั่ง $env:ANALYZE="true"; npx next build --webpack
// eslint-disable-next-line @typescript-eslint/no-require-imports
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// })

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // ppr: true, // เปิดใช้ Partial Prerendering
    cacheComponents: true, // เปิดใช้ Component Caching
  },
  // Optimize font loading
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  }
};

// export default withBundleAnalyzer(nextConfig)
export default nextConfig;