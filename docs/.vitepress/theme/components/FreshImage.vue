<template>
  <img :src="freshUrl" :alt="alt" :height="height" :width="width" style="display: inline-block" />
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 400,
  },
});

const freshUrl = computed(() => {
  return `${props.src}?t=${Date.now()}`;
});
</script>
