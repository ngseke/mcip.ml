<template lang="pug">
div
  Navbar
  main
    Jumbotron
    LineApp
    Payment
    Backstage
    News(:list='newsList')
    Partner(:partners='partners')
    ContactUs
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Jumbotron from '~/components/Jumbotron.vue'

import LineApp from '~/components/index/LineApp.vue'
import Payment from '~/components/index/Payment.vue'
import Backstage from '~/components/index/Backstage.vue'
import News from '~/components/index/News.vue'
import Partner from '~/components/index/Partner.vue'
import ContactUs from '~/components/index/ContactUs.vue'

import * as news from '~/plugins/news.js'
import * as staticData from '~/plugins/static-data'

export default {
  components: {
    Navbar,
    Jumbotron,
    LineApp,
    Payment,
    Backstage,
    News,
    Partner,
    ContactUs,
  },
  async asyncData ({ error }) {
    try {
      const [newsList, partners] = await Promise.all([
        news.fetchList(),
        staticData.get('json/partner.json')
      ])
      
      return { newsList, partners }
    } catch (e) {
      error({ statusCode: e.response.status })
    }
  },
}
</script>