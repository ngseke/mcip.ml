<template lang="pug">
main
  Jumbotron
  LineApp
  Payment
  Backstage
  News(:list='list')
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue'

import LineApp from '~/components/index/LineApp.vue'
import Payment from '~/components/index/Payment.vue'
import Backstage from '~/components/index/Backstage.vue'
import News from '~/components/index/News.vue'

import * as news from '~/plugins/news.js'

export default {
  components: {
    Jumbotron,
    LineApp,
    Payment,
    Backstage,
    News,
  },
  async asyncData (context) {
    const list = await news.fetch()
    return { list }
  },
  data () {
    return {
      list: null,
    }
  },
}
</script>

<style scoped lang="sass">
</style>
