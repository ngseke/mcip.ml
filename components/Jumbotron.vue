<template lang="pug">
header(:style='headerStyle' :class='headerClass')
  slot
    .container
      .row.justify-content-start.justify-content-between.align-items-center
        .col-12.col-sm-10.col-md-8.col-lg-6.col-xl-5
          .mb-5
            .logo
              Logo(alt='樂台計畫: 大專院校音樂賽事平台')
          .text-left.text-lg-left
            h2
              | 凝聚熱情溫度的
              br
              | 音樂賽事#[em 大平台]
            .mt-3
              Hashtags
        .col-12.col-lg.position-relative
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
header
  overflow: hidden auto
  position: relative
  background: url('~assets/img/bg.jpg') center center / cover
  background-color: nth($secondary-list, 3)
  color: white
  min-height: 100vh
  +py(3rem)
  @media (max-width: 767.98px)
    min-height: 500px
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
    color: white
    font-size: 2.5rem
    font-weight: 900
    letter-spacing: 1px
    line-height: 1.4
    opacity: .95
    @media (max-width: 767.98px)
      font-size: 2rem
    em
      font-style: normal
      position: relative
      &::after
        content: ''
        position: absolute
        background: $bg-gradient
        height: 8px
        width: 100%
        left: 0
        bottom: 10%
        z-index: -1

  .ad
    display: inline-block
    color: nth($secondary-list, 1)
    text-align: center
    letter-spacing: 2px
    margin-bottom: 1rem
    b
      font-weight: bold

.logo
  margin: -9.5%
  @media (max-width: 575.98px)
    $width: 350px
    max-width: $width
    margin: $width * -.095

.circle
  $size: 35rem
  position: absolute
  top: 50%
  right: -3rem
  transform: translateY(-50%)
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
