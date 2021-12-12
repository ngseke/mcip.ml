<template lang="pug">
nuxt-link.news-card(:to='link')
  .row.no-gutters.align-items-center
    .col-auto
      img.img(:src='image')
    .col.body
      .title(:title='title') {{ title }}
      .paragraph {{ article }}
      .author
        | {{ author }}
        span.divider
        | {{ time }}
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api'

import { marked } from 'marked'
import { htmlToText } from 'html-to-text'

import { formatDate } from '~/modules/date'
import News from '~/types/News'

/** 將 markdown 格式文字轉為純文字 */
const toPlainText = (markdown: string) => {
  const firstParagraph = markdown.substring(markdown.indexOf('\n') + 1)
  return htmlToText(marked(firstParagraph))
}

export default defineComponent({
  props: {
    value: {
      type: Object as PropType<News>,
      default: null,
    },
  },
  setup (props) {
    const title = computed(() => props.value.title)
    const image = computed(() => props.value.image)
    const link = computed(() => `/news/${props.value.id}`)
    const article = computed(() => toPlainText(props.value.article!))
    const author = computed(() => props.value.author)
    const time = computed(() => formatDate(props.value.timestamp))

    return { title, image, link, article, author, time }
  },
})
</script>

<style scoped lang="sass">
.news-card
  display: inline-flex
  margin-bottom: 1.5rem
  overflow: hidden
  transition: all .3s
  color: $black
  border-radius: 1.5rem
  background-color: white
  &:hover
    +floating-link
  &:active
    transform: scale(.97)

  img.img
    +wh(4rem)
    border-radius: 1rem
    object-fit: cover
    margin-right: 1rem

  .body
    display: flex
    flex-direction: column
    .title
      +line-ellipsis(1)
      margin-bottom: .25rem
      color: $secondary3
      font-weight: 500

    .paragraph
      +line-ellipsis
      margin-bottom: .3rem
      font-size: .8rem
    .author
      font-size: .8rem
      opacity: .7
      .divider
        &::before
          content: ' • '
      &::before
        content: '—— '
</style>
