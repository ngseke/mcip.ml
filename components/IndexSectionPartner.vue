<template lang="pug">
section: .container
  .row
    .col-12
      h3
        fa.mr-3(icon='handshake')
        | 合作夥伴
    .col-12
      .row
        .col-6.col-md-4.col-lg-3(v-for='_ in partners' :key='_.name')
          PartnerItem(:value='_')
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    partners: {
      type: Array,
      default: null,
    },
  },
})
</script>

<style scoped lang="sass">
h3
  margin-bottom: 3rem

section
  position: relative
  overflow: visible
  &::after
    content: ''
    position: absolute
    +wh(10rem)
    right: .5rem
    bottom: 1rem
    background: url('~assets/img/peep/deco2.svg') center center / cover
    @include media-breakpoint-down(xs)
      +wh(8rem)
      right: 0
      bottom: -1rem
</style>
