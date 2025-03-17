# 旅游攻略网站 - 项目设计文档

## 项目概述

本项目是一个基于 Next.js 框架开发的旅游攻略网站，旨在为用户提供旅游目的地信息、攻略分享和社区交流平台。项目使用最新的 Next.js 15 版本，采用 React 19 和 TypeScript 进行开发，并集成了 Tailwind CSS 进行样式设计。

## 目录结构

```
project-root/
│
├── node_modules/           # 依赖包目录
├── public/                 # 静态资源目录
│   ├── window.svg
│   ├── vercel.svg
│   ├── next.svg
│   ├── globe.svg
│   └── file.svg
│
├── src/                    # 源代码目录
│   └── app/                # Next.js App Router 目录
│       ├── page.tsx        # 首页组件
│       ├── layout.tsx      # 全局布局组件
│       ├── favicon.ico     # 网站图标
│       └── globals.css     # 全局样式文件
│
├── .gitignore              # Git 忽略文件
├── eslint.config.mjs       # ESLint 配置
├── next-env.d.ts           # Next.js 类型声明
├── next.config.ts          # Next.js 配置文件
├── package-lock.json       # 包依赖锁定文件
├── package.json            # 项目配置和依赖
├── postcss.config.mjs      # PostCSS 配置
└── tsconfig.json           # TypeScript 配置
```

## 技术栈

### 核心框架
- **Next.js 15.2.2**: 基于 React 的全栈框架，支持服务端渲染(SSR)、静态站点生成(SSG)和客户端渲染(CSR)
- **React 19.0.0**: 用户界面库
- **TypeScript 5+**: 提供类型安全的 JavaScript 超集

### 样式解决方案
- **Tailwind CSS 4**: 实用优先的 CSS 框架
- **PostCSS**: CSS 转换工具

### 开发工具
- **ESLint 9**: 代码质量检查工具
- **ESLint Config Next**: Next.js 特定的 ESLint 配置

## 技术要点

### 1. Next.js App Router
- 项目采用 Next.js 的 App Router 架构，使用基于文件系统的路由
- `src/app` 目录下的文件结构决定了应用的路由结构
- `page.tsx` 定义了路由页面
- `layout.tsx` 提供了共享布局和设计

### 2. TypeScript 集成
- 项目完全使用 TypeScript 开发，提高代码质量和开发体验
- 使用路径别名（@/*）简化导入语句
- 配置了严格的类型检查

### 3. 响应式设计
- 通过 Tailwind CSS 实现响应式设计
- 支持亮色/暗色模式切换，通过 CSS 变量实现

### 4. 部署和构建
- 支持通过 `next build` 构建生产版本
- 可轻松部署到 Vercel 平台

## 扩展计划

在后续开发中，可考虑添加的功能和结构：

1. **组件结构**:
   - `components/` 目录：存放可复用的 UI 组件
   - `lib/` 目录：工具函数和辅助方法
   - `models/` 目录：数据模型和类型定义

2. **数据管理**:
   - API 路由：实现服务端 API
   - 数据获取层：与外部 API 或数据库交互

3. **用户认证**:
   - 登录/注册功能
   - 用户权限管理

4. **内容管理**:
   - 旅游攻略编辑和发布系统
   - 评论和评分系统

5. **性能优化**:
   - 图片优化和懒加载
   - 路由预加载

本设计文档将随着项目的发展持续更新。 