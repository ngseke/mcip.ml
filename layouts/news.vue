<template lang="pug">
div
  Navbar(:items='[{ name: `首頁`, url: `/` }, { name: `最新消息`, url: `/news`, active: true }]')
  nuxt
  Footer
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
 
export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style lang="sass">
@import "@/assets/sass/style"

.news-title
  h1
    color: white
    font-size: 3rem
    small
      font-size: 70%
      margin-left: .5rem
</style>
