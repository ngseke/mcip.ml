<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { type Role } from '~/types/Role'

const backstageFeatures = [
  '眾多賽事齊聚一堂，大幅增加活動曝光',
  '金流代收服務，即時向參賽者推播繳費結果',
  '跨平台系統，隨時隨地掌握報名狀況',
]

const types: Role[] = [
  { name: '參賽者', value: 1 },
  { name: '學校社團', value: 2 },
]

const type = ref(types[0].value)

const isLineApp = computed(() => type.value === 1)
const isBackstage = computed(() => type.value === 2)
const isCapybara = computed(() => type.value === 3)

const route = useRoute()
const computedTypes = computed(() => {
  const shouldShowEasterEgg = Object.keys(route.query)
    .map(i => i.toLowerCase().trim())
    .includes('capybara')

  return shouldShowEasterEgg
    ? [...types, { name: '水豚', value: 3 }]
    : types
})

const transitionName = ref('slide')

watch(type, (newType, oldType) => {
  transitionName.value = newType > oldType ? 'slide' : 'slide-reverse'
})
</script>

<template>
  <section class="introduction">
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-12 col-md-5 col-lg-5 order-2 order-md-1 position-relative">
          <div v-show="isLineApp" class="peep-mobile" />
          <div v-show="isBackstage" class="peep-notebook" />
          <div class="screenshot-area">
            <img v-show="isLineApp" class="mockup-line-app" src="~/assets/img/screenshot/mockup-line-app.png" alt="Line App 畫面截圖">
            <img v-show="isBackstage" class="mockup-backstage" src="~/assets/img/screenshot/mockup-backstage.png" alt="管理後台截圖">
            <img v-show="isCapybara" class="mockup-backstage" src="~/assets/img/screenshot/capybara.jpg">
          </div>
        </div>

        <div class="col-12 col-md-7 col-lg-6 order-1 order-md-2">
          <RoleSwitcher v-model="type" :list="computedTypes" />

          <Transition :name="transitionName">
            <section v-if="isLineApp" key="1">
              <SectionTitle>透過樂台計畫<br>3 分鐘即完成報名</SectionTitle>
              <p>不需額外下載 App，用 LINE 就能立刻加入</p>
              <div class="mb-4 d-flex flex-column d-md-block">
                <GradientButton className="line" target="_blank" to="/line">
                  加入 LINE 官方帳號
                </GradientButton>
              </div>
              <div class="d-none d-md-inline-block">
                <img class="qrcode" src="~/assets/img/line-app-qrcode-shorthand.png" alt="樂台計畫 LINE App QRCode">
              </div>
            </section>

            <section v-else-if="isBackstage" key="2">
              <SectionTitle>為音樂賽事量身打造的<br>解決方案</SectionTitle>
              <ul class="pl-4">
                <li v-for="feature in backstageFeatures" :key="feature">
                  {{ feature }}
                </li>
              </ul>
              <div class="pl-1 mb-3">
                <a href="https://manage.mcip.app/" target="_blank">前往社團管理後台
                  <FontAwesomeIcon class="mx-1" :icon="faExternalLinkAlt" /></a>
              </div>
            </section>

            <section v-else-if="isCapybara" key="3">
              <SectionTitle>水豚</SectionTitle>
              <p>水豚是水豚屬下僅存的兩種生物之一。牠是一種半水棲的食草動物，也是世界上體型最大的齧齒類動物。原產於南美洲除了智利以外的所有稀樹草原和叢林中。</p>
            </section>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.introduction
  position: relative
  overflow: hidden

.qrcode
  width: 100%
  height: auto
  max-width: 7rem
  margin-right: 2rem

.peep-mobile
  position: absolute
  left: -9rem
  bottom: -4.5rem
  background: center / contain no-repeat url('~/assets/img/peep/man-with-phone.svg')
  +wh(16rem, 100%)
  @include media-breakpoint-down(md)
    display: none
  @include media-breakpoint-down(sm)
    display: block
    +wh(12rem, 100%)
    left: 0rem

.peep-notebook
  position: absolute
  left: -11rem
  bottom: -9rem
  background: center / contain no-repeat url('~/assets/img/peep/man-using-notebook.svg')
  +wh(21rem, 30rem)
  @include media-breakpoint-down(lg)
    left: -13rem
  @include media-breakpoint-down(md)
    display: none

.screenshot-area
  position: relative
  display: flex
  justify-content: center

  img
    +wh(100%, auto)
    display: inline-block
    &.mockup-line-app
      max-width: 15rem
      @include media-breakpoint-down(sm)
        transform: translateX(30%)

    &.mockup-backstage
      height: 16rem
      width: auto
      max-width: none
      margin-left: 0
      border-radius: 1rem
      @include media-breakpoint-down(lg)
        margin-left: -2rem

      @include media-breakpoint-down(md)
        height: 9rem

      @include media-breakpoint-down(sm)
        max-width: 20rem
        height: auto

ul
  li
    margin-bottom: .3rem

$distance: 3rem
// 切換區塊的動畫
.slide, .slide-reverse
  &-enter-active
    transition: $transition
    transition-delay: .05s
  &-leave-active
    transition: $transition
    position: absolute
  &-enter-from, &-leave-to
    opacity: 0

.slide
  &-enter-from
    transform: translateX($distance)
  &-leave-to
    transform: translateX(-$distance)

.slide-reverse
  &-enter-from
    transform: translateX(-$distance)
  &-leave-to
    transform: translateX($distance)

</style>
