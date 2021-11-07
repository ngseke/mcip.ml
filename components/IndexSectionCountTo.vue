<template lang="pug">
section.container(v-scroll-reveal='{ beforeReveal: startCountTo, duration: 0 }')
  .row.justify-content-around(v-cloak)
    .col-auto(v-for='item in list')
      .count-to
        countTo.number(
          :start-val='10'
          :end-val='item.value'
          :suffix='item.isApproximate ? "+" : ""'
          ref='countToElements'
          v-bind='countToOptions'
          v-cloak
        ) {{ item.value }}{{ item.isApproximate ? "+" : "" }}
        span.suffix(v-if='item.suffix') {{ item.suffix }}
        .label {{ item.label }}

    .col-12.text-right
      small.date 截至 2021 年 11 月
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import countTo from 'vue-count-to'

const countToOptions = { duration: 1500, autoplay: false }
const list = [
  {
    label: '樂台計畫總用戶數',
    value: 6000,
    isApproximate: true,
  },
  {
    label: '合作院校社團',
    value: 25,
    suffix: '所',
  },
  {
    label: '累計協辦賽次',
    value: 60,
    isApproximate: true,
  },
]

export default defineComponent({
  components: {
    countTo,
  },
  setup () {
    const countToElements = ref()
    const startCountTo = () => {
      countToElements.value?.forEach(ref => ref?.start?.())
    }

    return {
      countToOptions,
      list,
      countToElements,
      startCountTo,
    }
  },
})
</script>

<style scoped lang="sass">
section
  position: relative
  overflow: visible !important
  &::before
    content: ''
    position: absolute
    background: center / contain no-repeat url('~assets/img/peep/deco1.svg')
    +wh(8rem)
    left: -6rem
    top: .5rem
    @include media-breakpoint-down(xs)
      display: none

.count-to
  margin-bottom: 1rem

.number
  display: inline-block
  font-size: 3.5rem
  font-family: roboto, Helvetica, Arial
  font-weight: 900
  margin: 0
  padding: 0
.suffix
  margin-left: .5rem
  font-size: 1.5rem
  font-weight: 500
.label
  font-weight: 500
  margin-top: -.5rem
  text-align: center

.date
  opacity: .7
</style>
