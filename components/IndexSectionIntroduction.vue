<script setup lang="ts">
import { type Role } from '~/types/Role'

const types: Role[] = [
  { name: '參賽者', value: 1 },
  { name: '學校社團', value: 2 },
]

const type = ref(types[0].value)

const isLineApp = computed(() => type.value === 1)
const isBackstage = computed(() => type.value === 2)
const transitionName = ref('slide')

watch(type, (newType, oldType) => {
  transitionName.value = newType > oldType ? 'slide' : 'slide-reverse'
})
</script>

<template>
  <section>
    <div class="container">
      <div class="row justify-content-around">
        <div class="col-12 col-md-5 col-lg-5 order-2 order-md-1 position-relative">
          <div v-show="isLineApp" class="peep-mobile" />
          <div v-show="isBackstage" class="peep-notebook" />

          <div class="screenshot-area">
            <img v-show="isLineApp" class="mockup-line-app" src="~/assets/img/screenshot/mockup-line-app.png" alt="Line App 畫面截圖">
            <img v-show="isBackstage" class="mockup-backstage" src="~/assets/img/screenshot/mockup-backstage.png" alt="管理後台截圖">
          </div>
        </div>

        <div class="col-12 col-md-7 col-lg-6 order-1 order-md-2">
          <RoleSwitcher v-model="type" :list="types" />

          <Transition :name="transitionName">
            <IndexSectionIntroductionDescriptionLineApp
              v-if="isLineApp"
              key="1"
            />
            <IndexSectionIntroductionDescriptionBackstage
              v-else-if="isBackstage"
              key="2"
            />
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
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
