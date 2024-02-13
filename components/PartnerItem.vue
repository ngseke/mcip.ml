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

<script setup lang="ts">
import { type Partner } from '~/types/Partner'

defineProps<{
  value: Partner
}>()

const getFacebookLink = (id: string) => {
  return `https://www.facebook.com/${id}`
}

const getImage = (partner: Partner) => (
  partner.isUsingCustomImg
    ? partner.img
    : `https://graph.facebook.com/${partner.facebookId}/picture?height=200&width=200`
)

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
    +wh(3rem)
    margin-right: .75rem
    border-radius: 10px
    transition: box-shadow .7s
    object-fit: cover
  .info
    color: $black
    .name
      line-height: 1.2
      font-weight: 500
      letter-spacing: .5px
    .school
      opacity: .8
</style>
