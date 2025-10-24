<template>
  <ElDialog
    v-model="dialogVisible"
    title="unibest 需要您的投票支持"
    :show-close="false"
    :close-on-click-modal="false"
    width="500px"
    style="margin-top: 30vh; max-width: 90%"
    class="rounded-lg shadow-lg"
  >
    <p>
      我正在参加 Gitee 2025
      最受欢迎的开源软件投票活动，快来给我投票吧！https://gitee.com/activity/2025opensource?ident=I6ZL1D
    </p>
    <br />
    <p>还没投的，多帮我投投，人家都1000+票了，我500都还没有。谢谢兄弟们了~</p>
    <br />
    <p style="color: green">每个人可以投 1 票，谢谢~</p>
    <template #footer>
      <div class="flex justify-end gap-2">
        <ElButton @click="dialogVisible = false">已经投票</ElButton>
        <ElButton type="primary" @click="confirm">确定前往</ElButton>
      </div>
    </template>
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
const STORAGE_KEY = 'unibest-dialog-shown';

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
  // window.open('https://docs.qq.com/form/page/DVVF0TEdmY2ZHV3RE', '_blank');
  window.open('https://gitee.com/activity/2025opensource?ident=I6ZL1D', '_blank');
  dialogVisible.value = false;
  markFormSubmitted();
};
</script>
