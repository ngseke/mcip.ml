<template lang="pug">
section
  .container
    .row.justify-content-around
      .col-12.col-md-6.col-lg-5.order-2.order-md-1
        .screenshot-area
          img.mockup.unlimited(src='~/assets/img/screenshot/backstage.png' alt='後台管理介面' v-scroll-reveal)
      .col-12.col-md.col-lg.order-1.order-md-2.offset-lg-1
        .align-center-article
          h3 為賽事而生的管理後台
          p.pl-1
            | 樂台計畫提供各大專院校系統化管理解決方案
            br
            | 快速掌握賽事籌備狀況，即時處理報名資料
            br
            | 同步技術解決各單位資訊不對稱問題
</template>

<script>
export default {
  data () {
    return {}
  },
}
</script>

<style scoped lang="sass">
</style>