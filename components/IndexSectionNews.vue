<template lang="pug">
section: .container
  .row
    .col-12.col-lg-12.mb-3
      nuxt-link.title(to='/news' title='查看更多最新消息')
        h3
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
export default {
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
    background-color: #e9ecef
</style>
