<template lang="pug">
div
  TheNavbar(hide-logo)
  main
    IndexSectionHeader
    //- IndexSectionAttention
    IndexSectionIntroduction
    IndexSectionCountTo
    IndexSectionDivider
    IndexSectionNews(:list='newsList' v-if='newsList')
    IndexSectionPartner(:partners='partners' v-if='partners')
    IndexSectionContactUs
</template>

<script>
import { fetchList } from '~/modules/news'
import { fetchPartners } from '~/modules/static-data'

export default {
  async asyncData () {
    const [newsList, partners] = (await Promise.allSettled([
      fetchList(),
      fetchPartners(),
    ])).map(({ status, value }) => (status === 'fulfilled')
      ? value // 若 api 呼叫成功返回值
      : false // 否則返回 false，直接隱藏該區塊
    )

    return { newsList, partners }
  },
}
</script>

<style lang="sass" scoped>
main::v-deep
  > section
    &:nth-child(even)
      background-color: #f8f8f8

    background-color: white
    overflow: hidden

    +py(4rem)
    @include media-breakpoint-down(sm)
      +py(3rem)
</style>
