<template lang="pug">
div
  Navbar(:items='navbar')
  main.faq(itemscope itemtype='https://schema.org/FAQPage')
    Jumbotron(className='faq' :isDense='true')
      .container.sub-page-title
        h1
          span.zh: span 常見問題
          small.en: span FAQ
    .meta
      .container: .row: .col-12
        Breadcrumb(:items='[ { name: `樂台計畫`, url: `/` }, { name: `常見問題` }]')

    .container
      .row.justify-content-center.align-items-start
        .col-12.col-lg-9.col-xl-8
          section(v-for='group in faqs' ref='sections')
            h2(:id='getIdString(group.title)')
              | {{ group.title }}
            .item(v-for='content in group.content' itemscope itemprop='mainEntity' itemtype='https://schema.org/Question')
              h3(:id='getIdString(content.question)' itemprop='name') {{ content.question }}
              div(itemscope itemprop='acceptedAnswer' itemtype='https://schema.org/Answer')
                div(v-html='convertMarkdown(content.answer)' itemprop='text')
        .col.col-xl-3.d-none.d-lg-flex.sticky-top
          ArticleNavbar.scroll-spy-navbar(:value='list')
</template>

<script>
import { throttle } from 'throttle-debounce'
import Navbar from '~/components/Navbar.vue'
import Jumbotron from '~/components/Jumbotron.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
import ArticleNavbar from '~/components/ArticleNavbar.vue'

import * as staticData from '~/plugins/static-data'

const marked = require('marked')

export default {
  components: {
    Navbar,
    Jumbotron,
    Breadcrumb,
    ArticleNavbar,
  },
  async asyncData ({ error }) {
    try {
      const faqs = await staticData.get('json/faq.json')

      return { faqs }
    } catch (e) {
      error({ statusCode: e.response.status })
    }
  },
  data () {
    this.navbar = [
      { name: 'News', to: '/news' },
      { name: 'FAQ', to: '/faq', active: true },
    ]
    return {
      list: null,
    }
  },
  head () {
    return {
      title: '常見問題',
      meta: [
        { hid: 'og:title', property: 'og:title', content: '常見問題 - 樂台計畫' },
      ],
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

      const throttled = throttle(100, () => {
        this.list = sections.map((section) => {
          const el = section.querySelector('h2')
          const children = Array.from(section.querySelectorAll('h3')).map(this.getSidebarItem)

          return { ...this.getSidebarItem(el), children }
        })
      })

      throttled()

      window.addEventListener('scroll', throttled)
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
      return _.replace(/ +/g, '-').replace(/\/+/g, '-')
    },
  },
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
