<script setup lang="ts">
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import type { NuxtError } from '#app'

defineProps<{
  error: NuxtError
}>()

useHead({
  title: '頁面不存在',
})
</script>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-8 text-center">
        <div class="not-found">
          <h1>{{ error.statusCode }}</h1>
          <h2>頁面不存在</h2>
          <GradientButton className="secondary" to="/">
            <FontAwesomeIcon class="mr-3" :icon="faArrowLeft" />返回首頁
          </GradientButton>
        </div>
      </div>
    </div>
    <TheFooter />
  </div>
</template>

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
