<template lang="pug">
main
  Header(className='news')
    .container.sub-page-title
      h1
        span.zh: span 最新消息
        small.en: span News
  section
    .container: .row.justify-content-center: .col-12.col-lg-10.col-xl-8
      Breadcrumb(:items='[ { name: `樂台計畫`, url: `/` }, { name: `最新消息` }]')
      NewsList(:list='list')
</template>

<script>
import * as news from '~/modules/news.js'

export default {
  layout: 'news',
  async asyncData ({ error }) {
    try {
      const list = await news.fetchListBrief(null, 9999)
      return { list }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data () {
    return {
      list: null,
    }
  },
  head () {
    const description = '絕不錯過的第一手最新消息、音樂賽事快報，以及你最愛的音樂人不藏私介紹企劃，看樂台計畫就對了！'
    return {
      title: '最新消息',
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:title', property: 'og:title', content: '最新消息 - 樂台計畫' },
      ],
    }
  },
}
</script>
