<template lang="pug">
ul.article-list
  li(v-for='i in list')
    nuxt-link(:to='`/news/${i.id}`')
      .title {{ i.title }}
      small {{ formatDate(i.timestamp, 'YYYY年MM月DD日') }}
  li(ref='loadMoreElement' v-if='!isEnd')
    FontAwesomeIcon.icon(:icon='faCircleNotch' spin v-if='isLoading')
    a(href='#' @click.prevent='loadMore' v-else) 載入更多
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, PropType, ref } from '@nuxtjs/composition-api'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { formatDate } from '~/modules/date'
import NewsList from '~/types/NewsList'

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  props: {
    list: {
      default: null,
      type: Array as PropType<NewsList | null>,
    },
    isEnd: {
      default: false,
      type: Boolean,
    },
    isLoading: {
      default: false,
      type: Boolean,
    },
  },
  setup (props, { emit }) {
    const loadMore = () => {
      if (!props.isLoading) emit('loadMore')
    }

    const loadMoreElement = ref()
    onMounted(() => {
      const observer = new IntersectionObserver(loadMore, { threshold: 1 })
      observer.observe(loadMoreElement.value)
      onBeforeUnmount(() => observer.disconnect())
    })
    return {
      loadMoreElement,
      loadMore,
      formatDate,
      faCircleNotch,
    }
  },
})
</script>

<style lang="sass" scoped>
ul.article-list
  list-style: none
  padding: 0
  li
    padding: 1rem
    font-size: 1.3rem
    a
      display: block
      +floating-link
      .title
        padding-bottom: .25rem
        font-weight: 500
        margin: 0
        color: transparent
        background-clip: text
        -webkit-background-clip: text
        background-image: $news-gradient
      small
        font-size: .7
        color: rgba(#666, 1)

  li:not(:last-child)
    border-bottom: solid 1px rgba(#ccc, .5)

.icon
  color: $black
</style>
