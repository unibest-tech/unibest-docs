<script setup lang="ts">
import { computed, ref } from 'vue';
// 参考 wot-ui 的赞助位组件

const demo = [
  {
    tier: 'Platinum',
    size: 'large',
    items: [
      {
        name: 'wot-ui',
        img: 'https://sponsor.wot-ui.cn/assets/sponsor/wot-ui.png',
        url: 'https://wot-ui.cn',
      },
      {
        name: 'wot-ui',
        img: 'https://sponsor.wot-ui.cn/assets/sponsor/wot-ui.png',
        url: 'https://wot-ui.cn',
      },
    ],
  },
  {
    tier: 'Gold',
    size: 'medium',
    items: [
      {
        name: 'wot-ui',
        img: 'https://sponsor.wot-ui.cn/assets/sponsor/wot-ui.png',
        url: 'https://wot-ui.cn',
      },
      {
        name: 'wot-ui',
        img: 'https://sponsor.wot-ui.cn/assets/sponsor/wot-ui.png',
        url: 'https://wot-ui.cn',
      },
      {
        name: 'wot-ui',
        img: 'https://sponsor.wot-ui.cn/assets/sponsor/wot-ui.png',
        url: 'https://wot-ui.cn',
      },
    ],
  },
];
const data = ref([
  {
    tier: 'Platinum',
    size: 'large',
    items: [
      {
        name: 'Ruoyi-Plus-Uniapp',
        img: 'https://oss.laf.run/ukw0y1-site/sponsor/ruoyi-plus-uniapp.png',
        desc: 'AI驱动全栈开发，一套代码三端交付，框架即文档',
        url: 'https://ruoyi.plus',
        iconWidth: '200px',
      },
      {
        name: 'ccfly',
        img: 'https://registration-bucket.oss-cn-shanghai.aliyuncs.com/tickets/attachments/20251230/fb86e570e47b415ebee7cccd0378b009_图层 2.png',
        desc: '稳定、快速、无限制的 Claude Code 体验。开发效率提升 10 倍，从这里开始。',
        url: 'https://ccfly.codes/?inviteCode=KVB090KC',
        iconWidth: '80px',
      },
      {
        name: 'FinClip',
        desc: '无需重构，非侵入集成SKD就搞定！装下无限小程序，你的APP也能变”微信“',
        img: 'https://oss.laf.run/ukw0y1-site/unibest-discussion-group/finclip2.jpg',
        url: 'https://marketplace.finclip.com/?utm_source=kol-cpc&utm_medium=unibest&utm_campaign=docs ',
        iconWidth: '160px',
      },
    ],
  },
]);

// 分离超级赞助和金牌赞助
const superSponsors = computed(() => {
  return data.value?.find((sponsor) => sponsor.tier === 'Platinum');
});

const goldSponsors = computed(() => {
  return data.value?.find((sponsor) => sponsor.tier === 'Gold');
});

// 判断金牌赞助数量是否为奇数
const isGoldSponsorsOdd = computed(() => {
  return (goldSponsors.value?.items?.length || 0) % 2 === 1;
});
</script>

<template>
  <div class="VPDocAsideSponsors">
    <a class="sponsors-aside-text" href="/reward/sponsor">赞助位</a>
    <div class="VPSponsors vp-sponsor aside">
      <!-- 超级赞助：一行一个 -->
      <section class="custom-sponsor-section" v-if="superSponsors?.items.length">
        <div class="custom-sponsors-grid" data-grid="1">
          <div
            class="custom-sponsor-grid-item"
            v-for="sponsor in superSponsors.items"
            :key="sponsor.name"
          >
            <a
              class="custom-sponsor-link"
              :href="sponsor.url"
              target="_blank"
              rel="sponsored noopener"
            >
              <div class="custom-sponsor-box">
                <h4 class="visually-hidden">{{ sponsor.name }}</h4>
                <div v-if="sponsor.desc" class="sponsor-with-desc-container">
                  <img
                    v-if="sponsor.img"
                    class="sponsor-image-full"
                    :style="sponsor.iconWidth ? { width: sponsor.iconWidth } : {}"
                    :src="sponsor.img"
                    :alt="sponsor.name"
                  />
                  <div class="sponsor-desc-text">
                    {{ sponsor.desc }}
                  </div>
                </div>
                <img
                  v-else-if="sponsor.img"
                  class="sponsor-image-normal"
                  :style="sponsor.iconWidth ? { width: sponsor.iconWidth } : {}"
                  :src="sponsor.img"
                  :alt="sponsor.name"
                />
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- 金牌赞助：一行两个 -->
      <section class="custom-sponsor-section" v-if="goldSponsors?.items.length">
        <div class="custom-sponsors-grid" data-grid="2">
          <div
            class="custom-sponsor-grid-item"
            v-for="sponsor in goldSponsors.items"
            :key="sponsor.name"
          >
            <a
              class="custom-sponsor-link"
              :href="sponsor.url"
              target="_blank"
              rel="sponsored noopener"
            >
              <div class="custom-sponsor-box">
                <h4 class="visually-hidden">{{ sponsor.name }}</h4>
                <div v-if="sponsor.desc" class="sponsor-with-desc-container">
                  <img
                    v-if="sponsor.img"
                    class="sponsor-image-full"
                    :src="sponsor.img"
                    :alt="sponsor.name"
                  />
                  <div class="sponsor-desc-text">
                    {{ sponsor.desc }}
                  </div>
                </div>
                <img
                  v-else-if="sponsor.img"
                  class="sponsor-image-normal"
                  :src="sponsor.img"
                  :alt="sponsor.name"
                />
              </div>
            </a>
          </div>
          <!-- 当金牌赞助为奇数时，默认赞助位填补到金牌赞助位置 -->
          <!-- <div class="custom-sponsor-grid-item" v-if="isGoldSponsorsOdd">
            <a class="custom-sponsor-link" href="/reward/sponsor" rel="sponsored noopener">
              <div class="custom-sponsor-box">
                <span class="sponsor-placeholder-text">成为赞助商</span>
              </div>
            </a>
          </div> -->
        </div>
      </section>

      <!-- 当金牌赞助为偶数或没有金牌赞助时，默认赞助位占据一整行 -->
      <!-- <section class="vp-sponsor-section" v-if="!isGoldSponsorsOdd || !goldSponsors?.items.length">
        <div class="VPSponsorsGrid vp-sponsor-grid xmini" data-vp-grid="1">
          <div class="vp-sponsor-grid-item">
            <a class="vp-sponsor-grid-link" href="/reward/sponsor" rel="sponsored noopener">
              <article class="vp-sponsor-grid-box">
                <span class="vp-sponsor-grid-text">成为赞助商</span>
              </article>
            </a>
          </div>
        </div>
      </section> -->
    </div>
  </div>
</template>

<style>
/* 基础样式重置 */
* {
  box-sizing: border-box;
}

/* 赞助区块容器 */
.custom-sponsor-section {
  margin-bottom: 16px;
}

/* 赞助网格布局 */
.custom-sponsors-grid {
  display: grid;
  gap: 12px;
}

.custom-sponsors-grid[data-grid='1'] {
  grid-template-columns: 1fr;
}

.custom-sponsors-grid[data-grid='2'] {
  grid-template-columns: repeat(2, 1fr);
}

/* 赞助项 */
.custom-sponsor-grid-item {
  display: flex;
}

/* 赞助链接 */
.custom-sponsor-link {
  display: block;
  width: 100%;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  transition: background-color 0.25s;
  overflow: hidden;
}

.custom-sponsor-link:hover {
  background-color: var(--vp-c-bg-elv);
}

/* 赞助内容盒子 */
.custom-sponsor-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  width: 100%;
  height: 100%;
}

/* 普通图片样式（无描述文字） */
.sponsor-image-normal {
  max-width: 100%;
  max-height: 72px;
  width: auto;
  height: auto;
  object-fit: contain;
  padding: 8px;
}

/* 有描述文字的赞助项容器 */
.sponsor-with-desc-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  padding: 8px;
}

/* 有描述文字的图片样式 */
.sponsor-image-full {
  max-width: 100%;
  width: 100%;
  max-height: none;
  height: auto;
  object-fit: contain;
  display: block;
}

/* 描述文字样式 */
.sponsor-desc-text {
  color: var(--vp-c-text-2);
  font-size: 12px;
  line-height: 1.6;
  margin-top: 10px;
  text-align: center;
  width: 100%;
  word-wrap: break-word;
  white-space: normal;
}

.dark .sponsor-desc-text {
  color: var(--vp-c-gray-1);
}

/* 占位文字样式 */
.sponsor-placeholder-text {
  color: var(--vp-c-text-2);
  font-size: 12px;
  text-align: center;
}

/* 赞助位标题 */
a.sponsors-aside-text {
  color: var(--vp-c-text-3);
  display: block;
  margin: 2em 0 1em;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
}
</style>
