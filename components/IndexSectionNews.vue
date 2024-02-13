<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { type NewsList } from '~/types/NewsList'

defineProps<{
  list: NewsList
}>()
</script>

<template lang="pug">
section: .container
  SectionTitle.mb-5
    NuxtLink.title(to='/news' title='查看更多最新消息')
      FontAwesomeIcon.mr-3(:icon='faNewspaper')
      | 最新消息
      span.icon.ml-3 ➔

  .row
    .col-12.col-md-6.col-lg-4(v-for='item in list' :key='item.id')
      NewsItem(:value='item')

    .col-12.text-right
      NuxtLink(to='/news')
        | 查看更多
        FontAwesomeIcon.ml-3(:icon='faChevronRight')
</template>

<style scoped lang="sass">
a.title
  transition: all .2s
  display: inline-block
  color: $black
  +floating-link
</style>
