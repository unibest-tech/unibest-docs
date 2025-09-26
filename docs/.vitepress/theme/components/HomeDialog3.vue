<template>
  <ElDialog
    v-model="dialogVisible"
    title="BUG 提醒"
    :show-close="false"
    :close-on-click-modal="false"
    width="600px"
    style="margin-top: 30vh; max-width: 90%"
    class="rounded-lg shadow-lg"
  >
    2025年9月23日-25日生成项目的鸽友们，万分抱歉，3.16.3-3.17.0版本有BUG，使用这几个版本的朋友请升级到
    3.18.0<br /><br />
    这几个版本请求方式添加了cancel导致请求使用很别扭，建议升级到3.18.0版本<br /><br />
    PS: 近期准备开发新版的脚手架，方案设计请看
    <el-link
      href="https://github.com/unibest-tech/unibest/issues/285"
      target="_blank"
      class="text-blue-500"
      >unibest/issues/285</el-link
    >

    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        text-align: center;
        margin-top: 1em;
      "
    >
      <ElButton type="primary" @click="confirm">已知晓</ElButton>
    </div>
  </ElDialog>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// 判断是否为PC端浏览器
const isPC = () => {
  // 检测userAgent中的移动设备关键词
  const mobileKeywords = [
    'Android',
    'webOS',
    'iPhone',
    'iPad',
    'iPod',
    'BlackBerry',
    'Windows Phone',
  ];
  const isMobile = mobileKeywords.some((keyword) => navigator.userAgent.includes(keyword));

  // 结合屏幕宽度判断，大于768px视为PC端
  return !isMobile && window.innerWidth >= 768;
};

// 本地存储键名常量
const STORAGE_KEY = 'unibest_v3.17.0-dialog-shown';

// 检查本地存储中是否已填写过表单
const checkFormSubmitted = () => {
  try {
    // 尝试读取本地存储，处理可能的浏览器安全限制
    const submitted = localStorage.getItem(STORAGE_KEY);
    return submitted === 'true';
  } catch (e) {
    console.error('读取本地存储失败:', e);
    return false; // 存储不可用时默认视为未填写
  }
};

// 控制弹窗显示/隐藏的响应式变量
const dialogVisible = ref(false);

// 更新弹窗显示状态
const updateDialogVisibility = () => {
  // 仅当PC端且未填写过表单时显示弹窗
  dialogVisible.value = isPC() && !checkFormSubmitted();
};

// 标记表单已填写并保存到本地存储
const markFormSubmitted = () => {
  try {
    localStorage.setItem(STORAGE_KEY, 'true');
    dialogVisible.value = false;
  } catch (e) {
    console.error('保存到本地存储失败:', e);
  }
};

// 窗口大小变化时重新检测
const handleResize = () => {
  updateDialogVisibility();
};
onMounted(() => {
  // 初始检查
  updateDialogVisibility();
  // 添加窗口大小变化监听
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const confirm = () => {
  window.open('/blog/2', '_blank');
  dialogVisible.value = false;
  markFormSubmitted();
};
</script>
