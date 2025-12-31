# 快速开始

- 前置依赖

  - **`Node.js`** - `>=v20` (我的是 `v22.13.0`)
  - **`Pnpm`** - `>=9` (我的是 `10.11.0`)
  - **`VSCode`** - 可选其他 `IDE` ：`Trae`、`Cursor` 、`WebStorm` 等
  - **`HBuilderX`** - `APP` 的运行和发布离不开它
  - **`Git`** - 必须有 `git` ,否则 `husky` 会报错

## 创建项目

> `2025-11-04` 开发了新版的 `create-unibest@v3`，对生成的项目进行了精简，并且对配置型进行了优化。可以自行选择想要的平台和 UI 库等。
>
> 如果想用旧版的 `create-unibest@v2`，则可以 `pnpm create unibest@v2`。

新版 `create-unibest@v3` 通过下面的命令可以快速生成项目模板:

`pnpm create unibest`

```text
feige996 ~ % pnpm create unibest
┌  create-unibest@v3.1.2 快速创建 unibest@v4.1.1 项目
│
◇  请输入项目名称[项目名称只能包含字母、数字、下划线和短横线，千万别写中文]
│  uni-demo
│
◆ 请选择需要支持的平台（多选）[脚手架将根据所选平台生成对应的平台代码，请根据实际情况选择]
│  ◼ H5
│  ◻ 微信小程序
│  ◻ APP
│  ◻ 支付宝小程序（包含钉钉）
│  ◻ 抖音小程序
│
◆  请选择UI库
│  ● 无UI库
│  ○ wot-ui
│  ○ uview-pro
│  ○ sard-uniapp
│  ○ uv-ui
│  ○ uview-plus
◆  是否需要登录策略（黑白名单、登录拦截等）？[暂不知道的，选No即可，项目生成后也可以加该策略]
│  ○ Yes / ● No
◆  是否需要多语言i18n？
│  ○ Yes / ● No
◆  项目uni-demo创建成功！
```

> 如果想查看帮助信息， 则可以执行 `pnpm create unibest -h`。

```txt
feige996 ~ % pnpm create unibest -h
 WARN  1 deprecated subdependencies found: node-domexception@1.0.0
.../19ad2678dfe-1611                     |  +25 +++
.../19ad2678dfe-1611                     | Progress: resolved 25, reused 25, downloaded 0, added 25, done

create-unibest - 跨平台开发框架脚手架

全局安装:
  npm i -g create-unibest                    全局安装，得到 best 命令
  npm update -g create-unibest               更新 create-unibest 包

  best <command> [options]
  best my-project                            创建新的unibest项目
  best -v                                    查看版本信息
  best -h                                    查看帮助信息


临时使用:
  pnpm create unibest <command> [options]
  pnpm create unibest my-project             创建新的unibest项目
  pnpm create unibest -v                     查看版本信息
  pnpm create unibest -h                     查看帮助信息
```

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

- https://github.com/unibest-tech/unibest
- https://gitee.com/feige996/unibest
