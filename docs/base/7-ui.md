# UI 库替换篇

> 2026-01-01 更新：因为新版脚手架提供多种 `UI库` 的选项，用户可以自行选择。如果想选择脚手架提供的 `UI库` 以外的 `UI库`, 则可以选择 `无UI库`, 然后自行添加自己想要的 `UI库`。

```txt
◆  请选择UI库
│  ● wot-ui
│  ○ uview-pro
│  ○ sard-uniapp
│  ○ uv-ui
│  ○ uview-plus
│  ○ 无UI库
```

- 温馨提示：`uview-plus` 跟 `uv-ui` 是非常类似的，但是 `uview-plus` 需要强制看广告，如果不想看的话，可以选用 `uv-ui`（所以我把 `uv-ui` 排在前面）。

- 温馨提示：不同 `UI库` 的使用占比请看 <https://unibest-tech.github.io/beacon2/>

2026-01-01 数据 `wot-ui`(62.2%) > `uview-pro`(10.0%) > `uview-plus`(7.5%) > `sard-uniapp`(6.1%) > `uv-ui`(4.7%) 【另外 `none` 占比 9.5%】

**下面的文档大概率用不到了，仅做参考。**

## 默认 UI 库

`unibest` 经过几次更迭，先后使用 `uni-ui`、`uv-ui`作为默认 UI 库，目前使用 `wot-ui` 为默认 UI 库。

`wot-ui` 是 `vue3+ts` 编写的全端支持的 UI 库，编码体验比 `uv-ui` 更好；而官方维护的 `uni-ui` 则样式略丑，组件较少，故弃之。

> `wot-ui` 全称 `wot-design-uni`，是 `wot-design` 的 `uniapp` 版本，文档地址：[https://wot-ui.cn/](https://wot-ui.cn/).

---

很多群友反馈有其他 `UI` 库的需求，那么更换 `UI 库` 需要哪些步骤呢？

- 先卸载原有的 `wot-ui` 库
- 再安装其他 `UI 库`

## 卸载 wot-ui 库

卸载 `wot-ui` 过程如下：

- 1. 删除 `wot-ui` 库：

```sh
  pnpm un wot-design-uni
```

- 2. `pages.config.ts` 文件 `easycom.custom` 删除相关配置：

```diff
easycom: {
    autoscan: true,
    custom: {
-     '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue',
    },
},
```

- 3. ` tsconfig.json` 文件 `compilerOptions.types` 删除相关配置：

```diff
"types": [
    "@dcloudio/types",
    "@types/wechat-miniprogram",
-   "wot-design-uni/global.d.ts",
    "./components.d.ts",
    "./global.d.ts"
]
```

## 安装 `uview-pro` 库

- 1. 安装 `uview-pro` 库：

```sh
pnpm add uview-pro
```

- 2. 引入 uView Pro 主库

在项目`src` 目录中的 `main.ts` 中，引入并使用 `uView Pro` 的工具库。

```diff
import { createSSRApp } from "vue";
+ import uViewPro from "uview-pro";

export function createApp() {
  const app = createSSRApp(App);
+  app.use(uViewPro);
  // 其他配置
  return {
    app,
  };
}
```

- 3. `pages.config.ts` 文件 `easycom.custom` 添加相关配置：

```diff
easycom: {
  autoscan: true,
  custom: {
+   '^u-(.*)': 'uview-pro/components/u-$1/u-$1.vue',
  },
},
```

- 4. `uni.scss` 中末尾引入 `uView Pro` 的颜色变量

```scss
@import 'uview-pro/theme.scss';
```

- 5. `App.vue` 中首行的位置引入 `uView Pro` 的基础样式

```scss
<style lang="scss">
@import 'uview-pro/index.scss';
</style>
```

## 安装 `uni-ui` 库

- 1. 安装 `uni-ui` 库：

```sh
pnpm add @dcloudio/uni-ui
```

- 2. `pages.config.ts` 文件 `easycom.custom` 添加相关配置：

```diff
easycom: {
  autoscan: true,
  custom: {
+   '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
  },
},
```

- 3. ` tsconfig.json` 文件 `compilerOptions.types` 添加相关配置：

```diff
"types": [
    "@dcloudio/types",
    "@types/wechat-miniprogram",
+   "@uni-helper/uni-ui-types",
    "./components.d.ts",
    "./global.d.ts"
]
```

## 安装 `uv-ui` 库

- 1. 安装 `uv-ui` 库：

```sh
pnpm add @climblee/uv-ui
```

- 2. `pages.config.ts` 文件 `easycom.custom` 添加相关配置：

```diff
easycom: {
  autoscan: true,
  custom: {
+   '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',
  },
},
```

- 3. ` tsconfig.json` 文件 `compilerOptions.types` 添加相关配置：

```diff
"types": [
  "@dcloudio/types",
  "@types/wechat-miniprogram",
+ "@ttou/uv-typings/shim",
+ "@ttou/uv-typings/v2",
  "./components.d.ts",
  "./global.d.ts"
]
```

## 安装 `uview-plus` 库

- 1. 安装 `uview-plus` 库：

```sh
pnpm add uview-plus
```

- 2. `pages.config.ts` 文件 `easycom.custom` 添加相关配置：

```diff
easycom: {
  autoscan: true,
  custom: {
+   '^u--(.*)': 'uview-plus/components/u-$1/u-$1.vue',
+   '^up-(.*)': 'uview-plus/components/u-$1/u-$1.vue',
+   '^u-([^-].*)': 'uview-plus/components/u-$1/u-$1.vue',
  },
},
```

- 3. ` tsconfig.json` 文件 `compilerOptions.types` 添加相关配置：

```diff
"types": [
    "@dcloudio/types",
    "@types/wechat-miniprogram",
+   "uview-plus/types",,
    "./components.d.ts",
    "./global.d.ts"
]
```

- 4. `uni.scss` 中末尾引入 `uview-plus` 的颜色变量

```scss
@import 'uview-plus/theme.scss'; // /* 行为相关颜色 */
```

## 安装 `sard-uniapp` 库

- 1. 安装 `sard-uniapp` 库：

```sh
pnpm add sard-uniapp
```

- 2. `pages.config.ts` 文件 `easycom.custom` 添加相关配置：

```diff
easycom: {
  autoscan: true,
  custom: {
+   '^sar-(.*)': 'sard-uniapp/components/$1/$1.vue',
  },
},
```

- 3. ` tsconfig.json` 文件 `compilerOptions.types` 添加相关配置：

```diff
"types": [
  "@dcloudio/types",
  "@types/wechat-miniprogram",
+ "sard-uniapp/global",
  "./components.d.ts",
  "./global.d.ts"
]
```

- 4. `App.vue` 中首行的位置引入 `sard-uniapp` 的基础样式

```scss
<style lang="scss">
@import 'sard-uniapp/index.scss';
</style>
```

> 其他 UI 库的安装类似，不再赘述。

全文完~
