<template lang="pug">
section: .container
  .row
    .col-12.col-lg-12.mb-3
      nuxt-link.title(to='/news' title='查看更多最新消息')
        h3
          fa.mr-3(icon='newspaper')
          | 最新消息
          span.icon.ml-3 ➔

    .col-12.col-md-6.col-lg-4(v-for='(i, index) in list')
      NewsCard(:value='i')
    .col-12
      nuxt-link.more(to='/news' title='查看更多最新消息')
        fa(icon='chevron-down')
</template>

<script>
import NewsCard from '~/components/NewsCard.vue'

export default {
  components: {
    NewsCard,
  },
  props: {
    list: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style scoped lang="sass">
a.title
  transition: all .2s
  display: inline-block
  color: $black
  +floating-link
  h3
    display: inline-block
  .icon
    display: inline-block
    transition: all .2s

.more
  display: block
  padding: .25rem
  border-radius: 1rem
  font-size: 1.2rem
  text-align: center
  transition: $transition
  &:hover
    background-color: white
    box-shadow: $big-btn-shadow
</style>
