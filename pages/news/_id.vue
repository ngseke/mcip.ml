<template lang="pug">
main(itemscope itemtype='http://schema.org/Article' )
  Header(className='news')
    .container.news-title
      h1(v-if='data' v-cloak)
        nuxt-link.back-btn(to='/news' title='返回最新消息列表'): fa(icon='angle-left')
        span(itemprop='headline') {{ data.title }}

  section(v-if='data' v-cloak)
    .container: .row.justify-content-center: .col-12.col-lg-10.col-xl-8
      Breadcrumb(:items='[ { name: `樂台計畫`, url: `/` }, { name: `最新消息`, url: `/news` }, { name: data.title }]')

      Author(:name='data.author' :date='data.timestamp')

      img.img-fluid.mb-3(:src='data.image' v-if='data.image' itemprop='image')
      article.markdown-body(v-html='convertMarkdown(data.article)' itemprop='articleBody')
</template>

<script>
import marked from 'marked'
import { fetch } from '~/modules/news'

export default {
  layout: 'news',
  async asyncData ({ params, error, req }) {
    try {
      const data = await fetch(params.id)
      const host = process.server ? req.headers.host : window.location.host
      return { data, host }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  data () {
    return {
      data: null,
    }
  },
  head () {
    const { title, article, image } = this.data
    const description = article.replace(title, '').replace(/\n/g, ' ').replace(/【/g, '').replace(/】/g, '').substr(0, 150).trim()

    return {
      title: `${title}`,
      titleTemplate: titleChunk => (titleChunk)
        ? `${titleChunk} - 樂台計畫`
        : '樂台計畫 - 大專院校音樂賽事平台',
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: `https://${this.host}${this.$nuxt.$route.path}` },
        { hid: 'og:image', property: 'og:image', content: image },
        { hid: 'og:title', property: 'og:title', content: `${title}` },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css' },
      ],
    }
  },
  methods: {
    convertMarkdown (_) {
      return marked(_)
    },
  },
}
</script>

<style scoped lang="sass">
header.news
  +py(4rem)
  padding-top: 5rem
  background-image: $news-gradient

.news-title
  +text-shadow
  h1
    display: flex
    align-items: center
    color: white
    font-size: 2rem
    overflow: hidden

.back-btn
  +flex-center
  +wh(4rem)
  color: white
  padding: .5rem
  border: none
  border-radius: 100rem
  outline: none
  transition: background-color .2s
  font-size: 1.5rem
  flex: 0 0 auto
  &:active
    background-color: rgba(white, .2)
  @include media-breakpoint-down(xs)
    +wh(3rem)

.author
  margin-bottom: 2.5rem
</style>
