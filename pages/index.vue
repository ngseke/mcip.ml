<template lang="pug">
main
  Jumbotron
  LineApp
  Payment
  Backstage
</template>

<script>
import Jumbotron from '~/components/Jumbotron.vue'

import LineApp from '~/components/index/LineApp.vue'
import Payment from '~/components/index/Payment.vue'
import Backstage from '~/components/index/Backstage.vue'

export default {
  components: {
    Jumbotron,
    LineApp,
    Payment,
    Backstage,
  }
}
</script>

<style scoped lang="sass">
</style>
