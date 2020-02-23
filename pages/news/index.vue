<template lang="pug">
main
  Jumbotron
    .container.news-title
      h1
        | 最新消息
        small News
  section
    .container: .row.justify-content-center: .col-12.col-lg-10.col-xl-8
      Breadcrumb(:items='[ { name: `樂台計畫`, url: `/` }, { name: `最新消息` }]')
      NewsList(:list='list')
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import NewsList from '~/components/news/NewsList.vue'

import * as news from '~/plugins/news.js'

export default {
  layout: 'news',
  components: {
    Jumbotron,
    NewsList,
    Breadcrumb,
  },
  async asyncData (context) {
    const list = await news.fetchList(null, 9999)
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
header
  +py(4rem)
  padding-top: 5rem
  background-image: $news-gradient
</style>
