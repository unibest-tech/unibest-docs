// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './custom.css';

import Banner from './components/Banner.vue';
import NavBarTitleAfter from './components/NavBarTitleAfter.vue';
import HomeFriendly from './components/HomeFriendly.vue';
import HomeStar from './components/HomeStar.vue';
import Showcase2 from './components/showcase/Showcase2.vue';
import FreshImage from './components/FreshImage.vue';
import ElementPlus from 'element-plus';
import SpecialSponsor from './components/sponsor/SpecialSponsor.vue';
import AsideSponsors from './components/sponsor/AsideSponsors.vue';
import SidebarSponsor from './components/sponsor/SidebarSponsor.vue';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    // https://vitepress.dev/guide/extending-default-theme#layout-slots
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(Banner),
      'home-hero-after': () => h(SpecialSponsor, { title: '砖石赞助商' }),
      // 'home-hero-info-after': () => h(HomeStar), // github star
      'sidebar-nav-before': () => h(SidebarSponsor),
      'home-features-after': () => h(HomeFriendly), // 友情链接
      'nav-bar-title-after': () => h(NavBarTitleAfter), // 版本号
      'aside-outline-after': () => h(AsideSponsors), // 侧边栏广告位
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('FreshImage', FreshImage);
    app.component('ShowCase', Showcase2);
    app.use(ElementPlus);
  },
} satisfies Theme;
