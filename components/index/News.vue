<template lang="pug">
section: .container
  .row
    .col-12.col-lg-12.mb-3
      nuxt-link.title(to='/news' title='查看更多最新消息')
        h3
          fa.mr-3(icon='newspaper')
          | 最新消息
          span.icon.ml-3 ➔

    .col-12.col-md-6.col-lg-4(v-for='(i, index) in list')
      nuxt-link.news-card(:to='`/news/${i.id}`')
        .row.no-gutters.align-items-center
          .col-auto
            img.img(:src='i.image')
          .col.body
            .title(:title='i.title') {{ i.title }}
            .paragraph {{ toPlainText(i.article) }}
            .author
              | {{ i.author }}
              span.divider
              | {{ convertTime(i.timestamp) }}
</template>

<script>
const marked = require('marked')
const htmlToText = require('html-to-text')
const dayjs = require('dayjs')

export default {
  props: ['list'],
  methods: {
    // 將 md 格式文字轉為純文字
    toPlainText (_) {
      _ = _.substring(_.indexOf('\n') + 1)
      return htmlToText.fromString(marked(_))
    },
    convertTime (_, f = 'YYYY/MM/DD') {
      return dayjs(_).format(f)
    },
  }
}
</script>
  
<style scoped lang="sass">
a.title
  transition: all .2s
  display: inline-block
  color: $black
  +floating-link
  h3
    display: inline-block
  .icon
    display: inline-block
    transition: all .2s
    
.news-card
  display: inline-flex
  margin-bottom: 1rem
  overflow: hidden
  transition: transform .5s, box-shadow .3s
  border: none
  box-shadow: $big-btn-shadow
  color: $black
  border-radius: 2rem
  padding: 1rem 1.5rem
  background-color: white
  &:hover
    transform: scale(1.02)
    cursor: pointer
    box-shadow: $big-btn-hover-shadow
  
  .row
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
          content: '•'
      &::before
        content: '—— '
</style>