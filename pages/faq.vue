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
      .container: .row: .col-12
        Breadcrumb(:items='[ { name: `樂台計畫`, url: `/` }, { name: `常見問題` }]')
          
    .container
      .row.justify-content-center.align-items-start
        .col-12.col-lg-9.col-xl-8
          section(v-for='group in faqs' ref='sections')
            h2(:id='getIdString(group.title)')
              | {{ group.title }}
            .item(v-for='faq in group.faqs' itemscope itemprop='mainEntity' itemtype='https://schema.org/Question')
              h3(:id='getIdString(faq.question)' itemprop='name') {{ faq.question }}
              div(itemscope itemprop='acceptedAnswer' itemtype='https://schema.org/Answer')
                div(v-html='convertMarkdown(faq.answer)' itemprop='text')
        .col.col-xl-3.d-none.d-lg-flex.sticky-top
          ArticleNavbar.scroll-spy-navbar(:value='list')
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Jumbotron from '~/components/Jumbotron.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import ArticleNavbar from '~/components/ArticleNavbar.vue'

import faqs from '~/assets/json/faqs.json'

import { throttle } from 'throttle-debounce'
const marked = require('marked')

export default {
  components: {
    Navbar,
    Jumbotron,
    Breadcrumb,
    ArticleNavbar,
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
    this.faqs = faqs
    return {
      list: null,
    }
  },
  mounted () {
    this.setScrollEvent()
  },
  methods: {
    convertMarkdown (_) {
      return marked(_)
    },
    setScrollEvent () {
      const { sections } = this.$refs

      const throttled = throttle(50, () => {
        this.list = sections.map(section => {
          const el = section.querySelector('h2')
          const children = Array.from(section.querySelectorAll('h3')).map(this.getSidebarItem)

          return { ...this.getSidebarItem(el), children }
        })
        return throttled
      })
      
      window.addEventListener('scroll', throttled())
      this.$once('hook:beforeDestroy', () => window.removeEventListener('scroll', throttled))
    },
    getSidebarItem (el) {
      return {
        id: `#${el.getAttribute('id')}`,
        title: el.innerText,
        top: el.getBoundingClientRect().top - 95,
      }
    },
    getIdString (_) {
      return _.replace(/ +/g, "-").replace(/\/+/g, "-")
    },
  }
}
</script>

<style scoped lang="sass">
main.faq
  background-color: #f8f8f8
  .meta
    padding-top: 4rem
  section
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
      
.sticky-top
  top: 5rem
</style>