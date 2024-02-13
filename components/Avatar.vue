<script setup lang="ts">
const props = defineProps<{
  src?: string
  size?: string
}>()

const imgRef = ref<HTMLImageElement | null>()

const isImageLoaded = ref(false)

function handleLoad () {
  isImageLoaded.value = true
}

onMounted(() => {
  if (imgRef.value?.complete) handleLoad()
})

const style = computed(() => ({
  height: props.size,
  width: props.size,
}))
</script>

<template>
  <div class="wrapper" :style="style" :class="{ hide: !isImageLoaded }">
    <img ref="imgRef" :src="src" @load="handleLoad">
  </div>
</template>

<style scoped lang="sass">
.wrapper
  overflow: hidden
  border-radius: 1rem
  background-color: rgba($black, .1)
  +wh(3rem)
  img
    +wh(100%)
    object-fit: cover
    transition: all .5s
  &.hide img
    opacity: 0
</style>
