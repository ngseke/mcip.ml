<template lang="pug">
ul.article-list
  li(v-for='i in list')
    nuxt-link(:to='`/news/${i.id}`')
      .title {{ i.title }}
      small {{ convertTime(i.timestamp) }}
  li(ref='loadMore' v-if='!isEnd')
    fa.icon(icon='circle-notch' spin v-if='isLoading')
    a(href='#' @click.prevent='loadMore' v-else) 載入更多
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    list: {
      default: null,
      type: Array,
    },
    isEnd: {
      default: false,
      type: Boolean,
    },
    isLoading: {
      default: false,
      type: Boolean,
    },
  },
  mounted () {
    this.observeLoadMore()
  },
  methods: {
    convertTime (_) {
      return dayjs(_).format('YYYY年MM月DD日')
    },
    loadMore () {
      if (this.isLoading) return
      this.$emit('loadMore')
    },
    observeLoadMore () {
      const target = this.$refs.loadMore
      const observer = new IntersectionObserver(() => {
        this.loadMore()
      }, { threshold: 1 })
      observer.observe(target)

      this.$once('hook:beforeDestroy', function () {
        observer.disconnect()
      })
    },
  },
}
</script>

<style lang="sass" scoped>
ul.article-list
  list-style: none
  padding: 0
  li
    padding: 1rem
    font-size: 1.3rem
    a
      display: block
      +floating-link
      .title
        padding-bottom: .25rem
        font-weight: 500
        margin: 0
        color: transparent
        background-clip: text
        -webkit-background-clip: text
        background-image: $news-gradient
      small
        font-size: .7
        color: rgba(#666, 1)

  li:not(:last-child)
    border-bottom: solid 1px rgba(#ccc, .5)

.icon
  color: $black
</style>
