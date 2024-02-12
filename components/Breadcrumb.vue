<template lang="pug">
ol(itemscope itemtype='http://schema.org/BreadcrumbList')
  li(v-for='(i, index) in items' :key='index' itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem')
    NuxtLink(v-if='i.url' :to='i.url' itemprop='item')
      span(itemprop='name') {{ i.name }}
    span(v-else itemprop='name') {{ i.name }}
    meta(itemprop='position' :content='String(index + 1)')
</template>

<script setup lang="ts">
interface BreadcrumbItem { name: string, url?: string }

defineProps<{
  items: BreadcrumbItem[]
}>()
</script>

<style lang="sass" scoped>
ol
  list-style: none
  display: flex
  flex-wrap: wrap
  padding: 0
  +my(3rem)
  font-size: .9rem
  li
    a
      color: #333
      display: inline-block
      +floating-link
  li:not(:last-child)
    opacity: .7
    &::after
      content: '—'
      padding: 0 1rem
</style>
