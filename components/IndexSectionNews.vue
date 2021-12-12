<template lang="pug">
section: .container
  SectionTitle.mb-5
    nuxt-link.title(to='/news' title='查看更多最新消息')
      fa.mr-3(icon='newspaper')
      | 最新消息
      span.icon.ml-3 ➔

  .row
    .col-12.col-md-6.col-lg-4(v-for='item in list')
      NewsItem(:value='item')

    .col-12.text-right
      nuxt-link(to='/news')
        | 查看更多
        fa.ml-3(icon='chevron-right')
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import NewsList from '~/types/NewsList'

export default defineComponent({
  props: {
    list: {
      type: Array as PropType<NewsList>,
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
</style>
