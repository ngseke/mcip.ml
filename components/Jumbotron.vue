<template lang="pug">
header(:style='headerStyle' :class='headerClass')
  slot
    .container: .row.no-gutters.justify-content-center
      .col-12.col-sm-10.col-md-8.col-lg-6.col-xl-5.text-center
        .logo(:class='logoClass')
          Logo(alt='樂台計畫: 大專院校音樂賽事平台')
        //- span.ad #[b 樂台計畫]現已更新至全新風貌!
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
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
  position: relative
  background: url('~assets/img/bg.jpg') center center / cover
  min-height: 460px
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
    text-align: center
    font-size: 1.2rem
    font-weight: 500
    letter-spacing: 5px
    +gradient-text(linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%))
    opacity: .95

  .ad
    display: inline-block
    color: nth($secondary-list, 1)
    text-align: center
    letter-spacing: 2px
    margin-bottom: 1rem
    b
      font-weight: bold
</style>
