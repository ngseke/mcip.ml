<template lang="pug">
main
  Header(className='news')
    SubpageTitle(zh='最新消息' en='News')

  section
    .container: .row.justify-content-center: .col-12.col-lg-10.col-xl-8
      Breadcrumb(:items='[ { name: `樂台計畫`, url: `/` }, { name: `最新消息` }]')
      NewsList(
        :list='list'
        :isEnd='isEnd'
        :isLoading='isLoading'
        @loadMore='loadMore'
      )
</template>

<script>
import { fetchListBrief } from '~/modules/news'
import SubpageTitle from '~/components/SubpageTitle.vue'

export default {
  components: {
    SubpageTitle,
  },
  layout: 'news',
  async asyncData ({ error }) {
    try {
      const list = await fetchListBrief(null, 5)
      return { list }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data () {
    return {
      list: null,
      isEnd: false,
      isLoading: false,
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
  methods: {
    async loadMore () {
      this.isLoading = true

      const { list } = this
      const { id } = list[list.length - 1]
      const newList = await fetchListBrief(id, 5)

      this.list = [
        ...this.list,
        ...await fetchListBrief(id, 5),
      ]

      if (!newList.length) this.isEnd = true
      this.isLoading = false
    },
  },
}
</script>
