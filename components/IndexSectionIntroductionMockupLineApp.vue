<script setup lang="ts">
</script>

<template>
  <div class="position-relative">
    <div class="peep" />
    <div class="mockup-area">
      <img
        class="line-app"
        src="~/assets/img/screenshot/mockup-line-app.png"
        alt="Line App 畫面截圖"
      >
      <img
        class="qrcode"
        src="~/assets/img/line-app-qrcode-shorthand.png"
        alt="樂台計畫 LINE App QRCode"
      >
    </div>
  </div>
</template>

<style scoped lang="sass">
.peep
  position: absolute
  background: center / contain no-repeat url('~/assets/img/peep/man-with-phone.svg')
  left: -9rem
  bottom: -4.5rem
  +wh(16rem, 100%)
  @include media-breakpoint-down(md)
    display: none
  @include media-breakpoint-down(sm)
    display: block
    +wh(12rem, 100%)
    left: 0rem

.mockup-area
  position: relative
  display: flex
  justify-content: center

.line-app
  +wh(100%, auto)
  max-width: 13rem
  @include media-breakpoint-down(sm)
    transform: translateX(30%)

.qrcode
  +wh(10rem)
  position: absolute
  background-color: white
  border: 1rem solid white
  border-radius: 1rem
  right: 0
  bottom: 0
  box-shadow: $big-btn-shadow
  @include media-breakpoint-down(md)
    +wh(8rem)
    border-radius: .75rem
  @include media-breakpoint-down(sm)
    display: none
</style>
