<script setup lang="ts">
const navbarItems = [
  { name: 'News', to: '/news', active: true },
  { name: 'FAQ', to: '/faq' },
]
</script>

<template>
  <div>
    <TheNavbar :items="navbarItems" />
    <NuxtPage />
    <TheFooter />
  </div>
</template>
