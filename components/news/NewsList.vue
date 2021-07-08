<template lang="pug">
ul.article-list
  li(v-for='i in list')
    a(:href='`/news/${i.id}`')
      h2 {{ i.title }}
      small {{ convertTime(i.timestamp) }}
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    list: {
      default: null,
      type: Array,
    },
  },
  methods: {
    convertTime (_) {
      return dayjs(_).format('YYYY年MM月DD日')
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
    font-size: 1.5rem
    a
      display: block
      +floating-link
      h2
        padding-bottom: .25rem
        margin: 0
        font-size: 1.3rem
        color: transparent
        background-clip: text
        -webkit-background-clip: text
        background-image: $news-gradient
      small
        font-size: .7
        color: rgba(#666, 1)
  li:not(:last-child)
    border-bottom: solid 1px rgba(#ccc, .5)
</style>
