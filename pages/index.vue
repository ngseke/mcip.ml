<template lang="pug">
div
  TheNavbar(hide-logo)
  main
    IndexSectionHeader
    //- IndexSectionAttention
    IndexSectionIntroduction
    IndexSectionCountTo
    IndexSectionDivider
    //- IndexSectionPayment
    //- IndexSectionBackstage
    IndexSectionNews(:list='newsList' v-if='newsList')
    IndexSectionPartner(:partners='partners' v-if='partners')
    IndexSectionContactUs
</template>

<script>
import * as news from '~/plugins/news.js'
import * as staticData from '~/plugins/static-data'

export default {
  async asyncData () {
    const [newsList, partners] = (await Promise.allSettled([
      news.fetchList(),
      staticData.get('json/partner.json'),
    ])).map(({ status, value }) => (status === 'fulfilled')
      ? value // 若 api 呼叫成功返回值
      : false // 否則返回 false，直接隱藏該區塊
    )

    return { newsList, partners }
  },
}
</script>
