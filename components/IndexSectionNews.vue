<template lang="pug">
section: .container
  .row
    .col-12.col-lg-12.mb-3
      h3
        nuxt-link.title(to='/news' title='查看更多最新消息')
          fa.mr-3(icon='newspaper')
          | 最新消息
          span.icon.ml-3 ➔

    .col-12.col-md-6.col-lg-4(v-for='item in list')
      NewsItem(:value='item')

    .col-12.text-right
      nuxt-link(to='/news')
        | 查看更多
        fa.ml-3(icon='chevron-right')
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
})
</script>

<style scoped lang="sass">
a.title
  transition: all .2s
  display: inline-block
  color: $black
  +floating-link
  h3
    display: inline-block
</style>
