# CLI 开发指南

本篇介绍如何参与 `create-unibest` CLI 工具的开发。

## 项目架构

unibest 采用 **Monorepo** 架构：

```
unibest/
├── packages/
│   └── cli/                # CLI 脚手架源码（发布到 npm）
├── src/                    # 模板源码
└── 其他配置文件
```

**分支说明：**

- **`main` 分支** - CLI 开发分支，包含 `packages/cli/` 和模板源码
- **`base` 分支** - 纯净模板，用户创建项目时克隆

## 开发环境

```bash
# 前置依赖
node >= 20
pnpm >= 9
```

## 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/unibest-tech/unibest.git
cd unibest
```

### 2. 进入 CLI 目录

```bash
cd packages/cli
```

### 3. 安装依赖

```bash
pnpm install
```

### 4. 开发模式

```bash
pnpm dev
```

开发模式下会监听文件变化，自动重新构建。

### 5. 测试本地 CLI

```bash
# 方式一：使用 start 脚本
pnpm start -- my-test-project

# 方式二：直接运行
node bin/index.js my-test-project
```

### 6. 构建发布

```bash
pnpm build
```

构建产物输出到 `dist/` 目录。

## 项目结构

```
packages/cli/
├── bin/
│   └── index.js            # CLI 入口
├── features/               # 功能模块
│   ├── i18n/               # 多语言功能
│   └── login/              # 登录功能
├── src/
│   ├── commands/           # 命令实现
│   │   ├── add.ts          # add 命令
│   │   └── create.ts       # create 命令
│   ├── features/           # 功能加载器
│   ├── utils/              # 工具函数
│   └── index.ts            # 入口
├── package.json
└── tsup.config.ts          # 构建配置
```

## 发布到 npm

```bash
# 1. 登录 npm
npm login --registry=https://registry.npmjs.org/

# 2. 升级版本
npm version patch

# 3. 构建
pnpm build

# 4. 发布
npm publish --no-workspaces --registry=https://registry.npmjs.org/
```

> 发布时可能会要求输入 OTP 验证码。

## 添加新 Feature

1. 在 `features/` 目录下创建新文件夹
2. 添加 `hooks.js` 和 `package.json`
3. 在 `src/features/index.ts` 中注册

## 调试技巧

### 本地调试

```bash
# 使用本地模板测试
LOCAL_TEMPLATE=true pnpm start -- my-test-project
```

### 查看日志

CLI 使用 `@clack/prompts` 提供交互式命令行界面，调试信息会直接输出到终端。

## 相关资源

- [GitHub 仓库](https://github.com/unibest-tech/unibest)
- [npm 包](https://www.npmjs.com/package/create-unibest)
- [AGENTS.md](https://github.com/unibest-tech/unibest/blob/main/AGENTS.md) - AI 开发者指南
