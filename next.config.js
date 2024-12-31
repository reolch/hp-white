/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 静的エクスポートを有効化
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',  // GitHub Pages用のパス設定
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  images: {
    unoptimized: true,  // 静的エクスポート時の画像最適化を無効化
  },
}

module.exports = nextConfig 