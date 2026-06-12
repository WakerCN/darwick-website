# 大威船舶工程服务有限公司官网

为大威船舶工程服务有限公司(Darwick Marine)开发的企业宣传官网,展示公司简介、业务范围与联系方式,支持中英双语切换。

## 🔗 在线访问

| 环境 | 地址 | 说明 |
| --- | --- | --- |
| GitHub Pages | <https://wakercn.github.io/darwick-website/> | 当前在线演示,由 GitHub Actions 自动构建部署 |
| 原生产环境 | ~~http://www.darwickmarine.com/~~ | 早期交付时使用的域名,现已不再维护 |

## 🛠️ 技术栈

- **框架**:React 19 + TypeScript
- **构建**:Vite 6
- **UI**:Ant Design 5(`@ant-design/v5-patch-for-react-19`)
- **路由**:React Router 7
- **国际化**:i18next + react-i18next(中 / 英)
- **样式**:SCSS / Less
- **优化**:vite-plugin-image-optimizer(sharp + svgo)、rollup-plugin-visualizer 产物分析
- **部署**:GitHub Actions → GitHub Pages

## 🚀 本地开发

```bash
# Node 版本见 .nvmrc
nvm use

npm install
npm run dev      # 本地开发
npm run build    # 生产构建(输出至 dist/)
npm run preview  # 本地预览构建产物
npm run lint     # ESLint 检查
```

## 📦 部署

推送到 `main` 分支后,`.github/workflows/deploy.yml` 会自动构建并发布到 GitHub Pages,无需手动操作。
