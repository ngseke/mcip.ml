<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import { type NewsList } from '~/types/NewsList'

defineProps<{
  list: NewsList
}>()
</script>

<template>
  <section>
    <div class="container">
      <SectionTitle class="mb-5">
        <NuxtLink class="title" to="/news" title="查看更多最新消息">
          <FontAwesomeIcon class="mr-3" :icon="faNewspaper" />
          最新消息
          <span class="icon ml-3">➔</span>
        </NuxtLink>
      </SectionTitle>
      <div class="row">
        <div v-for="item in list" :key="item.id" class="col-12 col-md-6 col-lg-4">
          <NewsItem :value="item" />
        </div>
        <div class="col-12 text-right">
          <NuxtLink to="/news">
            查看更多
            <FontAwesomeIcon class="ml-3" :icon="faChevronRight" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
a.title
  transition: all .2s
  display: inline-flex
  color: $black
  +floating-link
</style>
