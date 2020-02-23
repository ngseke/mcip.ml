<template lang="pug">
section
  .container
    .row
      .col-12.col-lg-12.mb-3
        nuxt-link.title(to='/news' title='查看所有最新消息')
          h3
            | 最新消息
            span.icon.ml-3 ➔

      .col-12.col-md-6.col-lg-4(v-for='(i, index) in list')
        nuxt-link.card(:to='`/news/${i.id}`' target='_blank')
          img.card-img-top(:src='i.image')
          .card-img-overlay
            .author
              img.avatar(src='https://i.imgur.com/INFIh4d.png')
              .info
                .name {{ i.author }}
                .date {{ convertTime(i.timestamp) }}
          .card-body(v-html='convertMarkdown(i.article)')
</template>

<script>
const dayjs = require('dayjs')
const marked = require('marked')
const htmlToText = require('html-to-text')

export default {
  props: {
    list: {
      default: null,
      type: Array,
    }
  },
  methods: {
    // 將 timestamp 轉換為字串
    convertTime (_) {
      return dayjs(_).format('YYYY年MM月DD日')
    },
    // 將 md 語法轉換為 html
    convertMarkdown (_) {
      return htmlToText.fromString(marked(_))
    },
  }
}
</script>
  
<style scoped lang="sass">
 
a.title
  transition: all .2s
  display: inline-block
  color: #333
  +floating-link
  h3
    display: inline-block
  .icon
    display: inline-block
    transition: all .2s
    
.card
  margin-bottom: 1rem
  overflow: hidden
  transition: transform .5s, box-shadow .3s
  border: 0
  box-shadow: $big-btn-shadow
  color: #333
  &:hover
    transform: scale(1.02)
    cursor: pointer
    box-shadow: $big-btn-hover-shadow

  img.card-img-top
    height: 10rem
    background: #ddd
    object-fit: cover
    position: relative
    border: 0

  .card-img-overlay
    background: linear-gradient(to top, rgba(black, 0) 0%, rgba(black, .75) 100%)
    height: 10rem
    color: white
    border: 0

  .card-body
    height: 15rem
    position: relative
    font-size: .9rem
    white-space: pre-wrap
    line-height: 1.75
    &::after
      +bg-fade-out
    
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