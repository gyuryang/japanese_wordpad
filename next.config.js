const path = require('path');
const webpack = require('webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    'recyclerlistview',
  ],
  i18n: { locales: ['ko'], defaultLocale: 'ko' },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false,
  },
  images: { unoptimized: true },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { dimensions: false } }],
    });

    // Add custom `.web.{jsx?,tsx?}` extension resolver
    config.resolve.extensions = [
      '.web.js',
      '.web.jsx',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ];

    return config;
  },
};

module.exports = nextConfig;
