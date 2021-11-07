<template lang="pug">
ol(itemscope itemtype='http://schema.org/BreadcrumbList')
  li(v-for='(i, index) in items' v-if='items' itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem')
    nuxt-link(:to='i.url' itemprop='item' v-if='i.url')
      span(itemprop='name') {{ i.name }}
    span(v-else itemprop='name') {{ i.name }}
    meta(itemprop='position' :content='index + 1')
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
})
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
