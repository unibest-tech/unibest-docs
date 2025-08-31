# 常见问题

本篇介绍一些常见的问题，会持续更新。

## 1. 修改 `pages.json`、`manifest.json` 被覆盖问题

- `pages.json`

本项目引入了 `@uni-helper/vite-plugin-uni-pages`，`pages.json` 文件将会自动生成，手动修改 `pages.json` 将会被覆盖。

全局的东西请在 `pages.config.ts` 里面配置，页面的东西请在 `vue` 文件的 `route-block` 配置。

- `manifest.json`

与上面类似。本项目引入了 `@uni-helper/vite-plugin-uni-manifest`，`manifest.json` 文件将会自动生成，手动修改 `manifest.json` 将会被覆盖。

如需修改，请在 `manifest.config.ts` 里面修改。

详情请见[uni 插件篇](/base/3-plugin)

## 2. 如何设置/修改首页？

`vue` 文件的 `route-block` 块里面设置 `type="home"` 即可，请确保项目里面 `只有一个页面` 是这个配置。

> 注意：如果有多个，会按照字母顺序排列，第一个是首页。（可能不是您的想要的效果。）

## 3. 怎么分包？

`vite.config.ts` 里面有一个配置，如下：(其中 `subPackages` 就是用来分包的)

```ts [vite.config.ts]{3}
UniPages({
    exclude: ['**/components/**/**.*'],
    subPackages: ['src/pages-sub'], // 是个数组，可以配置多个
}),
```

## 4. 首次运行 `pnpm:mp` 时报错。

首次运行 `pnpm:mp` 时报错，报错如下：

```text
Error: ENOENT: no such file or directory, open '/Users/burtlai/unibest-projects/unibest/src/manifest.json'
```

首次运行 `非h5端` 时都可能出现上面的问题，需要先执行一下 `pnpm i` 以生成 `src/manifest.json` 文件，后面就不会报错了。

## 5. `git commit` 报错。

请看 `commitlint.config.ts` 里面的配置，需要满足对应的设定。根据自己的需要，可以修改 `commitlint.config.ts` 里面的配置。

如果是一次的（比如引入了某个第三方库），可以通过 `--no-verify` 参数跳过校验：

```sh
git commit -m "feat: xxx" --no-verify
```

第三方库还有另外一种处理方式，放到特定的文件夹，然后在 `.eslintignore` 和 `.styleintignore` 里面加上该文件夹。

## 6. 不想要严格的 `git` 提交检测，怎么办？

直接把 `.husky` 这个文件删掉即可。(或者不删除，只把里面的文件内容注释掉。)

## 7. `uni-app` 无法使用 `process.env` 变量，怎么办？

使用 `import.meta.env` 替代！

## 8. 如何跟随 `uni-app` 官方升级？

项目下，执行 `npx @dcloudio/uvm@latest` 即可更新。

![alt text](./assets/14-1.png)

> 注意，上面的命令会自动安装 `vue-i18n`，可以手动删除（`pnpm un vue-i18n`)，也可以不理它（没多大影响）。

## 9. 如何把已经加入 `git` 管理的文件移出 `git` 管理?

- 第一步，先把文件移出`git` 管理，操作如下：

```text
# git rm -r --cached file1 file2  ## 针对某些文件
# git rm -r --cached dir1 dir2  ## 针对某些文件夹
# git rm -r --cached .  ## 针对所有文件
```

- 第二步，提交 `commit` 以正式删除的文件

> 总结：`git rm -r --cached .` + `git commit` 即可。

## 10. 支付宝小程序运行报错。

- 默认运行是会报错的，如下图
  ![alt text](./assets/14-2.png)

- 只需要勾上 `本地开发跳过 ES5 转译` 即可正常运行，如下图
  ![alt text](./assets/14-3.png)

> 总结：勾上 `本地开发跳过 ES5 转译` 即可。

## 11. 支持 `uni-app x` 吗？

不支持。但我们一直保持关注。[uni-app x 传送门](https://doc.dcloud.net.cn/uni-app-x/)

目前 `unibest` 已经有 `hbx` 模板，后续接入 `uni-app x` 会很容易，坐等官方发布。

## 12. 为啥 `package.json` 中 `vue` 已经 `3.4+` 了，还不支持 `defineModel` ?

`uni-app` 官方虽然已经把 `vue` 升级到 `3.4+` 了，但是目前只有 `H5端` 支持 `defineModel`，其他端目前运行报错，详情请看 `uni-app` 官网的发布日志：

[HBuilder X - Release Notes](https://3085868976.hiecheimaetu.com:22443/qn-GO8xCsKgpKDZWIBAkVCUkI1EnGmQUMT4.update.dcloud.net.cn/hbuilderx/changelog/4.14.2024043013.html)

关键截图如下：（仅支持 `H5端`）

![alt text](./assets/14-4.png)

真实运行报错截图如下：（分别是 `小程序` 和 `APP`， 都会报错 ）

![alt text](./assets/14-5.png)

![alt text](./assets/14-6.png)

## 13. `base` 模板如何接 `uniCloud` ?

- 1. 操作方案：直接在原始项目目录上右键（就是导入整个 unibest 项目文件夹），重新识别项目类型，就可以关联 `uniCloud` 了，然后用原始项目直接运行就可以了，不需要再 `pnpm dev:app` 后导入 `dist/dev/app` 再运行了。

- 2. 问：其他模板可以吗？答：其他模板也可以，操作同上。

- 3. 我写的文章链接：[【unibest】可以去掉 hbx 模版了，base 模板一统天下](https://mp.weixin.qq.com/s?__biz=MzUxMzAwNzMwNw==&mid=2247484792&idx=1&sn=b6116198f265384e5a51bd2bd95bea90&chksm=f95a8edcce2d07caba60782e17e48d766612c0ad85c019379fd5ac37890e31b6ca7049e670f7&scene=178&cur_album_id=3438500614009782275#rd)

## 14. 微信小程序编译报错

```text
[ WXSS 文件编译错误]
./app.wxss(61:2204): unexpected `\` at pos 5292(env: macOS,mp,1.06.2412040; lib: 3.7.12)
```

![alt text](14-2.png)
![alt text](14-1.png)
大概率是因为 `node` 版本比较低(比如 `v18`), 只需要把 `node`版本升级到 `v22+` 就行。(已经有多为同学遇到，可能是因为微信开发者工具升级导致的，升级后就可以了。)

如果上面还不行，则把微信开发者工具版本回退到 `1.06.2503290`。

![alt text](14-3.png)

还有一个可能性，今天群里反馈的（2025-06-21）：

> 暂不确定是哪个包小版本有问题，使用 unibest 模板里面的 lock 文件就可以，自己安装就有问题（稳定复现）。

如果还是有问题，建议试试使用我模板里面的 lock 文件，我模板里面的 lock 文件是稳定的。

## 15. ios 模拟器运行报错

```text
14:20:36.428 编译器版本：4.66（vue3）
14:20:36.428 正在编译中...
14:20:38.259 ✘ [ERROR] Cannot start service: Host version "0.20.2" does not match binary version "0.25.5"
14:20:38.259 1 error
14:20:38.264 failed to load config from /Users/burtlai/unibest-projects/unibest/vite.config.ts
14:20:38.264 error during build:
14:20:38.264 Error: The service was stopped
14:20:38.264     at /Users/burtlai/unibest-projects/unibest/node_modules/.pnpm/esbuild@0.20.2/node_modules/esbuild/lib/main.js:1084:25
14:20:38.264     at responseCallbacks.<computed> (/Users/burtlai/unibest-projects/unibest/node_modules/.pnpm/esbuild@0.20.2/node_modules/esbuild/lib/main.js:704:9)
14:20:38.264     at Socket.afterClose (/Users/burtlai/unibest-projects/unibest/node_modules/.pnpm/esbuild@0.20.2/node_modules/esbuild/lib/main.js:694:28)
14:20:38.265     at Socket.emit (node:events:536:35)
14:20:38.265     at endReadableNT (node:internal/streams/readable:1698:12)
14:20:38.265     at process.processTicksAndRejections (node:internal/process/task_queues:90:21)
14:20:38.276 已停止运行...
```

![alt text](14-5.png)

把 `package.json` 中的 `esbuild` 版本改为 `0.20.2` 即可。

## 16. pnpm i 报错

`pnpm 9 + node 18` 目前出现以下问题：`ERR PNPM INVALID WORKSPACE CONFIGURATIoN packages field missing or empty`

群友说：`node 22` 没有问题。原话如下：`我昨天也是这样，pnpm9+node18，今天升级到node22就好了，没有动pnpm`。

> 如果还不行，那就把 pnpm 升级到 `pnpm 10`。

全文完~

# 常见问题 2

## 1. `wot-ui` 的 `toast` + `message-box` 不生效。

- 1. `layout` 引入 `wot-ui` 的 `toast` + `message-box`。

```vue [src/layouts/default.vue]
<!-- src/layouts/default.vue -->
<template>
  <view>
    <slot />
    <wd-toast />
    <wd-message-box />
  </view>
</template>
```

> `unibest@2.1.0` 开始已经默认引入。

- 2.页面使用

```ts
import { useMessage } from 'wot-design-uni';

const message = useMessage();
const handleClick = () => {
  // 顺便测试 message 的使用
  message.show('显示隐藏切换');
};
```

## 2. `uni-app` 插件市场的插件如何使用？

`hbx` 模板可以直接引入，不在讨论范围内，下面描述的是 `普通模板`。

> 如果该插件支持 `npm` 安装，则直接安装即可，推荐统一使用 `pnpm` 安装。接着根据该插件的文档使用即可。

下面描写的是不支持 `npm` 安装的插件。

这里以 `sp-editor` 富文本插件为例，[插件地址](https://ext.dcloud.net.cn/plugin?id=14726)

- 1. 下载 `uni-app` 插件市场的代码。（居然要登录+看广告）

![alt text](./assets/15-1.png)

- 2. 解压并拷贝到 `unibest` 项目的 `uni_modules` 目录下。

![alt text](./assets/15-2.png)

- 3. 整理插件文件夹名称，把 `sp-editor_1.3.7` 改为 `sp-editor`。

> 不改会报错，因为内部代码都是用 `sp-editor` 不带版本号的。会导致查找文件失败。

![alt text](./assets/15-3.png)

- 4. 代码直接使用，无需引入组件。（ `uni-app插件` 有一套规范，`uni-app` 会自动查找，跟 `easycom` 类似。）

```html
<template>
  <view class="home">
    <view class="editor-box">
      <sp-editor
        :toolbar-config="{
          excludeKeys: ['direction', 'date', 'lineHeight', 'letterSpacing', 'listCheck'],
          iconSize: '18px',
        }"
        @init="initEditor"
        @input="inputOver"
        @upinImage="upinImage"
        @overMax="overMax"
        @addLink="addLink"
        @exportHtml="exportHtml"
      ></sp-editor>
    </view>
  </view>
</template>
```

完整版见下：
:::details

```vue
<route lang="json5">
{
  layout: 'demo',
  style: { navigationBarTitleText: '富文本' },
}
</route>

<template>
  <view class="home">
    <view class="editor-box">
      <sp-editor
        :toolbar-config="{
          excludeKeys: ['direction', 'date', 'lineHeight', 'letterSpacing', 'listCheck'],
          iconSize: '18px',
        }"
        @init="initEditor"
        @input="inputOver"
        @upinImage="upinImage"
        @overMax="overMax"
        @addLink="addLink"
        @exportHtml="exportHtml"
      ></sp-editor>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const editorIns = ref(null);

/**
 * 获取输入内容
 * @param {Object} e {html,text} 内容的html文本，和text文本
 */
function inputOver(e) {
  // 可以在此处获取到编辑器已编辑的内容
  console.log('==== inputOver :', e);
}

/**
 * 超出最大内容限制
 * @param {Object} e {html,text} 内容的html文本，和text文本
 */
function overMax(e) {
  // 若设置了最大字数限制，可在此处触发超出限制的回调
  console.log('==== overMax :', e);
}

/**
 * 编辑器就绪
 * @param {Object} editor 编辑器实例，你可以自定义调用editor实例的方法
 * @tutorial editor组件 https://uniapp.dcloud.net.cn/component/editor.html#editor-%E7%BB%84%E4%BB%B6
 * @tutorial 相关api https://uniapp.dcloud.net.cn/api/media/editor-context.html
 */
function initEditor(editor) {
  editorIns.value = editor; // 保存编辑器实例
  // 保存编辑器实例后，可以在此处获取后端数据，并赋值给编辑器初始化内容
  preRender();
}

function preRender() {
  setTimeout(() => {
    // 异步获取后端数据后，初始化编辑器内容
    editorIns.value.setContents({
      html: `<div>&nbsp;&nbsp;猫猫<img src="https://img.yzcdn.cn/vant/cat.jpeg"/></div>`,
    });
  }, 1000);
}

/**
 * 直接运行示例工程插入图片无法正常显示的看这里
 * 因为插件默认采用云端存储图片的方式
 * 以$emit('upinImage', tempFiles, this.editorCtx)的方式回调
 * @param {Object} tempFiles
 * @param {Object} editorCtx
 */
function upinImage(tempFiles, editorCtx) {
  /**
   * 本地临时插入图片预览
   * 注意：这里仅是示例本地图片预览，因为需要将图片先上传到云端，再将图片插入到编辑器中
   * 正式开发时，还请将此处注释，并解开下面 使用 uniCloud.uploadFile 上传图片的示例方法 的注释
   * @tutorial https://uniapp.dcloud.net.cn/api/media/editor-context.html#editorcontext-insertimage
   */
  // #ifdef MP-WEIXIN
  // 注意微信小程序的图片路径是在tempFilePath字段中
  editorCtx.insertImage({
    src: tempFiles[0].tempFilePath,
    width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
    success: function () {},
  });
  // #endif

  // #ifndef MP-WEIXIN
  editorCtx.insertImage({
    src: tempFiles[0].path,
    width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
    success: function () {},
  });
  // #endif

  /**
   * 使用 uniCloud.uploadFile 上传图片的示例方法（可适用多选上传）
   * 正式开发环境中，请将上面 本地临时插入图片预览 注释后，模仿以下写法
   */
  // tempFiles.forEach(async (item) => {
  //   uni.showLoading({
  //     title: '上传中请稍后',
  //     mask: true
  //   })
  //   let upfile = await uniCloud.uploadFile({
  //     filePath: item.path,
  //     // 同名会导致报错 policy_does_not_allow_file_overwrite
  //     // cloudPath可由 想要存储的文件夹/文件名 拼接，若不拼文件夹名则默认存储在cloudstorage文件夹中
  //     cloudPath: `cloudstorage/${item.name}`,
  //     cloudPathAsRealPath: true
  //   })
  //   editorCtx.insertImage({
  //     src: upfile.fileID,
  //     width: '80%', // 默认不建议铺满宽度100%，预留一点空隙以便用户编辑
  //     success: function () {
  //       uni.hideLoading()
  //     }
  //   })
  // })
}

/**
 * 导出 - toolbar需要开启export工具
 * @param {string} e 导出的html内容
 */
function exportHtml(e) {
  uni.navigateTo({
    url: '/pages/out/out',
    success(res) {
      // 传至导出页面解析即可
      res.eventChannel.emit('e-transmit-html', {
        data: e,
      });
    },
  });
}

/**
 * 添加超链接
 * @param {Object} e { text: '链接描述', href: '链接地址' }
 */
function addLink(e) {
  console.log('==== addLink :', e);
}
</script>
```

:::

## 3. Vue-Official （ ` vue.volar` ） 使用哪个版本？

`2025-05-22` 更新 ：经测试，最新可用版本为 `v2.2.8` ，`v2.2.10` 会报错。(可以关闭 vue.volar 的自动更新)

![alt text](./assets/15-4.png)

## 4. 为啥不用 `vant-ui`？

`vant-ui` 是 `WEB` 端 `UI 库`，不适用于 `uni-app`。

`uni-app` 没有 `window`, `document` 等 `WEB API`，所以凡是使用 `WEB API` 的 `框架`、`UI 库` 等都不适用于 `uni-app`。

## 4. 控制台报错 `[plugin:uni:mp-using-component] Unexpected token S in JSON at position 208`。

控制台报错如下：
![alt text](./assets/15-6.png)

原因是 `uni-pages` 这个插件最新版本 `0.2.22` 有问题，需要回退到 `0.2.20`。

![alt text](./assets/15-5.png)

执行如下命令即可：

```
pnpm add @uni-helper/vite-plugin-uni-pages@0.2.20
```

> 因为 `unibest` 在 `2.3.0（含）` 之前没有把 `pnpm-lock.yaml` 加入到版本管理，导致小版还是有细微差别。
>
> 在 `2.4.0` 开始已经加入，不会再出现这个问题。

## 5.不会 TypeScript 怎么办

不管个人还是团队、产品或者项目，从长远考虑我们都建议你学习 TypeScript，因为它是未来的趋势，而且大部分框架、库、插件都是用 TypeScript 开发的，足以证明它是构建一款成熟稳健产品的基石。

但考虑到实际情况，会各种客观原因存在，如果必须要用传统 JavaScript 进行开发，你可以在 `tsconfig.json` 里将 `allowJs` 设置为 `true` 即可，框架原有的 TypeScript 代码不会受到影响，并且你也可以在项目中使用 JavaScript 编写代码。

## 6.微信小程序 `INVALID_LOGIN`

微信小程序开发进入登录页时，可能导致如下问题：

```text
{errMsg: "navigateTo:fail Error: INVALID_LOGIN,
access_token expired [20250103 17:08:03][touristappid]"}
```

> 解答：游客模式会出现该错误，微信扫码登录一下就可以了。
