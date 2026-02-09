<template>
  <ElDialog
    v-model="dialogVisible"
    title="🎉 新增图表库支持！"
    :show-close="false"
    :close-on-click-modal="false"
    width="600px"
    style="margin-top: 30vh; max-width: 90%"
    class="rounded-lg shadow-lg"
  >
    <div class="chart-announcement">
      <p class="mb-4">unibest CLI 现已支持在创建项目时选择图表库：</p>

      <div class="chart-item">
        <div class="chart-icon">📊</div>
        <div class="chart-info">
          <strong>lime-echart</strong>
          <p>ECharts 全端兼容图表库，支持多端</p>
        </div>
      </div>

      <div class="chart-item">
        <div class="chart-icon">📈</div>
        <div class="chart-info">
          <strong>ucharts</strong>
          <p>秋云高性能跨平台图表库，专为 uniapp 优化</p>
        </div>
      </div>

      <div class="usage-section mt-4">
        <p class="font-bold mb-2">💡 使用方式：</p>
        <pre class="code-block"># 创建项目时指定
pnpm create unibest my-project --lime-echart --ucharts

# 或交互式选择
pnpm create unibest my-project

# 为已有项目添加
pnpm create unibest add lime-echart ucharts</pre>
      </div>
    </div>

    <template #footer>
      <ElButton type="primary" @click="confirm">知道了</ElButton>
    </template>
  </ElDialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isPC = () => {
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

const STORAGE_KEY = 'unibest-chart-announcement-shown'

const checkShown = () => {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true'
  }
  catch {
    return false
  }
}

const dialogVisible = ref(false)

const updateVisibility = () => {
  dialogVisible.value = isPC() && !checkShown()
}

const markShown = () => {
  try {
    localStorage.setItem(STORAGE_KEY, 'true')
    dialogVisible.value = false
  }
  catch (e) {
    console.error('保存本地存储失败:', e)
  }
}

const handleResize = () => {
  updateVisibility()
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const confirm = () => {
  markShown()
}
</script>

<style scoped>
.chart-announcement {
  line-height: 1.8;
}

.chart-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px;
  background: var(--el-fill-color-light);
  border-radius: 8px;
  margin-bottom: 12px;
}

.chart-icon {
  font-size: 24px;
  flex-shrink: 0;
}

.chart-info strong {
  color: var(--el-color-primary);
  font-size: 15px;
}

.chart-info p {
  margin: 4px 0 0;
  font-size: 13px;
  color: var(--el-text-color-secondary);
}

.usage-section {
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
