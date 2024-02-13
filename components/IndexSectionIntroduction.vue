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
          <IndexSectionIntroductionMockupLineApp v-if="isLineApp" />
          <IndexSectionIntroductionMockupBackstage v-if="isBackstage" />
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
