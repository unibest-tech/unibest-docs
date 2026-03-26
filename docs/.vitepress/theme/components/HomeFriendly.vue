<script setup lang="ts">
import { computed, ref } from 'vue';
import SpecialSponsor from './sponsor/SpecialSponsor.vue';
import VPFeature from 'vitepress/dist/client/theme-default/components/VPFeature.vue';

const data = ref({
  links: [
    // {
    //   icon: "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='none' version='1.1' width='512' height='512' viewBox='0 0 512 512'%3E%3Cdefs%3E%3CclipPath id='master_svg0_25_97'%3E%3Crect x='0' y='0' width='512' height='512' rx='0'/%3E%3C/clipPath%3E%3CclipPath id='master_svg1_25_11'%3E%3Crect x='11' y='39' width='490' height='435' rx='0'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg style='mix-blend-mode:passthrough' clip-path='url(%23master_svg0_25_97)'%3E%3Cg clip-path='url(%23master_svg1_25_11)'%3E%3Cg%3E%3Cpath d='M51.4931,294.222767578125L205.214,437.551767578125C211.594,443.498767578125,220.016,446.812767578125,228.778,446.812767578125C237.54,446.812767578125,245.962,443.498767578125,252.342,437.551767578125L254.554,435.512767578125C238.306,411.638767578125,228.778,382.751767578125,228.778,351.655767578125C228.778,269.073767578125,295.812,202.124767578125,378.5,202.124767578125C402.575,202.124767578125,425.288,207.817767578125,445.45,217.842767578125C446.215,212.320767578125,446.556,206.797767578125,446.556,201.19076757812502L446.556,196.262767578125C446.556,136.874967578125,403.595,86.238267578125,344.983,76.467747578125C306.191,70.010717578125,266.719,82.669897578125,238.986,110.36716757812499L228.778,120.562467578125L218.569,110.36716757812499C190.837,82.669897578125,151.365,70.010717578125,112.573,76.467747578125C53.9601,86.238267578125,11,136.874967578125,11,196.262767578125L11,201.19076757812502C11,236.448767578125,25.6319,270.17876757812496,51.4931,294.222767578125ZM378.5,473.999767578125C446.13,473.999767578125,501,419.199767578125,501,351.655767578125C501,284.112767578125,446.13,229.312767578125,378.5,229.312767578125C310.87,229.312767578125,256,284.112767578125,256,351.655767578125C256,419.199767578125,310.87,473.999767578125,378.5,473.999767578125Z' fill='%232B9939' fill-opacity='1'/%3E%3C/g%3E%3Cg style='mix-blend-mode:passthrough'%3E%3Cpath d='M322,415L441,415L441,293.5L419,293.5L419,393L344.5,393L344.5,293.5L322,293.5L322,415Z' fill='%23FFFFFF' fill-opacity='1'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    //   title: 'Uni Helper',
    //   details: 'Uni Helper 旨在增强 uni-app 系列产品的开发体验。',
    //   link: 'https://uni-helper.js.org/',
    // },
    {
      title: 'Ruoyi-Plus-Uniapp', // 2026-03-25 开始，一年半，到 2027-09-25 过期
      icon: 'https://oss.laf.run/ukw0y1-site/sponsor/ruoyi-plus-uniapp.png',
      details:
        'Ruoyi-Plus-Uniapp 是AI原生Java全栈开发框架，基于 Spring Boot 3 + Vue 3 + UniApp，内置AI技能体系，覆盖后端、前端、移动端全流程开发。',
      link: 'https://ruoyi.plus',
      iconWidth: '100px',
    },
    {
      icon: 'https://oss.laf.run/ukw0y1-site/unibest-discussion-group/finclip.jpg',
      title: 'FinClip 小程序容器',
      details:
        '无需重构App，非侵入集成 3MB SDK，即可将现有小程序迁移部署到自有App中，一次开发兼容 iOS、Android、Harmony OS、智能设备（车机、IoT ）等多端运行。 ',
      link: 'https://marketplace.finclip.com/?utm_source=kol-cpc&utm_medium=unibest&utm_campaign=web-home',
      iconWidth: '48px',
    },
    {
      icon: 'https://registration-bucket.oss-cn-shanghai.aliyuncs.com/tickets/attachments/20251230/fb86e570e47b415ebee7cccd0378b009_图层 2.png',
      title: 'CCFly',
      details: 'Claude Code 中转服务 | AI编程助手 | 国内直连',
      link: 'https://ccfly.codes/?inviteCode=KVB090KC',
      iconWidth: '60px',
    },
    // {
    //   icon: 'https://oss.laf.run/ukw0y1-site/onlinenotepad101.jpg',
    //   title: '在线记事本 – 免费在线文本编辑器',
    //   details:
    //     '最好用的在线记事本，专为无干扰写作、高效记笔记。完全免费，无需注册，打开即用，支持富文本内容编辑。支持保存、导出，以及分享给其他人。简洁流畅，专注创作。',
    //   link: 'https://onlinenotepad101.org/zh',
    //   iconWidth: '60px',
    // },
    // {
    //   icon: 'https://static.yicode.tech/chensuiyi-128x128.jpg',
    //   title: '陈随易',
    //   details: '前端之虎，农村程序员，独立开发者，行业观察员。',
    //   link: 'https://me.yicode.tech/',
    // },
  ],
});

const links = computed(() => {
  return data.value.links || [];
});

const grid = computed(() => {
  const length = links.value.length || 0;
  if (!length) {
    return;
  } else {
    return 'grid-3';
  }
});
</script>

<template>
  <SpecialSponsor title="铂金赞助商" />
  <div v-if="links && links.length" class="VPFeatures">
    <div class="container">
      <h1 class="friendly-title">友情链接</h1>
      <div class="items">
        <div v-for="feature in links" :key="feature.title" class="item" :class="[grid]">
          <VPFeature
            :icon="{ src: feature.icon, height: '48px', width: feature.iconWidth || '48px' }"
            :title="feature.title"
            :details="feature.details"
            :link="feature.link"
          />
        </div>
      </div>
    </div>
  </div>
  <SpecialSponsor title="黄金赞助商" />
</template>

<style scoped>
.VPFeatures {
  position: relative;
  padding: 0 24px;
}

:deep(.VPImage) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 6px;
  /* background-color: var(--vp-c-default-soft); */
  /* width: 48px; */
  height: 48px;
  font-size: 24px;
  transition: background-color 0.25s;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 0 64px;
  }
}

.container {
  margin: 0 auto;
  max-width: 1152px;
}

.friendly-title {
  text-align: center;
  margin-bottom: 36px;
  margin-top: 24px;
  font-size: 24px;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
}

.item {
  padding: 8px;
  width: 100%;
}

@media (min-width: 640px) {
  .item.grid-2,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 2);
  }
}

@media (min-width: 768px) {
  .item.grid-2 {
    width: calc(100% / 2);
  }

  .item.grid-3,
  .item.grid-4,
  .item.grid-6 {
    width: calc(100% / 3);
  }
}

@media (min-width: 960px) {
  .item.grid-4 {
    width: calc(100% / 4);
  }
}
</style>
