<template lang="pug">
section: .container
  .row.justify-content-around
    .col-12.col-md.col-lg-5.offset-lg-1
      .align-center-article
        h3 自動化金流服務系統
        p.pl-1
          | 主動以 LINE 即時推播繳費狀態
          br
          | 取代以往人工查核與撰寫訊息方式
          br
          | 大幅降低時間成本與風險
    .col-10.col-md-6.col-lg-4.d-flex.justify-content-center.align-items-center
      .screenshot-area
        img.screenshot.unlimited(src='~/assets/img/screenshot/payment-message.png' alt='金流繳費狀態訊通知' v-scroll-reveal='reveal.screenshot')
      .line-icon
        img(src='~/assets/img/screenshot/line-logo.svg' v-scroll-reveal='reveal.lineIcon')
        .number: span(v-scroll-reveal='reveal.number') 1
</template>

<script>
export default {
  data () {
    this.reveal = {
      lineIcon: {
        scale: .8,
        opacity: 0,
        delay: 200,
        duration: 500,
      },
      number: {
        scale: .8,
        opacity: 0,
        delay: 500,
        duration: 500,
      },
      screenshot: {
        opacity: 0,
        distance: '50px',
        delay: 1500,
        duration: 700,
      },
    }
    return {}
  },
}
</script>

<style scoped lang="sass">
$line-icon-size: 7rem

// LINE 圖標區域
.line-icon
  position: absolute
  user-select: none
  display: inline-block
  // 圖標
  img
    +wh($line-icon-size)
  // 通知數字
  .number
    position: absolute
    z-index: 10
    top: -1rem
    right: -1rem
    span
      background-color: #fa3e38
      color: white
      +wh(2.5rem)
      +flex-center
      border-radius: 100rem
      font-family: arial
      font-size: 1.5rem
      transform-origin: center center
        
// 聊天訊息區域
.screenshot-area
  z-index: 20
  padding: 0 1.5rem
</style>