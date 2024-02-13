<script setup lang="ts">
import type { ArticleSidebarItem } from '~/types/ArticleSidebarItem'

withDefaults(defineProps<{
  value?: ArticleSidebarItem[] | null
}>(), {
  value: null,
})

const getIsActive = (index: number, list: ArticleSidebarItem[]) => {
  const current = list[index]
  const next = list[index + 1]

  return current.top < 0 && ((next && next.top > 0) || !next)
}

const scroll = (id: string) => {
  document.querySelector(id)
    ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}
</script>

<template>
  <nav class="article-sidebar">
    <ul v-if="value">
      <li v-for="(h2, h2Index) in value" :key="h2Index">
        <a
          :href="h2.id"
          :class="{ active: getIsActive(h2Index, value) }"
          @click.prevent="scroll(h2.id)"
        >{{ h2.title }}</a>
        <ul>
          <li v-for="(h3, h3Index) in h2.children" :key="h3Index">
            <a :href="h3.id" @click.prevent="scroll(h3.id)">{{ h3.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="sass">
$link-color: #666
$link-active-color: #1e1e1e

nav.article-sidebar
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
