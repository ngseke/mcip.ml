<script setup lang="ts">
import { marked } from 'marked'
import { htmlToText } from 'html-to-text'

import { formatDate } from '~/utils/date'
import { type News } from '~/types/News'

/** 將 markdown 格式文字轉為純文字 */
const toPlainText = (markdown: string) => {
  const firstParagraph = markdown.substring(markdown.indexOf('\n') + 1)
  const html = marked(firstParagraph)
  return typeof html === 'string' ? htmlToText(html) : ''
}

const props = defineProps<{
  value: News
}>()

const title = computed(() => props.value.title)
const image = computed(() => props.value.image)
const link = computed(() => `/news/${props.value.id}`)
const article = computed(() => toPlainText(props.value.article ?? ''))
const author = computed(() => props.value.author)
const time = computed(() => formatDate(props.value.timestamp))
</script>

<template>
  <NuxtLink class="news-card" :to="link">
    <div class="row no-gutters align-items-center">
      <div class="col-auto">
        <Avatar class="mr-3" :src="image" size="4rem" />
      </div>

      <div class="col body">
        <div class="title" :title="title">
          {{ title }}
        </div>
        <div class="paragraph">
          {{ article }}
        </div>
        <div class="author">
          {{ author }}
          <span class="divider" />
          {{ time }}
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped lang="sass">
.news-card
  display: inline-flex
  margin-bottom: 1.5rem
  overflow: hidden
  transition: all .3s
  color: $black
  &:hover
    +floating-link
  &:active
    transform: scale(.97)

  .body
    display: flex
    flex-direction: column
    gap: .25rem
    .title
      +line-ellipsis(1)
      color: $secondary3
      font-weight: 500

    .paragraph
      +line-ellipsis
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
