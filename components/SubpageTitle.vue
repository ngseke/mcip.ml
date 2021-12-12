<template lang="pug">
.container.subpage-title
  h1
    span.zh: span {{ zh }}
    small.en: span {{ en }}
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    zh: {
      default: null,
      type: String,
    },
    en: {
      default: null,
      type: String,
    },
  },
})
</script>

<style scoped lang="sass">
@keyframes y-move
  from
    transform: translateY(130%)
  to
    transform: none

$delay: .3s

.subpage-title
  h1
    +text-shadow
    color: white
    font-size: 3rem
    display: flex
    flex-wrap: wrap
    span, small
      display: inline-block
      font-weight: 700
    .zh, .en
      overflow: hidden
      width: 100%
      span
        animation: y-move .5s $delay backwards
        animation-fill-mode: backwards
    .zh
      letter-spacing: 1px
      margin-right: 1rem
    .en
      font-size: 60%
      span
        animation-delay: $delay + .15s
</style>
