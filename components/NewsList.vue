<template lang="pug">
ul.article-list
  li(v-for='i in list' :key="i.id")
    NuxtLink(:to='`/news/${i.id}`')
      .title {{ i.title }}
      small {{ formatDate(i.timestamp, 'YYYY年MM月DD日') }}
  li(v-if='!isEnd')
    FontAwesomeIcon.icon(v-if='isLoading' :icon='faCircleNotch' spin)
    a(v-else href='#' @click.prevent='loadMore') 載入更多
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { formatDate } from '~/utils/date'
import { type NewsList } from '~/types/NewsList'

const props = withDefaults(defineProps<{
  list: NewsList | null
  isEnd: boolean
  isLoading: boolean
}>(), {
  list: null,
  isEnd: false,
  isLoading: false,
})

const emit = defineEmits<{
  loadMore: []
}>()

const loadMore = () => {
  if (!props.isLoading) emit('loadMore')
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
