<template lang="pug">
div
  TheNavbar(:items='navbar')
  nuxt
  TheFooter
</template>

<script>
export default {
  data () {
    this.navbar = [
      { name: 'News', to: '/news', active: true },
      { name: 'FAQ', to: '/faq' },
    ]
    return {}
  },
}
</script>
