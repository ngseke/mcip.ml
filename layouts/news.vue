<template lang="pug">
div
  TheNavbar(:items='navbarItems')
  NuxtPage
  TheFooter
</template>

<script setup lang="ts">
const navbarItems = [
  { name: 'News', to: '/news', active: true },
  { name: 'FAQ', to: '/faq' },
]
</script>
