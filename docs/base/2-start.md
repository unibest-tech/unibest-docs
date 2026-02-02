# 快速开始

## 前置依赖

- **`Node.js`** - `>=v20` (我的是 `v22.13.0`)
- **`Pnpm`** - `>=9` (我的是 `10.11.0`)
- **`VSCode`** - 可选其他 `IDE` ：`Trae`、`Cursor` 、`WebStorm` 等
- **`HBuilderX`** - `APP` 的运行和发布离不开它
- **`Git`** - 必须有 `git`，否则 `husky` 会报错

## 使用方式

### 方式一：通过 CLI 创建新项目（推荐）

通过 CLI 创建项目是**推荐**的方式，可以选择平台、UI 库、登录策略、多语言等配置。

```bash
# 全局安装 CLI
pnpm add -g create-unibest

# 创建项目
pnpm create unibest my-project

cd my-project
pnpm install
pnpm dev
```

CLI 会从 Git `base` 分支克隆基础模板。

### 方式二：创建时选择 Feature

```bash
# 创建项目并选择功能
pnpm create unibest my-project

# 或通过命令行参数直接指定
pnpm create unibest my-project --i18n --login
```

### 方式三：创建后添加 Feature

```bash
cd my-project

# 添加多语言
pnpm create unibest add i18n

# 添加登录策略
pnpm create unibest add login

# 同时添加多个
pnpm create unibest add i18n login
```

### 方式四：直接克隆开发（备选）

如果不想通过 CLI，也可以直接克隆仓库作为基础模板：

```bash
# 克隆本仓库
git clone https://github.com/feige996/unibest.git my-project
cd my-project

pnpm install
pnpm dev        # 运行 H5
pnpm dev:mp     # 运行微信小程序
pnpm dev:app    # 运行 App
```

> 直接克隆会包含 CLI 工具代码，如不需要可以忽略 `packages/` 目录。

根据 `登录策略` 和 `i18n` 是否选择，会使用 4 个分支代码生成基础代码

- 当没有选`登录策略`，也没有选 `i18n`，则会使用 `base` 分支代码。
- 当选了`登录策略`，也没有选 `i18n`，则会使用 `base-login` 分支代码。
- 当没有选`登录策略`，选了 `i18n`，则会使用 `base-i18n` 分支代码。
- 当选了`登录策略`，选了 `i18n`，则会使用 `base-login-i18n` 分支代码。

接下来会根据所选的平台和 UI 库，生成对应的代码（动态插入）。

## 安装、运行

```bash [pnpm]
pnpm i
pnpm dev     # 运行h5
pnpm dev:mp  # 运行微信小程序
pnpm dev:app # 运行App
```

`pnpm dev` 之后在浏览器打开 `http://localhost:9000/`。

> 其他平台构建和发布，查看 [运行发布篇](./11-build)。

## 第一次 `commit`

```bash
git add .
git commit -m "feat: init project"
```

## `v3` 代码块

在 `vue` 文件中，输入 `v3` 按 `tab` 即可快速生成页面模板，可以大大加快页面生成。

> 原理：基于 `VSCode` 代码块生成。

![alt text](./assets/2-4.gif)

## 注意事项

- 若代码里面自动引入的 `API` 报错，只需要 `pnpm dev` 即可。
- 若代码运行后，`H5端` 浏览器界面底部没有 `tabbar`， 刷新浏览器或者再次 `pnpm dev` 即可。

## 项目仓库地址

`github` 和 `gitee` 实时同步，代码一致。

- https://github.com/feige996/unibest
- https://gitee.com/feige996/unibest
