<template lang="pug">
nuxt-link.news-card(:to='link')
  .row.no-gutters.align-items-center
    .col-auto
      img.img(:src='image')
    .col.body
      .title(:title='title') {{ title }}
      .paragraph {{ article }}
      .author
        | {{ author }}
        span.divider
        | {{ time }}
</template>

<script>
const marked = require('marked')
const htmlToText = require('html-to-text')
const dayjs = require('dayjs')

export default {
  props: ['value'],
  computed: {
    title   () { return this.value.title },
    image   () { return this.value.image },
    link    () { return `/news/${this.value.id}` },
    article () { return this.toPlainText(this.value.article) },
    author  () { return this.value.author },
    time    () { return this.convertTime(this.value.timestamp) },
  },
  methods: {
    // 將 md 格式文字轉為純文字
    toPlainText (_) {
      _ = _.substring(_.indexOf('\n') + 1)
      return htmlToText.fromString(marked(_))
    },
    convertTime (_, f = 'YYYY-MM-DD') {
      return dayjs(_).format(f)
    },
  },
}
</script>

<style scoped lang="sass">
.news-card
  display: inline-flex
  margin-bottom: 1rem
  overflow: hidden
  transition: all .3s
  border: none
  box-shadow: $big-btn-shadow
  color: $black
  border-radius: 1.5rem
  padding: 1rem 1.25rem
  background-color: white
  &:hover
    box-shadow: $big-btn-hover-shadow
  &:active
    transform: scale(.97)
    box-shadow: $big-btn-shadow
    filter: grayscale(20%)

  img.img
    +wh(4rem)
    border-radius: 1rem
    object-fit: cover
    margin-right: 1rem

  .body
    display: flex
    flex-direction: column
    .title
      +line-ellipsis(1)
      margin-bottom: .25rem
      color: nth($secondary-list, 3)
    .paragraph
      +line-ellipsis
      margin-bottom: .3rem
      font-size: .8rem
    .author
      font-size: .8rem
      opacity: .7
      .divider
        &::before
          content: ' • '
      &::before
        content: '—— '
</style>
