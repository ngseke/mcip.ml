<template lang="pug">
div
  TheNavbar
  main
    IndexSectionHeader
    IndexSectionIntroduction
    IndexSectionCountTo
    IndexSectionDivider
    IndexSectionNews(v-if='newsList' :list='newsList')
    IndexSectionPartner(v-if='partners' :partners='partners')
    IndexSectionContactUs
</template>

<script setup lang="ts">
import { fetchList } from '~/utils/news'
import { fetchPartners } from '~/utils/static-data'

const { data: newsList } = await useAsyncData(async () => await fetchList())
const { data: partners } = await useAsyncData(fetchPartners)
</script>

<style lang="sass" scoped>
main:deep(> section)
  &:nth-child(even)
    background-color: #f8f8f8

  background-color: white
  overflow: hidden

  +py(4rem)
  @include media-breakpoint-down(sm)
    +py(3rem)
</style>
