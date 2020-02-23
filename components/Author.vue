<template lang="pug">
.author
  slot
    img.avatar(:src='avatar || "https://i.imgur.com/INFIh4d.png"')
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
    'date'
  ],
  methods: {
    convertTime (_, f) {
      return dayjs(_).format(f)
    },
  }
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
