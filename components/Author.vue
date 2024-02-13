<script setup lang="ts">
import { formatDate } from '~/utils/date'
import defaultAvatar from '~/assets/img/logo/logo-avatar.png'

defineProps<{
  avatar?: string
  name?: string
  date?: number
}>()
</script>

<template lang="pug">
.author
  slot
    img.avatar(:src='avatar ?? defaultAvatar')
    .info
      .name(itemprop='author') {{ name }}
      .date(itemprop='datePublished' :content='formatDate(date)')
        | {{ formatDate(date, 'YYYY年MM月DD日') }}
</template>

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
