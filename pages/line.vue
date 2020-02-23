<template lang="pug">
main
</template>

<script>
export default {
  head () {
    const description = '請在LINE應用程式上開啟「好友」分頁，點選畫面右上方用來加入好友的圖示，接著點選「行動條碼」，然後掃描此行動條碼'
    const title = `加入樂台計畫 Line App`
    
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { 'http-equiv': 'refresh', content: '0;url=https://line.me/R/ti/p/11FZvoRuwx' }
      ]
    }
  }
}
</script>

<style lang="sass">
</style>
