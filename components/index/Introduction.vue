<template lang="pug">
section: .container
  .row.justify-content-around
    .col-12.col-md-3.col-lg-3.order-2.order-md-1
      div(:class='peepClass')
      .screenshot-area
        img.mockup-1.ml-lg-5(v-if='type === 1' src='~/assets/img/screenshot/mockup-line-app.png' alt='Line App 畫面截圖' v-scroll-reveal.reset={ scale: .9, opacity: 1 })
        img.mockup-2(v-else src='~/assets/img/screenshot/mockup-backstage.png' alt='管理後台截圖' v-scroll-reveal.reset={ scale: .9, opacity: 1 })

    .col-12.col-md-8.col-lg-6.order-1.order-md-2
      .align-center-article
        RoleSwitcher(v-model='type')
        template(v-if='type === 1')
          h3 透過樂台計畫#[br]3 分鐘即完成報名
          p.mb-3
            | 不需額外下載 App，用 LINE 就能立刻加入

          .mb-4.d-flex.flex-column.d-md-block
            nuxt-link.gradient-btn.line(target='_blank' to="/line") 加入 LINE 官方帳號
          .d-none.d-md-inline-block
            img.qrcode(src='~/assets/img/line-app-qrcode-shorthand.png' alt='樂台計畫 LINE App QRCode')

        template(v-else)
          h3 為音樂賽事量身打造的#[br]解決方案
          ul.pl-4
            li 眾多賽事齊聚一堂，大幅增加活動曝光
            li 金流代收服務，即時向參賽者推播繳費結果
            li 跨平台系統，隨時隨地掌握報名狀況
          .pl-1.mb-3
            a(href='https://manage.mcip.ml/' target='_blank') 前往社團管理後台 #[fa.mx-1(icon='external-link-alt')]
</template>

<script>
import RoleSwitcher from '@/components/RoleSwitcher'

export default {
  components: {
    RoleSwitcher,
  },
  data () {
    return {
      type: 1,
    }
  },
  computed: {
    peepClass () {
      return {
        'peep-1 d-block d-md-none d-lg-block': this.type === 1,
        'peep-2 d-none d-lg-block ': this.type === 2,
      }
    },
  },
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

.align-center-article
  +flex-center
  height: 100%
  align-items: stretch
  justify-content: flex-start

.peep-1
  position: absolute
  left: -11rem
  bottom: -4.5rem
  background: center / contain no-repeat url('~assets/img/peep/man-with-phone.svg')
  +wh(16rem, 100%)
  @media (max-width: 767.98px)
    +wh(12rem, 100%)
    left: 0rem
  @media (max-width: 470px)
    +wh(11rem, 100%)
    left: -2rem

.peep-2
  position: absolute
  left: -13rem
  bottom: -9rem
  background: center / contain no-repeat url('~assets/img/peep/man-using-notebook.svg')
  +wh(21rem, 30rem)
  @media (max-width: 767.98px)
    +wh(14rem, 100%)
    left: 0rem

.screenshot-area
  .mockup-1
    @media (max-width: 767.98px)
      max-width: 15rem

    @media (max-width: 400px)
      margin-left: 5rem

  .mockup-2
    height: 16rem
    width: auto
    max-width: none
    margin-left: 0
    @media (max-width: 1199.98px)
      margin-left: -2rem

    @media (max-width: 991.98px)
      height: 9rem

    @media (max-width: 767.98px)
      max-width: 20rem
      height: auto

    @media (max-width: 400px)
      height: auto

ul
  li
    margin-bottom: .3rem
</style>
