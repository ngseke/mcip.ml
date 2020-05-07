<template lang="pug">
section: .container
  .row.justify-content-around
    .col-12.col-md-3.col-lg-3.order-2.order-md-1
      img.peep.d-block.d-md-none.d-lg-block(src='~/assets/img/peep/man-with-phone.svg')
      .screenshot-area
        img.mockup.ml-lg-5(src='~/assets/img/screenshot/line-app-mockup.png' alt='Line App 畫面截圖' v-scroll-reveal.reset={ scale: .9, opacity: 1 })
      
    .col-12.col-md-8.col-lg-5.order-1.order-md-2
      .align-center-article
        h3.text-center.text-md-left 三分鐘快速完成報名
        p.text-center.text-md-left 不需下載 App，用 LINE 就能加入樂台計畫
        .mb-3.text-center.text-md-left
          img.qrcode.d-none.d-md-inline-block(src='~/assets/img/line-app-qrcode-shorthand.png' alt='樂台計畫 LINE App QRCode')
          nuxt-link.gradient-btn.line(target='_blank' to="/line") 加入 LINE 官方帳號
        
        .d-flex.justify-content-center.justify-content-md-start(v-scroll-reveal='{ beforeReveal: onCountReveal, opacity: 0, duration: 500, viewOffset: { bottom: 0 } }' v-cloak)
          .count-to.text-center.text-md-left
            countTo.number(:start-val='1000' :end-val='userCount' suffix='+' ref='userCount' v-bind='countToOptions') {{ userCount }}+
            .info 樂台計畫總用戶數
          .count-to.text-center.text-md-left
            countTo.number(:start-val='10' :end-val='partnerCount' ref='partnerCount' v-cloak v-bind='countToOptions') {{ partnerCount }}
            span.label 所
            .info
              | 合作院校 #[sup: a(v-scroll-to='{ el: `#partner`, offset: -60 }' href='#') *]
</template>

<script>

import countTo from 'vue-count-to'

export default {
  data () {
    this.countToOptions = {
      duration: 2000,
      autoplay: false,
    }
    return {}
  },
  props: {
    // 總用戶數
    userCount: {
      default: 4000,
      type: Number,
    },
    // 合作院校數
    partnerCount: {
      default: 24,
      type: Number,
    }
  },
  methods: {
    onCountReveal (el) {
      this.startCountTo()
    },
    startCountTo () {
      const { userCount, partnerCount } = this.$refs
      const refs = [userCount, partnerCount]
      
      refs.forEach(ref => ref && ref.start())
    },
  },
  components: {
    countTo
  }
}
</script>

<style scoped lang="sass">
section
  position: relative
  overflow: hidden
    
.qrcode
  width: 100%
  height: auto
  max-width: 7rem
  margin-right: 2rem
    
.peep
  position: absolute
  left: -11rem
  bottom: -4.5rem
  +wh(16rem, auto)
  @media (max-width: 767.98px)
    +wh(12rem, auto)
    left: 0rem
  @media (max-width: 470px)
    +wh(11rem, auto)
    left: -2rem
    
.mockup
  border-radius: 10px
  @media (max-width: 767.98px)
    max-width: 12rem
    margin-left: 0
    
  @media (max-width: 400px)
    max-width: 12rem
    margin-left: 5rem
  
.count-to
  +my(1rem)
  margin-right: 2rem
  text-align: center
  .number
    display: inline-block
    font-size: 2.5rem
    font-family: roboto, Helvetica, Arial
    margin: 0
    padding: 0
  .label
    margin-left: .5rem
    font-size: 1.5rem
    font-weight: 500
  .info
    font-weight: 500
    margin-top: -.5rem
</style>