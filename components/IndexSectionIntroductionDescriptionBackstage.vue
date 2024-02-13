<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const backstageFeatures = [
  '眾多賽事齊聚一堂，大幅增加活動曝光',
  '金流代收服務，即時向參賽者推播繳費結果',
  '跨平台系統，隨時隨地掌握報名狀況',
]
</script>

<template>
  <section>
    <SectionTitle>
      為音樂賽事量身打造的
      <br>
      解決方案
    </SectionTitle>
    <ul class="pl-4">
      <li v-for="feature in backstageFeatures" :key="feature">
        {{ feature }}
      </li>
    </ul>
    <div class="pl-1 mb-3">
      <a href="https://manage.mcip.app/" target="_blank">
        前往社團管理後台
        <FontAwesomeIcon class="mx-1" :icon="faExternalLinkAlt" />
      </a>
    </div>
  </section>
</template>

<style scoped lang="sass">
ul
  li
    margin-bottom: .3rem
</style>
