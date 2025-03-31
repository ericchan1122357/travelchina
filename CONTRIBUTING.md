# 贡献指南

感谢您对中国旅游攻略网站项目的关注！本文档提供了参与贡献的指南，请仔细阅读后再开始您的贡献。

## 开发流程

1. Fork 仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 代码规范

### JavaScript/TypeScript 规范
- 使用 ESLint 和项目中的配置
- 函数和方法使用 camelCase 命名
- 组件使用 PascalCase 命名
- 保持代码的简洁和可读性

### CSS/样式规范
- 优先使用 Tailwind CSS 类
- 避免内联样式
- 自定义样式应放在适当的模块化 CSS 文件中

### 字体规范（重要）

**本项目强制要求所有界面元素使用阿里巴巴普惠体**

#### 字体使用规则：

1. **禁止引入新字体**
   - 不要在任何组件或页面中引入其他字体
   - 不要使用在线字体服务（如 Google Fonts）

2. **组件开发时**
   - 不需要在组件中显式设置字体，全局已配置
   - 如果需要手动设置，请使用以下代码：
     ```css
     font-family: 'Alibaba PuHuiTi', -apple-system, BlinkMacSystemFont, sans-serif;
     ```

3. **字重使用指南**
   - 常规文本：Regular (font-weight: normal)
   - 标题：Bold (font-weight: bold)
   - 次要信息：Light (font-weight: 300)
   - 重点内容：Medium (font-weight: 500)

4. **多语言支持**
   - 所有语言页面均使用阿里巴巴普惠体
   - 该字体支持中文、英文、日文、韩文等多种语言

注意：不遵循字体规范的Pull Request将不会被合并。

## 提交规范

- 提交信息使用英文，清晰描述更改内容
- 遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范
- 示例：
  - `feat: add destination page`
  - `fix: resolve navigation issue on mobile devices`
  - `docs: update README with font guidelines`

## 问题报告

如果您发现任何问题，请创建新的 Issue 并提供以下信息：

1. 问题的详细描述
2. 重现步骤
3. 预期行为与实际行为
4. 截图（如适用）
5. 您的环境信息（浏览器、操作系统等）

## 开发环境设置

请参考 README.md 中的说明来设置您的开发环境。

## 附加资源

- [Tailwind CSS 文档](https://tailwindcss.com/docs)
- [Next.js 文档](https://nextjs.org/docs)
- [阿里巴巴普惠体信息](https://www.alibabagroup.com/en/global/home)

感谢您的贡献！ 