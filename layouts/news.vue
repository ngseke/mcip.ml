<template lang="pug">
div
  TheNavbar(:items='navbarItems')
  nuxt
  TheFooter
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

const navbarItems = [
  { name: 'News', to: '/news', active: true },
  { name: 'FAQ', to: '/faq' },
]

export default defineComponent({
  setup () {
    return {
      navbarItems,
    }
  },
})
</script>
