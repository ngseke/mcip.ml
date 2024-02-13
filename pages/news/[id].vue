<script setup lang="ts">
import { marked } from 'marked'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { fetch } from '~/utils/news'

definePageMeta({
  layout: 'news',
})

const route = useRoute()

const { data, error } = await useAsyncData(async () => await fetch(String(route.params.id)))

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
  })
}

const requestHeaderHost = useRequestHeader('host')
const host = process.server ? requestHeaderHost : window.location.host

useHead(() => {
  if (!data.value) return {}
  const { title, article, image } = data.value
  const description = article?.replace(title, '').replace(/\n/g, ' ').replace(/【/g, '').replace(/】/g, '').substring(0, 150).trim()

  return {
    title: `${title}`,
    titleTemplate: titleChunk => (titleChunk)
      ? `${titleChunk} - 樂台計畫`
      : '樂台計畫: 大專院校音樂賽事平台',
    meta: [
      { hid: 'description', name: 'description', content: description },
      { hid: 'og:description', property: 'og:description', content: description },
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:url', property: 'og:url', content: `https://${host}${route.path}` },
      { hid: 'og:image', property: 'og:image', content: image },
      { hid: 'og:title', property: 'og:title', content: `${title}` },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/4.0.0/github-markdown.min.css' },
    ],
  }
})
</script>

<template lang="pug">
main(itemscope itemtype='http://schema.org/Article' )
  Header(className='news')
    .container.news-title
      h1(v-if='data')
        NuxtLink.back-btn(to='/news' title='返回最新消息列表')
          FontAwesomeIcon(:icon='faAngleLeft')
        span(itemprop='headline') {{ data.title }}

  section(v-if='data')
    .container: .row.justify-content-center: .col-12.col-lg-10.col-xl-8
      Breadcrumb(:items='[ { name: `樂台計畫`, url: `/` }, { name: `最新消息`, url: `/news` }, { name: data.title }]')

      Author(:name='data.author' :date='data.timestamp')

      img.img-fluid.mb-3(v-if='data.image' :src='data.image' itemprop='image')
      article.markdown-body(itemprop='articleBody' v-html='marked(data.article ?? "")')
</template>

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
  flex: 0 0 auto
  &:active
    background-color: rgba(white, .2)
  @include media-breakpoint-down(xs)
    +wh(3rem)

.author
  margin-bottom: 2.5rem
</style>
