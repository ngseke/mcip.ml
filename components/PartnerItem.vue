<script setup lang="ts">
import { type Partner } from '~/types/Partner'

defineProps<{
  value: Partner
}>()

const getFacebookLink = (id: string) => `https://www.facebook.com/${id}`

const getImage = (partner: Partner) => (
  partner.isUsingCustomImg
    ? partner.img
    : `https://graph.facebook.com/${partner.facebookId}/picture?height=200&width=200`
)
</script>

<template>
  <a
    class="item"
    :href="getFacebookLink(value.facebookId)"
    :title="`至${value.name}的 Facebook 粉絲專頁`"
    target="_blank"
  >
    <Avatar :src="getImage(value)" />

    <span class="info">
      <span class="name">{{ value.name }}</span>
      <small v-if="value.schoolName" class="school">
        {{ value.schoolName }}
      </small>
    </span>
  </a>
</template>

<style scoped lang="sass">
.item
  display: inline-flex
  gap: .75rem
  align-items: center
  transition: all .3s
  list-style: none
  +floating-link

.info
  color: $black
  display: flex
  flex-direction: column
  .name
    font-weight: 500
    letter-spacing: .5px
  .school
    opacity: .8
</style>
