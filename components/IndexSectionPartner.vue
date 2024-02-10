<template lang="pug">
section: .container
  .row
    .col-12
      SectionTitle.mb-5
        FontAwesomeIcon.mr-3(:icon='faHandshake')
        | 合作夥伴
    .col-12
      .row
        .col-6.col-md-4.col-lg-3(v-for='_ in partners' :key='_.name')
          PartnerItem(:value='_')
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import Partner from '~/types/Partner'

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  props: {
    partners: {
      type: Array as PropType<Partner[]>,
      default: null,
    },
  },
  setup () {
    return {
      faHandshake,
    }
  },
})
</script>

<style scoped lang="sass">
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
