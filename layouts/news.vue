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
      { name: `首頁`, to: `/` },
      { name: `最新消息`, to: `/news`, active: true },
      { name: '常見問題', to: '/faq' }
    ]
    return {}
  }
}
</script>