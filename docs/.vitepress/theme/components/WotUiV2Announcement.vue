<template>
  <ElDialog
    v-model="dialogVisible"
    title="🎉 新增 wot-ui-v2 支持"
    :show-close="false"
    :close-on-click-modal="false"
    width="620px"
    style="margin-top: 28vh; max-width: 92%"
    class="rounded-lg shadow-lg"
  >
    <div class="announcement">
      <p class="mb-4">
        unibest CLI 现已支持 <code>wot-ui-v2</code>（<code>@wot-ui/ui</code>）。
      </p>

      <div class="item">
        <div class="icon">🚀</div>
        <div class="info">
          <strong>创建项目时可直接选择</strong>
          <p><code>wot-ui-v2</code> 已在 UI 列表中前置，命令行也支持 <code>-u wot-ui-v2</code>。</p>
        </div>
      </div>

      <div class="item">
        <div class="icon">🎨</div>
        <div class="info">
          <strong>H5 样式自动生效</strong>
          <p>脚手架会自动注入 <code>wot-ui-resolver.ts</code> 并配置 <code>vite.config.ts</code>，避免 <code>wd-button</code> 无样式问题。</p>
        </div>
      </div>

      <div class="usage mt-4">
        <p class="font-bold mb-2">💡 使用方式：</p>
        <pre class="code-block"># 直接指定 wot-ui-v2
pnpm create unibest my-project -u wot-ui-v2 -p h5,mp-weixin

# 或交互式选择 UI 库
pnpm create unibest my-project</pre>
      </div>
    </div>

    <template #footer>
      <ElButton type="primary" @click="confirm">知道了</ElButton>
    </template>
  </ElDialog>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const STORAGE_KEY = 'unibest-wot-ui-v2-announcement-shown'

const isDesktop = () => {
  const mobileKeywords = [
    'Android',
    'webOS',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone',
  ]
  const isMobile = mobileKeywords.some(keyword => navigator.userAgent.includes(keyword))
  return !isMobile && window.innerWidth >= 768
}

const hasShown = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  }
  catch {
    return false
  }
}

const dialogVisible = ref(false)

const updateVisibility = () => {
  dialogVisible.value = isDesktop() && !hasShown()
}

const confirm = () => {
  try {
    localStorage.setItem(STORAGE_KEY, 'true')
  }
  catch {
    // ignore
  }
  dialogVisible.value = false
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('resize', updateVisibility)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibility)
})
</script>

<style scoped>
.announcement {
  line-height: 1.8;
}

.item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: var(--el-fill-color-light);
  border-radius: 8px;
  margin-bottom: 12px;
}

.icon {
  font-size: 24px;
  flex-shrink: 0;
}

.info strong {
  color: var(--el-color-primary);
  font-size: 15px;
}

.info p {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--el-text-color-secondary);
}

.usage {
  background: var(--el-fill-color-light);
  padding: 12px;
  border-radius: 8px;
}

.code-block {
  background: var(--el-fill-color);
  padding: 12px;
  border-radius: 6px;
  font-size: 13px;
  overflow-x: auto;
  margin: 0;
}

.mb-4 {
  margin-bottom: 16px;
}

.mb-2 {
  margin-bottom: 8px;
}

.mt-4 {
  margin-top: 16px;
}

.font-bold {
  font-weight: 600;
}
</style>
