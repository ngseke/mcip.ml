<template lang="pug">
.container
  .row.justify-content-center.align-items-center
    .col-12.col-md-8.text-center
      .not-found
        h1 {{ error.statusCode }}
        h2 頁面不存在
        nuxt-link.gradient-btn.secondary(to='/')
          fa.mr-3(icon='arrow-left')
          | 返回首頁
</template>

<script>
export default {
  layout: 'default',
  props: ['error'],
  head: {
    title: '頁面不存在',
  },
}
</script>

<style scoped lang="sass">
.not-found
  min-height: 70vh
  +flex-center
  flex-direction: column
  h1, h2
    display: inline-block
    color: transparent
    background-clip: text
  h1
    font-size: 10rem
    font-weight: 900
    background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)

  h2
    font-size: 2rem
    font-weight: 600
    background-image: linear-gradient(to right, #434343 0%, black 100%)
    margin-bottom: 3rem
</style>
