# 快速开始

- 前置依赖

  - **Node.js** - `>=v20` (我的是 `v22.13.0`)
  - **pnpm** - `>=9+` (我的是 `10.10.0`)
  - **`VSCode`**系（`VS Code`, `Trae`, `Cursor`），可选 `WebStorm`
  - **`HBuilderX`** - `APP` 的运行和发布还是离不开它

  > 注意：windows 电脑在 nodejs 超过 `v22.14` 时，运行会报错。问题和解决方法见 [github issue 219](https://github.com/unibest-tech/unibest/issues/219)

## 创建项目

通过下面的命令可以快速生成项目模板，`pnpm create unibest <项目名称>` ，如果不写 `<项目名称>` 会进入命令行交互模式。

```bash
# 如果没有 pnpm，请先安装: npm i -g pnpm
pnpm create unibest
# 时不时加一下 @latest 标识，这样可以使用最新版本的 create-unibest
pnpm create unibest@latest
```

实际操作截图如下：

![alt text](../assets/getting-started/create-unibest.png)

## 安装、运行

```bash [pnpm]
pnpm i
pnpm dev     # 运行h5
pnpm dev:mp  # 运行微信小程序
pnpm dev:app # 运行App
```

`pnpm dev` 之后在浏览器打开 `http://localhost:9000/`。

运行其他平台之前请先运行一次 `pnpm dev`，确保项目正常运行。

> 其他平台构建和发布，查看 [运行发布篇](./run-and-build)。

## 第一次 `commit`

```bash
git add .
git commit -m "feat: init project"
```

## `v3` 代码块

在 `vue` 文件中，输入 `v3` 按 `tab` 即可快速生成页面模板，可以大大加快页面生成。

> 原理：基于 `VSCode` 代码块生成。

![alt text](../assets/getting-started/v3.gif)

## 注意事项

- 若代码里面自动引入的 `API` 报错，只需要 `pnpm dev` 即可。
- 若代码运行后，`H5端` 浏览器界面底部没有 `tabbar`， 刷新浏览器或者再次 `pnpm dev` 即可。

## 旧的模板生成相关内容

::: details 下面的在 2025-06-21 发布 v2.0.0 之后过期了

![unibest templates](https://oss.laf.run/ukw0y1-site/xmind/unibest模板.png)

`create unibest` 支持 `-t` 参数选择模板，目前已有两大类 `8` 个模板

- `普通` 模板( `4个` ）：分别是 `base`、`tabbar`、`spa`、 `i18n`、`demo`。
- `hbx` 模板(`2个` ）：分别是 `hbx-base`、`hbx-demo`。

不带 `-t` 参数时会默认生成 `base` 模板。

`base` 模板是最基本的模板，更新最及时，推荐使用 `base` 模板创建新项目。其他几个模板也是基于 `base` 模板得到的。 `demo` 模板则作为参考用。

`base` 模板的改动会自动同步到其他几个分支，通过 `github actions` 实现。

```sh
# VS Code 模板
pnpm create unibest # 默认用 base 模板

pnpm create unibest -t base # 基础模板
pnpm create unibest -t tabbar # 自定义 tabbar 模板
pnpm create unibest -t spa # 单页应用 模板（使用一个组件模拟tabbar）
pnpm create unibest -t i18n # 多语言模板
pnpm create unibest -t demo # 所有demo的模板(包括i18n)
```

> 2024-12-29<周日> 发表了一篇文章：[【unibest】可以去掉 hbx 模版了，base 模板一统天下](https://mp.weixin.qq.com/s/ybunFNkjKfV5yVLOMvqscg?token=1696234630&lang=zh_CN)
>
> 就是说 hbx 模板可以退出历史舞台了。

:::
