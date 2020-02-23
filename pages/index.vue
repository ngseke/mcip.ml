<template lang="pug">
main
  Navbar
  Jumbotron
  LineApp
  Payment
  Backstage
  News(:list='list')
  Partner
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
  async asyncData (context) {
    const list = await news.fetchList()
    return { list }
  },
  data () {
    return {
      list: null,
    }
  },
}
</script>