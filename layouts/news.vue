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
      { name: 'News', to: '/news', active: true },
      { name: 'FAQ', to: '/faq' },
    ]
    return {}
  },
}
</script>
