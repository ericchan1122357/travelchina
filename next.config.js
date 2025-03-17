/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 图片配置
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  // 配置基础路径
  basePath: '',
  // 禁用X-Powered-By header
  poweredByHeader: false,
  // i18n配置
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
  },
  // 生产环境配置
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
  }
}

module.exports = nextConfig 