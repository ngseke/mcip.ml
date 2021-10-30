<template lang="pug">
div
  Navbar(hide-logo)
  main
    Jumbotron
    //- Attention
    LineApp
    Divider
    //- Payment
    //- Backstage
    News(:list='newsList' v-if='newsList')
    Partner(:partners='partners' v-if='partners')
    ContactUs
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Jumbotron from '~/components/Jumbotron.vue'

import LineApp from '~/components/index/LineApp.vue'
import Divider from '~/components/index/Divider.vue'
import Payment from '~/components/index/Payment.vue'
import Backstage from '~/components/index/Backstage.vue'
import News from '~/components/index/News.vue'
import Partner from '~/components/index/Partner.vue'
import ContactUs from '~/components/index/ContactUs.vue'
import Attention from '~/components/index/Attention.vue'

import * as news from '~/plugins/news.js'
import * as staticData from '~/plugins/static-data'

export default {
  components: {
    Navbar,
    Jumbotron,
    Divider,
    LineApp,
    Payment,
    Backstage,
    News,
    Partner,
    ContactUs,
    Attention,
  },
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
