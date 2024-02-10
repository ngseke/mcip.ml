<template lang="pug">
.container
  .row.justify-content-center.align-items-center
    .col-12.col-md-8.text-center
      .not-found
        h1 {{ error.statusCode }}
        h2 頁面不存在
        GradientButton(className='secondary' to='/')
          FontAwesomeIcon.mr-3(:icon='faArrowLeft')
          | 返回首頁
</template>

<script>
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon,
  },
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  setup () {
    return {
      faArrowLeft,
    }
  },
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
    -webkit-background-clip: text
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
