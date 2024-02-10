<template lang="pug">
section: .container
  SectionTitle.mb-5
    nuxt-link.title(to='/news' title='查看更多最新消息')
      FontAwesomeIcon.mr-3(:icon='faNewspaper')
      | 最新消息
      span.icon.ml-3 ➔

  .row
    .col-12.col-md-6.col-lg-4(v-for='item in list')
      NewsItem(:value='item')

    .col-12.text-right
      nuxt-link(to='/news')
        | 查看更多
        FontAwesomeIcon.ml-3(:icon='faChevronRight')
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import NewsList from '~/types/NewsList'

export default defineComponent({
  components: {
    FontAwesomeIcon,
  },
  props: {
    list: {
      type: Array as PropType<NewsList>,
      default: null,
    },
  },
  setup () {
    return {
      faNewspaper,
      faChevronRight,
    }
  },
})
</script>

<style scoped lang="sass">
a.title
  transition: all .2s
  display: inline-block
  color: $black
  +floating-link
</style>
