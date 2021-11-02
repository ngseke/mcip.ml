<template lang="pug">
header
  .container
    .row.justify-content-between.align-items-center
      .col-12.col-sm-10.col-md-8.col-lg-6.col-xl-5
        .mb-5
          .logo
            Logo(alt='樂台計畫: 大專院校音樂賽事平台')
        h2
          | 由熱情驅動的#[br]音樂賽事#[em 大平台]
        .mt-3
          Hashtags
      .col-12.col-lg.d-flex.justify-content-end
        .peep
</template>

<style scoped lang="sass">
header
  +flex-center
  overflow: hidden auto
  position: relative
  background: url('~assets/img/background/index.jpg') center center / cover
  background-color: nth($secondary-list, 3)
  color: white
  padding-top: 7rem
  padding-bottom: 4rem
  min-height: 100vh
  @include media-breakpoint-down(sm)
    min-height: auto

  h2
    color: white
    font-size: 2.5rem
    font-weight: 900
    letter-spacing: 1px
    line-height: 1.4
    opacity: .95
    @include media-breakpoint-down(sm)
      font-size: 2rem
    em
      font-style: normal
      position: relative
      &::after
        content: ''
        position: absolute
        background: center / cover no-repeat url('https://images.unsplash.com/photo-1610523978474-73d8a3bacf08?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NzJ8fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60')
        +wh(100%, 8px)
        left: 0
        bottom: 10%
        z-index: -1

.logo
  margin: -9.5% // 抵銷 Logo 的留白區域
  @include media-breakpoint-down(xs)
    $width: 350px
    max-width: $width
    margin: $width * -.095

.peep
  +wh(35rem)
  background: center / contain no-repeat url('~assets/img/peep/dancing.svg')
  @include media-breakpoint-down(lg)
    +wh(28rem)
  @include media-breakpoint-down(md)
    display: none
</style>
