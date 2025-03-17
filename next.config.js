/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  // 输出为静态HTML
  output: 'export',
  // 禁用图片优化，因为静态导出不支持图片优化
  images: {
    unoptimized: true,
  },
  // 配置基础路径
  basePath: '',
  // 禁用X-Powered-By header
  poweredByHeader: false,
  // 生产环境配置
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  }
}

module.exports = nextConfig 