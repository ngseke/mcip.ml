<template lang="pug">
header(:style='headerStyle' :class='headerClass')
  slot
    .container: .row.justify-content-start.align-items-center
      .col-12.col-sm-10.col-md-8.col-lg-6.col-xl-5
        .logo(:class='logoClass')
          Logo(alt='樂台計畫: 大專院校音樂賽事平台')
      .col-12.col-lg.position-relative
        .text-center.text-lg-left
          h2
            | 凝聚熱情溫度的
            br
            | 音樂賽事大平台
          .mt-3
            Hashtags
        //- .circle
          img(src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')
</template>

<script>
import Logo from '~/components/Logo.vue'
import Hashtags from '~/components/Hashtags.vue'

export default {
  components: {
    Logo,
    Hashtags,
  },
  props: {
    isAnimation: {
      default: false,
      type: Boolean,
    },
    className: {
      default: null,
      type: String,
    },
    isDense: {
      default: false,
      type: Boolean,
    },
    background: {
      default: null,
      type: String,
    },
  },
  computed: {
    headerClass () {
      return {
        dense: this.isDense,
        [this.className]: true,
      }
    },
    logoClass () {
      const { isAnimation } = this

      return {
        'no-animation': !isAnimation,
      }
    },
    headerStyle () {
      const { background } = this

      return background
        ? { backgroundImage: `url('${this.background}')` }
        : {}
    },
  },
}
</script>

<style scoped lang="sass">
@import '~assets/sass/logo'

header
  overflow-x: hidden
  position: relative
  background: url('~assets/img/bg.jpg') center center / cover
  background-color: nth($secondary-list, 3)
  color: white
  min-height: 100vh
  +py(3rem)
  @media (max-width: 767.98px)
    min-height: 480px
  +flex-center
  flex-direction: column
  &.dense
    padding: 5rem 0 4rem
    min-height: auto
  &.faq
    background: $bg-gradient
  &.news
    background-image: $news-gradient

  h2
    color: rgba(white, .8)
    font-size: 2.5rem
    font-weight: 900
    letter-spacing: 1px
    line-height: 1.4
    +gradient-text(linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%))
    opacity: .95
    @media (max-width: 767.98px)
      font-size: 2rem

  .ad
    display: inline-block
    color: nth($secondary-list, 1)
    text-align: center
    letter-spacing: 2px
    margin-bottom: 1rem
    b
      font-weight: bold

.circle
  $size: 40rem
  position: relative
  transform: translate(2rem, 2rem)
  +wh($size)
  img
    +wh(100%)
    object-fit: cover
    z-index: 1
    border-radius: 100rem
    position: relative
  &::after
    $offset: 1.5rem
    $dot-size: 20%
    $dot-color: nth($secondary-list, 1)
    content: ''
    background-image: radial-gradient($dot-color $dot-size, transparent 11%), radial-gradient($dot-color $dot-size, transparent 11%)
    background-size: 20px 20px
    background-position: 0 0, 30px 30px
    background-repeat: repeat
    +wh($size)
    border-radius: 100rem
    z-index: 0
    position: absolute
    left: 0
    top: 0
    transform: translate(-$offset, $offset)
    opacity: .7
</style>
