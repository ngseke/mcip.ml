<template lang="pug">
nav.article-navbar
  ul(v-if='value')
    li(v-for='(i, iIndex) in value' :key='iIndex')
      a(
        :href='i.id'
        :class='{ active: getIsActive(iIndex, value) }'
        @click.prevent="scroll(i.id)"
      ) {{ i.title }}
      ul
        li(v-for='(j, jIndex) in i.children' :key='jIndex')
          a(
            :href='j.id'
            :class='{ active: getIsActive(jIndex, i.children) && getIsActive(iIndex, value) }'
            @click.prevent="scroll(j.id)"
          ) {{ j.title }}
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  value?: any[] | null
}>(), {
  value: null,
})

const getIsActive = (index: number, list: any[]) => {
  const current = list[index]
  const next = list[index + 1]

  return current.top < 0 && ((next && next.top > 0) || !next)
}

const scroll = (id: string) => {
  document.querySelector(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<style scoped lang="sass">
$link-color: #666
$link-active-color: #1e1e1e

nav.article-navbar
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
