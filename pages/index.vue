<template lang="pug">
main
  Jumbotron
  LineApp
  Payment
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue'

import LineApp from '~/components/index/LineApp.vue'
import Payment from '~/components/index/Payment.vue'

export default {
  components: {
    Jumbotron,
    LineApp,
    Payment,
  }
}
</script>

<style scoped lang="sass">
</style>
