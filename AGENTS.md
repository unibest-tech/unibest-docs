# AGENTS.md - unibest-docs 开发指南

本文档为在 unibest-docs 仓库工作的 AI 代理提供指导规范。

## 项目概述

unibest-docs 是 unibest uniapp 开发模板的 VitePress 文档站点。

**技术栈：**
- 框架：VitePress 1.6+
- Vue：3.5+
- 包管理器：pnpm 10+
- Node.js：v18+

## 常用命令

```bash
# 开发
pnpm dev              # 启动开发服务器，支持网络访问
pnpm dev docs         # 启动文档开发服务器
pnpm dev --host       # 支持外部网络访问

# 构建
pnpm build            # 构建生产环境文档
pnpm build docs       # 构建文档站点

# 预览
pnpm preview          # 预览生产环境构建
pnpm preview docs     # 预览构建好的文档
```

## 代码风格规范

### Markdown 规范

1. **前置元数据（Frontmatter）**：文档顶部必需
   ```markdown
   ---
   # 页面标题（从一级标题自动生成）
   layout: home        # 可选：首页布局
   ---
   ```

2. **标题**：使用中文
   ```markdown
   # 一级标题
   ## 二级标题
   ### 三级标题
   ```

3. **链接**：内部文档使用相对路径
   ```markdown
   [快速开始](./2-start)
   [CLI 开发指南](/base/18-cli)
   ```

4. **图片**：放在同级目录或 `assets/` 文件夹
   ```markdown
   ![alt text](./assets/image.png)
   ![alt text](./image.png)
   ```

### Vue 组件

1. **Vue 3 组合式 API**：使用 `<script setup>` 语法
   ```vue
   <script setup>
   import { ref } from 'vue'
   const count = ref(0)
   </script>
   ```

2. **模板结构**：标准 Vue 单文件组件布局
   ```vue
   <script setup>
   // 逻辑代码
   </script>

   <template>
   <!-- 内容 -->
   </template>

   <style scoped>
   /* 样式 */
   </style>
   ```

### VitePress 配置

1. **配置文件**：`docs/.vitepress/config.ts`
2. **侧边栏**：`docs/.vitepress/navbar-sidebar.ts`
3. **主题**：`docs/.vitepress/theme/index.ts`

新增文档时：
- 在 `navbar-sidebar.ts` 中添加侧边栏链接
- 使用一致的编号（如 `18-cli.md`）

### 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 文档文件 | 中划线开头带数字 | `18-cli.md`、`2-start.md` |
| 组件 | PascalCase | `Showcase.vue` |
| 资源 | 中划线 | `star-history.png` |
| 侧边栏键 | 中划线 | `cli-development` |

### 导入规范

```typescript
// VitePress 导入
import { defineConfig } from 'vitepress'

// 主题导入
import Navbar from './components/Navbar.vue'

// docs 目录的绝对路径导入
import { nav, sidebar } from './navbar-sidebar'
```

### 错误处理

1. **链接错误**：`pnpm build` 时 VitePress 会警告
2. **资源缺失**：引用前确认图片存在
3. **路由配置**：确保侧边栏条目与文件路径匹配

### 文档最佳实践

1. **版本历史**：重大变更更新 `CHANGELOG.md`
2. **链接一致性**：全文使用相同的链接格式
3. **语言规范**：界面文本用中文，代码用英文
4. **格式化**：善用 VitePress 特性，如 `::: details` 折叠内容

## 文件结构

```
unibest-docs/
├── docs/
│   ├── .vitepress/
│   │   ├── config.ts           # VitePress 配置
│   │   ├── navbar-sidebar.ts   # 导航配置
│   │   └── theme/              # 主题组件
│   ├── base/                   # 基础文档
│   ├── advanced/               # 高级主题
│   ├── changelog/              # 更新日志
│   └── index.md                # 首页
├── package.json
└── pnpm-lock.yaml
```

## ESLint/格式化

本项目使用 VitePress 内置的 Markdown 处理，未配置额外 lint 工具。

## 重要说明

1. **无测试**：项目没有测试套件
2. **中文内容**：文档主要使用中文
3. **VitePress 特性**：可使用以下特性：
   - `::: details` 折叠内容
   - `> quote` 引用块
   - `![alt](path)` 图片
4. **部署**：文档部署在 https://unibest.tech
