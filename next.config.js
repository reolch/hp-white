/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('postcss-url')({
                  url: (asset) => {
                    if (asset.url.startsWith('/')) {
                      return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${asset.url}`;
                    }
                    return asset.url;
                  },
                }),
              ],
            },
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig 