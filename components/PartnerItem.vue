<template lang="pug">
a.item(
  :href='getFacebookLink(value.facebookId)'
  :title='`至${value.name}的 Facebook 粉絲專頁`'
  target='_blank'
)
  img(:src='getImage(value)')
  .info
    .name {{ value.name }}
    small.school {{ value.schoolName }}
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import MobileDetect from 'mobile-detect'

import Partner from '~/types/Partner'

/** 根據裝置取得不同的 Facebook 粉專連結(為了使用預設內置 app 開啟) */
const getFacebookLink = (id: string) => {
  const device = new MobileDetect(
    process.client
      ? window.navigator.userAgent
      : ''
  )

  if (device.is('iOS')) return `fb://page/?id=${id}`
  else if (device.is('AndroidOS')) return `fb://page/${id}`

  return `https://www.facebook.com/${id}`
}

const getImage = (partner: Partner) => (
  partner.isUsingCustomImg
    ? partner.img
    : `https://graph.facebook.com/${partner.facebookId}/picture?height=200&width=200`
)

export default defineComponent({
  props: {
    value: {
      type: Object as PropType<Partner>,
      default: null,
    },
  },
  setup () {
    return {
      getFacebookLink,
      getImage,
    }
  },
})
</script>

<style scoped lang="sass">
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
    +wh(3rem, auto)
    margin-right: .75rem
    border-radius: 10px
    transition: box-shadow .7s
  .info
    color: $black
    .name
      line-height: 1.2
      font-weight: 500
      letter-spacing: .5px
    .school
      opacity: .8
</style>
