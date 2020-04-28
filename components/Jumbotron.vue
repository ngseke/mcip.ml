<template lang="pug">
header(:style='headerStyle' :class='headerClass')
  slot
    .container: .row.no-gutters.justify-content-center
      .col-12.col-sm-10.col-md-8.col-lg-6.col-xl-5.text-center
        .logo(:class='logoClass')
          img(src='~/assets/img/logo/logo_primary-white.svg' alt='樂台計畫: 大專院校音樂賽事平台')
        //- span.ad #[b 樂台計畫]現已更新至全新風貌!
</template>

<script>
export default {
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
        [this.className]: true
      }
    },
    logoClass () {
      const { isAnimation } = this
      
      return {
        "no-animation": !isAnimation,
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
  background: url('https://images.unsplash.com/photo-1546437744-529610df132e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80') center center / cover
  padding: 7rem 0 5rem
  .logo
    margin-bottom: 2rem
  &.dense
    padding: 5rem 0 4rem
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
    // border: solid nth($secondary-list, 1) 1px
    // border-radius: 10px
    // padding: 5px 10px
    b
      font-weight: bold
</style>