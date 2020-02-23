<template lang="pug">
main(itemscope itemtype='http://schema.org/Article' )
  Jumbotron(:isNews='true')
    .container.news-title
      h1(v-if='data' v-cloak)
        nuxt-link.back-btn(to='/news' title='返回最新消息列表'): fa(icon='angle-left')
        span(itemprop='headline') {{ data.title }}
        
  section(v-if='data' v-cloak)
    .container: .row.justify-content-center: .col-12.col-lg-10.col-xl-8
      Breadcrumb(:items='[ { name: `樂台計畫`, url: `/` }, { name: `最新消息`, url: `/news` }, { name: data.title }]')
        
      Author(:name='data.author' :date='data.timestamp')
        
      img.img-fluid.mb-3(:src='data.image' v-if='data.image' itemprop='image')
      article(v-html='convertMarkdown(data.article)' itemprop='articleBody')
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'

import Author from '~/components/Author.vue'

import * as news from '~/plugins/news.js'

const marked = require('marked')

export default {
  layout: 'news',
  components: {
    Jumbotron,
    Breadcrumb,
    Author,
  },
  head () {
    const { title, article, image } = this.data
    const description = article.replace(title, '').replace(/\n/g, ' ').replace(/【/g, '').replace(/】/g, '').substr(0, 150).trim()
    
    return {
      title: `${title} - 最新消息`,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: image },
        { hid: 'og:title', property: 'og:title', content: `${title} - 最新消息` },
      ],
    }
  },
  async asyncData ({ params }) {
    const data = await news.fetch(params.id)
    return { data }
  },
  data () {
    return {
      data: null,
    }
  },
  methods: {
    convertMarkdown (_) {
      return marked(_)
    },
  }
}
</script>

<style scoped lang="sass">
header.news
  +py(4rem)
  padding-top: 5rem
  background-image: $news-gradient
  
.news-title
  h1
    display: flex
    align-items: center
    color: white
    font-size: 2rem

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
  @media (max-width: 575.98px)
    +wh(3rem)

section
  font-family: serif
      
.author
  margin-bottom: 2.5rem
  
p
  margin-bottom: 1rem
</style>
