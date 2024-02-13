<script setup lang="ts">
</script>

<template>
  <div class="position-relative">
    <div class="peep" />
    <div class="mockup-area">
      <img
        class="backstage"
        src="~/assets/img/screenshot/mockup-backstage.png"
        alt="管理後台截圖"
      >
    </div>
  </div>
</template>

<style scoped lang="sass">
.peep
  position: absolute
  left: -11rem
  bottom: -13rem
  background: center / contain no-repeat url('~/assets/img/peep/man-using-notebook.svg')
  +wh(21rem, 30rem)
  @include media-breakpoint-down(lg)
    left: -13rem
  @include media-breakpoint-down(md)
    display: none

.mockup-area
  position: relative
  display: flex
  justify-content: center

.backstage
  height: 16rem
  width: auto
  max-width: none
  margin-left: 0
  border-radius: 1rem
  @include media-breakpoint-down(lg)
    height: 14rem

  @include media-breakpoint-down(md)
    height: 9rem

  @include media-breakpoint-down(sm)
    max-width: 20rem
    height: auto
</style>
