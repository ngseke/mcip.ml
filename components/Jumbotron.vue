<template lang="pug">
header(:style='headerStyle' :class='{ news: isNews }')
  slot
    .logo(:class='logoClass')
      .box
      h1
        each _, i in '樂台計畫'
          span(style=`animation-delay: ${i * .08 + .65}s`)=_
    h2 大專院校民謠音樂比賽平台
</template>

<script>
export default {
  props: {
    isAnimation: {
      default: true,
      type: Boolean,
    },
    isHorizontal: {
      default: true,
      type: Boolean,
    },
    isNews: {
      default: false,
      type: Boolean,
    },
    background: {
      default: null,
      type: String,
    }
  },
  computed: {
    logoClass () {
      const { isAnimation, isHorizontal } = this
      
      return {
        "no-animation": !isAnimation,
        horizontal: isHorizontal,
      }
    },
    headerStyle () {
      const { background } = this
      
      return background
        ? { backgroundImage: `url('${this.background}')` }
        : {}
    }
  },
}
</script>

<style scoped lang="sass">
@import '~assets/sass/logo'
$header-logo-size: 5rem

header
  background: $bg-gradient
  padding: 5rem 0
  padding-top: 7rem
  .logo
    margin-bottom: 2rem
    h1
      font-size: $header-logo-size * .5
    .box
      width: $header-logo-size
      height: $header-logo-size
  &.news
    +py(4rem)
    padding-top: 5rem
    background-image: $news-gradient
      
    
  h2
    color: rgba(white, .8)
    text-align: center
    font-size: 1.2rem
    font-weight: 500
    letter-spacing: 5px
    +gradient-text(linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%))
    opacity: .95
</style>