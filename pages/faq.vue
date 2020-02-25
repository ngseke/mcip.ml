<template lang="pug">
div
  Navbar(:items='navbar')
  main.faq(itemscope itemtype='https://schema.org/FAQPage')
    Jumbotron(:isDense='true')
      .container.sub-page-title
        h1
          | 常見問題
          small FAQs
          
    .meta
      .container: .row.justify-content-center: .col-12.col-lg-10.col-xl-8
        Breadcrumb(:items='[ { name: `樂台計畫`, url: `/` }, { name: `常見問題` }]')
          
    section(v-for='group in faqs')
      .container: .row.justify-content-center: .col-12.col-lg-10.col-xl-8
        h2(:id='group.title')
          | {{ group.title }}
        .item(v-for='faq in group.faqs' itemscope itemprop='mainEntity' itemtype='https://schema.org/Question')
          h3(itemprop='name') {{ faq.question }}
          div(itemscope itemprop='acceptedAnswer' itemtype='https://schema.org/Answer')
            div(v-html='convertMarkdown(faq.answer)' itemprop='text')
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Jumbotron from '~/components/Jumbotron.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
 
import faqs from '~/assets/json/faqs.json'

const marked = require('marked')

export default {
  components: {
    Navbar,
    Jumbotron,
    Breadcrumb,
  },
  head () {
    return {
      title: '常見問題',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '常見問題 - 樂台計畫 - 大專院校民謠音樂比賽平台' },
      ],
    }
  },
  data () {
    this.navbar = [
      { name: `首頁`, to: `/` },
      { name: `最新消息`, to: '/news' },
      { name: '常見問題', to: '/faq', active: true }
    ]
    return { faqs }
  },
  mounted () {
  },
  methods: {
    convertMarkdown (_) {
      return marked(_)
    },
  }
}
</script>

<style scoped lang="sass">
main.faq
  background-color: #f8f8f8
  .meta
    padding-top: 4rem
  > section
    background-color: #f8f8f8
    +py(2rem)
    
  h2
    border-bottom: solid 1px #ddd
    padding-bottom: 1rem
    margin-bottom: 3rem
    .anchor
      margin-left: .5rem
      
  .item
    margin-bottom: 3rem
    h3
      font-size: 1.5rem
      margin-bottom: .75rem
    ::v-deep li
      margin-bottom: .5rem
</style>