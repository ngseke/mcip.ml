<template lang="pug">
section.introduction: .container
  .row.justify-content-around
    .col-12.col-md-5.col-lg-5.order-2.order-md-1.position-relative
      div(:class='peepClass')
      .screenshot-area
        img.mockup-line-app(
          v-show='type === 1'
          key=1
          src='~/assets/img/screenshot/mockup-line-app.png'
          alt='Line App 畫面截圖'
        )
        img.mockup-backstage(
          v-show='type === 2'
          key=2
          src='~/assets/img/screenshot/mockup-backstage.png'
          alt='管理後台截圖'
        )

    .col-12.col-md-7.col-lg-6.order-1.order-md-2
      RoleSwitcher(v-model='type')

      transition(name='slide')
        section.first(v-if='type === 1' key=1)
          h3 透過樂台計畫#[br]3 分鐘即完成報名
          p.mb-3
            | 不需額外下載 App，用 LINE 就能立刻加入

          .mb-4.d-flex.flex-column.d-md-block
            nuxt-link.gradient-btn.line(target='_blank' to="/line") 加入 LINE 官方帳號
          .d-none.d-md-inline-block
            img.qrcode(
              src='~/assets/img/line-app-qrcode-shorthand.png'
              alt='樂台計畫 LINE App QRCode'
            )
        section.second(v-else-if='type === 2' key=2)
          h3 為音樂賽事量身打造的#[br]解決方案
          ul.pl-4
            li 眾多賽事齊聚一堂，大幅增加活動曝光
            li 金流代收服務，即時向參賽者推播繳費結果
            li 跨平台系統，隨時隨地掌握報名狀況
          .pl-1.mb-3
            a(href='https://manage.mcip.ml/' target='_blank') 前往社團管理後台 #[fa.mx-1(icon='external-link-alt')]
</template>

<script>
export default {
  data () {
    return {
      type: 1,
    }
  },
  computed: {
    peepClass () {
      const { type } = this

      return {
        'peep-1 d-block d-md-none d-lg-block': type === 1,
        'peep-2 d-none d-lg-block': type === 2,
      }
    },
  },
}
</script>

<style scoped lang="sass">
.introduction
  position: relative
  overflow: hidden

.qrcode
  width: 100%
  height: auto
  max-width: 7rem
  margin-right: 2rem

.peep-1
  position: absolute
  left: -9rem
  bottom: -4.5rem
  background: center / contain no-repeat url('~assets/img/peep/man-with-phone.svg')
  +wh(16rem, 100%)
  @include media-breakpoint-down(sm)
    +wh(12rem, 100%)
    left: 0rem

.peep-2
  position: absolute
  left: -11rem
  bottom: -9rem
  background: center / contain no-repeat url('~assets/img/peep/man-using-notebook.svg')
  +wh(21rem, 30rem)
  @include media-breakpoint-down(lg)
    left: -13rem
  @include media-breakpoint-down(sm)
    +wh(14rem, 100%)
    left: 0rem

.screenshot-area
  position: relative
  display: flex
  justify-content: center

  img
    +wh(100%, auto)
    display: inline-block
    &.mockup-line-app
      max-width: 15rem
      @include media-breakpoint-down(sm)
        transform: translateX(30%)

    &.mockup-backstage
      height: 16rem
      width: auto
      max-width: none
      margin-left: 0
      @include media-breakpoint-down(lg)
        margin-left: -2rem

      @include media-breakpoint-down(md)
        height: 9rem

      @include media-breakpoint-down(sm)
        max-width: 20rem
        height: auto

ul
  li
    margin-bottom: .3rem

// 切換區塊的動畫
.slide
  $distance: 3rem
  &-enter-active
    transition: $transition
    transition-delay: .05s
  &-leave-active
    transition: $transition
    position: absolute
  &-enter, &-leave-to
    opacity: 0
    &.first
      transform: translateX(-$distance)
    &.second
      transform: translateX($distance)

.fade
  &-enter-active, &-leave-active
    transition: $transition
  &-enter, &-leave-to
    opacity: 0
</style>
