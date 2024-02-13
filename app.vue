<script setup lang="ts">
useHead({
  titleTemplate: titleChunk => titleChunk
    ? `${titleChunk} | 樂台計畫`
    : '樂台計畫 - 大專院校音樂賽事平台',
})
</script>

<template>
  <NuxtLayout />
</template>
