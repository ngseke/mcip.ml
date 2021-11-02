<template lang="pug">
.author
  slot
    img.avatar(v-if='avatar' :src='avatar')
    img.avatar(v-else src='~/assets/img/logo/logo-avatar.png')
    .info
      .name(itemprop='author') {{ name }}
      .date(itemprop='datePublished' :content='convertTime(date, `YYYY-MM-DD`)') {{ convertTime(date) }}
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import dayjs from 'dayjs'

export default defineComponent({
  props: {
    avatar: { type: String, default: null },
    name: { type: String, default: null },
    date: { type: Number, default: null },
  },
  setup () {
    const convertTime = (_, f = 'YYYY年MM月DD日') => dayjs(_).format(f)

    return {
      convertTime,
    }
  },
})
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
