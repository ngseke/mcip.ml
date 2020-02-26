<template lang="pug">
nav
  ul
    li(v-for='(i, iIndex) in value')
      a(
        href='#'
        v-scroll-to='{ el: i.id, offset: -90 }'
        :class='{ active: getIsActive(iIndex, value) }'
      ) {{ i.title }}
      ul
        li(v-for='(j, jIndex) in i.children')
          a(
            href='#'
            v-scroll-to='{ el: j.id, offset: -90 }'
            :class='{ active: getIsActive(jIndex, i.children) && getIsActive(iIndex, value) }'
          ) {{ j.title }}
</template>

<script>
export default {
  name: 'ArticleNavbar',
  props: {
    value: { default: null },
  },
  methods: {
    getIsActive (index, list) {
      const current = list[index]
      const next = list[index + 1]
      
      return current.top < 0 && ((next && next.top > 0) || !next)
    }
  }
}
</script>

<style scoped lang="sass">
$link-color: #666
$link-active-color: #1e1e1e

nav
  ul
    list-style: none
    font-size: 13px
    padding: 0
    li
      a
        padding-left: 1rem
      > ul
        font-size: 12px
        li
          a
            padding-left: 2rem

  a
    display: inline-block
    color: $link-color
    width: 100%
    +py(3px)
    border-left: solid transparent 1px
    transition: color .2s
    &:hover
      color: darken($link-color, 10%)
      border-left: solid $link-color 1px
    &.active
      font-weight: bold
      border-left: solid $link-active-color 2px
      color: $link-active-color
</style>