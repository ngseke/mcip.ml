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
              | 由熱情驅動的
              br
              | 音樂賽事#[em 大平台]
            .mt-3
              Hashtags
        .col-12.col-lg.d-flex.justify-content-end
          .peep
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
  background: url('~assets/img/background/index.jpg') center center / cover
  background-color: nth($secondary-list, 3)
  color: white
  min-height: 100vh
  +py(3rem)
  +flex-center
  flex-direction: column
  &.dense
    padding: 5rem 0 4rem
    min-height: 50vh
  &.news
    background-image: url('~assets/img/background/news.jpg')
  &.faq
    background-image: url('~assets/img/background/faq.jpg')

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
        background: center / cover no-repeat url('https://images.unsplash.com/photo-1610523978474-73d8a3bacf08?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NzJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60')

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

.peep
  +wh(35rem)
  background: center / contain no-repeat url('~assets/img/peep/dancing.svg')
  @media (max-width: 1199.98px)
    +wh(28rem)
  @media (max-width: 991.98px)
    display: none
</style>
