// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';
import './custom.css';

import Banner from './components/Banner.vue';
import NavBarTitleAfter from './components/NavBarTitleAfter.vue';
import HomeFeaturesAfter from './components/HomeFeaturesAfter.vue';
import Showcase2 from './components/showcase/Showcase2.vue';
import FreshImage from './components/FreshImage.vue';
import ElementPlus from 'element-plus';
import AsideSponsors from './components/AsideSponsors.vue';
import 'element-plus/dist/index.css';
import 'element-plus/theme-chalk/dark/css-vars.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'layout-top': () => h(Banner),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // 'home-hero-info-after': () => h(HomeStar),
      'nav-bar-title-after': () => h(NavBarTitleAfter),
      'home-features-after': () => h(HomeFeaturesAfter),
      'aside-outline-after': () => h(AsideSponsors),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('FreshImage', FreshImage);
    app.component('ShowCase', Showcase2);
    app.use(ElementPlus);
  },
} satisfies Theme;
