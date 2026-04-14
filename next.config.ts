import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Supprime l'en-tête X-Powered-By (sécurité)
  poweredByHeader: false,

  // Compression gzip/brotli activée
  compress: true,

  // Mode strict React
  reactStrictMode: true,

  // Optimisation images — AVIF + WebP, tailles responsives belges
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 an en secondes
    remotePatterns: [
      // Picsum Photos
      { protocol: "https", hostname: "picsum.photos" },
      // Unsplash — photos de maçonnerie haute résolution
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },

  // Headers HTTP de sécurité et de performance
  async headers() {
    return [
      {
        // Tous les itinéraires
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        // Assets statiques Next.js — cache immuable 1 an
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Polices Google (servies en local par next/font)
        source: "/_next/static/media/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Images optimisées
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        // Fichiers statiques publics (favicon, SVG, etc.)
        source: "/(favicon.ico|.*\\.svg|.*\\.png|.*\\.jpg|.*\\.webp)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=2592000",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
