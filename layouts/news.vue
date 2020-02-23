<template lang="pug">
div
  Navbar(:items='navbar')
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
  },
  data () {
    this.navbar = [
      { name: `首頁`, url: `/` },
      { name: `最新消息`, url: `/news`, active: true }
    ]
    return {}
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
