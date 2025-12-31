# tabbar 专题

<https://www.bilibili.com/video/BV1omeJzDE8Z?vd_source=59df4f5d6bca7e40fba5b30d7c8b1ce2&spm_id_from=333.788.player.switch>

哔哩哔哩录制了视频，感兴趣的可以去看看，如果对您有帮助的话，记得一键三连哈。

![alt text](2-tabbar-bilibili.png)

## 策略总览

> 2025-06-21 开始，新的 `base` 模板同时支持旧的 `tabbar` 和 `spa` 模板，这里大致介绍一下使用。(`tabbar` 和 `spa` 模板已经不再需要了。)

`tabbar` 分为 `3 种` 情况：0,1,2。(`2025-12-31` 更新，去掉了几乎用不上的 `无缓存的自定义 tabbar`（3）)

- 0: 'NO_TABBAR' `无 tabbar`
- 1: 'NATIVE_TABBAR' `原生 tabbar`
- 2: 'CUSTOM_TABBAR' `自定义 tabbar`

---

- 0 `无 tabbar`，只有一个页面入口，底部无 `tabbar` 显示；常用于临时活动页。
- 1 `原生 tabbar`，使用 `switchTab` 切换 tabbar，`tabbar` 页面有缓存。
  - 优势：原生自带的 tabbar，最先渲染，有缓存。
  - 劣势：只能使用 2 组图片来切换选中和非选中状态，修改颜色只能重新换图片（或者用 iconfont）。
- 2 `自定义 tabbar`，使用 `switchTab` 切换 tabbar，`tabbar` 页面有缓存。使用了第三方 UI 库的 `tabbar` 组件，并隐藏了原生 `tabbar` 的显示。
  - 优势：可以随意配置自己想要的 `svg icon`，切换字体颜色方便。有缓存。可以实现各种花里胡哨的动效等。
  - 劣势：首次点击 tabbar 会闪烁（据我所知，是无解的）。

## 策略配置

首先选择使用哪个 `策略`，然后配置对应的 `tabbarList`。代码如下：

```ts
/**
 * tabbar 选择的策略，更详细的介绍见 tabbar.md 文件
 * 0: 'NO_TABBAR' `无 tabbar`
 * 1: 'NATIVE_TABBAR'  `原生 tabbar`
 * 2: 'CUSTOM_TABBAR' `自定义 tabbar`
 *
 * 温馨提示：本文件的任何代码更改了之后，都需要重新运行，否则 pages.json 不会更新导致配置不生效
 */
export const TABBAR_STRATEGY_MAP = {
  NO_TABBAR: 0,
  NATIVE_TABBAR: 1,
  CUSTOM_TABBAR: 2,
};

// TODO: 1/3. 通过这里切换使用tabbar的策略
// 如果是使用 NO_TABBAR(0)，nativeTabbarList 和 customTabbarList 都不生效(里面的配置不用管)
// 如果是使用 NATIVE_TABBAR(1)，只需要配置 nativeTabbarList，customTabbarList 不生效
// 如果是使用 CUSTOM_TABBAR(2)，只需要配置 customTabbarList，nativeTabbarList 不生效
export const selectedTabbarStrategy = TABBAR_STRATEGY_MAP.CUSTOM_TABBAR;

// TODO: 2/3. 使用 NATIVE_TABBAR 时，更新下面的 tabbar 配置
export const nativeTabbarList: NativeTabBarItem[] = [
  {
    iconPath: 'static/tabbar/home.png',
    selectedIconPath: 'static/tabbar/homeHL.png',
    pagePath: 'pages/index/index',
    text: '首页',
  },
  {
    iconPath: 'static/tabbar/personal.png',
    selectedIconPath: 'static/tabbar/personalHL.png',
    pagePath: 'pages/me/me',
    text: '个人',
  },
];

// TODO: 3/3. 使用 CUSTOM_TABBAR 时，更新下面的 tabbar 配置
// 如果需要配置鼓包，需要在 'tabbar/store.ts' 里面设置，最后在 `tabbar/index.vue` 里面更改鼓包的图片
export const customTabbarList: CustomTabBarItem[] = [
  {
    text: '首页',
    pagePath: 'pages/index/index',
    // 注意 unocss 图标需要如下处理：（二选一）
    // 1）在fg-tabbar.vue页面上引入一下并注释掉（见tabbar/index.vue代码第2行）
    // 2）配置到 unocss.config.ts 的 safelist 中
    iconType: 'unocss',
    icon: 'i-carbon-home',
    // badge: 'dot',
  },
  {
    pagePath: 'pages/me/me',
    text: '我的',
    // 1）在fg-tabbar.vue页面上引入一下并注释掉（见tabbar/index.vue代码第2行）
    // 2）配置到 unocss.config.ts 的 safelist 中
    iconType: 'unocss',
    icon: 'i-carbon-user',
    // badge: 10,
  },
  // 其他类型演示
  // 1、uiLib
  // {
  //   pagePath: 'pages/index/index',
  //   text: '首页',
  //   iconType: 'uiLib',
  //   icon: 'home',
  // },
  // 2、iconfont
  // {
  //   pagePath: 'pages/index/index',
  //   text: '首页',
  //   // 注意 iconfont 图标需要额外加上 'iconfont'，如下
  //   iconType: 'iconfont',
  //   icon: 'iconfont icon-my',
  // },
  // 3、image
  // {
  //   pagePath: 'pages/index/index',
  //   text: '首页',
  //   // 使用 ‘image’时，需要配置 icon + iconActive 2张图片
  //   iconType: 'image',
  //   icon: '/static/tabbar/home.png',
  //   iconActive: '/static/tabbar/homeHL.png',
  // },
];

/**
 * 是否启用 tabbar 缓存
 * NATIVE_TABBAR(1) 和 CUSTOM_TABBAR(2) 时，需要tabbar缓存
 */
export const tabbarCacheEnable = [
  TABBAR_STRATEGY_MAP.NATIVE_TABBAR,
  TABBAR_STRATEGY_MAP.CUSTOM_TABBAR,
].includes(selectedTabbarStrategy);

/**
 * 是否启用自定义 tabbar
 * CUSTOM_TABBAR(2) 时，启用自定义tabbar
 */
export const customTabbarEnable = [TABBAR_STRATEGY_MAP.CUSTOM_TABBAR].includes(
  selectedTabbarStrategy
);

/**
 * 是否需要隐藏原生 tabbar
 * CUSTOM_TABBAR(2) 时，需要隐藏原生tabbar
 */
export const needHideNativeTabbar = selectedTabbarStrategy === TABBAR_STRATEGY_MAP.CUSTOM_TABBAR;

const _tabbarList = customTabbarEnable
  ? customTabbarList.map((item) => ({ text: item.text, pagePath: item.pagePath }))
  : nativeTabbarList;
export const tabbarList = customTabbarEnable ? customTabbarList : nativeTabbarList;

const _tabbar: TabBar = {
  // 只有微信小程序支持 custom。App 和 H5 不生效
  custom: selectedTabbarStrategy === TABBAR_STRATEGY_MAP.CUSTOM_TABBAR,
  color: '#999999',
  selectedColor: '#018d71',
  backgroundColor: '#F8F8F8',
  borderStyle: 'black',
  height: '50px',
  fontSize: '10px',
  iconWidth: '24px',
  spacing: '3px',
  list: _tabbarList as unknown as TabBar['list'],
};

export const tabBar = tabbarCacheEnable ? _tabbar : undefined;
```

上面的代码已经传到各个主分支了。
