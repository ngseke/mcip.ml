<template lang="pug">
.author
  slot
    img.avatar(v-if='avatar' :src='avatar')
    img.avatar(v-else src='~/assets/img/logo/logo-avatar.png')
    .info
      .name(itemprop='author') {{ name }}
      .date(itemprop='datePublished' :content='formatDate(date)')
        | {{ formatDate(date, 'YYYY年MM月DD日') }}
</template>

<script setup lang="ts">
import { formatDate } from '~/utils/date'

defineProps<{
  avatar?: string
  name?: string
  date?: number
}>()
</script>

<style scoped lang="sass">
.author
  display: flex
  flex-direction: row
  align-items: center
  text-align: left
  img.avatar
    border-radius: 100rem
    object-fit: cover
    +wh(3rem)
  .info
    margin-left: 1rem
    flex-grow: 1
  .name
    font-weight: 500
  .date
    font-size: .9rem
    opacity: .8
</style>
