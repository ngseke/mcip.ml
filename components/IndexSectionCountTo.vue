<template lang="pug">
section.container(v-scroll-reveal='{ beforeReveal: onCountReveal, duration: 0 }')
  .row.justify-content-around(v-cloak)
    .col-auto
      .count-to
        countTo.number(:start-val='1000' :end-val='userCount' suffix='+' ref='userCount' v-bind='countToOptions') {{ userCount }}+
        .info 樂台計畫總用戶數
    .col-auto
      .count-to
        countTo.number(:start-val='10' :end-val='partnerCount' ref='partnerCount' v-cloak v-bind='countToOptions') {{ partnerCount }}
        span.label 所
        .info
          | 合作院校社團 #[sup: a(v-scroll-to='{ el: `#partner`, offset: -60 }' href='#') *]
    .col-auto
      .count-to
        countTo.number(:start-val='10' :end-val='sessionCount' suffix='+' ref='sessionCount' v-cloak v-bind='countToOptions') {{ sessionCount }}+
        .info
          | 累計協辦賽次

    .col-12.text-right
      small.date 截至 2021 年 11 月
</template>

<script>
import countTo from 'vue-count-to'

export default {
  components: {
    countTo,
  },
  data () {
    this.countToOptions = {
      duration: 2000,
      autoplay: false,
    }
    this.userCount = 6000
    this.partnerCount = 25
    this.sessionCount = 60

    return {}
  },
  methods: {
    onCountReveal () {
      this.startCountTo()
    },
    startCountTo () {
      const { userCount, partnerCount, sessionCount } = this.$refs
      const refs = [userCount, partnerCount, sessionCount]

      refs.forEach(ref => ref?.start?.())
    },
  },
}
</script>

<style scoped lang="sass">
.count-to
  margin-bottom: 1rem
  .number
    display: inline-block
    font-size: 3.5rem
    font-family: roboto, Helvetica, Arial
    font-weight: 900
    margin: 0
    padding: 0
  .label
    margin-left: .5rem
    font-size: 1.5rem
    font-weight: 500
  .info
    font-weight: 500
    margin-top: -.5rem
    text-align: center

section
  position: relative
  overflow: visible
  &::after, &::before
    content: ''
    position: absolute
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    +wh(8rem)
  &::before
    left: -6rem
    top: .5rem
    background-image: url('~assets/img/peep/deco1.svg')
    @media (max-width: 575.98px)
      display: none

.date
  opacity: .7
</style>
