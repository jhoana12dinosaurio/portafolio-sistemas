import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: true,
  reactStrictMode: true,
  
  // Configuración para SPA
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/'
      }
    ];
  },
  
  // Optimizaciones para imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Configuración para deployment en Vercel
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  // Configuración para mejor rendimiento
  compress: true,
  
  // Headers para SEO y seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;
