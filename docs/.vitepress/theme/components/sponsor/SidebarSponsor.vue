<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  title?: string;
}

withDefaults(defineProps<Props>(), {
  title: '铂金赞助商',
});

const data = ref({
  tier: 'Platinum',
  size: 'large',
  items: [
    // {
    //   name: '赞助商名称',
    //   img: 'https://unibest.tech/logo.svg',
    //   url: 'https://unibest.tech',
    // },
    // {
    //   name: 'wot-ui',
    //   img: 'https://sponsor.wot-ui.cn/assets/sponsor/wot-ui.png',
    //   url: 'https://wot-ui.cn',
    // },
  ],
});

// 获取第一个铂金赞助商
const platinumSponsor = computed(() => {
  return data.value?.items?.[0] || null;
});
</script>

<template>
  <section v-if="platinumSponsor" class="special-sponsor">
    <div class="special-sponsor-container">
      <a class="logo" :href="platinumSponsor.url" target="_blank" rel="sponsored noopener">
        <picture>
          <img :src="platinumSponsor.img" :alt="platinumSponsor.name" style="height: 72px" />
        </picture>
      </a>
      <span>{{ platinumSponsor.name }}</span>
    </div>
  </section>
</template>

<style scoped>
.special-sponsor {
  /* border-top: 1px solid var(--vp-c-gray-soft); */
  border-bottom: 1px solid var(--vp-c-gray-soft);
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 0;
}

.special-sponsor h3 {
  text-align: center;
  font-size: 13px;
  font-weight: 500;
}

.special-sponsor-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.special-sponsor .logo {
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

.special-sponsor span {
  color: var(--vp-c-text-2);
  font-weight: 500;
  font-size: 13px;
  vertical-align: middle;
  flex: 1;
}

.special-sponsor a {
  display: flex;
  justify-content: center;
  padding: 0 24px;
}

.special-sponsor-empty {
  border-top: 1px solid var(--vp-c-gray-soft);
  border-bottom: 1px solid var(--vp-c-gray-soft);
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 64px;
}

.special-sponsor-empty span:first-child {
  text-align: right;
}

.special-sponsor-empty img {
  height: 42px;
  margin: -6px 0;
}

.dark .special-sponsor-empty img {
  filter: grayscale(1) invert(1);
}

@media (max-width: 576px) {
  .special-sponsor-empty {
    flex-direction: column;
    height: auto;
  }
  .special-sponsor-empty img {
    height: 36px;
    margin: 8px 0;
  }
  .special-sponsor-empty span {
    text-align: center !important;
  }
}
</style>
