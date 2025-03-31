# 中国旅游攻略网站

这是一个使用 Next.js 和 Tailwind CSS 构建的中国旅游攻略网站。该网站旨在为游客提供丰富的中国旅游信息和个性化的行程规划服务。

## 功能特点

- 响应式设计，支持各种设备
- 多语言支持（中文、英文、日文、韩文）
- 目的地展示和详细介绍
- 旅行故事分享
- 实用旅行指南
- 个性化行程规划

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint

## 设计规范

### 字体规范

**重要**: 本项目统一使用**阿里巴巴普惠体**作为全站字体。

- 所有组件和页面必须使用阿里巴巴普惠体
- 禁止引入或使用其他字体
- 字体文件位于 `/public/fonts/` 目录下
- 字体已在全局CSS和Tailwind配置中设置为默认字体

详细的字体规范请查看 [design.md](./design.md) 文档。

## 开始使用

1. 克隆仓库：

```bash
git clone https://github.com/yourusername/china-travel-guide.git
cd china-travel-guide
```

2. 安装依赖：

```bash
npm install
```

3. 启动开发服务器：

```bash
npm run dev
```

4. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
src/
  ├── app/                # Next.js 应用程序目录
  ├── homepage/          # 首页相关组件和工具
  │   ├── components/   # 首页组件
  │   ├── types/       # TypeScript 类型定义
  │   └── utils/       # 工具函数和数据
  └── styles/           # 全局样式
```

## 贡献

欢迎提交 Pull Request 和 Issue！

## 许可证

MIT
