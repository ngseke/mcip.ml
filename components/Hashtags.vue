<template lang="pug">
.d-inline-block
  span.hashtag(v-for="item in list") {{ item }}
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const list = ['報名繳費', '即時賽況', '賽事資訊']
    return {
      list,
    }
  },
})
</script>

<style scoped lang="sass">
.hashtag
  display: inline-block
  position: relative
  margin-right: 1rem
  color: white
  font-style: oblique
  &::before
    content: '#'
    display: inline-block
    font-weight: bold
    opacity: .5
    color: nth($secondary-list, 1)
    transform: scale(1.3)
</style>
