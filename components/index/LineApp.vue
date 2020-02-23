<template lang="pug">
section#line-app.line-app(ref='lineAppSection')
  .container
    .row.justify-content-around
      .col-12.col-md-3.col-lg-3.order-2.order-md-1
        .screenshot-area
          img.mockup(src='~/assets/img/screenshot/line-app-mockup.png' alt='Line App 畫面截圖' v-scroll-reveal)
        
      .col-12.col-md-8.col-lg-6.order-1.order-md-2
        .align-center-article
          h3.text-center.text-md-left 三分鐘快速完成報名
          p.text-center.text-md-left 不需下載 App，用 LINE 就能加入樂台計畫
          .mb-3.text-center.text-md-left
            img.qrcode.d-none.d-md-inline-block.mr-3(src='~/assets/img/line-app-qrcode.svg' alt='樂台計畫 LINE App QRCode')
            nuxt-link.gradient-btn.line(target='_blank' to="/line") 加入 LINE 官方帳號
          
          .d-flex.justify-content-center.justify-content-md-start(v-cloak v-scroll-reveal='{ afterReveal: onCountReveal, opacity: 1 }')
            .count-to.text-center.text-md-left
              countTo.number(:end-val='userCount' suffix='+' ref='userCount' v-cloak v-bind='countToOptions') {{ userCount }}+
              .info 樂台計畫總用戶數
            .count-to.text-center.text-md-left
              countTo.number(:end-val='partnerCount' ref='partnerCount' v-cloak v-bind='countToOptions') {{ partnerCount }}
              span.label 所
              .info
                | 合作院校 #[sup: a(v-scroll-to='{ el: `#partner`, offset: -60 }' href='#') *]
</template>

<script>

import countTo from 'vue-count-to'

export default {
  data () {
    this.countToOptions = {
      duration: 3000,
      autoplay: false
    }
    return {}
  },
  props: {
    // 總用戶數
    userCount: {
      default: 3500,
      type: Number,
    },
    // 合作院校數
    partnerCount: {
      default: 23,
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