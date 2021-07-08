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
const dayjs = require('dayjs')

export default {
  props: [
    'avatar',
    'name',
    'date',
  ],
  methods: {
    convertTime (_, f = 'YYYY年MM月DD日') {
      return dayjs(_).format(f)
    },
  },
}
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
