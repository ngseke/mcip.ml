<template lang="pug">
section#partner: .container
  .row.justify-content-center
    .col-12
      h3
        fa.mr-3(icon='handshake')
        | 合作夥伴
    .col-12
      .row.partners(name='list' tag='div')
        .col-6.col-md-4.col-lg-3(v-for='_ in partners' :key='_.name')
          a.item(:href='getFacebookLink(_.facebookId)' target='_blank')
            img(:src='getImage(_)')
            .info
              h4 {{ _.name }}
              small.school {{ _.schoolName }}
</template>

<script>
const MobileDetect = require('mobile-detect')

export default {
  props: {
    partners: {
      type: Array,
      default: null,
    },
  },
  methods: {
    // 根據裝置取得不同的 Facebook 粉專連結(為了使用預設內置 app 開啟)
    getFacebookLink (id) {
      const device = new MobileDetect(process.client
        ? window.navigator.userAgent
        : '')

      if (device.is('iOS')) return `fb://page/?id=${id}`
      else if (device.is('AndroidOS')) return `fb://page/${id}`
      else return `https://www.facebook.com/${id}`
    },
    getImage (_) {
      return _.isUsingCustomImg
        ? _.img
        : `https://graph.facebook.com/${_.facebookId}/picture?height=200&width=200`
    },
  },
}
</script>

<style scoped lang="sass">
h3
  margin-bottom: 3rem

.partners
  .item
    display: inline-flex
    align-items: center
    flex-direction: row
    transition: all .3s
    list-style: none
    margin-bottom: 1.5rem
    transform-origin: center center
    +floating-link
    img
      height: auto
      width: 3rem
      margin-right: .75rem
      border-radius: 10px
      transition: box-shadow .7s
    .info
      h4
        color: #333
        font-size: 1rem
        font-weight: 500
        margin: 0
        letter-spacing: .5px
      .school
        color: #333
        opacity: .8

section
  position: relative
  overflow: visible
  &::after, &::before
    content: ''
    position: absolute
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    +wh(10rem)
  &::before
    right: .5rem
    bottom: 1rem
    background-image: url('~assets/img/peep/deco2.svg')
    z-index: 0
    @include media-breakpoint-down(xs)
      +wh(8rem)
      right: 0
      bottom: -1rem
</style>
